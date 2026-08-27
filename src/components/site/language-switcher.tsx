"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Globe } from "lucide-react";
import { useI18n, LOCALES, type Locale } from "@/lib/i18n/context";
import { LOCALE_LABELS } from "@/lib/i18n/translations";
import { cn } from "@/lib/utils";

type Variant = "header" | "compact";

export function LanguageSwitcher({
  variant = "header",
  className,
}: {
  variant?: Variant;
  className?: string;
}) {
  const { locale, setLocale } = useI18n();
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const currentLabel = locale.toUpperCase();

  if (variant === "compact") {
    // simple inline toggle for tight spaces
    return (
      <div className={cn("flex items-center rounded-full border border-navy/10 bg-white p-0.5", className)}>
        {LOCALES.map((l) => (
          <button
            key={l}
            type="button"
            onClick={() => setLocale(l)}
            className={cn(
              "rounded-full px-3 py-1 text-xs font-bold uppercase transition-colors",
              locale === l
                ? "bg-gradient-to-br from-[#1A237E] to-[#0D1642] text-white"
                : "text-navy/60 hover:text-navy"
            )}
          >
            {l}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div ref={ref} className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label="Switch language"
        aria-expanded={open}
        className="group flex items-center gap-1.5 rounded-full border border-navy/10 bg-white/70 px-3 py-1.5 text-sm font-bold text-navy shadow-sm backdrop-blur transition-colors hover:border-crimson/40 hover:text-crimson"
      >
        <Globe className="size-4" />
        <span>{currentLabel}</span>
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.18 }}
            className="absolute right-0 top-full z-50 mt-2 w-44 overflow-hidden rounded-2xl border border-navy/8 bg-white p-1.5 shadow-xl"
          >
            {LOCALES.map((l: Locale) => (
              <button
                key={l}
                type="button"
                onClick={() => {
                  setLocale(l);
                  setOpen(false);
                }}
                className={cn(
                  "flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm font-semibold transition-colors",
                  locale === l
                    ? "bg-crimson-soft text-crimson"
                    : "text-navy hover:bg-muted"
                )}
              >
                <span>{LOCALE_LABELS[l]}</span>
                {locale === l ? <Check className="size-4" /> : null}
              </button>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
