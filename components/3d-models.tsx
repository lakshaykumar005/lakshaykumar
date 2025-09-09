"use client"

import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, Box, Cylinder, Torus, useTexture, Text } from '@react-three/drei'
import * as THREE from 'three'

// Earth Avatar with Rib Structure
const EarthAvatar: React.FC<{ position: [number, number, number]; scale?: number }> = ({ 
  position, 
  scale = 1 
}) => {
  const groupRef = useRef<THREE.Group>(null)
  const earthRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (groupRef.current) {
      // Gentle floating animation
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8) * 0.2
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1
      
      // Earth rotation
      if (earthRef.current) {
        earthRef.current.rotation.y = state.clock.elapsedTime * 0.05
      }
    }
  })

  // Create rib-like cloud structure
  const createRibStructure = () => {
    const ribs = []
    const ribCount = 12
    
    for (let i = 0; i < ribCount; i++) {
      const angle = (i / ribCount) * Math.PI * 2
      const height = Math.sin(angle * 3) * 0.3 + 0.7
      const width = 0.1 + Math.sin(angle * 2) * 0.05
      const radius = 1.2 + Math.sin(angle * 4) * 0.1
      
      ribs.push(
        <Box 
          key={i}
          args={[width, height, 0.05]} 
          position={[
            Math.cos(angle) * radius, 
            Math.sin(angle * 2) * 0.2, 
            Math.sin(angle) * radius
          ]}
          rotation={[0, angle, Math.sin(angle * 3) * 0.3]}
        >
          <meshStandardMaterial 
            color={new THREE.Color().lerpColors(
              new THREE.Color('#ffb3d1'), // Pink
              new THREE.Color('#87ceeb'), // Light blue
              (i / ribCount)
            )}
            transparent
            opacity={0.7}
            roughness={0.1}
            metalness={0.0}
          />
        </Box>
      )
    }
    return ribs
  }

  // Create city lights for night side
  const createCityLights = () => {
    const lights = []
    const lightCount = 50
    
    for (let i = 0; i < lightCount; i++) {
      const phi = Math.acos(2 * Math.random() - 1) // Random latitude
      const theta = Math.random() * Math.PI * 2 // Random longitude
      const radius = 1.01 // Slightly above Earth surface
      
      // Only place lights on night side (negative x)
      if (Math.cos(theta) < 0) {
        const x = radius * Math.sin(phi) * Math.cos(theta)
        const y = radius * Math.cos(phi)
        const z = radius * Math.sin(phi) * Math.sin(theta)
        
        lights.push(
          <Sphere key={i} args={[0.005, 8, 8]} position={[x, y, z]}>
            <meshStandardMaterial 
              color="#ffaa00"
              emissive="#ffaa00"
              emissiveIntensity={0.8}
              roughness={0.0}
              metalness={0.0}
            />
          </Sphere>
        )
      }
    }
    return lights
  }

  return (
    <group ref={groupRef} position={position} scale={scale}>
      {/* Earth Globe */}
      <group ref={earthRef}>
        {/* Main Earth sphere */}
        <Sphere args={[1, 32, 32]}>
          <meshStandardMaterial 
            color="#4a90e2" // Ocean blue
            roughness={0.8}
            metalness={0.0}
          />
        </Sphere>
        
        {/* Continents - simplified land masses */}
        <Sphere args={[1.001, 32, 32]}>
          <meshStandardMaterial 
            color="#228b22" // Forest green
            roughness={0.9}
            metalness={0.0}
            transparent
            opacity={0.8}
          />
        </Sphere>
        
        {/* Day/Night terminator effect */}
        <Sphere args={[1.002, 32, 32]}>
          <meshStandardMaterial 
            color="#1a1a1a" // Dark for night side
            roughness={0.9}
            metalness={0.0}
            transparent
            opacity={0.6}
          />
        </Sphere>
        
        {/* City lights on night side */}
        {createCityLights()}
      </group>
      
      {/* Rib-like cloud structure */}
      {createRibStructure()}
      
      {/* Atmospheric glow */}
      <Sphere args={[1.1, 32, 32]}>
        <meshStandardMaterial 
          color="#87ceeb"
          transparent
          opacity={0.1}
          roughness={0.0}
          metalness={0.0}
        />
      </Sphere>
    </group>
  )
}

// Starfield Background
const Starfield: React.FC = () => {
  const starsRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (starsRef.current) {
      starsRef.current.rotation.y = state.clock.elapsedTime * 0.01
    }
  })

  const createStars = () => {
    const stars = []
    const starCount = 200
    
    for (let i = 0; i < starCount; i++) {
      const radius = 10 + Math.random() * 5
      const phi = Math.acos(2 * Math.random() - 1)
      const theta = Math.random() * Math.PI * 2
      
      const x = radius * Math.sin(phi) * Math.cos(theta)
      const y = radius * Math.cos(phi)
      const z = radius * Math.sin(phi) * Math.sin(theta)
      
      const size = 0.01 + Math.random() * 0.02
      
      stars.push(
        <Sphere key={i} args={[size, 8, 8]} position={[x, y, z]}>
          <meshStandardMaterial 
            color="#ffffff"
            emissive="#ffffff"
            emissiveIntensity={0.5}
            roughness={0.0}
            metalness={0.0}
          />
        </Sphere>
      )
    }
    return stars
  }

  return (
    <group ref={starsRef}>
      {createStars()}
    </group>
  )
}

export const Models3D: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        style={{ background: 'linear-gradient(to bottom, #0a0a2e, #16213e, #0f3460)' }}
        gl={{ alpha: true, antialias: true }}
      >
        {/* Space Lighting */}
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={1.0} color="#ffffff" />
        <directionalLight position={[-3, 3, 3]} intensity={0.5} color="#87ceeb" />
        <pointLight position={[0, 0, 5]} intensity={0.8} color="#ffffff" />
        
        {/* Starfield Background */}
        <Starfield />
        
        {/* Disable controls for background effect */}
        <OrbitControls enabled={false} />
      </Canvas>
    </div>
  )
}
