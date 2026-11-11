import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";

import { SeguimientoForm } from "@/components/seguimiento-form";

export const metadata: Metadata = {
  title: "Rastrear mi pedido",
  description:
    "Consulta el estado de tu pedido de Taller de Ruta con tu numero de pedido (TDR-XXXX-XXXX). Te decimos si ya esta pagado, si va en camino o si ya llego.",
  alternates: { canonical: "/seguimiento" },
};

export default function SeguimientoPage() {
  return (
    <div className="container-page py-14">
      <nav className="text-xs text-muted-2">
        <Link href="/" className="transition hover:text-accent">
          Inicio
        </Link>
        <span className="mx-2">/</span>
        <span className="text-muted">Rastrear mi pedido</span>
      </nav>

      <header className="mt-8 max-w-3xl">
        <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
          Rastrear mi pedido
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-muted">
          Escribe tu numero de pedido y te decimos en que va. Funciona para los pedidos
          pagados con tarjeta y para los que cerraste por WhatsApp.
        </p>
      </header>

      <Suspense
        fallback={
          <div className="container-page py-24 text-center">
            <p className="text-sm text-muted">Cargando el buscador de pedidos...</p>
          </div>
        }
      >
        <SeguimientoForm />
      </Suspense>
    </div>
  );
}
