"use client";

import * as React from "react";
import Link from "next/link";
import { Phone, ArrowRight, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/site";

/* ---------------- Primary CTA (teal gradient) ---------------- */
type CtaButtonProps = {
  href?: string;
  children: React.ReactNode;
  className?: string;
  icon?: LucideIcon;
  size?: "md" | "lg";
  onClick?: () => void;
  type?: "button" | "submit";
};

export function CtaPrimary({
  href,
  children,
  className,
  icon: Icon,
  size = "lg",
  onClick,
  type = "button",
}: CtaButtonProps) {
  const classes = cn(
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-semibold text-white shadow-[0_10px_30px_-10px_rgba(13,143,124,0.7)] transition-all duration-300 hover:shadow-[0_16px_40px_-12px_rgba(13,143,124,0.8)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    size === "lg" ? "px-7 py-3.5 text-[0.95rem]" : "px-5 py-2.5 text-sm",
    "bg-gradient-to-br from-[#15C3A5] to-[#0A8F7C] hover:from-[#16CCA8] hover:to-[#0B9A84]",
    className
  );

  const content = (
    <>
      {/* shine sweep */}
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      {Icon ? <Icon className="size-4.5 shrink-0" /> : null}
      <span className="relative">{children}</span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {content}
      </Link>
    );
  }
  return (
    <button type={type} className={classes} onClick={onClick}>
      {content}
    </button>
  );
}

/* ---------------- Secondary CTA (outline) ---------------- */
export function CtaSecondary({
  href,
  children,
  className,
  icon: Icon = Phone,
  size = "lg",
}: CtaButtonProps) {
  const classes = cn(
    "group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background border border-navy/15 bg-white text-navy hover:border-brand hover:text-brand hover:bg-brand-soft",
    size === "lg" ? "px-7 py-3.5 text-[0.95rem]" : "px-5 py-2.5 text-sm",
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {Icon ? <Icon className="size-4 shrink-0" /> : null}
        <span>{children}</span>
      </Link>
    );
  }
  return (
    <button type="button" className={classes}>
      {Icon ? <Icon className="size-4 shrink-0" /> : null}
      <span>{children}</span>
    </button>
  );
}

/* ---------------- Ghost link with animated arrow ---------------- */
export function ArrowLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors hover:text-brand-dark",
        className
      )}
    >
      <span>{children}</span>
      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}

/* ---------------- Phone CTA pill ---------------- */
export function PhonePill({ className }: { className?: string }) {
  return (
    <a
      href={SITE.phoneHref}
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-full border border-navy/10 bg-white/80 py-1.5 pl-1.5 pr-4 font-semibold text-navy shadow-sm backdrop-blur transition-all hover:border-brand/40 hover:shadow-md",
        className
      )}
    >
      <span className="grid size-9 place-items-center rounded-full bg-gradient-to-br from-[#15C3A5] to-[#0A8F7C] text-white shadow-sm">
        <Phone className="size-4" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-[0.6rem] font-medium uppercase tracking-[0.15em] text-muted-foreground">
          Call Anytime
        </span>
        <span className="text-[0.85rem] font-bold tracking-tight text-navy group-hover:text-brand">
          {SITE.phone}
        </span>
      </span>
    </a>
  );
}
