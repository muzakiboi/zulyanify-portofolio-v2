"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Animasi teks berjalan (marquee) berlawanan arah saat di-scroll
  const x1 = useTransform(scrollYProgress, [0, 1], [0, -800]);
  const x2 = useTransform(scrollYProgress, [0, 1], [-800, 0]);

  return (
    <section ref={ref} className="h-auto md:h-[80vh] bg-[#EAEAEA] text-[#050505] overflow-hidden relative rounded-[2rem] md:rounded-[4rem] mx-2 md:mx-6 my-12 shadow-2xl flex flex-col justify-end">
      
      {/* Background Marquee Text */}
      <div className="absolute inset-0 flex flex-col justify-center gap-2 whitespace-nowrap opacity-[0.04] pointer-events-none select-none z-0">
        <motion.h2 style={{ x: x1 }} className="text-[12vw] font-black uppercase leading-none tracking-tighter">
          VISUAL COMMUNICATOR • DESIGN THINKER • CREATIVE EXPLORER • 
        </motion.h2>
        <motion.h2 style={{ x: x2 }} className="text-[12vw] font-black uppercase leading-none tracking-tighter">
          ART DIRECTOR • MOTION GRAPHER • UI/UX ENTHUSIAST • 
        </motion.h2>
      </div>

      {/* Foreground Grid Layout */}
      <div className="w-full h-full relative z-10 flex flex-col md:flex-row items-center justify-between px-8 md:px-24 pt-20 md:pt-0">
        
        {/* Kolom Kiri: Teks Pernyataan */}
        <div className="w-full md:w-3/5 z-20 pb-10 md:pb-0 flex flex-col justify-center h-full">
          <p className="text-4xl md:text-5xl lg:text-[4.5rem] font-black text-[#050505] leading-[1.05] tracking-tighter text-left">
            I transform late-night <span className="italic font-light">coffee</span> into compelling <br className="hidden md:block" /><span className="underline decoration-4 md:decoration-8 underline-offset-8">visual identities</span>. 
          </p>
          <p className="text-xl md:text-2xl font-bold tracking-tight leading-relaxed text-[#050505]/50 mt-8 max-w-xl">
            Bridging the gap between aesthetic design and strategic communication.
          </p>

          <a 
            href="/about"
            className="mt-12 inline-flex items-center justify-center gap-3 bg-[#050505] text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs md:text-sm hover:scale-105 hover:bg-accent transition-all duration-300 w-fit group shadow-xl"
          >
            More About Me
            <span className="group-hover:translate-x-2 transition-transform duration-300">&rarr;</span>
          </a>
        </div>

        {/* Kolom Kanan: Foto Profil (Anchor di bawah) */}
        <div className="w-full md:w-2/5 h-[350px] md:h-full relative flex items-end justify-center md:justify-end z-20">
          <img 
            src="/assets/images/zulyan-profile.png" 
            alt="Muhammad Zulyan Fakih" 
            className="w-auto h-full md:h-[95%] max-w-none object-contain object-bottom absolute bottom-0 right-0 md:-right-10 grayscale hover:grayscale-0 transition-all duration-700 drop-shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
          />
        </div>
        
      </div>
    </section>
  );
}
