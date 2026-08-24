"use client";

import { ArrowUpRight } from "@phosphor-icons/react";
import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/reveal";
import { contactNeutral, identity, type ContactCopy } from "@/content/copy";
import { site } from "@/lib/site";

type Status = "idle" | "loading" | "success" | "error";

export function Contact({ copy = contactNeutral }: { copy?: ContactCopy }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setError("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const payload = (await response.json()) as {
        ok: boolean;
        message?: string;
        fallback?: "linkedin";
      };

      if (payload.fallback === "linkedin") {
        setStatus("success");
        form.reset();
        return;
      }

      if (!response.ok || !payload.ok) {
        throw new Error(payload.message ?? "Could not send that.");
      }

      setStatus("success");
      form.reset();
    } catch (caught) {
      setStatus("error");
      setError(
        caught instanceof Error ? caught.message : copy.errorFallback,
      );
    }
  }

  return (
    <section id="contact" className="border-t border-line scroll-mt-20">
      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <h2 className="max-w-[16ch] text-3xl font-medium tracking-tight md:text-4xl">
            {copy.heading}
          </h2>
          <p className="mt-4 max-w-[48ch] text-[16px] leading-relaxed text-muted">
            {copy.body}
          </p>
        </Reveal>

        <Reveal delay={0.08} className="mt-12 max-w-xl">
          {status === "success" ? (
            <p className="border border-line bg-bg-elev px-5 py-6 text-[16px] leading-relaxed">
              {copy.success}
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block font-medium text-accent"
              >
                {copy.linkedinLabel}
              </a>
            </p>
          ) : (
            <form onSubmit={onSubmit} className="flex flex-col gap-5">
              <Field
                id="name"
                label={copy.nameLabel}
                type="text"
                autoComplete="name"
              />
              <Field
                id="email"
                label={copy.emailLabel}
                type="email"
                autoComplete="email"
              />
              <Field id="studio" label={copy.contextLabel} type="text" optional />
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-[14px] font-medium">
                  {copy.messageLabel}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="resize-y border border-ink/20 bg-input px-3 py-2.5 text-[15px] text-ink placeholder:text-muted focus:border-accent"
                />
              </div>

              {status === "error" ? (
                <p className="text-[14px] text-accent" role="alert">
                  {error}
                </p>
              ) : null}

              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex h-11 items-center justify-center whitespace-nowrap bg-accent px-5 text-[15px] font-medium text-accent-ink transition-[filter,transform] hover:brightness-110 active:scale-[0.98] disabled:opacity-60"
                >
                  {status === "loading" ? copy.sending : site.cta}
                </button>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center gap-1.5 px-2 text-[15px] font-medium text-ink"
                >
                  {identity.linkedinLabel}
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  type,
  autoComplete,
  optional = false,
}: {
  id: string;
  label: string;
  type: string;
  autoComplete?: string;
  optional?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-[14px] font-medium">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={!optional}
        autoComplete={autoComplete}
        className="h-11 border border-ink/20 bg-input px-3 text-[15px] text-ink placeholder:text-muted focus:border-accent"
      />
    </div>
  );
}
