"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  CalendarClock,
  Wind,
  HardHat,
  Building2,
  Leaf,
  Clock,
  ChevronDown,
  ArrowRight,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { useI18n } from "@/lib/i18n/context";
import { SERVICE_DETAILS } from "@/lib/services";
import { cn, assetPath } from "@/lib/utils";

const ICONS: Record<string, LucideIcon> = {
  Sparkles,
  CalendarClock,
  Wind,
  HardHat,
  Building2,
  Leaf,
  Clock,
};

const ACCENT_GRAD: Record<string, string> = {
  crimson: "from-[#E53935] to-[#C62828]",
  navy: "from-[#1A237E] to-[#0D1642]",
  purple: "from-[#6A1B9A] to-[#4A148C]",
  gold: "from-[#D4AF37] to-[#9B7B0E]",
};

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

const SERVICE_TAGLINE_KEY: Record<string, string> = {
  "regular-cleaning": "serviceTagline.regular",
  "light-cleaning": "serviceTagline.light",
  "deep-cleaning": "serviceTagline.deep",
  "weekly-biweekly": "serviceTagline.weekly",
  "post-construction": "serviceTagline.postConstruction",
  commercial: "serviceTagline.commercial",
  "eco-friendly": "serviceTagline.eco",
  hourly: "serviceTagline.hourly",
};

type CategoryDef = {
  key: string;
  labelKey: string;
  slugs: string[];
};

