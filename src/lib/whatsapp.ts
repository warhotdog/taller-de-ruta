import { site } from "@/data/site";

/**
 * Numero de WhatsApp de la tienda en formato internacional, solo digitos.
 *
 * Se toma primero del enlace (https://wa.me/<numero>) y, si no esta, del
 * numero que se muestra en pantalla (se le quitan espacios, guiones y el
 * prefijo internacional).
 */
export function whatsappNumber(): string {
  const fromLink = site.whatsappLink.match(/wa\.me\/(\d+)/i);
  if (fromLink?.[1]) return fromLink[1];

  const digits = site.whatsapp.replace(/\D/g, "");
  if (digits.length >= 10) return digits.replace(/^00/, "");

  // Ultimo recurso: el numero real de la tienda.
  return "525535525741";
}

/** Enlace de WhatsApp con el mensaje ya escrito y listo para enviar. */
export function buildWhatsappLink(message: string): string {
  return `https://wa.me/${whatsappNumber()}?text=${encodeURIComponent(message)}`;
}

export type OrderMessageItem = {
  name: string;
  qty: number;
  unitPrice: number;
};

export type OrderMessageCustomer = {
  name: string;
  email: string;
  phone: string;
  street: string;
  interior: string;
  neighborhood: string;
  city: string;
  state: string;
  zip: string;
  notes: string;
};

/**
 * Redacta el mensaje del pedido que el cliente envia por WhatsApp.
 *
 * Va redactado en espanol de Mexico, con acentos, porque es un texto que
 * leemos nosotros y el cliente: se ve profesional y se entiende a la primera.
 */
export function buildOrderMessage(params: {
  orderId: string;
  createdAt: string;
  items: OrderMessageItem[];
  subtotal: number;
  shipping: number;
  total: number;
  customer: OrderMessageCustomer;
}): string {
  const { orderId, createdAt, items, subtotal, shipping, total, customer } = params;

  const fecha = new Intl.DateTimeFormat("es-MX", {
    dateStyle: "long",
    timeZone: "America/Mexico_City",
  }).format(new Date(createdAt));

  const lineas = items.map((item, index) => {
    const importe = item.unitPrice * item.qty;
    return `${index + 1}. ${item.name} x${item.qty} - ${formatPesos(importe)}`;
  });

  const envio = shipping > 0 ? formatPesos(shipping) : "Gratis";

  const entrega = [
    `Nombre: ${customer.name}`,
    `Teléfono: ${customer.phone}`,
    `Correo: ${customer.email}`,
    `Dirección: ${customer.street}${customer.interior ? `, Int. ${customer.interior}` : ""}`,
    `Colonia: ${customer.neighborhood}`,
    `Ciudad: ${customer.city}`,
    `Estado: ${customer.state}`,
    `CP: ${customer.zip}`,
  ];

  if (customer.notes) entrega.push(`Referencias: ${customer.notes}`);

  return [
    `Hola, Taller de Ruta. Quiero confirmar mi pedido:`,
    "",
    `Pedido: ${orderId}`,
    `Fecha: ${fecha}`,
    "",
    "Productos:",
    ...lineas,
    "",
    `Subtotal: ${formatPesos(subtotal)}`,
    `Envío: ${envio}`,
    `Total: ${formatPesos(total)}`,
    "",
    "Datos de entrega:",
    ...entrega,
    "",
    "Quedo al pendiente de la confirmación. Gracias.",
  ].join("\n");
}

/**
 * Formato de pesos para los mensajes de WhatsApp (no usamos Intl porque el
 * texto va pegado en una conversacion, sin decimales).
 */
function formatPesos(value: number): string {
  return `$${Math.round(value).toLocaleString("es-MX")}`;
}

/**
 * Redacta el mensaje que el cliente manda desde el formulario de contacto.
 */
export function buildContactMessage(params: {
  name: string;
  email: string;
  phone: string;
  orderId: string;
  subject: string;
  message: string;
}): string {
  const { name, email, phone, orderId, subject, message } = params;

  const lineas = [`Hola, Taller de Ruta. Les escribo desde la web.`, "", `Nombre: ${name}`];

  if (email) lineas.push(`Correo: ${email}`);
  if (phone) lineas.push(`Teléfono: ${phone}`);
  if (orderId) lineas.push(`Pedido: ${orderId}`);
  if (subject) lineas.push(`Motivo: ${subject}`);

  lineas.push("", `Mensaje:`, message);

  return lineas.join("\n");
}
