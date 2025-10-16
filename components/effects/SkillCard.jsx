"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const SkillCard = ({ skill, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.05, y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group"
    >
      <div className="relative rounded-2xl bg-gradient-to-br from-white to-secondary-50 p-4 shadow-md border border-secondary-100 overflow-hidden transition-all duration-300">
        {/* Animated background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Content */}
        <div className="relative z-10">
          <p className="text-sm font-semibold text-secondary-800 text-center">
            {skill}
          </p>
        </div>

        {/* Glow effect */}
        <motion.div
          className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-300"
          animate={{
            opacity: isHovered ? 0.3 : 0,
          }}
        />
      </div>
    </motion.div>
  );
};

export default SkillCard;
