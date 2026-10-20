"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2, ChevronLeft, ChevronRight, Sparkles, Volume2, VolumeX, Play } from "lucide-react";

interface GalleryItem {
  title: string;
  url: string;
  type?: "image" | "video";
}

interface Category {
  id: string;
  title: string;
  direction: number;
  previewImages: string[];
  items: GalleryItem[];
}

const GALLERY_CATEGORIES: Category[] = [
  {
    id: "graphic-design",
    title: "Graphic Design",
    direction: -1,
    previewImages: [
      "/assets/images/gallery/graphic-design/pocari-poster-1.webp",
      "/assets/images/gallery/graphic-design/kahf-face-wash-1.webp",
      "/assets/images/gallery/graphic-design/azarine-sunscreen-1.webp",
      "/assets/images/gallery/graphic-design/originote-bundle-1.webp",
      "/assets/images/gallery/graphic-design/solara-sunscreen-1.webp",
      "/assets/images/gallery/graphic-design/juice-co-ads-drink-1.webp",
      "/assets/images/gallery/graphic-design/pocari-poster-2.webp"
    ],
    items: [
      // === Personal Commercial Poster Collection (Featured First) ===
      { title: "Pocari Sweat Commercial Poster 01", url: "/assets/images/gallery/graphic-design/pocari-poster-1.webp" },
      { title: "Pocari Sweat Commercial Poster 02", url: "/assets/images/gallery/graphic-design/pocari-poster-2.webp" },
      { title: "Pocari Sweat Commercial Poster 03", url: "/assets/images/gallery/graphic-design/pocari-poster-3.webp" },
      { title: "Pocari Sweat Commercial Poster 04", url: "/assets/images/gallery/graphic-design/pocari-poster-4.webp" },
      { title: "Pocari Sweat Commercial Poster 05", url: "/assets/images/gallery/graphic-design/pocari-poster-5.webp" },
      { title: "Kahf Men Face Wash Commercial 01", url: "/assets/images/gallery/graphic-design/kahf-face-wash-1.webp" },
      { title: "Kahf Men Face Wash Commercial 02", url: "/assets/images/gallery/graphic-design/kahf-face-wash-2.webp" },
      { title: "Kahf Men Face Wash Commercial 03", url: "/assets/images/gallery/graphic-design/kahf-face-wash-3.webp" },
      { title: "The Originote Serum Commercial 01", url: "/assets/images/gallery/graphic-design/originote-serum-1.webp" },
      { title: "The Originote Serum Commercial 02", url: "/assets/images/gallery/graphic-design/originote-serum-2.webp" },
      { title: "The Originote Product Bundle 01", url: "/assets/images/gallery/graphic-design/originote-bundle-1.webp" },
      { title: "The Originote Product Bundle 02", url: "/assets/images/gallery/graphic-design/originote-bundle-2.webp" },
      { title: "The Originote Product Bundle 03", url: "/assets/images/gallery/graphic-design/originote-bundle-3.webp" },
      { title: "The Originote Product Bundle 04", url: "/assets/images/gallery/graphic-design/originote-bundle-4.webp" },
      { title: "Azarine Sunscreen Commercial 01", url: "/assets/images/gallery/graphic-design/azarine-sunscreen-1.webp" },
      { title: "Azarine Sunscreen Commercial 02", url: "/assets/images/gallery/graphic-design/azarine-sunscreen-2.webp" },
      { title: "Azarine Sunscreen Commercial 03", url: "/assets/images/gallery/graphic-design/azarine-sunscreen-3.webp" },
      { title: "Solara Sunscreen Campaign Poster 01", url: "/assets/images/gallery/graphic-design/solara-sunscreen-1.webp" },
      { title: "Solara Sunscreen Campaign Poster 02", url: "/assets/images/gallery/graphic-design/solara-sunscreen-2.webp" },
      { title: "Solara Sunscreen Campaign Poster 03", url: "/assets/images/gallery/graphic-design/solara-sunscreen-3.webp" },
      { title: "Juice Co Commercial Drink Poster", url: "/assets/images/gallery/graphic-design/juice-co-ads-drink-1.webp" },

      // === Previous Graphic Design Works ===
      { title: "Dekalcer Poster Variant 01", url: "/assets/images/gallery/graphic-design/dekalcer-poster-1.webp" },
      { title: "Dekalcer Poster Variant 02", url: "/assets/images/gallery/graphic-design/dekalcer-poster-2.webp" },
      { title: "Dekalcer Poster Variant 03", url: "/assets/images/gallery/graphic-design/dekalcer-poster-3.webp" },
      { title: "Kopi Kenangan Commercial Concept", url: "/assets/images/gallery/graphic-design/kopi-kenangan-concept-design.webp" },
      { title: "Destruction Art — The Joker", url: "/assets/images/gallery/graphic-design/destruction-art-joker.webp" },
      { title: "Expression of Bali Cultural Poster", url: "/assets/images/gallery/graphic-design/poster-expression-of-the-beauty-of-bali.webp" },
      { title: "Banner Portrait Onstudio", url: "/assets/images/gallery/graphic-design/banner-potrait-onstudio.webp" },
      { title: "Mini X-Banner Onstudio", url: "/assets/images/gallery/graphic-design/mini-xbanner-onstudio.webp" },
      { title: "Digital Promotional Poster A3", url: "/assets/images/gallery/graphic-design/poster-digital-a3-onstudio.webp" },
      { title: "Apparel & T-Shirt Design", url: "/assets/images/gallery/graphic-design/design-tshirt.webp" },
      { title: "Vintage Poster — Fishing Concept", url: "/assets/images/gallery/graphic-design/fishing-old.webp" },
      { title: "Typography Artwork — Freedom", url: "/assets/images/gallery/graphic-design/typography-freedom.webp" },
      { title: "Cover Book Graduation SMKN 4", url: "/assets/images/gallery/graphic-design/cover-book-graduation-smkn4.webp" },
      { title: "Event Official ID Card Design", url: "/assets/images/gallery/graphic-design/id-card-design.webp" },
      { title: "Official Event Lanyard System", url: "/assets/images/gallery/graphic-design/lanyard-design.webp" },
      { title: "Stationery & Name Card Onstudio", url: "/assets/images/gallery/graphic-design/name-card-onstudio.webp" },
      { title: "Social Media Campaign Carousel", url: "/assets/images/gallery/graphic-design/social-media-carousel-1.webp" },
      { title: "Invitation Concept Card", url: "/assets/images/gallery/graphic-design/invitation-baby-shower.webp" },
      { title: "Warung Almatiinu Ting-Ting Packaging", url: "/assets/images/gallery/graphic-design/warung-almatiinu-tingting-kacang.webp" }
    ]
  },
  {
    id: "illustration",
    title: "Illustration",
    direction: 1,
    previewImages: [
      "/assets/images/gallery/illustration/bali-a3.png",
      "/assets/images/gallery/illustration/illustration-1.png",
      "/assets/images/gallery/illustration/illustration-2.png",
      "/assets/images/gallery/illustration/illustration-3.png",
      "/assets/images/gallery/illustration/illustration-4.png",
      "/assets/images/gallery/illustration/illustration-5.png"
    ],
    items: [
      { title: "Harmony of Bali Cultural A3", url: "/assets/images/gallery/illustration/bali-a3.png" },
      { title: "Editorial Book Illustration", url: "/assets/images/gallery/illustration/cover-book-1.png" },
      { title: "Character Visual Exploration 01", url: "/assets/images/gallery/illustration/illustration-1.png" },
      { title: "Character Visual Exploration 02", url: "/assets/images/gallery/illustration/illustration-2.png" },
      { title: "Character Visual Exploration 03", url: "/assets/images/gallery/illustration/illustration-3.png" },
      { title: "Character Visual Exploration 04", url: "/assets/images/gallery/illustration/illustration-4.png" },
      { title: "Character Visual Exploration 05", url: "/assets/images/gallery/illustration/illustration-5.png" },
      { title: "Digital Painting Study 06", url: "/assets/images/gallery/illustration/illustration-6.png" },
      { title: "Digital Painting Study 07", url: "/assets/images/gallery/illustration/illustration-7.png" },
      { title: "Atmosphere Art Study 08", url: "/assets/images/gallery/illustration/illustration-8.png" },
      { title: "Vector & Brush Art Study 09", url: "/assets/images/gallery/illustration/illustration-9.png" },
      { title: "Pop Art Illustration 10", url: "/assets/images/gallery/illustration/illustration-10.png" },
      { title: "Expressive Portrait Study 11", url: "/assets/images/gallery/illustration/illustration-11.png" },
      { title: "Stylized Vector Artwork 12", url: "/assets/images/gallery/illustration/illustration-12.png" },
      { title: "Mask Group Visual Concept", url: "/assets/images/gallery/illustration/Mask group.png" },
      { title: "Mask Group Secondary Concept", url: "/assets/images/gallery/illustration/Mask group-1.png" },
      { title: "Geometric Framed Composition", url: "/assets/images/gallery/illustration/Frame 1171275602.png" }
    ]
  },
  {
    id: "logo-design",
    title: "Logo Design",
    direction: -1,
    previewImages: [
      "/assets/images/gallery/logo-design/hut-tangsel-15-concept-logo.png",
      "/assets/images/gallery/logo-design/kementerian-kebudayaan-concept-logo.png",
      "/assets/images/gallery/logo-design/kementerian-koperasi-concept-logo.png",
      "/assets/images/gallery/logo-design/la-delis-batter-logo.png",
      "/assets/images/gallery/logo-design/muzaki-logo.png",
      "/assets/images/gallery/logo-design/syne-telkom-indonesia-concept-logo.png"
    ],
    items: [
      { title: "HUT Kota Tangerang Selatan 15th Concept", url: "/assets/images/gallery/logo-design/hut-tangsel-15-concept-logo.png" },
      { title: "Kementerian Kebudayaan Identity Concept", url: "/assets/images/gallery/logo-design/kementerian-kebudayaan-concept-logo.png" },
      { title: "Kementerian Koperasi Modern Rebrand", url: "/assets/images/gallery/logo-design/kementerian-koperasi-concept-logo.png" },
      { title: "La Delis Batter Artisanal Bakery Logo", url: "/assets/images/gallery/logo-design/la-delis-batter-logo.png" },
      { title: "Muzaki Creative Personal Monogram", url: "/assets/images/gallery/logo-design/muzaki-logo.png" },
      { title: "Syne — Telkom Indonesia Identity Proposal", url: "/assets/images/gallery/logo-design/syne-telkom-indonesia-concept-logo.png" }
    ]
  },
  {
    id: "ui-ux",
    title: "UI / UX",
    direction: 1,
    previewImages: [
      "/assets/images/gallery/ui-ux/hero-phone.png",
      "/assets/images/gallery/ui-ux/rynest-hero.png",
      "/assets/images/gallery/ui-ux/ui-design-process-1.png",
      "/assets/images/gallery/ui-ux/ui-design-process-2.png",
      "/assets/images/gallery/ui-ux/ui-feed-1.png",
      "/assets/images/gallery/ui-ux/ui-feed-2.png"
    ],
    items: [
      { title: "Mobile Application Interface Concept", url: "/assets/images/gallery/ui-ux/hero-phone.png" },
      { title: "Rynest Tech SaaS Landing Hero", url: "/assets/images/gallery/ui-ux/rynest-hero.png" },
      { title: "Wireframing & UX Architecture Phase 01", url: "/assets/images/gallery/ui-ux/ui-design-process-1.png" },
      { title: "Design System & Component Specs Phase 02", url: "/assets/images/gallery/ui-ux/ui-design-process-2.png" },
      { title: "Social Feeds Interface Layout 01", url: "/assets/images/gallery/ui-ux/ui-feed-1.png" },
      { title: "Social Feeds Interface Layout 02", url: "/assets/images/gallery/ui-ux/ui-feed-2.png" }
    ]
  },
  {
    id: "video-editing",
    title: "Video Editing",
    direction: -1,
    previewImages: [
      "/assets/images/project-womenmoment/hero-womenmoment.png",
      "/assets/images/project-rynest/rynest-hero.png",
      "/assets/images/project-asteka/hero-asteka.png",
      "/assets/images/project-dekalcer/hero-decalcer.png"
    ],
    items: [
      { title: "Dekalcer UPJ 2023 Official Exhibition Recap", url: "/assets/videos/project-dekalcer/dekalcer-rekap-documentation.mp4", type: "video" },
      { title: "Women Moment Viral Fashion Reel 01", url: "/assets/videos/project-womenmoment/womenmoment-reels-1.mp4", type: "video" },
      { title: "Women Moment Viral Fashion Reel 02", url: "/assets/videos/project-womenmoment/womenmoment-reels-2.mp4", type: "video" },
      { title: "Rynest Tech Corporate Brand Reel 01", url: "/assets/videos/project-rynest/rynest-reels-1.mp4", type: "video" },
      { title: "Rynest Tech Corporate Brand Reel 02", url: "/assets/videos/project-rynest/rynest-reels-2.mp4", type: "video" },
      { title: "Asteka Insurance Promotional Reel", url: "/assets/videos/project-asteka/asteka-reels-1.mp4", type: "video" },
      { title: "Typecaster Social Media Campaign Reel", url: "/assets/videos/project-typecaster-campaign/typecaster-campaign-reels-1.mp4", type: "video" }
    ]
  }
];

