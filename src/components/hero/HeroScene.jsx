import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { usePointerDevice } from '../../hooks/usePointerDevice';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import * as THREE from 'three';

// Node positions for the org-chart / process flow structure
// Think of it as a top-down admin process: root → branches → leaves
const NODE_POSITIONS = [
  [0, 1.4, 0],      // Root (top) — "Dirección"
  [-1.2, 0.3, 0.2], // Left mid — "Finanzas"
  [1.2, 0.3, -0.2], // Right mid — "Operaciones"
  [-0.6, -0.9, 0.3],// Left leaf — "Control"
  [0.6, -0.9, -0.3],// Right leaf — "Reportes"
  [0, -0.1, 0.8],   // Center — "Gestión"
];

// Edges between nodes (index pairs)
const EDGES = [
  [0, 1], [0, 2],
  [1, 3], [2, 4],
  [1, 5], [2, 5],
  [5, 3], [5, 4],
];

function OrgNode({ position, size = 0.12, color = '#6B9BFF', emissiveIntensity = 0.4 }) {
  const meshRef = useRef();
  const offset = useRef(Math.random() * Math.PI * 2);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime + offset.current;
    meshRef.current.position.y = position[1] + Math.sin(t * 0.7) * 0.04;
    meshRef.current.rotation.y = t * 0.3;
  });

  return (
    <mesh ref={meshRef} position={position}>
      <octahedronGeometry args={[size, 0]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={emissiveIntensity}
        roughness={0.2}
        metalness={0.8}
      />
    </mesh>
  );
}

function OrgEdge({ start, end }) {
  const points = useMemo(() => {
    const s = new THREE.Vector3(...start);
    const e = new THREE.Vector3(...end);
    return [s, e];
  }, [start, end]);

  const lineGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    return geometry;
  }, [points]);

  return (
    <line geometry={lineGeometry}>
      <lineBasicMaterial color="#2563EB" opacity={0.22} transparent linewidth={1} />
    </line>
  );
}

// Subtle floating dot particles for depth
function BackgroundParticles() {
  const ref = useRef();
  const particles = useMemo(() => {
    const count = 30;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 6;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 6;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 4 - 2;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.05;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[particles, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#94A3B8" sizeAttenuation transparent opacity={0.5} />
    </points>
  );
}

function Scene({ mouseX, mouseY }) {
  const groupRef = useRef();
  const reducedMotion = useReducedMotion();

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;

    // Slow autonomous float rotation
    const baseRotX = reducedMotion ? 0 : Math.sin(t * 0.3) * 0.08;
    const baseRotY = reducedMotion ? 0 : t * 0.12;

    // Add mouse influence (max ~6 degrees = ~0.105 rad)
    const mouseInfluenceX = mouseY * 0.08;
    const mouseInfluenceY = mouseX * 0.08;

    groupRef.current.rotation.x += (baseRotX + mouseInfluenceX - groupRef.current.rotation.x) * 0.05;
    groupRef.current.rotation.y += (baseRotY + mouseInfluenceY - groupRef.current.rotation.y) * 0.02;
  });

  const nodeColors = ['#2563EB', '#D97706', '#2563EB', '#7C3AED', '#059669', '#2563EB'];
  const nodeSizes = [0.16, 0.13, 0.13, 0.10, 0.10, 0.12];

  return (
    <group ref={groupRef}>
      <BackgroundParticles />
      {EDGES.map(([a, b], i) => (
        <OrgEdge key={i} start={NODE_POSITIONS[a]} end={NODE_POSITIONS[b]} />
      ))}
      {NODE_POSITIONS.map((pos, i) => (
        <OrgNode
          key={i}
          position={pos}
          size={nodeSizes[i]}
          color={nodeColors[i]}
          emissiveIntensity={i === 0 ? 0.5 : 0.25}
        />
      ))}
    </group>
  );
}

function HeroSceneInner({ mouseX = 0, mouseY = 0 }) {
  return (
    <>
      <ambientLight intensity={0.8} />
      <pointLight position={[3, 3, 3]} intensity={2.0} color="#2563EB" />
      <pointLight position={[-3, -1, 2]} intensity={1.5} color="#D97706" />
      <Scene mouseX={mouseX} mouseY={mouseY} />
    </>
  );
}

export default function HeroScene({ mouseX = 0, mouseY = 0 }) {
  return (
    <div className="w-full h-full" aria-hidden="true">
      <Suspense fallback={
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-16 h-16 rounded-full border border-accent/20 animate-pulse" />
        </div>
      }>
        <Canvas
          camera={{ position: [0, 0, 4.5], fov: 50 }}
          style={{ background: 'transparent' }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true, powerPreference: 'low-power' }}
        >
          <HeroSceneInner mouseX={mouseX} mouseY={mouseY} />
        </Canvas>
      </Suspense>
    </div>
  );
}
