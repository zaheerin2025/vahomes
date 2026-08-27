"use client";

import { useI18n } from "@/lib/i18n/context";
import { getServiceBySlug } from "@/lib/services";
import { Reveal } from "@/components/site/reveal";

export function BookHero({ preselectedService }: { preselectedService?: string }) {
  const { t } = useI18n();
  const serviceDetail = preselectedService ? getServiceBySlug(preselectedService) : undefined;
  const serviceName = serviceDetail
    ? t(`services.${SERVICE_KEY_MAP[serviceDetail.slug] ?? "deep"}`)
    : undefined;

  return (
    <div className="mx-auto mb-10 w-full max-w-4xl px-5 text-center sm:px-8 lg:px-10">
      <Reveal>
        <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold-soft px-4 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[#9B7B0E]">
          <span className="size-1.5 rounded-full bg-gold" />
          {t("book.eyebrow")}
        </span>
      </Reveal>
      <Reveal delay={0.05}>
        <h1 className="mx-auto mt-5 max-w-2xl font-heading text-balance text-4xl font-extrabold leading-[1.1] tracking-tight text-navy sm:text-5xl">
          {serviceName ? (
            <>
              {t("book.title1")}
              <span className="bg-gradient-to-r from-[#C62828] to-[#6A1B9A] bg-clip-text text-transparent">
                {serviceName}
              </span>
            </>
          ) : (
            <>
              {t("book.title1")}
              <span className="bg-gradient-to-r from-[#C62828] to-[#6A1B9A] bg-clip-text text-transparent">
                {t("book.title2")}
              </span>
            </>
          )}
        </h1>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          {t("book.description")}
        </p>
      </Reveal>
    </div>
  );
}

const SERVICE_KEY_MAP: Record<string, string> = {
  "regular-cleaning": "regular",
  "light-cleaning": "light",
  "deep-cleaning": "deep",
  "weekly-biweekly": "weekly",
  "post-construction": "postConstruction",
  commercial: "commercial",
  "eco-friendly": "eco",
  hourly: "hourly",
};
