import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ChevronDown, MapPin, Calendar, Briefcase, GraduationCap, Award, Code2, Globe, ArrowLeft, Download, CheckCircle2 } from 'lucide-react';
import { useReducedMotion } from '../hooks/useReducedMotion';

// ─── Datos del CV ────────────────────────────────────────────────────────────

const CV_META = {
  name: 'Isaac Patricio Pastén Díaz',
  title: 'Estudiante de Ingeniería en Administración de Empresas',
  location: 'Macul, Santiago, Chile',
  availability: 'Abierto a trabajar',
  github: 'https://github.com/nexuslabsaihq-svg',
  linkedin: 'https://www.linkedin.com/in/isaacpasten',
};

const RESUMEN = `Estudiante en etapa final de Ingeniería en Administración de Empresas en INACAP (nota de egreso 5.9, Ranking N°2 de cohorte). Con experiencia en liderazgo de equipos de 7+ personas, gestión operativa, control de procesos y desarrollo de soluciones con Inteligencia Artificial aplicada. Fundador y desarrollador líder de Finance Nexus, ERP financiero para PYMEs chilenas.`;

const EXPERIENCIA = [
  {
    role: 'Fundador & Desarrollador Líder',
    company: 'Finance Nexus',
    companyUrl: 'https://finance-nexus.vercel.app',
    period: '2025 — Presente',
    type: 'Proyecto propio',
    description: 'Diseñé y desarrollé desde cero un ERP financiero orientado a PYMEs chilenas. Stack: React, Firebase, Gemini API. Integración de IA para automatización de reportes, análisis de liquidez y generación de documentos.',
    highlights: [
      'Arquitectura full stack con React + Firebase Firestore',
      'Integración de Gemini API para IA aplicada a finanzas',
      'UX/UI diseñada mobile-first con Tailwind CSS',
    ],
  },
  {
    role: 'Líder de Equipo — Proyecto Académico',
    company: 'INACAP',
    period: '2023 — 2024',
    type: 'Académico',
    description: 'Lideré equipos de 7+ personas en proyectos de simulación empresarial. Coordiné planificación, ejecución y presentación de propuestas administrativas y de mejora de procesos.',
    highlights: [
      'Gestión de equipo de 7+ personas',
      'Metodología Scrum aplicada a proyectos académicos',
      'Presentaciones ejecutivas ante panel evaluador',
    ],
  },
];

const EDUCACION = [
  {
    degree: 'Ingeniería en Administración de Empresas',
    institution: 'INACAP — Instituto Nacional de Capacitación',
    period: '2022 — 2026 (en curso, etapa final)',
    nota: '5.9 — Ranking N°2',
    highlights: ['Especialización en gestión operativa y control financiero', '8 certificaciones técnicas', 'Proyecto de título: Finance Nexus ERP'],
  },
];

const SKILLS_CV = [
  { name: 'Excel / Google Sheets', level: 65, category: 'Herramientas' },
  { name: 'Power BI', level: 40, category: 'Herramientas' },
  { name: 'HCMFRONT ERP', level: 70, category: 'Herramientas' },
  { name: 'Gestión de Equipos', level: 80, category: 'Blandas' },
  { name: 'Atención al Cliente', level: 90, category: 'Blandas' },
  { name: 'IA Aplicada (Gemini / Claude)', level: 75, category: 'Tecnología' },
  { name: 'React / Vite', level: 65, category: 'Tecnología' },
  { name: 'BPMN 2.0', level: 60, category: 'Metodologías' },
  { name: 'Prompt Engineering', level: 80, category: 'Tecnología' },
];

const CERTS_CV = [
  { title: 'Gestión Estratégica & Business Intelligence', year: '2025–2026', number: '11462629' },
  { title: 'Analista de Gestión Administrativo', year: '2024', number: '11462618' },
  { title: 'Asistente Administrativo', year: '2024', number: '11461648' },
  { title: 'Asistente Tributario', year: '2024', number: '11462626' },
  { title: 'Asistente en Marketing', year: '2024', number: '11462623' },
  { title: 'Compras Públicas', year: '2024', number: '11462632' },
  { title: 'Administración de la Emergencia', year: '2024', number: '11462608' },
  { title: 'Asistente en Remuneraciones', year: 'Dic. 2023', number: 'no disponible' },
];

