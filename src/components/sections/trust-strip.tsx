"use client";

import { Sparkles, CalendarClock, Building2, Leaf } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/site/reveal";
import { useI18n } from "@/lib/i18n/context";

export function TrustStrip() {
  const { t } = useI18n();

  const values = [
    { icon: Sparkles, title: t("trust.professional"), description: t("trust.professionalDesc") },
    { icon: CalendarClock, title: t("trust.flexible"), description: t("trust.flexibleDesc") },
    { icon: Building2, title: t("trust.both"), description: t("trust.bothDesc") },
    { icon: Leaf, title: t("trust.eco"), description: t("trust.ecoDesc") },
  ];

  return (
    <section className="relative z-10 -mt-2 pb-4 sm:-mt-6">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl border border-navy/5 bg-white p-6 shadow-[0_20px_60px_-30px_rgba(13,22,66,0.25)] sm:p-8">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#1A237E] via-[#C62828] to-[#D4AF37]" />

          <div className="mb-7 text-center">
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#9B7B0E]">
              {t("trust.eyebrow")}
            </p>
          </div>
          <Stagger
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"
            stagger={0.1}
          >
            {values.map((v, i) => (
              <StaggerItem key={v.title}>
                <div className="group flex h-full flex-col items-start gap-3 rounded-2xl border border-transparent p-4 transition-all hover:border-gold/20 hover:bg-gold-soft/40">
                  <span
                    className={
                      "grid size-12 place-items-center rounded-2xl text-white shadow-sm transition-all duration-300 group-hover:scale-110 " +
                      (i === 0
                        ? "bg-gradient-to-br from-[#E53935] to-[#C62828]"
                        : i === 1
                        ? "bg-gradient-to-br from-[#1A237E] to-[#0D1642]"
                        : i === 2
                        ? "bg-gradient-to-br from-[#6A1B9A] to-[#4A148C]"
                        : "bg-gradient-to-br from-[#D4AF37] to-[#9B7B0E]")
                    }
                  >
                    <v.icon className="size-5.5" />
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-navy">{v.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {v.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
