import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Calendar, Hash, ExternalLink, CheckCircle2, Filter } from 'lucide-react';
import RevealOnScroll from './ui/RevealOnScroll';

const CERTIFICATES = [
  {
    id: 1,
    title: 'Gestión Estratégica & Business Intelligence',
    number: '11462629',
    date: '14-11-2024',
    year: 2024,
    issuer: 'INACAP',
    issuerUrl: 'https://www.inacap.cl',
    description: 'Planificación estratégica empresarial, análisis de datos para toma de decisiones, tableros de mando (dashboards), KPIs y herramientas de inteligencia de negocios aplicadas a organizaciones.',
  },
  {
    id: 2,
    title: 'Analista de Gestión Administrativo',
    number: '11462618',
    date: '14-11-2024',
    year: 2024,
    issuer: 'INACAP',
    issuerUrl: 'https://www.inacap.cl',
    description: 'Gestión y análisis de procesos administrativos, control de documentación, coordinación de unidades de negocio y manejo de sistemas de información empresarial.',
  },
  {
    id: 3,
    title: 'Asistente Administrativo',
    number: '11461648',
    date: '14-11-2024',
    year: 2024,
    issuer: 'INACAP',
    issuerUrl: 'https://www.inacap.cl',
    description: 'Apoyo a la gestión de oficinas, manejo de correspondencia, archivo físico y digital, atención a clientes internos y externos, y manejo de herramientas de productividad.',
  },
  {
    id: 4,
    title: 'Asistente Tributario',
    number: '11462626',
    date: '14-11-2024',
    year: 2024,
    issuer: 'INACAP',
    issuerUrl: 'https://www.inacap.cl',
    description: 'Fundamentos del sistema tributario chileno, declaración de impuestos (F22, F29), IVA, retenciones y obligaciones tributarias de personas y empresas ante el SII.',
  },
  {
    id: 5,
    title: 'Asistente en Marketing',
    number: '11462623',
    date: '14-11-2024',
    year: 2024,
    issuer: 'INACAP',
    issuerUrl: 'https://www.inacap.cl',
    description: 'Fundamentos de marketing digital y tradicional, segmentación de mercado, posicionamiento de marca, análisis de competencia y estrategias de comunicación comercial.',
  },
  {
    id: 6,
    title: 'Compras Públicas',
    number: '11462632',
    date: '14-11-2024',
    year: 2024,
    issuer: 'INACAP',
    issuerUrl: 'https://www.inacap.cl',
    description: 'Sistema de compras y contrataciones del Estado chileno (Mercado Público / ChileCompra), licitaciones, convenios marco, órdenes de compra y normativa vigente.',
  },
  {
    id: 7,
    title: 'Administración de la Emergencia',
    number: '11462608',
    date: '14-11-2024',
    year: 2024,
    issuer: 'INACAP',
    issuerUrl: 'https://www.inacap.cl',
    description: 'Gestión de crisis y continuidad operacional, planificación de respuesta ante emergencias, coordinación de recursos humanos en contextos de contingencia y protocolos de seguridad organizacional.',
  },
  {
    id: 8,
    title: 'Asistente en Remuneraciones',
    number: null, // no disponible
    date: 'Diciembre 2023',
    year: 2023,
    issuer: 'INACAP',
    issuerUrl: 'https://www.inacap.cl',
    description: 'Liquidación de sueldos y haberes, cotizaciones previsionales y de salud, leyes laborales aplicadas a remuneraciones, finiquitos y manejo de sistemas de RRHH.',
  },
];

const YEARS = [2025, 2024, 2023];

