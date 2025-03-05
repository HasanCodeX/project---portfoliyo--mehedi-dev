import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0, scale: 1 });

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY, scale: 1.5 }); // Zoom on move
      setTimeout(() => setPosition((prev) => ({ ...prev, scale: 1 })), 100); // Reset after 100ms
    };

    window.addEventListener("mousemove", updatePosition);
    return () => {
      window.removeEventListener("mousemove", updatePosition);
    };
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `translate(-50%, -50%) scale(${position.scale})`, // Zoom effect
        transition: "transform 0.15s ease-out", // Smooth effect
      }}
    />
  );
};

export default CustomCursor;
