"use client";

import { useEffect, useRef } from "react";

const SmoothScrollProvider = ({ children }) => {
  const rafRef = useRef(null);
  const isTickingRef = useRef(false);

  useEffect(() => {
    let currentScroll = 0;
    let targetScroll = 0;
    const ease = 0.075;

    const lerp = (start, end, factor) => start + (end - start) * factor;

    const updateScroll = () => {
      targetScroll = window.scrollY;
      currentScroll = lerp(currentScroll, targetScroll, ease);
      document.documentElement.style.transform = `translateY(-${currentScroll}px)`;

      if (Math.abs(targetScroll - currentScroll) > 0.5) {
        rafRef.current = requestAnimationFrame(updateScroll);
      } else {
        isTickingRef.current = false;
      }
    };

    const handleScroll = () => {
      if (!isTickingRef.current) {
        isTickingRef.current = true;
        rafRef.current = requestAnimationFrame(updateScroll);
      }
    };

    // Initial setup
    document.documentElement.style.position = "fixed";
    document.documentElement.style.top = "0";
    document.documentElement.style.left = "0";
    document.documentElement.style.width = "100%";
    document.documentElement.style.overflow = "visible";

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      document.documentElement.style.position = "";
      document.documentElement.style.top = "";
      document.documentElement.style.left = "";
      document.documentElement.style.width = "";
      document.documentElement.style.overflow = "";
      document.documentElement.style.transform = "";
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScrollProvider;
