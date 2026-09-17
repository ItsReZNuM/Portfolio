"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const PageTransition = ({ children }) => {
  const pathname = usePathname();
  const isFirstRender = useRef(true);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      setHasMounted(true);
    }
  }, []);

  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>
        <motion.div
          initial={!hasMounted ? { opacity: 1 } : { opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: !hasMounted ? 0 : 0.9,
              duration: !hasMounted ? 0 : 0.4,
              ease: "easeInOut",
            },
          }}
        >
          {children}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;