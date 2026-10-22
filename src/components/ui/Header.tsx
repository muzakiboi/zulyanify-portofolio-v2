"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Kunci scroll body saat menu terbuka
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [isOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Works", path: "/works" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "mailto:mzulyanfakih90@gmail.com" }
  ];

  return (
    <>
      <header className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrolled ? "py-4 bg-[#050505]/80 backdrop-blur-md border-b border-white/5" : "py-8 bg-transparent"}`}>
        <div className="container mx-auto px-[5vw] flex justify-between items-center">
          <Link href="/" onClick={() => setIsOpen(false)} className="text-2xl font-black text-white tracking-tighter mix-blend-difference relative z-[101]">
            ZULYAN<span className="text-accent">.</span>
          </Link>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-[101] text-sm font-bold uppercase tracking-widest text-white mix-blend-difference hover:text-accent transition-colors"
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      {/* Fullscreen Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "tween", ease: [0.7, 0, 0.3, 1], duration: 0.8 }}
            className="fixed inset-0 z-[100] bg-[#050505] flex flex-col justify-center px-[10vw] border-b border-white/10"
          >
            <nav className="flex flex-col gap-6 md:gap-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.3 + (i * 0.1), duration: 0.5, ease: "easeOut" }}
                >
                  <Link 
                    href={link.path} 
                    onClick={() => setIsOpen(false)}
                    className="text-6xl md:text-8xl font-black text-white hover:text-accent transition-colors tracking-tighter uppercase inline-block"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-10 left-[10vw] flex flex-wrap gap-8 text-white/50 text-[10px] md:text-xs font-bold tracking-widest uppercase"
            >
              <a href="https://www.instagram.com/muzakiboi" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Instagram</a>
              <a href="https://www.linkedin.com/in/muhammad-zulyan-fakih-a91287174/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="https://www.behance.net/zulyanfakih90" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Behance</a>
              <a href="https://discord.com/users/662643259272593428" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Discord</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
