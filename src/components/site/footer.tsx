"use client";

import * as React from "react";
import Link from "next/link";
import { Phone, Mail, Clock, ArrowRight, Facebook, Instagram, Heart } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { NAV_LINKS, SERVICES, SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden bg-navy text-white">
      {/* top accent */}
      <div className="h-1 w-full bg-gradient-to-r from-[#15C3A5] via-[#0E9F8E] to-[#0A8F7C]" />

      {/* glow */}
      <div className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-brand/15 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-12">
          {/* Brand */}
          <div className="flex flex-col">
            <Logo
              className="!text-white"
              textClassName="!text-white"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              Professional residential and commercial cleaning services designed
              to keep your spaces fresh, clean, and comfortable.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Instagram, label: "Instagram" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all hover:border-brand hover:bg-brand hover:text-white"
                >
                  <s.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <FooterCol title="Quick Links">
            {NAV_LINKS.map((link) => (
              <FooterLink key={link.href} href={link.href}>
                {link.label}
              </FooterLink>
            ))}
          </FooterCol>

          {/* Services */}
          <FooterCol title="Services">
            {SERVICES.map((s) => (
              <FooterLink key={s.id} href="#services">
                {s.name}
              </FooterLink>
            ))}
          </FooterCol>

          {/* Contact + CTA */}
          <FooterCol title="Get In Touch">
            <li>
              <a
                href={SITE.phoneHref}
                className="group flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-white"
              >
                <span className="grid size-9 place-items-center rounded-full bg-brand/15 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
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
                <span className="grid size-9 place-items-center rounded-full bg-brand/15 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <Mail className="size-4" />
                </span>
                <span className="font-semibold">{SITE.email}</span>
              </a>
            </li>
            <li className="flex items-center gap-3 text-sm text-white/70">
              <span className="grid size-9 place-items-center rounded-full bg-brand/15 text-brand">
                <Clock className="size-4" />
              </span>
              <span className="font-semibold">7 days a week</span>
            </li>
            <li className="pt-2">
              <Link
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-[#15C3A5] to-[#0A8F7C] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-transform hover:-translate-y-0.5"
              >
                Book a Cleaning
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </li>
          </FooterCol>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 sm:flex-row">
          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} VA Home Cleaners. All Rights
            Reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="#"
              className="text-xs text-white/50 transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-xs text-white/50 transition-colors hover:text-white"
            >
              Terms of Service
            </Link>
          </div>
          <p className="flex items-center gap-1.5 text-xs text-white/40">
            Made with <Heart className="size-3 fill-brand text-brand" /> for
            cleaner spaces
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
      <h3 className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-white/50">
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
        className="group inline-flex items-center gap-1.5 text-sm text-white/70 transition-colors hover:text-brand"
      >
        <span className="size-1 rounded-full bg-white/30 transition-colors group-hover:bg-brand" />
        {children}
      </Link>
    </li>
  );
}