export default function Certifications() {
  const [selectedYear, setSelectedYear] = useState(null);

  const filtered = selectedYear
    ? CERTIFICATES.filter((c) => c.year === selectedYear)
    : CERTIFICATES;

  return (
    <section id="certifications" className="py-24 border-t border-border-dark/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <RevealOnScroll>
          <div className="mb-12">
            <p className="font-mono text-xs font-semibold tracking-wider text-gold uppercase mb-2">
              // 05. Certificaciones INACAP
            </p>
            <h2 className="text-3xl sm:text-4xl font-sora font-bold tracking-tight text-text-main mb-3">
              8 Certificaciones Oficiales
            </h2>
            <p className="text-text-muted max-w-2xl">
              Todas emitidas por{' '}
              <a href="https://www.inacap.cl" target="_blank" rel="noreferrer" className="text-accent hover:underline">
                INACAP
              </a>
              , institución de educación técnico-profesional de excelencia en Chile.
            </p>
          </div>
        </RevealOnScroll>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ── Sidebar Timeline (sticky en desktop) ── */}
          <aside className="lg:w-48 shrink-0">
            <div className="lg:sticky lg:top-24">
              <div className="flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0">
                <button
                  onClick={() => setSelectedYear(null)}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                    selectedYear === null
                      ? 'bg-surface border border-border-dark text-text-main'
                      : 'text-text-muted hover:text-text-main'
                  }`}
                >
                  <Filter size={13} />
                  Todos ({CERTIFICATES.length})
                </button>

                {/* Timeline por año */}
                <div className="hidden lg:block relative border-l-2 border-border-dark ml-3 pl-4 space-y-1 mt-3">
                  {YEARS.map((year, i) => {
                    const count = CERTIFICATES.filter((c) => c.year === year).length;
                    const isActive = selectedYear === year;
                    return (
                      <div key={year} className="relative">
                        {/* Dot */}
                        <div
                          className={`absolute -left-[21px] top-2.5 w-3 h-3 rounded-full border-2 transition-all duration-200 ${
                            isActive ? 'bg-gold border-gold' : 'bg-surface border-border-dark'
                          }`}
                        />
                        <button
                          onClick={() => setSelectedYear(isActive ? null : year)}
                          className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                            isActive
                              ? 'bg-gold/10 border border-gold/30 text-gold'
                              : 'text-text-muted hover:text-text-main hover:bg-surface'
                          }`}
                        >
                          {year}
                          <span className={`ml-2 text-xs font-mono ${isActive ? 'text-gold/70' : 'text-text-muted/60'}`}>
                            ({count})
                          </span>
                        </button>
                      </div>
                    );
                  })}
                </div>

                {/* Mobile year pills */}
                <div className="flex lg:hidden gap-2">
                  {YEARS.map((year) => {
                    const count = CERTIFICATES.filter((c) => c.year === year).length;
                    const isActive = selectedYear === year;
                    return (
                      <button
                        key={year}
                        onClick={() => setSelectedYear(isActive ? null : year)}
                        className={`px-3 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                          isActive
                            ? 'bg-gold/10 border border-gold/30 text-gold'
                            : 'bg-surface border border-border-dark text-text-muted'
                        }`}
                      >
                        {year} ({count})
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </aside>

          {/* ── Certificate Cards ── */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedYear ?? 'all'}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {filtered.map((cert, i) => (
                  <RevealOnScroll key={cert.id} delay={i * 0.06}>
                    <div className="group flex flex-col p-5 rounded-2xl bg-surface border border-border-dark hover:border-gold/40 transition-all duration-300 hover:shadow-gold h-full">
                      {/* Top row */}
                      <div className="flex items-start justify-between mb-3">
                        <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold shrink-0 group-hover:bg-gold/20 transition-colors">
                          <Award size={18} />
                        </div>
                        <span className="inline-flex items-center px-2 py-1 rounded-lg bg-gold/10 border border-gold/20 text-gold text-[10px] font-mono font-semibold">
                          {cert.year}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-sora font-bold text-base text-text-main group-hover:text-white transition-colors mb-2 leading-snug">
                        {cert.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs text-text-muted leading-relaxed flex-1 mb-4">
                        {cert.description}
                      </p>

                      {/* Meta */}
                      <div className="space-y-1.5 border-t border-border-dark pt-3">
                        <div className="flex items-center gap-2 text-xs text-text-muted">
                          <CheckCircle2 size={11} className="text-gold shrink-0" />
                          <span>
                            Institución:{' '}
                            <a
                              href={cert.issuerUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="text-accent hover:underline"
                            >
                              {cert.issuer}
                            </a>
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-text-muted">
                          <Hash size={11} className="text-gold shrink-0" />
                          <span>
                            N° {cert.number ?? 'no disponible'}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-text-muted">
                          <Calendar size={11} className="text-gold shrink-0" />
                          <span>{cert.date}</span>
                        </div>
                      </div>
                    </div>
                  </RevealOnScroll>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
