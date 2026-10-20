import PaginatedWorksGallery from "@/components/ui/PaginatedWorksGallery";
import AnotherGallery from "@/components/ui/AnotherGallery";
import Footer from "@/components/ui/Footer";

export default function WorksIndex() {
  return (
    <main className="min-h-screen bg-[#050505] pt-40 pb-0 selection:bg-[#FF3366] selection:text-white">
      
      <div className="px-[5vw] mb-4 text-center">
        <h1 className="text-6xl md:text-[8rem] font-black text-white uppercase tracking-tighter leading-none">
          Archive.
        </h1>
        <p className="text-white/40 mt-6 tracking-[0.3em] uppercase text-xs md:text-sm font-bold">
          All selected works and case studies
        </p>
      </div>
      
      {/* Menggantikan List Lama dengan Pagination 3D */}
      <PaginatedWorksGallery />
      
      {/* Seksi Kejutan: Another Gallery Parallax */}
      <AnotherGallery />
      
      <Footer />
    </main>
  );
}
