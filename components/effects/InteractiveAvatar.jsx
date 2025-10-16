"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const InteractiveAvatar = ({ src, name, className = "" }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`relative ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
    >
      {/* Outer glow rings */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: "linear-gradient(45deg, #6366f1, #8b5cf6, #ec4899)",
          padding: "4px",
        }}
        animate={{
          rotate: isHovered ? 360 : 0,
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{
          rotate: { duration: 3, repeat: Infinity, ease: "linear" },
          scale: { duration: 0.3 },
        }}
      >
        <div className="w-full h-full rounded-full bg-white p-1">
          <img
            src={src}
            alt={name}
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      </motion.div>

      {/* Particle effects on hover */}
      {isHovered && (
        <>
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-primary-500 to-accent-500"
              initial={{
                x: 0,
                y: 0,
                opacity: 0,
              }}
              animate={{
                x: Math.cos((i * Math.PI * 2) / 8) * 60,
                y: Math.sin((i * Math.PI * 2) / 8) * 60,
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.1,
              }}
              style={{
                left: "50%",
                top: "50%",
              }}
            />
          ))}
        </>
      )}
    </motion.div>
  );
};

export default InteractiveAvatar;
