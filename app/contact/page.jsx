"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const Contact = () => {
  const { t, locale, messages } = useLanguage();
  const contactData = messages?.contact || {};

  const info = [
    {
      icon: <FaPhoneAlt />,
      title: contactData?.info?.phone?.title || "Phone",
      description: "(+98) 916 628 0889",
      isLTR: true,
    },
    {
      icon: <FaEnvelope />,
      title: contactData?.info?.email?.title || "Email",
      description: "rmohamadnia85@gmail.com",
      isLTR: true,
    },
    {
      icon: <FaMapMarkerAlt />,
      title: contactData?.info?.location?.title || "Location",
      description:
        contactData?.info?.location?.value || "Iran, Lorestan, KhorramAbad",
      isLTR: false,
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Form */}
          <div className="xl:w-[58%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-8 xl:p-10 bg-[#2a2a2e] rounded-xl border border-white/5"
              onSubmit={(e) => e.preventDefault()}
            >
              <h3 className="text-3xl xl:text-4xl text-accent font-bold text-start">
                {t("contact.title", "Let's Work Together")}
              </h3>
              <p className="text-white/60 leading-relaxed text-start text-sm xl:text-base">
                {t(
                  "contact.subtitle",
                  "Have a project in mind, a question, or an opportunity? Feel free to reach out using the form below or through direct contact channels."
                )}
              </p>

              {/* Input Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  placeholder={t("contact.placeholders.firstName", "First Name")}
                  className="text-start"
                />
                <Input
                  type="text"
                  placeholder={t("contact.placeholders.lastName", "Last Name")}
                  className="text-start"
                />
                <Input
                  type="email"
                  placeholder={t("contact.placeholders.email", "Email Address")}
                  className="text-start ltr-isolate"
                  dir="auto"
                />
                <Input
                  type="tel"
                  placeholder={t("contact.placeholders.phone", "Phone number")}
                  className="text-start ltr-isolate"
                  dir="auto"
                />
              </div>

              {/* Service Selection */}
              <Select key={locale}>
                <SelectTrigger className="w-full text-start">
                  <SelectValue
                    placeholder={t(
                      "contact.placeholders.service",
                      "Select a service"
                    )}
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>
                      {t("contact.services.label", "Select a service")}
                    </SelectLabel>
                    <SelectItem value="backend">
                      {t("contact.services.backend", "BackEnd Web Development")}
                    </SelectItem>
                    <SelectItem value="telegram">
                      {t(
                        "contact.services.telegram",
                        "Telegram Bot Development"
                      )}
                    </SelectItem>
                    <SelectItem value="database">
                      {t(
                        "contact.services.database",
                        "Database Architecture & Optimization"
                      )}
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* Message TextArea */}
              <Textarea
                className="h-[180px] text-start"
                placeholder={t(
                  "contact.placeholders.message",
                  "Type your message here..."
                )}
              />

              {/* Submit Button */}
              <Button
                size="md"
                className="w-full sm:max-w-48 self-start"
                type="submit"
              >
                {t("contact.submit", "Send Message")}
              </Button>
            </form>
          </div>

          {/* Contact Info Cards */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10 w-full max-w-[400px]">
              {info.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="flex items-center gap-6 group"
                  >
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#2a2a2e] text-accent rounded-md flex items-center justify-center shrink-0 border border-white/5 group-hover:border-accent/40 transition-colors">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1 text-start">
                      <p className="text-white/60 text-sm">{item.title}</p>
                      <h4
                        className={`text-lg xl:text-xl font-medium text-white ${
                          item.isLTR ? "ltr-isolate" : ""
                        }`}
                        dir={item.isLTR ? "ltr" : undefined}
                      >
                        {item.description}
                      </h4>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
