"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, MeshTransmissionMaterial, ContactShadows } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import { Mesh } from "three";

function GlassObject({ isMobile }: { isMobile: boolean }) {
  const meshRef = useRef<Mesh>(null);

  // Animasi berputar pelan dan bereaksi terhadap gerakan mouse kursor
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      
      // Mouse interaction (interaksi kursor)
      const targetX = (state.pointer.x * Math.PI) / 4;
      const targetY = (state.pointer.y * Math.PI) / 4;
      meshRef.current.rotation.x += (targetY - meshRef.current.rotation.x) * 0.05;
      meshRef.current.rotation.y += (targetX - meshRef.current.rotation.y) * 0.05;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh ref={meshRef}>
        {/* Bentuk Icosahedron yang abstrak dan modern */}
        <icosahedronGeometry args={[1.5, 0]} />
        {/* Material kaca murni - dioptimasi agar ringan di mobile GPU */}
        <MeshTransmissionMaterial
          thickness={2.5}
          roughness={0.15}
          transmission={1}
          ior={1.5}
          chromaticAberration={0.08}
          samples={isMobile ? 4 : 8}
          resolution={isMobile ? 256 : 512}
          backside
        />
      </mesh>
    </Float>
  );
}

export default function HeroCanvas() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas 
        className="pointer-events-auto" 
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ powerPreference: "high-performance", antialias: !isMobile }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <Environment preset="city" />
        <GlassObject isMobile={isMobile} />
        <ContactShadows position={[0, -2, 0]} opacity={0.6} scale={10} blur={2.5} far={4} />
      </Canvas>
    </div>
  );
}
