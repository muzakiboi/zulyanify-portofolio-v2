"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, MeshTransmissionMaterial, ContactShadows } from "@react-three/drei";
import { useRef } from "react";
import { Mesh } from "three";

function GlassObject() {
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
        {/* Material kaca murni yang sangat realistis */}
        <MeshTransmissionMaterial
          thickness={2.5}
          roughness={0.15}
          transmission={1}
          ior={1.5}
          chromaticAberration={0.08}
          backside
        />
      </mesh>
    </Float>
  );
}

export default function HeroCanvas() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {/* 
        pointer-events-auto di Canvas agar kursor tetap bisa mendeteksi objek 3D 
        tanpa menghalangi teks di bawahnya 
      */}
      <Canvas className="pointer-events-auto" camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <Environment preset="city" />
        <GlassObject />
        <ContactShadows position={[0, -2, 0]} opacity={0.6} scale={10} blur={2.5} far={4} />
      </Canvas>
    </div>
  );
}
