"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  { title: "Brand Identity", desc: "Crafting memorable logos, typography systems, and cohesive brand guidelines.", img: "/assets/images/project-redesign-telkom-indonesia/syne-logo-1.png" },
  { title: "UI/UX Design", desc: "Designing intuitive, aesthetic, and user-centered digital interfaces.", img: "/assets/images/project-womenmoment/womenmoment-feed-1.png" },
  { title: "Motion & Video", desc: "Dynamic editing for campaigns, reels, and live stream productions.", img: "/assets/images/project-typecaster-campaign/hero-typecaster-campaign.png" },
  { title: "Digital Campaign", desc: "Strategic visual planning for marketing and social media activations.", img: "/assets/images/graduation-upj-2025/documentation-1.png" }
];

export default function ServicesSection() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        // Hanya track mouse jika berada di dalam kontainer
        if (e.clientY >= rect.top && e.clientY <= rect.bottom) {
          setMousePos({ x: e.clientX, y: e.clientY - rect.top });
        }
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section ref={containerRef} className="py-32 w-full bg-[#050505] relative px-[5vw] border-t border-white/5">
      <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-16 flex items-center gap-4">
        <span className="w-12 h-px bg-accent"></span> What I Do
      </h2>
      
      <div className="flex flex-col w-full relative z-10">
        {services.map((srv, i) => (
          <div 
            key={i} 
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            className="group border-b border-white/10 py-12 md:py-16 flex flex-col md:flex-row justify-between items-start md:items-center cursor-pointer hover:bg-white/5 transition-colors px-4 md:px-8"
          >
            <h3 className="text-4xl md:text-7xl font-black text-white/30 group-hover:text-white transition-colors duration-500 tracking-tighter uppercase">
              {srv.title}
            </h3>
            <p className="text-white/40 group-hover:text-white/80 max-w-sm text-sm md:text-base mt-4 md:mt-0 font-medium transition-colors duration-500">
              {srv.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Floating Image Reveal (Cursor Follower) - Hanya di Desktop */}
      <AnimatePresence>
        {hovered !== null && (
          <motion.div
            key="cursor-img"
            className="hidden md:block absolute top-0 left-0 w-[400px] h-[250px] pointer-events-none rounded-2xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.8)] z-50 border border-white/10"
            animate={{
              x: mousePos.x - 200, // Geser setengah lebar agar mouse tepat di tengah
              y: mousePos.y - 125, // Geser setengah tinggi
              scale: 1,
              opacity: 1,
              rotate: (mousePos.x % 15) - 7.5 // Efek miring dinamis saat mouse digeser
            }}
            initial={{ scale: 0.5, opacity: 0 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200, mass: 0.5 }}
          >
            <img src={services[hovered].img} alt="Service preview" className="w-full h-full object-cover" />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
