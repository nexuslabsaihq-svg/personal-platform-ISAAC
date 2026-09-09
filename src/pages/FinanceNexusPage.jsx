import React, { useRef, Suspense, lazy, useState } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { ArrowLeft, ExternalLink, Github, CheckCircle2, Cpu, Database, Zap, Users, BarChart3, Bot } from 'lucide-react';
import { useReducedMotion } from '../hooks/useReducedMotion';
import RevealOnScroll from '../components/ui/RevealOnScroll';

// ─── Finance 3D Scene ─────────────────────────────────────────────────────────
// Cubos apilados tipo balance sheet + flujo de datos entre capas — evoca ERP/finanzas

function FinanceLayer({ y, scale, color, speed = 1, phase = 0 }) {
  const ref = useRef();
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime * speed + phase;
    ref.current.position.y = y + Math.sin(t * 0.5) * 0.08;
    ref.current.rotation.y = t * 0.15;
  });
  return (
    <group ref={ref} position={[0, y, 0]}>
      <mesh scale={[scale, 0.08, scale]}>
        <boxGeometry />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.3} roughness={0.3} metalness={0.7} />
      </mesh>
      {/* Corner accents */}
      {[[-1, -1], [1, -1], [-1, 1], [1, 1]].map(([sx, sz], i) => (
        <mesh key={i} position={[sx * scale * 0.48, 0, sz * scale * 0.48]} scale={[0.06, 0.15, 0.06]}>
          <boxGeometry />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.6} roughness={0.1} metalness={0.9} />
        </mesh>
      ))}
    </group>
  );
}

function DataFlow({ from, to, color }) {
  const ref = useRef();
  useFrame((state) => {
    if (!ref.current) return;
    // Pulse opacity
    ref.current.material.opacity = 0.2 + Math.sin(state.clock.elapsedTime * 2 + from[1]) * 0.15;
  });
  const mid = [(from[0] + to[0]) / 2, (from[1] + to[1]) / 2, (from[2] + to[2]) / 2];
  const height = Math.abs(to[1] - from[1]);
  return (
    <mesh ref={ref} position={mid} scale={[0.015, height, 0.015]}>
      <cylinderGeometry args={[1, 1, 1, 6]} />
      <meshStandardMaterial color={color} transparent opacity={0.35} emissive={color} emissiveIntensity={0.5} />
    </mesh>
  );
}

function FinanceSceneInner() {
  const groupRef = useRef();
  const reducedMotion = useReducedMotion();

  useFrame((state) => {
    if (!groupRef.current || reducedMotion) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.08;
  });

  const layers = [
    { y: 1.2, scale: 0.7, color: '#E5C158', speed: 0.8, phase: 0 },     // Revenue layer (gold)
    { y: 0.4, scale: 1.0, color: '#6B9BFF', speed: 1.0, phase: 1 },     // Operations (blue)
    { y: -0.4, scale: 0.85, color: '#9B7FFF', speed: 0.9, phase: 2 },   // Analytics (purple)
    { y: -1.2, scale: 1.1, color: '#4ADE80', speed: 1.1, phase: 0.5 }, // Foundation (green)
  ];

  return (
    <group ref={groupRef}>
      {layers.map((l, i) => (
        <FinanceLayer key={i} {...l} />
      ))}
      {/* Data flow connectors */}
      <DataFlow from={[0, 1.16, 0]} to={[0, 0.44, 0]} color="#E5C158" />
      <DataFlow from={[0, 0.36, 0]} to={[0, -0.36, 0]} color="#6B9BFF" />
      <DataFlow from={[0, -0.44, 0]} to={[0, -1.16, 0]} color="#9B7FFF" />
    </group>
  );
}

