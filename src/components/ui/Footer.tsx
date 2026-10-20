"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="w-full bg-accent pt-32 pb-10 px-[5vw] overflow-hidden flex flex-col items-center relative mt-20">
      
      {/* Informasi Kontak */}
      <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end mb-20 border-b border-black/20 pb-10 gap-10 md:gap-0">
        <div className="flex flex-col gap-6">
          <h4 className="text-sm font-black text-black uppercase tracking-widest bg-black/10 w-fit px-4 py-2 rounded-full">Socials</h4>
          <div className="flex gap-8">
            <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="text-black/60 hover:text-black transition-colors uppercase font-bold text-sm md:text-base">Instagram</a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="text-black/60 hover:text-black transition-colors uppercase font-bold text-sm md:text-base">LinkedIn</a>
            <a href="https://behance.net/" target="_blank" rel="noreferrer" className="text-black/60 hover:text-black transition-colors uppercase font-bold text-sm md:text-base">Behance</a>
          </div>
        </div>
        
        <div className="text-left md:text-right">
          <h4 className="text-sm font-black text-black uppercase tracking-widest mb-6">Start a Project</h4>
          <a href="mailto:zulyanify@gmail.com" className="text-black font-black text-3xl md:text-5xl border-b-4 border-transparent hover:border-black transition-all">
            hello@zulyan.com
          </a>
        </div>
      </div>

      {/* Tipografi Raksasa */}
      <motion.h1 
        whileHover={{ scale: 1.02, y: -10 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="text-[17vw] font-black text-black leading-none tracking-tighter cursor-pointer text-center"
      >
        LET'S TALK
      </motion.h1>

      <div className="w-full flex flex-col md:flex-row justify-between items-center mt-16 text-black/50 text-[10px] md:text-xs font-bold uppercase tracking-widest gap-4 md:gap-0">
        <p>© {new Date().getFullYear()} Zulyan Fakih</p>
        <p>Built with ❤️ by AI Assistant</p>
        <p>Designed with Intent.</p>
      </div>
    </footer>
  );
}
