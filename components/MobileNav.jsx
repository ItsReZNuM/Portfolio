"use client";

import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  const { t, isRTL } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger
        className="flex justify-center items-center p-2 rounded-md hover:bg-white/5 transition-colors cursor-pointer"
        aria-label="Toggle menu"
      >
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent
        side={isRTL ? "left" : "right"}
        className="flex flex-col justify-between py-12 px-8"
      >
        {/* Logo */}
        <div className="mt-16 text-center text-2xl">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <h1 className="text-4xl font-semibold">
              Reza<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            const isActive = link.path === pathname;
            return (
              <Link
                href={link.path}
                key={index}
                onClick={() => setIsOpen(false)}
                className={`${
                  isActive && "text-accent border-b-2 border-accent"
                } text-xl capitalize hover:text-accent transition-all pb-1`}
              >
                {t(`common.nav.${link.name}`, link.name)}
              </Link>
            );
          })}
        </nav>

        {/* Mobile drawer footer switcher - bottom position lifted up by several pixels */}
        <div className="flex justify-center items-center pb-14">
          <LanguageSwitcher />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
