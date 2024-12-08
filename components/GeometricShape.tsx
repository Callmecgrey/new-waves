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
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Icosahedron ref={meshRef} args={[0.5, 0]} position={[0, 0, 0]}>
      <meshStandardMaterial color="#ffffff" wireframe />
    </Icosahedron>
  );
}

export default function GeometricShape({ className }: GeometricShapeProps) {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Shape />
      </Canvas>
    </div>
  );
}
