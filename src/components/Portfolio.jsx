import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, Award, Cpu, ExternalLink, Github, Calendar, CheckCircle2, Star } from 'lucide-react';

const TABS = [
  { id: 'projects', label: 'Projects', icon: FolderGit2 },
  { id: 'certificates', label: 'Certificates', icon: Award },
  { id: 'tech-stack', label: 'Tech Stack', icon: Cpu },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('projects');

  return (
    <motion.section
      id="portfolio"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="py-24 max-w-5xl mx-auto px-4 sm:px-6 border-t border-[#1F2430]/40"
    >
      <div className="space-y-10">
        {/* Section Header */}
        <div className="space-y-2">
          <p className="font-mono text-xs font-semibold tracking-wider text-accent uppercase">
            // 02. Portafolio
          </p>
          <h2 className="text-2xl sm:text-3xl font-sora font-bold tracking-tight text-[#E8EAED]">
            Proyectos, Certificaciones & Herramientas
          </h2>
        </div>

        {/* PASO 8: Tab Switcher with animated sliding layoutId */}
        <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-[#131722] border border-[#1F2430]/60 w-full sm:w-fit">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-mono transition-colors z-10 ${
                  isActive ? 'text-accent font-semibold' : 'text-[#8B92A5] hover:text-[#E8EAED]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabBadge"
                    className="absolute inset-0 rounded-xl bg-[#0B0E14] border border-accent/40 shadow-[0_0_15px_rgba(91,141,239,0.15)] -z-10"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
                <Icon size={16} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* PASO 8: Animated Tab Content (fade-out + fade-in) */}
        <AnimatePresence mode="wait">
          {/* PROJECTS TAB */}
          {activeTab === 'projects' && (
            <motion.div
              key="projects"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
            >
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {/* Project Card 1 */}
                <motion.div
                  variants={cardVariants}
                  whileHover={{
                    y: -4,
                    boxShadow: '0 10px 30px -10px rgba(91, 141, 239, 0.2)',
                  }}
                  transition={{ duration: 0.2 }}
                  className="p-6 rounded-2xl bg-[#131722] border border-[#1F2430]/60 hover:border-accent/60 transition-colors flex flex-col justify-between space-y-5"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-md bg-[#1F2430]/50 text-accent font-mono text-xs">
                        [Gestión de Operaciones]
                      </span>
                      <span className="font-mono text-xs text-[#8B92A5]">[2026]</span>
                    </div>
                    <h3 className="text-lg font-sora font-semibold text-[#E8EAED]">
                      [Proyecto 1: Sistema de Optimización de Procesos BPMN]
                    </h3>
                    <p className="text-sm text-[#8B92A5] leading-relaxed">
                      [Descripción placeholder: Diagnóstico de cuellos de botella, modelado AS-IS / TO-BE y propuesta de automatización para reducir tiempos de ciclo operativo en un 28%.]
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#0B0E14] text-[#8B92A5] border border-[#1F2430]/60">Excel Avanzado</span>
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#0B0E14] text-[#8B92A5] border border-[#1F2430]/60">Power BI</span>
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#0B0E14] text-[#8B92A5] border border-[#1F2430]/60">BPMN 2.0</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-[#1F2430]/50">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-[#E8EAED] hover:text-accent transition-colors"
                    >
                      <span>./ver_detalles</span>
                      <ExternalLink size={13} />
                    </a>
                    <span className="text-[#1F2430]">•</span>
                    <a
                      href="https://github.com/nexuslabsaihq-svg/personal-platform-ISAAC"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-[#8B92A5] hover:text-[#E8EAED] transition-colors"
                    >
                      <Github size={13} />
                      <span>repo</span>
                    </a>
                  </div>
                </motion.div>

                {/* Project Card 2 */}
                <motion.div
                  variants={cardVariants}
                  whileHover={{
                    y: -4,
                    boxShadow: '0 10px 30px -10px rgba(91, 141, 239, 0.2)',
                  }}
                  transition={{ duration: 0.2 }}
                  className="p-6 rounded-2xl bg-[#131722] border border-[#1F2430]/60 hover:border-accent/60 transition-colors flex flex-col justify-between space-y-5"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-md bg-[#1F2430]/50 text-accent font-mono text-xs">
                        [Finanzas & Control]
                      </span>
                      <span className="font-mono text-xs text-[#8B92A5]">[2026]</span>
                    </div>
                    <h3 className="text-lg font-sora font-semibold text-[#E8EAED]">
                      [Proyecto 2: Tablero Ejecutivo de Control Financiero]
                    </h3>
                    <p className="text-sm text-[#8B92A5] leading-relaxed">
                      [Descripción placeholder: Arquitectura de dashboard integral para el monitoreo de márgenes de contribución, flujo de caja proyectado y desviaciones presupuestarias.]
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#0B0E14] text-[#8B92A5] border border-[#1F2430]/60">Power BI</span>
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#0B0E14] text-[#8B92A5] border border-[#1F2430]/60">KPIs Financieros</span>
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#0B0E14] text-[#8B92A5] border border-[#1F2430]/60">Control Gestión</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-[#1F2430]/50">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-[#E8EAED] hover:text-accent transition-colors"
                    >
                      <span>./ver_detalles</span>
                      <ExternalLink size={13} />
                    </a>
                    <span className="text-[#1F2430]">•</span>
                    <a
                      href="https://github.com/nexuslabsaihq-svg/personal-platform-ISAAC"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-[#8B92A5] hover:text-[#E8EAED] transition-colors"
                    >
                      <Github size={13} />
                      <span>repo</span>
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}

          {/* CERTIFICATES TAB */}
          {activeTab === 'certificates' && (
            <motion.div
              key="certificates"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
            >
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {/* Certificate 1 */}
                <motion.div
                  variants={cardVariants}
                  whileHover={{
                    y: -4,
                    boxShadow: '0 10px 30px -10px rgba(91, 141, 239, 0.2)',
                  }}
                  transition={{ duration: 0.2 }}
                  className="p-6 rounded-2xl bg-[#131722] border border-[#1F2430]/60 hover:border-accent/60 transition-colors space-y-4"
                >
                  <div className="flex items-start justify-between">
                    <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
                      <Award size={20} />
                    </div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-gold/10 text-gold border border-gold/30 text-xs font-mono font-medium">
                      <CheckCircle2 size={12} />
                      <span>Verificado</span>
                    </span>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-sora font-semibold text-[#E8EAED]">
                      [Certificación 1: Gestión Estratégica & Business Intelligence]
                    </h3>
                    <p className="text-xs text-[#8B92A5] font-mono">
                      [Institución / Plataforma emisora]
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#8B92A5] pt-2 border-t border-[#1F2430]/50">
                    <Calendar size={13} />
                    <span>[Fecha / Año de expedición]</span>
                  </div>
                </motion.div>

                {/* Certificate 2 */}
                <motion.div
                  variants={cardVariants}
                  whileHover={{
                    y: -4,
                    boxShadow: '0 10px 30px -10px rgba(91, 141, 239, 0.2)',
                  }}
                  transition={{ duration: 0.2 }}
                  className="p-6 rounded-2xl bg-[#131722] border border-[#1F2430]/60 hover:border-accent/60 transition-colors space-y-4"
                >
                  <div className="flex items-start justify-between">
                    <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
                      <Award size={20} />
                    </div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-gold/10 text-gold border border-gold/30 text-xs font-mono font-medium">
                      <CheckCircle2 size={12} />
                      <span>Verificado</span>
                    </span>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-sora font-semibold text-[#E8EAED]">
                      [Certificación 2: Metodologías Ágiles & Gestión de Proyectos Scrum]
                    </h3>
                    <p className="text-xs text-[#8B92A5] font-mono">
                      [Institución / Plataforma emisora]
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#8B92A5] pt-2 border-t border-[#1F2430]/50">
                    <Calendar size={13} />
                    <span>[Fecha / Año de expedición]</span>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}

          {/* TECH STACK TAB */}
          {activeTab === 'tech-stack' && (
            <motion.div
              key="tech-stack"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
            >
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {/* Stack Group 1 */}
                <motion.div
                  variants={cardVariants}
                  whileHover={{
                    y: -4,
                    boxShadow: '0 10px 30px -10px rgba(91, 141, 239, 0.2)',
                  }}
                  transition={{ duration: 0.2 }}
                  className="p-6 rounded-2xl bg-[#131722] border border-[#1F2430]/60 hover:border-accent/60 transition-colors space-y-4"
                >
                  <h3 className="text-base font-sora font-semibold text-[#E8EAED] flex items-center gap-2">
                    <Cpu size={18} className="text-accent" />
                    <span>Gestión, Negocios & Estrategia</span>
                  </h3>
                  <p className="text-xs text-[#8B92A5]">
                    Competencias y herramientas analíticas aplicadas a la administración:
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {[
                      'Excel Financiero & Tablas Dinámicas',
                      'Power BI & Modelado DAX',
                      'Control Presupuestario',
                      'Modelamiento BPMN 2.0',
                      'Metodologías Ágiles (Scrum/Kanban)',
                      'Planificación Estratégica',
                    ].map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1.5 rounded-lg bg-[#0B0E14] border border-[#1F2430]/80 text-xs font-mono text-[#E8EAED] hover:border-accent/50 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Stack Group 2 */}
                <motion.div
                  variants={cardVariants}
                  whileHover={{
                    y: -4,
                    boxShadow: '0 10px 30px -10px rgba(91, 141, 239, 0.2)',
                  }}
                  transition={{ duration: 0.2 }}
                  className="p-6 rounded-2xl bg-[#131722] border border-[#1F2430]/60 hover:border-accent/60 transition-colors space-y-4"
                >
                  <h3 className="text-base font-sora font-semibold text-[#E8EAED] flex items-center gap-2">
                    <Cpu size={18} className="text-accent" />
                    <span>Herramientas Digitales & Desarrollo</span>
                  </h3>
                  <p className="text-xs text-[#8B92A5]">
                    Tecnologías para optimización y presencia digital moderna:
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {[
                      'React & Componentes',
                      'Tailwind CSS & Animaciones',
                      'Vite & Build Tooling',
                      'Git / GitHub Workflow',
                      'ERP / CRM Softwares',
                      'Google Workspace & Automatización',
                    ].map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1.5 rounded-lg bg-[#0B0E14] border border-[#1F2430]/80 text-xs font-mono text-[#E8EAED] hover:border-accent/50 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}
