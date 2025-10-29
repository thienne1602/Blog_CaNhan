"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";

const GlowingCard = ({ 
  children, 
  className = "",
  glowColors = ["#3b82f6", "#8b5cf6", "#ec4899"]
}) => {
  const cardRef = useRef(null);
  const [gradientCenter, setGradientCenter] = useState({ x: "50%", y: "50%" });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    setGradientCenter({ x: `${x}%`, y: `${y}%` });
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Glowing gradient effect */}
      <div
        className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${gradientCenter.x} ${gradientCenter.y}, ${glowColors[0]}40, ${glowColors[1]}20, ${glowColors[2]}10, transparent 60%)`,
        }}
      />
      
      {/* Border glow */}
      <div
        className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `linear-gradient(to right, ${glowColors.join(", ")})`,
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "1px",
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default GlowingCard;
