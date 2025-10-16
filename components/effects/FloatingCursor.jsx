"use client";

import { useEffect, useRef } from "react";
import "./FloatingCursor.css";

const FloatingCursor = () => {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);
  const particlesRef = useRef([]);
  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      // Create particle trail
      if (Math.random() > 0.8) {
        createParticle(e.clientX, e.clientY);
      }
    };

    const createParticle = (x, y) => {
      const particle = document.createElement("div");
      particle.className = "cursor-particle";
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      document.body.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, 1000);
    };

    const animate = () => {
      // Smooth cursor following
      cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * 0.15;
      cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * 0.15;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${cursorPos.current.x}px, ${cursorPos.current.y}px)`;
      }

      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate(${mousePos.current.x}px, ${mousePos.current.y}px)`;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="floating-cursor" />
      <div ref={cursorDotRef} className="floating-cursor-dot" />
    </>
  );
};

export default FloatingCursor;
