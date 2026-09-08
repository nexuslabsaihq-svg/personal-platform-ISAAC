import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Star, Trophy } from 'lucide-react';
import AnimatedStat from './AnimatedStat';

const STATS_DATA = [
  { value: 7, suffix: '+', label: 'Personas Lideradas', icon: Users },
  { value: 8, label: 'Certificaciones INACAP', icon: Award },
  { value: 5.9, decimals: 1, label: 'Nota de Egreso', icon: Star },
  { value: 2, prefix: 'N°', label: 'Ranking de Egreso', icon: Trophy },
];

export default function Numbers() {
  return (
    <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 border-t border-[#1F2430]/40">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="space-y-8"
      >
        <div className="text-center max-w-xl mx-auto space-y-2">
          <p className="font-mono text-xs font-semibold tracking-wider text-accent uppercase">
            // By The Numbers
          </p>
          <h2 className="text-2xl sm:text-3xl font-sora font-bold tracking-tight text-[#E8EAED]">
            Logros & Métricas Cuantitativas
          </h2>
          <p className="text-xs sm:text-sm text-[#8B92A5]">
            Resultados académicos y de liderazgo alcanzados durante mi trayectoria formativa.
          </p>
        </div>

        {/* 4 Contadores en formato grande y dorado */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS_DATA.map((stat, idx) => (
            <div key={idx} className="h-full">
              <AnimatedStat
                value={stat.value}
                suffix={stat.suffix}
                prefix={stat.prefix}
                decimals={stat.decimals}
                label={stat.label}
                icon={stat.icon}
              />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
