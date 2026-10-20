import { Sparkles, Monitor } from "lucide-react";

const competencies = [
  "Graphic Design", "Brand & Identity", "Digital Illustration", 
  "Video Editing", "Art Direction", "UI/UX Design", "Web Design", 
  "Campaign & Promotion", "Typography", "Digital Imaging", 
  "Storyboarding", "Content Creation", "AI-Assisted Design"
];

const tools = [
  "Adobe CC (Ai, Ps, Ae, Pr, Id)", "Figma", "Framer", "Clip Studio Paint",
  "CapCut", "Canva", "ChatGPT", "Gemini", "Magnific AI", "Trello",
  "Google Workspace", "Microsoft Office"
];

export default function SkillSet() {
  return (
    <section className="w-full min-h-screen bg-[#050505] py-20 px-[5vw] md:px-[10vw] flex flex-col justify-center border-t border-white/5 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-accent/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="relative z-10 mb-16">
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4 flex items-center gap-4">
          <Sparkles className="w-10 h-10 text-accent" />
          Skills Set.
        </h2>
        <p className="text-white/50 text-lg md:text-xl font-light max-w-2xl">
          Core competencies and creative capabilities developed through rigorous academic study and hands-on client work.
        </p>
      </div>

      <div className="relative z-10 flex flex-col gap-16">
        {/* Competencies */}
        <div>
          <h3 className="text-sm font-bold text-accent tracking-widest uppercase mb-6">Area of Expertise</h3>
          <div className="flex flex-wrap gap-3">
            {competencies.map((item, i) => (
              <div 
                key={i} 
                className="px-6 py-3 rounded-full border border-white/10 text-white/70 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all duration-300 cursor-default text-sm md:text-base"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div>
          <h3 className="text-sm font-bold text-accent tracking-widest uppercase mb-6 flex items-center gap-2">
            Software & Workflow
          </h3>
          <div className="flex flex-wrap gap-4">
            {tools.map((item, i) => (
              <div 
                key={i} 
                className="px-6 py-4 rounded-2xl bg-[#111] border border-white/5 text-white/90 hover:bg-accent hover:text-white hover:-translate-y-1 transition-all duration-300 cursor-default font-medium flex items-center gap-2 shadow-xl text-sm md:text-base"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
