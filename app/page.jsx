"use client";

import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { useLanguage } from "@/context/LanguageContext";

const Home = () => {
  const { t } = useLanguage();

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Text */}
          <div className="text-center xl:text-start order-2 xl:order-none">
            <span className="text-xl text-white/80">{t("home.role", "BackEnd Developer")}</span>
            <h1 className="h1 mb-6">
              {t("home.greeting", "Hello, I'm")} <br />
              <span className="text-accent">{t("home.name", "Reza Mohamadnia")}</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80 leading-relaxed">
              {t(
                "home.bio",
                "So Curious About learning tech things and always trying to improve myself..."
              )}
            </p>

            {/* Btn & Socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href="/assets/cv.pdf" download="Reza_Mohamadnia_CV.pdf">
                <Button
                  variant="outline"
                  size="lg"
                  className="hover:text-current flex items-center gap-2 hover:bg-accent/20 transition-colors duration-300"
                >
                  <span>{t("home.downloadCv", "Download CV")}</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>

              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
