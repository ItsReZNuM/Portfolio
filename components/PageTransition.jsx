"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransition = ({ children }) => {
  const pathname = usePathname();
  const isFirstRender = useRef(true);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    setShouldAnimate(true);
  }, [pathname]);

  return (
    <AnimatePresence>
      <div key={pathname}>
        {shouldAnimate && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{
              opacity: 0,
              transition: { delay: 0.4, duration: 0.3, ease: "easeInOut" },
            }}
            className="h-screen w-screen fixed bg-primary top-0 pointer-events-none z-30"
          />
        )}
      </div>
      {children}
    </AnimatePresence>
  );
};

export default PageTransition;