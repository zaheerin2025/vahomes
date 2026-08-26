"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading, SectionShell } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";
import { TESTIMONIALS } from "@/lib/site";
import { cn } from "@/lib/utils";

const AVATAR_COLORS = [
  "from-[#15C3A5] to-[#0A8F7C]",
  "from-[#F59E0B] to-[#D97706]",
  "from-[#8B5CF6] to-[#6D28D9]",
  "from-[#EC4899] to-[#BE185D]",
];

export function Testimonials() {
  const [index, setIndex] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const count = TESTIMONIALS.length;

  React.useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, 5000);
    return () => clearInterval(t);
  }, [paused, count]);

  const active = TESTIMONIALS[index];

  return (
    <SectionShell className="bg-navy overflow-hidden">
      {/* decorative */}
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-brand/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-[#15C3A5]/15 blur-3xl" />

      <div className="relative">
        <SectionHeading
          eyebrow="Testimonials"
          title={
            <span className="text-white">
              What Our Customers Say
            </span>
          }
          description={
            <span className="text-white/65">
              Real feedback from the people and businesses we keep clean.
            </span>
          }
        />

        {/* Featured carousel */}
        <div
          className="relative mx-auto mt-14 max-w-3xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur sm:p-12">
            <Quote className="absolute right-8 top-8 size-16 text-white/5" />
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="relative"
              >
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: active.rating }).map((_, i) => (
                    <Star key={i} className="size-5 fill-current" />
                  ))}
                </div>
                <p className="mt-5 text-pretty text-lg font-medium leading-relaxed text-white sm:text-xl">
                  &ldquo;{active.quote}&rdquo;
                </p>
                <div className="mt-7 flex items-center gap-4">
                  <span
                    className={cn(
                      "grid size-12 place-items-center rounded-full bg-gradient-to-br text-sm font-bold text-white shadow-lg",
                      AVATAR_COLORS[index % AVATAR_COLORS.length]
                    )}
                  >
                    {active.initials}
                  </span>
                  <div>
                    <p className="font-bold text-white">{active.name}</p>
                    <p className="text-sm text-[#7FE3D0]">{active.service}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              type="button"
              aria-label="Previous review"
              onClick={() => setIndex((i) => (i - 1 + count) % count)}
              className="grid size-10 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:border-brand hover:bg-brand hover:text-white"
            >
              <ChevronLeft className="size-5" />
            </button>
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to review ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    i === index
                      ? "w-7 bg-brand"
                      : "w-2 bg-white/25 hover:bg-white/50"
                  )}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Next review"
              onClick={() => setIndex((i) => (i + 1) % count)}
              className="grid size-10 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:border-brand hover:bg-brand hover:text-white"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>

        <Reveal delay={0.1}>
          <p className="mt-10 text-center text-xs text-white/40">
            Sample reviews shown for demonstration. Real customer reviews will
            replace these as they become available.
          </p>
        </Reveal>
      </div>
    </SectionShell>
  );
}
