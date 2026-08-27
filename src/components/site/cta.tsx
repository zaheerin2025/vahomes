"use client";

import * as React from "react";
import Link from "next/link";
import { Phone, ArrowRight, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/site";

/* ---------------- Primary CTA (crimson gradient) ---------------- */
type CtaButtonProps = {
  href?: string;
  children: React.ReactNode;
  className?: string;
  icon?: LucideIcon;
  size?: "md" | "lg";
  onClick?: () => void;
  type?: "button" | "submit";
  /** use navy instead of crimson */
  variant?: "crimson" | "navy" | "gold";
};

export function CtaPrimary({
  href,
  children,
  className,
  icon: Icon,
  size = "lg",
  onClick,
  type = "button",
  variant = "crimson",
}: CtaButtonProps) {
  const variantClass = {
    crimson:
      "bg-gradient-to-br from-[#E53935] to-[#C62828] text-white hover:from-[#EF4444] hover:to-[#D32F2F] shadow-[0_12px_30px_-10px_rgba(198,40,40,0.6)] hover:shadow-[0_18px_40px_-12px_rgba(198,40,40,0.7)]",
    navy:
      "bg-gradient-to-br from-[#1A237E] to-[#0D1642] text-white hover:from-[#283593] hover:to-[#1A237E] shadow-[0_12px_30px_-10px_rgba(26,35,126,0.6)] hover:shadow-[0_18px_40px_-12px_rgba(26,35,126,0.7)]",
    gold:
      "bg-gradient-to-br from-[#F5C518] to-[#D4AF37] text-[#0D1642] hover:from-[#FFD54F] hover:to-[#E6B800] shadow-[0_12px_30px_-10px_rgba(212,175,55,0.6)] hover:shadow-[0_18px_40px_-12px_rgba(212,175,55,0.7)]",
  }[variant];

  const classes = cn(
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-semibold transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    size === "lg" ? "px-7 py-3.5 text-[0.95rem]" : "px-5 py-2.5 text-sm",
    variantClass,
    className
  );

  const content = (
    <>
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

/* ---------------- Secondary CTA (navy outline) ---------------- */
export function CtaSecondary({
  href,
  children,
  className,
  icon: Icon = Phone,
  size = "lg",
}: CtaButtonProps) {
  const classes = cn(
    "group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background border-2 border-navy/15 bg-white text-navy hover:border-[#1A237E] hover:bg-navy hover:text-white",
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
        "group inline-flex items-center gap-1.5 text-sm font-semibold text-crimson transition-colors hover:text-crimson-dark",
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
        "group inline-flex items-center gap-2.5 rounded-full border border-navy/10 bg-white/90 py-1.5 pl-1.5 pr-4 font-semibold text-navy shadow-sm backdrop-blur transition-all hover:border-[#1A237E] hover:shadow-md",
        className
      )}
    >
      <span className="grid size-9 place-items-center rounded-full bg-gradient-to-br from-[#E53935] to-[#C62828] text-white shadow-sm">
        <Phone className="size-4" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-[0.6rem] font-medium uppercase tracking-[0.15em] text-muted-foreground">
          Call Anytime
        </span>
        <span className="text-[0.85rem] font-bold tracking-tight text-navy group-hover:text-crimson">
          {SITE.phone}
        </span>
      </span>
    </a>
  );
}
