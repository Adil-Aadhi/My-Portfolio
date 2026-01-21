import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

useEffect(() => {
  const add = () => setHover(true);
  const remove = () => setHover(false);

  // target anything that should act like pointer
  const elements = document.querySelectorAll(
    "a, button, [data-cursor='pointer'], .card"
  );

  elements.forEach((el) => {
    el.addEventListener("mouseenter", add);
    el.addEventListener("mouseleave", remove);
  });

  return () => {
    elements.forEach((el) => {
      el.removeEventListener("mouseenter", add);
      el.removeEventListener("mouseleave", remove);
    });
  };
}, []);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
  <motion.div
  className="fixed rounded-full pointer-events-none z-[9999]
             backdrop-blur-[1px] border border-white/30
             bg-white/[0.08] mix-blend-difference"
  style={{
    width: hover ? 28 : 24,
    height: hover ? 28 : 24,
  }}
  animate={{
    x: position.x - (hover ? 21 : 12),
    y: position.y - (hover ? 21 : 12),
    scale: hover ? 1.3 : 1,
    boxShadow: hover
      ? "0 0 20px rgba(255,255,255,0.4)"
      : "0 0 0px rgba(255,255,255,0)",
  }}
  transition={{
    type: "tween",
    ease: "easeOut",
    duration: 0.15,
  }}
/>



  );
};

export default CustomCursor;
