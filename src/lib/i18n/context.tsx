"use client";

import * as React from "react";
import {
  translations,
  type Locale,
  LOCALES,
} from "./translations";

type I18nContextValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string) => string;
  /** get a comma-separated list key as an array */
  list: (key: string) => string[];
};

const I18nContext = React.createContext<I18nContextValue | null>(null);

const STORAGE_KEY = "va-locale";
const COOKIE_KEY = "va-locale";

function readCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

function writeCookie(name: string, value: string, days: number = 365) {
  if (typeof document === "undefined") return;
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
}

function detectInitialLocale(): Locale {
  // 1. cookie
  const cookie = readCookie(COOKIE_KEY);
  if (cookie && LOCALES.includes(cookie as Locale)) return cookie as Locale;
  // 2. localStorage
  if (typeof window !== "undefined") {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored && LOCALES.includes(stored as Locale)) return stored as Locale;
  }
  // 3. browser language
  if (typeof navigator !== "undefined") {
    const lang = navigator.language.toLowerCase();
    if (lang.startsWith("es")) return "es";
  }
  return "en";
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  // Start with "en" on SSR, then sync on mount to avoid hydration mismatch.
  const [locale, setLocaleState] = React.useState<Locale>("en");

  React.useEffect(() => {
    const detected = detectInitialLocale();
    setLocaleState(detected);
    document.documentElement.lang = detected;
  }, []);

  const setLocale = React.useCallback((l: Locale) => {
    setLocaleState(l);
    writeCookie(COOKIE_KEY, l);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, l);
      document.documentElement.lang = l;
    }
  }, []);

  const t = React.useCallback(
    (key: string) => {
      return translations[locale][key] ?? translations.en[key] ?? key;
    },
    [locale]
  );

  const list = React.useCallback(
    (key: string) => {
      const raw = translations[locale][key] ?? translations.en[key] ?? "";
      return raw.split(",").map((s) => s.trim()).filter(Boolean);
    },
    [locale]
  );

  const value = React.useMemo(
    () => ({ locale, setLocale, t, list }),
    [locale, setLocale, t, list]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nContextValue {
  const ctx = React.useContext(I18nContext);
  if (!ctx) {
    // Fallback (e.g., if used outside provider during SSR) — return no-op defaults
    return {
      locale: "en",
      setLocale: () => {},
      t: (key: string) => translations.en[key] ?? key,
      list: (key: string) =>
        (translations.en[key] ?? "").split(",").map((s) => s.trim()).filter(Boolean),
    };
  }
  return ctx;
}

export { LOCALES };
export type { Locale };
