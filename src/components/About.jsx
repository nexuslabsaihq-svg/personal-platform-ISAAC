import React from 'react';
import { GraduationCap, Target, Compass, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 max-w-5xl mx-auto px-4 sm:px-6 border-t border-zinc-900">
      <div className="space-y-10">
        {/* Section Header */}
        <div className="space-y-2">
          <p className="text-xs font-semibold tracking-wider text-zinc-500 uppercase">
            Sobre mí
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Perfil & Trayectoria
          </h2>
        </div>

        {/* Bio Placeholder Paragraph */}
        <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 space-y-4">
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            [Tu bio aquí: Soy estudiante de Ingeniería en Administración de Empresas con fuerte
            interés en el análisis de datos, la gestión estratégica de operaciones y la transformación
            digital de las organizaciones. Busco aplicar metodologías modernas de gestión para
            diseñar soluciones eficientes, rentables y escalables.]
          </p>
          <p className="text-sm text-zinc-500 italic">
            [Párrafo secundario opcional: Enfoque en trabajo colaborativo, liderazgo de proyectos y aprendizaje continuo de nuevas herramientas tecnológicas.]
          </p>
        </div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 rounded-xl bg-zinc-900/30 border border-zinc-800/60 space-y-2">
            <div className="w-9 h-9 rounded-lg bg-zinc-800/60 flex items-center justify-center text-zinc-300">
              <GraduationCap size={18} />
            </div>
            <h3 className="text-sm font-semibold text-zinc-200">Formación Académica</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              [Ingeniería en Administración de Empresas — Universidad / Instituto de ejemplo]
            </p>
          </div>

          <div className="p-5 rounded-xl bg-zinc-900/30 border border-zinc-800/60 space-y-2">
            <div className="w-9 h-9 rounded-lg bg-zinc-800/60 flex items-center justify-center text-zinc-300">
              <Target size={18} />
            </div>
            <h3 className="text-sm font-semibold text-zinc-200">Áreas de Interés</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              [Gestión de operaciones, finanzas corporativas, control de gestión y business analytics]
            </p>
          </div>

          <div className="p-5 rounded-xl bg-zinc-900/30 border border-zinc-800/60 space-y-2">
            <div className="w-9 h-9 rounded-lg bg-zinc-800/60 flex items-center justify-center text-zinc-300">
              <Compass size={18} />
            </div>
            <h3 className="text-sm font-semibold text-zinc-200">Objetivo Profesional</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              [Contribuir al crecimiento empresarial mediante la optimización de procesos y toma de decisiones ágil]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
