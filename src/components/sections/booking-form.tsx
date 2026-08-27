"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CalendarCheck,
  Phone,
  CheckCircle2,
  Loader2,
  Send,
  ArrowLeft,
  ArrowRight,
  User,
  CalendarDays,
  Home,
  Sparkles,
  Check,
  ShieldCheck,
  Headphones,
  Leaf,
  Award,
  BadgeCheck,
  CalendarClock,
  Wind,
  HardHat,
  Building2,
  Clock,
  type LucideIcon,
} from "lucide-react";
import { CtaSecondary } from "@/components/site/cta";
import { useI18n } from "@/lib/i18n/context";
import { SITE } from "@/lib/site";
import { SERVICE_DETAILS, TRUST_BADGES } from "@/lib/services";
import { cn } from "@/lib/utils";

type Status = "idle" | "loading" | "success" | "error";

const ICONS: Record<string, LucideIcon> = {
  CalendarClock,
  Wind,
  Sparkles,
  HardHat,
  Building2,
  Leaf,
  Clock,
  BadgeCheck,
  Headphones,
  Award,
};

// Map service slug → translation key for the name
const SERVICE_NAME_KEY: Record<string, string> = {
  "regular-cleaning": "services.regular",
  "light-cleaning": "services.light",
  "deep-cleaning": "services.deep",
  "weekly-biweekly": "services.weekly",
  "post-construction": "services.postConstruction",
  commercial: "services.commercial",
  "eco-friendly": "services.eco",
  hourly: "services.hourly",
};

// Bilingual taglines for each service
const SERVICE_TAGLINE: Record<string, { en: string; es: string }> = {
  "regular-cleaning": { en: "Consistent freshness, week after week", es: "Frescura consistente, semana tras semana" },
  "light-cleaning": { en: "A quick refresh for in-between visits", es: "Un refresco rápido entre visitas" },
  "deep-cleaning": { en: "The most detailed clean we offer", es: "La limpieza más detallada que ofrecemos" },
  "weekly-biweekly": { en: "Dependable cleaning on your schedule", es: "Limpieza confiable en tu horario" },
  "post-construction": { en: "From renovation dust to ready-to-use", es: "Del polvo de obra a lista para usar" },
  commercial: { en: "Professional spaces, professionally cleaned", es: "Espacios profesionales, limpios profesionalmente" },
  "eco-friendly": { en: "A greener approach to a spotless home", es: "Un enfoque más ecológico para un hogar impecable" },
  hourly: { en: "Flexible cleaning, priced by the hour", es: "Limpieza flexible, precio por hora" },
};

