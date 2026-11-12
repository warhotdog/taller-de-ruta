export const site = {
  name: "Taller de Ruta",
  legalName: "Taller de Ruta",
  tagline: "Accesorios para moto diaria y repartidores",
  description:
    "Accesorios prácticos para moto diaria en Mexico: soportes de celular antivibracion, bolsas y alforjas impermeables, cubre moto, punos y seguridad. Envios a todo el pais.",
  url: "https://tallerdelruta.mx",
  email: process.env.NEXT_PUBLIC_STORE_EMAIL ?? "hola@tallerdelruta.mx",
  whatsapp: process.env.NEXT_PUBLIC_STORE_WHATSAPP ?? "+52 000 000 0000",
  whatsappLink:
    process.env.NEXT_PUBLIC_STORE_WHATSAPP_LINK ?? "https://wa.me/520000000000",
  currency: "MXN",
  locale: "es-MX",
  city: "Mexico",
  /** Dias habiles estimados de entrega, se muestran al cliente */
  deliveryMin: 7,
  deliveryMax: 15,
  freeShippingFrom: 599,
  shippingFlat: 89,
  hours: "Lunes a viernes, 9:00 a 18:00 (hora del centro de Mexico)",
  responseTime: "Respondemos en menos de 24 horas habiles",

  /**
   * Muestra las estrellas de valoracion en las fichas de producto.
   *
   * APAGADO A PROPOSITO. Los valores en src/data/products.ts provienen de las
   * resenas del PROVEEDOR en AliExpress, no de clientes de esta tienda.
   * Mostrarlos como resenas propias es enganoso para el comprador y ademas
   * incumple las politicas de datos estructurados de Google (penalizacion
   * manual por aggregateRating falso).
   *
   * Activalo SOLO cuando tengas resenas reales de tus propios clientes y
   * hayas reemplazado los valores de rating/reviews en products.ts.
   */
  showSupplierRatings: false,
} as const;

export const nav = [
  { label: "Tienda", href: "/tienda" },
  { label: "Soportes de celular", href: "/coleccion/soportes-celular" },
  { label: "Alforjas y bolsas", href: "/coleccion/alforjas-y-bolsas" },
  { label: "Cubre moto", href: "/coleccion/cubre-moto-e-impermeables" },
  { label: "Guias", href: "/guias" },
] as const;

export const footerLinks = {
  tienda: [
    { label: "Todo el catalogo", href: "/tienda" },
    { label: "Soportes de celular", href: "/coleccion/soportes-celular" },
    { label: "Alforjas y bolsas", href: "/coleccion/alforjas-y-bolsas" },
    { label: "Cubre moto e impermeables", href: "/coleccion/cubre-moto-e-impermeables" },
    { label: "Punos y comodidad", href: "/coleccion/punos-y-comodidad" },
    { label: "Seguridad y candados", href: "/coleccion/seguridad-y-candados" },
    { label: "Mantenimiento", href: "/coleccion/mantenimiento" },
    { label: "Stickers", href: "/coleccion/stickers-y-personalizacion" },
  ],
  ayuda: [
    { label: "Envio y tiempos", href: "/envios" },
    { label: "Devoluciones y garantia", href: "/devoluciones" },
    { label: "Rastrear mi pedido", href: "/seguimiento" },
    { label: "Contacto", href: "/contacto" },
    { label: "Sobre la tienda", href: "/nosotros" },
  ],
  contenido: [
    { label: "Guias de moto", href: "/guias" },
    { label: "Elegir soporte sin vibracion", href: "/guias/elegir-soporte-celular-moto-sin-vibracion" },
    { label: "Kit basico para repartidor", href: "/guias/accesorios-para-repartidor-en-moto" },
    { label: "Alforjas vs mochila", href: "/guias/alforjas-moto-vs-mochila-moto" },
    { label: "Proteger tu moto de la lluvia", href: "/guias/proteger-moto-de-la-lluvia" },
  ],
} as const;
