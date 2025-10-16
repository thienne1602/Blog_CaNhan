"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState, useMemo } from "react";

const BlurText = ({
  text = "",
  delay = 100,
  className = "",
  animateBy = "words",
  direction = "top",
}) => {
  const elements = animateBy === "words" ? text.split(" ") : text.split("");
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const variants = {
    hidden: {
      filter: "blur(10px)",
      opacity: 0,
      y: direction === "top" ? -20 : 20,
    },
    visible: {
      filter: "blur(0px)",
      opacity: 1,
      y: 0,
    },
  };

  return (
    <span ref={ref} className={className}>
      {elements.map((element, index) => (
        <motion.span
          key={index}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{
            delay: index * (delay / 1000),
            duration: 0.4,
            ease: "easeOut",
          }}
          style={{
            display: "inline-block",
            marginRight: animateBy === "words" ? "0.3em" : "0",
          }}
        >
          {element}
        </motion.span>
      ))}
    </span>
  );
};

export default BlurText;
