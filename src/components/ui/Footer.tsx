"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="w-full bg-accent pt-32 pb-10 px-[5vw] overflow-hidden flex flex-col items-center relative mt-20">
      
      {/* Informasi Kontak */}
      <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end mb-20 border-b border-black/20 pb-10 gap-10 md:gap-0">
        <div className="flex flex-col gap-6">
          <h4 className="text-sm font-black text-black uppercase tracking-widest bg-black/10 w-fit px-4 py-2 rounded-full">Socials</h4>
          <div className="flex flex-wrap gap-6 md:gap-8">
            <a 
              href="https://www.instagram.com/muzakiboi" 
              target="_blank" 
              rel="noreferrer" 
              className="text-black/70 hover:text-black transition-colors uppercase font-bold text-sm md:text-base hover:underline underline-offset-4"
            >
              Instagram
            </a>
            <a 
              href="https://www.linkedin.com/in/muhammad-zulyan-fakih-a91287174/" 
              target="_blank" 
              rel="noreferrer" 
              className="text-black/70 hover:text-black transition-colors uppercase font-bold text-sm md:text-base hover:underline underline-offset-4"
            >
              LinkedIn
            </a>
            <a 
              href="https://www.behance.net/zulyanfakih90" 
              target="_blank" 
              rel="noreferrer" 
              className="text-black/70 hover:text-black transition-colors uppercase font-bold text-sm md:text-base hover:underline underline-offset-4"
            >
              Behance
            </a>
            <a 
              href="https://discord.com/users/662643259272593428" 
              target="_blank" 
              rel="noreferrer" 
              className="text-black/70 hover:text-black transition-colors uppercase font-bold text-sm md:text-base hover:underline underline-offset-4"
            >
              Discord
            </a>
          </div>
        </div>
        
        <div className="text-left md:text-right">
          <h4 className="text-sm font-black text-black uppercase tracking-widest mb-4">Start a Project</h4>
          <a 
            href="mailto:mzulyanfakih90@gmail.com" 
            className="text-black font-black text-2xl sm:text-3xl md:text-5xl border-b-4 border-transparent hover:border-black transition-all break-all sm:break-normal"
          >
            mzulyanfakih90@gmail.com
          </a>
        </div>
      </div>

      {/* Tipografi Raksasa */}
      <motion.a 
        href="mailto:mzulyanfakih90@gmail.com"
        whileHover={{ scale: 1.02, y: -10 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="text-[17vw] font-black text-black leading-none tracking-tighter cursor-pointer text-center select-none block"
      >
        LET'S TALK
      </motion.a>

      <div className="w-full flex flex-col md:flex-row justify-between items-center mt-16 text-black/60 text-[10px] md:text-xs font-bold uppercase tracking-widest gap-4 md:gap-0">
        <p>© {new Date().getFullYear()} Zulyan Fakih</p>
        <p>Built With My Coffee</p>
        <p>Designed with Intent.</p>
      </div>
    </footer>
  );
}
