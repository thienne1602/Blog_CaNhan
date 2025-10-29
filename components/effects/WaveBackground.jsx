"use client";

import { useEffect, useRef } from "react";

const WaveBackground = ({
  waveCount = 3,
  amplitude = 50,
  frequency = 0.02,
  speed = 0.015,
  colors = [
    "rgba(59, 130, 246, 0.1)",
    "rgba(139, 92, 246, 0.1)",
    "rgba(236, 72, 153, 0.1)",
  ],
}) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let time = 0;
    let dpr = window.devicePixelRatio || 1;

    const resizeCanvas = () => {
      dpr = window.devicePixelRatio || 1;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const drawWave = (offset, color, amplitudeMultiplier = 1) => {
      ctx.beginPath();
      const cssHeight = canvas.height / (window.devicePixelRatio || 1);
      ctx.moveTo(0, cssHeight / 2);

      const cssWidth = canvas.width / (window.devicePixelRatio || 1);
      for (let x = 0; x < cssWidth; x++) {
        const y =
          cssHeight / 2 +
          Math.sin(x * frequency + time + offset) *
            amplitude *
            amplitudeMultiplier;
        ctx.lineTo(x, y);
      }

      ctx.lineTo(cssWidth, cssHeight);
      ctx.lineTo(0, cssHeight);
      ctx.closePath();
      ctx.fillStyle = color;
      ctx.fill();
    };

    const animate = () => {
      const cssWidth = canvas.width / (window.devicePixelRatio || 1);
      const cssHeight = canvas.height / (window.devicePixelRatio || 1);
      ctx.clearRect(0, 0, cssWidth, cssHeight);

      // Draw multiple waves
      for (let i = 0; i < waveCount; i++) {
        drawWave(i * 2, colors[i % colors.length], 1 - i * 0.2);
      }

      time += speed;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [waveCount, amplitude, frequency, speed, colors]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.3 }}
    />
  );
};

export default WaveBackground;
