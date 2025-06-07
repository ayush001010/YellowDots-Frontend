import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: position.y,
        left: position.x,
        width: "20px",
        height: "20px",
        backgroundColor: "#F4B40F",
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 9999,
        transform: "translate(-50%, -50%)",
        transition: "transform 0.05s ease-out",
      }}
    />
  );
};

export default CustomCursor;
