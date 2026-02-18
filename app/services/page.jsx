"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "BackEnd Web Development (Django & FastAPI)",
    description:
      "Building scalable and secure backend applications using Django and FastAPI. Experienced in designing RESTful APIs, authentication systems, and high-performance server logic for modern web platforms.",
    href: "https://www.djangoproject.com/",
  },
  {
    num: "02",
    title: "Database Design (SQL & NoSQL)",
    description:
      "Designing efficient database architectures using SQL and NoSQL technologies. Focused on data modeling, optimization, indexing, and creating flexible storage solutions for scalable applications.",
    href: "https://docs.djangoproject.com/en/5.2/ref/databases/",
  },
  {
    num: "03",
    title: "Telegram Bot Development",
    description:
      "Developing advanced Telegram bots with interactive features and automated workflows.  Experienced in building systems for messaging, analytics, integrations, and high-speed task automation.",
    href: "https://core.telegram.org/bots/tutorial",
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 ">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px] "
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group "
              >
                {/*  Top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all delay-25 duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                    target="_blank"
                  >
                    <BsArrowDownRight className="text-primary text-3xl " />
                  </Link>
                </div>
                {/*  Title  */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 ">
                  {service.title}
                </h2>
                {/*  Description */}
                <p className="text-white/60 ">{service.description}</p>
                {/*  Border  */}
                <div className="border-b border-white/20 w-full "></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
