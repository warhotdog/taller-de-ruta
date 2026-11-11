import { NextResponse } from "next/server";

import { computeTotals, normalizeLines, resolveLines } from "@/lib/cart";
import { validateCustomer } from "@/lib/customer";
import { appendOrder, SUPPLIER_ITEMS } from "@/lib/orders";
import { buildOrderMessage, buildWhatsappLink } from "@/lib/whatsapp";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Pedido por WhatsApp.
 *
 * Es el segundo camino de compra de la tienda: funciona aunque Mercado Pago
 * no este configurado. El cliente llena sus datos, el servidor calcula el
 * total (NUNCA se toma el precio del cliente), se guarda la orden y se
 * devuelve un enlace de WhatsApp con el pedido redactado y listo para enviar.
 *
 * POST /api/pedido-whatsapp
 *   body: { lines: [{ slug, qty }], customer: { name, email, phone, street,
 *           interior, neighborhood, city, state, zip, notes } }
 *   -> { ok: true, orderId, total, waLink }
 */

function buildOrderReference(): string {
  const stamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `TDR-${stamp}-${random}`;
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

  const payload = (body ?? {}) as { lines?: unknown; customer?: unknown };

  // ---- 2. Validar el carrito contra el catalogo del servidor -------------
  // `normalizeLines` descarta slugs que no existen y limita las cantidades.
  const lines = normalizeLines(payload.lines);
  const resolved = resolveLines(lines);

  if (resolved.length === 0) {
    return NextResponse.json(
      { error: "Tu carrito esta vacio o los productos ya no estan disponibles." },
      { status: 400 },
    );
  }

  // ---- 3. Validar los datos del cliente ---------------------------------
  const { customer, errors } = validateCustomer(payload.customer);

  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { error: "Revisa los datos del formulario.", fields: errors },
      { status: 422 },
    );
  }

  // ---- 4. Calcular el total EN EL SERVIDOR ------------------------------
  const totals = computeTotals(resolved);

  const orderId = buildOrderReference();
  const createdAt = new Date().toISOString();

  const address = [
    customer.street,
    customer.interior ? `Int. ${customer.interior}` : null,
    `Col. ${customer.neighborhood}`,
    `${customer.city}, ${customer.state}`,
    `CP ${customer.zip}`,
    customer.notes ? `Ref: ${customer.notes}` : null,
  ]
    .filter(Boolean)
    .join(" | ");

  const firstSlug = resolved[0]?.product.slug ?? "";

  // ---- 5. Guardar la orden ----------------------------------------------
  try {
    await appendOrder({
      id: orderId,
      createdAt,
      status: "pendiente_pago",
      items: resolved.map((line) => ({
        slug: line.product.slug,
        name: line.product.name,
        qty: line.qty,
        unitPrice: line.product.price,
      })),
      subtotal: totals.subtotal,
      shipping: totals.shipping,
      total: totals.total,
      customer: {
        name: customer.name,
        email: customer.email,
        phone: customer.phone,
        address,
      },
      supplier: {
        itemId: SUPPLIER_ITEMS[firstSlug] ?? "",
      },
      notes: customer.notes,
    });
  } catch (error) {
    console.error("[api/pedido-whatsapp] No se pudo guardar la orden:", error);

    return NextResponse.json(
      {
        error:
          "No pudimos registrar tu pedido. Intenta de nuevo o escribenos por WhatsApp.",
      },
      { status: 500 },
    );
  }

  // ---- 6. Armar el mensaje de WhatsApp ----------------------------------
  const message = buildOrderMessage({
    orderId,
    createdAt,
    items: resolved.map((line) => ({
      name: line.product.shortName,
      qty: line.qty,
      unitPrice: line.product.price,
    })),
    subtotal: totals.subtotal,
    shipping: totals.shipping,
    total: totals.total,
    customer,
  });

  const waLink = buildWhatsappLink(message);

  console.log(
    `[api/pedido-whatsapp] Pedido ${orderId} | ${resolved.length} producto(s) | ${totals.total} MXN | estado=pendiente_pago`,
  );
  console.log(`[api/pedido-whatsapp] Envio a: ${address}`);

  return NextResponse.json({
    ok: true,
    orderId,
    total: totals.total,
    waLink,
  });
}
