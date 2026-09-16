"use client";

import { VscVscodeInsiders } from "react-icons/vsc";
import {
  SiSqlite,
  SiFastapi,
  SiDjango,
  SiDocker,
  SiTelegram,
  SiPython,
  SiPostgresql,
} from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const skillIcons = [
  {
    icon: <SiPython />,
    name: "Python",
    nameFa: "پایتون (Python)",
  },
  {
    icon: <VscVscodeInsiders />,
    name: "VsCode",
    nameFa: "وی‌اس کد (VsCode)",
  },
  {
    icon: <SiSqlite />,
    name: "SQLite",
    nameFa: "اس‌کیوال لایت (SQLite)",
  },
  {
    icon: <SiPostgresql />,
    name: "PostgreSQL",
    nameFa: "پستگرس‌کیوال (PostgreSQL)",
  },
  {
    icon: <SiDocker />,
    name: "Docker",
    nameFa: "داکر (Docker)",
  },
  {
    icon: <SiFastapi />,
    name: "FastAPI",
    nameFa: "فست‌پی‌آی (FastAPI)",
  },
  {
    icon: <SiDjango />,
    name: "Django",
    nameFa: "جنگو (Django)",
  },
  {
    icon: <SiTelegram />,
    name: "Telegram Bots",
    nameFa: "ربات‌های تلگرام (Telegram Bots)",
  },
];

const Resume = () => {
  const { t, locale, messages, toPersianDigits } = useLanguage();
  const resume = messages?.resume || {};

  const currentYear = new Date().getFullYear();
  const calculatedAge = currentYear - 2006;
  const ageDisplay = locale === "fa" ? toPersianDigits(calculatedAge) : calculatedAge;

  const aboutInfo = [
    {
      field: resume?.about?.fields?.name || "Name:",
      fieldValue: resume?.about?.values?.name || "Reza Mohamadnia",
      isLTR: false,
    },
    {
      field: resume?.about?.fields?.phone || "Phone:",
      fieldValue: "(+98) 916 628 0889",
      isLTR: true,
    },
    {
      field: resume?.about?.fields?.experience || "Experience:",
      fieldValue: resume?.about?.values?.experience || "+2 Years",
      isLTR: false,
    },
    {
      field: resume?.about?.fields?.instagram || "Instagram:",
      fieldValue: "ItsReZNuM",
      isLTR: true,
    },
    {
      field: resume?.about?.fields?.nationality || "Nationality:",
      fieldValue: resume?.about?.values?.nationality || "Iranian",
      isLTR: false,
    },
    {
      field: resume?.about?.fields?.email || "Email:",
      fieldValue: "rmohamadnia85@gmail.com",
      isLTR: true,
    },
    {
      field: resume?.about?.fields?.languages || "Languages:",
      fieldValue: resume?.about?.values?.languages || "Persian, English",
      isLTR: false,
    },
    {
      field: resume?.about?.fields?.age || "Age:",
      fieldValue: ageDisplay,
      isLTR: false,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          {/* Tab Navigation */}
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">
              {t("resume.tabs.experience", "Experience")}
            </TabsTrigger>
            <TabsTrigger value="education">
              {t("resume.tabs.education", "Education")}
            </TabsTrigger>
            <TabsTrigger value="skills">
              {t("resume.tabs.skills", "Skills")}
            </TabsTrigger>
            <TabsTrigger value="about">
              {t("resume.tabs.about", "About Me")}
            </TabsTrigger>
          </TabsList>

          {/* Content Area */}
          <div className="min-h-[70vh] w-full">
            {/* Experience Tab */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-start">
                <h3 className="text-4xl font-bold">{resume?.experience?.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 leading-relaxed">
                  {resume?.experience?.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {resume?.experience?.items?.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#2a2a2e] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] text-center lg:text-start font-semibold">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education Tab */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-start">
                <h3 className="text-4xl font-bold">{resume?.education?.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 leading-relaxed">
                  {resume?.education?.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {resume?.education?.items?.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#2a2a2e] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] text-center lg:text-start font-semibold">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills Tab */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-start">
                  <h3 className="text-4xl font-bold">{resume?.skills?.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 mb-4 leading-relaxed">
                    {resume?.skills?.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-7">
                  {skillIcons.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#2a2a2e] rounded-xl flex justify-center items-center group cursor-pointer">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent className="shadow-md rounded-md bg-[#1a1f25] border border-white/10 text-white">
                              <p className="capitalize">
                                {locale === "fa" ? skill.nameFa : skill.name}
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* About Me Tab */}
            <TabsContent value="about" className="w-full text-center xl:text-start">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{resume?.about?.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 leading-relaxed">
                  {resume?.about?.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {aboutInfo.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-lg text-white/80 font-medium">
                          {item.field}
                        </span>
                        <span
                          className={`text-white/60 ${
                            item.isLTR ? "ltr-isolate" : ""
                          }`}
                          dir={item.isLTR ? "ltr" : undefined}
                        >
                          {item.fieldValue}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
