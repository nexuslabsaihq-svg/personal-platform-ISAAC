import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MessageSquare, Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 max-w-6xl mx-auto px-4 sm:px-6 border-t border-slate-200/60">
      <div className="space-y-8">
        <div className="space-y-2 text-center max-w-2xl mx-auto">
          <p className="font-mono text-xs font-semibold tracking-wider text-blue-600 uppercase">
            // 07. Testimonios & Referencias
          </p>
          <h2 className="text-3xl sm:text-4xl font-sora font-bold tracking-tight text-slate-900">
            Referencias & Recomendaciones
          </h2>
        </div>

        {/* Card elegante en construcción */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="p-8 sm:p-12 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/80 text-center max-w-2xl mx-auto flex flex-col items-center justify-center space-y-4 shadow-card"
        >
          <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
            <Clock size={26} className="animate-spin-slow" />
          </div>

          <div className="space-y-2">
            <h3 className="font-sora text-base sm:text-lg font-semibold text-slate-900">
              Sección en construcción
            </h3>
            <p className="font-mono text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
              Referencias y cartas de recomendación laboral en proceso de recopilación y digitalización.
            </p>
          </div>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-[11px] font-mono text-slate-600">
            <Quote size={12} className="text-blue-600" />
            <span>Documentos formales próximamente disponibles</span>
          </span>
        </motion.div>
      </div>
    </section>
  );
}
