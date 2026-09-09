import React from 'react';
import { Search, CalendarDays, Play, ShieldAlert, CheckCircle, CheckCheck, Layers } from 'lucide-react';
import RevealOnScroll from './ui/RevealOnScroll';
import AppleWalletStack from './ui/AppleWalletStack';

const METHODOLOGY_PASSES = [
  {
    id: 'step-1',
    badge: 'PASO 01',
    category: 'Fase Inicial · Diagnóstico',
    title: 'Diagnóstico Operativo & Levantamiento de Procesos',
    icon: Search,
    accent: 'blue',
    description:
      'Comprensión profunda del modelo del negocio y levantamiento detallado de la información operativa en terreno. Mapeo integral de la cadena de valor para identificar cuellos de botella, redundancias y puntos críticos que frenan la eficiencia.',
    tags: ['Mapeo de Procesos', 'Detección de Brechas', 'Entrevistas de Diagnóstico', 'Matriz RACI'],
    meta: [
      { label: 'Objetivo', value: 'Radiografía operacional integral' },
      { label: 'Herramienta', value: 'Diagramas BPMN + Inventario de tareas' },
      { label: 'Entregable', value: 'Informe de diagnóstico operativo' },
    ],
  },
  {
    id: 'step-2',
    badge: 'PASO 02',
    category: 'Estructura · Planificación',
    title: 'Planificación Estratégica & Cronogramas Críticos',
    icon: CalendarDays,
    accent: 'purple',
    description:
      'Definición de prioridades operacionales con base en impacto y esfuerzo. Creación de matrices de tareas críticas, estimación realista de plazos, presupuestos y asignación óptima de recursos humanos y tecnológicos.',
    tags: ['Diagrama de Gantt', 'Matriz de Priorización', 'Presupuesto Operativo', 'Ruta Crítica'],
    meta: [
      { label: 'Enfoque', value: 'Hitos clave y responsabilidades' },
      { label: 'Control', value: 'Cronograma estricto de cumplimiento' },
      { label: 'Recursos', value: 'Balance carga-capacidad' },
    ],
  },
  {
    id: 'step-3',
    badge: 'PASO 03',
    category: 'Implementación · Operación',
    title: 'Ejecución Coordinada & Estandarización de Procesos',
    icon: Play,
    accent: 'emerald',
    description:
      'Puesta en marcha de procedimientos estandarizados con apoyo directo al equipo. Coordinación cercana de las unidades de trabajo, inducción en nuevos flujos operativos y resolución inmediata de contingencias.',
    tags: ['Estandarización de Tareas', 'Liderazgo de Equipos', 'Gestión del Cambio', 'Manuales Paso a Paso'],
    meta: [
      { label: 'Liderazgo', value: 'Coordinación directa de equipos' },
      { label: 'Soporte', value: 'Protocolos operativos claros' },
      { label: 'Sincronización', value: 'Seguimiento diario de avance' },
    ],
  },
  {
    id: 'step-4',
    badge: 'PASO 04',
    category: 'Supervisión · Calidad',
    title: 'Control de Gestión & Mitigación de Riesgos',
    icon: ShieldAlert,
    accent: 'gold',
    description:
      'Monitoreo continuo del apego a estándares de calidad, políticas internas y regulaciones laborales y tributarias. Establecimiento de alertas tempranas para neutralizar desviaciones antes de que impacten los costos.',
    tags: ['Supervisión de Estándares', 'Mitigación de Riesgos', 'Control de Cumplimiento', 'Alertas Tempranas'],
    meta: [
      { label: 'Frecuencia', value: 'Monitoreo preventivo' },
      { label: 'Criterio', value: 'Tolerancia mínima a desviaciones' },
      { label: 'Acción', value: 'Planes de contingencia activos' },
    ],
  },
  {
    id: 'step-5',
    badge: 'PASO 05',
    category: 'Finanzas · Tesorería',
    title: 'Auditoría Financiera, Arqueos & Control de Caja',
    icon: CheckCircle,
    accent: 'blue',
    description:
      'Revisión minuciosa de cuadraturas de caja chica, arqueos de fondos, conciliaciones bancarias al centavo y archivo estructurado de documentación contable y tributaria ante el SII.',
    tags: ['Conciliación Bancaria', 'Arqueo de Caja Chica', 'Control de Inventarios', 'Respaldo Tributario'],
    meta: [
      { label: 'Exactitud', value: 'Cero descuadres contables' },
      { label: 'Documentación', value: 'Facturas, boletas y notas de crédito' },
      { label: 'Cierre', value: 'Balance mensual cuadrado' },
    ],
  },
  {
    id: 'step-6',
    badge: 'PASO 06',
    category: 'Estrategia · Cuadros de Mando',
    title: 'Entrega de Resultados & Cuadros de Mando (KPIs)',
    icon: CheckCheck,
    accent: 'emerald',
    description:
      'Consolidación de indicadores clave de desempeño (KPIs) en cuadros de mando ejecutivos de fácil lectura. Presentación formal de resultados cuantitativos a la jefatura o gerencia y diseño de planes de mejora continua.',
    tags: ['Dashboards Ejecutivos', 'KPIs Cuantitativos', 'Reportes Gerenciales', 'Mejora Continua'],
    meta: [
      { label: 'Entregable', value: 'Dashboard gerencial consolidado' },
      { label: 'Impacto', value: 'Visibilidad total para dirección' },
      { label: 'Ciclo', value: 'Retroalimentación y ajuste permanente' },
    ],
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 border-t border-slate-200/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <RevealOnScroll>
          <div className="mb-14 text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-semibold uppercase mb-3">
              <Layers size={12} />
              // 05. Metodología de Trabajo
            </div>
            <h2 className="text-3xl sm:text-4xl font-sora font-bold tracking-tight text-slate-900 mb-3">
              Metodologías de Gestión Administrativa
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Un marco metódico de 6 fases ejecutivas estructurado para garantizar orden, control presupuestario y eficiencia
              medible en cada ciclo operacional.
            </p>
          </div>
        </RevealOnScroll>

        {/* Apple Wallet Stack for Process Steps */}
        <RevealOnScroll delay={0.1}>
          <AppleWalletStack
            items={METHODOLOGY_PASSES}
            peekHeight={68}
            expandedOffset={270}
          />
        </RevealOnScroll>
      </div>
    </section>
  );
}
