"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  CalendarCheck,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Leaf,
  CheckCircle2,
} from "lucide-react";
import { CtaPrimary, CtaSecondary } from "@/components/site/cta";
import { useI18n } from "@/lib/i18n/context";
import { SITE } from "@/lib/site";
import { assetPath } from "@/lib/utils";

export function Hero() {
  const { t } = useI18n();

  const trustChips = [
    { icon: ShieldCheck, label: t("hero.trustReliable") },
    { icon: Sparkles, label: t("hero.trustDetailed") },
    { icon: CheckCircle2, label: t("hero.trustBoth") },
  ];

  return (
    <section id="home" className="relative overflow-hidden pt-32 sm:pt-36 lg:pt-40">
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-gold-soft/50 via-white to-white" />
        <div className="absolute -top-24 right-[-10%] h-[520px] w-[520px] rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute top-40 left-[-15%] h-[420px] w-[420px] rounded-full bg-crimson/8 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(26,35,126,0.08) 1px, transparent 0)",
            backgroundSize: "32px 32px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent 75%)",
          }}
        />
      </div>

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-5 pb-16 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:px-10 lg:pb-24">
        {/* Left column */}
        <div className="flex flex-col items-start">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/80 px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#9B7B0E] shadow-sm backdrop-blur"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-crimson opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-crimson" />
            </span>
            {t("hero.eyebrow")}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-5 font-heading text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-navy sm:text-5xl lg:text-[3.7rem]"
          >
            {t("hero.title1")}
            <br />
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-[#1A237E] via-[#C62828] to-[#6A1B9A] bg-clip-text text-transparent">
                {t("hero.title2")}
              </span>
              <svg
                className="absolute -bottom-2 left-0 z-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path
                  d="M2 9C70 3 230 3 298 9"
                  stroke="#D4AF37"
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity="0.6"
                />
              </svg>
            </span>
          </motion.h1>

          {/* Spanish tagline accent */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.14 }}
            className="mt-4 flex items-center gap-2 text-sm font-semibold italic text-[#9B7B0E]"
          >
            <Sparkles className="size-4" />
            {SITE.tagline}
            <span className="text-muted-foreground">— {t("hero.taglineEn")}</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {t("hero.description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <CtaPrimary href="/book" icon={CalendarCheck}>
              {t("hero.ctaBook")}
            </CtaPrimary>
            <CtaSecondary href={SITE.phoneHref} icon={Phone}>
              {t("hero.ctaBook") === "Reservar Limpieza" ? "Llamar " : "Call "}
              {SITE.phone}
            </CtaSecondary>
          </motion.div>

          {/* Trust chips */}
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.36 }}
            className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3"
          >
            {trustChips.map((chip) => (
              <li key={chip.label} className="flex items-center gap-2">
                <span className="grid size-6 place-items-center rounded-full bg-gold-soft text-[#9B7B0E]">
                  <chip.icon className="size-3.5" />
                </span>
                <span className="text-sm font-semibold text-navy/80">
                  {chip.label}
                </span>
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Right column — hero image with floating accents */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -right-6 -top-6 -z-10 h-32 w-32 rounded-full border-2 border-dashed border-gold/40" />
          <div className="absolute -bottom-8 -left-8 -z-10 h-40 w-40 rounded-full bg-purple-soft/60 blur-2xl" />

          <div className="relative overflow-hidden rounded-[2rem] shadow-[0_30px_80px_-30px_rgba(13,22,66,0.4)] ring-1 ring-navy/5">
            <div className="relative aspect-[4/5] w-full sm:aspect-[5/5] lg:aspect-[4/4.4]">
              <Image
                src={assetPath("/images/hero.png")}
                alt={t("hero.eyebrow")}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/25 via-transparent to-transparent" />
          </div>

          {/* Floating rating card */}
          <motion.div
            initial={{ opacity: 0, x: -20, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute -left-4 top-10 hidden rounded-2xl border border-navy/5 bg-white/95 p-3.5 shadow-xl backdrop-blur sm:flex sm:items-center sm:gap-3"
          >
            <div className="flex flex-col">
              <div className="flex items-center gap-0.5 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-3.5 fill-current" />
                ))}
              </div>
              <p className="mt-1 text-xs font-semibold text-navy">
                {t("hero.ratingLoved")}
              </p>
              <p className="text-[0.65rem] text-muted-foreground">
                {t("hero.ratingTrusted")}
              </p>
            </div>
          </motion.div>

          {/* Floating eco badge */}
          <motion.div
            initial={{ opacity: 0, x: 20, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.72 }}
            className="absolute -bottom-5 right-4 flex items-center gap-3 rounded-2xl border border-navy/5 bg-white/95 p-3.5 shadow-xl backdrop-blur"
          >
            <span className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-[#6A1B9A] to-[#4A148C] text-white shadow-md">
              <Leaf className="size-5" />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-bold text-navy">{t("hero.ecoTitle")}</p>
              <p className="text-[0.65rem] text-muted-foreground">
                {t("hero.ecoSub")}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
