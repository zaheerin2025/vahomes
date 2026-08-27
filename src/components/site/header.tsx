"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, Phone, CalendarCheck, ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/brand/logo";
import { CtaPrimary } from "@/components/site/cta";
import { LanguageSwitcher } from "@/components/site/language-switcher";
import { ServicesMegaMenu, ServicesNavTrigger } from "@/components/site/services-mega-menu";
import { useI18n } from "@/lib/i18n/context";
import { SERVICE_DETAILS } from "@/lib/services";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

const NAV_KEYS = [
  { key: "nav.about", href: "/#about" },
  { key: "nav.work", href: "/#work" },
  { key: "nav.contact", href: "/#contact" },
];

const SERVICE_NAME_KEY: Record<string, string> = {
  "regular-cleaning": "services.regular",
  "light-cleaning": "services.light",
  "deep-cleaning": "services.deep",
  "weekly-biweekly": "services.weekly",
  "post-construction": "services.postConstruction",
  commercial: "services.commercial",
  "eco-friendly": "services.eco",
  hourly: "services.hourly",
};

const MOBILE_CATEGORIES = [
  {
    key: "residential",
    labelKey: "nav.servicesResidential",
    slugs: ["deep-cleaning", "regular-cleaning", "light-cleaning", "weekly-biweekly"],
  },
  {
    key: "commercial",
    labelKey: "nav.servicesCommercial",
    slugs: ["commercial", "post-construction"],
  },
  {
    key: "specialty",
    labelKey: "nav.servicesSpecialty",
    slugs: ["eco-friendly", "hourly"],
  },
];

