"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./FloatingIcons.css";

const FloatingIcons = ({ icons = ["💻", "☕", "🚀", "⚡", "🎨", "📱"] }) => {
  const [initialPositions, setInitialPositions] = useState([]);

  useEffect(() => {
    // Only run on client where window is defined
    if (typeof window === "undefined") return;

    // Compute positions once on mount. Use icons.length to avoid
    // re-running when parent passes a new array reference each render.
    const positions = Array.from({ length: icons.length }).map(() => ({
      x: Math.random() * window.innerWidth - window.innerWidth / 2,
      y: Math.random() * window.innerHeight - window.innerHeight / 2,
      xOffset: Math.random() * 50 - 25,
      rotateStart: 0,
      scaleStart: 0.5,
      opacityStart: 0,
    }));

    setInitialPositions(positions);
    // Intentionally run only once on mount to avoid update loops.
    // If you need to recompute when icons length changes, we can
    // add [icons.length] as dependency instead.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="floating-icons-container">
      {icons.map((icon, index) => {
        const pos = initialPositions[index] || {
          x: 0,
          y: 0,
          xOffset: 0,
          scaleStart: 0.5,
          opacityStart: 0,
        };
        return (
          <motion.div
            key={index}
            className="floating-icon"
            initial={{
              x: pos.x,
              y: pos.y,
              scale: pos.scaleStart,
              opacity: pos.opacityStart,
            }}
            animate={{
              y: [0, -20, 0, -15, 0],
              x: [0, pos.xOffset, 0],
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
        );
      })}
    </div>
  );
};

export default FloatingIcons;
