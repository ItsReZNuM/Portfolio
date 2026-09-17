"use client";

import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";
import { ChevronDown, Check } from "lucide-react";

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

export default function LanguageSwitcher({ className, dropUp = false }) {
  const { locale, setLocale, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const selectLanguage = (newLocale) => {
    setLocale(newLocale, true);
    setIsOpen(false);
  };

  const languages = [
    {
      code: "en",
      label: t("common.switcher.en", "English"),
      flag: <UKFlag className="w-5 h-3.5" />,
    },
    {
      code: "fa",
      label: t("common.switcher.fa", "Persian"),
      flag: <IranFlag className="w-5 h-3.5" />,
    },
  ];

  const currentLanguage =
    locale === "fa"
      ? {
        label: t("common.switcher.fa", "فارسی"),
        flag: <IranFlag className="w-5 h-3.5" />,
      }
      : {
        label: t("common.switcher.en", "English"),
        flag: <UKFlag className="w-5 h-3.5" />,
      };

  return (
    <div className={cn("relative inline-block text-start", className)} ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={t("common.switcher.ariaLabel", "Select language")}
        className="inline-flex items-center justify-between w-[115px] px-3.5 py-1.5 rounded-full bg-[#27272c] hover:bg-[#2e2e35] border border-white/10 hover:border-accent/40 text-white text-sm font-medium transition-all duration-300 shadow-sm cursor-pointer select-none"
      >
        <span className="flex items-center">{currentLanguage.flag}</span>
        <span className="leading-none text-xs xl:text-sm">{currentLanguage.label}</span>
        <ChevronDown
          className={cn(
            "w-3.5 h-3.5 text-accent transition-transform duration-300",
            isOpen && "rotate-180"
          )}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          role="listbox"
          aria-label={t("common.switcher.ariaLabel", "Select language")}
          className={cn(
            "absolute end-0 z-50 min-w-[155px] p-1.5 rounded-xl bg-[#2a2a2e] border border-white/10 shadow-2xl backdrop-blur-md animate-in fade-in-0 zoom-in-95 duration-200",
            dropUp ? "bottom-full mb-2" : "top-full mt-2"
          )}
        >
          {languages.map((lang) => {
            const isSelected = locale === lang.code;
            return (
              <button
                key={lang.code}
                role="option"
                aria-selected={isSelected}
                type="button"
                onClick={() => selectLanguage(lang.code)}
                className={cn(
                  "w-full flex items-center justify-between gap-3 px-3 py-2 rounded-lg text-xs xl:text-sm transition-all duration-200 cursor-pointer select-none",
                  isSelected
                    ? "bg-accent/15 text-accent font-semibold"
                    : "text-white/80 hover:bg-white/5 hover:text-white"
                )}
              >
                <div className="flex items-center gap-2.5">
                  {lang.flag}
                  <span>{lang.label}</span>
                </div>
                {isSelected && <Check className="w-3.5 h-3.5 text-accent shrink-0" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
