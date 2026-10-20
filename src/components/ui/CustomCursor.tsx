"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState("");

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

      // Cek apakah kursor berada di atas elemen interaktif
      const target = e.target as HTMLElement | null;
      if (!target) return;

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

    const handleMouseLeave = () => setIsVisible(false);
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
          scale: isHovered ? 1.8 : 1,
          borderColor: isHovered ? "#FF3366" : "rgba(255, 51, 102, 0.4)",
          backgroundColor: isHovered ? "rgba(255, 51, 102, 0.1)" : "transparent",
        }}
        transition={{ duration: 0.2 }}
        className="w-8 h-8 rounded-full border border-[#FF3366]/40 flex items-center justify-center backdrop-blur-[1px]"
      >
        {hoverText && (
          <span className="text-[8px] font-black tracking-widest text-[#FF3366] uppercase">
            {hoverText}
          </span>
        )}
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
          scale: isHovered ? 0 : 1,
          opacity: isHovered ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
        className="w-1.5 h-1.5 bg-[#FF3366] rounded-full shadow-[0_0_8px_#FF3366]"
      />
    </div>
  );
}