export default function AnotherGallery() {
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [videoMuted, setVideoMuted] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Check URL hash on load
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        const found = GALLERY_CATEGORIES.find(c => c.id === hash);
        if (found) setActiveCategory(found);
      }
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (activeCategory || lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeCategory, lightboxIndex]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (lightboxIndex !== null) {
          setLightboxIndex(null);
        } else if (activeCategory) {
          setActiveCategory(null);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeCategory, lightboxIndex]);

  const openCategory = (category: Category) => {
    setActiveCategory(category);
    setLightboxIndex(null);
  };

  const closeCategory = () => {
    setActiveCategory(null);
    setLightboxIndex(null);
    if (window.location.hash) {
      window.history.pushState(null, "", window.location.pathname);
    }
  };

  return (
    <section className="relative w-full bg-[#050505] overflow-hidden flex flex-col pb-24">
      
      {/* Section Header */}
      <div className="px-[5vw] text-center relative z-20 py-20">
         <h2 className="text-sm font-bold text-[#FF3366] tracking-[0.3em] uppercase flex items-center justify-center gap-4">
           <span className="w-12 h-px bg-[#FF3366]"></span> Media Archives <span className="w-12 h-px bg-[#FF3366]"></span>
         </h2>
         <p className="text-white/40 text-xs md:text-sm tracking-widest uppercase mt-3">
           Click any category below to explore the complete gallery
         </p>
      </div>

      {/* Interactive Category Sliders */}
      {GALLERY_CATEGORIES.map((cat, idx) => {
        const isVideoCat = cat.id === "video-editing";
        const marquee = isMobile 
          ? [...cat.previewImages.slice(0, 4), ...cat.previewImages.slice(0, 4)]
          : [...cat.previewImages, ...cat.previewImages];
        
        return (
          <div 
            key={idx} 
            onClick={() => openCategory(cat)}
            className="relative w-full h-[50vh] md:h-[70vh] flex items-center border-b border-white/5 overflow-hidden group cursor-pointer"
          >
            {/* Background Marquee / Video */}
            {isVideoCat ? (
              <div className="absolute inset-0 w-full h-full">
                <video 
                  src={isMobile ? undefined : "https://cdn.coverr.co/videos/coverr-typing-on-a-macbook-pro-2586/1080p.mp4"}
                  poster="/assets/images/project-womenmoment/hero-womenmoment.png"
                  autoPlay={!isMobile} 
                  loop 
                  muted 
                  playsInline
                  preload="none"
                  className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-1000 scale-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 pointer-events-none" />
              </div>
            ) : (
              <div className={`absolute flex ${isMobile ? 'w-[250vw]' : 'w-[200vw]'} ${cat.direction === 1 ? 'justify-end -ml-[120vw] md:-ml-[50vw]' : ''}`}>
                <motion.div 
                  className="flex gap-4 md:gap-8 px-4"
                  animate={{ x: cat.direction === 1 ? [-1600, 0] : [0, -1600] }}
                  transition={{ repeat: Infinity, duration: isMobile ? 30 : 45, ease: "linear" }}
                >
                  {marquee.map((img, i) => (
                    <div 
                      key={i} 
                      className="w-[200px] h-[280px] md:w-[350px] md:h-[450px] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shrink-0 grayscale group-hover:grayscale-0 transition-all duration-700 border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] group-hover:scale-105"
                    >
                      <img 
                        src={img} 
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover opacity-50 group-hover:opacity-90 transition-opacity duration-700" 
                        alt={cat.title} 
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
            )}

            {/* Interactive Foreground Button Badge */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-30 px-4 pointer-events-none">
               <div className="bg-black/75 backdrop-blur-md md:backdrop-blur-xl border border-white/15 px-8 py-5 md:px-20 md:py-8 rounded-full shadow-[0_30px_80px_rgba(0,0,0,0.9)] transform group-hover:scale-110 group-hover:border-[#FF3366] transition-all duration-500 flex flex-col items-center gap-2">
                  <h2 className="text-3xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none drop-shadow-2xl group-hover:text-white">
                    {cat.title}
                  </h2>
                  <div className="flex items-center gap-2 text-xs md:text-sm font-bold tracking-widest uppercase text-[#FF3366] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Sparkles size={14} /> Explore {cat.items.length} Works ↗
                  </div>
               </div>
            </div>

          </div>
        );
      })}

      {/* 
        ====================================================
        FULLSCREEN CATEGORY GALLERY MODAL
        ====================================================
      */}
      <AnimatePresence>
        {activeCategory && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[150] bg-[#050505] flex flex-col overflow-hidden"
          >
            {/* Top Bar Navigation (Cleanly above global header) */}
            <div className="shrink-0 w-full px-6 md:px-12 py-5 border-b border-white/10 flex items-center justify-between bg-[#080808] z-10 shadow-2xl">
              <div className="flex items-center gap-4">
                <button 
                  onClick={closeCategory}
                  className="px-4 py-2 rounded-full bg-white/10 hover:bg-[#FF3366] text-white flex items-center gap-2 text-xs font-bold uppercase tracking-wider transition-all hover:scale-105"
                  aria-label="Back"
                >
                  <ChevronLeft size={16} /> Back
                </button>
                <div>
                  <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter text-white leading-none">
                    {activeCategory.title}
                  </h3>
                  <p className="text-[10px] md:text-xs tracking-widest uppercase text-[#FF3366] font-bold mt-1">
                    {activeCategory.items.length} Archive Media Items
                  </p>
                </div>
              </div>

              {/* Category Quick Filter Pills */}
              <div className="hidden lg:flex items-center gap-2 bg-white/5 p-1 rounded-full border border-white/10">
                {GALLERY_CATEGORIES.map((c) => {
                  const isCurrent = c.id === activeCategory.id;
                  return (
                    <button
                      key={c.id}
                      onClick={() => setActiveCategory(c)}
                      className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                        isCurrent 
                          ? "bg-[#FF3366] text-white shadow-lg shadow-[#FF3366]/30" 
                          : "text-white/60 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {c.title}
                    </button>
                  );
                })}
              </div>

              {/* Close Button */}
              <button 
                onClick={closeCategory}
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#FF3366] text-white flex items-center justify-center transition-all hover:scale-110 shadow-lg"
                aria-label="Close Gallery"
              >
                <X size={22} />
              </button>
            </div>

            {/* Mobile Category Switcher Bar */}
            <div className="lg:hidden flex gap-2 px-6 py-3 border-b border-white/10 overflow-x-auto shrink-0 scrollbar-none bg-black/20">
              {GALLERY_CATEGORIES.map((c) => {
                const isCurrent = c.id === activeCategory.id;
                return (
                  <button
                    key={c.id}
                    onClick={() => setActiveCategory(c)}
                    className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                      isCurrent 
                        ? "bg-[#FF3366] text-white" 
                        : "bg-white/5 text-white/60 hover:text-white"
                    }`}
                  >
                    {c.title}
                  </button>
                );
              })}
            </div>

            {/* Gallery Media Grid (Scrollable Container) */}
            <div className="flex-1 overflow-y-auto px-6 md:px-12 py-10">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {activeCategory.items.map((item, i) => {
                    const isVideo = item.type === "video" || item.url.endsWith(".mp4");

                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.03 }}
                        onClick={() => setLightboxIndex(i)}
                        className="group relative rounded-2xl overflow-hidden bg-[#111] border border-white/10 hover:border-[#FF3366] transition-all duration-500 shadow-xl cursor-pointer aspect-[3/4] flex flex-col justify-end"
                      >
                        {isVideo ? (
                          <div className="absolute inset-0 w-full h-full bg-black">
                            <video
                              src={item.url}
                              muted
                              loop
                              playsInline
                              preload="metadata"
                              className="w-full h-full object-cover opacity-75 group-hover:opacity-100 transition-opacity"
                            />
                            {/* Play Icon Badge */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                              <div className="w-12 h-12 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center group-hover:bg-[#FF3366] group-hover:border-[#FF3366] transition-all shadow-2xl group-hover:scale-110">
                                <Play size={20} className="ml-1" />
                              </div>
                            </div>
                            <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold tracking-widest text-[#FF3366] uppercase border border-white/10">
                              REEL / VIDEO
                            </div>
                          </div>
                        ) : (
                          <img
                            src={item.url}
                            alt={item.title}
                            loading="lazy"
                            decoding="async"
                            className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-80 group-hover:opacity-100"
                          />
                        )}

                        {/* Card Gradient & Caption */}
                        <div className="relative z-10 p-5 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                          <h4 className="text-white font-bold text-sm tracking-tight group-hover:text-[#FF3366] transition-colors line-clamp-2">
                            {item.title}
                          </h4>
                          <p className="text-[11px] font-bold text-white/40 uppercase tracking-widest mt-1 flex items-center gap-1 group-hover:text-white/80 transition-colors">
                            <Maximize2 size={12} /> View Full Detail
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

      {/* 
        ====================================================
        LIGHTBOX ZOOM MODAL
        ====================================================
      */}
      <AnimatePresence>
        {activeCategory && lightboxIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-3xl flex items-center justify-center p-4 md:p-10"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Top Close & Counter */}
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-20" onClick={(e) => e.stopPropagation()}>
              <div className="text-sm font-bold tracking-widest uppercase text-white/70">
                {activeCategory.title} <span className="text-[#FF3366]">({lightboxIndex + 1} / {activeCategory.items.length})</span>
              </div>
              <button 
                onClick={() => setLightboxIndex(null)}
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#FF3366] text-white flex items-center justify-center transition-all hover:scale-110 shadow-2xl"
              >
                <X size={24} />
              </button>
            </div>

            {/* Left Prev Button */}
            {activeCategory.items.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((prev) => (prev! > 0 ? prev! - 1 : activeCategory.items.length - 1));
                }}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/30 text-white flex items-center justify-center transition-all z-20 hover:scale-110 backdrop-blur-md"
              >
                <ChevronLeft size={24} />
              </button>
            )}

            {/* Center Content: Image or Video */}
            <div 
              className="max-w-5xl max-h-[80vh] flex flex-col items-center justify-center relative z-10"
              onClick={(e) => e.stopPropagation()}
            >
              {activeCategory.items[lightboxIndex].type === "video" || activeCategory.items[lightboxIndex].url.endsWith(".mp4") ? (
                <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-black max-h-[75vh]">
                  <video
                    src={activeCategory.items[lightboxIndex].url}
                    controls
                    autoPlay
                    playsInline
                    className="max-h-[75vh] w-auto object-contain rounded-2xl"
                  />
                </div>
              ) : (
                <img
                  src={activeCategory.items[lightboxIndex].url}
                  alt={activeCategory.items[lightboxIndex].title}
                  className="max-h-[75vh] max-w-full object-contain rounded-2xl shadow-2xl border border-white/15"
                />
              )}
              <h4 className="text-white text-base md:text-lg font-bold uppercase tracking-wider mt-4 text-center">
                {activeCategory.items[lightboxIndex].title}
              </h4>
            </div>

            {/* Right Next Button */}
            {activeCategory.items.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((prev) => (prev! < activeCategory.items.length - 1 ? prev! + 1 : 0));
                }}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/30 text-white flex items-center justify-center transition-all z-20 hover:scale-110 backdrop-blur-md"
              >
                <ChevronRight size={24} />
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
