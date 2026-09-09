import React, { useState } from 'react';
import { Award, Calendar, Hash, ExternalLink, CheckCircle2, Filter, ShieldCheck } from 'lucide-react';
import RevealOnScroll from './ui/RevealOnScroll';
import AppleWalletStack from './ui/AppleWalletStack';

const RAW_CERTIFICATES = [
  {
    id: 'cert-1',
    title: 'Gestión Estratégica & Business Intelligence',
    number: '11462629',
    date: '14-11-2024',
    year: 2024,
    issuer: 'INACAP',
    issuerUrl: 'https://www.inacap.cl',
    accent: 'blue',
    description:
      'Planificación estratégica empresarial, análisis de datos para la toma de decisiones, diseño de tableros de mando (dashboards ejecutivos), KPIs y herramientas de inteligencia de negocios aplicadas a la gestión corporativa.',
    tags: ['Business Intelligence', 'Dashboards KPIs', 'Planificación Estratégica', 'Análisis de Datos'],
  },
  {
    id: 'cert-2',
    title: 'Analista de Gestión Administrativo',
    number: '11462618',
    date: '14-11-2024',
    year: 2024,
    issuer: 'INACAP',
    issuerUrl: 'https://www.inacap.cl',
    accent: 'gold',
    description:
      'Gestión y análisis de procesos administrativos, control y custodia de documentación corporativa, coordinación entre unidades operativas y manejo de sistemas de información empresarial.',
    tags: ['Análisis de Procesos', 'Control de Gestión', 'Gestión Documental', 'Coordinación Operativa'],
  },
  {
    id: 'cert-3',
    title: 'Asistente Administrativo',
    number: '11461648',
    date: '14-11-2024',
    year: 2024,
    issuer: 'INACAP',
    issuerUrl: 'https://www.inacap.cl',
    accent: 'emerald',
    description:
      'Soporte a la gestión de oficinas y gerencia, manejo de correspondencia corporativa, archivo físico y digital, atención a clientes internos y externos, y dominio de herramientas de productividad de oficina.',
    tags: ['Gestión de Oficina', 'Archivo Digital', 'Atención a Clientes', 'Productividad'],
  },
  {
    id: 'cert-4',
    title: 'Asistente Tributario',
    number: '11462626',
    date: '14-11-2024',
    year: 2024,
    issuer: 'INACAP',
    issuerUrl: 'https://www.inacap.cl',
    accent: 'gold',
    description:
      'Fundamentos del sistema tributario chileno, declaración y confección de impuestos mensuales y anuales (F22, F29), retenciones de honorarios, IVA y cumplimiento de obligaciones tributarias ante el SII.',
    tags: ['Formulario 29 / 22', 'Normativa SII', 'IVA & Retenciones', 'Cumplimiento Fiscal'],
  },
  {
    id: 'cert-5',
    title: 'Asistente en Marketing',
    number: '11462623',
    date: '14-11-2024',
    year: 2024,
    issuer: 'INACAP',
    issuerUrl: 'https://www.inacap.cl',
    accent: 'purple',
    description:
      'Fundamentos de marketing digital y tradicional, segmentación de mercados, posicionamiento de marcas y productos, análisis de competencia y diseño de estrategias de comunicación comercial.',
    tags: ['Marketing Digital', 'Segmentación de Clientes', 'Estrategia Comercial', 'Análisis de Competencia'],
  },
  {
    id: 'cert-6',
    title: 'Compras Públicas & Mercado Público',
    number: '11462632',
    date: '14-11-2024',
    year: 2024,
    issuer: 'INACAP',
    issuerUrl: 'https://www.inacap.cl',
    accent: 'blue',
    description:
      'Operación del sistema de compras y contrataciones del Estado de Chile (Mercado Público / ChileCompra), gestión de licitaciones públicas y privadas, convenios marco, emisión de órdenes de compra y normativa vigente.',
    tags: ['ChileCompra', 'Mercado Público', 'Licitaciones', 'Convenio Marco'],
  },
  {
    id: 'cert-7',
    title: 'Administración de la Emergencia',
    number: '11462608',
    date: '14-11-2024',
    year: 2024,
    issuer: 'INACAP',
    issuerUrl: 'https://www.inacap.cl',
    accent: 'gold',
    description:
      'Gestión de crisis y continuidad operacional, diseño de planes de respuesta ante emergencias, coordinación de equipos humanos en escenarios de contingencia y aplicación de protocolos de seguridad laboral.',
    tags: ['Continuidad Operacional', 'Manejo de Crisis', 'Seguridad Laboral', 'Protocolos de Emergencia'],
  },
  {
    id: 'cert-8',
    title: 'Asistente en Remuneraciones',
    number: '11460112',
    date: 'Diciembre 2023',
    year: 2023,
    issuer: 'INACAP',
    issuerUrl: 'https://www.inacap.cl',
    accent: 'emerald',
    description:
      'Cálculo y liquidación de sueldos y haberes, cotizaciones previsionales (AFP, Fonasa, Isapre, AFC), legislación laboral chilena aplicada a remuneraciones, finiquitos y administración de contratos.',
    tags: ['Liquidación de Sueldos', 'Previred & AFP', 'Código del Trabajo', 'Finiquitos'],
  },
];

