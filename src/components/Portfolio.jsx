import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, Award, Cpu, ExternalLink, Github, Calendar, CheckCircle2, Star, Sparkles } from 'lucide-react';

const TABS = [
  { id: 'projects', label: 'Projects', icon: FolderGit2 },
  { id: 'certificates', label: 'Certificates', icon: Award },
  { id: 'tech-stack', label: 'Tech Stack', icon: Cpu },
];

const PROJECTS = [
  {
    title: 'Finance Nexus',
    badge: 'Full Stack',
    badgeColor: 'bg-accent/15 text-accent border-accent/40',
    description: 'Fundador y desarrollador de ERP financiero para PYMEs chilenas. Plataforma integral de control de liquidez, facturación y métricas de rentabilidad operativa.',
    tags: ['React', 'Firebase', 'Gemini API'],
    link: 'https://finance-nexus.vercel.app',
    featured: true,
  },
  {
    title: 'Ecosistema NOSTRADAMUZ',
    badge: 'IA Aplicada',
    badgeColor: 'bg-purple-500/15 text-purple-400 border-purple-500/40',
    description: 'Sistema propio de orquestación de agentes de IA con 8+ skills especializadas para automatización de flujos y análisis de contexto empresarial avanzado.',
    tags: ['Claude', 'Gemini', 'Prompt Engineering'],
    link: 'https://github.com/nexuslabsaihq-svg/personal-platform-ISAAC',
    featured: true,
  },
  {
    title: 'Análisis UX — WOM Chile',
    badge: 'Académico',
    badgeColor: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/40',
    description: 'Informe de evaluación sumativa y tangibilización de servicios enfocado en satisfacción, retención de clientes y experiencia de usuario en telecomunicaciones.',
    tags: ['INACAP', 'Experiencia del Usuario'],
    link: '#',
    featured: false,
  },
];

