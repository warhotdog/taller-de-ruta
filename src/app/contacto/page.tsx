import type { Metadata } from "next";
import Link from "next/link";

import { ContactForm } from "@/components/contact-form";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Escribenos por correo o WhatsApp. Respondemos en menos de 24 horas habiles, con una persona real.",
  alternates: { canonical: "/contacto" },
};

const reasons = [
  {
    title: "Estado de tu pedido",
    body: "Mandanos tu numero de orden y te decimos exactamente en que va, sin respuestas genericas.",
  },
  {
    title: "Antes de comprar",
    body: "Si no sabes si un producto le queda a tu moto, preguntanos. Preferimos decirte que no a que devuelvas algo.",
  },
  {
    title: "Devoluciones y garantia",
    body: "Reporta un defecto con fotos y lo resolvemos. Revisa primero la politica de devoluciones.",
  },
  {
    title: "Pedidos por mayoreo",
    body: "Si necesitas varias piezas para tu taller o flotilla, cotizamos aparte.",
  },
];

export default function ContactPage() {
  return (
    <div className="container-page py-14">
      <nav className="text-xs text-muted-2">
        <Link href="/" className="transition hover:text-accent">
          Inicio
        </Link>
        <span className="mx-2">/</span>
        <span className="text-muted">Contacto</span>
      </nav>

      <header className="mt-8 max-w-3xl">
        <h1 className="text-3xl font-black tracking-tight sm:text-4xl">Contacto</h1>
        <p className="mt-4 text-sm leading-relaxed text-muted">
          Te atiende una persona, no un bot. {site.responseTime}.
        </p>
      </header>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          <a
            href={site.whatsappLink}
            className="block rounded-xl border border-line bg-surface p-6 transition hover:border-accent"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">
              Respuesta mas rapida
            </span>
            <h2 className="mt-3 text-lg font-bold">WhatsApp</h2>
            <p className="mt-1.5 text-sm text-muted">{site.whatsapp}</p>
            <p className="mt-3 text-xs leading-relaxed text-muted-2">
              Es la via mas rapida para dudas de producto, estado de pedido y problemas de
              entrega. Tambien puedes cerrar tu pedido completo por aqui.
            </p>
          </a>

          <a
            href={`mailto:${site.email}`}
            className="block rounded-xl border border-line bg-surface p-6 transition hover:border-accent"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-muted">
              Para temas formales
            </span>
            <h2 className="mt-3 text-lg font-bold">Correo electronico</h2>
            <p className="mt-1.5 text-sm text-muted">{site.email}</p>
            <p className="mt-3 text-xs leading-relaxed text-muted-2">
              Usalo para devoluciones, facturacion o cualquier tema que necesites dejar
              por escrito.
            </p>
          </a>

          <div className="rounded-xl border border-line bg-ink-2 p-6">
            <h2 className="text-sm font-semibold">Horario de atencion</h2>
            <p className="mt-2 text-sm text-muted">{site.hours}</p>
            <p className="mt-2 text-xs text-muted-2">
              Los mensajes que lleguen fuera de horario se responden el siguiente dia
              habil.
            </p>
          </div>

          <div className="rounded-xl border border-line bg-ink-2 p-6">
            <h2 className="text-sm font-semibold">Ya compraste y quieres el estado?</h2>
            <p className="mt-2 text-sm text-muted">
              Usa el rastreador con tu numero de pedido. Te lo mostramos sin que
              tengas que escribirnos.
            </p>
            <Link
              href="/seguimiento"
              className="mt-3 inline-block text-sm font-semibold text-accent underline underline-offset-4"
            >
              Rastrear mi pedido
            </Link>
          </div>
        </div>

        <ContactForm />
      </div>

      <section className="mt-14 border-t border-line pt-10">
        <h2 className="text-lg font-bold">En que te podemos ayudar</h2>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-xl border border-line bg-surface p-5"
            >
              <h3 className="text-sm font-semibold">{reason.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-muted">{reason.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-lg bg-accent-soft p-4">
          <p className="text-xs leading-relaxed text-accent">
            <strong>Tip para respuestas rapidas:</strong> incluye tu numero de orden
            (formato TDR-XXXXXX-XXXX) y, si es un problema de producto, una foto. Con
            eso resolvemos en el primer mensaje.
          </p>
        </div>
      </section>

      <div className="mt-14 grid gap-4 border-t border-line pt-10 sm:grid-cols-3">
        <Link
          href="/envios"
          className="text-sm text-muted transition hover:text-accent"
        >
          Envio y tiempos →
        </Link>
        <Link
          href="/devoluciones"
          className="text-sm text-muted transition hover:text-accent"
        >
          Devoluciones y garantia →
        </Link>
        <Link href="/nosotros" className="text-sm text-muted transition hover:text-accent">
          Sobre la tienda →
        </Link>
      </div>
    </div>
  );
}