function FinanceScene() {
  return (
    <Canvas
      camera={{ position: [2.5, 1.5, 3.5], fov: 45 }}
      style={{ background: 'transparent' }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: 'low-power' }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[3, 4, 3]} intensity={1.5} color="#6B9BFF" />
      <pointLight position={[-2, -2, 2]} intensity={0.8} color="#E5C158" />
      <Suspense fallback={null}>
        <FinanceSceneInner />
      </Suspense>
    </Canvas>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

const STACK = [
  { icon: Cpu, name: 'React + Vite', desc: 'SPA moderna, code splitting, lazy loading' },
  { icon: Database, name: 'Firebase', desc: 'Firestore DB, Auth, Storage, Functions' },
  { icon: Bot, name: 'Gemini API', desc: 'IA aplicada: reportes, análisis, automatización' },
  { icon: BarChart3, name: 'Tailwind CSS', desc: 'Design system mobile-first' },
];

const PROBLEMAS = [
  'PYMEs chilenas sin sistema accesible de control de liquidez',
  'Reportes financieros manuales en Excel sin automatización',
  'Falta de visibilidad en tiempo real sobre rentabilidad operativa',
  'Costos elevados de ERPs empresariales tradicionales',
];

const SOLUCIONES = [
  'Dashboard en tiempo real de flujo de caja y liquidez',
  'Generación automática de reportes con IA (Gemini API)',
  'Control de facturación y métricas de rentabilidad integradas',
  'Interfaz simple optimizada para administradores sin background técnico',
];

export default function FinanceNexusPage() {
  return (
    <div className="min-h-screen bg-[#F7F5F0] text-slate-900 font-inter">
      {/* Nav */}
      <div className="border-b border-slate-200 bg-white/90 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <a href="/" className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 transition-colors">
            <ArrowLeft size={14} />
            Volver al portafolio
          </a>
          <a
            href="https://finance-nexus.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 text-sm font-semibold hover:bg-blue-100 transition-all shadow-sm"
          >
            <ExternalLink size={13} />
            Visitar proyecto
          </a>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        {/* Hero de la página */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Texto */}
          <div>
            <RevealOnScroll>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#6B9BFF]/10 border border-[#6B9BFF]/30 text-[#6B9BFF] text-xs font-mono mb-6">
                <Zap size={11} />
                Full Stack · IA Aplicada · ERP
              </div>
              <h1 className="font-sora font-bold text-4xl sm:text-5xl text-[#F5F6F8] mb-4 leading-tight">
                Finance Nexus
              </h1>
              <p className="text-[#A8AFC0] text-lg leading-relaxed mb-6">
                ERP financiero para PYMEs chilenas. Desarrollado desde cero por Isaac Pastén
                con{' '}
                <strong className="text-[#6B9BFF]">IA aplicada como componente central</strong>{' '}
                — no como accesorio.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://finance-nexus.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#6B9BFF] hover:bg-[#5A8AEE] text-white font-semibold text-sm transition-all shadow-[0_0_20px_rgba(107,155,255,0.3)]"
                >
                  <ExternalLink size={14} />
                  Visitar proyecto
                </a>
                <a
                  href="https://github.com/nexuslabsaihq-svg"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#151A24] border border-[#262C3A] text-[#A8AFC0] hover:text-[#F5F6F8] font-semibold text-sm transition-all"
                >
                  <Github size={14} />
                  GitHub
                </a>
              </div>
            </RevealOnScroll>
          </div>

          {/* 3D Scene */}
          <RevealOnScroll delay={0.2}>
            <div className="relative rounded-3xl overflow-hidden bg-[#151A24] border border-[#262C3A]" style={{ height: 360 }}>
              <div className="absolute inset-0 bg-gradient-to-br from-[#6B9BFF]/5 to-[#E5C158]/5" />
              <Suspense fallback={
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full border border-[#6B9BFF]/20 animate-pulse" />
                </div>
              }>
                <FinanceScene />
              </Suspense>
              {/* Labels de capas */}
              <div className="absolute right-4 top-0 h-full flex flex-col justify-center gap-3 text-right pointer-events-none">
                {[
                  { label: 'Revenue', color: '#E5C158' },
                  { label: 'Operations', color: '#6B9BFF' },
                  { label: 'Analytics', color: '#9B7FFF' },
                  { label: 'Foundation', color: '#4ADE80' },
                ].map((l) => (
                  <div key={l.label} className="flex items-center gap-1.5 justify-end">
                    <span className="text-[10px] font-mono" style={{ color: l.color }}>{l.label}</span>
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: l.color }} />
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* Rol de Isaac */}
        <RevealOnScroll>
          <div className="p-6 rounded-2xl bg-[#151A24] border border-[#6B9BFF]/30 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#6B9BFF]/10 border border-[#6B9BFF]/30 flex items-center justify-center text-[#6B9BFF] shrink-0">
                <Users size={18} />
              </div>
              <div>
                <h2 className="font-sora font-bold text-lg text-[#F5F6F8] mb-2">
                  Rol: Fundador & Desarrollador Líder
                </h2>
                <p className="text-[#A8AFC0] leading-relaxed">
                  Isaac Pastén concibió, diseñó y desarrolla Finance Nexus de manera independiente.
                  Responsable de la arquitectura técnica completa, el diseño UX/UI, la integración de
                  IA aplicada y la estrategia de producto orientada al mercado PYME chileno.
                </p>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Problema / Solución */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <RevealOnScroll delay={0.1}>
            <div className="p-6 rounded-2xl bg-[#151A24] border border-[#262C3A] h-full">
              <h3 className="font-sora font-semibold text-[#F5F6F8] mb-4 flex items-center gap-2">
                <span className="text-red-400">⚠</span> El Problema
              </h3>
              <ul className="space-y-2.5">
                {PROBLEMAS.map((p, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#A8AFC0]">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400/60 mt-1.5 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <div className="p-6 rounded-2xl bg-[#151A24] border border-[#4ADE80]/20 h-full">
              <h3 className="font-sora font-semibold text-[#F5F6F8] mb-4 flex items-center gap-2">
                <span className="text-[#4ADE80]">✓</span> La Solución
              </h3>
              <ul className="space-y-2.5">
                {SOLUCIONES.map((s, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#A8AFC0]">
                    <CheckCircle2 size={14} className="text-[#4ADE80] mt-0.5 shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>
        </div>

        {/* IA Aplicada — sección destacada */}
        <RevealOnScroll>
          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#151A24] to-[#1a1f2e] border border-[#9B7FFF]/30 mb-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-[#9B7FFF]/10 border border-[#9B7FFF]/30 flex items-center justify-center text-[#9B7FFF]">
                <Bot size={22} />
              </div>
              <div>
                <h2 className="font-sora font-bold text-xl text-[#F5F6F8] mb-1">
                  IA Aplicada — No un buzzword
                </h2>
                <p className="text-[#A8AFC0] text-sm">
                  La integración de IA es parte central de Finance Nexus, no un accesorio.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { title: 'Prompt Engineering', desc: 'Prompts estructurados para generar reportes financieros precisos en lenguaje natural adaptado al contexto PYME chileno.' },
                { title: 'Gemini API Integration', desc: 'Integración directa con Google Gemini para análisis de datos, generación de resúmenes ejecutivos y alertas inteligentes.' },
                { title: 'Automatización de Flujos', desc: 'Flujos de decisión asistidos por IA que reducen carga operativa manual y aumentan la velocidad de respuesta del sistema.' },
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-xl bg-[#9B7FFF]/5 border border-[#9B7FFF]/15">
                  <h4 className="font-sora font-semibold text-sm text-[#9B7FFF] mb-2">{item.title}</h4>
                  <p className="text-xs text-[#A8AFC0] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* Tech Stack */}
        <RevealOnScroll>
          <h2 className="font-sora font-bold text-2xl text-[#F5F6F8] mb-6">Stack Técnico</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
            {STACK.map((s, i) => {
              const Icon = s.icon;
              return (
                <RevealOnScroll key={s.name} delay={i * 0.08}>
                  <div className="p-4 rounded-2xl bg-[#151A24] border border-[#262C3A] hover:border-[#6B9BFF]/30 transition-colors text-center group">
                    <Icon size={24} className="text-[#6B9BFF] mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <div className="font-sora font-semibold text-sm text-[#F5F6F8] mb-1">{s.name}</div>
                    <div className="text-[11px] text-[#A8AFC0] leading-relaxed">{s.desc}</div>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </RevealOnScroll>

        {/* CTA final */}
        <RevealOnScroll>
          <div className="text-center p-10 rounded-3xl bg-[#151A24] border border-[#262C3A]">
            <h2 className="font-sora font-bold text-2xl text-[#F5F6F8] mb-3">
              ¿Quieres saber más?
            </h2>
            <p className="text-[#A8AFC0] mb-6 max-w-md mx-auto">
              Visita el proyecto en vivo o contáctame para hablar sobre el desarrollo,
              la integración de IA o colaboración.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://finance-nexus.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#6B9BFF] hover:bg-[#5A8AEE] text-white font-semibold text-sm transition-all shadow-[0_0_20px_rgba(107,155,255,0.3)]"
              >
                <ExternalLink size={14} />
                Visitar Finance Nexus
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-transparent border border-[#262C3A] text-[#A8AFC0] hover:text-[#F5F6F8] hover:border-[#6B9BFF]/40 font-semibold text-sm transition-all"
              >
                Contactar a Isaac
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </main>
    </div>
  );
}
