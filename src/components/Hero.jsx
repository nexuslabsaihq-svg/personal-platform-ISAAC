import React from 'react';
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen pt-24 pb-16 flex flex-col justify-center max-w-5xl mx-auto px-4 sm:px-6"
    >
      <div className="space-y-6 max-w-3xl">
        {/* Status / Availability Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800 text-xs font-medium text-zinc-300">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Disponible para proyectos & prácticas</span>
        </div>

        {/* Main Title */}
        <div className="space-y-2">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
            Isaac Patricio <br className="hidden sm:inline" />
            <span className="text-zinc-400">Pastén Díaz</span>
          </h1>
          <p className="text-lg sm:text-xl font-medium text-zinc-300">
            Estudiante de Ingeniería en Administración de Empresas
          </p>
        </div>

        {/* Subtitle / Short Pitch */}
        <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl">
          [Tu presentación inicial aquí: Enfocado en optimización de procesos, gestión estratégica,
          análisis financiero y adopción de herramientas tecnológicas para el desarrollo de negocios.]
        </p>

        {/* Action Button */}
        <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-100 text-zinc-950 font-semibold text-sm hover:bg-white hover:shadow-lg hover:shadow-white/5 transition-all"
          >
            <span>Ver proyectos</span>
            <ArrowDown size={16} />
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-900/80 text-zinc-300 font-medium text-sm border border-zinc-800 hover:bg-zinc-800 hover:text-white transition-all"
          >
            <span>Conoce más sobre mí</span>
          </a>
        </div>
      </div>
    </section>
  );
}
