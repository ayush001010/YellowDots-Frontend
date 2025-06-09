import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const updateCursorVisibility = () => {
      setVisible(window.innerWidth > 768);
    };

    updateCursorVisibility(); // Initial check

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("resize", updateCursorVisibility);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", updateCursorVisibility);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  if (!visible) return null;

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
