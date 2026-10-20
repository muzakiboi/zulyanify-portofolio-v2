"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Play } from "lucide-react";

export default function ProjectReels({ reels, variant = "phone" }: { reels: string[], variant?: "phone" | "square" }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!reels || reels.length === 0) return null;

  const nextVideo = () => setCurrentIndex((prev) => (prev + 1) % reels.length);
  const prevVideo = () => setCurrentIndex((prev) => (prev === 0 ? reels.length - 1 : prev - 1));

  // Penyesuaian layout berdasarkan varian
  const isSquare = variant === "square";
  const containerClasses = isSquare 
    ? "w-full max-w-2xl aspect-square md:aspect-square rounded-[1.5rem] md:rounded-[2rem] border border-white/10"
    : "w-[280px] md:w-[320px] aspect-[9/16] rounded-[2.5rem] md:rounded-[3rem] border-[8px] border-[#1a1a1a]";

  const modalContainerClasses = isSquare
    ? "relative w-full max-w-4xl h-full max-h-[85vh] bg-black rounded-[2rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.8)] border border-white/10 flex items-center justify-center"
    : "relative w-full max-w-sm md:max-w-md h-full max-h-[85vh] bg-black rounded-[2rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.8)] border border-white/10 flex items-center justify-center";

  return (
    <div className={`w-full ${isSquare ? 'py-12' : 'py-24'} flex flex-col items-center bg-[#050505] relative overflow-hidden ${!isSquare ? 'border-t border-white/5 mt-8' : ''}`}>
       
       {!isSquare && (
         <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter mb-12 z-10 text-center px-4">
           Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF3366] to-white italic">Reels</span>
         </h3>
       )}
       
       <div className={`relative flex items-center justify-center w-full ${isSquare ? 'px-8 md:px-16' : 'max-w-2xl px-4'} z-10`}>
         
         {/* Tombol Kiri */}
         {reels.length > 1 && (
           <button onClick={prevVideo} className="absolute left-4 md:left-12 w-12 h-12 md:w-14 md:h-14 bg-white/5 hover:bg-[#FF3366] border border-white/10 hover:border-[#FF3366] rounded-full flex items-center justify-center text-white transition-all z-20 shadow-xl hover:scale-110">
             <ChevronLeft size={28} />
           </button>
         )}

         {/* Video Container (Bisa Phone atau Square) */}
         <div 
           className={`${containerClasses} overflow-hidden shadow-[0_30px_60px_rgba(255,51,102,0.15)] relative bg-black cursor-pointer group`}
           onClick={() => setIsModalOpen(true)}
         >
            <AnimatePresence mode="wait">
              <motion.video 
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                src={reels[currentIndex]} 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover opacity-90 group-hover:opacity-40 transition-opacity duration-300"
              />
            </AnimatePresence>
            
            {/* Play Icon Overlay (Muncul saat hover) */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#FF3366]/90 backdrop-blur-md flex items-center justify-center text-white shadow-[0_0_30px_rgba(255,51,102,0.6)] pl-1 md:pl-2">
                <Play size={36} fill="currentColor" />
              </div>
            </div>
            
            {/* Overlay UI Reels ala Instagram (Hanya untuk versi Phone) */}
            {!isSquare && (
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none flex flex-col justify-between p-4 group-hover:opacity-0 transition-opacity">
                 <div className="flex justify-between items-center mt-2">
                   <div className="text-white text-[10px] font-bold tracking-widest uppercase shadow-black drop-shadow-md">Reels</div>
                   <div className="w-5 h-5 rounded-md border border-white/30 flex justify-center items-center">
                     <div className="w-1 h-1 bg-white rounded-full"></div>
                   </div>
                 </div>
                 <div className="flex flex-col gap-2 mb-2">
                    <div className="flex items-center gap-2">
                       <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-md"></div>
                       <div className="h-2 w-24 rounded-full bg-white/20 backdrop-blur-md"></div>
                    </div>
                    <div className="h-2 w-48 rounded-full bg-white/20 backdrop-blur-md"></div>
                 </div>
              </div>
            )}
         </div>

         {/* Tombol Kanan */}
         {reels.length > 1 && (
           <button onClick={nextVideo} className="absolute right-4 md:right-12 w-12 h-12 md:w-14 md:h-14 bg-white/5 hover:bg-[#FF3366] border border-white/10 hover:border-[#FF3366] rounded-full flex items-center justify-center text-white transition-all z-20 shadow-xl hover:scale-110">
             <ChevronRight size={28} />
           </button>
         )}
       </div>

       {/* Indikator Titik (Dots) */}
       {reels.length > 1 && (
         <div className="flex gap-2 mt-8 z-10">
           {reels.map((_, i) => (
             <div 
               key={i} 
               onClick={() => setCurrentIndex(i)}
               className={`h-2 rounded-full transition-all cursor-pointer ${i === currentIndex ? 'bg-[#FF3366] w-8' : 'bg-white/20 w-2 hover:bg-white/50'}`} 
             />
           ))}
         </div>
       )}
       
       {/* Ambient background glow */}
       {!isSquare && (
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#FF3366] blur-[150px] opacity-10 pointer-events-none rounded-full"></div>
       )}

       {/* MODAL FULLSCREEN UNTUK VIDEO BERSUARA */}
       <AnimatePresence>
         {isModalOpen && (
           <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
           >
             <button 
               onClick={() => setIsModalOpen(false)}
               className="absolute top-6 right-6 md:top-10 md:right-10 w-12 h-12 bg-white/10 hover:bg-[#FF3366] rounded-full flex items-center justify-center text-white transition-colors z-[110]"
             >
               <X size={24} />
             </button>

             <motion.div 
               initial={{ scale: 0.9, y: 50 }}
               animate={{ scale: 1, y: 0 }}
               exit={{ scale: 0.9, y: 50 }}
               className={modalContainerClasses}
             >
               {/* Video di dalam Modal (Ada suara & bisa dikontrol) */}
               <video 
                 src={reels[currentIndex]} 
                 autoPlay 
                 controls 
                 playsInline
                 className="w-full h-full object-contain"
               ></video>
             </motion.div>
           </motion.div>
         )}
       </AnimatePresence>
    </div>
  );
}
