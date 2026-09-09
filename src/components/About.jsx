import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Mail, Calendar, User, ChevronRight, Zap } from 'lucide-react';
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
  { name: 'IA Aplicada', level: 75, color: 'violet-custom' },
];

const COLOR_MAP = {
  accent: { bar: 'bg-accent', glow: 'shadow-accent' },
  gold: { bar: 'bg-gold', glow: 'shadow-gold' },
  violet: { bar: 'bg-violet-custom', glow: '' },
};

function SkillBar({ name, level, color, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const reducedMotion = useReducedMotion();
  const { bar, glow } = COLOR_MAP[color] || COLOR_MAP.accent;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -12 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
      transition={{ duration: 0.5, delay }}
      className="space-y-2"
    >
      <div className="flex justify-between items-center">
        <motion.span className="text-sm font-medium text-text-main group-hover:text-white transition-colors">
          {name}
        </motion.span>
        <motion.span
          className="text-xs font-mono text-text-muted font-semibold"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: delay + 0.3 }}
        >
          {level}%
        </motion.span>
      </div>
      <div className="h-2 w-full bg-surface rounded-full overflow-hidden border border-border-dark/50 relative group">
        <motion.div
          className={`h-full rounded-full ${bar} ${glow} transition-all duration-300`}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={reducedMotion ? { duration: 0 } : {
            duration: 1.4,
            delay: delay + 0.1,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        />
        {/* Glow effect on bar */}
        <motion.div
          className={`absolute inset-0 rounded-full ${bar} opacity-20 blur-sm`}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={reducedMotion ? { duration: 0 } : {
            duration: 1.4,
            delay: delay + 0.1,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        />
      </div>
    </motion.div>
  );
}

function InfoCard({ icon: Icon, label, value, delay }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 16, scale: 0.9 }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="flex items-center gap-3 p-4 rounded-xl bg-surface/80 border border-border-dark hover:border-accent/30 transition-all duration-200 group"
    >
      <motion.div
        className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0"
        whileHover={{ scale: 1.12, rotate: 8 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      >
        <Icon size={16} />
      </motion.div>
      <div>
        <div className="text-[10px] font-mono text-text-muted uppercase tracking-wider">{label}</div>
        <div className="text-sm font-medium text-text-main leading-tight mt-0.5 break-all group-hover:text-white transition-colors">
          {value}
        </div>
      </div>
    </motion.div>
  );
}

export default function About() {
  const reducedMotion = useReducedMotion();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section id="about" ref={sectionRef} className="py-24 max-w-6xl mx-auto px-4 sm:px-6 relative overflow-hidden">
      {/* Fondo decorativo */}
      {!reducedMotion && (
        <motion.div
          className="absolute inset-0 pointer-events-none -z-10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="absolute -top-1/2 left-1/4 w-96 h-96 rounded-full bg-accent/5 blur-3xl"
            animate={!reducedMotion ? { scale: [1, 1.1, 1], y: [0, -20, 0] } : {}}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      )}

      {/* Section label */}
      <RevealOnScroll delay={0}>
        <p className="font-mono text-xs font-semibold tracking-wider text-accent uppercase mb-3">
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
            <motion.div className="space-y-5 text-text-muted leading-relaxed">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Soy estudiante en etapa final de{' '}
                <strong className="text-text-main">Ingeniería en Administración de Empresas</strong>{' '}
                en INACAP, con foco en gestión operativa, control de procesos y automatización
                administrativa con Inteligencia Artificial.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Lideré equipos de <strong className="text-text-main">7+ personas</strong> en
                contextos académicos reales, obtuve una nota de egreso de{' '}
                <strong className="text-text-main">5.9</strong> y actualmente desarrollo{' '}
                <strong className="text-text-main">Finance Nexus</strong>, un ERP financiero
                para PYMEs chilenas con integración de IA (Gemini API).
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Combino sólida formación en administración con habilidades técnicas en
                React, Firebase y{' '}
                <strong className="text-text-main">prompt engineering aplicado</strong> —
                porque los mejores procesos son los que se pueden automatizar.
              </motion.p>
            </motion.div>
          </RevealOnScroll>

          {/* Quick info cards */}
          <RevealOnScroll delay={0.2}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {QUICK_INFO.map(({ icon, label, value }, idx) => (
                <InfoCard key={label} icon={icon} label={label} value={value} delay={0.1 + idx * 0.08} />
              ))}
            </div>
          </RevealOnScroll>

          {/* CTA download CV */}
          <RevealOnScroll delay={0.3}>
            <motion.a
              href="/cv"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-white transition-colors group"
              whileHover={{ x: 4 }}
            >
              <Zap size={14} className="group-hover:rotate-12 transition-transform" />
              Ver CV interactivo completo
              <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </RevealOnScroll>
        </div>

        {/* ── Columna derecha — Skills con barras ── */}
        <RevealOnScroll delay={0.15}>
          <motion.div id="skills" className="space-y-6">
            <motion.h3
              className="text-lg font-sora font-semibold text-text-main"
              initial={{ opacity: 0, y: -8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              Mi Expertise
            </motion.h3>
            <div className="space-y-6">
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
            <motion.div
              className="mt-6 p-4 rounded-xl bg-accent/5 border border-accent/20 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.8 }}
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-xs text-text-muted leading-relaxed">
                <strong className="text-accent">IA Aplicada</strong> incluye: prompt engineering,
                integración de modelos Gemini y Claude en flujos de trabajo reales, y orquestación
                de agentes para automatización administrativa.
              </p>
            </motion.div>
          </motion.div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
