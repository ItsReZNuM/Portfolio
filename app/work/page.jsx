"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import { useLanguage } from "@/context/LanguageContext";

const Work = () => {
  const { messages, dir, locale, isRTL, t } = useLanguage();
  const projects = messages?.work?.projects || [];
  const [activeIndex, setActiveIndex] = useState(0);

  const currentProject = projects[activeIndex] || projects[0] || {};

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* Project Details */}
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* Outline Number */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {currentProject.num}
              </div>

              {/* Project Category & Title */}
              <div>
                <span className="text-sm font-semibold tracking-wider text-accent uppercase rtl:normal-case">
                  {currentProject.category}{" "}
                  {t("work.categorySuffix", "Project")}
                </span>
                <h2 className="text-[32px] xl:text-[42px] font-bold leading-tight text-white transition-all duration-500 mt-1">
                  {currentProject.title}
                </h2>
              </div>

              {/* Project Description */}
              <p className="text-white/60 leading-relaxed text-start">
                {currentProject.description}
              </p>

              {/* Stack */}
              <ul className="flex flex-wrap gap-2 xl:gap-4 ltr-isolate" dir="ltr">
                {currentProject.stack?.map((item, index) => {
                  return (
                    <li key={index} className="text-lg text-accent">
                      {item.name}
                      {index !== currentProject.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>

              {/* Border */}
              <div className="border border-white/20"></div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4">
                {/* Live Project Button */}
                {currentProject.live && (
                  <Link
                    href={currentProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t("work.tooltips.live", "Live Project")}
                  >
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/10 backdrop-blur-sm flex justify-center items-center group transition-all duration-300 hover:bg-accent/10 hover:shadow-xl hover:shadow-accent/30 cursor-pointer">
                          <BsArrowUpRight
                            className={`text-white text-3xl transition-transform duration-500 group-hover:scale-110 ${
                              isRTL
                                ? "group-hover:-rotate-45 -scale-x-100"
                                : "group-hover:rotate-45"
                            }`}
                          />
                        </TooltipTrigger>
                        <TooltipContent
                          side="top"
                          className="bg-[#1a1f25] border border-white/10 text-xs px-3 py-1.5 rounded-md text-white shadow-md"
                        >
                          <p>{t("work.tooltips.live", "Live Project")}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}

                {/* GitHub Project Button */}
                {currentProject.github && (
                  <Link
                    href={currentProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t("work.tooltips.github", "Github Repository")}
                  >
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/10 backdrop-blur-sm flex justify-center items-center group transition-all duration-300 hover:bg-accent/10 hover:shadow-xl hover:shadow-accent/30 cursor-pointer">
                          <BsGithub className="text-white text-3xl transition-transform duration-500 group-hover:scale-110" />
                        </TooltipTrigger>
                        <TooltipContent
                          side="top"
                          className="bg-[#1a1f25] border border-white/10 text-xs px-3 py-1.5 rounded-md text-white shadow-md"
                        >
                          <p>
                            {t("work.tooltips.github", "Github Repository")}
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* Swiper Slider */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              key={`${locale}-${dir}`}
              dir={dir}
              spaceBetween={30}
              slidesPerView={1}
              initialSlide={activeIndex}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((item, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-[#27272c]/40 rounded-xl overflow-hidden border border-white/5">
                      {/* Overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/20 z-10"></div>
                      {/* Image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={item.image}
                          fill
                          className="object-cover"
                          alt={item.title || ""}
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}

              {/* Slider Buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute end-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all rounded-sm cursor-pointer shadow-md"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
