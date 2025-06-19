import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(true);
  const [cursorColor, setCursorColor] = useState("#000000");

  useEffect(() => {
    const updateCursorVisibility = () => {
      setVisible(window.innerWidth > 768);
    };

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      let element = document.elementFromPoint(e.clientX, e.clientY);
      let bgColor = null;

      // Traverse DOM upward until we find a non-transparent background color
      while (element && element !== document.body) {
        const computedStyle = window.getComputedStyle(element);
        const bg = computedStyle.backgroundColor;

        if (bg && bg !== "transparent" && bg !== "rgba(0, 0, 0, 0)") {
          bgColor = bg;
          break;
        }

        element = element.parentElement;
      }

      if (bgColor) {
        const isDark = isDarkColor(bgColor);
        setCursorColor(isDark ? "#F4B40F" : "#000000");
      }
    };

    updateCursorVisibility();
    window.addEventListener("resize", updateCursorVisibility);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", updateCursorVisibility);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const isDarkColor = (rgb) => {
    const match = rgb.match(/\d+/g);
    if (!match) return false;
    const [r, g, b] = match.map(Number);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness < 128;
  };

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: position.y,
        left: position.x,
        width: "20px",
        height: "20px",
        backgroundColor: cursorColor,
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 9999,
        transform: "translate(-50%, -50%)",
        transition: "transform 0.05s ease-out, background-color 0.3s ease",
      }}
    />
  );
};

export default CustomCursor;
