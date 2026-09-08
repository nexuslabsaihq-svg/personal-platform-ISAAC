import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Target, Compass, Users, Award, Trophy, Star } from 'lucide-react';
import AnimatedStat from './AnimatedStat';

const STATS = [
  { value: 7, suffix: '+', label: 'Colaboradores liderados', icon: Users },
  { value: 5.9, decimals: 1, label: 'Nota de egreso', icon: Star },
  { value: 2, prefix: 'N°', label: 'Ranking de egreso', icon: Trophy },
  { value: 8, label: 'Certificaciones profesionales', icon: Award },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="py-24 max-w-5xl mx-auto px-4 sm:px-6 border-t border-[#1F2430]/40"
    >
      <div className="space-y-12">
        {/* Section Header */}
        <div className="space-y-2">
          <p className="font-mono text-xs font-semibold tracking-wider text-accent uppercase">
            // 01. Sobre mí
          </p>
          <h2 className="text-2xl sm:text-3xl font-sora font-bold tracking-tight text-[#E8EAED]">
            Perfil Profesional & Métricas
          </h2>
        </div>

        {/* PASO 9: Contadores Animados (Logros en Dorado #D4AF37) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((stat, i) => (
            <AnimatedStat
              key={i}
              value={stat.value}
              suffix={stat.suffix}
              prefix={stat.prefix}
              decimals={stat.decimals}
              label={stat.label}
              icon={stat.icon}
            />
          ))}
        </div>

        {/* Bio Placeholder Paragraph */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#131722] border border-[#1F2430]/60 space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs text-accent">
            <span>bio.txt</span>
            <span className="text-[#8B92A5]">•</span>
            <span className="text-[#8B92A5]">lectura ~1 min</span>
          </div>
          <p className="text-base sm:text-lg text-[#E8EAED] leading-relaxed">
            [Tu bio aquí: Soy estudiante de Ingeniería en Administración de Empresas orientado a la
            optimización integral de procesos, diseño de estrategias empresariales y el análisis
            financiero mediante herramientas digitales. Mi foco está en transformar datos en
            decisiones ágiles, medibles y de alto impacto organizacional.]
          </p>
          <p className="text-sm text-[#8B92A5] italic">
            [Párrafo complementario: Experiencia liderando equipos académicos y proyectos de control de gestión con metodologías ágiles y orientación a la excelencia.]
          </p>
        </div>

        {/* Highlight Cards en Cascada (Stagger) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {/* Card 1 */}
          <motion.div
            variants={itemVariants}
            whileHover={{
              y: -4,
              boxShadow: '0 10px 30px -10px rgba(91, 141, 239, 0.2)',
            }}
            transition={{ duration: 0.2 }}
            className="p-6 rounded-2xl bg-[#131722] border border-[#1F2430]/60 hover:border-accent/60 transition-colors space-y-3"
          >
            <div className="w-10 h-10 rounded-xl bg-[#1F2430]/50 flex items-center justify-center text-accent">
              <GraduationCap size={20} />
            </div>
            <h3 className="text-base font-sora font-semibold text-[#E8EAED]">
              Formación Académica
            </h3>
            <p className="text-xs text-[#8B92A5] leading-relaxed">
              [Ingeniería en Administración de Empresas — formación centrada en gestión estratégica, finanzas y operaciones empresariales]
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={itemVariants}
            whileHover={{
              y: -4,
              boxShadow: '0 10px 30px -10px rgba(91, 141, 239, 0.2)',
            }}
            transition={{ duration: 0.2 }}
            className="p-6 rounded-2xl bg-[#131722] border border-[#1F2430]/60 hover:border-accent/60 transition-colors space-y-3"
          >
            <div className="w-10 h-10 rounded-xl bg-[#1F2430]/50 flex items-center justify-center text-accent">
              <Target size={20} />
            </div>
            <h3 className="text-base font-sora font-semibold text-[#E8EAED]">
              Áreas de Interés
            </h3>
            <p className="text-xs text-[#8B92A5] leading-relaxed">
              [Control de gestión, inteligencia de negocios (BI), optimización BPMN y evaluación económica de proyectos]
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={itemVariants}
            whileHover={{
              y: -4,
              boxShadow: '0 10px 30px -10px rgba(91, 141, 239, 0.2)',
            }}
            transition={{ duration: 0.2 }}
            className="p-6 rounded-2xl bg-[#131722] border border-[#1F2430]/60 hover:border-accent/60 transition-colors space-y-3"
          >
            <div className="w-10 h-10 rounded-xl bg-[#1F2430]/50 flex items-center justify-center text-accent">
              <Compass size={20} />
            </div>
            <h3 className="text-base font-sora font-semibold text-[#E8EAED]">
              Objetivo Profesional
            </h3>
            <p className="text-xs text-[#8B92A5] leading-relaxed">
              [Aportar valor estratégico y operativo en organizaciones dinámicas mediante el rigor analítico y la eficiencia de procesos]
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
