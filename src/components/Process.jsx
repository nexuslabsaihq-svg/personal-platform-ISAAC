import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Search, CalendarDays, Play, ShieldAlert, CheckCircle, CheckCheck } from 'lucide-react';
import RevealOnScroll from './ui/RevealOnScroll';
import { usePointerDevice } from '../hooks/usePointerDevice';
import { useReducedMotion } from '../hooks/useReducedMotion';

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Diagnóstico',
    desc: 'Entender el objetivo del negocio y levantar información operativa detallada.',
    icon: Search,
    color: 'accent',
    bgGradient: 'from-accent/10 to-accent/5',
  },
  {
    step: '02',
    title: 'Planificación',
    desc: 'Definir tareas críticas, plazos de cumplimiento y recursos necesarios.',
    icon: CalendarDays,
    color: 'violet-custom',
    bgGradient: 'from-violet-custom/10 to-violet-custom/5',
  },
  {
    step: '03',
    title: 'Ejecución',
    desc: 'Aplicar el procedimiento administrativo con precisión y coordinación de equipo.',
    icon: Play,
    color: 'green-custom',
    bgGradient: 'from-green-custom/10 to-green-custom/5',
  },
  {
    step: '04',
    title: 'Control',
    desc: 'Verificar el cumplimiento riguroso de procedimientos, normas y estándares.',
    icon: ShieldAlert,
    color: 'gold',
    bgGradient: 'from-gold/10 to-gold/5',
  },
  {
    step: '05',
    title: 'Auditoría',
    desc: 'Revisar cuadraturas financieras, control de inventario y análisis de desviaciones.',
    icon: CheckCircle,
    color: 'accent',
    bgGradient: 'from-accent/10 to-accent/5',
  },
  {
    step: '06',
    title: 'Entrega',
    desc: 'Reportar resultados cuantitativos, documentar aprendizajes y cerrar el ciclo.',
    icon: CheckCheck,
    color: 'gold',
    bgGradient: 'from-gold/10 to-gold/5',
  },
];

// Map de colores a clases Tailwind
const COLOR_MAP = {
  accent: {
    text: 'text-accent',
    border: 'border-accent/30 hover:border-accent/60',
    bg: 'bg-accent/10',
    shadow: 'shadow-accent/20',
    glow: 'rgba(107, 155, 255, 0.2)',
    borderGlow: 'border-accent/60',
  },
  'violet-custom': {
    text: 'text-violet-custom',
    border: 'border-violet-custom/30 hover:border-violet-custom/60',
    bg: 'bg-violet-custom/10',
    shadow: 'shadow-accent/20',
    glow: 'rgba(155, 127, 255, 0.2)',
    borderGlow: 'border-violet-custom/60',
  },
  'green-custom': {
    text: 'text-green-custom',
    border: 'border-green-custom/30 hover:border-green-custom/60',
    bg: 'bg-green-custom/10',
    shadow: 'shadow-accent/20',
    glow: 'rgba(74, 222, 128, 0.2)',
    borderGlow: 'border-green-custom/60',
  },
  gold: {
    text: 'text-gold',
    border: 'border-gold/30 hover:border-gold/60',
    bg: 'bg-gold/10',
    shadow: 'shadow-gold/20',
    glow: 'rgba(229, 193, 88, 0.2)',
    borderGlow: 'border-gold/60',
  },
};

// Timeline connector línea animada
function TimelineConnector({ index, total, color, reducedMotion }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const isLast = index === total - 1;

  if (isLast || reducedMotion) return null;

  const colorClass = COLOR_MAP[color];

  return (
    <motion.div
      ref={ref}
      className={`absolute left-1/2 top-full w-0.5 h-12 -translate-x-1/2 ${
        isLast ? 'hidden' : 'block'
      } origin-top`}
      initial={{ scaleY: 0 }}
      animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div
        className={`w-full h-full bg-gradient-to-b from-${color} to-transparent`}
        style={{
          background: `linear-gradient(to bottom, ${colorClass.glow}, transparent)`,
        }}
      />
    </motion.div>
  );
}

