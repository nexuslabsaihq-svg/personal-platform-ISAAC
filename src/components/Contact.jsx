import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle2, Linkedin, Github, MessageSquareCode } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', message: '' });
    setSubmitted(false);
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="py-24 max-w-5xl mx-auto px-4 sm:px-6 border-t border-[#1F2430]/40"
    >
      <div className="space-y-10">
        {/* Section Header */}
        <div className="space-y-2">
          <p className="font-mono text-xs font-semibold tracking-wider text-accent uppercase">
            // 03. Contacto
          </p>
          <h2 className="text-2xl sm:text-3xl font-sora font-bold tracking-tight text-[#E8EAED]">
            Iniciemos una Conversación
          </h2>
          <p className="text-sm text-[#8B92A5]">
            [¿Tienes una propuesta de proyecto, consulta laboral o académica? Escríbeme y responderé a la brevedad.]
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Form Card */}
          <div className="md:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#131722] border border-[#1F2430]/60 shadow-xl shadow-black/20">
              {submitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#1F2430]/60 border border-accent/40 mx-auto flex items-center justify-center text-accent">
                    <CheckCircle2 size={24} />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-sora text-lg font-semibold text-[#E8EAED]">
                      ¡Mensaje enviado con éxito!
                    </h3>
                    <p className="text-xs text-[#8B92A5] max-w-xs mx-auto">
                      Esta es la maqueta interactiva frontend. El formulario fue simulado correctamente.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="mt-2 px-4 py-2 rounded-lg bg-[#1F2430] hover:bg-[#252C3B] text-xs font-mono text-[#E8EAED] transition-colors"
                  >
                    ./enviar_otro_mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono text-[#8B92A5] mb-1.5">
                      Nombre completo
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Ej. Juan Pérez"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0B0E14] border border-[#1F2430] text-sm text-[#E8EAED] placeholder-[#8B92A5]/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all font-sans"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-mono text-[#8B92A5] mb-1.5">
                      Correo electrónico
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="tu-correo@ejemplo.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0B0E14] border border-[#1F2430] text-sm text-[#E8EAED] placeholder-[#8B92A5]/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all font-sans"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-mono text-[#8B92A5] mb-1.5">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      placeholder="Escribe tu mensaje o propuesta..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0B0E14] border border-[#1F2430] text-sm text-[#E8EAED] placeholder-[#8B92A5]/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none font-sans"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-accent text-[#0B0E14] font-sora font-semibold text-sm hover:bg-accent-hover hover:shadow-[0_0_20px_rgba(91,141,239,0.3)] transition-all"
                  >
                    <span>Enviar mensaje</span>
                    <Send size={15} />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Direct channels */}
          <div className="md:col-span-5 space-y-4 flex flex-col justify-between">
            <div className="p-6 rounded-2xl bg-[#131722] border border-[#1F2430]/60 space-y-4">
              <div className="flex items-center gap-2 text-accent font-mono text-xs">
                <MessageSquareCode size={16} />
                <span>Canales Directos</span>
              </div>
              <p className="text-xs text-[#8B92A5] leading-relaxed">
                Disponibilidad inmediata para contactar vía correo electrónico o redes profesionales:
              </p>

              <div className="space-y-2.5 pt-1">
                <a
                  href="mailto:contacto@ejemplo.com"
                  className="flex items-center gap-3 p-3 rounded-xl bg-[#0B0E14] border border-[#1F2430]/80 hover:border-accent/50 text-xs text-[#8B92A5] hover:text-[#E8EAED] transition-colors group"
                >
                  <Mail size={16} className="text-accent" />
                  <span className="truncate font-mono">[tu-correo@ejemplo.com]</span>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-[#0B0E14] border border-[#1F2430]/80 hover:border-accent/50 text-xs text-[#8B92A5] hover:text-[#E8EAED] transition-colors group"
                >
                  <Linkedin size={16} className="text-accent" />
                  <span className="truncate font-mono">LinkedIn // [Perfil Profesional]</span>
                </a>

                <a
                  href="https://github.com/nexuslabsaihq-svg/personal-platform-ISAAC"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-[#0B0E14] border border-[#1F2430]/80 hover:border-accent/50 text-xs text-[#8B92A5] hover:text-[#E8EAED] transition-colors group"
                >
                  <Github size={16} className="text-accent" />
                  <span className="truncate font-mono">GitHub // personal-platform-ISAAC</span>
                </a>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#131722]/50 border border-[#1F2430]/40 font-mono text-xs text-[#8B92A5]">
              <span className="text-emerald-400">●</span> Ubicación: Santiago, Chile • GMT-3
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
