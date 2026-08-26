"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, Phone, CalendarCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/brand/logo";
import { CtaPrimary } from "@/components/site/cta";
import { NAV_LINKS, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState<string>("#home");

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track active section for nav highlight
  React.useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Lock body scroll when mobile menu open
  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-navy/5 bg-white/85 backdrop-blur-xl shadow-[0_8px_30px_-15px_rgba(15,34,48,0.15)]"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10 transition-all duration-300"
          style={{ height: scrolled ? 64 : 72 }}
        >
          {/* Logo */}
          <Link
            href="#home"
            aria-label="VA Home Cleaners — home"
            className="transition-transform hover:scale-[1.02]"
          >
            <Logo />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                  active === link.href
                    ? "text-brand"
                    : "text-navy/70 hover:text-navy"
                )}
              >
                {link.label}
                {active === link.href ? (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-full bg-brand-soft"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                ) : null}
              </Link>
            ))}
          </nav>

          {/* Desktop right CTAs */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={SITE.phoneHref}
              className="group inline-flex items-center gap-2 text-sm font-bold text-navy transition-colors hover:text-brand"
            >
              <span className="grid size-8 place-items-center rounded-full bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                <Phone className="size-3.5" />
              </span>
              {SITE.phone}
            </a>
            <CtaPrimary href="#contact" size="md" icon={CalendarCheck}>
              Book a Cleaning
            </CtaPrimary>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="grid size-11 place-items-center rounded-xl border border-navy/10 bg-white/70 text-navy shadow-sm backdrop-blur transition-colors hover:border-brand/40 hover:text-brand lg:hidden"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <div
              className="absolute inset-0 bg-navy/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 34 }}
              className="absolute right-0 top-0 flex h-full w-[84%] max-w-sm flex-col bg-white shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-navy/5 px-5 py-4">
                <Logo />
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="grid size-10 place-items-center rounded-xl border border-navy/10 text-navy transition-colors hover:border-brand/40 hover:text-brand"
                >
                  <X className="size-5" />
                </button>
              </div>

              <nav className="flex flex-col gap-1 px-4 py-6" aria-label="Mobile">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-lg font-semibold text-navy transition-colors hover:bg-brand-soft hover:text-brand"
                    >
                      {link.label}
                      <span className="text-brand/40">→</span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto space-y-3 border-t border-navy/5 px-5 py-6">
                <a
                  href={SITE.phoneHref}
                  className="flex items-center justify-center gap-2.5 rounded-full border border-navy/10 bg-white py-3.5 font-bold text-navy transition-colors hover:border-brand/40 hover:text-brand"
                >
                  <Phone className="size-4" />
                  {SITE.phone}
                </a>
                <CtaPrimary
                  href="#contact"
                  size="lg"
                  icon={CalendarCheck}
                  onClick={() => setOpen(false)}
                >
                  Book a Cleaning
                </CtaPrimary>
                <p className="pt-1 text-center text-xs text-muted-foreground">
                  Call anytime — we&apos;re here to help.
                </p>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
