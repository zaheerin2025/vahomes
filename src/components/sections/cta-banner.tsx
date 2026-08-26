"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Sparkles, Phone, CalendarCheck, ArrowRight } from "lucide-react";
import { CtaPrimary, CtaSecondary } from "@/components/site/cta";
import { Reveal } from "@/components/site/reveal";
import { useI18n } from "@/lib/i18n/context";
import { SITE } from "@/lib/site";

export function CtaBanner() {
  const { t } = useI18n();

  return (
    <section className="relative py-20 sm:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="relative overflow-hidden rounded-[2.5rem]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#C62828] via-[#9B1C1C] to-[#1A237E]" />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.13]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(245,197,24,0.7) 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-purple/20 blur-3xl" />
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#D4AF37] via-[#F5C518] to-[#D4AF37]" />

          <motion.div
            aria-hidden
            animate={{ y: [0, -10, 0], rotate: [0, 8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-12 top-10 hidden lg:block"
          >
            <Sparkles className="size-10 text-gold/50" />
          </motion.div>
          <motion.div
            aria-hidden
            animate={{ y: [0, 12, 0], rotate: [0, -8, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-16 bottom-12 hidden lg:block"
          >
            <Sparkles className="size-7 text-gold/40" />
          </motion.div>

          <div className="relative px-6 py-14 text-center sm:px-12 sm:py-16 lg:py-20">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-gold backdrop-blur">
                <Sparkles className="size-3.5" />
                {t("ctabanner.eyebrow")}
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mx-auto mt-5 max-w-3xl font-heading text-balance text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-[3rem]">
                {t("ctabanner.title")}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-white/85 sm:text-lg">
                {t("ctabanner.description")}
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <CtaPrimary href="/book" icon={CalendarCheck} variant="gold">
                  {t("ctabanner.cta")}
                </CtaPrimary>
                <CtaSecondary
                  href={SITE.phoneHref}
                  icon={Phone}
                  className="!border-white/30 !bg-white/10 !text-white hover:!bg-white hover:!text-crimson hover:!border-white"
                >
                  {t("ctabanner.callAnytime")} {SITE.phone}
                </CtaSecondary>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-6 flex items-center justify-center gap-1.5 text-sm font-medium text-white/75">
                <Phone className="size-3.5" />
                {t("ctabanner.callAnytime")}
                <ArrowRight className="size-3.5" />
                {SITE.tagline}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
