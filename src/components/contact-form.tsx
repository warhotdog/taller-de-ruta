"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { site } from "@/data/site";
import { buildContactMessage, buildWhatsappLink } from "@/lib/whatsapp";

type Fields = {
  name?: string;
  email?: string;
  phone?: string;
  orderId?: string;
  message?: string;
};

type State =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "error"; message: string; fallbackLink?: string }
  | { kind: "sent"; id: string; waLink: string };

const SUBJECTS = [
  "Duda de un producto",
  "Estado de mi pedido",
  "Envio y entrega",
  "Devolucion o garantia",
  "Pedido por mayoreo",
  "Otro",
];

/**
 * Formulario de contacto.
 *
 * El mensaje se guarda en el servidor y ademas se genera un enlace de
 * WhatsApp con el texto ya escrito: si algo falla, el cliente nunca se queda
 * sin poder escribirnos.
 */
export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [orderId, setOrderId] = useState("");
  const [subject, setSubject] = useState(SUBJECTS[0]);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Fields>({});
  const [state, setState] = useState<State>({ kind: "idle" });

  // Enlace de WhatsApp armado en el navegador: sirve de respaldo si el
  // servidor no responde, para que el cliente no pierda su mensaje.
  const localLink = useMemo(
    () =>
      buildWhatsappLink(
        buildContactMessage({
          name: name.trim() || "Cliente de la web",
          email: email.trim(),
          phone: phone.trim(),
          orderId: orderId.trim().toUpperCase(),
          subject,
          message: message.trim(),
        }),
      ),
    [name, email, phone, orderId, subject, message],
  );

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setState({ kind: "sending" });
    setErrors({});

    try {
      const response = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, orderId, subject, message }),
      });

      const data = (await response.json()) as {
        error?: string;
        fields?: Fields;
        id?: string;
        waLink?: string;
      };

      if (response.status === 422 && data.fields) {
        setErrors(data.fields);
        setState({
          kind: "error",
          message: "Revisa los campos marcados.",
          fallbackLink: localLink,
        });
        return;
      }

      if (!response.ok || !data.waLink) {
        setState({
          kind: "error",
          message:
            data.error ??
            "No pudimos guardar tu mensaje. Usa WhatsApp para enviarnoslo ahora.",
          fallbackLink: localLink,
        });
        return;
      }

      setState({ kind: "sent", id: data.id ?? "", waLink: data.waLink });
    } catch {
      setState({
        kind: "error",
        message:
          "Error de conexion. Escribenos por WhatsApp para que no se te pierda el mensaje.",
        fallbackLink: localLink,
      });
    }
  }

  if (state.kind === "sent") {
    return (
      <div className="rounded-xl border border-line bg-surface p-6 sm:p-8">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-success/15 text-xl text-success">
          ✓
        </div>

        <h2 className="mt-5 text-lg font-bold">Ya guardamos tu mensaje</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {state.id ? (
            <>
              Tu mensaje quedo registrado con el folio{" "}
              <span className="font-mono font-semibold text-cream">{state.id}</span>.{" "}
            </>
          ) : null}
          Ahora solo falta que nos llegue: abre WhatsApp y el texto va escrito, solo
          presiona enviar.
        </p>

        <a
          href={state.waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 block rounded-lg bg-accent px-6 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-accent-hover"
        >
          Abrir WhatsApp y enviar mi mensaje
        </a>

        <div className="mt-4 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => {
              void navigator.clipboard?.writeText(state.waLink);
            }}
            className="rounded-lg border border-line px-5 py-3 text-sm font-semibold transition hover:border-line-2 hover:bg-surface-2"
          >
            Copiar el enlace
          </button>

          <a
            href={`mailto:${site.email}`}
            className="rounded-lg border border-line px-5 py-3 text-sm font-semibold transition hover:border-line-2 hover:bg-surface-2"
          >
            Mandar por correo
          </a>

          <button
            type="button"
            onClick={() => {
              setState({ kind: "idle" });
              setName("");
              setEmail("");
              setPhone("");
              setOrderId("");
              setMessage("");
            }}
            className="rounded-lg px-5 py-3 text-sm font-semibold text-muted transition hover:text-accent"
          >
            Escribir otro mensaje
          </button>
        </div>

        <p className="mt-4 text-xs leading-relaxed text-muted-2">
          {site.responseTime}.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-line bg-surface p-6 sm:p-8"
    >
      <h2 className="text-lg font-bold">Mandanos un mensaje</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        Llena lo que tengas. Con tu numero de pedido resolvemos en el primer mensaje.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field
          label="Nombre"
          value={name}
          onChange={setName}
          error={errors.name}
          className="sm:col-span-2"
          autoComplete="name"
        />

        <Field
          label="Correo electronico (opcional)"
          type="email"
          value={email}
          onChange={setEmail}
          error={errors.email}
          autoComplete="email"
        />

        <Field
          label="Telefono (opcional)"
          type="tel"
          value={phone}
          onChange={setPhone}
          error={errors.phone}
          autoComplete="tel"
        />

        <Field
          label="Numero de pedido (opcional)"
          value={orderId}
          onChange={(value) => setOrderId(value.toUpperCase())}
          error={errors.orderId}
          placeholder="TDR-XXXX-XXXX"
          className="sm:col-span-2"
        />

        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <label htmlFor="subject" className="text-xs font-medium text-muted">
            Motivo
          </label>
          <select
            id="subject"
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
            className="rounded-lg border border-line bg-ink-2 px-3.5 py-2.5 text-sm outline-none transition focus:border-accent"
          >
            {SUBJECTS.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <label htmlFor="message" className="text-xs font-medium text-muted">
            Mensaje
          </label>
          <textarea
            id="message"
            rows={5}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Cuentanos que necesitas..."
            className="resize-none rounded-lg border border-line bg-ink-2 px-3.5 py-2.5 text-sm outline-none transition focus:border-accent"
          />
          {errors.message && <p className="text-xs text-red-400">{errors.message}</p>}
        </div>
      </div>

      <button
        type="submit"
        disabled={state.kind === "sending"}
        className="mt-6 w-full rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-60"
      >
        {state.kind === "sending" ? "Guardando tu mensaje..." : "Guardar y mandar por WhatsApp"}
      </button>

      {state.kind === "error" && (
        <div className="mt-4 rounded-lg border border-red-500/40 bg-red-500/10 px-3.5 py-3 text-xs leading-relaxed text-red-300">
          <p>{state.message}</p>
          {state.fallbackLink ? (
            <a
              href={state.fallbackLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2.5 inline-block font-semibold underline underline-offset-4"
            >
              Escribir por WhatsApp de todos modos
            </a>
          ) : null}
        </div>
      )}

      <p className="mt-4 text-xs leading-relaxed text-muted-2">
        Guardamos tu mensaje en el servidor y te damos un enlace de WhatsApp con el
        texto ya escrito. Si prefieres, tambien puedes{" "}
        <Link
          href="/seguimiento"
          className="underline underline-offset-4 transition hover:text-accent"
        >
          rastrear tu pedido
        </Link>{" "}
        con tu numero TDR-XXXX-XXXX.
      </p>
    </form>
  );
}

function Field({
  label,
  value,
  onChange,
  error,
  type = "text",
  className = "",
  autoComplete,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  className?: string;
  autoComplete?: string;
  placeholder?: string;
}) {
  const id = label.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label htmlFor={id} className="text-xs font-medium text-muted">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        autoComplete={autoComplete}
        onChange={(event) => onChange(event.target.value)}
        className={`rounded-lg border bg-ink-2 px-3.5 py-2.5 text-sm outline-none transition focus:border-accent ${
          error ? "border-red-500" : "border-line"
        }`}
      />
      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  );
}