// Process Card con 3D tilt y glow effects
function ProcessCard({ step, title, desc, icon: Icon, color, bgGradient, index, total, reducedMotion, isFine }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const colorClass = COLOR_MAP[color];

  const handleMouseMove = (e) => {
    if (!isFine || reducedMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * -6;
    const y = ((e.clientX - rect.left) / rect.width - 0.5) * 6;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <div className="relative h-full">
      {/* Timeline connector */}
      <TimelineConnector index={index} total={total} color={color} reducedMotion={reducedMotion} />

      {/* Card */}
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={!reducedMotion ? { rotateX: tilt.x, rotateY: tilt.y } : {}}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        style={{ transformStyle: 'preserve-3d', perspective: 800 }}
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{
          duration: 0.5,
          delay: index * 0.08,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        className="group relative h-full"
      >
        {/* Glow background on hover */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -inset-1"
          style={{
            background: `radial-gradient(600px circle at center, ${colorClass.glow}, transparent 60%)`,
          }}
        />

        {/* Card content */}
        <motion.div
          className={`relative p-6 h-full rounded-2xl bg-gradient-to-br ${bgGradient} border ${colorClass.border} backdrop-blur-sm transition-all duration-300 flex flex-col justify-between`}
          whileHover={!reducedMotion ? { y: -2 } : {}}
        >
          {/* Step header */}
          <div className="flex items-start justify-between mb-4">
            <motion.span
              className={`font-mono text-2xl sm:text-3xl font-bold ${colorClass.text} tracking-tight`}
              whileHover={!reducedMotion ? { scale: 1.08 } : {}}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              {step}
            </motion.span>

            {/* Icon box */}
            <motion.div
              className={`p-2.5 rounded-lg border ${colorClass.border} ${colorClass.bg} flex items-center justify-center ${colorClass.text}`}
              whileHover={!reducedMotion ? { scale: 1.15, rotate: 12 } : {}}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <Icon size={20} />
            </motion.div>
          </div>

          {/* Content */}
          <div className="space-y-2 flex-1">
            <h3 className={`font-sora text-lg font-semibold text-text-main group-hover:text-white transition-colors`}>
              {title}
            </h3>
            <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
              {desc}
            </p>
          </div>

          {/* Progress indicator */}
          <motion.div
            className="mt-4 h-1 w-full bg-surface rounded-full overflow-hidden border border-border-dark"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: index * 0.08 + 0.3 }}
          >
            <motion.div
              className={`h-full rounded-full`}
              style={{ background: colorClass.glow }}
              initial={{ width: 0 }}
              animate={isInView ? { width: `${((index + 1) / total) * 100}%` } : { width: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.08 + 0.4,
                ease: 'easeOut',
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function Process() {
  const reducedMotion = useReducedMotion();
  const isFine = usePointerDevice();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      id="process"
      ref={sectionRef}
      className="py-24 max-w-6xl mx-auto px-4 sm:px-6 border-t border-border-dark/40 relative overflow-hidden"
    >
      {/* Fondo decorativo animado */}
      {!reducedMotion && (
        <motion.div
          className="absolute inset-0 pointer-events-none -z-10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="absolute top-1/3 left-0 w-96 h-96 rounded-full bg-accent/5 blur-3xl"
            animate={!reducedMotion ? { y: [0, -30, 0] } : {}}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-1/4 right-0 w-72 h-72 rounded-full bg-gold/5 blur-3xl"
            animate={!reducedMotion ? { y: [0, 30, 0] } : {}}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      )}

      <div className="space-y-12 relative z-10">
        {/* Header */}
        <RevealOnScroll>
          <motion.div className="space-y-3">
            <p className="font-mono text-xs font-semibold tracking-wider text-accent uppercase">
              // 04. My Work Process
            </p>
            <h2 className="text-3xl sm:text-4xl font-sora font-bold tracking-tight text-text-main">
              Metodología de Gestión Administrativa
            </h2>
            <p className="text-sm text-text-muted max-w-xl leading-relaxed">
              Un marco estructurado y repetible para asegurar orden, control financiero y eficiencia en cada tarea operativa.
            </p>
          </motion.div>
        </RevealOnScroll>

        {/* Process Grid with timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative">
          {PROCESS_STEPS.map((item, idx) => (
            <ProcessCard
              key={idx}
              {...item}
              index={idx}
              total={PROCESS_STEPS.length}
              reducedMotion={reducedMotion}
              isFine={isFine}
            />
          ))}
        </div>

        {/* Completion indicator */}
        <RevealOnScroll delay={0.5}>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 p-5 rounded-xl bg-surface/50 border border-border-dark backdrop-blur-sm text-center"
          >
            <p className="text-sm text-text-muted">
              Este proceso garantiza <strong className="text-accent">orden operativo</strong>,{' '}
              <strong className="text-gold">precisión financiera</strong> y{' '}
              <strong className="text-text-main">resultados cuantificables</strong>.
            </p>
          </motion.div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
