"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ScanSearch,
  SlidersHorizontal,
  BadgeCheck,
  Wand2,
  Quote,
} from "lucide-react";
import { SectionShell } from "@/components/site/section-heading";
import { Reveal, Stagger, StaggerItem } from "@/components/site/reveal";
import { useI18n } from "@/lib/i18n/context";

const reasons = [
  { icon: ScanSearch, titleKey: "why.reason1", descKey: "why.reason1Desc", color: "from-[#1A237E] to-[#0D1642]" },
  { icon: SlidersHorizontal, titleKey: "why.reason2", descKey: "why.reason2Desc", color: "from-[#C62828] to-[#9B1C1C]" },
  { icon: BadgeCheck, titleKey: "why.reason3", descKey: "why.reason3Desc", color: "from-[#6A1B9A] to-[#4A148C]" },
  { icon: Wand2, titleKey: "why.reason4", descKey: "why.reason4Desc", color: "from-[#D4AF37] to-[#9B7B0E]" },
];

const stats = [
  { value: "100%", labelKey: "why.stat1" },
  { value: "6", labelKey: "why.stat2" },
  { value: "7", labelKey: "why.stat3" },
  { value: "1:1", labelKey: "why.stat4" },
];

export function WhyChooseUs() {
  const { t } = useI18n();

  return (
    <SectionShell id="about" className="overflow-hidden">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left — image with floating quote card */}
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative overflow-hidden rounded-[2rem] shadow-[0_30px_80px_-35px_rgba(13,22,66,0.45)] ring-1 ring-navy/5">
            <div className="relative aspect-[4/5] w-full sm:aspect-[5/4] lg:aspect-[4/5]">
              <Image
                src="/images/about-team.png"
                alt="VA Home Cleaners team"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="absolute -bottom-6 -right-3 max-w-[15rem] rounded-2xl border border-navy/5 bg-white p-5 shadow-2xl sm:-right-6"
          >
            <Quote className="size-6 text-gold/60" />
            <p className="mt-1 font-heading text-sm font-medium italic leading-relaxed text-navy">
              {t("why.quote")}
            </p>
            <p className="mt-2 text-xs font-semibold text-muted-foreground">
              {t("why.quoteAuthor")}
            </p>
          </motion.div>

          <div className="absolute -left-5 -top-5 -z-10 size-28 rounded-full border-2 border-dashed border-gold/40" />
        </Reveal>

        {/* Right — content */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold-soft px-4 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[#9B7B0E]">
              <span className="size-1.5 rounded-full bg-gold" />
              {t("why.eyebrow")}
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-heading text-balance text-3xl font-extrabold leading-[1.12] tracking-tight text-navy sm:text-4xl lg:text-[2.6rem]">
              {t("why.title1")}
              <span className="bg-gradient-to-r from-[#1A237E] to-[#C62828] bg-clip-text text-transparent">
                {t("why.title2")}
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground">
              {t("why.description")}
            </p>
          </Reveal>

          <Stagger className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2" stagger={0.08}>
            {reasons.map((r) => (
              <StaggerItem key={r.titleKey}>
                <div className="group flex h-full gap-3.5 rounded-2xl border border-navy/5 bg-white p-5 transition-all hover:border-gold/20 hover:shadow-lg hover:shadow-gold/5">
                  <span className={`grid size-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${r.color} text-white shadow-sm transition-transform group-hover:scale-110`}>
                    <r.icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-heading text-base font-bold text-navy">{t(r.titleKey)}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {t(r.descKey)}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.15}>
            <div className="relative mt-8 grid grid-cols-4 gap-3 overflow-hidden rounded-2xl bg-gradient-to-br from-[#1A237E] to-[#0D1642] p-5">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
              {stats.map((s) => (
                <div key={s.labelKey} className="text-center">
                  <p className="font-heading text-xl font-extrabold text-gold sm:text-2xl">
                    {s.value}
                  </p>
                  <p className="mt-0.5 text-[0.62rem] font-medium uppercase tracking-wider text-white/60 sm:text-[0.68rem]">
                    {t(s.labelKey)}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </SectionShell>
  );
}
