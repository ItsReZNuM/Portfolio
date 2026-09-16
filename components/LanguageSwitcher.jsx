"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

export default function LanguageSwitcher({ className }) {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div
      className={cn(
        "inline-flex items-center bg-[#27272c] border border-white/10 rounded-full p-1 shadow-sm transition-all",
        className
      )}
      role="group"
      aria-label={t("common.switcher.ariaLabel", "Switch language")}
    >
      <button
        type="button"
        onClick={() => setLocale("en")}
        className={cn(
          "px-3 py-1 text-xs font-semibold rounded-full transition-all duration-300 select-none",
          locale === "en"
            ? "bg-accent text-primary font-bold shadow-md"
            : "text-white/70 hover:text-white hover:bg-white/5"
        )}
        aria-pressed={locale === "en"}
        aria-label="Switch to English"
      >
        EN
      </button>

      <button
        type="button"
        onClick={() => setLocale("fa")}
        className={cn(
          "px-3 py-1 text-xs font-semibold rounded-full transition-all duration-300 select-none",
          locale === "fa"
            ? "bg-accent text-primary font-bold shadow-md"
            : "text-white/70 hover:text-white hover:bg-white/5"
        )}
        aria-pressed={locale === "fa"}
        aria-label="تغییر به زبان فارسی"
      >
        فا
      </button>
    </div>
  );
}
