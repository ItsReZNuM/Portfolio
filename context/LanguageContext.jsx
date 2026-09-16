"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useCallback,
  useMemo,
  useSyncExternalStore,
} from "react";
import { DirectionProvider } from "@radix-ui/react-direction";

// Import translations
import enCommon from "@/locales/en/common.json";
import faCommon from "@/locales/fa/common.json";
import enHome from "@/locales/en/home.json";
import faHome from "@/locales/fa/home.json";
import enServices from "@/locales/en/services.json";
import faServices from "@/locales/fa/services.json";
import enResume from "@/locales/en/resume.json";
import faResume from "@/locales/fa/resume.json";
import enWork from "@/locales/en/work.json";
import faWork from "@/locales/fa/work.json";
import enContact from "@/locales/en/contact.json";
import faContact from "@/locales/fa/contact.json";

const translations = {
  en: {
    common: enCommon,
    home: enHome,
    services: enServices,
    resume: enResume,
    work: enWork,
    contact: enContact,
  },
  fa: {
    common: faCommon,
    home: faHome,
    services: faServices,
    resume: faResume,
    work: faWork,
    contact: faContact,
  },
};

const LanguageContext = createContext(null);

export const toPersianDigits = (num) => {
  if (num === null || num === undefined) return "";
  const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return num.toString().replace(/\d/g, (d) => farsiDigits[Number(d)]);
};

// External store subscription for localStorage synchronization
function subscribe(callback) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("storage", callback);
  window.addEventListener("portfolio_lang_change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("portfolio_lang_change", callback);
  };
}

function getSnapshot() {
  if (typeof window === "undefined") return "en";
  try {
    const saved = localStorage.getItem("portfolio_lang");
    return saved === "fa" ? "fa" : "en";
  } catch {
    return "en";
  }
}

function getServerSnapshot() {
  return "en";
}

export function LanguageProvider({ children }) {
  const locale = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const dir = locale === "fa" ? "rtl" : "ltr";
  const isRTL = locale === "fa";

  // Synchronize document attributes and title whenever locale changes
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
    document.title = locale === "fa" ? "رضا محمدنیا" : "Reza Mohamadnia";
  }, [locale, dir]);

  const setLocale = useCallback((newLocale) => {
    if (newLocale !== "en" && newLocale !== "fa") return;
    try {
      localStorage.setItem("portfolio_lang", newLocale);
      document.documentElement.lang = newLocale;
      document.documentElement.dir = newLocale === "fa" ? "rtl" : "ltr";
      document.title = newLocale === "fa" ? "رضا محمدنیا" : "Reza Mohamadnia";
      window.dispatchEvent(new Event("portfolio_lang_change"));
    } catch {
      // Handle storage exception
    }
  }, []);

  const toggleLocale = useCallback(() => {
    setLocale(locale === "en" ? "fa" : "en");
  }, [locale, setLocale]);

  // Nested translation resolver
  const t = useCallback(
    (keyPath, fallback = "") => {
      if (!keyPath) return fallback;
      const keys = keyPath.split(".");
      let current = translations[locale];

      for (const k of keys) {
        if (current === undefined || current === null) {
          break;
        }
        current = current[k];
      }

      if (current !== undefined && current !== null) {
        return current;
      }

      // Try fallback to 'en' if missing in current locale
      let enCurrent = translations.en;
      for (const k of keys) {
        if (enCurrent === undefined || enCurrent === null) {
          break;
        }
        enCurrent = enCurrent[k];
      }

      return enCurrent !== undefined && enCurrent !== null
        ? enCurrent
        : fallback || keyPath;
    },
    [locale]
  );

  const value = useMemo(
    () => ({
      locale,
      dir,
      isRTL,
      setLocale,
      toggleLocale,
      t,
      toPersianDigits,
      messages: translations[locale],
    }),
    [locale, dir, isRTL, setLocale, toggleLocale, t]
  );

  return (
    <LanguageContext.Provider value={value}>
      <DirectionProvider dir={dir}>
        {children}
      </DirectionProvider>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
