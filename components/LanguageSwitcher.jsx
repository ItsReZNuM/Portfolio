"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

// Crisp SVG Vector Flag for United Kingdom
export function UKFlag({ className = "w-5 h-3.5" }) {
  return (
    <svg
      viewBox="0 0 60 30"
      className={cn("rounded-[2px] shrink-0 shadow-xs border border-white/10", className)}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <clipPath id="uk-clip">
        <path d="M0,0 v30 h60 v-30 z" />
      </clipPath>
      <clipPath id="uk-t">
        <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
      </clipPath>
      <g clipPath="url(#uk-clip)">
        <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
        <path
          d="M0,0 L60,30 M60,0 L0,30"
          clipPath="url(#uk-t)"
          stroke="#C8102E"
          strokeWidth="4"
        />
        <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
      </g>
    </svg>
  );
}

// Crisp SVG Vector Flag for Iran
export function IranFlag({ className = "w-5 h-3.5" }) {
  return (
    <svg
      viewBox="0 0 63 36"
      className={cn("rounded-[2px] shrink-0 shadow-xs border border-white/10", className)}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="63" height="12" fill="#239f40" />
      <rect y="12" width="63" height="12" fill="#ffffff" />
      <rect y="24" width="63" height="12" fill="#da0000" />
      {/* Central Emblem */}
      <g fill="#da0000" transform="translate(31.5, 18) scale(0.65)">
        <path d="M0,-8.5 C-1.5,-4 -2.2,-1 -2.2,2 C-2.2,4.5 -1.2,6.5 0,7.5 C1.2,6.5 2.2,4.5 2.2,2 C2.2,-1 1.5,-4 0,-8.5 Z" />
        <path d="M-3.5,-4 C-5.5,-1 -6.5,2 -6.5,4.8 C-6.5,7.8 -4.5,10.2 -1.5,10.8 C-1.5,9.5 -2.2,8 -2.2,6.5 C-2.2,4.5 -1.5,2.5 0,1 C-1.8,2.2 -3.2,4.2 -3.2,6.5 C-3.2,8.2 -2.2,9.8 -0.8,10.5 C-3.5,9.5 -5,7.5 -5,5 C-5,2.8 -4.2,0.5 -2.5,-2.5 Z" />
        <path d="M3.5,-4 C5.5,-1 6.5,2 6.5,4.8 C6.5,7.8 4.5,10.2 1.5,10.8 C1.5,9.5 2.2,8 2.2,6.5 C2.2,4.5 1.5,2.5 0,1 C1.8,2.2 3.2,4.2 3.2,6.5 C3.2,8.2 2.2,9.8 0.8,10.5 C3.5,9.5 5,7.5 5,5 C5,2.8 4.2,0.5 2.5,-2.5 Z" />
        <path d="M-1,-9.5 h2 v2 h-2 Z" />
      </g>
    </svg>
  );
}

export default function LanguageSwitcher({ className }) {
  const { locale, toggleLocale, t } = useLanguage();

  const isFarsi = locale === "fa";

  return (
    <button
      type="button"
      onClick={toggleLocale}
      aria-label={t("common.switcher.ariaLabel", "Toggle language")}
      className={cn(
        "inline-flex items-center justify-center gap-3 xl:gap-3.5 min-w-[96px] xl:min-w-[104px] px-3.5 py-1.5 rounded-full bg-[#27272c] hover:bg-[#2e2e35] border border-white/10 hover:border-accent/40 text-white text-sm font-medium transition-all duration-300 shadow-sm cursor-pointer select-none active:scale-95",
        className
      )}
    >
      <span className="flex items-center">
        {isFarsi ? <IranFlag className="w-5 h-3.5" /> : <UKFlag className="w-5 h-3.5" />}
      </span>
      <span className="leading-none text-xs xl:text-sm font-medium">
        {isFarsi ? "فارسی" : "English"}
      </span>
    </button>
  );
}
