/**
 * Analitica de la tienda (Meta Pixel y Google Analytics 4).
 *
 * Todo aqui es NO-OP si no hay identificadores configurados: la tienda
 * funciona igual sin pixel, solo no se registra nada.
 *
 * Variables de entorno (publicas, se leen al construir):
 *   NEXT_PUBLIC_META_PIXEL_ID   -> id del pixel de Meta (Facebook/Instagram)
 *   NEXT_PUBLIC_GA4_ID          -> id de medicion de GA4 (G-XXXXXXX)
 */

export type AnalyticsItem = {
  /** slug o sku del producto */
  id: string;
  name: string;
  /** precio unitario en MXN */
  price: number;
  quantity: number;
};

export type AnalyticsOrder = {
  /** id de la orden (TDR-XXXX-XXXX) */
  id: string;
  items: AnalyticsItem[];
  /** total cobrado en MXN */
  total: number;
  /** costo de envio en MXN (opcional) */
  shipping?: number;
};

type PixelFn = ((...args: unknown[]) => void) & {
  queue?: unknown[];
  loaded?: boolean;
  version?: string;
  callMethod?: (...args: unknown[]) => void;
};

declare global {
  interface Window {
    fbq?: PixelFn;
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

/** Id del pixel de Meta, o null si no esta configurado. */
export function metaPixelId(): string | null {
  const id = process.env.NEXT_PUBLIC_META_PIXEL_ID?.trim();
  return id ? id : null;
}

/** Id de medicion de GA4, o null si no esta configurado. */
export function ga4Id(): string | null {
  const id = process.env.NEXT_PUBLIC_GA4_ID?.trim();
  return id ? id : null;
}

/** Hay algo que medir? */
export function analyticsEnabled(): boolean {
  return Boolean(metaPixelId() || ga4Id());
}

// ---------------------------------------------------------------------------
// Envolturas de los SDK
// ---------------------------------------------------------------------------

function firePixel(event: string, params: Record<string, unknown>): void {
  if (typeof window === "undefined") return;
  if (!metaPixelId()) return;

  const fbq = window.fbq;
  if (typeof fbq !== "function") return;

  try {
    fbq("track", event, params);
  } catch {
    // Un error del pixel nunca debe romper la tienda.
  }
}

function fireGtag(event: string, params: Record<string, unknown>): void {
  if (typeof window === "undefined") return;
  if (!ga4Id()) return;

  const gtag = window.gtag;
  if (typeof gtag !== "function") return;

  try {
    gtag("event", event, params);
  } catch {
    // Un error de GA4 nunca debe romper la tienda.
  }
}

function pixelContents(items: AnalyticsItem[]) {
  return items.map((item) => ({
    id: item.id,
    quantity: item.quantity,
    item_price: item.price,
  }));
}

function ga4Items(items: AnalyticsItem[]) {
  return items.map((item) => ({
    item_id: item.id,
    item_name: item.name,
    price: item.price,
    quantity: item.quantity,
  }));
}

// ---------------------------------------------------------------------------
// Eventos de tienda
// ---------------------------------------------------------------------------

/** Vista de la ficha de un producto. */
export function trackViewItem(item: AnalyticsItem): void {
  firePixel("ViewContent", {
    content_ids: [item.id],
    content_name: item.name,
    content_type: "product",
    value: item.price,
    currency: "MXN",
    contents: pixelContents([item]),
  });

  fireGtag("view_item", {
    currency: "MXN",
    value: item.price,
    items: ga4Items([item]),
  });
}

/** Producto agregado al carrito. */
export function trackAddToCart(item: AnalyticsItem): void {
  const value = item.price * item.quantity;

  firePixel("AddToCart", {
    content_ids: [item.id],
    content_name: item.name,
    content_type: "product",
    value,
    currency: "MXN",
    contents: pixelContents([item]),
  });

  fireGtag("add_to_cart", {
    currency: "MXN",
    value,
    items: ga4Items([item]),
  });
}

/** El cliente esta cerrando la compra (llego al formulario de envio). */
export function trackBeginCheckout(items: AnalyticsItem[], total: number): void {
  const numItems = items.reduce((sum, item) => sum + item.quantity, 0);

  firePixel("InitiateCheckout", {
    content_ids: items.map((item) => item.id),
    content_type: "product",
    value: total,
    currency: "MXN",
    num_items: numItems,
    contents: pixelContents(items),
  });

  fireGtag("begin_checkout", {
    currency: "MXN",
    value: total,
    items: ga4Items(items),
  });
}

/** Compra confirmada (pago aprobado). */
export function trackPurchase(order: AnalyticsOrder): void {
  const numItems = order.items.reduce((sum, item) => sum + item.quantity, 0);

  firePixel("Purchase", {
    content_ids: order.items.map((item) => item.id),
    content_type: "product",
    value: order.total,
    currency: "MXN",
    num_items: numItems,
    contents: pixelContents(order.items),
  });

  fireGtag("purchase", {
    transaction_id: order.id,
    currency: "MXN",
    value: order.total,
    ...(typeof order.shipping === "number" ? { shipping: order.shipping } : {}),
    items: ga4Items(order.items),
  });
}
