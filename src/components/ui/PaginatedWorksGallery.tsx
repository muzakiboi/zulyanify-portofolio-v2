"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { projects } from "@/data/projects";

// Varian animasi untuk transisi halaman
const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1500 : -1500, // Masuk dari kanan atau kiri
    opacity: 0,
    scale: 0.8,
    rotateY: direction > 0 ? 45 : -45, // Efek 3D sedikit saat masuk
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: { type: "spring", stiffness: 80, damping: 20, mass: 1 }
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -1500 : 1500, // Keluar ke kiri atau kanan
    opacity: 0,
    scale: 0.8,
    rotateY: direction > 0 ? -45 : 45,
    transition: { type: "spring", stiffness: 80, damping: 20, mass: 1 }
  })
};

export default function PaginatedWorksGallery() {
  const [[page, direction], setPage] = useState([0, 0]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const itemsPerPage = 4;
  const totalPages = Math.ceil(projects.length / itemsPerPage);
  
  const currentProjects = projects.slice(page * itemsPerPage, (page + 1) * itemsPerPage);

  const paginate = (newPage: number) => {
    if (newPage === page) return;
    setPage([newPage, newPage > page ? 1 : -1]);
    setHoveredIndex(null);
  };

  return (
    <div className="w-full flex flex-col items-center py-20 bg-[#050505] overflow-hidden">
      
      {/* Container Kartu 3D */}
      <div className="relative w-full h-[40vh] md:h-[60vh] max-w-7xl mx-auto flex justify-center items-center perspective-1000 mb-10">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 flex justify-center items-center"
          >
            {currentProjects.map((project, idx) => {
              const centerIndex = (currentProjects.length - 1) / 2; 
              const offset = idx - centerIndex; 
              
              // PERBAIKAN: Menggunakan perhitungan persis sama dengan halaman Home
              // Menambahkan jarak X yang sangat lebar (200px) agar tidak mepet
              const baseRotate = offset * (isMobile ? 5 : 8); 
              const baseX = offset * (isMobile ? 80 : 200); 
              const baseY = Math.abs(offset) * (isMobile ? 15 : 40); 
              
              const isHovered = hoveredIndex === idx;

              return (
                <motion.div
                  key={project.id}
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
                  transition={{ type: "spring", stiffness: 100, damping: 20, mass: 1 }}
                  className="absolute w-[320px] h-[200px] md:w-[600px] md:h-[360px]"
                >
                  <Link 
                    href={`/works/${project.id}`}
                    className="block w-full h-full rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/10 bg-[#111] relative group cursor-pointer"
                  >
                    {/* Pill Kategori - Hover Behavior Sama Dengan Home */}
                    <div className="absolute top-4 right-4 md:top-6 md:right-6 z-20 bg-white text-black text-[9px] md:text-xs font-black px-3 py-1.5 md:px-4 md:py-2 rounded-full uppercase tracking-widest shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out transform -translate-y-4 group-hover:translate-y-0">
                      {project.category}
                    </div>

                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 opacity-60 group-hover:opacity-100"
                    />

                    {/* Gradient gelap */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out"></div>

                    {/* Kontainer Teks Utama */}
                    <div className="absolute bottom-5 left-5 right-5 md:bottom-8 md:left-8 md:right-8 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out transform translate-y-6 group-hover:translate-y-0">
                      <h3 className="text-xl md:text-3xl font-black text-white leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-white/60 text-[10px] md:text-sm mt-2 md:mt-3 font-medium">
                        {project.description.substring(0, 80)}... <br className="hidden md:block"/>
                        <span className="text-[#FF3366] mt-1 md:mt-2 inline-block font-bold">Read Case Study &rarr;</span>
                      </p>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Tombol Pagination */}
      <div className="flex gap-4 mt-8 z-20">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => paginate(i)}
            className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center font-black text-lg transition-all duration-300 ${
              page === i 
              ? "bg-[#FF3366] text-white scale-110 shadow-[0_0_30px_rgba(255,51,102,0.6)]" 
              : "bg-white/5 text-white/40 hover:bg-white/20 hover:text-white"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

    </div>
  );
}
