"use client";

import { motion, Variants, useInView } from "framer-motion";
import React, { useRef } from "react";

interface MotionImageProps {
  src: string;
  width: number;
  height: number;
  alt: string;
  delay?: number;
  className?: string;
}

const imageVariants: Variants = {
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
      duration: 2,
      type: "spring",
      bounce: 0.4,
      delay,
    },
  }),
};

const MotionImage: React.FC<MotionImageProps> = ({
  src,
  width,
  height,
  alt,
  delay = 0,
  className = "",
}) => {
  const ref = useRef<HTMLImageElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 100px -50px 0px",
  });

  return (
    <motion.img
      ref={ref}
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      variants={imageVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={delay}
    />
  );
};

export default MotionImage;
