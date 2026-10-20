"use client";

import { Canvas } from "@react-three/fiber";
import { Physics, RigidBody, CuboidCollider, RapierRigidBody } from "@react-three/rapier";
import { Environment, Image } from "@react-three/drei";
import { useRef, Suspense } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const CORE_SKILLS = [
  { name: "Adobe", bg: "#330000", url: "/assets/images/adobe-logo.png" },
  { name: "Canva", bg: "#002233", url: "/assets/images/canva-logo.png" }, 
  { name: "CapCut", bg: "#111111", url: "/assets/images/capcut-logo.png" }, 
  { name: "ChatGPT", bg: "#002211", url: "/assets/images/chatgpt-logo.png" }, 
  { name: "Clip Studio Paint", bg: "#222222", url: "/assets/images/csp-logo.png" }, 
  { name: "Magnific AI", bg: "#1a1025", url: "/assets/images/magnific-logo.png" } 
];

function SkillLogoBlock({ skill, position }: { skill: any, position: [number, number, number] }) {
  const api = useRef<RapierRigidBody>(null);

  const handleClick = () => {
    if (api.current) {
      api.current.applyImpulse({ x: (Math.random() - 0.5) * 15, y: 15, z: (Math.random() - 0.5) * 15 }, true);
      api.current.applyTorqueImpulse({ x: Math.random() * 5, y: Math.random() * 5, z: Math.random() * 5 }, true);
    }
  };

  return (
    <RigidBody ref={api} position={position} colliders="cuboid" restitution={0.6} friction={0.5}>
      <mesh onClick={handleClick} castShadow receiveShadow>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshPhysicalMaterial color={skill.bg} metalness={0.3} roughness={0.2} clearcoat={1} />
        
        {/* Wajah Depan & Belakang - Rendering Native 3D Image */}
        <Suspense fallback={null}>
          {/* Depan */}
          <Image 
            url={skill.url} 
            transparent 
            position={[0, 0, 0.751]} 
            scale={0.9} 
          />
          {/* Belakang */}
          <Image 
            url={skill.url} 
            transparent 
            position={[0, 0, -0.751]} 
            rotation={[0, Math.PI, 0]}
            scale={0.9} 
          />
        </Suspense>
      </mesh>
    </RigidBody>
  );
}

export default function PhysicsSkills() {
  // Hook Framer Motion untuk membaca pergerakan scroll
  const { scrollYProgress } = useScroll();
  // Transformasi dari scroll (0 -> 1) menjadi derajat rotasi (0 -> 360)
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 720]);

  const circularText = "Graphic Design • Illustration • Logo Design • UI/UX • Video Editing • ";
  const chars = circularText.split("");

  return (
    <div className="relative w-full h-[70vh] bg-[#050505] overflow-hidden border-t border-white/5">
      
      {/* ===== TOMBOL MORE "SETENGAH KEPOTONG" & TEKS MELINGKAR SVG ===== */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 flex items-center justify-center">
        
        {/* Teks Melingkar Otomatis Berputar (Tepat Mengelilingi Tombol) */}
        <motion.div 
          animate={{ rotate: -360 }} // Berputar otomatis secara kontinu
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="absolute w-[220px] h-[220px] md:w-[260px] md:h-[260px] pointer-events-none"
        >
          <svg viewBox="0 0 260 260" className="w-full h-full overflow-visible">
            <path
              id="bottomTextPath"
              // Radius 105px (sangat rapat dengan tombol merah yang radiusnya 80px)
              d="M 25, 130 a 105,105 0 0,0 210,0 a 105,105 0 0,0 -210,0"
              fill="none"
              stroke="none"
            />
            <text fill="white" className="text-[13px] md:text-[14.5px] font-bold uppercase opacity-90">
              {/* textLength 660 memaksa teks memenuhi keliling lingkaran persis, tanpa overlap */}
              <textPath href="#bottomTextPath" startOffset="0%" textLength="660" lengthAdjust="spacing">
                GRAPHIC DESIGN - ILLUSTRATION & ANOTHER - 
              </textPath>
            </text>
          </svg>
        </motion.div>

        {/* Tombol Merah (Setengah bawah yang terlihat) */}
        <Link 
          href="/works" 
          className="relative w-32 h-32 md:w-40 md:h-40 bg-[#FF3366] rounded-full flex justify-center hover:scale-105 hover:bg-[#ff1a53] transition-all cursor-pointer shadow-[0_0_30px_rgba(255,51,102,0.4)] pointer-events-auto"
        >
          {/* Posisi "MORE" dikalibrasi agar persis berada di tengah bagian yang tidak terpotong */}
          <span className="text-white font-black text-lg md:text-2xl uppercase tracking-widest leading-none absolute bottom-8 md:bottom-10">
            More
          </span>
        </Link>
      </div>

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10 pt-20">
        <h2 className="text-4xl md:text-8xl font-black text-white/5 uppercase tracking-tighter text-center leading-none">
          Throw <br/> The Tools
        </h2>
        <p className="text-[#FF3366] mt-4 tracking-widest uppercase text-sm font-bold">Interactive Core Stack</p>
      </div>

      <Canvas 
        shadows 
        camera={{ position: [0, 2, 12], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} castShadow intensity={1.5} />
        <Environment preset="city" />

        <Physics gravity={[0, -9.81, 0]}>
          <RigidBody type="fixed" restitution={0.4} friction={1}>
            <mesh position={[0, -4, 0]} receiveShadow>
              <boxGeometry args={[100, 1, 100]} />
              <shadowMaterial transparent opacity={0.5} />
            </mesh>
          </RigidBody>

          <RigidBody type="fixed">
            <CuboidCollider args={[1, 100, 100]} position={[-8, 0, 0]} />
            <CuboidCollider args={[1, 100, 100]} position={[8, 0, 0]} />
            <CuboidCollider args={[100, 100, 1]} position={[0, 0, -2]} />
            <CuboidCollider args={[100, 100, 1]} position={[0, 0, 4]} />
          </RigidBody>

          {CORE_SKILLS.map((skill, i) => (
            <SkillLogoBlock key={i} skill={skill} position={[(i - 2.5) * 2, 10 + Math.random() * 5, 0]} />
          ))}
        </Physics>
      </Canvas>
    </div>
  );
}
