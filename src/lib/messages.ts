/**
 * Mensajes del formulario de contacto.
 *
 * Mismo patron que los pedidos: un archivo JSON Lines en
 * `store/data/mensajes.jsonl`, una linea por mensaje, con lock de archivo y
 * escritura atomica (temporal + rename) para que dos mensajes simultaneos no
 * se pisen.
 */

import { promises as fs } from "node:fs";
import path from "node:path";

import { getDataDir } from "@/lib/orders";

export type ContactMessage = {
  /** id del mensaje (MSG-XXXX-XXXX) */
  id: string;
  /** ISO date de creacion */
  createdAt: string;
  name: string;
  email: string;
  phone: string;
  /** numero de pedido del cliente (opcional), formato TDR-XXXX-XXXX */
  orderId: string;
  /** motivo elegido por el cliente (opcional) */
  subject: string;
  /** texto del mensaje */
  message: string;
};

const LOCK_TIMEOUT_MS = 10_000;
const LOCK_STALE_MS = 60_000;
const FILE_ENCODING = "utf8";

const sleep = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Archivo donde se guardan los mensajes.
 *
 * Usa el mismo directorio que los pedidos (`ORDERS_DIR` en produccion,
 * `/tmp` en Vercel, `<raiz>/data` en local).
 */
export function getMessagesFile(): string {
  const fromEnv = process.env.MESSAGES_FILE;
  if (fromEnv) return path.resolve(fromEnv);
  return path.join(getDataDir(), "mensajes.jsonl");
}

function getLockFile(): string {
  return `${getMessagesFile()}.lock`;
}

async function acquireLock(lockPath: string): Promise<() => Promise<void>> {
  const deadline = Date.now() + LOCK_TIMEOUT_MS;

  for (;;) {
    try {
      const handle = await fs.open(lockPath, "wx");
      await handle.close();

      return async () => {
        await fs.rm(lockPath, { force: true });
      };
    } catch {
      // Si el lock lleva mucho tiempo existiendo, el proceso que lo creo
      // murio: lo liberamos para no bloquear el formulario para siempre.
      try {
        const stat = await fs.stat(lockPath);
        if (Date.now() - stat.mtimeMs > LOCK_STALE_MS) {
          await fs.rm(lockPath, { force: true });
          continue;
        }
      } catch {
        // el lock ya no existe: reintentamos tomarlo
      }

      if (Date.now() > deadline) {
        throw new Error("No se pudo obtener el lock de mensajes (timeout).");
      }

      await sleep(40 + Math.random() * 90);
    }
  }
}

async function withLock<T>(fn: () => Promise<T>): Promise<T> {
  const lockPath = getLockFile();
  await fs.mkdir(path.dirname(lockPath), { recursive: true });

  const release = await acquireLock(lockPath);

  try {
    return await fn();
  } finally {
    await release();
  }
}

function normalizeMessage(input: unknown): ContactMessage | undefined {
  if (!input || typeof input !== "object") return undefined;

  const raw = input as Record<string, unknown>;
  const id = typeof raw.id === "string" ? raw.id.trim() : "";
  if (!id) return undefined;

  const text = (value: unknown): string =>
    typeof value === "string" ? value : "";

  return {
    id,
    createdAt: text(raw.createdAt) || new Date().toISOString(),
    name: text(raw.name),
    email: text(raw.email),
    phone: text(raw.phone),
    orderId: text(raw.orderId),
    subject: text(raw.subject),
    message: text(raw.message),
  };
}

async function readAll(): Promise<ContactMessage[]> {
  const file = getMessagesFile();

  let raw: string;
  try {
    raw = await fs.readFile(file, FILE_ENCODING);
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return [];
    throw error;
  }

  const messages: ContactMessage[] = [];

  for (const line of raw.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    try {
      const message = normalizeMessage(JSON.parse(trimmed));
      if (message) messages.push(message);
    } catch {
      // linea corrupta: la saltamos para no perder el resto del archivo
    }
  }

  return messages;
}

async function writeAll(messages: ContactMessage[]): Promise<void> {
  const file = getMessagesFile();
  await fs.mkdir(path.dirname(file), { recursive: true });

  const body =
    messages.length > 0
      ? `${messages.map((message) => JSON.stringify(message)).join("\n")}\n`
      : "";

  const tmp = `${file}.tmp-${process.pid}-${Date.now()}-${Math.random()
    .toString(36)
    .slice(2, 8)}`;

  await fs.writeFile(tmp, body, FILE_ENCODING);
  await fs.rename(tmp, file);
}

/** Guarda un mensaje y lo devuelve. */
export async function appendMessage(
  message: ContactMessage,
): Promise<ContactMessage> {
  return withLock(async () => {
    const messages = await readAll();
    messages.push(message);
    await writeAll(messages);
    return message;
  });
}

/** Lista los mensajes guardados (mas recientes primero). */
export async function listMessages(): Promise<ContactMessage[]> {
  const messages = await readAll();

  return [...messages].sort((a, b) => {
    const diff = Date.parse(b.createdAt) - Date.parse(a.createdAt);
    if (Number.isFinite(diff) && diff !== 0) return diff;
    return 0;
  });
}
