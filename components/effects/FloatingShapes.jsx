"use client";

import { motion } from "framer-motion";

const FloatingShapes = () => {
  const shapes = [
    { size: 60, color: "bg-primary-400/10", delay: 0, duration: 20, x: "10%", y: "20%" },
    { size: 80, color: "bg-purple-400/10", delay: 2, duration: 25, x: "80%", y: "10%" },
    { size: 40, color: "bg-pink-400/10", delay: 4, duration: 18, x: "70%", y: "70%" },
    { size: 100, color: "bg-blue-400/10", delay: 1, duration: 30, x: "20%", y: "80%" },
    { size: 50, color: "bg-indigo-400/10", delay: 3, duration: 22, x: "50%", y: "50%" },
    { size: 70, color: "bg-violet-400/10", delay: 5, duration: 28, x: "90%", y: "60%" },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full blur-3xl ${shape.color}`}
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingShapes;