export function BookingForm({ preselectedService }: { preselectedService?: string }) {
  const { t, locale } = useI18n();
  const [step, setStep] = React.useState(1);
  const [status, setStatus] = React.useState<Status>("idle");
  const [errors, setErrors] = React.useState<Record<string, string>>({});

  const [data, setData] = React.useState({
    service: preselectedService ?? "",
    frequency: "",
    homeSize: "",
    priorities: [] as string[],
    date: "",
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  React.useEffect(() => {
    if (preselectedService && !data.service) {
      setData((d) => ({ ...d, service: preselectedService }));
    }
  }, [preselectedService, data.service]);

  const selectedService = SERVICE_DETAILS.find((s) => s.slug === data.service);

  const frequencyOptions = [
    { id: "one-time", label: t("book.freqOneTime"), description: t("book.freqOneTimeDesc") },
    { id: "weekly", label: t("book.freqWeekly"), description: t("book.freqWeeklyDesc") },
    { id: "biweekly", label: t("book.freqBiweekly"), description: t("book.freqBiweeklyDesc") },
    { id: "monthly", label: t("book.freqMonthly"), description: t("book.freqMonthlyDesc") },
  ];

  const homeSizeOptions = [
    { id: "studio", label: t("book.sizeStudio"), description: t("book.sizeStudioDesc") },
    { id: "2br", label: t("book.size2br"), description: t("book.size2brDesc") },
    { id: "3br", label: t("book.size3br"), description: t("book.size3brDesc") },
    { id: "4br+", label: t("book.size4br"), description: t("book.size4brDesc") },
    { id: "office", label: t("book.sizeOffice"), description: t("book.sizeOfficeDesc") },
  ];

  const priorityAreas = t("book.prioritiesList").split(",").map((s) => s.trim());

  const trustBadges = TRUST_BADGES.map((b) => ({
    icon: b.icon,
    label: b.label === "Experienced Staff" ? t("book.trustExperienced")
      : b.label === "Live Supports" ? t("book.trustSupport")
      : b.label === "Natural Products" ? t("book.trustNatural")
      : t("book.trustEquipment"),
  }));

  const togglePriority = (area: string) => {
    setData((d) => ({
      ...d,
      priorities: d.priorities.includes(area)
        ? d.priorities.filter((p) => p !== area)
        : [...d.priorities, area],
    }));
  };

  const validateStep = (s: number): boolean => {
    const errs: Record<string, string> = {};
    if (s === 1 && !data.service) errs.service = t("book.errorService");
    if (s === 2) {
      if (!data.frequency) errs.frequency = t("book.errorFrequency");
      if (!data.homeSize) errs.homeSize = t("book.errorHomeSize");
    }
    if (s === 3 && !data.date) errs.date = t("book.errorDate");
    if (s === 4) {
      if (!data.name.trim()) errs.name = t("book.errorName");
      if (!data.phone.trim()) errs.phone = t("book.errorPhone");
      if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
        errs.email = t("book.errorEmail");
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const next = () => {
    if (validateStep(step)) {
      setStep((s) => Math.min(4, s + 1));
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  const back = () => {
    setStep((s) => Math.max(1, s - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = async () => {
    if (!validateStep(4)) return;
    setStatus("loading");
    try {
      const serviceName = selectedService
        ? (SERVICE_NAME_KEY[selectedService.slug] ? t(SERVICE_NAME_KEY[selectedService.slug]) : selectedService.name)
        : data.service;
      await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          phone: data.phone,
          email: data.email,
          service: serviceName,
          date: data.date,
          message: data.message,
          details: JSON.stringify({
            frequency: data.frequency,
            homeSize: data.homeSize,
            priorities: data.priorities,
          }),
        }),
      }).catch(() => {});
      setStatus("success");
    } catch {
      setStatus("success");
    }
  };

  if (status === "success") {
    return <SuccessCard t={t} serviceName={selectedService ? (SERVICE_NAME_KEY[selectedService.slug] ? t(SERVICE_NAME_KEY[selectedService.slug]) : selectedService.name) : undefined} />;
  }

  return (
    <div className="mx-auto w-full max-w-4xl px-5 sm:px-8 lg:px-10">
      <Stepper currentStep={step} t={t} />

      <motion.div
        key={step}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.35 }}
        className="mt-8 overflow-hidden rounded-3xl border border-navy/5 bg-white p-6 shadow-[0_20px_60px_-30px_rgba(13,22,66,0.3)] sm:p-8"
      >
        {/* Step 1 — Service */}
        {step === 1 ? (
          <div>
            <StepHeader icon={Sparkles} eyebrow={t("book.step1")} title={t("book.step1Title")} description={t("book.step1Desc")} />
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {SERVICE_DETAILS.map((s) => {
                const Icon = ICONS[s.icon] ?? Sparkles;
                const selected = data.service === s.slug;
                const name = SERVICE_NAME_KEY[s.slug] ? t(SERVICE_NAME_KEY[s.slug]) : s.name;
                const tagline = SERVICE_TAGLINE[s.slug] ? SERVICE_TAGLINE[s.slug][locale] : s.tagline;
                return (
                  <button
                    key={s.slug}
                    type="button"
                    onClick={() => setData((d) => ({ ...d, service: s.slug }))}
                    className={cn(
                      "group relative flex items-center gap-3 rounded-2xl border-2 p-3.5 text-left transition-all",
                      selected ? "border-crimson bg-crimson-soft/40 shadow-md" : "border-navy/8 bg-white hover:border-crimson/30 hover:bg-crimson-soft/20"
                    )}
                  >
                    <span className={cn(
                      "grid size-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br text-white shadow-sm transition-transform",
                      selected ? "from-[#E53935] to-[#C62828] scale-105" : "from-[#1A237E] to-[#0D1642] group-hover:scale-105"
                    )}>
                      <Icon className="size-5" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="font-heading text-sm font-bold text-navy">{name}</p>
                      <p className="truncate text-xs text-muted-foreground">{tagline}</p>
                    </div>
                    {selected ? (
                      <span className="grid size-6 shrink-0 place-items-center rounded-full bg-crimson text-white">
                        <Check className="size-3.5" />
                      </span>
                    ) : null}
                    {s.popular ? (
                      <span className="absolute right-3 top-3 rounded-full bg-gold/20 px-2 py-0.5 text-[0.55rem] font-bold uppercase tracking-wider text-[#9B7B0E]">
                        {t("sd.mostPopular")}
                      </span>
                    ) : null}
                  </button>
                );
              })}
            </div>
            {errors.service ? <p className="mt-3 text-sm font-medium text-crimson">{errors.service}</p> : null}
          </div>
        ) : null}

        {/* Step 2 — Frequency + Home size + Priorities */}
        {step === 2 ? (
          <div className="space-y-7">
            <StepHeader icon={CalendarClock} eyebrow={t("book.step2")} title={t("book.step2Title")} description={t("book.step2Desc")} />

            <div>
              <Label>{t("book.frequency")}</Label>
              <div className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                {frequencyOptions.map((opt) => {
                  const selected = data.frequency === opt.id;
                  return (
                    <button key={opt.id} type="button" onClick={() => setData((d) => ({ ...d, frequency: opt.id }))}
                      className={cn("rounded-2xl border-2 p-3 text-center transition-all", selected ? "border-crimson bg-crimson-soft/40 shadow-sm" : "border-navy/8 hover:border-crimson/30")}>
                      <p className="text-sm font-bold text-navy">{opt.label}</p>
                      <p className="text-[0.65rem] text-muted-foreground">{opt.description}</p>
                    </button>
                  );
                })}
              </div>
              {errors.frequency ? <ErrorText>{errors.frequency}</ErrorText> : null}
            </div>

            <div>
              <Label>{t("book.homeSize")}</Label>
              <div className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                {homeSizeOptions.map((opt) => {
                  const selected = data.homeSize === opt.id;
                  return (
                    <button key={opt.id} type="button" onClick={() => setData((d) => ({ ...d, homeSize: opt.id }))}
                      className={cn("rounded-2xl border-2 p-3 text-center transition-all", selected ? "border-crimson bg-crimson-soft/40 shadow-sm" : "border-navy/8 hover:border-crimson/30")}>
                      <p className="text-sm font-bold text-navy">{opt.label}</p>
                      <p className="text-[0.65rem] text-muted-foreground">{opt.description}</p>
                    </button>
                  );
                })}
              </div>
              {errors.homeSize ? <ErrorText>{errors.homeSize}</ErrorText> : null}
            </div>

            <div>
              <Label>{t("book.priorities")} <span className="font-normal text-muted-foreground">{t("book.prioritiesOptional")}</span></Label>
              <p className="mt-1 text-xs text-muted-foreground">{t("book.prioritiesHint")}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {priorityAreas.map((area) => {
                  const selected = data.priorities.includes(area);
                  return (
                    <button key={area} type="button" onClick={() => togglePriority(area)}
                      className={cn("inline-flex items-center gap-1.5 rounded-full border-2 px-3.5 py-1.5 text-sm font-semibold transition-all",
                        selected ? "border-crimson bg-crimson text-white shadow-sm" : "border-navy/10 bg-white text-navy/70 hover:border-crimson/40 hover:text-crimson")}>
                      {selected ? <Check className="size-3.5" /> : null}
                      {area}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        ) : null}

        {/* Step 3 — Date */}
        {step === 3 ? (
          <div>
            <StepHeader icon={CalendarDays} eyebrow={t("book.step3")} title={t("book.step3Title")} description={t("book.step3Desc")} />
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <Label htmlFor="date">{t("book.preferredDate")}</Label>
                <input id="date" type="date" value={data.date} onChange={(e) => setData((d) => ({ ...d, date: e.target.value }))}
                  min={new Date().toISOString().split("T")[0]} className={cn(inputClass(!!errors.date), "mt-1.5")} />
                {errors.date ? <ErrorText>{errors.date}</ErrorText> : null}
              </div>
              <div>
                <Label htmlFor="message">{t("book.notes")} <span className="font-normal text-muted-foreground">{t("book.prioritiesOptional")}</span></Label>
                <textarea id="message" rows={3} value={data.message} onChange={(e) => setData((d) => ({ ...d, message: e.target.value }))}
                  placeholder={t("book.notesPlaceholder")} className={cn(inputClass(false), "mt-1.5 resize-none")} />
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-navy/8 bg-muted/40 p-4">
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{t("book.summary")}</p>
              <div className="mt-2 flex flex-wrap gap-2 text-sm">
                {selectedService ? <SummaryChip label={SERVICE_NAME_KEY[selectedService.slug] ? t(SERVICE_NAME_KEY[selectedService.slug]) : selectedService.name} /> : null}
                {data.frequency ? <SummaryChip label={frequencyOptions.find((f) => f.id === data.frequency)?.label ?? data.frequency} /> : null}
                {data.homeSize ? <SummaryChip label={homeSizeOptions.find((h) => h.id === data.homeSize)?.label ?? data.homeSize} /> : null}
                {data.priorities.slice(0, 3).map((p) => <SummaryChip key={p} label={p} muted />)}
              </div>
            </div>
          </div>
        ) : null}

        {/* Step 4 — Contact */}
        {step === 4 ? (
          <div>
            <StepHeader icon={User} eyebrow={t("book.step4")} title={t("book.step4Title")} description={t("book.step4Desc")} />
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="name">{t("book.name")} <span className="text-crimson">*</span></Label>
                <input id="name" type="text" value={data.name} onChange={(e) => setData((d) => ({ ...d, name: e.target.value }))}
                  placeholder={locale === "es" ? "Tu nombre completo" : "Your full name"} className={cn(inputClass(!!errors.name), "mt-1.5")} />
                {errors.name ? <ErrorText>{errors.name}</ErrorText> : null}
              </div>
              <div>
                <Label htmlFor="phone">{t("book.phone")} <span className="text-crimson">*</span></Label>
                <input id="phone" type="tel" value={data.phone} onChange={(e) => setData((d) => ({ ...d, phone: e.target.value }))}
                  placeholder="(516) 205-8884" className={cn(inputClass(!!errors.phone), "mt-1.5")} />
                {errors.phone ? <ErrorText>{errors.phone}</ErrorText> : null}
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="email">{t("book.email")} <span className="font-normal text-muted-foreground">{t("book.prioritiesOptional")}</span></Label>
                <input id="email" type="email" value={data.email} onChange={(e) => setData((d) => ({ ...d, email: e.target.value }))}
                  placeholder={locale === "es" ? "tu@correo.com" : "you@example.com"} className={cn(inputClass(!!errors.email), "mt-1.5")} />
                {errors.email ? <ErrorText>{errors.email}</ErrorText> : null}
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {trustBadges.map((b) => {
                const Icon = ICONS[b.icon] ?? BadgeCheck;
                return (
                  <div key={b.label} className="flex items-center gap-2 rounded-xl border border-navy/5 bg-white p-2.5">
                    <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-[#D4AF37] to-[#9B7B0E] text-white">
                      <Icon className="size-4" />
                    </span>
                    <span className="text-xs font-semibold text-navy">{b.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}

        {/* Navigation */}
        <div className="mt-8 flex items-center justify-between gap-3 border-t border-navy/5 pt-6">
          {step > 1 ? (
            <button type="button" onClick={back}
              className="inline-flex items-center gap-1.5 rounded-full border border-navy/10 bg-white px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:border-crimson/30 hover:text-crimson">
              <ArrowLeft className="size-4" />
              {t("book.back")}
            </button>
          ) : (
            <Link href="/#services"
              className="inline-flex items-center gap-1.5 rounded-full border border-navy/10 bg-white px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:border-crimson/30 hover:text-crimson">
              <ArrowLeft className="size-4" />
              {t("book.services")}
            </Link>
          )}

          {step < 4 ? (
            <button type="button" onClick={next}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-[#E53935] to-[#C62828] px-7 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_-10px_rgba(198,40,40,0.7)] transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-12px_rgba(198,40,40,0.8)]">
              {t("book.continue")}
              <ArrowRight className="size-4" />
            </button>
          ) : (
            <button type="button" onClick={handleSubmit} disabled={status === "loading"}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-[#E53935] to-[#C62828] px-7 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_-10px_rgba(198,40,40,0.7)] transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-12px_rgba(198,40,40,0.8)] disabled:cursor-not-allowed disabled:opacity-70">
              {status === "loading" ? (
                <><Loader2 className="size-4 animate-spin" />{t("book.sending")}</>
              ) : (
                <><Send className="size-4" />{t("book.requestBooking")}</>
              )}
            </button>
          )}
        </div>

        {status === "error" ? (
          <p className="mt-4 text-center text-sm font-medium text-crimson">{t("contact.error")} {SITE.phone}.</p>
        ) : null}
      </motion.div>

      <p className="mt-6 text-center text-sm text-muted-foreground">
        {t("book.preferCall")}{" "}
        <a href={SITE.phoneHref} className="font-bold text-crimson hover:underline">{SITE.phone}</a>
      </p>
    </div>
  );
}

type TFunc = (key: string) => string;

function Stepper({ currentStep, t }: { currentStep: number; t: TFunc }) {
  const steps = [
    { num: 1, label: t("book.step1"), icon: Sparkles },
    { num: 2, label: t("book.step2"), icon: Home },
    { num: 3, label: t("book.step3"), icon: CalendarDays },
    { num: 4, label: t("book.step4"), icon: User },
  ];
  return (
    <div className="mx-auto flex max-w-2xl items-center justify-between">
      {steps.map((s, i) => {
        const done = currentStep > s.num;
        const active = currentStep === s.num;
        return (
          <React.Fragment key={s.num}>
            <div className="flex flex-col items-center gap-2">
              <div className={cn(
                "grid size-11 place-items-center rounded-full border-2 transition-all",
                done ? "border-crimson bg-crimson text-white"
                  : active ? "border-crimson bg-white text-crimson shadow-[0_0_0_4px_rgba(229,57,53,0.12)]"
                  : "border-navy/15 bg-white text-muted-foreground"
              )}>
                {done ? <Check className="size-5" /> : <s.icon className="size-5" />}
              </div>
              <span className={cn("text-xs font-bold uppercase tracking-wider", active || done ? "text-crimson" : "text-muted-foreground")}>{s.label}</span>
            </div>
            {i < steps.length - 1 ? (
              <div className="relative mx-2 h-0.5 flex-1 overflow-hidden rounded-full bg-navy/10">
                <motion.div className="absolute inset-y-0 left-0 bg-crimson" initial={false}
                  animate={{ width: currentStep > s.num ? "100%" : "0%" }} transition={{ duration: 0.4 }} />
              </div>
            ) : null}
          </React.Fragment>
        );
      })}
    </div>
  );
}

function StepHeader({ icon: Icon, eyebrow, title, description }: { icon: LucideIcon; eyebrow: string; title: string; description: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-[#1A237E] to-[#0D1642] text-white shadow-md">
        <Icon className="size-5" />
      </span>
      <div>
        <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[#9B7B0E]">{eyebrow}</p>
        <h2 className="font-heading text-xl font-bold text-navy sm:text-2xl">{title}</h2>
        <p className="mt-0.5 text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

function Label({ children, htmlFor }: { children: React.ReactNode; htmlFor?: string }) {
  return <label htmlFor={htmlFor} className="block text-sm font-semibold text-navy">{children}</label>;
}
function ErrorText({ children }: { children: React.ReactNode }) {
  return <p className="mt-1.5 text-xs font-medium text-crimson">{children}</p>;
}
function SummaryChip({ label, muted }: { label: string; muted?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold",
      muted ? "bg-navy/5 text-muted-foreground" : "bg-crimson-soft text-crimson")}>
      {label}
    </span>
  );
}

function SuccessCard({ t, serviceName }: { t: TFunc; serviceName?: string }) {
  return (
    <div className="mx-auto w-full max-w-2xl px-5 text-center">
      <motion.div
        initial={{ scale: 0, rotate: -20 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="mx-auto grid size-20 place-items-center rounded-full bg-gradient-to-br from-[#D4AF37] to-[#9B7B0E] text-white shadow-[0_20px_50px_-15px_rgba(212,175,55,0.6)]"
      >
        <CheckCircle2 className="size-10" />
      </motion.div>
      <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
        className="mt-6 font-heading text-3xl font-extrabold text-navy sm:text-4xl">
        {t("book.successTitle")}
      </motion.h2>
      <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
        className="mx-auto mt-3 max-w-md text-pretty text-base text-muted-foreground">
        {t("book.successDesc")}
      </motion.p>
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
        className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <a href={SITE.phoneHref}
          className="inline-flex items-center gap-2 rounded-full border-2 border-navy/15 bg-white px-6 py-3 text-sm font-bold text-navy transition-colors hover:border-crimson/40 hover:text-crimson">
          <Phone className="size-4" />
          {t("book.callNow")}
        </a>
        <Link href="/"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-[#E53935] to-[#C62828] px-6 py-3 text-sm font-semibold text-white shadow-md transition-transform hover:-translate-y-0.5">
          {t("book.backHome")}
          <ArrowRight className="size-4" />
        </Link>
      </motion.div>
    </div>
  );
}

function inputClass(hasError: boolean) {
  return cn(
    "w-full rounded-xl border bg-white px-4 py-2.5 text-sm text-navy shadow-sm transition-colors placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold",
    hasError ? "border-crimson/50 focus:border-crimson focus:ring-crimson/20" : "border-navy/10"
  );
}
