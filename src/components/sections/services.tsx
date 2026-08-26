"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  CalendarClock,
  HardHat,
  Building2,
  Leaf,
  Clock,
  Wind,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading, SectionShell } from "@/components/site/section-heading";
import { Stagger, StaggerItem } from "@/components/site/reveal";
import { useI18n } from "@/lib/i18n/context";
import { SERVICES, type Service } from "@/lib/site";

const ICONS: Record<string, LucideIcon> = {
  Sparkles,
  CalendarClock,
  HardHat,
  Building2,
  Leaf,
  Clock,
  Wind,
};

const CARD_ACCENTS = [
  { badge: "from-[#E53935] to-[#C62828]", text: "text-[#C62828]" },
  { badge: "from-[#1A237E] to-[#0D1642]", text: "text-[#1A237E]" },
  { badge: "from-[#6A1B9A] to-[#4A148C]", text: "text-[#6A1B9A]" },
  { badge: "from-[#D4AF37] to-[#9B7B0E]", text: "text-[#9B7B0E]" },
];

// Map service id → translation key for name & description
const SERVICE_I18N: Record<string, { nameKey: string; id: string }> = {
  "deep-cleaning": { nameKey: "services.deep", id: "deep-cleaning" },
  "regular-cleaning": { nameKey: "services.regular", id: "regular-cleaning" },
  "light-cleaning": { nameKey: "services.light", id: "light-cleaning" },
  "post-construction": { nameKey: "services.postConstruction", id: "post-construction" },
  commercial: { nameKey: "services.commercial", id: "commercial" },
  "eco-friendly": { nameKey: "services.eco", id: "eco-friendly" },
  hourly: { nameKey: "services.hourly", id: "hourly" },
  "weekly-biweekly": { nameKey: "services.weekly", id: "weekly-biweekly" },
};

const LABELS: Record<string, { en: string; es: string }> = {
  "deep-cleaning": { en: "Most Popular", es: "Más Popular" },
  "regular-cleaning": { en: "Recurring", es: "Recurrente" },
  "light-cleaning": { en: "Quick Refresh", es: "Rápido" },
  "post-construction": { en: "Renovation", es: "Obra" },
  commercial: { en: "Business", es: "Negocio" },
  "eco-friendly": { en: "Green Option", es: "Ecológico" },
  hourly: { en: "From $50/hr", es: "Desde $50/h" },
  "weekly-biweekly": { en: "Recurring Plans", es: "Planes" },
};

export function Services() {
  const { t, locale } = useI18n();

  return (
    <SectionShell
      id="services"
      className="bg-gradient-to-b from-white to-gold-soft/30"
    >
      <SectionHeading
        eyebrow={t("services.eyebrow")}
        title={
          <>
            {t("services.title1")}
            <span className="bg-gradient-to-r from-[#C62828] to-[#6A1B9A] bg-clip-text text-transparent">
              {t("services.title2")}
            </span>
          </>
        }
        description={t("services.description")}
      />

      <Stagger
        className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"
        stagger={0.06}
      >
        {SERVICES.map((service, i) => (
          <StaggerItem key={service.id}>
            <ServiceCard service={service} index={i} locale={locale} t={t} />
          </StaggerItem>
        ))}
      </Stagger>

      <Stagger className="mt-12 flex flex-col items-center gap-4 text-center">
        <StaggerItem>
          <p className="text-sm text-muted-foreground">
            {t("services.notSure")}{" "}
            <Link
              href="/book"
              className="font-bold text-crimson underline-offset-4 hover:underline"
            >
              {t("services.getRec")}
            </Link>{" "}
            {t("services.notSureSuffix")}
          </p>
        </StaggerItem>
      </Stagger>
    </SectionShell>
  );
}

type TFunc = (key: string) => string;

function ServiceCard({
  service,
  index,
  locale,
  t,
}: {
  service: Service;
  index: number;
  locale: "en" | "es";
  t: TFunc;
}) {
  const Icon = ICONS[service.icon] ?? Sparkles;
  const accent = CARD_ACCENTS[index % CARD_ACCENTS.length];
  const label = LABELS[service.id] ? LABELS[service.id][locale] : "On Demand";
  const name = SERVICE_I18N[service.id] ? t(SERVICE_I18N[service.id].nameKey) : service.name;

  return (
    <Link
      href={service.href}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-navy/5 bg-white shadow-[0_10px_40px_-24px_rgba(13,22,66,0.3)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_28px_60px_-30px_rgba(26,35,126,0.4)]"
    >
      <div className="relative aspect-[16/12] w-full overflow-hidden">
        <Image
          src={service.image}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-navy/5 to-transparent" />
        <span
          className={`absolute left-3 top-3 grid size-11 place-items-center rounded-2xl bg-gradient-to-br text-white shadow-lg transition-all duration-300 group-hover:scale-110 ${accent.badge}`}
        >
          <Icon className="size-5" />
        </span>
        <span className="absolute bottom-3 left-3 rounded-full bg-white/95 px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-wider text-navy shadow-sm">
          {label}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-heading text-base font-bold leading-snug text-navy transition-colors group-hover:text-crimson">
          {name}
        </h3>
        <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
          {service.description}
        </p>
        <div className="mt-4 flex items-center gap-1.5 border-t border-navy/5 pt-3.5">
          <span className={`text-sm font-bold ${accent.text}`}>{t("services.viewDetails")}</span>
          <ArrowRight className={`size-4 transition-transform duration-300 group-hover:translate-x-1 ${accent.text}`} />
        </div>
      </div>

      <span className={`absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r transition-transform duration-500 group-hover:scale-x-100 ${accent.badge}`} />
    </Link>
  );
}
