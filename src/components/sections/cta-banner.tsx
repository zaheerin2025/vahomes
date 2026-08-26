"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Sparkles, Phone, CalendarCheck, ArrowRight } from "lucide-react";
import { CtaPrimary, CtaSecondary } from "@/components/site/cta";
import { Reveal } from "@/components/site/reveal";
import { SITE } from "@/lib/site";

export function CtaBanner() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="relative overflow-hidden rounded-[2.5rem]">
          {/* gradient bg */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A8F7C] via-[#0E9F8E] to-[#0B7A6B]" />
          {/* decorative pattern */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />
          {/* glows */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-white/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-[#7FE3D0]/20 blur-3xl" />

          {/* floating sparkles */}
          <motion.div
            aria-hidden
            animate={{ y: [0, -10, 0], rotate: [0, 8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-12 top-10 hidden lg:block"
          >
            <Sparkles className="size-10 text-white/30" />
          </motion.div>
          <motion.div
            aria-hidden
            animate={{ y: [0, 12, 0], rotate: [0, -8, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-16 bottom-12 hidden lg:block"
          >
            <Sparkles className="size-7 text-white/25" />
          </motion.div>

          <div className="relative px-6 py-14 text-center sm:px-12 sm:py-16 lg:py-20">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-white backdrop-blur">
                <Sparkles className="size-3.5" />
                Get Started Today
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mx-auto mt-5 max-w-3xl text-balance text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-[3rem]">
                Ready for a Cleaner Space?
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-white/85 sm:text-lg">
                Let VA Home Cleaners take care of the cleaning while you focus
                on what matters.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <CtaPrimary
                  href="#contact"
                  icon={CalendarCheck}
                  className="!bg-white !text-navy hover:!bg-white hover:!text-brand !from-white !to-white"
                >
                  Book Your Cleaning
                </CtaPrimary>
                <CtaSecondary
                  href={SITE.phoneHref}
                  icon={Phone}
                  className="!border-white/30 !bg-white/10 !text-white hover:!bg-white hover:!text-brand hover:!border-white"
                >
                  Call {SITE.phone}
                </CtaSecondary>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-6 flex items-center justify-center gap-1.5 text-sm font-medium text-white/70">
                <Phone className="size-3.5" />
                Call anytime
                <ArrowRight className="size-3.5" />
                We&apos;re here to help
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
