import React, { useEffect, useState, useRef, lazy, Suspense } from 'react';
import { motion, useMotionValue, useTransform, useInView } from 'framer-motion';
import { ArrowDown, Linkedin, Github, Mail, Users, Award, Trophy } from 'lucide-react';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { usePointerDevice } from '../hooks/usePointerDevice';
import MagneticButton from './ui/MagneticButton';
import RevealOnScroll from './ui/RevealOnScroll';

// Lazy load the heavy 3D scene
const HeroScene = lazy(() => import('./hero/HeroScene'));

function FloatingStat({ value, suffix = '', prefix = '', decimals = 0, label, sublabel, icon: Icon, className }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const [displayValue, setDisplayValue] = useState(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    if (reducedMotion) {
      setDisplayValue(value);
      return;
    }

    let startTime = null;
    const duration = 1500;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(easeOut * value);
      if (progress < 1) requestAnimationFrame(step);
      else setDisplayValue(value);
    };
    requestAnimationFrame(step);
  }, [inView, value, reducedMotion]);

  const formatted = decimals > 0 ? displayValue.toFixed(decimals) : Math.round(displayValue);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className={`p-3 sm:p-3.5 rounded-xl bg-surface/80 backdrop-blur-sm border border-border-dark hover:border-gold/50 hover:shadow-gold hover:bg-surface transition-all duration-300 group ${className}`}
      whileHover={{ scale: 1.05, y: -4 }}
    >
      <div className="flex items-center gap-2.5">
        {Icon && (
          <motion.div
            className="w-8 h-8 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center text-gold shrink-0"
            whileHover={{ scale: 1.12, rotate: 8 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <Icon size={16} />
          </motion.div>
        )}
        <div>
          <div className="font-sora font-bold text-base sm:text-lg text-gold leading-none group-hover:text-white transition-colors">
            {prefix}{formatted}{suffix}
          </div>
          <div className="text-[11px] font-medium text-text-main leading-tight mt-0.5">
            {label}
          </div>
          {sublabel && (
            <div className="text-[9px] font-mono text-text-muted leading-none mt-0.5">
              {sublabel}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

const TERMINAL_LINES = [
  { text: '✓ Excel Intermedio', delay: 0.6 },
  { text: '✓ Power BI Básico', delay: 0.9 },
  { text: '✓ HCMFRONT ERP', delay: 1.2 },
  { text: '✓ IA Aplicada (Gemini / Claude)', delay: 1.5 },
];

export default function Hero() {
  const reducedMotion = useReducedMotion();
  const isFine = usePointerDevice();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });

  // Parallax motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [sceneMouseX, setSceneMouseX] = useState(0);
  const [sceneMouseY, setSceneMouseY] = useState(0);

  // Parallax transforms for different layers (enhanced ranges)
  const bgX = useTransform(mouseX, [-1, 1], ['-12px', '12px']);
  const bgY = useTransform(mouseY, [-1, 1], ['-10px', '10px']);
  const cardX = useTransform(mouseX, [-1, 1], ['8px', '-8px']);
  const cardY = useTransform(mouseY, [-1, 1], ['6px', '-6px']);

  // Scroll-triggered parallax
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (!isFine || reducedMotion) return;
    
    const handleMouse = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mouseX.set(x);
      mouseY.set(y);
      setSceneMouseX(x);
      setSceneMouseY(y);
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouse, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouse);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isFine, reducedMotion, mouseX, mouseY]);

  return (
    <section
      id="home"
      className="min-h-screen pt-28 pb-16 flex flex-col justify-center max-w-6xl mx-auto px-4 sm:px-6 relative overflow-hidden"
      ref={containerRef}
    >
      {/* Parallax background layers — multiple depth levels */}
      {!reducedMotion && (
        <>
          {/* Layer 1 — Far back, slow movement */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              x: bgX,
              y: bgY,
              z: -100,
            }}
            aria-hidden="true"
          >
            <div className="absolute top-1/4 right-10 w-96 h-96 rounded-full bg-accent/3 blur-3xl" />
          </motion.div>

          {/* Layer 2 — Mid, medium movement */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              y: scrollY * 0.3,
            }}
            aria-hidden="true"
          >
            <div className="absolute bottom-1/4 left-10 w-72 h-72 rounded-full bg-gold/3 blur-3xl" />
          </motion.div>

          {/* Layer 3 — Front, fast movement */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              y: scrollY * 0.5,
            }}
            aria-hidden="true"
          >
            <div className="absolute top-1/3 right-1/3 w-64 h-64 rounded-full bg-violet-custom/3 blur-2xl" />
          </motion.div>
        </>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* ── COLUMNA IZQUIERDA — Texto principal ── */}
        <div className="lg:col-span-7 space-y-6">
          {/* Badge */}
          <RevealOnScroll delay={0.1} blur={false}>
            <motion.div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface/80 backdrop-blur-sm border border-border-dark text-xs font-mono text-text-muted hover:border-accent/40 transition-all duration-200">
              <motion.span
                className="w-2 h-2 rounded-full bg-emerald-400"
                animate={!reducedMotion ? { scale: [1, 1.2, 1] } : {}}
                transition={{ duration: 2, repeat: Infinity }}
              />
              Estudiante de Administración de Empresas — INACAP
            </motion.div>
          </RevealOnScroll>

          {/* Título */}
          <RevealOnScroll delay={0.2}>
            <h1 className="font-sora font-bold text-4xl sm:text-5xl lg:text-6xl text-text-main leading-tight tracking-tight">
              Construyo{' '}
              <span className="text-accent">procesos</span>{' '}
              <br className="hidden sm:block" />
              administrativos{' '}
              <br className="hidden sm:block" />
              que{' '}
              <span className="relative inline-block">
                funcionan.
                <motion.span
                  className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-accent via-accent to-accent/0 rounded-full"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: '100%' } : { width: 0 }}
                  transition={{ delay: 0.8, duration: 0.8, ease: 'easeOut' }}
                />
              </span>
            </h1>
          </RevealOnScroll>

          {/* Bio */}
          <RevealOnScroll delay={0.3}>
            <motion.p className="text-text-muted text-base sm:text-lg leading-relaxed max-w-xl">
              En etapa final de Ingeniería en Administración de Empresas en INACAP.
              Lideré equipos de <strong className="text-text-main">7+ personas</strong>,
              desarrollé soluciones con <strong className="text-text-main">IA aplicada</strong> y
              construí herramientas que simplifican la gestión operativa real.
            </motion.p>
          </RevealOnScroll>

          {/* CTAs */}
          <RevealOnScroll delay={0.4}>
            <div className="flex flex-wrap gap-3">
              <MagneticButton>
                <motion.a
                  href="#portfolio"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent hover:bg-accent-hover text-white font-semibold text-sm transition-all duration-200 shadow-accent"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Ver Portfolio
                  <motion.div animate={{ y: [0, 4, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                    <ArrowDown size={14} className="rotate-[-90deg]" />
                  </motion.div>
                </motion.a>
              </MagneticButton>
              <MagneticButton>
                <motion.a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-surface border border-border-dark hover:border-accent/50 text-text-main font-semibold text-sm transition-all"
                  whileHover={{ y: -2, borderColor: 'rgba(107, 155, 255, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contactarme
                </motion.a>
              </MagneticButton>
              <MagneticButton>
                <motion.a
                  href="/cv"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-transparent border border-border-dark hover:border-gold/50 text-text-muted hover:text-gold font-semibold text-sm transition-all"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Ver CV
                </motion.a>
              </MagneticButton>
            </div>
          </RevealOnScroll>

          {/* Social links */}
          <RevealOnScroll delay={0.5}>
            <motion.div className="flex items-center gap-4">
              {[
                { href: 'https://www.linkedin.com/in/isaacpasten', icon: Linkedin, label: 'LinkedIn' },
                { href: 'https://github.com/nexuslabsaihq-svg', icon: Github, label: 'GitHub' },
                { href: 'mailto:isaacpasten.dev@gmail.com', icon: Mail, label: 'Email' },
              ].map(({ href, icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel={href.startsWith('mailto') ? undefined : 'noreferrer'}
                  className="text-text-muted hover:text-accent transition-colors"
                  whileHover={{ scale: 1.2, rotate: 12 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`${label} de Isaac Pastén`}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
              <span className="h-px flex-1 max-w-16 bg-border-dark" />
              <span className="text-xs font-mono text-text-muted">Macul, Santiago</span>
            </motion.div>
          </RevealOnScroll>

          {/* Terminal snippet */}
          <RevealOnScroll delay={0.6}>
            <motion.div
              className="rounded-xl bg-surface/80 backdrop-blur-sm border border-border-dark p-4 max-w-sm hover:border-accent/40 transition-all duration-300"
              whileHover={{ y: -4, borderColor: 'rgba(107, 155, 255, 0.4)' }}
            >
              <div className="flex items-center gap-1.5 mb-3">
                <svg className="w-3 h-3 text-text-muted" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 6.75L15 12l-6 5.25v-10.5z" />
                </svg>
                <span className="text-xs font-mono text-text-muted">stack.sh</span>
                <div className="ml-auto flex gap-1">
                  {['bg-red-500/60', 'bg-yellow-500/60', 'bg-emerald-500/60'].map((c, i) => (
                    <div key={i} className={`w-2 h-2 rounded-full ${c}`} />
                  ))}
                </div>
              </div>
              <div className="space-y-1">
                {TERMINAL_LINES.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: reducedMotion ? 0 : line.delay, duration: 0.3 }}
                    className="text-xs font-mono text-emerald-400"
                  >
                    {line.text}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </RevealOnScroll>
        </div>

        {/* ── COLUMNA DERECHA — Foto + 3D decorativo ── */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
          {/* 3D Scene — fondo decorativo, detrás de la foto */}
          <motion.div
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{
              x: cardX,
              y: cardY,
              scale: !reducedMotion ? 1 + scrollY * 0.0001 : 1,
            }}
            aria-hidden="true"
          >
            <div className="w-full h-full opacity-60">
              <Suspense fallback={null}>
                <HeroScene mouseX={sceneMouseX} mouseY={sceneMouseY} />
              </Suspense>
            </div>
          </motion.div>

          {/* Foto de perfil — elemento principal */}
          <motion.div
            style={!reducedMotion ? { x: cardX, y: cardY } : {}}
            className="relative z-10"
          >
            {/* Aura luminosa */}
            <motion.div
              className="absolute inset-0 rounded-2xl bg-accent/20 blur-2xl scale-110"
              animate={!reducedMotion ? { scale: [1.1, 1.15, 1.1] } : {}}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              aria-hidden="true"
            />

            {/* Marco de la foto */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
              className="relative rounded-2xl overflow-hidden border-2 border-accent/40 shadow-accent-lg"
              style={{ width: 260, height: 320 }}
              whileHover={!reducedMotion ? { scale: 1.02 } : {}}
            >
              <img
                src="/images/profile.jpg"
                alt="Isaac Patricio Pastén Díaz — Estudiante de Administración de Empresas"
                className="w-full h-full object-cover object-center"
                loading="eager"
              />
              {/* Overlay sutil de color */}
              <div className="absolute inset-0 bg-gradient-to-t from-base/60 via-transparent to-transparent" />
            </motion.div>

            {/* Floating stats — paralax ligero */}
            <motion.div
              style={!reducedMotion ? { x: cardX, y: cardY } : {}}
              className="absolute -bottom-4 -right-4 sm:-right-8"
            >
              <FloatingStat
                value={7}
                suffix="+"
                label="Personas lideradas"
                sublabel="Proyecto académico real"
                icon={Users}
              />
            </motion.div>

            <motion.div
              style={!reducedMotion ? { x: cardX, y: cardY } : {}}
              className="absolute -top-4 -left-4 sm:-left-8"
            >
              <FloatingStat
                value={8}
                label="Certificaciones INACAP"
                sublabel="Todas verificadas"
                icon={Award}
              />
            </motion.div>

            <motion.div
              style={!reducedMotion ? { x: cardX, y: cardY } : {}}
              className="absolute top-1/2 -right-4 sm:-right-10 -translate-y-1/2"
            >
              <FloatingStat
                value={5.9}
                decimals={1}
                label="Nota de egreso"
                sublabel="Ranking N°2 de cohorte"
                icon={Trophy}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={reducedMotion ? {} : { y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={18} className="text-text-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
