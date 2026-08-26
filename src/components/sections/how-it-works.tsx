"use client";

import * as React from "react";
import {
  ClipboardList,
  CalendarCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading, SectionShell } from "@/components/site/section-heading";
import { Stagger, StaggerItem } from "@/components/site/reveal";
import { STEPS } from "@/lib/site";

const ICONS: Record<string, LucideIcon> = {
  ClipboardList,
  CalendarCheck,
  Sparkles,
};

const STEP_COLORS = [
  { badge: "bg-gradient-to-br from-[#1A237E] to-[#0D1642]", glow: "bg-[#1A237E]/10" },
  { badge: "bg-gradient-to-br from-[#C62828] to-[#9B1C1C]", glow: "bg-[#C62828]/10" },
  { badge: "bg-gradient-to-br from-[#D4AF37] to-[#9B7B0E]", glow: "bg-[#D4AF37]/15" },
];

export function HowItWorks() {
  return (
    <SectionShell
      id="how-it-works"
      className="bg-gradient-to-b from-gold-soft/30 to-white"
    >
      <SectionHeading
        eyebrow="How It Works"
        title={
          <>
            A Cleaner Home in{" "}
            <span className="bg-gradient-to-r from-[#C62828] to-[#6A1B9A] bg-clip-text text-transparent">
              3 Simple Steps
            </span>
          </>
        }
        description="Getting started is easy. We've made the whole process simple and stress-free from start to finish."
      />

      <div className="relative mt-16">
        {/* connector line */}
        <div className="pointer-events-none absolute left-0 right-0 top-12 hidden lg:block">
          <div className="mx-auto h-px max-w-4xl bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        </div>

        <Stagger className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:gap-10">
          {STEPS.map((step, i) => {
            const Icon = ICONS[step.icon] ?? ClipboardList;
            const color = STEP_COLORS[i];
            return (
              <StaggerItem key={step.number}>
                <div className="group relative flex flex-col items-center text-center">
                  {/* number circle with icon */}
                  <div className="relative">
                    <div className="relative grid size-24 place-items-center rounded-full border border-gold/15 bg-white shadow-[0_10px_40px_-20px_rgba(13,22,66,0.4)] transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_20px_50px_-20px_rgba(198,40,40,0.4)]">
                      <div className={`absolute inset-2 rounded-full ${color.glow}`} />
                      <span className={`relative grid size-16 place-items-center rounded-full ${color.badge} text-white shadow-md`}>
                        <Icon className="size-7" />
                      </span>
                    </div>
                    {/* step number badge */}
                    <span className="absolute -right-1 -top-1 grid size-9 place-items-center rounded-full bg-white text-sm font-extrabold text-navy shadow-lg ring-2 ring-gold/40">
                      {step.number}
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
    </SectionShell>
  );
}
