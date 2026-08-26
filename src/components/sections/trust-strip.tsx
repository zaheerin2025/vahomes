"use client";

import { motion } from "framer-motion";
import { Sparkles, CalendarClock, Building2, Leaf } from "lucide-react";
import { SectionShell } from "@/components/site/section-heading";
import { Stagger, StaggerItem } from "@/components/site/reveal";

const values = [
  {
    icon: Sparkles,
    title: "Professional Service",
    description: "Detailed cleaning performed with care.",
  },
  {
    icon: CalendarClock,
    title: "Flexible Scheduling",
    description: "Cleaning options designed around your schedule.",
  },
  {
    icon: Building2,
    title: "Residential & Commercial",
    description: "Solutions for homes, offices, and other spaces.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Options",
    description: "Eco-friendly products available upon request.",
  },
];

export function TrustStrip() {
  return (
    <section className="relative z-10 -mt-2 pb-4 sm:-mt-6">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="rounded-3xl border border-navy/5 bg-white p-6 shadow-[0_20px_60px_-30px_rgba(15,34,48,0.25)] sm:p-8">
          <div className="mb-7 text-center">
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-brand">
              Why Customers Choose VA Home Cleaners
            </p>
          </div>
          <Stagger
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"
            stagger={0.1}
          >
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="group flex h-full flex-col items-start gap-3 rounded-2xl border border-transparent p-4 transition-all hover:border-brand/15 hover:bg-brand-soft/50">
                  <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-brand-soft to-brand-soft text-brand transition-all duration-300 group-hover:from-[#15C3A5] group-hover:to-[#0A8F7C] group-hover:text-white">
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