const CATEGORIES: CategoryDef[] = [
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

/**
 * Full-width services mega-menu — rendered as a sibling of the header bar
 * (not inside the narrow trigger button wrapper) so it spans the full
 * container width and stays centered regardless of trigger position.
 */
export function ServicesMegaMenu({
  isOpen,
  onClose,
  onEnter,
  onLeave,
}: {
  isOpen: boolean;
  onClose: () => void;
  onEnter: () => void;
  onLeave: () => void;
}) {
  const { t } = useI18n();
  const getService = (slug: string) => SERVICE_DETAILS.find((s) => s.slug === slug);

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="fixed inset-0 z-40 hidden lg:block"
          onClick={onClose}
          aria-hidden={!isOpen}
        >
          {/* backdrop to dim page behind */}
          <div className="absolute inset-0 bg-navy/20 backdrop-blur-[2px]" />

          {/* full-width dropdown panel, centered to viewport */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            role="menu"
            aria-label="Services menu"
            onClick={(e) => e.stopPropagation()}
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
            className="absolute inset-x-0 top-0 mx-auto w-full max-w-7xl px-5 pt-[var(--header-h)] sm:px-8 lg:px-10"
            style={{ ["--header-h" as string]: "96px" }}
          >
            <div className="overflow-hidden rounded-b-3xl border border-navy/5 border-t-0 bg-white shadow-[0_30px_80px_-30px_rgba(13,22,66,0.4)]">
              {/* top accent bar */}
              <div className="h-1 w-full bg-gradient-to-r from-[#1A237E] via-[#C62828] to-[#D4AF37]" />

              <div className="grid grid-cols-[1fr_1fr_1fr_1.05fr]">
                {/* ===== Category columns ===== */}
                {CATEGORIES.map((cat, ci) => (
                  <div
                    key={cat.key}
                    className={cn("p-6", ci > 0 && "border-l border-navy/5")}
                  >
                    <p className="mb-4 flex items-center gap-2 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[#9B7B0E]">
                      <span className="size-1.5 rounded-full bg-gold" />
                      {t(cat.labelKey)}
                    </p>
                    <ul className="flex flex-col gap-1">
                      {cat.slugs.map((slug) => {
                        const svc = getService(slug);
                        if (!svc) return null;
                        const Icon = ICONS[svc.icon] ?? Sparkles;
                        const name = t(SERVICE_NAME_KEY[slug] ?? "services.deep");
                        const tagline = t(SERVICE_TAGLINE_KEY[slug] ?? "serviceTagline.deep");
                        return (
                          <li key={slug}>
                            <Link
                              href={`/services/${slug}`}
                              onClick={onClose}
                              className="group flex items-start gap-3 rounded-2xl p-2.5 transition-all hover:bg-crimson-soft/30"
                            >
                              <span
                                className={cn(
                                  "grid size-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br text-white shadow-sm transition-transform group-hover:scale-110",
                                  ACCENT_GRAD[svc.accent]
                                )}
                              >
                                <Icon className="size-4.5" />
                              </span>
                              <div className="min-w-0 flex-1">
                                <p className="flex items-center gap-1 text-sm font-bold leading-tight text-navy transition-colors group-hover:text-crimson">
                                  {name}
                                  {svc.popular ? (
                                    <span className="ml-0.5 rounded-full bg-gold/20 px-1.5 py-0.5 text-[0.5rem] font-bold uppercase tracking-wider text-[#9B7B0E]">
                                      ★
                                    </span>
                                  ) : null}
                                </p>
                                <p className="mt-0.5 line-clamp-2 text-[0.7rem] leading-snug text-muted-foreground">
                                  {tagline}
                                </p>
                              </div>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}

                {/* ===== Featured offer column ===== */}
                <div className="relative overflow-hidden bg-gradient-to-br from-[#1A237E] via-[#15195F] to-[#0D1642] p-6 text-white">
                  <div className="pointer-events-none absolute -right-8 -top-8 size-32 rounded-full bg-gold/20 blur-2xl" />
                  <div className="pointer-events-none absolute -bottom-8 -left-8 size-32 rounded-full bg-crimson/15 blur-2xl" />
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

                  <div className="relative">
                    <p className="flex items-center gap-1.5 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-gold">
                      <Sparkles className="size-3" />
                      {t("nav.featuredOffer")}
                    </p>

                    <div className="relative mt-3 overflow-hidden rounded-2xl ring-1 ring-white/10">
                      <div className="relative aspect-[16/10] w-full">
                        <Image
                          src={assetPath("/images/service-hourly.png")}
                          alt={t("nav.featuredHourlyTitle")}
                          fill
                          sizes="260px"
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                      </div>
                      <div className="absolute bottom-2 left-3">
                        <p className="font-heading text-lg font-extrabold text-white">
                          $50<span className="text-sm font-semibold text-gold">/hr</span>
                        </p>
                      </div>
                    </div>

                    <h4 className="mt-3 font-heading text-base font-bold text-white">
                      {t("nav.featuredHourlyTitle")}
                    </h4>
                    <p className="mt-1 text-xs leading-relaxed text-white/70">
                      {t("nav.featuredHourlyDesc")}
                    </p>

                    <Link
                      href="/services/hourly"
                      onClick={onClose}
                      className="mt-4 inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-gradient-to-br from-[#F5C518] to-[#D4AF37] px-4 py-2.5 text-sm font-bold text-[#0D1642] shadow-md transition-transform hover:-translate-y-0.5"
                    >
                      {t("nav.featuredHourlyCta")}
                      <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* ===== Bottom bar ===== */}
              <div className="flex items-center justify-between gap-3 border-t border-navy/5 bg-gold-soft/30 px-6 py-3.5">
                <p className="text-xs font-medium text-muted-foreground">
                  {t("nav.dropdownSub")}
                </p>
                <Link
                  href="/#services"
                  onClick={onClose}
                  className="group inline-flex items-center gap-1.5 text-sm font-bold text-crimson transition-colors hover:text-crimson-dark"
                >
                  {t("nav.viewAllServices")}
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

/* ===== Trigger button ===== */
export function ServicesNavTrigger({
  isActive,
  isOpen,
  onClick,
  label,
}: {
  isActive: boolean;
  isOpen: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={isOpen}
      aria-haspopup="menu"
      className={cn(
        "relative flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold transition-colors",
        isActive || isOpen ? "text-crimson" : "text-navy/70 hover:text-navy"
      )}
    >
      {label}
      <ChevronDown
        className={cn(
          "size-3.5 transition-transform duration-300",
          isOpen ? "rotate-180" : ""
        )}
      />
      {isActive ? (
        <motion.span
          layoutId="nav-active"
          className="absolute inset-0 -z-10 rounded-full bg-crimson-soft"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      ) : null}
    </button>
  );
}
