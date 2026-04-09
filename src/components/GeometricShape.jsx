import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

function Icosahedron() {
  const meshRef = useRef()
  const mousePos = useRef({ x: 0, y: 0 })

  useMemo(() => {
    const handleMouseMove = (e) => {
      mousePos.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mousePos.current.y = -(e.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useFrame((state, delta) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x += delta * 0.15
    meshRef.current.rotation.y += delta * 0.2

    meshRef.current.rotation.x += mousePos.current.y * delta * 0.5
    meshRef.current.rotation.y += mousePos.current.x * delta * 0.5
  })

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={1.5}>
      <mesh ref={meshRef} scale={2.2}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color="#6366f1"
          emissive="#6366f1"
          emissiveIntensity={0.15}
          roughness={0.2}
          metalness={0.8}
          distort={0.3}
          speed={2}
          wireframe={false}
        />
      </mesh>
      <mesh scale={2.5}>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial color="#818cf8" wireframe transparent opacity={0.15} />
      </mesh>
    </Float>
  )
}

function Particles() {
  const count = 200
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 15
    }
    return pos
  }, [])

  const pointsRef = useRef()
  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.02
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial color="#818cf8" size={0.02} transparent opacity={0.6} sizeAttenuation />
    </points>
  )
}

export default function GeometricShape() {
  return (
    <div className="w-full h-full absolute inset-0">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
        <pointLight position={[-5, -5, -5]} intensity={0.5} color="#22d3ee" />
        <Icosahedron />
        <Particles />
      </Canvas>
    </div>
  )
}
