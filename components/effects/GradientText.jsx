"use client";

import "./GradientText.css";

export default function GradientText({
  children,
  className = "",
  colors = ["#60A5FA", "#A78BFA", "#F472B6", "#FCD34D", "#60A5FA"], // Brighter colors
  animationSpeed = 3,
  showBorder = false,
}) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    animationDuration: `${animationSpeed}s`,
  };

  return (
    <div className={`animated-gradient-text ${className}`}>
      {showBorder && (
        <div className="gradient-overlay" style={gradientStyle}></div>
      )}
      <div className="text-content" style={gradientStyle}>
        {children}
      </div>
    </div>
  );
}
