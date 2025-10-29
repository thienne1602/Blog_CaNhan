"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const MouseFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const mouseRef = { current: { x: 0, y: 0 } };
    const rAFRef = { current: null };

    const updateMousePosition = (e) => {
      // store latest coords and batch state updates via rAF
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;

      if (rAFRef.current == null) {
        rAFRef.current = requestAnimationFrame(() => {
          setMousePosition({ x: mouseRef.current.x, y: mouseRef.current.y });
          rAFRef.current = null;
        });
      }
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        (target && target.tagName === "A") ||
        (target && target.tagName === "BUTTON") ||
        (target && target.closest && target.closest("a")) ||
        (target && target.closest && target.closest("button"))
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseover", handleMouseOver);
      if (rAFRef.current) cancelAnimationFrame(rAFRef.current);
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full bg-primary-500 pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />

      {/* Follower circle */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full border-2 border-primary-400 pointer-events-none z-[9998] mix-blend-difference"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.1,
        }}
      />
    </>
  );
};

export default MouseFollower;
