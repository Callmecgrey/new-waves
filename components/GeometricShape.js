'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Icosahedron } from '@react-three/drei'

function Shape() {
  const meshRef = useRef()

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <Icosahedron ref={meshRef} args={[1, 0]} position={[0, 0, 0]}>
      <meshStandardMaterial color="#8a2be2" wireframe />
    </Icosahedron>
  )
}

export default function GeometricShape() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Shape />
      </Canvas>
    </div>
  )
}
