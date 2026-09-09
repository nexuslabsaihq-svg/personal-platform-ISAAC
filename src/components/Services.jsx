import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, BarChart3, Bot, ArrowRight } from 'lucide-react';
import RevealOnScroll from './ui/RevealOnScroll';
import MagneticButton from './ui/MagneticButton';

const SERVICES = [
  {
    icon: Briefcase,
    title: 'Asesoría Administrativa para PYMEs',
    description:
      'Diagnóstico y organización de procesos administrativos para pequeñas y medianas empresas. Desde la estructuración de flujos de trabajo hasta la implementación de controles básicos de gestión operativa.',
    tags: ['Diagnóstico', 'Procesos', 'Control de gestión'],
    color: 'accent',
  },
  {
    icon: BarChart3,
    title: 'Organización de Procesos y Control de Caja',
    description:
      'Diseño de sistemas de registro, control de caja chica, conciliaciones básicas y organización de documentación contable y administrativa para empresas en crecimiento.',
    tags: ['Caja chica', 'Documentación', 'Conciliación'],
    color: 'gold',
  },
  {
    icon: Bot,
    title: 'Automatización con IA para Tareas Administrativas',
    description:
      'Implementación de herramientas de Inteligencia Artificial (Gemini, Claude) para automatizar tareas repetitivas: redacción de documentos, análisis de datos, generación de reportes y flujos de decisión asistidos.',
    tags: ['Gemini API', 'Prompt engineering', 'Automatización'],
    color: 'purple',
  },
];

const COLOR_MAP = {
  accent: {
    icon: 'bg-accent/10 border-accent/30 text-accent',
    tag: 'bg-accent/10 text-accent border-accent/20',
    hover: 'hover:border-accent/50',
    cta: 'text-accent',
  },
  gold: {
    icon: 'bg-gold/10 border-gold/30 text-gold',
    tag: 'bg-gold/10 text-gold border-gold/20',
    hover: 'hover:border-gold/50',
    cta: 'text-gold',
  },
  purple: {
    icon: 'bg-violet-custom/10 border-violet-custom/30 text-violet-custom',
    tag: 'bg-violet-custom/10 text-violet-custom border-violet-custom/20',
    hover: 'hover:border-violet-custom/50',
    cta: 'text-violet-custom',
  },
};

export default function Services() {
  return (
    <section id="servicios" className="py-24 border-t border-border-dark/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <RevealOnScroll>
          <div className="mb-12">
            <p className="font-mono text-xs font-semibold tracking-wider text-accent uppercase mb-2">
              // 04. Servicios
            </p>
            <h2 className="text-3xl sm:text-4xl font-sora font-bold tracking-tight text-text-main mb-3">
              ¿En qué puedo ayudarte?
            </h2>
            <p className="text-text-muted max-w-2xl">
              Ofrezco asesoría y servicios freelance orientados a la gestión operativa eficiente.
              Sin promesas infladas — trabajo concreto, metodología clara.
            </p>
          </div>
        </RevealOnScroll>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {SERVICES.map((service, i) => {
            const { icon: Icon } = service;
            const colors = COLOR_MAP[service.color];
            return (
              <RevealOnScroll key={service.title} delay={i * 0.1}>
                <div className={`group flex flex-col h-full p-6 rounded-2xl bg-surface border border-border-dark ${colors.hover} transition-all duration-300 hover:shadow-card-hover`}>
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-5 ${colors.icon} group-hover:scale-110 transition-transform duration-200`}>
                    <Icon size={22} />
                  </div>

                  {/* Title */}
                  <h3 className="font-sora font-bold text-lg text-text-main mb-3 leading-snug group-hover:text-white transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-text-muted leading-relaxed flex-1 mb-5">
                    {service.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2 py-0.5 rounded-md border text-[11px] font-mono ${colors.tag}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href="#contact"
                    className={`inline-flex items-center gap-1.5 text-sm font-semibold ${colors.cta} hover:text-white transition-colors group/link mt-auto`}
                  >
                    Consultar disponibilidad
                    <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>

        {/* Bottom note */}
        <RevealOnScroll delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-surface border border-border-dark">
            <p className="text-sm text-text-muted text-center sm:text-left">
              ¿Tienes un proyecto específico en mente? Cuéntame qué necesitas y
              vemos si encajamos.
            </p>
            <MagneticButton>
              <a
                href="#contact"
                className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent hover:bg-accent-hover text-white font-semibold text-sm transition-all duration-200 shadow-accent"
              >
                Contactarme
                <ArrowRight size={14} />
              </a>
            </MagneticButton>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
