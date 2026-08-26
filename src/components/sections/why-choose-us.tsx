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

const reasons = [
  {
    icon: ScanSearch,
    title: "Attention to Detail",
    description:
      "We focus on the details that make a space feel truly clean — from surfaces to the spots others miss.",
  },
  {
    icon: SlidersHorizontal,
    title: "Flexible Cleaning Options",
    description:
      "Choose one-time, recurring, hourly, residential, or commercial cleaning — built around your priorities.",
  },
  {
    icon: BadgeCheck,
    title: "Professional Approach",
    description:
      "We aim to provide a dependable and professional customer experience, every single visit.",
  },
  {
    icon: Wand2,
    title: "Cleaning That Fits Your Needs",
    description:
      "From standard cleaning to specialized requests, services can be tailored around your priorities.",
  },
];

const stats = [
  { value: "100%", label: "Detail-focused" },
  { value: "6", label: "Service options" },
  { value: "7", label: "Days a week" },
  { value: "1:1", label: "Tailored to you" },
];

export function WhyChooseUs() {
  return (
    <SectionShell id="about" className="overflow-hidden">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left — image with floating quote card */}
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative overflow-hidden rounded-[2rem] shadow-[0_30px_80px_-35px_rgba(15,34,48,0.45)] ring-1 ring-navy/5">
            <div className="relative aspect-[4/5] w-full sm:aspect-[5/4] lg:aspect-[4/5]">
              <Image
                src="/images/about-team.png"
                alt="Professional VA Home Cleaners team in a bright modern home"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
          </div>

          {/* floating quote card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="absolute -bottom-6 -right-3 max-w-[15rem] rounded-2xl border border-navy/5 bg-white p-5 shadow-2xl sm:-right-6"
          >
            <Quote className="size-6 text-brand/40" />
            <p className="mt-1 text-sm font-medium leading-relaxed text-navy">
              &ldquo;We treat every space like it&apos;s our own.&rdquo;
            </p>
            <p className="mt-2 text-xs font-semibold text-muted-foreground">
              — The VA Home Cleaners Team
            </p>
          </motion.div>

          {/* decorative ring */}
          <div className="absolute -left-5 -top-5 -z-10 size-28 rounded-full border-2 border-dashed border-brand/30" />
        </Reveal>

        {/* Right — content */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-soft px-4 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-brand">
              <span className="size-1.5 rounded-full bg-brand" />
              Why VA Home Cleaners
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-balance text-3xl font-extrabold leading-[1.12] tracking-tight text-navy sm:text-4xl lg:text-[2.6rem]">
              More Than Cleaning.{" "}
              <span className="text-brand">We Care About Your Space.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground">
              VA Home Cleaners provides residential and commercial cleaning
              with a focus on dependable service, attention to detail, and a
              cleaner experience for every customer.
            </p>
          </Reveal>

          <Stagger className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2" stagger={0.08}>
            {reasons.map((r) => (
              <StaggerItem key={r.title}>
                <div className="group flex h-full gap-3.5 rounded-2xl border border-navy/5 bg-white p-5 transition-all hover:border-brand/20 hover:shadow-lg hover:shadow-brand/5">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                    <r.icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-navy">{r.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {r.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          {/* stats strip */}
          <Reveal delay={0.15}>
            <div className="mt-8 grid grid-cols-4 gap-3 rounded-2xl bg-navy p-5">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-xl font-extrabold text-white sm:text-2xl">
                    {s.value}
                  </p>
                  <p className="mt-0.5 text-[0.62rem] font-medium uppercase tracking-wider text-white/60 sm:text-[0.68rem]">
                    {s.label}
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
