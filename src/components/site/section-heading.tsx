"use client";

import * as React from "react";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/site/reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
  /** use light variant for dark backgrounds */
  onDark?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  titleClassName,
  onDark = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow ? (
        <Reveal>
          <span
            className={cn(
              "inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.18em]",
              onDark
                ? "border-gold/30 bg-gold/10 text-gold"
                : "border-gold/40 bg-gold-soft text-[#9B7B0E]"
            )}
          >
            <Sparkles className="size-3.5" />
            {eyebrow}
          </span>
        </Reveal>
      ) : null}
      <Reveal delay={0.05}>
        <h2
          className={cn(
            "text-balance font-heading text-3xl font-extrabold leading-[1.12] tracking-tight sm:text-4xl md:text-[2.6rem]",
            align === "center" && "mx-auto max-w-3xl",
            onDark ? "text-white" : "text-navy",
            titleClassName
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={0.1}>
          <p
            className={cn(
              "text-pretty text-base leading-relaxed sm:text-[1.05rem]",
              align === "center" ? "max-w-2xl" : "max-w-xl",
              onDark ? "text-white/70" : "text-muted-foreground"
            )}
          >
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}

export function SectionShell({
  children,
  className,
  id,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  containerClassName?: string;
}) {
  return (
    <section id={id} className={cn("relative py-20 sm:py-24 lg:py-28", className)}>
      <div className={cn("mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10", containerClassName)}>
        {children}
      </div>
    </section>
  );
}
