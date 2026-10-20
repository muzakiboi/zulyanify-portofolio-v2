"use client";

import Link from "next/link";
import { projects } from "@/data/projects";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function WorksGallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="min-h-screen w-full bg-[#050505] py-24 overflow-hidden flex flex-col items-center relative z-10 border-t border-white/5">
      <div className="mb-20 text-center z-50">
        <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter mix-blend-difference">
          Selected Works
        </h2>
        <p className="text-white/50 mt-4 tracking-widest uppercase font-bold text-sm">
          Hover & Click to Explore
        </p>
      </div>

      <div className="relative w-full h-[40vh] md:h-[50vh] flex items-center justify-center perspective-[1000px]">
        {projects.slice(0, 4).map((proj, idx) => {
          const totalDisplayed = Math.min(projects.length, 4);
          const centerIndex = (totalDisplayed - 1) / 2; 
          const offset = idx - centerIndex; 
          
          const baseRotate = offset * (isMobile ? 5 : 8); 
          const baseX = offset * (isMobile ? 80 : 200); 
          const baseY = Math.abs(offset) * (isMobile ? 15 : 40); 
          
          const isHovered = hoveredIndex === idx;

          return (
            <motion.div
              key={proj.id}
              onHoverStart={() => setHoveredIndex(idx)}
              onHoverEnd={() => setHoveredIndex(null)}
              initial={false}
              animate={{
                rotateZ: isHovered ? 0 : baseRotate,
                x: baseX,
                y: isHovered ? baseY - 30 : baseY,
                scale: isHovered ? 1.05 : 1,
                zIndex: isHovered ? 50 : 10 - Math.ceil(Math.abs(offset)),
              }}
              // Transisi gerakan fisik 3D diperhalus (lebih lambat & mengayun halus)
              transition={{ type: "spring", stiffness: 100, damping: 20, mass: 1 }}
              className="absolute w-[320px] h-[200px] md:w-[600px] md:h-[360px]"
            >
              <Link 
                href={`/works/${proj.id}`}
                className="block w-full h-full rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/10 bg-[#111] relative group"
              >
                {/* Pill Kategori - Awalnya transparan, fade-in mulus ke bawah saat hover */}
                <div className="absolute top-4 right-4 md:top-6 md:right-6 z-20 bg-white text-black text-[9px] md:text-xs font-black px-3 py-1.5 md:px-4 md:py-2 rounded-full uppercase tracking-widest shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out transform -translate-y-4 group-hover:translate-y-0">
                  {proj.category}
                </div>

                {/* Gambar lebih lambat nge-zoom */}
                <img 
                  src={proj.image} 
                  alt={proj.title}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 opacity-60 group-hover:opacity-100"
                />

                {/* Gradient gelap dihilangkan di awal, fade-in smooth saat hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out"></div>

                {/* Kontainer Teks Utama - Awalnya hilang, naik dan fade-in perlahan saat hover */}
                <div className="absolute bottom-5 left-5 right-5 md:bottom-8 md:left-8 md:right-8 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out transform translate-y-6 group-hover:translate-y-0">
                  <h3 className="text-xl md:text-3xl font-black text-white leading-tight">
                    {proj.title}
                  </h3>
                  <p className="text-white/60 text-[10px] md:text-sm mt-2 md:mt-3 font-medium">
                    {proj.description.substring(0, 80)}... <br className="hidden md:block"/>
                    <span className="text-accent mt-1 md:mt-2 inline-block">Read Case Study &rarr;</span>
                  </p>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
