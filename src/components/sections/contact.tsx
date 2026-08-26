"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  Send,
  CheckCircle2,
  Loader2,
  CalendarDays,
} from "lucide-react";
import { SectionHeading, SectionShell } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";
import { SITE, SERVICE_OPTIONS } from "@/lib/site";
import { cn } from "@/lib/utils";

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [status, setStatus] = React.useState<Status>("idle");
  const [errors, setErrors] = React.useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const data = Object.fromEntries(fd.entries()) as Record<string, string>;

    // simple validation
    const errs: Record<string, string> = {};
    if (!data.name?.trim()) errs.name = "Please enter your name.";
    if (!data.phone?.trim()) errs.phone = "Please enter your phone number.";
    if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      errs.email = "Please enter a valid email.";
    if (!data.service) errs.service = "Please select a service.";

    setErrors(errs);
    if (Object.keys(errs).length) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
      setTimeout(() => setStatus("idle"), 6000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 6000);
    }
  };

  const contactItems = [
    {
      icon: Phone,
      label: "Call Anytime",
      value: SITE.phone,
      href: SITE.phoneHref,
    },
    {
      icon: Mail,
      label: "Email Us",
      value: SITE.email,
      href: `mailto:${SITE.email}`,
    },
    {
      icon: Clock,
      label: "Availability",
      value: "7 days a week",
      href: null,
    },
    {
      icon: MapPin,
      label: "Service Area",
      value: "Residential & commercial",
      href: null,
    },
  ];

  return (
    <SectionShell id="contact" className="bg-gradient-to-b from-white to-brand-soft/40">
      <SectionHeading
        eyebrow="Contact / Quote"
        title={
          <>
            Let&apos;s Get Your Space{" "}
            <span className="text-brand">Looking Its Best</span>
          </>
        }
        description="Tell us what you need cleaned and we'll help you find the right service."
      />

      <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
        {/* Left — contact info */}
        <Reveal className="flex flex-col gap-5">
          {/* Phone highlight card */}
          <div className="relative overflow-hidden rounded-3xl bg-navy p-7 text-white">
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand/25 blur-2xl" />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-[#7FE3D0]">
                <Phone className="size-3" />
                Call Anytime
              </span>
              <a
                href={SITE.phoneHref}
                className="mt-4 block text-2xl font-extrabold tracking-tight text-white transition-colors hover:text-[#7FE3D0] sm:text-3xl"
              >
                {SITE.phone}
              </a>
              <p className="mt-2 text-sm text-white/65">
                Speak directly with our team — we&apos;re happy to answer any
                questions and help you book the right service.
              </p>
            </div>
          </div>

          {/* Contact grid */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {contactItems.map((item) => {
              const Inner = (
                <div className="group flex h-full items-start gap-3 rounded-2xl border border-navy/5 bg-white p-4 transition-all hover:border-brand/20 hover:shadow-md">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                    <item.icon className="size-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[0.65rem] font-bold uppercase tracking-wider text-muted-foreground">
                      {item.label}
                    </p>
                    <p className="mt-0.5 truncate text-sm font-semibold text-navy">
                      {item.value}
                    </p>
                  </div>
                </div>
              );
              return item.href ? (
                <a key={item.label} href={item.href} className="block">
                  {Inner}
                </a>
              ) : (
                <div key={item.label}>{Inner}</div>
              );
            })}
          </div>

          {/* trust note */}
          <div className="rounded-2xl border border-brand/15 bg-brand-soft/50 p-5">
            <p className="text-sm font-medium leading-relaxed text-navy">
              <span className="font-bold text-brand">No obligation.</span>{" "}
              Requesting a quote is free and there&apos;s no commitment. We&apos;ll
              get back to you with the right cleaning solution for your space.
            </p>
          </div>
        </Reveal>

        {/* Right — quote form */}
        <Reveal delay={0.1}>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="relative overflow-hidden rounded-3xl border border-navy/5 bg-white p-6 shadow-[0_20px_60px_-30px_rgba(15,34,48,0.3)] sm:p-8"
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-2xl bg-gradient-to-br from-[#15C3A5] to-[#0A8F7C] text-white shadow-md">
                <CalendarDays className="size-5" />
              </span>
              <div>
                <h3 className="text-lg font-bold text-navy">
                  Request a Free Quote
                </h3>
                <p className="text-sm text-muted-foreground">
                  We&apos;ll reply within one business day.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Name" error={errors.name} required>
                <input
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  className={inputClass(!!errors.name)}
                />
              </Field>
              <Field label="Phone" error={errors.phone} required>
                <input
                  name="phone"
                  type="tel"
                  placeholder="(516) 205-8884"
                  className={inputClass(!!errors.phone)}
                />
              </Field>
              <Field label="Email" error={errors.email}>
                <input
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className={inputClass(!!errors.email)}
                />
              </Field>
              <Field label="Service Needed" error={errors.service} required>
                <select
                  name="service"
                  defaultValue=""
                  className={cn(inputClass(!!errors.service), "appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22none%22%20stroke%3D%22%236b7280%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22m4%206%204%204%204-4%22%2F%3E%3C%2Fsvg%3E')] bg-[length:16px] bg-[right_0.85rem_center] bg-no-repeat pr-10")}
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {SERVICE_OPTIONS.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Preferred Date">
                <input
                  name="date"
                  type="date"
                  className={inputClass(false)}
                />
              </Field>
              <Field label="Message">
                <input
                  name="message"
                  type="text"
                  placeholder="Tell us about your space"
                  className={inputClass(false)}
                />
              </Field>
            </div>

            <div className="mt-4">
              <label className="block">
                <span className="mb-1.5 block text-sm font-semibold text-navy">
                  Additional Details
                </span>
                <textarea
                  name="details"
                  rows={3}
                  placeholder="Square footage, number of rooms, special requests, etc."
                  className={cn(inputClass(false), "resize-none")}
                />
              </label>
            </div>

            <button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className={cn(
                "mt-6 group inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-[0.95rem] font-semibold text-white shadow-[0_12px_30px_-10px_rgba(13,143,124,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-12px_rgba(13,143,124,0.8)] disabled:cursor-not-allowed disabled:opacity-70",
                "bg-gradient-to-br from-[#15C3A5] to-[#0A8F7C] hover:from-[#16CCA8] hover:to-[#0B9A84]"
              )}
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  Sending your request...
                </>
              ) : status === "success" ? (
                <>
                  <CheckCircle2 className="size-5" />
                  Request Sent — We&apos;ll be in touch!
                </>
              ) : (
                <>
                  <Send className="size-4 transition-transform group-hover:translate-x-0.5" />
                  Request a Quote
                </>
              )}
            </button>

            {status === "error" ? (
              <p className="mt-3 text-center text-sm font-medium text-destructive">
                Something went wrong. Please call us at {SITE.phone}.
              </p>
            ) : null}

            <p className="mt-4 text-center text-xs text-muted-foreground">
              By submitting, you agree to be contacted about your cleaning
              request. We respect your privacy.
            </p>
          </form>
        </Reveal>
      </div>
    </SectionShell>
  );
}

function Field({
  label,
  error,
  required,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 flex items-center gap-1 text-sm font-semibold text-navy">
        {label}
        {required ? <span className="text-brand">*</span> : null}
      </span>
      {children}
      {error ? (
        <span className="mt-1 block text-xs font-medium text-destructive">
          {error}
        </span>
      ) : null}
    </label>
  );
}

function inputClass(hasError: boolean) {
  return cn(
    "w-full rounded-xl border bg-white px-4 py-2.5 text-sm text-navy shadow-sm transition-colors placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand",
    hasError
      ? "border-destructive/50 focus:border-destructive focus:ring-destructive/20"
      : "border-navy/10"
  );
}
