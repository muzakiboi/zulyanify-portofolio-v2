"use client";
import { useState, useRef } from "react";
import { Volume2, VolumeX, Play, Pause, Sparkles, Maximize2 } from "lucide-react";

interface ProjectRevealVideoProps {
  src: string;
  title: string;
}

export default function ProjectRevealVideo({ src, title }: ProjectRevealVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleFullScreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <div className="w-full p-4 md:p-8 pb-0 md:pb-0">
      <div 
        onClick={togglePlay}
        className="w-full aspect-video rounded-[1rem] md:rounded-[2rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)] bg-black border border-white/10 hover:border-white/25 transition-all duration-500 relative group cursor-pointer"
      >
        {/* HTML5 Video */}
        <video
          ref={videoRef}
          src={src}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        />

        {/* Top Badges Overlay */}
        <div className="absolute top-4 left-4 md:top-6 md:left-6 z-20 flex items-center gap-3 pointer-events-none">
          <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 shadow-xl">
            <span className="w-2 h-2 rounded-full bg-[#FF3366] animate-pulse shadow-[0_0_8px_#FF3366]"></span>
            <span className="text-[10px] md:text-xs font-black tracking-widest uppercase text-white">
              Project Reveal
            </span>
          </div>
        </div>

        {/* Top Right Controls (Sound & Fullscreen) */}
        <div className="absolute top-4 right-4 md:top-6 md:right-6 z-20 flex items-center gap-2">
          {/* Sound Toggle Button */}
          <button
            onClick={toggleSound}
            aria-label={isMuted ? "Unmute video audio" : "Mute video audio"}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/70 hover:bg-[#FF3366] text-white border border-white/20 hover:border-[#FF3366] transition-all backdrop-blur-md shadow-xl text-xs font-bold uppercase tracking-wider"
          >
            {isMuted ? (
              <>
                <VolumeX size={15} />
                <span className="hidden sm:inline text-[10px]">Unmute Audio</span>
              </>
            ) : (
              <>
                <Volume2 size={15} className="text-[#FF3366] group-hover:text-white" />
                <span className="hidden sm:inline text-[10px]">Mute</span>
              </>
            )}
          </button>

          {/* Fullscreen Button */}
          <button
            onClick={toggleFullScreen}
            aria-label="Fullscreen"
            className="w-8 h-8 rounded-full bg-black/70 hover:bg-white/20 text-white border border-white/20 flex items-center justify-center transition-all backdrop-blur-md shadow-xl"
          >
            <Maximize2 size={13} />
          </button>
        </div>

        {/* Center Play/Pause indicator when paused */}
        {!isPlaying && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 backdrop-blur-[2px]">
            <div className="w-16 h-16 rounded-full bg-[#FF3366] text-white flex items-center justify-center shadow-2xl pl-1">
              <Play size={28} />
            </div>
          </div>
        )}

        {/* Bottom subtle gradient on hover */}
        <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-between pointer-events-none">
          <p className="text-xs font-bold text-white/80 tracking-wider uppercase flex items-center gap-2">
            <Sparkles size={13} className="text-[#FF3366]" /> Motion Reveal Showcase
          </p>
          <span className="text-[10px] text-white/50 tracking-widest uppercase">
            Click to {isPlaying ? "Pause" : "Play"}
          </span>
        </div>
      </div>
    </div>
  );
}
