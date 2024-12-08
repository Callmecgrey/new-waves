// components/GeometricShape.tsx

'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Icosahedron } from '@react-three/drei';
import { Mesh } from 'three';

interface GeometricShapeProps {
  className?: string;
}

function Shape() {
  const meshRef = useRef<Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.007;
      meshRef.current.rotation.y += 0.007;
    }
  });

  return (
    <Icosahedron ref={meshRef} args={[2.5, 0]} position={[0, 1.5, 0]}>
      <meshStandardMaterial color="#ffffff" wireframe />
    </Icosahedron>
  );
}

export default function GeometricShape({ className }: GeometricShapeProps) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none z-20 ${className}`}
      style={{ width: '100%', height: '90%', top: '-6%' }}
    >
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[30, 30, 30]} />
        <Shape />
      </Canvas>
    </div>
  );
}
