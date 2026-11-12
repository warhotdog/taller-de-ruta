import type { Metadata } from "next";

import { site } from "@/data/site";
import { siteUrl } from "@/lib/site-url";

/**
 * Imagen por defecto de las previsualizaciones de redes (Open Graph y Twitter).
 *
 * Las fichas de producto ya definen la suya. El resto de paginas comparten la
 * foto del producto hero: es de 1200x1200, asi que se ve bien recortada tanto
 * en la vista cuadrada de WhatsApp como en la tarjeta grande de Facebook.
 */
export const DEFAULT_OG_IMAGE = "/productos/kit-soporte-antivibracion-360.jpg";

export type SocialOptions = {
  /** Texto del title. Se usa igual para og:title y twitter:title. */
  title: string;
  description: string;
  /** Ruta interna con barra inicial: "/tienda" */
  path: string;
  /** Ruta de la imagen dentro de /public. */
  image?: string;
  type?: "website" | "article";
};

/**
 * Bloques `openGraph` y `twitter` listos para `export const metadata`.
 *
 * OJO IMPORTANTE: en Next.js el `openGraph` de una pagina REEMPLAZA por completo
 * el del layout (no se fusiona campo por campo). Por eso aqui se devuelven los
 * dos bloques completos, con siteName, locale, type e imagen. Si solo se
 * declarara `images`, la pagina se quedaria sin og:title, og:url y og:locale.
 *
 * El layout ya declara `twitter.card: "summary_large_image"` pero ninguna
 * imagen; sin imagen, los previsualizadores muestran una tarjeta vacia.
 */
export function socialMetadata({
  title,
  description,
  path,
  image,
  type = "website",
}: SocialOptions): Pick<Metadata, "openGraph" | "twitter"> {
  const base = siteUrl();
  const url = `${base}${path}`;
  const imageUrl = `${base}${image ?? DEFAULT_OG_IMAGE}`;

  const shared = {
    siteName: site.name,
    locale: "es_MX",
    title,
    description,
    url,
    images: [{ url: imageUrl, alt: title }],
  };

  return {
    openGraph:
      type === "article"
        ? { ...shared, type: "article" }
        : { ...shared, type: "website" },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}
