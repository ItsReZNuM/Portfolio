"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { useLanguage } from "@/context/LanguageContext";

const WorkSliderBtns = ({ containerStyles, btnStyles, iconsStyles }) => {
  const swiper = useSwiper();
  const { isRTL, t } = useLanguage();

  return (
    <div className={containerStyles}>
      <button
        type="button"
        className={btnStyles}
        onClick={() => swiper.slidePrev()}
        aria-label={t("work.slider.prev", "Previous project")}
      >
        {isRTL ? (
          <PiCaretRightBold className={iconsStyles} />
        ) : (
          <PiCaretLeftBold className={iconsStyles} />
        )}
      </button>
      <button
        type="button"
        className={btnStyles}
        onClick={() => swiper.slideNext()}
        aria-label={t("work.slider.next", "Next project")}
      >
        {isRTL ? (
          <PiCaretLeftBold className={iconsStyles} />
        ) : (
          <PiCaretRightBold className={iconsStyles} />
        )}
      </button>
    </div>
  );
};

export default WorkSliderBtns;
