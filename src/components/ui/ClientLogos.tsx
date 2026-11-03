"use client";
import { motion } from "framer-motion";

const row1 = [
  { name: "BINKEI", src: "/assets/images/logo client/binkei.png" },
  { name: "Asteka", src: "/assets/images/logo client/asteka.png" },
  { name: "Tim Olimpiade Komputer Indonesia", src: "/assets/images/logo client/tim-olimpiade-komputer-indonesia.png" },
  { name: "Women Moment", src: "/assets/images/logo client/women-moment.png" },
  { name: "Sinarmas Land", src: "/assets/images/logo client/sinarmas-land.png" },
  { name: "Universitas Pembangunan Jaya", src: "/assets/images/logo client/universitas-pembangunan-jaya.png" },
];

const row2 = [
  { name: "Universitas Terbuka", src: "/assets/images/logo client/universitas-terbuka.png" },
  { name: "Seleris", src: "/assets/images/logo client/seleris.png" },
  { name: "Amoora Travel", src: "/assets/images/logo client/amoora-travel.png" },
  { name: "Rynest Tech", src: "/assets/images/logo client/rynest-tech.png" },
  { name: "On Studio", src: "/assets/images/logo client/on-studio.png" },
];

export default function ClientLogos() {
  // Repeat items for infinite seamless looping
  const marqueeRow1 = [...row1, ...row1, ...row1, ...row1];
  const marqueeRow2 = [...row2, ...row2, ...row2, ...row2];

  return (
    <section className="w-full bg-[#050505] py-14 md:py-20 overflow-hidden relative border-t border-b border-white/5">
      {/* Side Ambient Gradient Fade Masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-[#050505] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-[#050505] to-transparent z-10" />

      <div className="flex flex-col gap-8 md:gap-12 w-full">
        {/* Row 1: Leftward Scroll */}
        <div className="flex overflow-hidden select-none">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 32 }}
            className="flex items-center gap-10 md:gap-16 shrink-0 pr-10 md:pr-16"
          >
            {marqueeRow1.map((item, idx) => (
              <div key={idx} className="flex items-center gap-10 md:gap-16 shrink-0">
                <div className="h-7 sm:h-9 md:h-11 flex items-center justify-center">
                  <img
                    src={item.src}
                    alt={item.name}
                    className="max-h-full w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 filter brightness-95 hover:brightness-110"
                    loading="lazy"
                  />
                </div>
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4A373]/70 shrink-0" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2: Rightward Scroll */}
        <div className="flex overflow-hidden select-none">
          <motion.div
            animate={{ x: ["-50%", "0%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 32 }}
            className="flex items-center gap-10 md:gap-16 shrink-0 pr-10 md:pr-16"
          >
            {marqueeRow2.map((item, idx) => (
              <div key={idx} className="flex items-center gap-10 md:gap-16 shrink-0">
                <div className="h-7 sm:h-9 md:h-11 flex items-center justify-center">
                  <img
                    src={item.src}
                    alt={item.name}
                    className="max-h-full w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 filter brightness-95 hover:brightness-110"
                    loading="lazy"
                  />
                </div>
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4A373]/70 shrink-0" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
