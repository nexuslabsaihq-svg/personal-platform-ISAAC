import React, { useState } from 'react';
import { FolderGit2, Award, Cpu, ExternalLink, Github, Calendar, CheckCircle2 } from 'lucide-react';

const TABS = [
  { id: 'projects', label: 'Projects', icon: FolderGit2 },
  { id: 'certificates', label: 'Certificates', icon: Award },
  { id: 'tech-stack', label: 'Tech Stack', icon: Cpu },
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('projects');

  return (
    <section id="portfolio" className="py-20 max-w-5xl mx-auto px-4 sm:px-6 border-t border-zinc-900">
      <div className="space-y-10">
        {/* Section Header */}
        <div className="space-y-2">
          <p className="text-xs font-semibold tracking-wider text-zinc-500 uppercase">
            Portafolio
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Proyectos, Certificaciones & Habilidades
          </h2>
        </div>

        {/* Tab Buttons (Mobile-first responsive row/wrap) */}
        <div className="flex items-center gap-2 p-1.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 w-full sm:w-fit overflow-x-auto">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-zinc-800 text-white shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40'
                }`}
              >
                <Icon size={16} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Panels */}
        <div>
          {/* PROJECTS TAB */}
          {activeTab === 'projects' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Project Card 1 */}
              <div className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/80 hover:border-zinc-700 transition-all flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-md bg-zinc-800/80 text-zinc-300 text-xs font-medium">
                      [Gestión de Operaciones]
                    </span>
                    <span className="text-xs text-zinc-500">[2026]</span>
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-100">
                    [Proyecto 1: Sistema de Optimización de Procesos]
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    [Descripción placeholder: Diagnóstico, modelado y propuesta de automatización para reducir tiempos de ciclo y costos operativos en pymes.]
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <span className="text-xs px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-800">Excel Avanzado</span>
                    <span className="text-xs px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-800">Power BI</span>
                    <span className="text-xs px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-800">BPMN</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-zinc-800/60">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-300 hover:text-white transition-colors"
                  >
                    <span>Ver detalles</span>
                    <ExternalLink size={13} />
                  </a>
                  <span className="text-zinc-700">•</span>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-400 hover:text-zinc-200 transition-colors"
                  >
                    <Github size={13} />
                    <span>Repositorio</span>
                  </a>
                </div>
              </div>

              {/* Project Card 2 */}
              <div className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/80 hover:border-zinc-700 transition-all flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-md bg-zinc-800/80 text-zinc-300 text-xs font-medium">
                      [Análisis Financiero]
                    </span>
                    <span className="text-xs text-zinc-500">[2026]</span>
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-100">
                    [Proyecto 2: Dashboard de Control Financiero]
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    [Descripción placeholder: Tablero interactivo para seguimiento de KPIs financieros, proyecciones de flujo de caja y rentabilidad de líneas de producto.]
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <span className="text-xs px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-800">Control de Gestión</span>
                    <span className="text-xs px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-800">KPIs</span>
                    <span className="text-xs px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-800">Power BI</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-zinc-800/60">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-300 hover:text-white transition-colors"
                  >
                    <span>Ver detalles</span>
                    <ExternalLink size={13} />
                  </a>
                  <span className="text-zinc-700">•</span>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-400 hover:text-zinc-200 transition-colors"
                  >
                    <Github size={13} />
                    <span>Repositorio</span>
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* CERTIFICATES TAB */}
          {activeTab === 'certificates' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Certificate 1 */}
              <div className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/80 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 rounded-xl bg-zinc-800/70 flex items-center justify-center text-zinc-300">
                    <Award size={20} />
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-950/40 text-emerald-400 border border-emerald-800/40 text-xs font-medium">
                    <CheckCircle2 size={12} />
                    <span>Verificado</span>
                  </span>
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-base font-semibold text-zinc-100">
                    [Certificación 1: Gestión Estratégica & Business Intelligence]
                  </h3>
                  <p className="text-xs text-zinc-400 font-medium">
                    [Institución / Plataforma emisora]
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-500 pt-2 border-t border-zinc-800/60">
                  <Calendar size={13} />
                  <span>[Fecha / Año de expedición]</span>
                </div>
              </div>

              {/* Certificate 2 */}
              <div className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/80 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 rounded-xl bg-zinc-800/70 flex items-center justify-center text-zinc-300">
                    <Award size={20} />
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-950/40 text-emerald-400 border border-emerald-800/40 text-xs font-medium">
                    <CheckCircle2 size={12} />
                    <span>Verificado</span>
                  </span>
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-base font-semibold text-zinc-100">
                    [Certificación 2: Metodologías Ágiles & Gestión de Proyectos]
                  </h3>
                  <p className="text-xs text-zinc-400 font-medium">
                    [Institución / Plataforma emisora]
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-500 pt-2 border-t border-zinc-800/60">
                  <Calendar size={13} />
                  <span>[Fecha / Año de expedición]</span>
                </div>
              </div>
            </div>
          )}

          {/* TECH STACK TAB */}
          {activeTab === 'tech-stack' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Stack Category 1 */}
              <div className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/80 space-y-4">
                <h3 className="text-base font-semibold text-zinc-100 flex items-center gap-2">
                  <span>Gestión, Negocios & Análisis</span>
                </h3>
                <p className="text-xs text-zinc-400">
                  Herramientas y competencias clave en administración y evaluación de proyectos:
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {['Excel Avanzado', 'Power BI', 'Control Presupuestario', 'Modelamiento BPMN', 'Metodologías Ágiles (Scrum)', 'Planificación Estratégica'].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg bg-zinc-800/60 border border-zinc-700/60 text-xs text-zinc-200 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stack Category 2 */}
              <div className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/80 space-y-4">
                <h3 className="text-base font-semibold text-zinc-100 flex items-center gap-2">
                  <span>Tecnología & Herramientas Digitales</span>
                </h3>
                <p className="text-xs text-zinc-400">
                  Herramientas modernas para desarrollo y gestión digital:
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {['React', 'Tailwind CSS', 'Vite', 'Git / GitHub', 'ERP / CRM Softwares', 'Google Workspace'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg bg-zinc-800/60 border border-zinc-700/60 text-xs text-zinc-200 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
