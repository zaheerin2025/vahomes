"use client";

import * as React from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  Clock,
  ArrowRight,
  Facebook,
  Instagram,
  MapPin,
  Send,
} from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { SITE } from "@/lib/site";
import { useI18n } from "@/lib/i18n/context";

export function Footer() {
  const { t } = useI18n();

  const navLinks = [
    { label: t("nav.home"), href: "/#home" },
    { label: t("nav.services"), href: "/#services" },
    { label: t("nav.about"), href: "/#about" },
    { label: t("nav.work"), href: "/#work" },
    { label: t("nav.contact"), href: "/#contact" },
  ];

  const services = [
    { label: t("services.deep"), href: "/services/deep-cleaning" },
    { label: t("services.regular"), href: "/services/regular-cleaning" },
    { label: t("services.light"), href: "/services/light-cleaning" },
    { label: t("services.weekly"), href: "/services/weekly-biweekly" },
    { label: t("services.postConstruction"), href: "/services/post-construction" },
    { label: t("services.commercial"), href: "/services/commercial" },
    { label: t("services.eco"), href: "/services/eco-friendly" },
    { label: t("services.hourly"), href: "/services/hourly" },
  ];

  return (
    <footer className="relative mt-auto overflow-hidden bg-[#0B1230] text-white">
      {/* top tricolor accent */}
      <div className="h-1 w-full bg-gradient-to-r from-[#1A237E] via-[#C62828] to-[#D4AF37]" />

      {/* subtle top hairline glow */}
      <div className="pointer-events-none absolute inset-x-0 top-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* glows */}
      <div className="pointer-events-none absolute -left-32 top-24 h-80 w-80 rounded-full bg-[#1A237E]/40 blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 bottom-16 h-80 w-80 rounded-full bg-[#C62828]/15 blur-[100px]" />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* ===== Top section: brand + link columns ===== */}
        <div className="grid grid-cols-1 gap-12 py-14 lg:grid-cols-[1.6fr_1fr_1fr_1.3fr] lg:gap-12 lg:py-16">
          {/* ----- Brand column ----- */}
          <div className="flex flex-col">
            {/* Logo on a clean white brand card */}
            <div className="inline-flex w-fit items-center rounded-2xl bg-white p-4 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.4)] ring-1 ring-white/15">
              <Logo height={50} />
            </div>

            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/55">
              {t("footer.description")}
            </p>

            {/* Spanish tagline */}
            <p className="mt-4 flex items-center gap-2 text-sm font-semibold italic text-gold">
              <span className="size-1.5 rounded-full bg-gold" />
              {SITE.tagline}
              <span className="not-italic text-white/35">
                — {t("footer.taglineEn")}
              </span>
            </p>

            {/* Social */}
            <div className="mt-6 flex items-center gap-2.5">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Instagram, label: "Instagram" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-white/60 transition-all hover:border-gold/50 hover:bg-gold hover:text-[#0B1230]"
                >
                  <s.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* ----- Quick Links ----- */}
          <FooterColumn title={t("footer.quickLinks")}>
            {navLinks.map((link) => (
              <FooterTextLink key={link.href} href={link.href}>
                {link.label}
              </FooterTextLink>
            ))}
          </FooterColumn>

          {/* ----- Services ----- */}
          <FooterColumn title={t("footer.services")}>
            {services.map((s) => (
              <FooterTextLink key={s.href} href={s.href}>
                {s.label}
              </FooterTextLink>
            ))}
          </FooterColumn>

          {/* ----- Contact column ----- */}
          <div>
            <FooterHeading>{t("footer.getInTouch")}</FooterHeading>

            <div className="mt-5 flex flex-col gap-3.5">
              <ContactRow
                icon={Phone}
                accent="crimson"
                href={SITE.phoneHref}
                label={SITE.phone}
              />
              <ContactRow
                icon={Mail}
                accent="gold"
                href={`mailto:${SITE.email}`}
                label={SITE.email}
              />
              <ContactRow
                icon={Clock}
                accent="purple"
                label={t("footer.daysWeek")}
              />
              <ContactRow
                icon={MapPin}
                accent="teal"
                label={t("footer.serviceArea")}
              />
            </div>

            {/* Book CTA */}
            <Link
              href="/book"
              className="group mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-[#E53935] to-[#C62828] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(198,40,40,0.6)] transition-transform hover:-translate-y-0.5"
            >
              {t("footer.bookCta")}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* ===== Newsletter strip (subtle, professional) ===== */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/[0.08] py-6 sm:flex-row">
          <p className="flex items-center gap-2 text-sm text-white/55">
            <Send className="size-4 text-gold" />
            {t("footer.newsletterText")}
          </p>
          <form
            className="flex w-full max-w-sm items-center gap-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder={t("footer.emailPlaceholder")}
              aria-label={t("footer.emailPlaceholder")}
              className="h-10 flex-1 rounded-full border border-white/10 bg-white/[0.04] px-4 text-sm text-white placeholder:text-white/35 focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/30"
            />
            <button
              type="submit"
              className="h-10 shrink-0 rounded-full bg-white px-4 text-sm font-bold text-[#0B1230] transition-colors hover:bg-gold"
            >
              {t("footer.subscribe")}
            </button>
          </form>
        </div>

        {/* ===== Bottom bar ===== */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/[0.08] py-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} VA Home Cleaners.{" "}
            {t("footer.rights")}
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="#"
              className="text-xs text-white/40 transition-colors hover:text-gold"
            >
              {t("footer.privacy")}
            </Link>
            <Link
              href="#"
              className="text-xs text-white/40 transition-colors hover:text-gold"
            >
              {t("footer.terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ===== Sub-components ===== */

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-white/45">
      {children}
    </h3>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <FooterHeading>{title}</FooterHeading>
      <nav className="mt-5 flex flex-col gap-2.5">{children}</nav>
    </div>
  );
}

/**
 * Clean professional text link — NO bullet dots.
 * Uses a subtle underline-on-hover with smooth color transition.
 */
function FooterTextLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group inline-flex w-fit items-center text-sm text-white/55 transition-colors hover:text-white"
    >
      <span className="relative">
        {children}
        <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
      </span>
    </Link>
  );
}

const ACCENT_BG: Record<string, string> = {
  crimson: "bg-[#C62828]/15 text-[#FF6B6B]",
  gold: "bg-[#D4AF37]/15 text-[#F5C518]",
  purple: "bg-[#6A1B9A]/25 text-[#C99EF0]",
  teal: "bg-[#0E9F8E]/20 text-[#7FE3D0]",
};

function ContactRow({
  icon: Icon,
  accent,
  href,
  label,
}: {
  icon: typeof Phone;
  accent: "crimson" | "gold" | "purple" | "teal";
  href?: string;
  label: string;
}) {
  const content = (
    <div className="group flex items-center gap-3">
      <span
        className={`grid size-9 shrink-0 place-items-center rounded-lg ${ACCENT_BG[accent]} transition-transform group-hover:scale-105`}
      >
        <Icon className="size-4" />
      </span>
      <span className="text-sm font-medium text-white/70 transition-colors group-hover:text-white">
        {label}
      </span>
    </div>
  );
  return href ? <a href={href}>{content}</a> : content;
}
