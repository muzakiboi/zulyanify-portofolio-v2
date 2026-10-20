import HeroCanvas from "@/components/3d/HeroCanvas";
import WorksGallery from "@/components/ui/WorksGallery";
import PhysicsSkills from "@/components/3d/PhysicsSkills";
import SkillSet from "@/components/ui/SkillSet";
import AboutSection from "@/components/ui/AboutSection";
import ServicesSection from "@/components/ui/ServicesSection";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="relative bg-background font-sans selection:bg-accent selection:text-white">
      
      {/* 
        ============= HERO SECTION ============= 
      */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <HeroCanvas />
        <div className="z-10 flex flex-col items-center mix-blend-difference pointer-events-none">
          <h1 className="text-[16vw] leading-none font-black tracking-tighter uppercase text-white drop-shadow-2xl">
            Zulyan<span className="text-accent">.</span>
          </h1>
          <p className="text-xl md:text-3xl font-light tracking-widest mt-2 uppercase text-white/80">
            Creative Designer
          </p>
        </div>
      </section>

      {/* 
        ============= ABOUT / BIO SECTION ============= 
      */}
      <AboutSection />

      {/* 
        ============= 3D CARDS GALLERY SECTION ============= 
      */}
      <WorksGallery />

      {/* 
        ============= 3D PHYSICS SKILLS SECTION ============= 
      */}
      <PhysicsSkills />


      {/* 
        ============= SERVICES SECTION ============= 
      */}
      <ServicesSection />

      {/* 
        ============= FOOTER ============= 
      */}
      <Footer />

    </main>
  );
}
