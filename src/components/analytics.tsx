"use client";

import Script from "next/script";
import { useEffect, useRef } from "react";

import {
  flushAnalytics,
  ga4Id,
  metaPixelId,
  trackPurchase,
  trackViewItem,
  type AnalyticsItem,
  type AnalyticsOrder,
} from "@/lib/analytics";

/**
 * Carga los scripts de medicion (Meta Pixel y Google Analytics 4).
 *
 * Si no hay identificadores configurados no se carga nada: la tienda
 * funciona igual, simplemente no se registra nada.
 *
 * El script va con `beforeInteractive` para que el pixel este disponible
 * antes de que se hidrate la pagina: asi los eventos que se disparan al
 * montar (por ejemplo, la vista de un producto) no se pierden.
 */
export function Analytics() {
  const pixelId = metaPixelId();
  const gaId = ga4Id();

  // Reintentamos el envio de los eventos que llegaron antes que el SDK.
  useEffect(() => {
    let tries = 0;

    const timer = window.setInterval(() => {
      flushAnalytics();
      tries += 1;
      if (tries >= 20) window.clearInterval(timer);
    }, 500);

    return () => window.clearInterval(timer);
  }, []);

  if (!pixelId && !gaId) return null;

  return (
    <>
      {pixelId ? (
        <Script id="meta-pixel" strategy="beforeInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${pixelId}');fbq('track','PageView');`}
        </Script>
      ) : null}

      {gaId ? (
        <>
          <Script id="ga4-init" strategy="beforeInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){window.dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${gaId}');`}
          </Script>
          <Script
            id="ga4-loader"
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="beforeInteractive"
            onLoad={() => flushAnalytics()}
          />
        </>
      ) : null}
    </>
  );
}

/**
 * Registra la vista de un producto (se usa en la ficha de producto).
 */
export function ViewItemTracker({ item }: { item: AnalyticsItem }) {
  const sent = useRef(false);

  useEffect(() => {
    if (sent.current) return;
    sent.current = true;
    trackViewItem(item);
  }, [item]);

  return null;
}

/**
 * Registra la compra (se usa en la pagina de gracias).
 *
 * Si la orden todavia no esta en el servidor (el webhook puede tardar unos
 * segundos) la consulta una couple de veces antes de rendirse.
 */
export function PurchaseTracker({
  orderId,
  order,
}: {
  orderId: string;
  order?: AnalyticsOrder | null;
}) {
  const sent = useRef(false);

  useEffect(() => {
    if (!orderId || sent.current) return;

    if (order) {
      sent.current = true;
      trackPurchase(order);
      return;
    }

    let cancelled = false;

    const load = async (attempt: number): Promise<void> => {
      try {
        const response = await fetch(`/api/pedidos/${encodeURIComponent(orderId)}`, {
          cache: "no-store",
        });
        if (!response.ok) throw new Error("no se pudo leer la orden");

        const data = (await response.json()) as {
          items?: { slug: string; name: string; qty: number; unitPrice: number }[];
          total?: number;
          shipping?: number;
        };

        if (cancelled) return;

        sent.current = true;
        trackPurchase({
          id: orderId,
          total: typeof data.total === "number" ? data.total : 0,
          shipping: typeof data.shipping === "number" ? data.shipping : 0,
          items: (data.items ?? []).map((item) => ({
            id: item.slug,
            name: item.name,
            price: item.unitPrice,
            quantity: item.qty,
          })),
        });
      } catch {
        if (cancelled || attempt >= 3) return;
        window.setTimeout(() => {
          void load(attempt + 1);
        }, 2500);
      }
    };

    void load(1);

    return () => {
      cancelled = true;
    };
  }, [orderId, order]);

  return null;
}
