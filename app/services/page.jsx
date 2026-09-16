"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const Services = () => {
  const { messages, isRTL } = useLanguage();
  const services = messages?.services || [];

  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* Top: Number & Link */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45 rtl:hover:rotate-45"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={service.title}
                  >
                    <BsArrowDownRight
                      className={`text-primary text-3xl ${
                        isRTL ? "-scale-x-100" : ""
                      }`}
                    />
                  </Link>
                </div>

                {/* Title */}
                <h2 className="text-[32px] xl:text-[42px] font-bold leading-snug text-white group-hover:text-accent transition-all duration-500 text-start">
                  {service.title}
                </h2>

                {/* Description */}
                <p className="text-white/60 leading-relaxed text-start">
                  {service.description}
                </p>

                {/* Border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
