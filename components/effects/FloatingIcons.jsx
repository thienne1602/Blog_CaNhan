"use client";

import { motion } from "framer-motion";
import "./FloatingIcons.css";

const FloatingIcons = ({ icons = ["💻", "☕", "🚀", "⚡", "🎨", "📱"] }) => {
  return (
    <div className="floating-icons-container">
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          className="floating-icon"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: 0.5,
            opacity: 0,
          }}
          animate={{
            y: [null, -20, 0, -15, 0],
            x: [null, Math.random() * 50 - 25, 0],
            scale: [0.5, 1, 0.9, 1],
            opacity: [0, 0.6, 0.4, 0.6, 0.4],
            rotate: [0, 10, -10, 5, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 3,
            repeat: Infinity,
            delay: index * 0.4,
            ease: "easeInOut",
          }}
          style={{
            left: `${10 + ((index * 15) % 80)}%`,
            top: `${20 + ((index * 20) % 60)}%`,
          }}
        >
          {icon}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingIcons;
