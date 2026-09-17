"use client";

import { motion } from "framer-motion";

const stairAnimation = {
  initial: {
    y: "0%",
  },
  animate: {
    y: "100%",
  },
  exit: {
    y: ["100%", "0%"],
  },
};

// Calculate the reverse index for staggered delay
const reversedIndex = (index) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reversedIndex(index) * 0.08,
            }}
            className="h-full w-full bg-white relative"
          />
        );
      })}
    </>
  );
};

export default Stairs;