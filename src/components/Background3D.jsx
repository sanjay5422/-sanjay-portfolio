import { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function ParticleGalaxy() {
  const ref = useRef()
  const mouse = useRef({ x: 0, y: 0 })

  const particles = useMemo(() => {
    const count = 2000
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const radius = Math.random() * 10 + 2
      const angle = Math.random() * Math.PI * 2
      const spread = (Math.random() - 0.5) * 4
      positions[i * 3] = Math.cos(angle) * radius
      positions[i * 3 + 1] = spread
      positions[i * 3 + 2] = Math.sin(angle) * radius
    }
    return positions
  }, [])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (ref.current) {
      ref.current.rotation.y = t * 0.05
      ref.current.rotation.x = Math.sin(t * 0.02) * 0.1
    }
  })

  return (
    <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="var(--primary)"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.4}
      />
    </Points>
  )
}

function FloatingShape({ position, color, speed, shape }) {
  const ref = useRef()
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (ref.current) {
      ref.current.rotation.x = t * speed
      ref.current.rotation.y = t * speed * 0.7
      ref.current.position.y = position[1] + Math.sin(t * 0.5) * 0.5
    }
  })

  return (
    <mesh ref={ref} position={position}>
      {shape === 'torus' && <torusGeometry args={[1, 0.3, 16, 100]} />}
      {shape === 'icosa' && <icosahedronGeometry args={[1, 0]} />}
      {shape === 'octa' && <octahedronGeometry args={[1, 0]} />}
      {shape === 'tetra' && <tetrahedronGeometry args={[1, 0]} />}
      <meshBasicMaterial color={color} wireframe={true} transparent opacity={0.25} />
    </mesh>
  )
}

function PurpleParticles() {
  const ref = useRef()
  const particles = useMemo(() => {
    const count = 800
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 25
      positions[i * 3 + 1] = (Math.random() - 0.5) * 25
      positions[i * 3 + 2] = (Math.random() - 0.5) * 25
    }
    return positions
  }, [])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (ref.current) {
      ref.current.rotation.x = t * 0.02
      ref.current.rotation.z = t * 0.015
    }
  })

  return (
    <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="var(--secondary)"
        size={0.015}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.3}
      />
    </Points>
  )
}

function MouseReactiveCamera() {
  const { camera } = useThree()
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    camera.position.x +=
      (state.mouse.x * 1.5 - camera.position.x) * 0.02
    camera.position.y +=
      (state.mouse.y * 1.5 - camera.position.y) * 0.02
    camera.lookAt(0, 0, 0)
  })
  return null
}

export default function Background3D() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: -1,
      background: '#000000',
      pointerEvents: 'none'
    }}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75 }}
        style={{ background: '#000000' }}
        gl={{ alpha: false, antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <MouseReactiveCamera />
        <ParticleGalaxy />
        <PurpleParticles />
        <FloatingShape 
          position={[-4, 2, -3]} 
          color="var(--primary)" 
          speed={0.3} 
          shape="torus" 
        />
        <FloatingShape 
          position={[4, -1, -2]} 
          color="var(--secondary)" 
          speed={0.2} 
          shape="icosa" 
        />
        <FloatingShape 
          position={[-3, -2, -4]} 
          color="var(--primary)" 
          speed={0.25} 
          shape="octa" 
        />
        <FloatingShape 
          position={[3, 3, -5]} 
          color="#FFD700" 
          speed={0.15} 
          shape="tetra" 
        />
      </Canvas>
    </div>
  )
}
