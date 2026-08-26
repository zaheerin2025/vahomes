"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CalendarCheck,
  Phone,
  CheckCircle2,
  Sparkles,
  Clock,
  Wallet,
  ChevronDown,
  CalendarClock,
  Wind,
  HardHat,
  Building2,
  Leaf,
  ScanSearch,
  Home,
  ShieldCheck,
  Users,
  BadgePercent,
  CalendarDays,
  Briefcase,
  ClipboardCheck,
  Baby,
  Recycle,
  Zap,
  Heart,
  RefreshCw,
  Target,
  DollarSign,
  Plus,
  Headphones,
  Award,
  BadgeCheck,
  type LucideIcon,
} from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { CtaPrimary, CtaSecondary } from "@/components/site/cta";
import { Reveal, Stagger, StaggerItem } from "@/components/site/reveal";
import { SITE } from "@/lib/site";
import type { ServiceDetail } from "@/lib/services";
import { cn } from "@/lib/utils";

const ICONS: Record<string, LucideIcon> = {
  CalendarCheck,
  Clock,
  Sparkles,
  Wallet,
  CalendarClock,
  Wind,
  HardHat,
  Building2,
  Leaf,
  ScanSearch,
  Home,
  ShieldCheck,
  Users,
  BadgePercent,
  CalendarDays,
  Briefcase,
  ClipboardCheck,
  Baby,
  Recycle,
  Zap,
  Heart,
  RefreshCw,
  Target,
  DollarSign,
  Plus,
  Headphones,
  Award,
  BadgeCheck,
};

const ACCENT_STYLES = {
  crimson: {
    grad: "from-[#E53935] to-[#C62828]",
    soft: "bg-crimson-soft",
    text: "text-[#C62828]",
    ring: "ring-[#C62828]/20",
  },
  navy: {
    grad: "from-[#1A237E] to-[#0D1642]",
    soft: "bg-navy/5",
    text: "text-[#1A237E]",
    ring: "ring-[#1A237E]/20",
  },
  purple: {
    grad: "from-[#6A1B9A] to-[#4A148C]",
    soft: "bg-purple-soft",
    text: "text-[#6A1B9A]",
    ring: "ring-[#6A1B9A]/20",
  },
  gold: {
    grad: "from-[#D4AF37] to-[#9B7B0E]",
    soft: "bg-gold-soft",
    text: "text-[#9B7B0E]",
    ring: "ring-[#D4AF37]/30",
  },
};