const CERTIFICATES = [
  { title: 'Gestión Estratégica & Business Intelligence', issuer: 'INACAP', year: '2025 - 2026' },
  { title: 'Metodologías Ágiles & Gestión Scrum', issuer: 'INACAP', year: '2025' },
  { title: 'Control de Gestión & Presupuestos', issuer: 'INACAP', year: '2024' },
  { title: 'Legislación Laboral & Administración de Personal', issuer: 'INACAP', year: '2024' },
  { title: 'Evaluación Económica de Proyectos', issuer: 'INACAP', year: '2024' },
  { title: 'Modelamiento de Procesos BPMN 2.0', issuer: 'INACAP', year: '2023' },
  { title: 'Herramientas Digitales & ERP Corporativo', issuer: 'INACAP', year: '2023' },
  { title: 'Fundamentos de Finanzas Corporativas', issuer: 'INACAP', year: '2023' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
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
    <section id="portfolio" className="py-24 max-w-6xl mx-auto px-4 sm:px-6 border-t border-[#1F2430]/40">
      <div className="space-y-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <p className="font-mono text-xs font-semibold tracking-wider text-accent uppercase">
              // 03. Selected Work
            </p>
            <h2 className="text-3xl sm:text-4xl font-sora font-bold tracking-tight text-[#E8EAED]">
              Portafolio & Evidencias
            </h2>
          </div>

          {/* Tab Switcher */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-[#131722] border border-[#1F2430] w-full sm:w-fit">
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
                      layoutId="activePortfolioTab"
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
        </div>

        {/* Tab Content */}
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
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {PROJECTS.map((project, idx) => (
                  <motion.div
                    key={idx}
                    variants={cardVariants}
                    whileHover={{
                      y: -4,
                      boxShadow: '0 12px 30px -10px rgba(91, 141, 239, 0.2)',
                    }}
                    transition={{ duration: 0.2 }}
                    className="p-6 rounded-2xl bg-[#131722] border border-[#1F2430] hover:border-accent/60 transition-colors flex flex-col justify-between space-y-5 group relative overflow-hidden"
                  >
                    {/* Background subtle gradient */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl pointer-events-none group-hover:bg-accent/10 transition-colors" />

                    <div className="space-y-4">
                      {/* Top Bar: Badge */}
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs text-[#8B92A5]">
                          0{idx + 1}
                        </span>
                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono border ${project.badgeColor}`}>
                          {project.badge}
                        </span>
                      </div>

                      <h3 className="text-lg font-sora font-semibold text-[#E8EAED] group-hover:text-white transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-xs text-[#8B92A5] leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="space-y-4 pt-2 border-t border-[#1F2430]/60">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#0B0E14] text-[#8B92A5] border border-[#1F2430]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Action Link */}
                      {project.link !== '#' ? (
                        <a
                          href={project.link.startsWith('http') ? project.link : `https://${project.link}`}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-accent hover:text-accent-hover transition-colors"
                        >
                          <span>Visitar proyecto</span>
                          <ExternalLink size={13} />
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-xs font-mono text-[#8B92A5]">
                          Documento académico
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {CERTIFICATES.map((cert, idx) => (
                  <motion.div
                    key={idx}
                    variants={cardVariants}
                    whileHover={{
                      y: -4,
                      boxShadow: '0 10px 25px -10px rgba(212, 175, 55, 0.2)',
                    }}
                    transition={{ duration: 0.2 }}
                    className="p-5 rounded-2xl bg-[#131722] border border-[#1F2430] hover:border-gold/40 transition-colors flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="w-8 h-8 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
                          <Award size={16} />
                        </div>
                        <span className="text-[10px] font-mono text-gold px-2 py-0.5 rounded-full bg-gold/10 border border-gold/30 flex items-center gap-1">
                          <CheckCircle2 size={10} />
                          INACAP
                        </span>
                      </div>
                      <h4 className="font-sora text-xs font-semibold text-[#E8EAED] leading-snug">
                        {cert.title}
                      </h4>
                    </div>
                    <div className="pt-2 border-t border-[#1F2430]/60 flex items-center justify-between font-mono text-[10px] text-[#8B92A5]">
                      <span>{cert.issuer}</span>
                      <span>{cert.year}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
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
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div className="p-6 rounded-2xl bg-[#131722] border border-[#1F2430] space-y-4">
                <h3 className="text-base font-sora font-semibold text-[#E8EAED] flex items-center gap-2">
                  <Cpu size={18} className="text-accent" />
                  <span>Gestión, Negocios & Personas</span>
                </h3>
                <p className="text-xs text-[#8B92A5]">
                  Herramientas y competencias clave en administración, control y recursos humanos:
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {[
                    'Excel Intermedio (Reportes & Control)',
                    'Power BI (Dashboards & Modelado)',
                    'HCMFRONT (Gestión de Personas)',
                    'Control Presupuestario',
                    'Modelamiento BPMN 2.0',
                    'Liderazgo de Equipos (7+ personas)',
                    'Resolución de Incidencias Operativas',
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg bg-[#0B0E14] border border-[#1F2430] text-xs font-mono text-[#E8EAED]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#131722] border border-[#1F2430] space-y-4">
                <h3 className="text-base font-sora font-semibold text-[#E8EAED] flex items-center gap-2">
                  <Sparkles size={18} className="text-purple-400" />
                  <span>Tecnología, Desarrollo & IA Aplicada</span>
                </h3>
                <p className="text-xs text-[#8B92A5]">
                  Capacidades digitales avanzadas para optimizar y crear soluciones modernas:
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {[
                    'IA Aplicada (Claude & Gemini API)',
                    'Prompt Engineering Avanzado',
                    'React & Tailwind CSS',
                    'Firebase & Bases de Datos',
                    'Vite & Tooling Web',
                    'Git / GitHub Version Control',
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg bg-[#0B0E14] border border-[#1F2430] text-xs font-mono text-[#E8EAED]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
