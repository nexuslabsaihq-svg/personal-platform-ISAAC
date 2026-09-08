import React from 'react';
import { motion } from 'framer-motion';
import { Search, CalendarDays, Play, ShieldAlert, CheckCircle, CheckCheck } from 'lucide-react';

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Diagnóstico',
    desc: 'Entender el objetivo del negocio y levantar información operativa detallada.',
    icon: Search,
  },
  {
    step: '02',
    title: 'Planificación',
    desc: 'Definir tareas críticas, plazos de cumplimiento y recursos necesarios.',
    icon: CalendarDays,
  },
  {
    step: '03',
    title: 'Ejecución',
    desc: 'Aplicar el procedimiento administrativo con precisión y coordinación de equipo.',
    icon: Play,
  },
  {
    step: '04',
    title: 'Control',
    desc: 'Verificar el cumplimiento riguroso de procedimientos, normas y estándares.',
    icon: ShieldAlert,
  },
  {
    step: '05',
    title: 'Auditoría',
    desc: 'Revisar cuadraturas financieras, control de inventario y análisis de desviaciones.',
    icon: CheckCircle,
  },
  {
    step: '06',
    title: 'Entrega',
    desc: 'Reportar resultados cuantitativos, documentar aprendizajes y cerrar el ciclo.',
    icon: CheckCheck,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
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

export default function Process() {
  return (
    <section id="process" className="py-24 max-w-6xl mx-auto px-4 sm:px-6 border-t border-[#1F2430]/40">
      <div className="space-y-12">
        <div className="space-y-2">
          <p className="font-mono text-xs font-semibold tracking-wider text-accent uppercase">
            // 04. My Work Process
          </p>
          <h2 className="text-3xl sm:text-4xl font-sora font-bold tracking-tight text-[#E8EAED]">
            Metodología de Gestión Administrativa
          </h2>
          <p className="text-sm text-[#8B92A5] max-w-xl">
            Un marco estructurado y repetible para asegurar orden, control financiero y eficiencia en cada tarea operativa.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {PROCESS_STEPS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{
                  y: -4,
                  boxShadow: '0 12px 28px -8px rgba(91, 141, 239, 0.15)',
                }}
                transition={{ duration: 0.2 }}
                className="p-6 rounded-2xl bg-[#131722] border border-[#1F2430] hover:border-accent/60 transition-colors flex flex-col justify-between space-y-4 group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xl font-bold text-accent group-hover:scale-105 transition-transform">
                    {item.step}
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-[#1F2430]/50 flex items-center justify-center text-accent">
                    <Icon size={18} />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-sora text-base font-semibold text-[#E8EAED] group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#8B92A5] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
