"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import { site } from "@/data/site";
import { formatMXN } from "@/lib/format";
import {
  formatOrderDate,
  maskAddress,
  ORDER_STATUS_BADGE,
  ORDER_STATUS_DESCRIPTIONS,
  ORDER_STATUS_LABELS,
} from "@/lib/order-display";
import { buildWhatsappLink } from "@/lib/whatsapp";

type OrderItem = {
  slug: string;
  name: string;
  qty: number;
  unitPrice: number;
};

type OrderPayload = {
  id: string;
  createdAt: string;
  status: string;
  items: OrderItem[];
  subtotal: number;
  shipping: number;
  total: number;
  customer: { address: string };
};

type State =
  | { kind: "idle" }
  | { kind: "loading" }
  | { kind: "notFound" }
  | { kind: "error"; message: string }
  | { kind: "found"; order: OrderPayload };

function statusLabel(status: string): string {
  return (ORDER_STATUS_LABELS as Record<string, string>)[status] ?? "Pedido registrado";
}

function statusDescription(status: string): string {
  return (
    (ORDER_STATUS_DESCRIPTIONS as Record<string, string>)[status] ??
    "Ya guardamos tu pedido. Si tienes dudas, escribinos por WhatsApp."
  );
}

function statusBadge(status: string): string {
  return (
    (ORDER_STATUS_BADGE as Record<string, string>)[status] ??
    "bg-accent-soft text-accent"
  );
}

/**
 * Consulta del estado de un pedido.
 *
 * El cliente escribe su numero de pedido (TDR-XXXX-XXXX) y le mostramos el
 * estado, la fecha, el total y los productos. La direccion se muestra
 * enmascarada: solo su colonia y su ciudad.
 */
