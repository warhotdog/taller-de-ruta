import Link from "next/link";

import { footerLinks, site } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-line bg-ink-2">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-lg font-black text-white">
                T
              </span>
              <span className="text-sm font-bold">{site.name}</span>
            </div>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              {site.description}
            </p>

            <p className="mt-4 text-sm text-muted-2">
              Entrega estimada de {site.deliveryMin} a {site.deliveryMax} dias habiles.
              <br />
              Envio gratis en pedidos desde {site.freeShippingFrom} MXN.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-cream">
              Tienda
            </h3>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.tienda.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-cream">
              Ayuda
            </h3>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.ayuda.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-cream">
              Guias
            </h3>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.contenido.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-line pt-6">
          {/*
            Contacto: el footer era el unico lugar de toda la tienda donde no
            habia forma de escribirle a nadie. Mientras el pago con tarjeta no
            este activo, WhatsApp es el unico canal de compra que funciona, asi
            que tiene que estar a un clic desde cualquier pagina.
          */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-2">
            <span>
              WhatsApp:{" "}
              <a
                href={site.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-accent transition hover:text-accent-hover"
              >
                {site.whatsapp}
              </a>
            </span>

            <span>
              Correo:{" "}
              <a
                href={`mailto:${site.email}`}
                className="font-medium text-accent transition hover:text-accent-hover"
              >
                {site.email}
              </a>
            </span>

            <span>{site.hours}</span>
          </div>

          <div className="mt-6 flex flex-col gap-3 border-t border-line pt-6 text-xs text-muted-2 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {year} {site.legalName}. Todos los derechos reservados.
            </p>
            <p>
              Los productos de esta tienda son accesorios genericos. No vendemos piezas
              de marcas registradas ni refacciones criticas de seguridad.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
