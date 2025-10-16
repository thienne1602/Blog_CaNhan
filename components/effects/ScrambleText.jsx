"use client";

import { useEffect, useState } from "react";

const ScrambleText = ({
  text,
  speed = 50,
  scrambleSpeed = 20,
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*",
  className = "",
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);

  const scramble = () => {
    if (isScrambling) return;
    setIsScrambling(true);

    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return text[index];
            }
            if (char === " ") return " ";
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join("")
      );

      iteration += 1 / 3;

      if (iteration >= text.length) {
        clearInterval(interval);
        setIsScrambling(false);
        setDisplayText(text);
      }
    }, scrambleSpeed);
  };

  useEffect(() => {
    const timer = setTimeout(scramble, speed);
    return () => clearTimeout(timer);
  }, []);

  return (
    <span
      onMouseEnter={scramble}
      className={`inline-block font-mono ${className}`}
    >
      {displayText}
    </span>
  );
};

export default ScrambleText;
