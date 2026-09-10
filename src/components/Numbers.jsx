import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Award, Star, Trophy, Sparkles } from 'lucide-react';
import RevealOnScroll from './ui/RevealOnScroll';
import { useReducedMotion } from '../hooks/useReducedMotion';

const STATS_DATA = [
  {
    value: 7,
    suffix: '+',
    label: 'Personas Lideradas',
    sublabel: 'Operación retail',
    icon: Users,
    color: 'accent',
    accentColor: '#6B9BFF',
  },
  {
    value: 8,
    label: 'Certificaciones INACAP',
    sublabel: 'Todas verificadas',
    icon: Award,
    color: 'gold',
    accentColor: '#E5C158',
  },
  {
    value: 5.9,
    decimals: 1,
    label: 'Nota de Egreso',
    sublabel: 'Ranking N°2 cohorte',
    icon: Star,
    color: 'violet-custom',
    accentColor: '#9B7FFF',
  },
  {
    value: 2,
    prefix: 'N°',
    label: 'Ranking de Egreso',
    sublabel: 'De 3 egresados',
    icon: Trophy,
    color: 'green-custom',
    accentColor: '#4ADE80',
  },
];

// Map de colores a clases Tailwind
const COLOR_MAP = {
  accent: {
    text: 'text-accent',
    bg: 'bg-accent/10',
    border: 'border-accent/30',
    shadow: 'shadow-accent',
    glow: 'rgba(107, 155, 255, 0.3)',
  },
  gold: {
    text: 'text-gold',
    bg: 'bg-gold/10',
    border: 'border-gold/30',
    shadow: 'shadow-gold',
    glow: 'rgba(229, 193, 88, 0.3)',
  },
  'violet-custom': {
    text: 'text-violet-custom',
    bg: 'bg-violet-custom/10',
    border: 'border-violet-custom/30',
    shadow: 'shadow-accent',
    glow: 'rgba(155, 127, 255, 0.3)',
  },
  'green-custom': {
    text: 'text-green-custom',
    bg: 'bg-green-custom/10',
    border: 'border-green-custom/30',
    shadow: 'shadow-accent',
    glow: 'rgba(74, 222, 128, 0.3)',
  },
};

// Partículas de sparkle (efecto decorativo)
function Particle({ delay }) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) return null;

  return (
    <motion.div
      className="absolute w-1 h-1 rounded-full bg-white"
      initial={{
        opacity: 0,
        x: Math.random() * 40 - 20,
        y: Math.random() * 40 - 20,
        scale: 0,
      }}
      animate={{
        opacity: [0, 1, 0],
        y: [0, -30, -60],
        scale: [0, 1, 0],
      }}
      transition={{
        duration: 1.2,
        delay,
        ease: 'easeOut',
      }}
    />
  );
}