const IDIOMAS_CV = [
  { lang: 'Español', level: 'Nativo', flag: '🇨🇱' },
  { lang: 'Inglés', level: 'Intermedio (B1)', flag: '🇬🇧' },
  { lang: 'Francés', level: 'Básico (A2)', flag: '🇫🇷' },
  { lang: 'Italiano', level: '[Nivel a confirmar]', flag: '🇮🇹' },
];

// ─── Componentes ─────────────────────────────────────────────────────────────

function AccordionSection({ title, icon: Icon, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border border-[#262C3A] rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 bg-[#151A24] hover:bg-[#1a2030] transition-colors text-left group"
        aria-expanded={open}
      >
        <div className="flex items-center gap-3">
          <Icon size={18} className="text-[#6B9BFF]" />
          <span className="font-sora font-semibold text-[#F5F6F8] group-hover:text-white transition-colors">
            {title}
          </span>
        </div>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown size={16} className="text-[#A8AFC0]" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="px-6 py-5 bg-[#0B0E14] border-t border-[#262C3A]">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function AnimatedSkillBar({ name, level, category, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const reducedMotion = useReducedMotion();

  const catColor = {
    'Herramientas': '#6B9BFF',
    'Blandas': '#E5C158',
    'Tecnología': '#9B7FFF',
    'Metodologías': '#4ADE80',
  }[category] ?? '#6B9BFF';

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-sm text-[#F5F6F8]">{name}</span>
          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#151A24] border border-[#262C3A] text-[#A8AFC0]">
            {category}
          </span>
        </div>
        <span className="text-xs font-mono text-[#A8AFC0]">{level}%</span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-[#151A24] border border-[#262C3A] overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: catColor }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={reducedMotion ? { duration: 0 } : { duration: 1.2, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      </div>
    </div>
  );
}

// ─── Página principal ─────────────────────────────────────────────────────────

export default function CVPage() {
  return (
    <div className="min-h-screen bg-[#0B0E14] font-inter">
      {/* Header del CV — distinto al resto del sitio */}
      <div className="border-b border-[#262C3A] bg-[#151A24]/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[#A8AFC0] hover:text-[#F5F6F8] transition-colors"
          >
            <ArrowLeft size={14} />
            Volver al portafolio
          </a>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-[#A8AFC0]">Curriculum Vitae — Documento vivo</span>
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Contenido */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-6">
        {/* Cabecera del CV */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="p-8 rounded-3xl bg-[#151A24] border border-[#262C3A] relative overflow-hidden"
        >
          {/* Decoración de fondo */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#6B9BFF]/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

          <div className="relative z-10 flex flex-col sm:flex-row sm:items-start gap-6">
            {/* Foto */}
            <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-[#6B9BFF]/40 shrink-0">
              <img src="/images/profile.jpg" alt="Isaac Pastén" className="w-full h-full object-cover" />
            </div>

            <div className="flex-1">
              <h1 className="font-sora font-bold text-2xl sm:text-3xl text-[#F5F6F8] mb-1">
                {CV_META.name}
              </h1>
              <p className="text-[#A8AFC0] mb-4">{CV_META.title}</p>

              <div className="flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-1.5 text-xs text-[#A8AFC0]">
                  <MapPin size={12} className="text-[#6B9BFF]" />
                  {CV_META.location}
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs text-emerald-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {CV_META.availability}
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mt-4">
                <a href={CV_META.github} target="_blank" rel="noreferrer"
                  className="text-xs text-[#6B9BFF] hover:underline">GitHub</a>
                <a href={CV_META.linkedin} target="_blank" rel="noreferrer"
                  className="text-xs text-[#6B9BFF] hover:underline">LinkedIn</a>
                <a href="/#contact"
                  className="text-xs text-[#6B9BFF] hover:underline">Contacto directo →</a>
              </div>
            </div>

            {/* Badge nota */}
            <div className="shrink-0 text-center">
              <div className="text-3xl font-sora font-bold text-[#E5C158]">5.9</div>
              <div className="text-xs text-[#A8AFC0] mt-0.5">Nota egreso</div>
              <div className="text-[10px] font-mono text-[#E5C158] mt-0.5">Ranking N°2</div>
            </div>
          </div>
        </motion.div>

        {/* Secciones acordeón */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="space-y-3"
        >
          {/* Resumen */}
          <AccordionSection title="Resumen Profesional" icon={Briefcase} defaultOpen>
            <p className="text-[#A8AFC0] leading-relaxed">{RESUMEN}</p>
          </AccordionSection>

          {/* Experiencia */}
          <AccordionSection title="Experiencia" icon={Briefcase} defaultOpen>
            <div className="space-y-8">
              {EXPERIENCIA.map((exp, i) => (
                <div key={i} className="relative pl-6 border-l-2 border-[#262C3A]">
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#6B9BFF]/30 border-2 border-[#6B9BFF]" />
                  <div className="mb-1">
                    <h3 className="font-sora font-semibold text-[#F5F6F8]">{exp.role}</h3>
                    <div className="flex items-center gap-3 mt-1">
                      {exp.companyUrl ? (
                        <a href={exp.companyUrl} target="_blank" rel="noreferrer"
                          className="text-sm text-[#6B9BFF] hover:underline">{exp.company}</a>
                      ) : (
                        <span className="text-sm text-[#A8AFC0]">{exp.company}</span>
                      )}
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#151A24] border border-[#262C3A] text-[#A8AFC0]">
                        {exp.type}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-[#A8AFC0] mt-1">
                      <Calendar size={11} />
                      {exp.period}
                    </div>
                  </div>
                  <p className="text-sm text-[#A8AFC0] leading-relaxed mt-3 mb-3">{exp.description}</p>
                  <ul className="space-y-1">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs text-[#A8AFC0]">
                        <CheckCircle2 size={12} className="text-[#6B9BFF] mt-0.5 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </AccordionSection>

          {/* Educación */}
          <AccordionSection title="Educación" icon={GraduationCap} defaultOpen>
            {EDUCACION.map((edu, i) => (
              <div key={i} className="relative pl-6 border-l-2 border-[#262C3A]">
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#E5C158]/30 border-2 border-[#E5C158]" />
                <h3 className="font-sora font-semibold text-[#F5F6F8]">{edu.degree}</h3>
                <p className="text-sm text-[#A8AFC0] mt-0.5">{edu.institution}</p>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-xs text-[#A8AFC0] flex items-center gap-1">
                    <Calendar size={11} /> {edu.period}
                  </span>
                  <span className="text-xs font-mono text-[#E5C158]">{edu.nota}</span>
                </div>
                <ul className="mt-3 space-y-1">
                  {edu.highlights.map((h, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-[#A8AFC0]">
                      <CheckCircle2 size={12} className="text-[#E5C158] mt-0.5 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </AccordionSection>

          {/* Habilidades */}
          <AccordionSection title="Habilidades" icon={Code2}>
            <div className="space-y-4">
              {SKILLS_CV.map((s, i) => (
                <AnimatedSkillBar key={s.name} {...s} delay={i * 0.06} />
              ))}
            </div>
          </AccordionSection>

          {/* Certificaciones */}
          <AccordionSection title="Certificaciones INACAP" icon={Award}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {CERTS_CV.map((c, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-[#151A24] border border-[#262C3A] hover:border-[#E5C158]/30 transition-colors">
                  <p className="text-sm font-medium text-[#F5F6F8] leading-snug mb-2">{c.title}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-[#E5C158]">{c.year}</span>
                    <span className="text-[10px] font-mono text-[#A8AFC0]">N° {c.number}</span>
                  </div>
                </div>
              ))}
            </div>
          </AccordionSection>

          {/* Idiomas */}
          <AccordionSection title="Idiomas" icon={Globe}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {IDIOMAS_CV.map((l, i) => (
                <div key={i} className="p-3 rounded-xl bg-[#151A24] border border-[#262C3A] text-center">
                  <div className="text-2xl mb-1">{l.flag}</div>
                  <div className="text-sm font-semibold text-[#F5F6F8]">{l.lang}</div>
                  <div className="text-[11px] text-[#A8AFC0] mt-0.5">{l.level}</div>
                </div>
              ))}
            </div>
          </AccordionSection>
        </motion.div>

        {/* Footer del CV */}
        <div className="text-center py-6 border-t border-[#262C3A]">
          <p className="text-xs text-[#A8AFC0]">
            CV actualizado — Septiembre 2026 ·{' '}
            <a href="/#contact" className="text-[#6B9BFF] hover:underline">Contacto directo</a>
          </p>
        </div>
      </main>
    </div>
  );
}
