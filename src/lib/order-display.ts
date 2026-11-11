import { MEXICAN_STATES } from "@/lib/customer";
import type { OrderStatus } from "@/lib/orders";

/**
 * Textos que ve el cliente en la pagina de seguimiento del pedido.
 * Se muestran en espanol de Mexico, sin acentos, igual que el resto del sitio.
 */
export const ORDER_STATUS_LABELS: Record<OrderStatus, string> = {
  pendiente_pago: "Pedido recibido, falta confirmar el pago",
  paid: "Pago confirmado",
  packing: "Preparando tu pedido",
  shipped: "En camino",
  delivered: "Entregado",
  cancelled: "Cancelado",
};

export const ORDER_STATUS_DESCRIPTIONS: Record<OrderStatus, string> = {
  pendiente_pago:
    "Ya guardamos tu pedido en el sistema. Falta confirmar el pago: escribinos por WhatsApp con tu numero de pedido y lo cerramos contigo.",
  paid:
    "Recibimos tu pago. En las proximas horas habiles confirmamos el pedido con el proveedor.",
  packing: "Estamos preparando tu pedido para enviarlo.",
  shipped: "Tu pedido va en camino. Te enviamos el numero de guia por correo.",
  delivered:
    "Tu pedido fue entregado. Si tienes algun detalle con el producto, avisanos por WhatsApp.",
  cancelled:
    "Este pedido quedo cancelado. Escribinos por WhatsApp para saber que paso y si podemos reactivarlo.",
};

/** Color del badge segun el estado (clases de Tailwind). */
export const ORDER_STATUS_BADGE: Record<OrderStatus, string> = {
  pendiente_pago: "bg-accent-soft text-accent",
  paid: "bg-success/15 text-success",
  packing: "bg-accent-soft text-accent",
  shipped: "bg-accent-soft text-accent",
  delivered: "bg-success/15 text-success",
  cancelled: "bg-red-500/15 text-red-400",
};

export type MaskedAddress = {
  colonia: string;
  ciudad: string;
};

/**
 * Enmascara la direccion de entrega: el cliente solo ve su colonia y su
 * ciudad, nunca la calle exacta ni el codigo postal.
 *
 * Las ordenes guardan la direccion en texto plano con este formato:
 *   "calle | Int. 4 | Col. Centro | Ciudad, Estado | CP 06000 | Ref: ..."
 */
export function maskAddress(address: string): MaskedAddress {
  const parts = String(address ?? "")
    .split("|")
    .map((part) => part.trim())
    .filter(Boolean);

  let colonia = "";
  let ciudad = "";
  let coloniaIndex = -1;

  parts.forEach((part, index) => {
    const col = part.match(/^col\.\s*(.+)$/i);
    if (col) {
      colonia = col[1].trim();
      coloniaIndex = index;
      return;
    }

    const city = part.match(/^(.+?),\s*(.+)$/);
    if (
      city &&
      !ciudad &&
      (MEXICAN_STATES as readonly string[]).includes(city[2].trim())
    ) {
      ciudad = city[1].trim();
    }
  });

  // Si no reconocimos el formato "ciudad, estado", usamos la parte que sigue
  // a la colonia (que es donde va la ciudad).
  if (!ciudad && coloniaIndex >= 0) {
    const next = parts[coloniaIndex + 1];
    if (next && !/^cp\s/i.test(next) && !/^ref:/i.test(next)) {
      ciudad = next.replace(/,\s*[^,]+$/, "").trim();
    }
  }

  return {
    colonia: colonia || "No indicada",
    ciudad: ciudad || "No indicada",
  };
}

/** Fecha del pedido en texto legible (es-MX). */
export function formatOrderDate(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "Fecha no disponible";

  return new Intl.DateTimeFormat("es-MX", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "America/Mexico_City",
  }).format(date);
}
