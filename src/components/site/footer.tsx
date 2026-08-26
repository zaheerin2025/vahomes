"use client";

import * as React from "react";
import Link from "next/link";
import { Phone, Mail, Clock, ArrowRight, Facebook, Instagram, Heart, MapPin } from "lucide-react";
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
    <footer className="relative mt-auto overflow-hidden bg-gradient-to-br from-[#0D1642] via-[#15195F] to-[#0D1642] text-white">
      {/* top tricolor accent */}
      <div className="h-1 w-full bg-gradient-to-r from-[#1A237E] via-[#C62828] to-[#D4AF37]" />

      {/* glows */}
      <div className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-gold/12 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-crimson/10 blur-3xl" />
      {/* subtle dot pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(245,197,24,0.6) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr] lg:gap-12">
          {/* ===== Brand column ===== */}
          <div className="flex flex-col">
            {/* Logo on a clean white brand card — keeps all logo colors visible */}
            <div className="inline-flex w-fit items-center rounded-2xl bg-white p-4 shadow-lg ring-1 ring-white/20">
              <Logo height={52} />
            </div>

            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              {t("footer.description")}
            </p>

            {/* Spanish tagline */}
            <p className="mt-4 flex items-center gap-2 text-sm font-semibold italic text-gold">
              <span className="size-1.5 rounded-full bg-gold" />
              {SITE.tagline}
              <span className="text-white/40">— {t("footer.taglineEn")}</span>
            </p>

            {/* Social */}
            <div className="mt-6 flex items-center gap-3">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Instagram, label: "Instagram" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all hover:border-gold hover:bg-gold hover:text-navy"
                >
                  <s.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* ===== Quick Links ===== */}
          <FooterCol title={t("footer.quickLinks")}>
            {navLinks.map((link) => (
              <FooterLink key={link.href} href={link.href}>
                {link.label}
              </FooterLink>
            ))}
          </FooterCol>

          {/* ===== Services ===== */}
          <FooterCol title={t("footer.services")}>
            {services.map((s) => (
              <FooterLink key={s.href} href={s.href}>
                {s.label}
              </FooterLink>
            ))}
          </FooterCol>

          {/* ===== Contact + CTA ===== */}
          <FooterCol title={t("footer.getInTouch")}>
            <li>
              <a
                href={SITE.phoneHref}
                className="group flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-white"
              >
                <span className="grid size-9 place-items-center rounded-full bg-crimson/20 text-crimson transition-colors group-hover:bg-crimson group-hover:text-white">
                  <Phone className="size-4" />
                </span>
                <span className="font-semibold">{SITE.phone}</span>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${SITE.email}`}
                className="group flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-white"
              >
                <span className="grid size-9 place-items-center rounded-full bg-gold/20 text-gold transition-colors group-hover:bg-gold group-hover:text-navy">
                  <Mail className="size-4" />
                </span>
                <span className="font-semibold">{SITE.email}</span>
              </a>
            </li>
            <li className="flex items-center gap-3 text-sm text-white/70">
              <span className="grid size-9 place-items-center rounded-full bg-purple/30 text-purple">
                <Clock className="size-4" />
              </span>
              <span className="font-semibold">{t("footer.daysWeek")}</span>
            </li>
            <li className="flex items-center gap-3 text-sm text-white/70">
              <span className="grid size-9 place-items-center rounded-full bg-[#1A237E]/40 text-[#7FE3D0]">
                <MapPin className="size-4" />
              </span>
              <span className="font-semibold">{t("footer.serviceArea")}</span>
            </li>
            <li className="pt-3">
              <Link
                href="/book"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-[#E53935] to-[#C62828] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-transform hover:-translate-y-0.5"
              >
                {t("footer.bookCta")}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </li>
          </FooterCol>
        </div>

        {/* ===== Bottom bar ===== */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 sm:flex-row">
          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} VA Home Cleaners.{" "}
            {t("footer.rights")}
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="#"
              className="text-xs text-white/50 transition-colors hover:text-gold"
            >
              {t("footer.privacy")}
            </Link>
            <Link
              href="#"
              className="text-xs text-white/50 transition-colors hover:text-gold"
            >
              {t("footer.terms")}
            </Link>
          </div>
          <p className="flex items-center gap-1.5 text-xs text-white/40">
            {t("footer.madeWith")}{" "}
            <Heart className="size-3 fill-crimson text-crimson" />{" "}
            {t("footer.madeFor")}
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-gold">
        {title}
      </h3>
      <ul className="mt-4 flex flex-col gap-3">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="group inline-flex items-center gap-1.5 text-sm text-white/70 transition-colors hover:text-gold"
      >
        <span className="size-1 rounded-full bg-white/30 transition-colors group-hover:bg-gold" />
        {children}
      </Link>
    </li>
  );
}
