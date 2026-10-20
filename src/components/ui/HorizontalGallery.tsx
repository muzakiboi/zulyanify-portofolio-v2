"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const projects = [
  { id: 1, title: "Dies Natalis UPJ 14th", category: "Identity Design", image: "/assets/images/graduation-upj-2025/upj-hero.png" },
  { id: 2, title: "Telkom Redesign", category: "Rebranding", image: "/assets/images/project-redesign-telkom-indonesia/hero-redesign-telkom-indonesia.png" },
  { id: 3, title: "Women Moment", category: "Video & Social", image: "/assets/images/project-womenmoment/hero-womenmoment.png" },
  { id: 4, title: "TypeCaster Campaign", category: "Digital Ads", image: "/assets/images/project-typecaster-campaign/hero-typecaster-campaign.png" }
];

export default function HorizontalGallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Calculate how far to scroll based on the width of the container
      const totalScroll = containerRef.current!.scrollWidth - window.innerWidth;
      
      gsap.to(containerRef.current, {
        x: -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          end: () => "+=" + totalScroll
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="h-screen w-full bg-background overflow-hidden flex flex-col justify-center relative">
      <div className="absolute top-12 left-[10vw] z-10 mix-blend-difference pointer-events-none">
        <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter">
          Selected Works
        </h2>
      </div>
      
      <div ref={containerRef} className="flex h-[55vh] md:h-[65vh] gap-10 px-[10vw] flex-nowrap w-max mt-20">
        {projects.map((proj) => (
          <div key={proj.id} className="relative h-full w-[85vw] md:w-[45vw] flex-shrink-0 group overflow-hidden bg-[#111] border border-white/5 cursor-pointer">
            <img 
              src={proj.image} 
              alt={proj.title} 
              className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out scale-105 group-hover:scale-100"
            />
            <div className="absolute bottom-0 left-0 p-8 mix-blend-difference pointer-events-none transition-transform duration-500 group-hover:translate-y-[-10px]">
              <p className="text-accent text-sm md:text-base font-bold tracking-widest uppercase mb-2">
                {proj.category}
              </p>
              <h3 className="text-3xl md:text-5xl text-white font-bold leading-none">
                {proj.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
