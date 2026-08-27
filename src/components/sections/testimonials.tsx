"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading, SectionShell } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";
import { useI18n } from "@/lib/i18n/context";
import { cn } from "@/lib/utils";

const AVATAR_COLORS = [
  "from-[#E53935] to-[#C62828]",
  "from-[#1A237E] to-[#0D1642]",
  "from-[#6A1B9A] to-[#4A148C]",
  "from-[#D4AF37] to-[#9B7B0E]",
];

// Testimonials are bilingual to keep them authentic
const TESTIMONIALS = [
  {
    en: { name: "Jessica M.", service: "Deep House Cleaning", quote: "The team was punctual, friendly, and incredibly thorough. My kitchen has never looked this clean — every surface sparkled." },
    es: { name: "Jessica M.", service: "Limpieza Profunda", quote: "El equipo fue puntual, amable y muy meticuloso. Mi cocina nunca había estado tan limpia — cada superficie brillaba." },
  },
  {
    en: { name: "Daniel R.", service: "Recurring Cleaning", quote: "Reliable and consistent every single visit. Having a recurring cleaning service has genuinely made my home feel more relaxing." },
    es: { name: "Daniel R.", service: "Limpieza Recurrente", quote: "Confiable y consistente en cada visita. Tener un servicio de limpieza recurrente realmente ha hecho que mi hogar se sienta más relajante." },
  },
  {
    en: { name: "Priya S.", service: "Airbnb Cleaning", quote: "They handle the turnover for my Airbnb between guests and the place always looks spotless. My guests constantly leave five-star reviews." },
    es: { name: "Priya S.", service: "Limpieza Airbnb", quote: "Manejan el cambio de huéspedes en mi Airbnb y el lugar siempre se ve impecable. Mis huéspedes constantemente dejan reseñas de cinco estrellas." },
  },
  {
    en: { name: "Marcus T.", service: "Commercial Cleaning", quote: "Professional, efficient, and detail-oriented. The office feels fresher and more welcoming for the whole team since we started working with them." },
    es: { name: "Marcus T.", service: "Limpieza Comercial", quote: "Profesionales, eficientes y orientados al detalle. La oficina se siente más fresca y acogedora para todo el equipo desde que empezamos a trabajar con ellos." },
  },
];

function initials(name: string): string {
  return name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
}

export function Testimonials() {
  const { t, locale } = useI18n();
  const [index, setIndex] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const count = TESTIMONIALS.length;

  React.useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => setIndex((i) => (i + 1) % count), 5000);
    return () => clearInterval(interval);
  }, [paused, count]);

  const active = TESTIMONIALS[index][locale];

  return (
    <SectionShell className="relative overflow-hidden bg-gradient-to-br from-[#1A237E] via-[#15195F] to-[#0D1642]">
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-gold/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-crimson/12 blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="relative">
        <SectionHeading
          eyebrow={t("test.eyebrow")}
          title={<span className="text-white">{t("test.title")}</span>}
          description={<span className="text-white/65">{t("test.description")}</span>}
          onDark
        />

        <div
          className="relative mx-auto mt-14 max-w-3xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur sm:p-12">
            <Quote className="absolute right-8 top-8 size-16 text-gold/15" />
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="relative"
              >
                <div className="flex items-center gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-5 fill-current" />
                  ))}
                </div>
                <p className="mt-5 font-heading text-pretty text-lg font-medium italic leading-relaxed text-white sm:text-xl">
                  &ldquo;{active.quote}&rdquo;
                </p>
                <div className="mt-7 flex items-center gap-4">
                  <span
                    className={cn(
                      "grid size-12 place-items-center rounded-full bg-gradient-to-br text-sm font-bold text-white shadow-lg",
                      AVATAR_COLORS[index % AVATAR_COLORS.length]
                    )}
                  >
                    {initials(active.name)}
                  </span>
                  <div>
                    <p className="font-bold text-white">{active.name}</p>
                    <p className="text-sm text-gold">{active.service}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              type="button"
              aria-label="Previous"
              onClick={() => setIndex((i) => (i - 1 + count) % count)}
              className="grid size-10 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:border-gold hover:bg-gold hover:text-navy"
            >
              <ChevronLeft className="size-5" />
            </button>
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Review ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    i === index ? "w-7 bg-gold" : "w-2 bg-white/25 hover:bg-white/50"
                  )}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Next"
              onClick={() => setIndex((i) => (i + 1) % count)}
              className="grid size-10 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:border-gold hover:bg-gold hover:text-navy"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>

        <Reveal delay={0.1}>
          <p className="mt-10 text-center text-xs text-white/40">
            {t("test.disclaimer")}
          </p>
        </Reveal>
      </div>
    </SectionShell>
  );
}
