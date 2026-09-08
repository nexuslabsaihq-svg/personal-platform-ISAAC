import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Front-end placeholder submit
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', message: '' });
    setSubmitted(false);
  };

  return (
    <section id="contact" className="py-20 max-w-5xl mx-auto px-4 sm:px-6 border-t border-zinc-900">
      <div className="space-y-10">
        {/* Section Header */}
        <div className="space-y-2">
          <p className="text-xs font-semibold tracking-wider text-zinc-500 uppercase">
            Contacto
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Iniciemos una conversación
          </h2>
          <p className="text-sm text-zinc-400">
            [¿Tienes alguna propuesta, proyecto o consulta? Escríbeme y me pondré en contacto contigo a la brevedad.]
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Form Column */}
          <div className="md:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/80">
              {submitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 mx-auto flex items-center justify-center text-zinc-200">
                    <CheckCircle2 size={24} />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-white">¡Mensaje recibido!</h3>
                    <p className="text-xs text-zinc-400 max-w-xs mx-auto">
                      Esta es una maqueta frontend sin backend activo. Tu mensaje se simuló con éxito.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="mt-4 px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-medium text-zinc-200 transition-colors"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Nombre completo
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Ej. Juan Pérez"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Correo electrónico
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="tu-correo@ejemplo.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      placeholder="Cuéntame sobre tu propuesta o consulta..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-zinc-100 text-zinc-950 font-semibold text-sm hover:bg-white transition-all shadow-sm"
                  >
                    <span>Enviar mensaje</span>
                    <Send size={15} />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Direct Contact Info Column */}
          <div className="md:col-span-5 space-y-4 flex flex-col justify-between">
            <div className="p-6 rounded-2xl bg-zinc-900/20 border border-zinc-800/60 space-y-4">
              <h3 className="text-sm font-semibold text-zinc-200">
                Canales Directos
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                También puedes ponerte en contacto a través de mis perfiles profesionales o correo electrónico directo:
              </p>

              <div className="space-y-2.5 pt-1">
                <a
                  href="mailto:contacto@ejemplo.com"
                  className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/60 hover:border-zinc-700 text-xs text-zinc-300 hover:text-white transition-colors"
                >
                  <Mail size={16} className="text-zinc-400" />
                  <span className="truncate">[tu-correo@ejemplo.com]</span>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/60 hover:border-zinc-700 text-xs text-zinc-300 hover:text-white transition-colors"
                >
                  <Linkedin size={16} className="text-zinc-400" />
                  <span className="truncate">LinkedIn / [Perfil Profesional]</span>
                </a>

                <a
                  href="https://github.com/nexuslabsaihq-svg/personal-platform-ISAAC"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/60 hover:border-zinc-700 text-xs text-zinc-300 hover:text-white transition-colors"
                >
                  <Github size={16} className="text-zinc-400" />
                  <span className="truncate">GitHub / personal-platform-ISAAC</span>
                </a>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/20 border border-zinc-800/40 text-xs text-zinc-500">
              Ubicación: Santiago, Chile • Zona horaria: GMT-3 / GMT-4
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
