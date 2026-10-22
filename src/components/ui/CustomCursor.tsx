"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState("");
  const [cursorEmoji, setCursorEmoji] = useState("");

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Spring physics untuk gerakan trailing yang elastis dan mulus
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Nonaktifkan jika touch device atau layar kecil
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouch || window.innerWidth < 1024) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Cek apakah kursor berada di atas elemen yang memiliki emoji kustom
      const emojiElem = target.closest("[data-cursor-emoji]");
      if (emojiElem) {
        const emoji = emojiElem.getAttribute("data-cursor-emoji") || "";
        setCursorEmoji(emoji);
        setIsHovered(true);
        setHoverText("");
        return;
      } else {
        setCursorEmoji("");
      }

      // Cek apakah kursor berada di atas elemen interaktif biasa
      const interactive = target.closest("a, button, [role='button'], .cursor-pointer, input, textarea");
      if (interactive) {
        setIsHovered(true);
        if (target.closest("[data-cursor='view']")) {
          setHoverText("VIEW");
        } else {
          setHoverText("");
        }
      } else {
        setIsHovered(false);
        setHoverText("");
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      setCursorEmoji("");
    };
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible, mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-[999] overflow-hidden">
      {/* Outer Trailing Ring */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: cursorEmoji ? 2.3 : isHovered ? 1.8 : 1,
          borderColor: cursorEmoji ? "#FF3366" : isHovered ? "#FF3366" : "rgba(255, 51, 102, 0.4)",
          backgroundColor: cursorEmoji ? "rgba(255, 51, 102, 0.18)" : isHovered ? "rgba(255, 51, 102, 0.1)" : "transparent",
          boxShadow: cursorEmoji ? "0 0 25px rgba(255, 51, 102, 0.4)" : "none",
        }}
        transition={{ type: "spring", damping: 25, stiffness: 350 }}
        className="w-8 h-8 rounded-full border border-[#FF3366]/40 flex items-center justify-center backdrop-blur-[2px]"
      >
        <AnimatePresence mode="wait">
          {cursorEmoji ? (
            <motion.span
              key={cursorEmoji}
              initial={{ scale: 0, rotate: -25, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              exit={{ scale: 0, rotate: 25, opacity: 0, transition: { duration: 0.1 } }}
              transition={{ type: "spring", stiffness: 500, damping: 20, mass: 0.4 }}
              className="text-[13px] leading-none select-none flex items-center justify-center pointer-events-none filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
            >
              {cursorEmoji}
            </motion.span>
          ) : hoverText ? (
            <motion.span
              key="hover-text"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="text-[8px] font-black tracking-widest text-[#FF3366] uppercase"
            >
              {hoverText}
            </motion.span>
          ) : null}
        </AnimatePresence>
      </motion.div>

      {/* Inner Pin-point Dot */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered || cursorEmoji ? 0 : 1,
          opacity: isHovered || cursorEmoji ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
        className="w-1.5 h-1.5 bg-[#FF3366] rounded-full shadow-[0_0_8px_#FF3366]"
      />
    </div>
  );
}
