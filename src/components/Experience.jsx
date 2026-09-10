import React from 'react';
import { BriefcaseBusiness, Calendar, CheckCircle2, ClipboardCheck, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import RevealOnScroll from './ui/RevealOnScroll';

const EXPERIENCES = [
  {
    role: 'Bartender — Operación Integral de Barra',
    company: 'Delicias · Mallplaza Egaña',
    period: 'Jun. 2023 — Dic. 2023',
    duration: '7 meses',
    icon: ClipboardCheck,
    highlights: [
      'Operación integral de barra: cócteles, cafés y postres con estándares de calidad y presentación.',
      'Gestión de caja y cierres frecuentes, resguardando el registro de ventas y medios de pago.',
      'Apertura y cierre de local mediante checklist operativo, orden e insumos disponibles.',
    ],
  },
  {
    role: 'Operario / Subgerente de Turno',
    company: 'Dunkin · Mallplaza Calama',
    period: 'Ene. 2022 — May. 2023',
    duration: '17 meses',
    icon: Users,
    highlights: [
      'Coordinación de la operación diaria de equipos de 7 o más colaboradores en sala y barra.',
      'Cierres de caja, cuadraturas y control de efectivo y medios de pago electrónicos.',
      'Control de inventario, reposición de insumos y cumplimiento de procedimientos operacionales.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 max-w-6xl mx-auto px-4 sm:px-6 relative">
      <div className="space-y-10">
        <RevealOnScroll>
          <div className="max-w-2xl space-y-3">
            <p className="font-mono text-xs font-semibold tracking-wider text-accent uppercase">
              // 02. Experiencia
            </p>
            <h2 className="text-3xl sm:text-4xl font-sora font-bold tracking-tight text-text-main">
              Operación, coordinación y control
            </h2>
            <p className="text-text-muted leading-relaxed">
              Experiencia en entornos de alto flujo, con foco en equipos, procesos de caja,
              inventario y cumplimiento operativo.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {EXPERIENCES.map((experience, index) => {
            const Icon = experience.icon;

            return (
              <RevealOnScroll key={experience.company} delay={index * 0.1}>
                <motion.article
                  className="h-full p-6 rounded-2xl bg-surface/80 border border-border-dark hover:border-accent/40 transition-colors"
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="flex items-start gap-3">
                      <div className="p-3 rounded-xl bg-accent/10 border border-accent/20 text-accent">
                        <Icon size={20} />
                      </div>
                      <div>
                        <h3 className="font-sora font-semibold text-lg text-text-main">
                          {experience.role}
                        </h3>
                        <p className="text-sm text-accent mt-1">{experience.company}</p>
                      </div>
                    </div>
                    <BriefcaseBusiness size={18} className="text-text-muted shrink-0" aria-hidden="true" />
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-text-muted mb-5">
                    <Calendar size={13} aria-hidden="true" />
                    <span>{experience.period}</span>
                    <span className="w-1 h-1 rounded-full bg-border-dark" />
                    <span>{experience.duration}</span>
                  </div>

                  <ul className="space-y-3">
                    {experience.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2 text-sm text-text-muted leading-relaxed">
                        <CheckCircle2 size={15} className="text-accent mt-0.5 shrink-0" aria-hidden="true" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </motion.article>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
