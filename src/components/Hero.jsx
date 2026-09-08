import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowDown, Linkedin, Github, Mail, CheckCircle2, Terminal, Award, Users, Trophy } from 'lucide-react';

function FloatingStat({ value, suffix = '', prefix = '', decimals = 0, label, sublabel, icon: Icon, className }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let startTime = null;
    const duration = 1500;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(easeOut * value);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setDisplayValue(value);
      }
    };

    requestAnimationFrame(step);
  }, [isInView, value]);

  const formatted = decimals > 0 
    ? displayValue.toFixed(decimals) 
    : Math.round(displayValue);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className={`p-3 sm:p-3.5 rounded-xl bg-[#131722]/90 border border-[#1F2430] backdrop-blur-md shadow-xl shadow-black/50 hover:border-gold/50 transition-all ${className}`}
    >
      <div className="flex items-center gap-2.5">
        {Icon && (
          <div className="w-8 h-8 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center text-gold shrink-0">
            <Icon size={16} />
          </div>
        )}
        <div>
          <div className="font-sora font-bold text-base sm:text-lg text-gold leading-none">
            {prefix}{formatted}{suffix}
          </div>
          <div className="text-[11px] font-medium text-[#E8EAED] leading-tight mt-0.5">
            {label}
          </div>
          {sublabel && (
            <div className="text-[9px] font-mono text-[#8B92A5] leading-none mt-0.5">
              {sublabel}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen pt-28 pb-16 flex flex-col justify-center max-w-6xl mx-auto px-4 sm:px-6"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* COLUMNA IZQUIERDA */}
        <div className="lg:col-span-7 space-y-6">
          {/* Badge pequeño arriba */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#131722] border border-[#1F2430] text-xs font-mono text-[#8B92A5]"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Estudiante de Administración de Empresas</span>
          </motion.div>

          {/* Título grande en 3 líneas */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            className="text-4xl sm:text-5xl lg:text-[3.5rem] font-sora font-bold tracking-tight text-[#E8EAED] leading-[1.12]"
          >
            Construyo procesos <br />
            administrativos que <br />
            <span className="text-accent drop-shadow-[0_0_25px_rgba(91,141,239,0.35)]">
              funcionan.
            </span>
          </motion.h1>

          {/* Párrafo de 2 líneas */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
            className="text-base sm:text-lg text-[#8B92A5] leading-relaxed max-w-xl"
          >
            En última etapa de Ingeniería en Administración de Empresas en INACAP, con sólida experiencia liderando equipos de más de 7 personas y optimizando la gestión operativa.
          </motion.p>

          {/* Dos botones */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
            className="pt-2 flex flex-wrap items-center gap-4"
          >
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-accent text-[#0B0E14] font-sora font-semibold text-sm hover:bg-accent-hover hover:shadow-[0_0_25px_rgba(91,141,239,0.4)] transition-all"
            >
              <span>Ver Portfolio</span>
              <ArrowDown size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#131722] text-[#E8EAED] font-sora font-medium text-sm border border-[#1F2430] hover:border-accent/60 hover:text-white transition-all"
            >
              <span>Contactarme</span>
            </a>
          </motion.div>

          {/* Fila de íconos sociales */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
            className="pt-4 flex items-center gap-4 border-t border-[#1F2430]/60 text-[#8B92A5]"
          >
            <span className="font-mono text-xs text-[#8B92A5]">Social:</span>
            <a
              href="https://linkedin.com/in/isaac-patricio-diaz-14041b3b3"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-[#131722] border border-[#1F2430] hover:border-accent hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com/nexuslabsaihq-svg/personal-platform-ISAAC"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-[#131722] border border-[#1F2430] hover:border-accent hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="mailto:isaacipp1709@gmail.com"
              className="p-2.5 rounded-xl bg-[#131722] border border-[#1F2430] hover:border-accent hover:text-accent transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </motion.div>
        </div>

        {/* COLUMNA DERECHA */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <div className="relative w-full max-w-[340px] sm:max-w-[380px] flex flex-col items-center">
            {/* Glow / Aura en acento primario detrás de la foto */}
            <div className="absolute top-12 w-64 h-64 sm:w-72 sm:h-72 rounded-full bg-accent/20 blur-3xl -z-10 pointer-events-none" />

            {/* Foto real dentro de contenedor ovalado / circular */}
            <div className="relative w-60 h-60 sm:w-72 sm:h-72 rounded-full p-2 bg-gradient-to-b from-[#1F2430] via-[#131722] to-[#1F2430]/40 border border-[#1F2430] shadow-2xl overflow-hidden">
              <img
                src="/images/profile.jpg"
                alt="Isaac Patricio Pastén Díaz"
                className="w-full h-full object-cover rounded-full"
                onError={(e) => {
                  // Fallback directo si la ruta tuviera alguna variación
                  if (e.target.src.indexOf('profile.jpg.JPG') === -1) {
                    e.target.src = '/profile.jpg.JPG';
                  }
                }}
              />
            </div>

            {/* 3 Cards Flotantes Superpuestas a la foto */}
            {/* Card 1: 7+ Personas lideradas (Arriba Izquierda) */}
            <FloatingStat
              value={7}
              suffix="+"
              label="Personas lideradas"
              icon={Users}
              className="absolute -top-3 -left-2 sm:-left-6 z-20"
            />

            {/* Card 2: 8 Certificaciones INACAP (Medio Derecha) */}
            <FloatingStat
              value={8}
              label="Certificaciones"
              sublabel="INACAP"
              icon={Award}
              className="absolute top-28 -right-2 sm:-right-6 z-20"
            />

            {/* Card 3: 5.9 Nota de egreso (Abajo Izquierda) */}
            <FloatingStat
              value={5.9}
              decimals={1}
              label="Nota de egreso"
              sublabel="Ranking N°2"
              icon={Trophy}
              className="absolute bottom-16 -left-2 sm:-left-6 z-20"
            />

            {/* Card pequeña debajo de la foto estilo code snippet: "Herramientas" */}
            <div className="w-full mt-6 p-3.5 rounded-xl bg-[#131722]/95 border border-[#1F2430] shadow-xl z-20">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#1F2430]/60">
                <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#8B92A5]">
                  <Terminal size={13} className="text-accent" />
                  <span className="text-[#E8EAED] font-medium">Herramientas</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-red-500/60" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                  <div className="w-2 h-2 rounded-full bg-green-500/60" />
                </div>
              </div>

              <div className="space-y-1.5 font-mono text-xs">
                <div className="flex items-center gap-2 text-[#E8EAED]">
                  <CheckCircle2 size={13} className="text-accent shrink-0" />
                  <span>Excel Intermedio</span>
                </div>
                <div className="flex items-center gap-2 text-[#E8EAED]">
                  <CheckCircle2 size={13} className="text-accent shrink-0" />
                  <span>Power BI Básico</span>
                </div>
                <div className="flex items-center gap-2 text-[#E8EAED]">
                  <CheckCircle2 size={13} className="text-accent shrink-0" />
                  <span>HCMFRONT</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
