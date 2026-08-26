"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  CalendarClock,
  HardHat,
  Building2,
  Leaf,
  Clock,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading, SectionShell } from "@/components/site/section-heading";
import { Stagger, StaggerItem } from "@/components/site/reveal";
import { SERVICES } from "@/lib/site";

const ICONS: Record<string, LucideIcon> = {
  Sparkles,
  CalendarClock,
  HardHat,
  Building2,
  Leaf,
  Clock,
};

export function Services() {
  return (
    <SectionShell
      id="services"
      className="bg-gradient-to-b from-white to-brand-soft/30"
    >
      <SectionHeading
        eyebrow="Our Services"
        title={
          <>
            Cleaning Services Designed{" "}
            <span className="text-brand">Around You</span>
          </>
        }
        description="Whether you need a one-time deep clean or dependable recurring service, we have flexible cleaning options to fit your space."
      />

      <Stagger
        className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7"
        stagger={0.08}
      >
        {SERVICES.map((service) => {
          const Icon = ICONS[service.icon] ?? Sparkles;
          return (
            <StaggerItem key={service.id}>
              <Link
                href={service.href}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-navy/5 bg-white shadow-[0_10px_40px_-24px_rgba(15,34,48,0.3)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_28px_60px_-30px_rgba(13,143,124,0.45)] hover:border-brand/20"
              >
                {/* Image */}
                <div className="relative aspect-[16/11] w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/55 via-navy/5 to-transparent" />
                  {/* Icon badge */}
                  <span className="absolute left-4 top-4 grid size-12 place-items-center rounded-2xl border border-white/30 bg-white/90 text-brand shadow-lg backdrop-blur transition-colors duration-300 group-hover:bg-[#0A8F7C] group-hover:text-white">
                    <Icon className="size-5.5" />
                  </span>
                  {/* Service label chip */}
                  <span className="absolute bottom-3 left-4 rounded-full bg-white/95 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-navy shadow-sm">
                    {service.id === "deep-cleaning"
                      ? "Most Popular"
                      : service.id === "recurring"
                      ? "Recurring"
                      : service.id === "eco-friendly"
                      ? "Green Option"
                      : "On Demand"}
                  </span>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold leading-snug text-navy transition-colors group-hover:text-brand">
                    {service.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <div className="mt-5 flex items-center justify-between border-t border-navy/5 pt-4">
                    <span className="inline-flex items-center gap-1.5 text-sm font-bold text-brand">
                      Learn More
                      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                    <span className="text-[0.65rem] font-medium uppercase tracking-wider text-muted-foreground">
                      Free Quote
                    </span>
                  </div>
                </div>

                {/* hover accent line */}
                <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-[#15C3A5] to-[#0A8F7C] transition-transform duration-500 group-hover:scale-x-100" />
              </Link>
            </StaggerItem>
          );
        })}
      </Stagger>
    </SectionShell>
  );
}
