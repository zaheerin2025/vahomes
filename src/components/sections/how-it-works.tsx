"use client";

import * as React from "react";
import { motion } from "framer-motion";
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

export function HowItWorks() {
  return (
    <SectionShell
      id="how-it-works"
      className="bg-brand-soft/40"
    >
      <SectionHeading
        eyebrow="How It Works"
        title={
          <>
            A Cleaner Home in{" "}
            <span className="text-brand">3 Simple Steps</span>
          </>
        }
        description="Getting started is easy. We've made the whole process simple and stress-free from start to finish."
      />

      <div className="relative mt-16">
        {/* connector line */}
        <div className="pointer-events-none absolute left-0 right-0 top-12 hidden lg:block">
          <div className="mx-auto h-px max-w-4xl bg-gradient-to-r from-transparent via-brand/30 to-transparent" />
        </div>

        <Stagger className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:gap-10">
          {STEPS.map((step) => {
            const Icon = ICONS[step.icon] ?? ClipboardList;
            return (
              <StaggerItem key={step.number}>
                <div className="group relative flex flex-col items-center text-center">
                  {/* number circle with icon */}
                  <div className="relative">
                    <div className="grid size-24 place-items-center rounded-full border border-brand/15 bg-white shadow-[0_10px_40px_-20px_rgba(13,143,124,0.5)] transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_20px_50px_-20px_rgba(13,143,124,0.6)]">
                      <span className="grid size-16 place-items-center rounded-full bg-gradient-to-br from-brand-soft to-white text-brand transition-colors duration-500 group-hover:from-[#15C3A5] group-hover:to-[#0A8F7C] group-hover:text-white">
                        <Icon className="size-7" />
                      </span>
                    </div>
                    {/* step number badge */}
                    <span className="absolute -right-1 -top-1 grid size-9 place-items-center rounded-full bg-navy text-sm font-extrabold text-white shadow-lg ring-4 ring-brand-soft/40">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-navy">
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