const YEARS = ['Todos', 2024, 2023];

export default function Certifications() {
  const [selectedYear, setSelectedYear] = useState('Todos');

  const filteredCerts = selectedYear === 'Todos'
    ? RAW_CERTIFICATES
    : RAW_CERTIFICATES.filter((c) => c.year === selectedYear);

  // Map to Apple Wallet Card structure
  const walletCards = filteredCerts.map((cert) => ({
    id: cert.id,
    badge: 'VERIFICADA',
    category: `INACAP · Registro ${cert.year}`,
    title: cert.title,
    year: cert.year,
    icon: Award,
    accent: cert.accent,
    description: cert.description,
    tags: cert.tags,
    meta: [
      { label: 'Folio Oficial', value: cert.number ? `N° ${cert.number}` : 'Certificado INACAP', icon: Hash },
      { label: 'Fecha Emisión', value: cert.date, icon: Calendar },
      { label: 'Institución', value: cert.issuer, icon: ShieldCheck },
    ],
    action: {
      label: 'Portal Institucional INACAP',
      href: cert.issuerUrl,
    },
  }));

  return (
    <section id="certifications" className="py-24 border-t border-slate-200/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <RevealOnScroll>
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 font-mono text-xs font-semibold uppercase mb-3">
              <Award size={13} className="text-amber-600" />
              // 06. Acreditación Académica
            </div>
            <h2 className="text-3xl sm:text-4xl font-sora font-bold tracking-tight text-slate-900 mb-3">
              8 Certificaciones Oficiales
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Credenciales oficiales emitidas por{' '}
              <a
                href="https://www.inacap.cl"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-blue-600 hover:text-blue-700 underline underline-offset-2"
              >
                INACAP
              </a>
              , que certifican dominio comprobable en finanzas, tributaria, business intelligence, remuneraciones y compras públicas.
            </p>
          </div>
        </RevealOnScroll>

        {/* Year Selector Filter Pills */}
        <div className="flex items-center justify-center gap-2 mb-10">
          <span className="text-xs font-mono text-slate-400 mr-1 flex items-center gap-1">
            <Filter size={12} /> Filtrar:
          </span>
          {YEARS.map((y) => {
            const isActive = selectedYear === y;
            const count = y === 'Todos' ? RAW_CERTIFICATES.length : RAW_CERTIFICATES.filter(c => c.year === y).length;
            return (
              <button
                key={y}
                type="button"
                onClick={() => setSelectedYear(y)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20'
                    : 'bg-white/80 hover:bg-white text-slate-600 border border-slate-200/80 hover:border-slate-300'
                }`}
              >
                {y} <span className={`text-[10px] font-mono ml-1 ${isActive ? 'text-white/80' : 'text-slate-400'}`}>({count})</span>
              </button>
            );
          })}
        </div>

        {/* Apple Wallet Stack for Certifications */}
        <RevealOnScroll delay={0.1}>
          <AppleWalletStack
            key={selectedYear} // Reset animation cleanly on filter change
            items={walletCards}
            peekHeight={68}
            expandedOffset={260}
          />
        </RevealOnScroll>
      </div>
    </section>
  );
}
