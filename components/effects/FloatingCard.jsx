"use client";

import { motion } from "framer-motion";

const FloatingCard = ({ children, delay = 0, className = "" }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay,
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      }}
      whileHover={{
        y: -10,
        transition: { duration: 0.3 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default FloatingCard;