// Stat Counter con animación fluida
function StatCounter({ value, suffix = '', prefix = '', decimals = 0 }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!isInView) return;

    if (reducedMotion) {
      setDisplayValue(value);
      return;
    }

    let startTime = null;
    const duration = 2000; // 2s para efecto más dramático
    const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4); // Curva suave

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = easeOutQuart(progress);
      setDisplayValue(eased * value);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setDisplayValue(value);
      }
    };

    requestAnimationFrame(step);
  }, [isInView, value, reducedMotion]);

  const formatted =
    decimals > 0 ? displayValue.toFixed(decimals) : Math.round(displayValue);

  return (
    <span ref={ref}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

// Stat Card con flip effect
function StatCard({ stat, index, total, reducedMotion }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });
  const colorClass = COLOR_MAP[stat.color];
  const Icon = stat.icon;

  return (
    <RevealOnScroll delay={index * 0.1}>
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, scale: 0.85, rotateY: -20 }}
        animate={
          isInView
            ? { opacity: 1, scale: 1, rotateY: 0 }
            : { opacity: 0, scale: 0.85, rotateY: -20 }
        }
        transition={{
          duration: 0.6,
          delay: index * 0.08,
          ease: [0.34, 1.56, 0.64, 1], // spring-like
        }}
        onHoverStart={() => !reducedMotion && setIsFlipped(true)}
        onHoverEnd={() => !reducedMotion && setIsFlipped(false)}
        style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
        className="h-full group cursor-pointer"
      >
        {/* Card Container */}
        <motion.div
          animate={!reducedMotion && isFlipped ? { rotateY: 180 } : { rotateY: 0 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 300, damping: 30 }}
          style={{ transformStyle: 'preserve-3d' }}
          className="relative w-full h-full"
        >
          {/* Front face */}
          <motion.div
            style={{ backfaceVisibility: 'hidden' }}
            className={`p-6 rounded-2xl bg-gradient-to-br ${stat.color === 'accent' ? 'from-accent/5 to-accent/10' : stat.color === 'gold' ? 'from-gold/5 to-gold/10' : stat.color === 'violet-custom' ? 'from-violet-custom/5 to-violet-custom/10' : 'from-green-custom/5 to-green-custom/10'} border ${colorClass.border} backdrop-blur-sm h-full flex flex-col justify-between relative overflow-hidden`}
          >
            {/* Glow aura */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: `radial-gradient(600px circle at center, ${colorClass.glow}, transparent 60%)`,
              }}
            />

            {/* Sparkle particles on hover */}
            {!reducedMotion && (
              <>
                {[0, 0.2, 0.4, 0.6].map((delay) => (
                  <Particle key={delay} delay={delay} />
                ))}
              </>
            )}

            {/* Content */}
            <div className="relative z-10 space-y-4">
              {/* Header con Icon */}
              <div className="flex items-start justify-between">
                <motion.div
                  whileHover={!reducedMotion ? { scale: 1.12, rotate: 8 } : {}}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  className={`p-3 rounded-lg ${colorClass.bg} border ${colorClass.border} ${colorClass.text}`}
                >
                  <Icon size={20} />
                </motion.div>

                {/* Badge de estatus */}
                <motion.span
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.08 + 0.4, duration: 0.3 }}
                  className={`px-2 py-1 rounded-full text-[10px] font-mono font-semibold ${colorClass.bg} ${colorClass.text} border ${colorClass.border}`}
                >
                  Top {index + 1}
                </motion.span>
              </div>

              {/* Number counter */}
              <motion.div className="space-y-1">
                <motion.div
                  className={`font-sora font-bold text-3xl sm:text-4xl ${colorClass.text} tracking-tight`}
                  animate={!reducedMotion && isFlipped ? { scale: 0.8 } : { scale: 1 }}
                >
                  <StatCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                    decimals={stat.decimals}
                  />
                </motion.div>

                <p className="text-xs sm:text-sm font-medium text-text-main">
                  {stat.label}
                </p>
                <p className="text-[10px] font-mono text-text-muted">
                  {stat.sublabel}
                </p>
              </motion.div>
            </div>

            {/* Bottom accent line */}
            <motion.div
              className={`absolute bottom-0 left-0 h-1 ${colorClass.border} bg-gradient-to-r from-transparent via-${stat.color} to-transparent`}
              style={{
                background: `linear-gradient(to right, transparent, ${stat.accentColor}, transparent)`,
              }}
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ delay: index * 0.08 + 0.3, duration: 0.8 }}
            />
          </motion.div>

          {/* Back face (flip content) */}
          <motion.div
            style={{ backfaceVisibility: 'hidden', rotateY: 180 }}
            className={`absolute inset-0 p-6 rounded-2xl bg-gradient-to-br ${stat.color === 'accent' ? 'from-accent/10 to-accent/5' : stat.color === 'gold' ? 'from-gold/10 to-gold/5' : stat.color === 'violet-custom' ? 'from-violet-custom/10 to-violet-custom/5' : 'from-green-custom/10 to-green-custom/5'} border ${colorClass.border} backdrop-blur-sm h-full flex flex-col justify-center relative`}
          >
            <div className="relative z-10 text-center space-y-3">
              <Sparkles className={`mx-auto ${colorClass.text}`} size={28} />
              <p className="text-sm font-sora font-semibold text-text-main">
                Logro verificado
              </p>
              <p className="text-xs text-text-muted leading-relaxed">
                {stat.color === 'accent' &&
                  'Experiencia real en liderazgo de equipos.'}
                {stat.color === 'gold' &&
                  'Certificaciones oficiales INACAP con registro.'}
                {stat.color === 'violet-custom' &&
                  'Nota basada en desempeño académico real.'}
                {stat.color === 'green-custom' &&
                  'Ranking según calificación final de cohorte.'}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </RevealOnScroll>
  );
}

export default function Numbers() {
  const reducedMotion = useReducedMotion();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      id="numbers"
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
            className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gold/5 blur-3xl"
            animate={!reducedMotion ? { scale: [1, 1.1, 1] } : {}}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-1/3 left-1/4 w-72 h-72 rounded-full bg-accent/5 blur-3xl"
            animate={!reducedMotion ? { scale: [1.1, 1, 1.1] } : {}}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      )}

      <div className="space-y-10 relative z-10">
        {/* Header */}
        <RevealOnScroll>
          <motion.div className="text-center max-w-2xl mx-auto space-y-3">
            <p className="font-mono text-xs font-semibold tracking-wider text-accent uppercase">
              // 05. By The Numbers
            </p>
            <h2 className="text-3xl sm:text-4xl font-sora font-bold tracking-tight text-text-main">
              Logros & Métricas Cuantitativas
            </h2>
            <p className="text-sm text-text-muted leading-relaxed max-w-lg mx-auto">
              Resultados académicos y de liderazgo alcanzados durante mi trayectoria formativa. Cada número representa dedicación y excelencia.
            </p>
          </motion.div>
        </RevealOnScroll>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS_DATA.map((stat, idx) => (
            <StatCard
              key={stat.label}
              stat={stat}
              index={idx}
              total={STATS_DATA.length}
              reducedMotion={reducedMotion}
            />
          ))}
        </div>

        {/* Bottom insight */}
        <RevealOnScroll delay={0.6}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 p-5 rounded-xl bg-surface/50 border border-border-dark backdrop-blur-sm text-center"
          >
            <p className="text-xs sm:text-sm text-text-muted">
              <strong className="text-text-main">Verificabilidad:</strong> Todos los logros pueden ser corroborados. Contacta para acceder a registros oficiales de INACAP.
            </p>
          </motion.div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
