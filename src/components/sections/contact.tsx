"use client";

import * as React from "react";
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
import { useI18n } from "@/lib/i18n/context";
import { SITE, SERVICE_OPTIONS } from "@/lib/site";
import { cn } from "@/lib/utils";

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const { t, locale } = useI18n();
  const [status, setStatus] = React.useState<Status>("idle");
  const [errors, setErrors] = React.useState<Record<string, string>>({});

  // Bilingual service options for the dropdown
  const serviceOptions = SERVICE_OPTIONS.map((s, i) => ({
    value: s,
    label: t(`services.${["deep","regular","light","weekly","postConstruction","commercial","eco","hourly"][i]}`) ?? s,
  }));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const data = Object.fromEntries(fd.entries()) as Record<string, string>;

    const errs: Record<string, string> = {};
    if (!data.name?.trim()) errs.name = t("contact.errorName").replace("contact.errorName", t("book.errorName")) || t("book.errorName");
    if (!data.phone?.trim()) errs.phone = t("book.errorPhone");
    if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      errs.email = t("book.errorEmail");
    if (!data.service) errs.service = t("book.errorService");

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
    { icon: Phone, label: t("contact.callAnytime"), value: SITE.phone, href: SITE.phoneHref },
    { icon: Mail, label: t("contact.emailUs"), value: SITE.email, href: `mailto:${SITE.email}` },
    { icon: Clock, label: t("contact.availability"), value: t("contact.daysWeek"), href: null },
    { icon: MapPin, label: t("contact.serviceArea"), value: t("contact.areaValue"), href: null },
  ];

  return (
    <SectionShell id="contact" className="bg-gradient-to-b from-white to-gold-soft/40">
      <SectionHeading
        eyebrow={t("contact.eyebrow")}
        title={
          <>
            {t("contact.title1")}
            <span className="bg-gradient-to-r from-[#C62828] to-[#6A1B9A] bg-clip-text text-transparent">
              {t("contact.title2")}
            </span>
          </>
        }
        description={t("contact.description")}
      />

      <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
        {/* Left — contact info */}
        <Reveal className="flex flex-col gap-5">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1A237E] to-[#0D1642] p-7 text-white">
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold/20 blur-2xl" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-gold">
                <Phone className="size-3" />
                {t("contact.callAnytime")}
              </span>
              <a
                href={SITE.phoneHref}
                className="mt-4 block font-heading text-2xl font-extrabold tracking-tight text-white transition-colors hover:text-gold sm:text-3xl"
              >
                {SITE.phone}
              </a>
              <p className="mt-2 text-sm text-white/65">{t("contact.callDesc")}</p>
              <p className="mt-4 flex items-center gap-2 text-sm font-semibold italic text-gold">
                <span className="size-1.5 rounded-full bg-gold" />
                {SITE.tagline}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {contactItems.map((item) => {
              const Inner = (
                <div className="group flex h-full items-start gap-3 rounded-2xl border border-navy/5 bg-white p-4 transition-all hover:border-gold/20 hover:shadow-md">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#1A237E] to-[#0D1642] text-white transition-transform group-hover:scale-110">
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

          <div className="rounded-2xl border border-gold/30 bg-gold-soft/60 p-5">
            <p className="text-sm font-medium leading-relaxed text-navy">
              <span className="font-bold text-[#9B7B0E]">{t("contact.noObligation")}</span>{" "}
              {t("contact.noObligationDesc")}
            </p>
          </div>
        </Reveal>

        {/* Right — quote form */}
        <Reveal delay={0.1}>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="relative overflow-hidden rounded-3xl border border-navy/5 bg-white p-6 shadow-[0_20px_60px_-30px_rgba(13,22,66,0.3)] sm:p-8"
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-2xl bg-gradient-to-br from-[#E53935] to-[#C62828] text-white shadow-md">
                <CalendarDays className="size-5" />
              </span>
              <div>
                <h3 className="font-heading text-lg font-bold text-navy">{t("contact.formTitle")}</h3>
                <p className="text-sm text-muted-foreground">{t("contact.formSub")}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label={t("contact.name")} error={errors.name} required>
                <input name="name" type="text" placeholder={locale === "es" ? "Tu nombre completo" : "Your full name"} className={inputClass(!!errors.name)} />
              </Field>
              <Field label={t("contact.phone")} error={errors.phone} required>
                <input name="phone" type="tel" placeholder="(516) 205-8884" className={inputClass(!!errors.phone)} />
              </Field>
              <Field label={t("contact.email")} error={errors.email}>
                <input name="email" type="email" placeholder={locale === "es" ? "tu@correo.com" : "you@example.com"} className={inputClass(!!errors.email)} />
              </Field>
              <Field label={t("contact.serviceNeeded")} error={errors.service} required>
                <select
                  name="service"
                  defaultValue=""
                  className={cn(inputClass(!!errors.service), "appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22none%22%20stroke%3D%22%236b7280%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22m4%206%204%204%204-4%22%2F%3E%3C%2Fsvg%3E')] bg-[length:16px] bg-[right_0.85rem_center] bg-no-repeat pr-10")}
                >
                  <option value="" disabled>{t("contact.selectService")}</option>
                  {serviceOptions.map((s) => (
                    <option key={s.value} value={s.value}>{s.label}</option>
                  ))}
                </select>
              </Field>
              <Field label={t("contact.preferredDate")}>
                <input name="date" type="date" className={inputClass(false)} />
              </Field>
              <Field label={t("contact.message")}>
                <input name="message" type="text" placeholder={locale === "es" ? "Cuéntanos sobre tu espacio" : "Tell us about your space"} className={inputClass(false)} />
              </Field>
            </div>

            <div className="mt-4">
              <label className="block">
                <span className="mb-1.5 block text-sm font-semibold text-navy">{t("contact.additionalDetails")}</span>
                <textarea name="details" rows={3} placeholder={t("contact.detailsPlaceholder")} className={cn(inputClass(false), "resize-none")} />
              </label>
            </div>

            <button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="mt-6 group inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-[0.95rem] font-semibold text-white shadow-[0_12px_30px_-10px_rgba(198,40,40,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-12px_rgba(198,40,40,0.8)] disabled:cursor-not-allowed disabled:opacity-70 bg-gradient-to-br from-[#E53935] to-[#C62828] hover:from-[#EF4444] hover:to-[#D32F2F]"
            >
              {status === "loading" ? (
                <><Loader2 className="size-4 animate-spin" />{t("contact.sending")}</>
              ) : status === "success" ? (
                <><CheckCircle2 className="size-5" />{t("contact.sent")}</>
              ) : (
                <><Send className="size-4 transition-transform group-hover:translate-x-0.5" />{t("contact.submit")}</>
              )}
            </button>

            {status === "error" ? (
              <p className="mt-3 text-center text-sm font-medium text-crimson">
                {t("contact.error")} {SITE.phone}.
              </p>
            ) : null}

            <p className="mt-4 text-center text-xs text-muted-foreground">{t("contact.privacy")}</p>
          </form>
        </Reveal>
      </div>
    </SectionShell>
  );
}

function Field({ label, error, required, children }: { label: string; error?: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 flex items-center gap-1 text-sm font-semibold text-navy">
        {label}
        {required ? <span className="text-crimson">*</span> : null}
      </span>
      {children}
      {error ? <span className="mt-1 block text-xs font-medium text-crimson">{error}</span> : null}
    </label>
  );
}

function inputClass(hasError: boolean) {
  return cn(
    "w-full rounded-xl border bg-white px-4 py-2.5 text-sm text-navy shadow-sm transition-colors placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold",
    hasError ? "border-crimson/50 focus:border-crimson focus:ring-crimson/20" : "border-navy/10"
  );
}
