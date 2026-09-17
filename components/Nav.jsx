"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

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

const Nav = () => {
  const pathname = usePathname();
  const { t } = useLanguage();

  return (
    <nav className="flex items-center gap-8">
      {links.map((link, index) => {
        const isActive = link.path === pathname;
        return (
          <Link
            href={link.path}
            key={index}
            className={`border-b-2 ${
              isActive ? "text-accent border-accent" : "border-transparent text-white"
            } capitalize font-medium hover:text-accent transition-all pb-1`}
          >
            {t(`common.nav.${link.name}`, link.name)}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