export function ServiceDetailPage({
  service,
  related,
}: {
  service: ServiceDetail;
  related: ServiceDetail[];
}) {
  const accent = ACCENT_STYLES[service.accent];
  const Icon = ICONS[service.icon] ?? Sparkles;

  return (
    <div className="bg-background">
      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 lg:pt-44 lg:pb-20">
        {/* background */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-gold-soft/40 via-white to-white" />
          <div className={cn("absolute -top-24 right-[-10%] h-[480px] w-[480px] rounded-full blur-3xl", accent.soft, "opacity-60")} />
          <div
            className="absolute inset-0 opacity-[0.3]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(26,35,126,0.08) 1px, transparent 0)",
              backgroundSize: "32px 32px",
              maskImage:
                "radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent 75%)",
            }}
          />
        </div>

        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          {/* breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <Link
              href="/#services"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground transition-colors hover:text-crimson"
            >
              <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
              Back to all services
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
            {/* Left — content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-wrap items-center gap-3"
              >
                <span
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-white bg-gradient-to-br",
                    accent.grad
                  )}
                >
                  <Icon className="size-3.5" />
                  {service.shortName}
                </span>
                {service.popular ? (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold-soft px-3 py-1.5 text-[0.7rem] font-bold uppercase tracking-wider text-[#9B7B0E]">
                    <Sparkles className="size-3" />
                    Most Popular
                  </span>
                ) : null}
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.05 }}
                className="mt-5 font-heading text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-navy sm:text-5xl lg:text-[3.4rem]"
              >
                {service.name}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.12 }}
                className={cn("mt-3 text-lg font-semibold italic", accent.text)}
              >
                {service.tagline}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.18 }}
                className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
              >
                {service.summary}
              </motion.p>

              {/* meta chips */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.24 }}
                className="mt-6 flex flex-wrap gap-3"
              >
                {service.priceFrom ? (
                  <MetaChip icon={Wallet} label={service.priceFrom} />
                ) : null}
                {service.duration ? (
                  <MetaChip icon={Clock} label={service.duration} />
                ) : null}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-8 flex flex-col gap-3 sm:flex-row"
              >
                <CtaPrimary href={`/book?service=${service.slug}`} icon={CalendarCheck}>
                  Book This Service
                </CtaPrimary>
                <CtaSecondary href={SITE.phoneHref} icon={Phone}>
                  Call {SITE.phone}
                </CtaSecondary>
              </motion.div>
            </div>

            {/* Right — hero image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className={cn("absolute -right-6 -top-6 -z-10 h-32 w-32 rounded-full border-2 border-dashed", accent.ring.replace("ring-", "border-"))} />
              <div className={cn("absolute -bottom-8 -left-8 -z-10 h-40 w-40 rounded-full blur-2xl", accent.soft)} />

              <div className="relative overflow-hidden rounded-[2rem] shadow-[0_30px_80px_-30px_rgba(13,22,66,0.4)] ring-1 ring-navy/5">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={service.image}
                    alt={`${service.name} — professional cleaning service`}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== Overview + What's Included ===== */}
      <section className="relative py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            {/* Left — overview / best for */}
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold-soft px-4 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[#9B7B0E]">
                  <Sparkles className="size-3.5" />
                  Overview
                </span>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-5 font-heading text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
                  What this service includes
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {service.description}
                </p>
              </Reveal>

              {/* Best for */}
              <Reveal delay={0.15}>
                <div className="mt-8">
                  <p className="text-sm font-bold uppercase tracking-wider text-navy">
                    Best for
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {service.bestFor.map((item) => (
                      <span
                        key={item}
                        className={cn(
                          "inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-medium",
                          accent.soft,
                          accent.text
                        )}
                      >
                        <CheckCircle2 className="size-3.5" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right — includes checklist card */}
            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-3xl border border-navy/5 bg-white p-6 shadow-[0_20px_60px_-30px_rgba(13,22,66,0.3)] sm:p-8">
                <div className={cn("absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r", accent.grad)} />
                <div className="flex items-center gap-3">
                  <span className={cn("grid size-12 place-items-center rounded-2xl bg-gradient-to-br text-white shadow-md", accent.grad)}>
                    <Icon className="size-6" />
                  </span>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-navy">
                      What&apos;s included
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Every {service.shortName.toLowerCase()} booking covers:
                    </p>
                  </div>
                </div>
                <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {service.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 rounded-xl bg-muted/40 p-3 text-sm font-medium text-navy"
                    >
                      <CheckCircle2 className={cn("mt-0.5 size-4 shrink-0", accent.text)} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-navy/5 pt-5">
                  <CtaPrimary
                    href={`/book?service=${service.slug}`}
                    size="md"
                    icon={CalendarCheck}
                  >
                    Book Now
                  </CtaPrimary>
                  <span className="text-sm text-muted-foreground">
                    Free quote · No obligation
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== Process ===== */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-b from-white to-gold-soft/30">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="text-center">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold-soft px-4 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[#9B7B0E]">
                <span className="size-1.5 rounded-full bg-gold" />
                How It Works
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mx-auto mt-5 max-w-2xl font-heading text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
                A simple {service.shortName.toLowerCase()} process
              </h2>
            </Reveal>
          </div>

          <Stagger className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3 lg:gap-10" stagger={0.1}>
            {service.process.map((step, i) => {
              const StepIcon = i === 0 ? CalendarCheck : i === 1 ? Sparkles : CheckCircle2;
              return (
                <StaggerItem key={step.title}>
                  <div className="group relative flex flex-col items-center text-center">
                    <div className="relative grid size-24 place-items-center rounded-full border border-gold/15 bg-white shadow-[0_10px_40px_-20px_rgba(13,22,66,0.4)] transition-all duration-500 group-hover:-translate-y-1">
                      <div className={cn("absolute inset-2 rounded-full opacity-50", accent.soft)} />
                      <span className={cn("relative grid size-16 place-items-center rounded-full bg-gradient-to-br text-white shadow-md", accent.grad)}>
                        <StepIcon className="size-7" />
                      </span>
                      <span className="absolute -right-1 -top-1 grid size-9 place-items-center rounded-full bg-white text-sm font-extrabold text-navy shadow-lg ring-2 ring-gold/40">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-6 font-heading text-xl font-bold text-navy">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* ===== Benefits ===== */}
      <section className="relative py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="text-center">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold-soft px-4 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[#9B7B0E]">
                <span className="size-1.5 rounded-full bg-gold" />
                Why Choose It
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mx-auto mt-5 max-w-2xl font-heading text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
                Benefits you&apos;ll feel
              </h2>
            </Reveal>
          </div>

          <Stagger className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
            {service.benefits.map((benefit) => {
              const BenefitIcon = ICONS[benefit.icon] ?? Sparkles;
              return (
                <StaggerItem key={benefit.title}>
                  <div className="group flex h-full flex-col gap-3 rounded-2xl border border-navy/5 bg-white p-5 transition-all hover:border-gold/20 hover:shadow-lg">
                    <span className={cn("grid size-12 place-items-center rounded-xl bg-gradient-to-br text-white shadow-sm transition-transform group-hover:scale-110", accent.grad)}>
                      <BenefitIcon className="size-5.5" />
                    </span>
                    <div>
                      <h3 className="font-heading text-base font-bold text-navy">
                        {benefit.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* ===== Gallery ===== */}
      {service.gallery.length > 0 ? (
        <section className="relative py-16 sm:py-20 bg-gradient-to-b from-gold-soft/30 to-white">
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="text-center">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold-soft px-4 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[#9B7B0E]">
                  <span className="size-1.5 rounded-full bg-gold" />
                  Gallery
                </span>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mx-auto mt-5 max-w-2xl font-heading text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
                  {service.shortName} in action
                </h2>
              </Reveal>
            </div>
            <Stagger className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
              {service.gallery.map((img, i) => (
                <StaggerItem key={img}>
                  <div className={cn(
                    "group relative overflow-hidden rounded-2xl shadow-[0_10px_36px_-24px_rgba(13,22,66,0.4)] ring-1 ring-navy/5",
                    i === 0 ? "sm:col-span-2 lg:col-span-1" : ""
                  )}>
                    <div className="relative aspect-[4/3] w-full">
                      <Image
                        src={img}
                        alt={`${service.name} example ${i + 1}`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      ) : null}

      {/* ===== FAQ ===== */}
      <section className="relative py-16 sm:py-20">
        <div className="mx-auto w-full max-w-3xl px-5 sm:px-8 lg:px-10">
          <div className="text-center">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold-soft px-4 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[#9B7B0E]">
                <span className="size-1.5 rounded-full bg-gold" />
                FAQ
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mx-auto mt-5 max-w-2xl font-heading text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
                Common questions
              </h2>
            </Reveal>
          </div>
          <Stagger className="mt-10 flex flex-col gap-3" stagger={0.06}>
            {service.faq.map((item) => (
              <StaggerItem key={item.question}>
                <FaqItem question={item.question} answer={item.answer} accentText={accent.text} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#1A237E] via-[#15195F] to-[#0D1642]">
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-crimson/15 blur-3xl" />
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#D4AF37] via-[#F5C518] to-[#D4AF37]" />

            <div className="relative px-6 py-12 text-center sm:px-12 sm:py-16">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-gold backdrop-blur">
                  <Sparkles className="size-3.5" />
                  Ready when you are
                </span>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mx-auto mt-5 max-w-2xl font-heading text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
                  Book your {service.shortName.toLowerCase()} today
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mx-auto mt-4 max-w-xl text-pretty text-base text-white/75 sm:text-lg">
                  Get a free quote in minutes. {SITE.tagline}.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <CtaPrimary href={`/book?service=${service.slug}`} icon={CalendarCheck} variant="gold">
                    Book This Service
                  </CtaPrimary>
                  <CtaSecondary
                    href={SITE.phoneHref}
                    icon={Phone}
                    className="!border-white/30 !bg-white/10 !text-white hover:!bg-white hover:!text-crimson hover:!border-white"
                  >
                    {SITE.phone}
                  </CtaSecondary>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Related Services ===== */}
      {related.length > 0 ? (
        <section className="relative py-16 sm:py-20 bg-gradient-to-b from-white to-gold-soft/30">
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <Reveal>
                  <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold-soft px-4 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[#9B7B0E]">
                    <span className="size-1.5 rounded-full bg-gold" />
                    Explore More
                  </span>
                </Reveal>
                <Reveal delay={0.05}>
                  <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
                    Other services
                  </h2>
                </Reveal>
              </div>
              <Reveal delay={0.1}>
                <Link
                  href="/#services"
                  className="group inline-flex items-center gap-1.5 text-sm font-bold text-crimson transition-colors hover:text-crimson-dark"
                >
                  View all services
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Reveal>
            </div>

            <Stagger className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
              {related.map((rel) => {
                const RelIcon = ICONS[rel.icon] ?? Sparkles;
                const relAccent = ACCENT_STYLES[rel.accent];
                return (
                  <StaggerItem key={rel.slug}>
                    <Link
                      href={`/services/${rel.slug}`}
                      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-navy/5 bg-white shadow-[0_10px_40px_-24px_rgba(13,22,66,0.3)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_28px_60px_-30px_rgba(26,35,126,0.4)]"
                    >
                      <div className="relative aspect-[16/11] w-full overflow-hidden">
                        <Image
                          src={rel.image}
                          alt={rel.name}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy/55 via-navy/5 to-transparent" />
                        <span className={cn("absolute left-4 top-4 grid size-11 place-items-center rounded-2xl bg-gradient-to-br text-white shadow-lg", relAccent.grad)}>
                          <RelIcon className="size-5" />
                        </span>
                      </div>
                      <div className="flex flex-1 flex-col p-5">
                        <h3 className="font-heading text-lg font-bold text-navy transition-colors group-hover:text-crimson">
                          {rel.name}
                        </h3>
                        <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                          {rel.summary}
                        </p>
                        <span className={cn("mt-4 inline-flex items-center gap-1.5 text-sm font-bold", relAccent.text)}>
                          Learn More
                          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </Link>
                  </StaggerItem>
                );
              })}
            </Stagger>
          </div>
        </section>
      ) : null}

      {/* ===== Sticky footer mini-CTA (mobile) ===== */}
      <div className="h-16 lg:hidden" aria-hidden />
    </div>
  );
}

function MetaChip({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white px-4 py-2 text-sm font-semibold text-navy shadow-sm">
      <Icon className="size-4 text-gold" />
      {label}
    </span>
  );
}

function FaqItem({
  question,
  answer,
  accentText,
}: {
  question: string;
  answer: string;
  accentText: string;
}) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="overflow-hidden rounded-2xl border border-navy/8 bg-white">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
        aria-expanded={open}
      >
        <span className="font-heading text-base font-bold text-navy sm:text-lg">
          {question}
        </span>
        <span className={cn("grid size-8 shrink-0 place-items-center rounded-full transition-all", open ? cn("bg-gradient-to-br from-[#E53935] to-[#C62828] text-white rotate-180") : "bg-muted text-navy")}>
          <ChevronDown className="size-4" />
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden"
      >
        <p className={cn("px-5 pb-5 text-sm leading-relaxed text-muted-foreground", accentText.replace("text-", "border-t border-navy/5 pt-4"))}>
          {answer}
        </p>
      </motion.div>
    </div>
  );
}
