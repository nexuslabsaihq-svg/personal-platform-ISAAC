import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MessageSquare, Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 max-w-6xl mx-auto px-4 sm:px-6 border-t border-[#1F2430]/40">
      <div className="space-y-8">
        <div className="space-y-2">
          <p className="font-mono text-xs font-semibold tracking-wider text-accent uppercase">
            // 05. Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl font-sora font-bold tracking-tight text-[#E8EAED]">
            Referencias & Recomendaciones
          </h2>
        </div>

        {/* Card elegante en construcción */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="p-8 sm:p-12 rounded-2xl bg-[#131722] border border-[#1F2430] text-center max-w-2xl mx-auto flex flex-col items-center justify-center space-y-4 shadow-xl"
        >
          <div className="w-14 h-14 rounded-2xl bg-[#1F2430]/50 border border-[#1F2430] flex items-center justify-center text-accent">
            <Clock size={26} className="animate-spin-slow" />
          </div>

          <div className="space-y-2">
            <h3 className="font-sora text-base sm:text-lg font-semibold text-[#E8EAED]">
              Sección en construcción
            </h3>
            <p className="font-mono text-xs sm:text-sm text-[#8B92A5] max-w-md mx-auto">
              Referencias laborales próximamente.
            </p>
          </div>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0B0E14] border border-[#1F2430] text-[11px] font-mono text-[#8B92A5]">
            <Quote size={12} className="text-accent" />
            <span>En proceso de recopilación de cartas de recomendación</span>
          </span>
        </motion.div>
      </div>
    </section>
  );
}
