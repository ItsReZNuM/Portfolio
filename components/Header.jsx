"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";

const Header = () => {
  const { t } = useLanguage();

  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Reza<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* Desktop Nav, Language Switcher & Hire Me Button */}
        <div className="hidden xl:flex items-center gap-6">
          <Nav />
          <LanguageSwitcher />
          <Link href="/contact">
            <Button>{t("common.actions.hireMe", "Hire Me")}</Button>
          </Link>
        </div>

        {/* Mobile Header: Language Switcher & Menu */}
        <div className="xl:hidden flex items-center gap-4">
          <LanguageSwitcher />
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;