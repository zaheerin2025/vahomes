"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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
  Clock,
  Sparkles,
  Check,
  Star,
  ShieldCheck,
  Headphones,
  Leaf,
  Award,
  BadgeCheck,
  CalendarClock,
  Wind,
  HardHat,
  Building2,
  type LucideIcon,
} from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { CtaSecondary } from "@/components/site/cta";
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

const FREQUENCY_OPTIONS = [
  { id: "one-time", label: "One-time", description: "Single visit" },
  { id: "weekly", label: "Weekly", description: "Every week" },
  { id: "biweekly", label: "Bi-Weekly", description: "Every 2 weeks" },
  { id: "monthly", label: "Monthly", description: "Every month" },
];

const HOME_SIZE_OPTIONS = [
  { id: "studio", label: "Studio / 1BR", description: "Up to 800 sqft" },
  { id: "2br", label: "2 Bedroom", description: "800–1200 sqft" },
  { id: "3br", label: "3 Bedroom", description: "1200–1800 sqft" },
  { id: "4br+", label: "4+ Bedroom", description: "1800+ sqft" },
  { id: "office", label: "Office / Commercial", description: "Workspace" },
];

const PRIORITY_AREAS = [
  "Kitchen",
  "Bathrooms",
  "Bedrooms",
  "Living Room",
  "Dining Room",
  "Floors",
  "Windows",
  "Laundry",
  "Organization",
  "Move-in/Move-out",
];