export function Header() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = React.useState(true);
  const [servicesOpen, setServicesOpen] = React.useState(false);
  const [active, setActive] = React.useState<string>("#home");

  // hover delay handling for the services mega-menu
  const closeTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const openServices = React.useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  }, []);
  const closeServices = React.useCallback((delay = 120) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setServicesOpen(false), delay);
  }, []);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    const ids = ["home", "services", "about", "work", "contact"];
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

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const navLinks = NAV_KEYS.map((n) => ({ ...n, label: t(n.key) }));

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-navy/5 bg-white/90 backdrop-blur-xl shadow-[0_8px_30px_-15px_rgba(13,22,66,0.15)]"
            : "bg-white/60 backdrop-blur-md"
        )}
      >
        <div
          className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10 transition-all duration-300"
          style={{ height: scrolled ? 70 : 96 }}
        >
          {/* Logo — large & natural when static, shrinks on scroll */}
          <Link
            href="/#home"
            aria-label="VA Home Cleaners — home"
            className="transition-all duration-300"
          >
            <Logo height={scrolled ? 40 : 68} />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            <Link
              href="/#home"
              className={cn(
                "relative rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                active === "#home" ? "text-crimson" : "text-navy/70 hover:text-navy"
              )}
            >
              {t("nav.home")}
              {active === "#home" ? (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 -z-10 rounded-full bg-crimson-soft"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              ) : null}
            </Link>

            {/* Services dropdown trigger — panel is rendered separately below for full-width centering */}
            <div
              className="relative"
              onMouseEnter={openServices}
              onMouseLeave={() => closeServices()}
            >
              <ServicesNavTrigger
                isActive={active === "#services"}
                isOpen={servicesOpen}
                onClick={() => (servicesOpen ? closeServices(0) : openServices())}
                label={t("nav.services")}
              />
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                  active === link.href.replace("/", "")
                    ? "text-crimson"
                    : "text-navy/70 hover:text-navy"
                )}
              >
                {link.label}
                {active === link.href.replace("/", "") ? (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-full bg-crimson-soft"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                ) : null}
              </Link>
            ))}
          </nav>

          {/* Desktop right CTAs */}
          <div className="hidden items-center gap-3 lg:flex">
            <LanguageSwitcher />
            <a
              href={SITE.phoneHref}
              className="group inline-flex items-center gap-2 text-sm font-bold text-navy transition-colors hover:text-crimson"
            >
              <span className="grid size-8 place-items-center rounded-full bg-crimson-soft text-crimson transition-colors group-hover:bg-crimson group-hover:text-white">
                <Phone className="size-3.5" />
              </span>
              {SITE.phone}
            </a>
            <CtaPrimary href="/book" size="md" icon={CalendarCheck}>
              {t("nav.book")}
            </CtaPrimary>
          </div>

          {/* Mobile right side */}
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher variant="compact" />
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
              className="grid size-11 place-items-center rounded-xl border border-navy/10 bg-white/70 text-navy shadow-sm backdrop-blur transition-colors hover:border-crimson/40 hover:text-crimson"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Services mega-menu — rendered as a sibling so it can span full viewport width */}
      <ServicesMegaMenu
        isOpen={servicesOpen}
        onClose={() => closeServices(0)}
        onEnter={openServices}
        onLeave={() => closeServices()}
      />

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
              className="absolute inset-0 bg-navy/50 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 34 }}
              className="absolute right-0 top-0 flex h-full w-[88%] max-w-md flex-col bg-white shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-navy/5 px-5 py-4">
                <Logo height={52} />
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="grid size-10 place-items-center rounded-xl border border-navy/10 text-navy transition-colors hover:border-crimson/40 hover:text-crimson"
                >
                  <X className="size-5" />
                </button>
              </div>

              {/* Scrollable nav area */}
              <div className="scroll-area-custom flex-1 overflow-y-auto px-4 py-5">
                {/* Home link */}
                <MobileNavLink
                  href="/#home"
                  label={t("nav.home")}
                  onClick={() => setOpen(false)}
                  delay={0.05}
                />

                {/* Services accordion */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="overflow-hidden rounded-2xl"
                >
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen((o) => !o)}
                    aria-expanded={mobileServicesOpen}
                    className="flex w-full items-center justify-between rounded-2xl px-4 py-3.5 text-lg font-semibold text-navy transition-colors hover:bg-crimson-soft/50"
                  >
                    <span className="flex items-center gap-2">
                      {t("nav.services")}
                      <span className="rounded-full bg-gold/20 px-2 py-0.5 text-[0.6rem] font-bold text-[#9B7B0E]">
                        {SERVICE_DETAILS.length}
                      </span>
                    </span>
                    <ChevronDown
                      className={cn(
                        "size-5 text-crimson/40 transition-transform duration-300",
                        mobileServicesOpen ? "rotate-180" : ""
                      )}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {mobileServicesOpen ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-4 px-3 pb-3 pt-1">
                          {MOBILE_CATEGORIES.map((cat) => (
                            <div key={cat.key}>
                              <p className="mb-2 flex items-center gap-2 px-2 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#9B7B0E]">
                                <span className="size-1.5 rounded-full bg-gold" />
                                {t(cat.labelKey)}
                              </p>
                              <div className="flex flex-col gap-1">
                                {cat.slugs.map((slug) => {
                                  const svc = SERVICE_DETAILS.find((s) => s.slug === slug);
                                  if (!svc) return null;
                                  const name = t(SERVICE_NAME_KEY[slug] ?? "services.deep");
                                  return (
                                    <Link
                                      key={slug}
                                      href={`/services/${slug}`}
                                      onClick={() => setOpen(false)}
                                      className="group flex items-center gap-2.5 rounded-xl border border-navy/5 bg-white px-3 py-2.5 transition-all hover:border-crimson/30 hover:bg-crimson-soft/20"
                                    >
                                      <span
                                        className={cn(
                                          "size-1.5 rounded-full bg-gradient-to-br",
                                          svc.accent === "crimson"
                                            ? "from-[#E53935] to-[#C62828]"
                                            : svc.accent === "navy"
                                            ? "from-[#1A237E] to-[#0D1642]"
                                            : svc.accent === "purple"
                                            ? "from-[#6A1B9A] to-[#4A148C]"
                                            : "from-[#D4AF37] to-[#9B7B0E]"
                                        )}
                                      />
                                      <span className="flex-1 text-sm font-semibold text-navy group-hover:text-crimson">
                                        {name}
                                      </span>
                                      <ArrowRight className="size-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-crimson" />
                                    </Link>
                                  );
                                })}
                              </div>
                            </div>
                          ))}

                          {/* View all link */}
                          <Link
                            href="/#services"
                            onClick={() => setOpen(false)}
                            className="mt-2 flex items-center justify-center gap-1.5 rounded-xl bg-navy px-4 py-3 text-sm font-bold text-white"
                          >
                            {t("nav.viewAllServices")}
                            <ArrowRight className="size-4" />
                          </Link>
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </motion.div>

                {/* Remaining nav links */}
                <MobileNavLink
                  href="/#about"
                  label={t("nav.about")}
                  onClick={() => setOpen(false)}
                  delay={0.15}
                />
                <MobileNavLink
                  href="/#work"
                  label={t("nav.work")}
                  onClick={() => setOpen(false)}
                  delay={0.2}
                />
                <MobileNavLink
                  href="/#contact"
                  label={t("nav.contact")}
                  onClick={() => setOpen(false)}
                  delay={0.25}
                />
              </div>

              {/* Footer CTAs */}
              <div className="space-y-3 border-t border-navy/5 px-5 py-5">
                <a
                  href={SITE.phoneHref}
                  className="flex items-center justify-center gap-2.5 rounded-full border border-navy/10 bg-white py-3.5 font-bold text-navy transition-colors hover:border-crimson/40 hover:text-crimson"
                >
                  <Phone className="size-4" />
                  {SITE.phone}
                </a>
                <CtaPrimary
                  href="/book"
                  size="lg"
                  icon={CalendarCheck}
                  onClick={() => setOpen(false)}
                >
                  {t("nav.book")}
                </CtaPrimary>
                <p className="pt-1 text-center text-xs text-muted-foreground">
                  <span className="font-semibold text-[#9B7B0E]">
                    {SITE.tagline}
                  </span>{" "}
                  — {t("header.callAnytime")}.
                </p>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

function MobileNavLink({
  href,
  label,
  onClick,
  delay,
}: {
  href: string;
  label: string;
  onClick: () => void;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay }}
    >
      <Link
        href={href}
        onClick={onClick}
        className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-lg font-semibold text-navy transition-colors hover:bg-crimson-soft hover:text-crimson"
      >
        {label}
        <span className="text-crimson/40">→</span>
      </Link>
    </motion.div>
  );
}
