"use client";
import { motion } from "framer-motion";
import Footer from "@/components/ui/Footer";
import { Briefcase, GraduationCap, Trophy, Sparkles, Mail, ArrowUpRight, Layers } from "lucide-react";
import Link from "next/link";

const ABOUT_DATA = {
  aboutStory: [
    "A Creative Designer with a strong foundation in visual communication, dedicated to crafting impactful digital experiences. Specializing in the intersection of aesthetic design and strategic content creation, the professional focus ranges from conceptualizing promotional campaigns to developing engaging video narratives.",
    "Driven by modern internet culture and dynamic digital engagement, the ultimate goal is to transform complex ideas into compelling, relatable visual solutions for contemporary audiences. Every project is approached with passion, strategic thinking, and meticulous attention to detail."
  ],
  skillsList: [
    "Graphic Design", "Brand & Identity", "Digital Illustration", 
    "Video Editing", "Art Direction", "UI/UX Design", "Web Design", 
    "Campaign & Promotion", "Typography", "Digital Imaging", 
    "Storyboarding", "Content Creation", "AI-Assisted Design"
  ],
  toolsList: [
    { name: "Adobe Creative Cloud", url: "/assets/images/adobe-logo.png" },
    { name: "Figma", url: "https://cdn.simpleicons.org/figma/white" },
    { name: "Framer", url: "https://cdn.simpleicons.org/framer/white" },
    { name: "Clip Studio Paint", url: "/assets/images/csp-logo.png" },
    { name: "CapCut", url: "/assets/images/capcut-logo.png" },
    { name: "Canva", url: "/assets/images/canva-logo.png" },
    { name: "ChatGPT", url: "/assets/images/chatgpt-logo.png" },
    { name: "Gemini", url: "https://cdn.simpleicons.org/googlegemini/white" },
    { name: "Magnific AI", url: "/assets/images/magnific-logo.png" },
    { name: "Trello", url: "https://cdn.simpleicons.org/trello/white" },
    { name: "Google Workspace", url: "https://cdn.simpleicons.org/google/white" }
  ],
  experiences: [
    {
      role: "Creative Lead",
      company: "PT Onstudio Kreatif Digital",
      period: "2024 — Present",
      description: "Directing creative vision, brand identity systems, digital illustration, and multimedia campaigns for prominent clients including Sinar Mas, Rynest Tech, Asteka, and Binkei. Managing design workflows and cross-functional creative collaboration.",
      tags: ["Creative Direction", "Brand Strategy", "Art Direction", "Team Leadership"]
    },
    {
      role: "Graphic & Identity Designer",
      company: "Dies Natalis UPJ 14th & 11th Graduation",
      period: "2024 — 2025",
      description: "Formulated the comprehensive cultural visual identity, stage ambiance, and traditional ornament system (Kuntul Perak & Talawang) for Universitas Pembangunan Jaya's 14th Dies Natalis & 11th Graduation Ceremony.",
      tags: ["Identity Design", "Cultural Ornaments", "Event Branding", "Print & Stage"]
    },
    {
      role: "Design Team Specialist",
      company: "Dekalcer UPJ (Design Space)",
      period: "Feb 2023 — Oct 2023",
      description: "Contributed to graphic design, ideas development, and visual assets production for the Design Space Exhibition Dekalcer 2023 (The Harmony of Bali), supporting exhibition identity and digital promotional collaterals.",
      tags: ["Graphic Design", "Ideas Development", "Exhibition Design", "Visual Assets"]
    },
    {
      role: "Freelance Creative Designer",
      company: "Self-Employed (Zulyanify)",
      period: "2022 — Present",
      description: "Delivering bespoke branding, viral short-form video editing (Reels & TikTok), motion graphics, and digital marketing assets for independent creative projects and businesses.",
      tags: ["Video Editing", "Motion Graphics", "Branding", "Digital Illustration"]
    }
  ],
  education: [
    {
      degree: "Bachelor of Visual Communication Design (DKV)",
      institution: "Universitas Pembangunan Jaya (UPJ)",
      period: "2022 — Present",
      description: "Focusing on brand identity, digital media innovation, visual semiotics, motion graphics, and interactive media design. Active in creative entrepreneurship, academic research, and campus-wide visual production."
    }
  ],
  awards: [
    {
      title: "P2MW Entrepreneurship Grant Awardee",
      issuer: "Kemendikbudristek",
      year: "2025",
      description: "Selected and funded for outstanding creative business innovation and digital design studio development (Onstudio)."
    },
    {
      title: "Best Cultural Visual Identity",
      issuer: "Universitas Pembangunan Jaya",
      year: "2025",
      description: "Commended for the exemplary fusion of Indonesian cultural motifs with contemporary event branding for UPJ 2025 Graduation Ceremony."
    },
    {
      title: "Published Academic Contributor",
      issuer: "Visual Semiotics",
      year: "2025",
      description: "Recognized for research contribution and published scholarly work analyzing visual communication, semiotics, and community identity."
    }
  ]
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050505] selection:bg-[#FF3366] selection:text-white font-sans text-white overflow-hidden">
      
      {/* 
        ================= HERO SECTION =================
      */}
      <section className="pt-32 md:pt-48 px-6 md:px-16 lg:px-24 max-w-screen-2xl mx-auto">
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start"
        >
          {/* FOTO PROFILE */}
          <motion.div variants={fadeInUp} className="lg:col-span-5 w-full relative group perspective-1000">
            <div className="w-full aspect-[4/5] rounded-[2rem] overflow-hidden bg-[#111] relative z-10 shadow-2xl border border-white/10 group-hover:border-white/30 transition-all duration-700">
              <img 
                src="/assets/images/about-me-hero.png" 
                alt="Muhammad Zulyan Fakih" 
                className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>
              
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-[#FF3366] font-bold tracking-widest text-sm uppercase mb-2">Creative Designer</p>
                <h2 className="text-3xl font-black uppercase leading-none">M. Zulyan Fakih</h2>
              </div>
            </div>
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#FF3366] blur-[120px] opacity-20 -z-10 rounded-full group-hover:opacity-40 transition-opacity duration-700"></div>
          </motion.div>

          {/* BIO TEXT */}
          <motion.div variants={fadeInUp} className="lg:col-span-7 flex flex-col justify-center pt-4 lg:pt-12">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-12">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/30">Mind</span> <br/> 
              Behind <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#FF3366] to-[#ff80a0]">The Design.</span>
            </h1>

            <div className="flex flex-col gap-8 text-lg md:text-xl lg:text-2xl font-light text-white/70 leading-relaxed max-w-3xl">
              {ABOUT_DATA.aboutStory.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="mt-16 flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold uppercase tracking-widest rounded-full hover:bg-[#FF3366] hover:text-white transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,51,102,0.4)] hover:scale-105">
                <Mail size={18} /> Get in Touch
              </Link>
              <Link href="/works" className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/20 text-white font-bold uppercase tracking-widest rounded-full hover:bg-white/10 transition-all hover:scale-105">
                View Portfolio <ArrowUpRight size={18} />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 
        ================= SKILLS & SOFTWARE SECTION =================
      */}
      <section className="mt-32 md:mt-48 px-6 md:px-16 lg:px-24 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* SKILLS SET */}
          <div>
            <div className="flex items-center gap-4 mb-10 border-b border-white/10 pb-6">
              <Sparkles className="text-[#FF3366]" size={28} />
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">Skills Set</h2>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {ABOUT_DATA.skillsList.map((skill, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="px-5 py-2.5 md:px-6 md:py-3 rounded-full border border-white/10 bg-white/5 text-xs md:text-sm font-bold tracking-widest hover:border-[#FF3366] hover:bg-[#FF3366]/10 hover:text-[#FF3366] transition-all cursor-default"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>

          {/* SOFTWARE STACK */}
          <div>
            <div className="flex items-center gap-4 mb-10 border-b border-white/10 pb-6">
              <Layers className="text-[#FF3366]" size={28} />
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">Software Stack</h2>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {ABOUT_DATA.toolsList.map((tool, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex items-center gap-3 px-5 py-2.5 md:px-6 md:py-3 rounded-full border border-white/10 bg-white/5 text-xs md:text-sm font-bold tracking-widest hover:border-[#FF3366] hover:bg-[#FF3366]/10 hover:text-[#FF3366] transition-all cursor-default group"
                >
                  <img src={tool.url} alt={tool.name} className="w-5 h-5 object-contain opacity-70 group-hover:opacity-100 transition-opacity" />
                  {tool.name}
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 
        ================= EXPERIENCES SECTION =================
      */}
      <section className="mt-32 md:mt-48 px-6 md:px-16 lg:px-24 max-w-screen-2xl mx-auto">
        <div className="flex items-center gap-4 mb-16 border-b border-white/10 pb-8">
          <Briefcase className="text-[#FF3366]" size={32} />
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Experiences</h2>
        </div>

        <div className="flex flex-col">
          {ABOUT_DATA.experiences.map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row gap-6 md:gap-16 py-12 border-b border-white/10 group hover:bg-white/[0.02] transition-colors px-4 md:px-8 -mx-4 md:-mx-8 rounded-2xl"
            >
              <div className="w-full md:w-1/4 shrink-0">
                <span className="inline-block px-4 py-2 rounded-full border border-white/20 text-xs md:text-sm font-bold tracking-widest text-white/50 mb-4 bg-black">
                  {exp.period}
                </span>
              </div>
              <div className="w-full md:w-3/4">
                <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight mb-2 group-hover:text-[#FF3366] transition-colors">{exp.role}</h3>
                <h4 className="text-lg md:text-xl font-medium text-white/50 mb-6 italic">{exp.company}</h4>
                <p className="text-base md:text-lg text-white/70 leading-relaxed mb-8 max-w-3xl">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag, j) => (
                    <span key={j} className="text-[10px] md:text-xs font-bold uppercase tracking-widest px-3 py-1.5 border border-white/10 rounded-md text-white/40 group-hover:border-white/20 group-hover:text-white/60 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 
        ================= EDUCATION & AWARDS GRID =================
      */}
      <section className="mt-32 md:mt-48 mb-32 md:mb-48 px-6 md:px-16 lg:px-24 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* EDUCATION */}
          <div>
            <div className="flex items-center gap-4 mb-12 border-b border-white/10 pb-8">
              <GraduationCap className="text-[#FF3366]" size={32} />
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">Education</h2>
            </div>
            <div className="flex flex-col gap-8">
              {ABOUT_DATA.education.map((edu, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-[#111] border border-white/5 p-8 md:p-10 rounded-[2rem] hover:border-white/20 transition-colors"
                >
                  <span className="text-[#FF3366] font-bold text-sm tracking-widest block mb-4">{edu.period}</span>
                  <h3 className="text-xl md:text-2xl font-black uppercase mb-2">{edu.degree}</h3>
                  <h4 className="text-white/50 font-medium mb-6">{edu.institution}</h4>
                  <p className="text-white/70 leading-relaxed text-sm md:text-base">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* AWARDS */}
          <div>
            <div className="flex items-center gap-4 mb-12 border-b border-white/10 pb-8">
              <Trophy className="text-[#FF3366]" size={32} />
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">Awards</h2>
            </div>
            <div className="flex flex-col gap-8">
              {ABOUT_DATA.awards.map((award, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#111] border border-white/5 p-8 md:p-10 rounded-[2rem] hover:border-white/20 transition-colors group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[#FF3366] font-bold text-sm tracking-widest">{award.year}</span>
                    <Trophy size={20} className="text-white/10 group-hover:text-[#FF3366] transition-colors" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-black uppercase mb-2">{award.title}</h3>
                  <h4 className="text-white/50 font-medium mb-6">{award.issuer}</h4>
                  <p className="text-white/70 leading-relaxed text-sm md:text-base">{award.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
