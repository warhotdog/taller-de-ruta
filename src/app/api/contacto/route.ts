import { NextResponse } from "next/server";

import { appendMessage, type ContactMessage } from "@/lib/messages";
import { buildContactMessage, buildWhatsappLink } from "@/lib/whatsapp";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Formulario de contacto.
 *
 * Guarda el mensaje en `store/data/mensajes.jsonl` y devuelve un enlace de
 * WhatsApp con el texto ya escrito, para que el cliente lo envie al instante
 * sin perder lo que escribio.
 *
 * POST /api/contacto
 *   body: { name, email, phone, orderId, subject, message }
 *   -> { ok: true, id, waLink }
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;
const PHONE_RE = /^[0-9+\s()-]{10,20}$/;
const ORDER_RE = /^TDR-[A-Z0-9]+-[A-Z0-9]+$/i;

type Fields = {
  name?: string;
  email?: string;
  phone?: string;
  orderId?: string;
  subject?: string;
  message?: string;
};

function buildMessageId(): string {
  const stamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `MSG-${stamp}-${random}`;
}

export async function POST(request: Request) {
  // ---- 1. Leer el cuerpo -------------------------------------------------
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Solicitud invalida." },
      { status: 400 },
    );
  }

  const payload = (body ?? {}) as Record<string, unknown>;

  const read = (key: string, max: number): string =>
    typeof payload[key] === "string"
      ? (payload[key] as string).trim().slice(0, max)
      : "";

  const name = read("name", 80);
  const email = read("email", 120).toLowerCase();
  const phone = read("phone", 20);
  const orderId = read("orderId", 24).toUpperCase().replace(/\s+/g, "");
  const subject = read("subject", 80);
  const message = read("message", 2000);

  // ---- 2. Validar --------------------------------------------------------
  const errors: Fields = {};

  if (name.length < 3) errors.name = "Escribe tu nombre.";
  if (email.length > 0 && !EMAIL_RE.test(email)) {
    errors.email = "Ese correo no se ve bien. Revisalo o dejalo vacio.";
  }
  if (phone.length > 0 && !PHONE_RE.test(phone)) {
    errors.phone = "Ese telefono no se ve bien. Revisalo o dejalo vacio.";
  }
  if (orderId.length > 0 && !ORDER_RE.test(orderId)) {
    errors.orderId = "El numero de pedido se ve asi: TDR-XXXX-XXXX.";
  }
  if (message.length < 10) {
    errors.message = "Cuentanos un poco mas para poder ayudarte.";
  }

  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { error: "Revisa los datos del formulario.", fields: errors },
      { status: 422 },
    );
  }

  // ---- 3. Guardar el mensaje ---------------------------------------------
  const id = buildMessageId();

  const record: ContactMessage = {
    id,
    createdAt: new Date().toISOString(),
    name,
    email,
    phone,
    orderId,
    subject,
    message,
  };

  try {
    await appendMessage(record);
  } catch (error) {
    console.error("[api/contacto] No se pudo guardar el mensaje:", error);

    return NextResponse.json(
      {
        error:
          "No pudimos guardar tu mensaje. Escribenos directo por WhatsApp para que no se te pierda.",
      },
      { status: 500 },
    );
  }

  // ---- 4. Enlace de WhatsApp con el mensaje escrito ----------------------
  const waLink = buildWhatsappLink(
    buildContactMessage({ name, email, phone, orderId, subject, message }),
  );

  console.log(`[api/contacto] Mensaje ${id} | ${name} | ${subject || "sin motivo"}`);

  return NextResponse.json({ ok: true, id, waLink });
}
