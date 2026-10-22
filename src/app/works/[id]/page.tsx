import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import ProjectReels from "@/components/ui/ProjectReels";
import ProjectRevealVideo from "@/components/ui/ProjectRevealVideo";

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export default async function WorkDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find(p => p.id === id);
  
  if (!project) return notFound();

  return (
    <main className="min-h-screen bg-[#050505] text-white flex flex-col md:flex-row font-sans">
      
      {/* 
        ================= LEFT COLUMN =================
        Berisi Judul, Gambar Cover, Badge, dan Deskripsi
      */}
      <div className="w-full md:w-1/2 md:h-screen md:sticky top-0 px-8 py-12 md:p-16 flex flex-col overflow-y-auto border-r border-white/5 bg-[#050505] z-10 pt-32 md:pt-32 scrollbar-hide">
        
        <div className="max-w-xl mx-auto md:mx-0 w-full">
          {/* Tombol Back */}
          <Link href="/works" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-10 uppercase tracking-widest text-xs font-bold">
            <ArrowLeft size={16} /> Back to Archive
          </Link>
          
          {/* Judul Raksasa */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-tight mb-8 uppercase">
            {project.title}
          </h1>

          {/* Gambar Cover (Sesuai Referensi, masuk di sebelah kiri) */}
          <div className="w-full aspect-video rounded-[1.5rem] overflow-hidden mb-10 border border-white/10 shadow-2xl relative group">
            <img 
              src={project.image} 
              alt={`${project.title} Preview`} 
              className="w-full h-full object-cover" 
            />
          </div>

          {/* Pill Badges */}
          <div className="flex flex-wrap gap-3 mb-10">
            <span className="px-4 py-2 rounded-full border border-white/20 text-[10px] md:text-xs font-bold tracking-widest bg-white/5">
              {project.year}
            </span>
            <span className="px-4 py-2 rounded-full border border-accent/40 text-accent text-[10px] md:text-xs font-bold tracking-widest bg-accent/5">
              {project.category}
            </span>
            <span className="px-4 py-2 rounded-full border border-white/20 text-[10px] md:text-xs font-bold tracking-widest bg-white/5">
              Creative Direction
            </span>
          </div>

          {/* Deskripsi */}
          <p className="text-base md:text-lg font-medium text-white/70 leading-relaxed mb-10">
            {project.description}
          </p>

          {/* Tombol Eksternal / View Project (Banyak Link) */}
          {project.socialLinks && project.socialLinks.length > 0 && (
            <div className="pb-20 flex flex-wrap gap-3">
              {project.socialLinks.map((link, i) => (
                <a 
                  key={i}
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-[#FF3366] hover:text-white hover:border-[#FF3366] transition-all shadow-md hover:shadow-[0_0_20px_rgba(255,51,102,0.4)] hover:scale-105"
                >
                  {link.name} <ExternalLink size={14} />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 
        ================= RIGHT COLUMN =================
        Berisi Galeri Gambar & Video
      */}
      <div className="w-full md:w-1/2 flex flex-col bg-[#0a0a0a] pt-4 md:pt-20">
        
        {/* PROJECT REVEAL VIDEO: Ditampilkan di sisi kanan paling atas */}
        {project.revealVideo && (
          <ProjectRevealVideo src={project.revealVideo} title={project.title} />
        )}

        {/* KHUSUS DEKALCER: Tampilkan Video (Square Mode) DI ATAS galeri gambar */}
        {project.id === "dekalcer-upj" && project.reels && project.reels.length > 0 && (
          <ProjectReels reels={project.reels} variant="square" />
        )}

        {/* Galeri Proyek */}
        <div className="w-full flex flex-col gap-4 md:gap-8 p-4 md:p-8">
          {project.gallery.map((img, i) => (
            <div key={i} className="w-full rounded-[1rem] md:rounded-[2rem] overflow-hidden shadow-2xl bg-[#111] border border-white/5 relative">
              <img 
                src={img} 
                alt={`${project.title} Detail ${i}`} 
                className="w-full h-auto object-contain" 
              />
            </div>
          ))}
        </div>

        {/* UNTUK PROYEK LAINNYA: Tampilkan Video (Phone Mode) DI BAWAH galeri gambar */}
        {project.id !== "dekalcer-upj" && project.reels && project.reels.length > 0 && (
          <ProjectReels reels={project.reels} variant="phone" />
        )}

        {/* Penanda Akhir */}
        <div className="p-16 md:p-24 flex justify-center items-center bg-[#050505]">
          <h2 className="text-lg md:text-2xl font-black text-white/10 tracking-[0.3em] uppercase text-center">
            End of <br/> Case Study
          </h2>
        </div>
      </div>

    </main>
  );
}
