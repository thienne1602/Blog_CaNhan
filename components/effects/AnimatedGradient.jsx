"use client";

import "./AnimatedGradient.css";

const AnimatedGradient = ({ className = "" }) => {
  return (
    <div className={`animated-gradient-bg ${className}`}>
      <div className="gradient-blob blob-1"></div>
      <div className="gradient-blob blob-2"></div>
      <div className="gradient-blob blob-3"></div>
    </div>
  );
};

export default AnimatedGradient;
