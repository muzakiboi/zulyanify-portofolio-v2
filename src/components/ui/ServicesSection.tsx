"use client";

const services = [
  { 
    title: "Brand Identity", 
    desc: "Crafting memorable logos, typography systems, and cohesive brand guidelines.",
    emoji: "🎯" 
  },
  { 
    title: "Art Direction & Production", 
    desc: "Directing visual narrative, aesthetic consistency, and high-standard creative execution.",
    emoji: "🎬" 
  },
  { 
    title: "Social Media Graphics", 
    desc: "Designing scroll-stopping feeds, promotional banners, and engaging social content.",
    emoji: "📱" 
  },
  { 
    title: "Digital Illustration", 
    desc: "Custom character design, expressive visual concepts, and bespoke vector artwork.",
    emoji: "🎨" 
  },
  { 
    title: "UI/UX Design", 
    desc: "Designing intuitive, aesthetic, and user-centered digital interfaces.",
    emoji: "💻" 
  },
  { 
    title: "Print & Merchs", 
    desc: "Tactile editorial layouts, packaging, apparel, and high-quality physical merchandise.",
    emoji: "📦" 
  }
];

export default function ServicesSection() {
  return (
    <section className="py-32 w-full bg-[#050505] relative px-[5vw] border-t border-white/5">
      <h2 className="text-sm font-bold text-[#FF3366] tracking-widest uppercase mb-16 flex items-center gap-4">
        <span className="w-12 h-px bg-[#FF3366]"></span> What I Do
      </h2>
      
      <div className="flex flex-col w-full relative z-10">
        {services.map((srv, i) => (
          <div 
            key={i} 
            data-cursor-emoji={srv.emoji}
            className="group border-b border-white/10 py-12 md:py-16 flex flex-col md:flex-row justify-between items-start md:items-center cursor-pointer hover:bg-white/[0.03] transition-colors px-4 md:px-8"
          >
            <h3 className="text-4xl md:text-7xl font-black text-white/30 group-hover:text-white transition-colors duration-500 tracking-tighter uppercase flex items-center">
              <span className="text-2xl md:hidden mr-3 inline-block select-none">{srv.emoji}</span>
              {srv.title}
            </h3>
            <p className="text-white/40 group-hover:text-white/80 max-w-sm text-sm md:text-base mt-4 md:mt-0 font-medium transition-colors duration-500">
              {srv.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