export function BookingForm({ preselectedService }: { preselectedService?: string }) {
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

  // sync preselected service
  React.useEffect(() => {
    if (preselectedService && !data.service) {
      setData((d) => ({ ...d, service: preselectedService }));
    }
  }, [preselectedService, data.service]);

  const selectedService = SERVICE_DETAILS.find((s) => s.slug === data.service);

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
    if (s === 1 && !data.service) errs.service = "Please select a service.";
    if (s === 2) {
      if (!data.frequency) errs.frequency = "Please choose a frequency.";
      if (!data.homeSize) errs.homeSize = "Please select your home size.";
    }
    if (s === 3) {
      if (!data.date) errs.date = "Please choose a preferred date.";
    }
    if (s === 4) {
      if (!data.name.trim()) errs.name = "Please enter your name.";
      if (!data.phone.trim()) errs.phone = "Please enter your phone.";
      if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
        errs.email = "Please enter a valid email.";
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
      const serviceName = selectedService?.name ?? data.service;
      const res = await fetch("/api/quote", {
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
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setTimeout(() => {
        window.location.href = "/#contact";
      }, 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 6000);
    }
  };

  if (status === "success") {
    return <SuccessCard service={selectedService?.name} />;
  }

  return (
    <div className="mx-auto w-full max-w-4xl px-5 sm:px-8 lg:px-10">
      {/* Stepper */}
      <Stepper currentStep={step} />

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
            <StepHeader
              icon={Sparkles}
              eyebrow="Step 1"
              title="Choose your service"
              description="Pick the cleaning service that fits your needs. You can change this later."
            />
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {SERVICE_DETAILS.map((s) => {
                const Icon = ICONS[s.icon] ?? Sparkles;
                const selected = data.service === s.slug;
                return (
                  <button
                    key={s.slug}
                    type="button"
                    onClick={() => setData((d) => ({ ...d, service: s.slug }))}
                    className={cn(
                      "group relative flex items-center gap-3 rounded-2xl border-2 p-3.5 text-left transition-all",
                      selected
                        ? "border-crimson bg-crimson-soft/40 shadow-md"
                        : "border-navy/8 bg-white hover:border-crimson/30 hover:bg-crimson-soft/20"
                    )}
                  >
                    <span className={cn(
                      "grid size-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br text-white shadow-sm transition-transform",
                      selected ? "from-[#E53935] to-[#C62828] scale-105" : "from-[#1A237E] to-[#0D1642] group-hover:scale-105"
                    )}>
                      <Icon className="size-5" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="font-heading text-sm font-bold text-navy">{s.name}</p>
                      <p className="truncate text-xs text-muted-foreground">{s.tagline}</p>
                    </div>
                    {selected ? (
                      <span className="grid size-6 shrink-0 place-items-center rounded-full bg-crimson text-white">
                        <Check className="size-3.5" />
                      </span>
                    ) : null}
                    {s.popular ? (
                      <span className="absolute right-3 top-3 rounded-full bg-gold/20 px-2 py-0.5 text-[0.55rem] font-bold uppercase tracking-wider text-[#9B7B0E]">
                        Popular
                      </span>
                    ) : null}
                  </button>
                );
              })}
            </div>
            {errors.service ? (
              <p className="mt-3 text-sm font-medium text-crimson">{errors.service}</p>
            ) : null}
          </div>
        ) : null}

        {/* Step 2 — Frequency + Home size + Priorities */}
        {step === 2 ? (
          <div className="space-y-7">
            <StepHeader
              icon={CalendarClock}
              eyebrow="Step 2"
              title="Tell us about your space"
              description="A few details so we can match the right team and time to your needs."
            />

            {/* Frequency */}
            <div>
              <Label>How often do you need cleaning?</Label>
              <div className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                {FREQUENCY_OPTIONS.map((opt) => {
                  const selected = data.frequency === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setData((d) => ({ ...d, frequency: opt.id }))}
                      className={cn(
                        "rounded-2xl border-2 p-3 text-center transition-all",
                        selected
                          ? "border-crimson bg-crimson-soft/40 shadow-sm"
                          : "border-navy/8 hover:border-crimson/30"
                      )}
                    >
                      <p className="text-sm font-bold text-navy">{opt.label}</p>
                      <p className="text-[0.65rem] text-muted-foreground">{opt.description}</p>
                    </button>
                  );
                })}
              </div>
              {errors.frequency ? <ErrorText>{errors.frequency}</ErrorText> : null}
            </div>

            {/* Home size */}
            <div>
              <Label>What size is your space?</Label>
              <div className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                {HOME_SIZE_OPTIONS.map((opt) => {
                  const selected = data.homeSize === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setData((d) => ({ ...d, homeSize: opt.id }))}
                      className={cn(
                        "rounded-2xl border-2 p-3 text-center transition-all",
                        selected
                          ? "border-crimson bg-crimson-soft/40 shadow-sm"
                          : "border-navy/8 hover:border-crimson/30"
                      )}
                    >
                      <p className="text-sm font-bold text-navy">{opt.label}</p>
                      <p className="text-[0.65rem] text-muted-foreground">{opt.description}</p>
                    </button>
                  );
                })}
              </div>
              {errors.homeSize ? <ErrorText>{errors.homeSize}</ErrorText> : null}
            </div>

            {/* Priority areas — chips */}
            <div>
              <Label>
                Priority areas <span className="font-normal text-muted-foreground">(optional)</span>
              </Label>
              <p className="mt-1 text-xs text-muted-foreground">
                Tap the areas you&apos;d like us to focus on.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {PRIORITY_AREAS.map((area) => {
                  const selected = data.priorities.includes(area);
                  return (
                    <button
                      key={area}
                      type="button"
                      onClick={() => togglePriority(area)}
                      className={cn(
                        "inline-flex items-center gap-1.5 rounded-full border-2 px-3.5 py-1.5 text-sm font-semibold transition-all",
                        selected
                          ? "border-crimson bg-crimson text-white shadow-sm"
                          : "border-navy/10 bg-white text-navy/70 hover:border-crimson/40 hover:text-crimson"
                      )}
                    >
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
            <StepHeader
              icon={CalendarDays}
              eyebrow="Step 3"
              title="When would you like it?"
              description="Pick a preferred date. We'll confirm the exact time with you."
            />
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <Label htmlFor="date">Preferred date</Label>
                <input
                  id="date"
                  type="date"
                  value={data.date}
                  onChange={(e) => setData((d) => ({ ...d, date: e.target.value }))}
                  min={new Date().toISOString().split("T")[0]}
                  className={cn(inputClass(!!errors.date), "mt-1.5")}
                />
                {errors.date ? <ErrorText>{errors.date}</ErrorText> : null}
              </div>
              <div>
                <Label htmlFor="message">Notes <span className="font-normal text-muted-foreground">(optional)</span></Label>
                <textarea
                  id="message"
                  rows={3}
                  value={data.message}
                  onChange={(e) => setData((d) => ({ ...d, message: e.target.value }))}
                  placeholder="Anything special we should know? (pets, parking, access, etc.)"
                  className={cn(inputClass(false), "mt-1.5 resize-none")}
                />
              </div>
            </div>

            {/* Summary card */}
            <div className="mt-6 rounded-2xl border border-navy/8 bg-muted/40 p-4">
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Your selection so far
              </p>
              <div className="mt-2 flex flex-wrap gap-2 text-sm">
                {selectedService ? (
                  <SummaryChip label={selectedService.name} />
                ) : null}
                {data.frequency ? (
                  <SummaryChip label={FREQUENCY_OPTIONS.find((f) => f.id === data.frequency)?.label ?? data.frequency} />
                ) : null}
                {data.homeSize ? (
                  <SummaryChip label={HOME_SIZE_OPTIONS.find((h) => h.id === data.homeSize)?.label ?? data.homeSize} />
                ) : null}
                {data.priorities.slice(0, 3).map((p) => (
                  <SummaryChip key={p} label={p} muted />
                ))}
              </div>
            </div>
          </div>
        ) : null}

        {/* Step 4 — Contact */}
        {step === 4 ? (
          <div>
            <StepHeader
              icon={User}
              eyebrow="Step 4"
              title="How can we reach you?"
              description="Almost done! Just your contact details and we'll send a confirmation."
            />
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="name">Name <span className="text-crimson">*</span></Label>
                <input
                  id="name"
                  type="text"
                  value={data.name}
                  onChange={(e) => setData((d) => ({ ...d, name: e.target.value }))}
                  placeholder="Your full name"
                  className={cn(inputClass(!!errors.name), "mt-1.5")}
                />
                {errors.name ? <ErrorText>{errors.name}</ErrorText> : null}
              </div>
              <div>
                <Label htmlFor="phone">Phone <span className="text-crimson">*</span></Label>
                <input
                  id="phone"
                  type="tel"
                  value={data.phone}
                  onChange={(e) => setData((d) => ({ ...d, phone: e.target.value }))}
                  placeholder="(516) 205-8884"
                  className={cn(inputClass(!!errors.phone), "mt-1.5")}
                />
                {errors.phone ? <ErrorText>{errors.phone}</ErrorText> : null}
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="email">Email <span className="font-normal text-muted-foreground">(optional)</span></Label>
                <input
                  id="email"
                  type="email"
                  value={data.email}
                  onChange={(e) => setData((d) => ({ ...d, email: e.target.value }))}
                  placeholder="you@example.com"
                  className={cn(inputClass(!!errors.email), "mt-1.5")}
                />
                {errors.email ? <ErrorText>{errors.email}</ErrorText> : null}
              </div>
            </div>

            {/* Trust badges */}
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {TRUST_BADGES.map((b) => {
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
            <button
              type="button"
              onClick={back}
              className="inline-flex items-center gap-1.5 rounded-full border border-navy/10 bg-white px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:border-crimson/30 hover:text-crimson"
            >
              <ArrowLeft className="size-4" />
              Back
            </button>
          ) : (
            <Link
              href="/#services"
              className="inline-flex items-center gap-1.5 rounded-full border border-navy/10 bg-white px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:border-crimson/30 hover:text-crimson"
            >
              <ArrowLeft className="size-4" />
              Services
            </Link>
          )}

          {step < 4 ? (
            <button
              type="button"
              onClick={next}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-[#E53935] to-[#C62828] px-7 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_-10px_rgba(198,40,40,0.7)] transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-12px_rgba(198,40,40,0.8)]"
            >
              Continue
              <ArrowRight className="size-4" />
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              disabled={status === "loading"}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-[#E53935] to-[#C62828] px-7 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_-10px_rgba(198,40,40,0.7)] transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-12px_rgba(198,40,40,0.8)] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="size-4" />
                  Request Booking
                </>
              )}
            </button>
          )}
        </div>

        {status === "error" ? (
          <p className="mt-4 text-center text-sm font-medium text-crimson">
            Something went wrong. Please call us at {SITE.phone}.
          </p>
        ) : null}
      </motion.div>

      {/* Helper */}
      <p className="mt-6 text-center text-sm text-muted-foreground">
        Prefer to talk?{" "}
        <a href={SITE.phoneHref} className="font-bold text-crimson hover:underline">
          Call {SITE.phone}
        </a>
      </p>
    </div>
  );
}

function Stepper({ currentStep }: { currentStep: number }) {
  const steps = [
    { num: 1, label: "Service", icon: Sparkles },
    { num: 2, label: "Details", icon: Home },
    { num: 3, label: "Schedule", icon: CalendarDays },
    { num: 4, label: "Contact", icon: User },
  ];
  return (
    <div className="mx-auto flex max-w-2xl items-center justify-between">
      {steps.map((s, i) => {
        const done = currentStep > s.num;
        const active = currentStep === s.num;
        return (
          <React.Fragment key={s.num}>
            <div className="flex flex-col items-center gap-2">
              <div
                className={cn(
                  "grid size-11 place-items-center rounded-full border-2 transition-all",
                  done
                    ? "border-crimson bg-crimson text-white"
                    : active
                    ? "border-crimson bg-white text-crimson shadow-[0_0_0_4px_rgba(229,57,53,0.12)]"
                    : "border-navy/15 bg-white text-muted-foreground"
                )}
              >
                {done ? <Check className="size-5" /> : <s.icon className="size-5" />}
              </div>
              <span className={cn(
                "text-xs font-bold uppercase tracking-wider",
                active || done ? "text-crimson" : "text-muted-foreground"
              )}>
                {s.label}
              </span>
            </div>
            {i < steps.length - 1 ? (
              <div className="relative mx-2 h-0.5 flex-1 overflow-hidden rounded-full bg-navy/10">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-crimson"
                  initial={false}
                  animate={{ width: currentStep > s.num ? "100%" : "0%" }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            ) : null}
          </React.Fragment>
        );
      })}
    </div>
  );
}

function StepHeader({
  icon: Icon,
  eyebrow,
  title,
  description,
}: {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  description: string;
}) {
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
  return (
    <label htmlFor={htmlFor} className="block text-sm font-semibold text-navy">
      {children}
    </label>
  );
}

function ErrorText({ children }: { children: React.ReactNode }) {
  return <p className="mt-1.5 text-xs font-medium text-crimson">{children}</p>;
}

function SummaryChip({ label, muted }: { label: string; muted?: boolean }) {
  return (
    <span className={cn(
      "inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold",
      muted ? "bg-navy/5 text-muted-foreground" : "bg-crimson-soft text-crimson"
    )}>
      {label}
    </span>
  );
}

function SuccessCard({ service }: { service?: string }) {
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
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-6 font-heading text-3xl font-extrabold text-navy sm:text-4xl"
      >
        Booking request sent!
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mx-auto mt-3 max-w-md text-pretty text-base text-muted-foreground"
      >
        Thanks{service ? ` for your ${service.toLowerCase()} request` : ""}. Our team will reach out
        shortly to confirm the details and finalize your booking.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row"
      >
        <a
          href={SITE.phoneHref}
          className="inline-flex items-center gap-2 rounded-full border-2 border-navy/15 bg-white px-6 py-3 text-sm font-bold text-navy transition-colors hover:border-crimson/40 hover:text-crimson"
        >
          <Phone className="size-4" />
          Call us now
        </a>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-[#E53935] to-[#C62828] px-6 py-3 text-sm font-semibold text-white shadow-md transition-transform hover:-translate-y-0.5"
        >
          Back to home
          <ArrowRight className="size-4" />
        </Link>
      </motion.div>
    </div>
  );
}

function inputClass(hasError: boolean) {
  return cn(
    "w-full rounded-xl border bg-white px-4 py-2.5 text-sm text-navy shadow-sm transition-colors placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold",
    hasError
      ? "border-crimson/50 focus:border-crimson focus:ring-crimson/20"
      : "border-navy/10"
  );
}