export function SeguimientoForm() {
  const searchParams = useSearchParams();
  const pedidoFromUrl = searchParams.get("pedido") ?? "";

  const [orderId, setOrderId] = useState(pedidoFromUrl);
  const [state, setState] = useState<State>({ kind: "idle" });

  const consultar = useCallback(async (rawId: string) => {
    const id = rawId.trim().toUpperCase();

    if (!id) {
      setState({ kind: "error", message: "Escribe tu numero de pedido." });
      return;
    }

    setState({ kind: "loading" });

    try {
      const response = await fetch(`/api/pedidos/${encodeURIComponent(id)}`, {
        cache: "no-store",
      });

      if (response.status === 404) {
        setState({ kind: "notFound" });
        return;
      }

      if (!response.ok) {
        setState({
          kind: "error",
          message: "No pudimos consultar tu pedido. Intenta de nuevo en un momento.",
        });
        return;
      }

      const order = (await response.json()) as OrderPayload;
      setState({ kind: "found", order });
    } catch {
      setState({
        kind: "error",
        message: "Error de conexion. Revisa tu internet e intenta de nuevo.",
      });
    }
  }, []);

  // Si el cliente llega con ?pedido=TDR-XXXX-XXXX, consultamos de una vez.
  useEffect(() => {
    if (pedidoFromUrl) void consultar(pedidoFromUrl);
  }, [pedidoFromUrl, consultar]);

  return (
    <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
      {/* ---------------- Consulta ---------------- */}
      <div className="rounded-xl border border-line bg-surface p-6 sm:p-8">
        <h2 className="text-lg font-bold">Tu numero de pedido</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          Aparece en el mensaje de WhatsApp y en el correo de confirmacion. Tiene este
          formato: TDR-XXXX-XXXX.
        </p>

        <form
          className="mt-6"
          onSubmit={(event) => {
            event.preventDefault();
            void consultar(orderId);
          }}
        >
          <label htmlFor="order-id" className="text-xs font-medium text-muted">
            Numero de pedido
          </label>
          <input
            id="order-id"
            value={orderId}
            onChange={(event) => setOrderId(event.target.value.toUpperCase())}
            placeholder="TDR-XXXX-XXXX"
            autoComplete="off"
            spellCheck={false}
            className="mt-1.5 w-full rounded-lg border border-line bg-ink-2 px-3.5 py-3 font-mono text-sm uppercase outline-none transition focus:border-accent"
          />

          <button
            type="submit"
            disabled={state.kind === "loading"}
            className="mt-4 w-full rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-60"
          >
            {state.kind === "loading" ? "Consultando..." : "Consultar mi pedido"}
          </button>
        </form>

        {state.kind === "error" && (
          <p className="mt-4 rounded-lg border border-red-500/40 bg-red-500/10 px-3.5 py-2.5 text-xs text-red-300">
            {state.message}
          </p>
        )}

        {state.kind === "notFound" && (
          <div className="mt-4 rounded-lg border border-accent/40 bg-accent-soft px-3.5 py-3 text-xs leading-relaxed text-accent">
            <p className="font-semibold">No encontramos ese pedido.</p>
            <p className="mt-1.5">
              Revisa que el numero este completo. Si sigue igual, escribenos por
              WhatsApp con tu nombre y te lo buscamos.
            </p>
          </div>
        )}

        <div className="mt-6 rounded-lg bg-ink-2 p-4">
          <p className="text-xs leading-relaxed text-muted-2">
            <strong className="text-cream">Tip:</strong> si compraste por WhatsApp, el
            numero de pedido va en el mensaje que te enviamos. Si compraste con tarjeta,
            va en el correo de confirmacion.
          </p>
        </div>
      </div>

      {/* ---------------- Resultado ---------------- */}
      <div>
        {state.kind === "found" ? (
          <OrderDetails order={state.order} />
        ) : (
          <div className="flex h-full min-h-[16rem] flex-col items-center justify-center rounded-xl border border-dashed border-line bg-ink-2/40 p-8 text-center">
            <p className="text-sm text-muted">
              Ahi te mostramos el estado de tu pedido, la fecha, el total y los
              productos.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function OrderDetails({ order }: { order: OrderPayload }) {
  const direccion = maskAddress(order.customer.address);

  const waLink = buildWhatsappLink(
    `Hola, Taller de Ruta. Quiero saber sobre mi pedido ${order.id}.`,
  );

  return (
    <div className="rounded-xl border border-line bg-surface p-6 sm:p-8">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs font-medium text-muted">Numero de pedido</p>
          <p className="mt-1 font-mono text-lg font-bold">{order.id}</p>
        </div>

        <span
          className={`rounded-md px-3 py-1.5 text-xs font-semibold ${statusBadge(order.status)}`}
        >
          {statusLabel(order.status)}
        </span>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-muted">
        {statusDescription(order.status)}
      </p>

      <dl className="mt-6 grid gap-4 border-y border-line py-5 text-sm sm:grid-cols-2">
        <div>
          <dt className="text-xs text-muted">Fecha del pedido</dt>
          <dd className="mt-1 font-medium">{formatOrderDate(order.createdAt)}</dd>
        </div>
        <div>
          <dt className="text-xs text-muted">Total</dt>
          <dd className="mt-1 text-lg font-black">{formatMXN(order.total)}</dd>
        </div>
        <div>
          <dt className="text-xs text-muted">Envio</dt>
          <dd className="mt-1 font-medium">
            {order.shipping === 0 ? "Gratis" : formatMXN(order.shipping)}
          </dd>
        </div>
        <div>
          <dt className="text-xs text-muted">Entrega en</dt>
          <dd className="mt-1 font-medium">
            {direccion.colonia}, {direccion.ciudad}
          </dd>
        </div>
      </dl>

      <h3 className="mt-6 text-xs font-semibold uppercase tracking-wider text-muted">
        Productos
      </h3>

      <ul className="mt-3 divide-y divide-line">
        {order.items.map((item) => (
          <li key={item.slug} className="flex items-start justify-between gap-4 py-3">
            <div className="min-w-0">
              <p className="text-sm font-medium leading-snug">{item.name}</p>
              <p className="mt-0.5 text-xs text-muted-2">
                {item.qty} x {formatMXN(item.unitPrice)}
              </p>
            </div>
            <span className="shrink-0 text-sm font-semibold">
              {formatMXN(item.unitPrice * item.qty)}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent-hover"
        >
          Escribir por WhatsApp
        </a>

        <Link
          href="/contacto"
          className="rounded-lg border border-line px-5 py-3 text-sm font-semibold transition hover:border-line-2 hover:bg-surface-2"
        >
          Mandar un mensaje
        </Link>
      </div>

      <p className="mt-4 text-xs leading-relaxed text-muted-2">
        Mostramos solo tu colonia y tu ciudad por seguridad. Si necesitas el detalle
        completo de la direccion, escrienos por WhatsApp con tu numero de pedido{" "}
        <span className="font-mono">{order.id}</span>.
      </p>

      <p className="mt-2 text-xs text-muted-2">
        {site.responseTime}. Si prefieres el correo: {site.email}.
      </p>
    </div>
  );
}
