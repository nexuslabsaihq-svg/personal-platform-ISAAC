import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Mail, Calendar, User, ChevronRight } from 'lucide-react';
import RevealOnScroll from './ui/RevealOnScroll';
import { useReducedMotion } from '../hooks/useReducedMotion';

const QUICK_INFO = [
  { icon: User, label: 'Nombre', value: 'Isaac Patricio Pastén Díaz' },
  { icon: MapPin, label: 'Ubicación', value: 'Macul, Santiago' },
  { icon: Mail, label: 'Email', value: 'isaacpasten.dev@gmail.com' },
  { icon: Calendar, label: 'Disponibilidad', value: 'Abierto a trabajar' },
];

const SKILLS = [
  { name: 'Excel Intermedio', level: 65, color: 'accent' },
  { name: 'Power BI Básico', level: 40, color: 'accent' },
  { name: 'HCMFRONT ERP', level: 70, color: 'accent' },
  { name: 'Gestión de Equipos', level: 80, color: 'gold' },
  { name: 'Atención al Cliente', level: 90, color: 'gold' },
  { name: 'IA Aplicada', level: 75, color: 'purple' },
];

const COLOR_MAP = {
  accent: { bar: 'bg-accent', glow: 'shadow-accent' },
  gold: { bar: 'bg-gold', glow: 'shadow-gold' },
  purple: { bar: 'bg-purple-brand', glow: '' },
};

function SkillBar({ name, level, color, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const reducedMotion = useReducedMotion();
  const { bar } = COLOR_MAP[color] || COLOR_MAP.accent;

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-text-main">{name}</span>
        <span className="text-xs font-mono text-text-muted">{level}%</span>
      </div>
      <div className="h-1.5 w-full bg-surface rounded-full overflow-hidden border border-border-dark">
        <motion.div
          className={`h-full rounded-full ${bar}`}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={reducedMotion ? { duration: 0 } : {
            duration: 1.2,
            delay,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        />
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 max-w-6xl mx-auto px-4 sm:px-6">
      {/* Section label */}
      <RevealOnScroll delay={0}>
        <p className="font-mono text-xs font-semibold tracking-wider text-accent uppercase mb-2">
          // 01. About Me
        </p>
        <h2 className="text-3xl sm:text-4xl font-sora font-bold tracking-tight text-text-main mb-12">
          Quién soy
        </h2>
      </RevealOnScroll>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* ── Columna izquierda — Bio y datos rápidos ── */}
        <div className="space-y-8">
          <RevealOnScroll delay={0.1}>
            <div className="space-y-4 text-text-muted leading-relaxed">
              <p>
                Soy estudiante en etapa final de{' '}
                <strong className="text-text-main">Ingeniería en Administración de Empresas</strong>{' '}
                en INACAP, con foco en gestión operativa, control de procesos y automatización
                administrativa con Inteligencia Artificial.
              </p>
              <p>
                Lideré equipos de <strong className="text-text-main">7+ personas</strong> en
                contextos académicos reales, obtuve una nota de egreso de{' '}
                <strong className="text-text-main">5.9</strong> y actualmente desarrollo{' '}
                <strong className="text-text-main">Finance Nexus</strong>, un ERP financiero
                para PYMEs chilenas con integración de IA (Gemini API).
              </p>
              <p>
                Combino sólida formación en administración con habilidades técnicas en
                React, Firebase y{' '}
                <strong className="text-text-main">prompt engineering aplicado</strong> —
                porque los mejores procesos son los que se pueden automatizar.
              </p>
            </div>
          </RevealOnScroll>

          {/* Quick info cards */}
          <RevealOnScroll delay={0.2}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {QUICK_INFO.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-surface border border-border-dark hover:border-accent/30 transition-colors duration-200"
                >
                  <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                    <Icon size={14} />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-text-muted uppercase tracking-wider">{label}</div>
                    <div className="text-sm font-medium text-text-main leading-tight mt-0.5 break-all">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          {/* CTA download CV */}
          <RevealOnScroll delay={0.3}>
            <a
              href="/cv"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-white transition-colors group"
            >
              Ver CV interactivo completo
              <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </RevealOnScroll>
        </div>

        {/* ── Columna derecha — Skills con barras ── */}
        <RevealOnScroll delay={0.15}>
          <div id="skills" className="space-y-6">
            <h3 className="text-lg font-sora font-semibold text-text-main">
              Mi Expertise
            </h3>
            <div className="space-y-5">
              {SKILLS.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={skill.color}
                  delay={i * 0.1 + 0.2}
                />
              ))}
            </div>

            {/* Nota sobre IA */}
            <div className="mt-6 p-4 rounded-xl bg-accent/5 border border-accent/20">
              <p className="text-xs text-text-muted leading-relaxed">
                <strong className="text-accent">IA Aplicada</strong> incluye: prompt engineering,
                integración de modelos Gemini y Claude en flujos de trabajo reales, y orquestación
                de agentes para automatización administrativa.
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
