"use client";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Graphic Design",
    direction: -1, // Kiri
    images: [
      "/assets/images/gallery/graphic-design/banner-potrait-onstudio.png",
      "/assets/images/gallery/graphic-design/cover-book-graduation.png",
      "/assets/images/gallery/graphic-design/dekalcer-poster-1.png",
      "/assets/images/gallery/graphic-design/design-tshirt.png",
      "/assets/images/gallery/graphic-design/fishing-old.png",
      "/assets/images/gallery/graphic-design/id-card-design.png",
      "/assets/images/gallery/graphic-design/lanyard-design.png"
    ]
  },
  {
    title: "Illustration",
    direction: 1, // Kanan
    images: [
      "/assets/images/gallery/illustration/bali-a3.png",
      "/assets/images/gallery/illustration/illustration-1.png",
      "/assets/images/gallery/illustration/illustration-2.png",
      "/assets/images/gallery/illustration/illustration-3.png",
      "/assets/images/gallery/illustration/illustration-4.png",
      "/assets/images/gallery/illustration/illustration-5.png"
    ]
  },
  {
    title: "Logo Design",
    direction: -1,
    images: [
      "/assets/images/gallery/logo-design/hut-tangsel-15-concept.png",
      "/assets/images/gallery/logo-design/kementerian-kebudayaan.png",
      "/assets/images/gallery/logo-design/kementerian-koperasi.png",
      "/assets/images/gallery/logo-design/la-delis-batter-logo.png",
      "/assets/images/gallery/logo-design/muzaki-logo.png",
      "/assets/images/gallery/logo-design/syne-telkom-indonesia.png"
    ]
  },
  {
    title: "UI / UX",
    direction: 1,
    images: [
      "/assets/images/gallery/ui-ux/hero-phone.png",
      "/assets/images/gallery/ui-ux/rynest-hero.png",
      "/assets/images/gallery/ui-ux/ui-design-process-1.png",
      "/assets/images/gallery/ui-ux/ui-design-process-2.png",
      "/assets/images/gallery/ui-ux/ui-feed-1.png",
      "/assets/images/gallery/ui-ux/ui-feed-2.png"
    ]
  }
];

export default function AnotherGallery() {
  return (
    <section className="relative w-full bg-[#050505] overflow-hidden flex flex-col pb-20">
      
      <div className="px-[5vw] text-center relative z-20 py-20">
         <h2 className="text-sm font-bold text-[#FF3366] tracking-widest uppercase flex items-center justify-center gap-4">
           <span className="w-12 h-px bg-[#FF3366]"></span> Another Gallery <span className="w-12 h-px bg-[#FF3366]"></span>
         </h2>
      </div>

      {categories.map((cat, idx) => {
        // Duplikat gambar agar animasi looping tidak pernah terpotong
        const marquee = [...cat.images, ...cat.images, ...cat.images];
        
        return (
          <div key={idx} className="relative w-full h-[50vh] md:h-[70vh] flex items-center border-b border-white/5 overflow-hidden group">
            
            {/* Background Marquee */}
            <div className={`absolute flex w-[400vw] md:w-[200vw] ${cat.direction === 1 ? 'justify-end -ml-[150vw] md:-ml-[50vw]' : ''}`}>
              <motion.div 
                className="flex gap-4 md:gap-8 px-4"
                animate={{ x: cat.direction === 1 ? [-2000, 0] : [0, -2000] }}
                transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
              >
                {marquee.map((img, i) => (
                  <div key={i} className="w-[200px] h-[280px] md:w-[350px] md:h-[450px] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shrink-0 grayscale hover:grayscale-0 transition-all duration-700 border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                    <img src={img} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700" alt={cat.title} />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Foreground Glassmorphism Title */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30 px-4">
               <div className="bg-black/60 backdrop-blur-xl border border-white/10 px-10 py-6 md:px-24 md:py-10 rounded-full shadow-[0_30px_80px_rgba(0,0,0,0.8)] transform group-hover:scale-110 transition-transform duration-700">
                  <h2 className="text-3xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none drop-shadow-2xl">
                    {cat.title}
                  </h2>
               </div>
            </div>

          </div>
        );
      })}

      {/* Video Editing Section (Special Cinematic Background) */}
      <div className="relative w-full h-[50vh] md:h-[70vh] flex items-center border-b border-white/5 overflow-hidden group">
         
         <div className="absolute inset-0 w-full h-full">
            <video 
              src="https://cdn.coverr.co/videos/coverr-typing-on-a-macbook-pro-2586/1080p.mp4" 
              autoPlay loop muted playsInline
              className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
            ></video>
            <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>
         </div>

         {/* Foreground Glassmorphism Title */}
         <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30 px-4">
             <div className="bg-black/60 backdrop-blur-xl border border-white/10 px-10 py-6 md:px-24 md:py-10 rounded-full shadow-[0_30px_80px_rgba(0,0,0,0.8)] transform group-hover:scale-110 transition-transform duration-700">
                <h2 className="text-3xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none drop-shadow-2xl">
                  Video Editing
                </h2>
             </div>
          </div>
      </div>

    </section>
  );
}
