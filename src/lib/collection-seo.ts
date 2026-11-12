/**
 * Títulos SEO de las páginas de colección.
 *
 * POR QUE EXISTE ESTE ARCHIVO
 * --------------------------
 * En `src/data/collections.ts` el campo `title` dice literalmente "Titulo SEO de
 * la pagina de coleccion", pero en dos colecciones ese texto era IDENTICO al
 * nombre del producto estrella de la misma categoría:
 *
 *   - "Cubre moto impermeable con hebilla antiviento"  (colección)  ==
 *     "Cubre Moto Impermeable con Hebilla Antiviento"   (producto)
 *   - "Candado disco moto con cable recordatorio"      (colección)  ~
 *     "Candado de Disco Moto con Cable Recordatorio"   (producto)
 *
 * Google interpreta eso como dos páginas compitiendo por el mismo término
 * (keyword cannibalization) y además el H1 de la categoría era el nombre de un
 * producto, lo que confunde a quien llega desde búsqueda.
 *
 * Aquí se define el título de cada categoría, distinto del de cualquier
 * producto y centrado en la intención de categoría ("soportes para moto",
 * "bolsas para moto", etc.). Si se agrega una colección nueva y no aparece
 * aquí, la página usa `collection.title` como respaldo.
 *
 * El texto largo de la colección (`collection.description`) sigue siendo el
 * párrafo introductorio y conserva las palabras clave.
 */
export const COLLECTION_SEO_TITLES: Record<string, string> = {
  "soportes-celular": "Soportes de celular para moto: antivibracion y 360",
  "alforjas-y-bolsas": "Alforjas y bolsas para moto: impermeables y de pierna",
  "cubre-moto-e-impermeables": "Cubre moto e impermeables: fundas para tu moto",
  "punos-y-comodidad": "Punos y comodidad para moto: grips y cubre punos",
  "seguridad-y-candados": "Seguridad y candados para moto: disco y reflectivos",
  mantenimiento: "Mantenimiento de moto: cepillos y herramientas",
  "stickers-y-personalizacion": "Stickers y personalizacion para moto y casco",
};

/** Título SEO de la categoría, con respaldo al `title` de collections.ts. */
export function collectionSeoTitle(slug: string, fallback: string): string {
  return COLLECTION_SEO_TITLES[slug] ?? fallback;
}
