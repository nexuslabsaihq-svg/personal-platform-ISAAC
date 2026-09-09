import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { FolderGit2, Award, Cpu, ExternalLink, Github, Calendar, CheckCircle2, Star, Sparkles, ArrowRight } from 'lucide-react';
import RevealOnScroll from './ui/RevealOnScroll';
import { usePointerDevice } from '../hooks/usePointerDevice';
import { useReducedMotion } from '../hooks/useReducedMotion';

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
    deepLink: '/finance-nexus',
    featured: true,
    accentColor: '#6B9BFF',
  },
  {
    title: 'Ecosistema NOSTRADAMUZ',
    badge: 'IA Aplicada',
    badgeColor: 'bg-purple-brand/15 text-purple-brand border-purple-brand/40',
    description: 'Sistema propio de orquestación de agentes de IA con 8+ skills especializadas para automatización de flujos y análisis de contexto empresarial avanzado.',
    tags: ['Claude', 'Gemini', 'Prompt Engineering'],
    link: 'https://github.com/nexuslabsaihq-svg/personal-platform-ISAAC',
    featured: true,
    accentColor: '#9B7FFF',
  },
  {
    title: 'Análisis UX — WOM Chile',
    badge: 'Académico',
    badgeColor: 'bg-emerald-brand/15 text-emerald-brand border-emerald-brand/40',
    description: 'Informe de evaluación sumativa y tangibilización de servicios enfocado en satisfacción, retención de clientes y experiencia de usuario en telecomunicaciones.',
    tags: ['INACAP', 'Experiencia del Usuario'],
    link: '#',
    featured: false,
    accentColor: '#4ADE80',
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

const TECH_STACK = {
  'Gestión & Negocios': [
    { name: 'Excel / Google Sheets', level: 'Intermedio' },
    { name: 'Power BI', level: 'Básico' },
    { name: 'HCMFRONT ERP', level: 'Avanzado' },
    { name: 'BPMN 2.0', level: 'Intermedio' },
    { name: 'Gestión de Proyectos Scrum', level: 'Intermedio' },
  ],
  'Herramientas Digitales & IA': [
    { name: 'React / Vite', level: 'Intermedio' },
    { name: 'Firebase', level: 'Básico-Intermedio' },
    { name: 'Gemini API', level: 'Intermedio' },
    { name: 'Claude (Anthropic)', level: 'Intermedio' },
    { name: 'Prompt Engineering', level: 'Avanzado' },
    { name: 'Tailwind CSS', level: 'Intermedio' },
  ],
};

// 3D Tilt Card
function TiltCard({ children, className = '' }) {
  const isFine = usePointerDevice();
  const reducedMotion = useReducedMotion();
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!isFine || reducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * -8;
    const y = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX: tilt.x, rotateY: tilt.y }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      style={{ transformStyle: 'preserve-3d', perspective: 800 }}
      className={className}
      data-cursor="project"
    >
      {children}
    </motion.div>
  );
}

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('projects');

  return (
    <section id="portfolio" className="py-24 max-w-6xl mx-auto px-4 sm:px-6 border-t border-border-dark/40">
      <div className="space-y-10">
        {/* Header */}
        <RevealOnScroll>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <p className="font-mono text-xs font-semibold tracking-wider text-accent uppercase">
                // 03. Selected Work
              </p>
              <h2 className="text-3xl sm:text-4xl font-sora font-bold tracking-tight text-text-main">
                Portafolio & Evidencias
              </h2>
            </div>

            {/* Tab Switcher */}
            <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-surface border border-border-dark w-full sm:w-fit">
              {TABS.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-colors duration-200 flex-1 sm:flex-initial justify-center ${
                      isActive ? 'text-text-main' : 'text-text-muted hover:text-text-main'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="portfolio-tab"
                        className="absolute inset-0 rounded-xl bg-base border border-border-dark shadow-sm"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                      />
                    )}
                    <Icon size={14} className="relative z-10" />
                    <span className="relative z-10 hidden sm:inline">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </RevealOnScroll>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            {/* PROJECTS */}
            {activeTab === 'projects' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {PROJECTS.map((project, i) => (
                  <RevealOnScroll key={project.title} delay={i * 0.1}>
                    <TiltCard className="h-full">
                      <div className="group relative h-full flex flex-col p-5 rounded-2xl bg-surface border border-border-dark hover:border-accent/40 transition-all duration-300 hover:shadow-card-hover overflow-hidden">
                        {/* Glow effect on hover */}
                        <div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                          style={{ background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${project.accentColor}08, transparent 60%)` }}
                        />

                        {/* Badge */}
                        <div className="flex items-center justify-between mb-4">
                          <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold border ${project.badgeColor}`}>
                            {project.badge}
                          </span>
                          {project.featured && (
                            <Star size={14} className="text-gold fill-gold" />
                          )}
                        </div>

                        {/* Title */}
                        <h3 className="font-sora font-bold text-lg text-text-main mb-2 group-hover:text-white transition-colors">
                          {project.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-text-muted leading-relaxed flex-1 mb-4">
                          {project.description}
                        </p>

                        {/* Tags — reveal on hover */}
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 rounded-md bg-base border border-border-dark text-[11px] font-mono text-text-muted"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Links — appear on hover */}
                        <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                          {project.deepLink && (
                            <a
                              href={project.deepLink}
                              className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-white transition-colors"
                            >
                              Ver en detalle <ArrowRight size={12} />
                            </a>
                          )}
                          {project.link && project.link !== '#' && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs font-semibold text-text-muted hover:text-text-main transition-colors"
                            >
                              <ExternalLink size={12} />
                              Visitar
                            </a>
                          )}
                        </div>
                      </div>
                    </TiltCard>
                  </RevealOnScroll>
                ))}
              </div>
            )}

            {/* CERTIFICATES */}
            {activeTab === 'certificates' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {CERTIFICATES.map((cert, i) => (
                  <RevealOnScroll key={cert.title} delay={i * 0.07}>
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-surface border border-border-dark hover:border-gold/30 transition-all duration-200 group">
                      <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center text-gold shrink-0 group-hover:bg-gold/20 transition-colors">
                        <CheckCircle2 size={16} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-text-main leading-tight group-hover:text-white transition-colors">
                          {cert.title}
                        </p>
                        <div className="flex items-center gap-2 mt-1.5">
                          <span className="text-[11px] font-mono text-text-muted">{cert.issuer}</span>
                          <span className="w-1 h-1 rounded-full bg-border-dark" />
                          <span className="text-[11px] font-mono text-gold">{cert.year}</span>
                        </div>
                      </div>
                    </div>
                  </RevealOnScroll>
                ))}

                <RevealOnScroll delay={0.6} className="sm:col-span-2">
                  <div className="mt-2 p-4 rounded-xl bg-gold/5 border border-gold/20 flex items-center justify-between">
                    <span className="text-sm text-text-muted">
                      Ver todos los certificados con fechas y números de registro
                    </span>
                    <a
                      href="#certifications"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold hover:text-white transition-colors"
                    >
                      Ver certificaciones <ArrowRight size={14} />
                    </a>
                  </div>
                </RevealOnScroll>
              </div>
            )}

            {/* TECH STACK */}
            {activeTab === 'tech-stack' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {Object.entries(TECH_STACK).map(([category, items], ci) => (
                  <RevealOnScroll key={category} delay={ci * 0.1}>
                    <div className="p-5 rounded-2xl bg-surface border border-border-dark space-y-4">
                      <h3 className="text-sm font-sora font-semibold text-text-main flex items-center gap-2">
                        <Sparkles size={14} className="text-accent" />
                        {category}
                      </h3>
                      <div className="space-y-2">
                        {items.map((item) => (
                          <div key={item.name} className="flex items-center justify-between py-1.5 border-b border-border-dark/50 last:border-0">
                            <span className="text-sm text-text-muted">{item.name}</span>
                            <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-base border border-border-dark text-text-muted">
                              {item.level}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </RevealOnScroll>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
