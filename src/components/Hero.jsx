import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Terminal, ShieldCheck, UserCheck } from 'lucide-react';

const SKILLS_CHIPS = [
  'Gestión Estratégica',
  'Power BI & Analytics',
  'Optimización BPMN',
  'Control Financiero',
  'Metodologías Ágiles',
];

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen pt-28 pb-16 flex flex-col justify-center max-w-5xl mx-auto px-4 sm:px-6"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Staggered text content */}
        <div className="lg:col-span-7 space-y-6">
          {/* Step 1: Subtítulo pequeño / Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#131722] border border-[#1F2430]/80 text-xs font-mono text-[#8B92A5]"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[#E8EAED]">disponible:</span>
            <span className="text-accent">proyectos & pasantías</span>
          </motion.div>

          {/* Step 2: Título grande */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22, ease: 'easeOut' }}
            className="space-y-1.5"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-sora font-bold tracking-tight text-[#E8EAED] leading-[1.1]">
              Isaac Patricio <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8EAED] via-[#8B92A5] to-accent">
                Pastén Díaz
              </span>
            </h1>
          </motion.div>

          {/* Step 3: Bajada / Subtítulo */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35, ease: 'easeOut' }}
            className="text-base sm:text-lg text-[#8B92A5] leading-relaxed max-w-xl"
          >
            Estudiante de <span className="text-[#E8EAED] font-medium">Ingeniería en Administración de Empresas</span>.
            Especializado en optimización de procesos de negocio, control de gestión estratégica y
            análisis de datos cuantitativos para la toma de decisiones.
          </motion.p>

          {/* Step 4: Chips de habilidades */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.48, ease: 'easeOut' }}
            className="flex flex-wrap gap-2 pt-1"
          >
            {SKILLS_CHIPS.map((chip) => (
              <span
                key={chip}
                className="px-2.5 py-1 rounded-md bg-[#131722] border border-[#1F2430]/70 text-xs font-mono text-[#8B92A5] hover:border-accent/40 hover:text-[#E8EAED] transition-colors"
              >
                #{chip}
              </span>
            ))}
          </motion.div>

          {/* Step 5: Botón de acción */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.62, ease: 'easeOut' }}
            className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
          >
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-accent text-[#0B0E14] font-sora font-semibold text-sm hover:bg-accent-hover hover:shadow-[0_0_25px_rgba(91,141,239,0.35)] transition-all"
            >
              <span>Explorar portafolio</span>
              <ArrowDown size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#131722] text-[#E8EAED] font-medium text-sm border border-[#1F2430] hover:border-[#8B92A5]/50 hover:bg-[#181D2A] transition-all"
            >
              <span>Contáctame</span>
            </a>
          </motion.div>
        </div>

        {/* Right Column: Marco tipo carnet colgante con animación de balanceo */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center pt-6 lg:pt-0">
          {/* Cordón / Soporte superior del carnet */}
          <div className="relative flex flex-col items-center">
            {/* Cinta del cordón */}
            <div className="w-4 h-12 bg-gradient-to-b from-[#1F2430]/10 via-[#1F2430]/70 to-[#131722] border-x border-[#1F2430]/60" />
            {/* Clip metálico */}
            <div className="w-10 h-3 rounded-sm bg-[#1F2430] border border-[#8B92A5]/30 shadow-sm mb-1 z-10" />
            <div className="w-5 h-2 rounded-full bg-[#0B0E14] border border-[#1F2430] -mt-1 z-10" />

            {/* Carnet colgante oscilante */}
            <motion.div
              animate={{ rotate: [-2, 2, -2] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{ transformOrigin: 'top center' }}
              className="w-72 sm:w-80 rounded-2xl bg-[#131722] border border-[#1F2430]/80 p-5 shadow-2xl shadow-black/80 relative overflow-hidden backdrop-blur-sm hover:border-accent/50 transition-colors"
            >
              {/* Ranura del broche */}
              <div className="w-12 h-2.5 mx-auto rounded-full bg-[#0B0E14] border border-[#1F2430] mb-4" />

              {/* Carnet Header */}
              <div className="flex items-center justify-between border-b border-[#1F2430]/60 pb-3 mb-4">
                <div className="flex items-center gap-1.5 font-mono text-[10px] text-accent tracking-wider">
                  <ShieldCheck size={13} />
                  <span>CREDENTIAL // 2026</span>
                </div>
                <span className="font-mono text-[10px] text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/40">
                  ACTIVO
                </span>
              </div>

              {/* Carnet Body / Foto & Datos */}
              <div className="space-y-4">
                {/* Marco de fotografía / Monograma */}
                <div className="relative mx-auto w-32 h-36 rounded-xl bg-[#0B0E14] border border-[#1F2430] overflow-hidden flex flex-col items-center justify-center group shadow-inner">
                  {/* Subtle ambient light */}
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/15 via-transparent to-transparent" />
                  <div className="w-16 h-16 rounded-2xl bg-[#131722] border border-[#1F2430] flex items-center justify-center font-sora font-bold text-2xl text-accent shadow-md">
                    IP
                  </div>
                  <span className="mt-2 font-mono text-[9px] text-[#8B92A5] tracking-widest uppercase">
                    ID: 2026-ADM
                  </span>
                </div>

                {/* Detalles de identidad */}
                <div className="text-center space-y-1">
                  <h3 className="font-sora font-semibold text-base text-[#E8EAED]">
                    Isaac Patricio Pastén Díaz
                  </h3>
                  <p className="font-mono text-xs text-accent">
                    Ing. Administración de Empresas
                  </p>
                  <p className="text-[11px] text-[#8B92A5]">
                    Gestión Estratégica & Business Analytics
                  </p>
                </div>

                {/* Código de barras / Footer del carnet */}
                <div className="pt-3 border-t border-[#1F2430]/60 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="h-4 flex items-center gap-[2px]">
                      {[4, 8, 2, 6, 3, 7, 5, 9, 3, 6, 2, 7, 4, 8, 3, 5, 2, 6, 4].map((h, i) => (
                        <div
                          key={i}
                          className="w-[2px] bg-[#8B92A5]/50"
                          style={{ height: `${h * 1.6}px` }}
                        />
                      ))}
                    </div>
                    <p className="font-mono text-[8px] text-[#8B92A5]/70">
                      SEC-KEY: 7894-ISAAC-DEV
                    </p>
                  </div>
                  <div className="w-7 h-7 rounded-lg bg-gold/10 border border-gold/40 flex items-center justify-center text-gold text-xs font-bold font-mono">
                    ★
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
