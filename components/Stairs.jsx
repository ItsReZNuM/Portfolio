"use client";

import { motion } from "framer-motion";

const stairAnimation = {
    initital: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    },
};


// Calculate the reverse index for staggered delay 
const reversedIndex = (index) => {
    const totalSteps = 6; // number of steps
    return totalSteps - index - 1
}

const Stairs = () => {
    return (
        <>

            {/* Rendering 6 Motion, each representing a step of stairs.
    
        Each Div will have the same animation defined by the StairsAnimation object.
        The delay for each div is calculated sinamically based on it's reversed index,
        Craeting a staggered effect with decreasing delay for each subsequent step... 
    
    */}
            {[...Array(6)].map((_, index) => {
                return (<motion.div
                    key={index}
                    variants={stairAnimation}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                        delay: reversedIndex(index) * 0.1,
                    }}
                    className="h-full w-full bg-white relative "
                />
                ); 
            })}
        </>
    )
}

export default Stairs