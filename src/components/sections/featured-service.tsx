"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { CtaPrimary } from "@/components/site/cta";
import { Reveal } from "@/components/site/reveal";

const points = [
  "Kitchens & bathrooms sanitized",
  "Hard-to-reach areas covered",
  "Living areas & bedrooms refreshed",
  "Attention to every detail",
];

export function FeaturedService() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#1A237E] via-[#15195F] to-[#0D1642]">
          {/* decorative glows */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-crimson/15 blur-3xl" />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(245,197,24,0.5) 1px, transparent 0)",
              backgroundSize: "28px 28px",
            }}
          />
          {/* gold top accent */}
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#D4AF37] via-[#F5C518] to-[#D4AF37]" />

          <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            {/* Image side */}
            <Reveal className="relative order-1 p-6 sm:p-10 lg:py-14 lg:pl-14">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl ring-1 ring-gold/15">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/featured-deep-cleaning.png"
                    alt="Beautifully clean modern living room after a deep cleaning service"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
              </div>
              {/* floating sparkle badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute -right-2 top-8 flex items-center gap-2 rounded-2xl bg-white px-4 py-2.5 shadow-xl"
              >
                <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-[#F5C518] to-[#D4AF37] text-[#0D1642]">
                  <Sparkles className="size-4.5" />
                </span>
                <div className="leading-tight">
                  <p className="text-sm font-bold text-navy">Deep Clean</p>
                  <p className="text-[0.65rem] text-muted-foreground">
                    Top-to-bottom
                  </p>
                </div>
              </motion.div>
            </Reveal>

            {/* Text side */}
            <div className="relative order-2 px-6 pb-12 sm:px-10 lg:py-14 lg:pr-14 lg:pl-2">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-gold backdrop-blur">
                  <Sparkles className="size-3.5" />
                  Featured Service
                </span>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-5 font-heading text-balance text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-[2.6rem]">
                  Give Your Home the Deep Clean It Deserves
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-5 max-w-lg text-pretty text-base leading-relaxed text-white/70 sm:text-lg">
                  From kitchens and bathrooms to living areas and
                  hard-to-reach spaces, our detailed cleaning service helps
                  transform your home into a fresher, more comfortable
                  environment.
                </p>
              </Reveal>

              <Reveal delay={0.15}>
                <ul className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2.5 text-sm font-medium text-white/90"
                    >
                      <CheckCircle2 className="size-4.5 shrink-0 text-gold" />
                      {point}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="mt-9">
                  <CtaPrimary href="/book" icon={ArrowRight} variant="crimson">
                    Book a Deep Cleaning
                  </CtaPrimary>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
