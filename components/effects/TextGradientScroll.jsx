"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const TextGradientScroll = ({ 
  children, 
  className = "",
  colors = ["#3b82f6", "#8b5cf6", "#ec4899"]
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const colorIndex = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [colors[0], colors[1], colors[2]]
  );

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        color: colorIndex,
        scale,
        opacity,
      }}
    >
      {children}
    </motion.div>
  );
};

export default TextGradientScroll;
