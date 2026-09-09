import React from 'react';
import { Briefcase, BarChart3, Bot, ArrowRight, Sparkles } from 'lucide-react';
import RevealOnScroll from './ui/RevealOnScroll';
import MagneticButton from './ui/MagneticButton';
import AppleWalletStack from './ui/AppleWalletStack';

const SERVICES_PASSES = [
  {
    id: 'srv-1',
    badge: 'OPERACIONAL',
    category: 'Gestión de Operaciones',
    title: 'Asesoría Administrativa para PYMEs',
    icon: Briefcase,
    accent: 'blue',
    description:
      'Diagnóstico integral y estructuración de flujos de trabajo administrativos para pequeñas y medianas empresas. Implementación de controles básicos de gestión operativa, asignación clara de responsabilidades y eliminación de cuellos de botella para elevar la productividad del equipo.',
    tags: ['Diagnóstico Operativo', 'Mapeo de Procesos', 'Control de Gestión', 'Flujos de Trabajo'],
    meta: [
      { label: 'Modalidad', value: 'Remoto o Híbrido' },
      { label: 'Entregable', value: 'Manual de Procesos + Diagnóstico' },
      { label: 'Plazo Típico', value: '2 a 4 semanas' },
    ],
    action: {
      label: 'Consultar Disponibilidad',
      href: '#contact',
    },
  },
  {
    id: 'srv-2',
    badge: 'FINANCIERO',
    category: 'Finanzas & Tesorería',
    title: 'Organización de Procesos y Control de Caja',
    icon: BarChart3,
    accent: 'gold',
    description:
      'Diseño e implementación de sistemas rigurosos de control para caja chica, arqueos sistemáticos, conciliaciones bancarias y custodia digital de documentación tributaria. Otorga visibilidad en tiempo real de la liquidez para una toma de decisiones informada.',
    tags: ['Control de Caja Chica', 'Conciliación Bancaria', 'Normativa SII', 'Flujo de Liquidez'],
    meta: [
      { label: 'Enfoque', value: 'Control de caja & arqueos' },
      { label: 'Herramientas', value: 'Planillas estructuradas + ERP' },
      { label: 'Beneficio', value: 'Orden financiero y cero descuadres' },
    ],
    action: {
      label: 'Solicitar Asesoría Financiera',
      href: '#contact',
    },
  },
  {
    id: 'srv-3',
    badge: 'INNOVACIÓN IA',
    category: 'Inteligencia Artificial Aplicada',
    title: 'Automatización con IA para Tareas Administrativas',
    icon: Bot,
    accent: 'purple',
    description:
      'Implementación de Inteligencia Artificial (Gemini API, modelos LLM y agentes) para automatizar labores operativas repetitivas: redacción de informes ejecutivos, análisis asistido de facturación, resúmenes contables y asistentes virtuales para el equipo de trabajo.',
    tags: ['Gemini API', 'Prompt Engineering', 'Procesamiento de Documentos', 'Agentes Autónomos'],
    meta: [
      { label: 'Tecnología', value: 'Google Gemini API + React' },
      { label: 'Ahorro Estimado', value: 'Hasta 70% de tiempo operativo' },
      { label: 'Aplicación', value: 'Solución adaptada a tu flujo diario' },
    ],
    action: {
      label: 'Explorar Soluciones con IA',
      href: '#contact',
    },
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 border-t border-slate-200/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <RevealOnScroll>
          <div className="mb-14 text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-semibold uppercase mb-3">
              <Sparkles size={12} />
              // 04. Servicios & Capacidades
            </div>
            <h2 className="text-3xl sm:text-4xl font-sora font-bold tracking-tight text-slate-900 mb-3">
              ¿En qué puedo ayudarte?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Asesoría profesional y desarrollo de soluciones orientadas a la optimización de procesos y el orden administrativo.
              Sin promesas infladas: trabajo medible, metodología rigurosa y tecnología moderna.
            </p>
          </div>
        </RevealOnScroll>

        {/* Apple Wallet Stack */}
        <RevealOnScroll delay={0.1}>
          <AppleWalletStack items={SERVICES_PASSES} peekHeight={72} expandedOffset={280} />
        </RevealOnScroll>

        {/* Bottom CTA Card */}
        <RevealOnScroll delay={0.25}>
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-5 p-6 rounded-2xl bg-white/90 border border-slate-200/80 shadow-card">
            <div>
              <h3 className="font-sora font-bold text-base text-slate-900 mb-1">
                ¿Tienes un requerimiento especial o un proyecto en marcha?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Cuéntame los desafíos administrativos o tecnológicos de tu organización y evaluemos cómo resolverlos.
              </p>
            </div>
            <MagneticButton>
              <a
                href="#contact"
                className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all duration-200 shadow-md shadow-blue-500/20 hover:shadow-lg"
              >
                Conversar Ahora
                <ArrowRight size={15} />
              </a>
            </MagneticButton>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
