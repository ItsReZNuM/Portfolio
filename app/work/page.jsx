"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGit, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import Link from "next/link";
import Image from "next/image";
import { TooltipProvider } from "@/components/ui/tooltip";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "backend",
    title: "Support Chat System",
    description:
      "This project has been made by me and another frontend developer for a company. The main purpose of this project is to provide a support chat system for the company's customers. The system allows customers to chat with support agents in real-time and get their issues resolved quickly.",
    stack: [
      { name: "FastAPI" },
      { name: "Python" },
      { name: "PostgreSQL" },
      { name: "Redis" },
      { name: "SocketIO" },
    ],
    image: "/assets/chat.png",
    live: "www.google.com",
    github: "https://github.com/SupportChatSystem",
  },
  {
    num: "02",
    category: "bots",
    title: "Project 2",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem non velit iusto veniam quam magni!",
    stack: [
      { name: "PyTelegramBotAPI" },
      { name: "Python" },
      { name: "Telegram" },
    ],
    image: "/assets/works/unit.png",
    live: "https://github.com/itsreznum",
    github: "https://github.com/itsreznum",
  },
];

const Work = () => {
  const [project, setproject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // Update project state based on current slide index
    setproject(projects[currentIndex]);
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
        <div className="flex flex-col xl:flex-row xl:gap-[30px] ">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%] ">
              {/* Outline Number */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* Project Category */}
              <h2 className="capitalize text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                {project.category} Project
              </h2>
              {/* Project Description */}
              <p className="text-white/60 ">{project.description}</p>
              {/* Stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent ">
                      {item.name}
                      {/* Remove The Last Comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* Border */}
              <div className="border border-white/20 "></div>
              {/* Buttons */}
              <div className="flex items-center gap-4 ">
                {/* Live Project Button */}
                {/* <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/10 backdrop-blur-sm flex justify-center items-center group transition-all duration-300 hover:bg-accent/10 hover:shadow-xl hover:shadow-accent/30">
                        <BsArrowUpRight className="text-white text-3xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-45" />
                      </TooltipTrigger>

                      <TooltipContent
                        side="top"
                        className="bg-black/70 text-xs px-3 py-1 rounded-md backdrop-blur-sm"
                      >
                        <p className="text-white">Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link> */}
                {/* GitHub Project Button */}
                <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/10 backdrop-blur-sm flex justify-center items-center group transition-all duration-300 hover:bg-accent/10 hover:shadow-xl hover:shadow-accent/30 ">
                        <BsGithub className="text-white text-3xl transition-transform duration-500 group-hover:scale-110 " />
                      </TooltipTrigger>

                      <TooltipContent
                        side="top"
                        className="bg-black/70 text-xs px-3 py-1 rounded-md backdrop-blur-sm"
                      >
                        <p className="text-white">Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20  ">
                      {/* Overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* Image */}
                      <div className="relative w-full h-full ">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* Slider Buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all "
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
