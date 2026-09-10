import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { FolderGit2, Award, Cpu, ExternalLink, Github, CheckCircle2, Star, Sparkles, ArrowRight } from 'lucide-react';
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
    badgeColor: 'bg-violet-custom/15 text-violet-custom border-violet-custom/40',
    description: 'Sistema propio de orquestación de agentes de IA con 8+ skills especializadas para automatización de flujos y análisis de contexto empresarial avanzado.',
    tags: ['Claude', 'Gemini', 'Prompt Engineering'],
    link: 'https://github.com/nexuslabsaihq-svg/personal-platform-ISAAC',
    featured: true,
    accentColor: '#9B7FFF',
  },
  {
    title: 'Análisis UX — WOM Chile',
    badge: 'Académico',
    badgeColor: 'bg-green-custom/15 text-green-custom border-green-custom/40',
    description: 'Informe de evaluación sumativa y tangibilización de servicios enfocado en satisfacción, retención de clientes y experiencia de usuario en telecomunicaciones.',
    tags: ['INACAP', 'Experiencia del Usuario'],
    link: '#',
    featured: false,
    accentColor: '#4ADE80',
  },
];

const CERTIFICATES = [
  { title: 'Business Analytics', issuer: 'INACAP', year: 'Nov. 2024' },
  { title: 'Analista de Gestión Administrativo', issuer: 'INACAP', year: 'Nov. 2024' },
  { title: 'Asistente Administrativo', issuer: 'INACAP', year: 'Nov. 2024' },
  { title: 'Asistente Tributario', issuer: 'INACAP', year: 'Nov. 2024' },
  { title: 'Asistente en Marketing', issuer: 'INACAP', year: 'Nov. 2024' },
  { title: 'Compras Públicas', issuer: 'INACAP', year: 'Nov. 2024' },
  { title: 'Administración de la Emergencia', issuer: 'INACAP', year: 'Nov. 2024' },
  { title: 'Asistente en Remuneraciones', issuer: 'INACAP', year: 'Dic. 2023' },
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

// 3D Tilt Card mejorado
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

// Project card component
function ProjectCard({ project, index, total }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <RevealOnScroll key={project.title} delay={index * 0.1}>
      <TiltCard className="h-full">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: index * 0.08 }}
          className="group relative h-full flex flex-col p-6 rounded-2xl bg-surface/80 border border-border-dark hover:border-accent/40 transition-all duration-300 hover:shadow-card backdrop-blur-sm overflow-hidden"
          whileHover={{ y: -4 }}
        >
          {/* Glow effect on hover */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
            style={{
              background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${project.accentColor}08, transparent 60%)`,
            }}
          />

          {/* Badge */}
          <div className="flex items-center justify-between mb-4 relative z-10">
            <motion.span
              className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold border ${project.badgeColor}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.08 + 0.2 }}
            >
              {project.badge}
            </motion.span>
            {project.featured && (
              <motion.div
                animate={{ rotate: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Star size={14} className="text-gold fill-gold" />
              </motion.div>
            )}
          </div>

          {/* Title */}
          <h3 className="font-sora font-bold text-lg text-text-main mb-2 group-hover:text-white transition-colors relative z-10">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-text-muted leading-relaxed flex-1 mb-4 relative z-10">
            {project.description}
          </p>

          {/* Tags — reveal on hover */}
          <motion.div className="flex flex-wrap gap-1.5 mb-4 relative z-10">
            {project.tags.map((tag) => (
              <motion.span
                key={tag}
                className="px-2.5 py-1 rounded-md bg-base border border-border-dark text-[11px] font-mono text-text-muted group-hover:border-accent/40 transition-all duration-200"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.08 + 0.3 }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          {/* Links — appear on hover */}
          <motion.div
            className="flex items-center gap-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 relative z-10"
            initial={{ opacity: 0, y: 8 }}
          >
            {project.deepLink && (
              <motion.a
                href={project.deepLink}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-white transition-colors group/link"
                whileHover={{ x: 4 }}
              >
                Ver en detalle{' '}
                <ArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform" />
              </motion.a>
            )}
            {project.link && project.link !== '#' && (
              <motion.a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-text-muted hover:text-text-main transition-colors group/link"
                whileHover={{ x: 2 }}
              >
                <ExternalLink size={12} className="group-hover/link:rotate-12 transition-transform" />
                Visitar
              </motion.a>
            )}
          </motion.div>
        </motion.div>
      </TiltCard>
    </RevealOnScroll>
  );
}

// Certificate item component
function CertificateItem({ cert, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <RevealOnScroll key={cert.title} delay={index * 0.07}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -12 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
        transition={{ duration: 0.4, delay: index * 0.07 }}
        className="flex items-start gap-4 p-4 rounded-xl bg-surface/80 border border-border-dark hover:border-gold/30 transition-all duration-200 group backdrop-blur-sm"
        whileHover={{ scale: 1.02, y: -2 }}
      >
        <motion.div
          className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center text-gold shrink-0 group-hover:bg-gold/20 transition-colors"
          whileHover={{ scale: 1.12, rotate: 8 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          <CheckCircle2 size={16} />
        </motion.div>
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
      </motion.div>
    </RevealOnScroll>
  );
}

// Tech stack category component
function TechCategory({ category, items, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <RevealOnScroll key={category} delay={index * 0.1}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        className="p-5 rounded-2xl bg-surface/80 border border-border-dark backdrop-blur-sm space-y-4 hover:border-accent/30 transition-all duration-200"
        whileHover={{ y: -4 }}
      >
        <h3 className="text-sm font-sora font-semibold text-text-main flex items-center gap-2">
          <motion.div
            whileHover={{ rotate: 12, scale: 1.2 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <Sparkles size={14} className="text-accent" />
          </motion.div>
          {category}
        </h3>
        <div className="space-y-3">
          {items.map((item, idx) => (
            <motion.div
              key={item.name}
              className="flex items-center justify-between py-2 border-b border-border-dark/50 last:border-0 group"
              initial={{ opacity: 0, x: -8 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }}
              transition={{ delay: index * 0.1 + idx * 0.05 }}
              whileHover={{ x: 4 }}
            >
              <span className="text-sm text-text-muted group-hover:text-text-main transition-colors">
                {item.name}
              </span>
              <motion.span
                className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-base border border-border-dark text-text-muted"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(107, 155, 255, 0.1)' }}
              >
                {item.level}
              </motion.span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </RevealOnScroll>
  );
}

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('projects');
  const reducedMotion = useReducedMotion();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="py-24 max-w-6xl mx-auto px-4 sm:px-6 border-t border-border-dark/40 relative overflow-hidden"
    >
      {/* Fondo decorativo */}
      {!reducedMotion && (
        <motion.div
          className="absolute inset-0 pointer-events-none -z-10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-accent/5 blur-3xl"
            animate={!reducedMotion ? { scale: [1, 1.15, 1] } : {}}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      )}

      <div className="space-y-10 relative z-10">
        {/* Header */}
        <RevealOnScroll>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <motion.div className="space-y-3">
              <p className="font-mono text-xs font-semibold tracking-wider text-accent uppercase">
                // 03. Selected Work
              </p>
              <h2 className="text-3xl sm:text-4xl font-sora font-bold tracking-tight text-text-main">
                Portafolio & Evidencias
              </h2>
            </motion.div>

            {/* Tab Switcher */}
            <motion.div
              className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-surface border border-border-dark w-full sm:w-fit backdrop-blur-sm"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              {TABS.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <motion.button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-colors duration-200 flex-1 sm:flex-initial justify-center ${
                      isActive ? 'text-text-main' : 'text-text-muted hover:text-text-main'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
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
                  </motion.button>
                );
              })}
            </motion.div>
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {PROJECTS.map((project, i) => (
                  <ProjectCard key={project.title} project={project} index={i} total={PROJECTS.length} />
                ))}
              </div>
            )}

            {/* CERTIFICATES */}
            {activeTab === 'certificates' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {CERTIFICATES.map((cert, i) => (
                  <CertificateItem key={cert.title} cert={cert} index={i} />
                ))}

                <RevealOnScroll delay={0.6} className="sm:col-span-2">
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mt-2 p-4 rounded-xl bg-gold/5 border border-gold/20 flex items-center justify-between hover:bg-gold/10 transition-all duration-200"
                  >
                    <span className="text-sm text-text-muted">
                      Ver todos los certificados con fechas y números de registro
                    </span>
                    <motion.a
                      href="#certifications"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold hover:text-white transition-colors group"
                      whileHover={{ x: 4 }}
                    >
                      Ver certificaciones{' '}
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                  </motion.div>
                </RevealOnScroll>
              </div>
            )}

            {/* TECH STACK */}
            {activeTab === 'tech-stack' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {Object.entries(TECH_STACK).map(([category, items], ci) => (
                  <TechCategory key={category} category={category} items={items} index={ci} />
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
