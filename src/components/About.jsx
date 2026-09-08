import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Mail, Briefcase, ArrowRight } from 'lucide-react';

const SKILLS_DATA = [
  { name: 'Excel (reportes y control)', level: 65 },
  { name: 'Power BI', level: 40 },
  { name: 'HCMFRONT (gestión de personas)', level: 70 },
  { name: 'Gestión de Equipos y Personas', level: 80 },
  { name: 'Atención al Cliente y Resolución de Incidencias', level: 90 },
  { name: 'IA Aplicada (Prompt Engineering, Claude, Gemini)', level: 75 },
];

export default function About() {
  return (
    <section id="about" className="py-24 max-w-6xl mx-auto px-4 sm:px-6 border-t border-[#1F2430]/40">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* COLUMNA IZQUIERDA: About Me */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="lg:col-span-6 space-y-6"
        >
          <div className="space-y-2">
            <p className="font-mono text-xs font-semibold tracking-wider text-accent uppercase">
              // 01. About Me
            </p>
            <h2 className="text-3xl sm:text-4xl font-sora font-bold tracking-tight text-[#E8EAED]">
              Especialista en procesos, gestión y personas.
            </h2>
          </div>

          <p className="text-base text-[#8B92A5] leading-relaxed">
            Estudiante en última etapa de <span className="text-[#E8EAED] font-medium">Ingeniería en Administración de Empresas en INACAP</span>. Mi enfoque profesional combina el rigor analítico, la optimización de procesos operativos y la toma de decisiones basada en datos. Cuento con experiencia comprobable en liderazgo de equipos multidisciplinarios de más de 7 personas, implementación de procedimientos de control interno y resolución ágil de incidencias en entornos corporativos dinámicos.
          </p>

          {/* Mini-datos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="p-3.5 rounded-xl bg-[#131722] border border-[#1F2430] flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#1F2430]/50 flex items-center justify-center text-accent shrink-0">
                <User size={15} />
              </div>
              <div className="truncate">
                <div className="text-[10px] font-mono text-[#8B92A5]">Nombre</div>
                <div className="text-xs font-medium text-[#E8EAED] truncate">Isaac Patricio Pastén Díaz</div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#131722] border border-[#1F2430] flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#1F2430]/50 flex items-center justify-center text-accent shrink-0">
                <MapPin size={15} />
              </div>
              <div className="truncate">
                <div className="text-[10px] font-mono text-[#8B92A5]">Ubicación</div>
                <div className="text-xs font-medium text-[#E8EAED] truncate">Macul / Santiago, Chile</div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#131722] border border-[#1F2430] flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#1F2430]/50 flex items-center justify-center text-accent shrink-0">
                <Mail size={15} />
              </div>
              <div className="truncate">
                <div className="text-[10px] font-mono text-[#8B92A5]">Email</div>
                <div className="text-xs font-medium text-[#E8EAED] truncate">isaacipp1709@gmail.com</div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#131722] border border-[#1F2430] flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#1F2430]/50 flex items-center justify-center text-emerald-400 shrink-0">
                <Briefcase size={15} />
              </div>
              <div className="truncate">
                <div className="text-[10px] font-mono text-[#8B92A5]">Disponibilidad</div>
                <div className="text-xs font-medium text-emerald-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Abierto a trabajar
                </div>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <a
              href="#process"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#131722] border border-[#1F2430] hover:border-accent text-xs font-sora font-medium text-[#E8EAED] hover:text-accent transition-all group"
            >
              <span>Conoce mi metodología de trabajo</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* COLUMNA DERECHA: My Expertise (Barras animadas) */}
        <motion.div
          id="skills"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          className="lg:col-span-6 space-y-6"
        >
          <div className="space-y-2">
            <p className="font-mono text-xs font-semibold tracking-wider text-accent uppercase">
              // 02. My Expertise
            </p>
            <h2 className="text-3xl sm:text-4xl font-sora font-bold tracking-tight text-[#E8EAED]">
              Competencias & Herramientas
            </h2>
          </div>

          <div className="p-6 rounded-2xl bg-[#131722] border border-[#1F2430] space-y-5 shadow-xl shadow-black/20">
            {SKILLS_DATA.map((skill, index) => (
              <div key={index} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-medium">
                  <span className="text-[#E8EAED]">{skill.name}</span>
                  <span className="font-mono text-accent">{skill.level}%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-[#0B0E14] overflow-hidden border border-[#1F2430]/60">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.1 * index, ease: 'easeOut' }}
                    className="h-full rounded-full bg-gradient-to-r from-accent to-[#7AA6F8] shadow-[0_0_10px_rgba(91,141,239,0.5)]"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
