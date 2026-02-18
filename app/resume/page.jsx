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

// about data
const age = new Date().getFullYear() - 2006;
const about = {
  title: "About Me",
  description: "A Boy, Interested in Tech ...",
  info: [
    {
      field: "Name:",
      fieldValue: "Reza Mohamadnia",
    },
    {
      field: "Phone:",
      fieldValue: "(+98)916 628 0889",
    },
    {
      field: "Experience:",
      fieldValue: "+2 Years",
    },
    {
      field: "Instagram:",
      fieldValue: "ItsReZNuM",
    },
    {
      field: "Nationality:",
      fieldValue: "Iranian",
    },
    {
      field: "Email:",
      fieldValue: "rmohamadnia85@gmail.com",
    },
    {
      field: "Languages:",
      fieldValue: "Persian, English",
    },
    {
      field: "Age:",
      fieldValue: age,
    },
  ],
};

// Experience Data
const experience = {
  icon: "",
  title: "My Experience",
  description:
    "I started programming with Python in 2020, but I didn’t fully learn even the basics, so I stopped. In 2024, I started again, completed the basics and advanced Python courses, and then moved on to learning backend development.",
  items: [
    {
      company: "Havir Tech Inc.",
      position: "SQL Developer",
      duration: "2024 - 2025",
    },
    {
      company: "Phoenix Inc.",
      position: "Backend Developer",
      duration: "2025 - Present",
    },
  ],
};

// Education Data
const education = {
  icon: "",
  title: "My Experience",
  description:
    "Educated in Sampad High School and Now I'm Studying Computer Science in Lorestan University. ",
  items: [
    {
      institution: "Sampad High School",
      degree: "Diploma",
      duration: "2021 - 2024",
    },
    {
      institution: "Lorestan University",
      degree: "Bachelor",
      duration: "2024 - Present",
    },
    {
      institution: "MaktabKhooneh",
      degree: "Basic Python",
      duration: "2024 - 2025",
    },
    {
      institution: "MaktabKhooneh",
      degree: "Advanced Python",
      duration: "2024 - 2025",
    },
    {
      institution: "YouTube Online Course",
      degree: "FastAPI",
      duration: "2024 - 2025",
    },
  ],
};

// Skills Data
const skills = {
  title: "My Skills",
  description: "Here is a List of my skills that i've been working recently.",
  skilllist: [
    {
      icon: <SiPython />,
      name: "Python",
    },
    {
      icon: <VscVscodeInsiders />,
      name: "VsCode",
    },
    {
      icon: <SiSqlite />,
      name: "SQLite",
    },
    {
      icon: <SiPostgresql />,
      name: "PostgreSQL",
    },
    {
      icon: <SiDocker />,
      name: "Docker",
    },
    {
      icon: <SiFastapi />,
      name: "FastAPI",
    },
    {
      icon: <SiDjango />,
      name: "Django",
    },
    {
      icon: <SiTelegram />,
      name: "Telegram Bots",
    },
  ],
};

const Resume = () => {
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
          <TabsList className="flex flex-col  w-full max-w-[380px] mx-auto xl:mx-0 gap-6 ">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>
          {/* Content */}
          <div className="min-h-[70vh] w-full">
            {/* Experience */}
            <TabsContent value="experience" className="w-full ">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold ">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px] ">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] ">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#2a2a2e] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h[60px text-center lg:text-left]">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* Dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent "></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* Education */}
            <TabsContent value="education" className="w-full ">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold ">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px] ">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] ">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#2a2a2e] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h[60px text-center lg:text-left]">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* Dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent "></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* Skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30-px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 mb-10">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-7 ">
                  {skills.skilllist.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#2a2a2e] rounded-xl flex justify-center items-center group ">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300 ">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent className="shadow-md !rounded-md before:hidden">
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* About Me */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left "
            >
              <div className="flex flex-col gap-[30px] ">
                <h3 className="text-4xl font-bold ">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0  ">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0 ">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4 "
                      >
                        <span className="text-xl ">{item.field}</span>
                        <span className="text-white/60 ">
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
