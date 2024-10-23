"use client";

import { motion, Variants, useInView } from "framer-motion";
import React, { useRef } from "react";

interface MotionTextProps {
  children: React.ReactNode;
  delay?: number;
}

const textVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: 20,
  },
  visible: (delay: number = 0) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      type: "spring",
      bounce: 0.4,
      delay,
    },
  }),
};

const MotionText: React.FC<MotionTextProps> = ({ children, delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 100px -50px 0px",
  });

  return (
    <motion.div
      ref={ref}
      variants={textVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={delay}
    >
      {children}
    </motion.div>
  );
};

export default MotionText;
