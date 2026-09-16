"use client";

import CountUp from "react-countup";
import { useLanguage } from "@/context/LanguageContext";

const Stats = () => {
  const { t, locale, toPersianDigits } = useLanguage();

  const stats = [
    {
      num: 2,
      text: t("home.stats.experience", "Years of Experience"),
    },
    {
      num: 10,
      text: t("home.stats.projects", "Projects Completed"),
    },
    {
      num: 3,
      text: t("home.stats.technologies", "Technologies Learned"),
    },
    {
      num: 200,
      text: t("home.stats.commits", "Code Commits"),
    },
  ];

  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start min-w-[200px]"
                key={index}
              >
                <CountUp
                  key={`${locale}-${item.num}`}
                  end={item.num}
                  duration={3}
                  delay={1.5}
                  formattingFn={(value) =>
                    locale === "fa" ? toPersianDigits(value) : value
                  }
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p className="max-w-[150px] leading-snug text-white/80 text-sm xl:text-base">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
