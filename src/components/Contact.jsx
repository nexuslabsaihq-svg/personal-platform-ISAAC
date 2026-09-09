import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Briefcase } from 'lucide-react';
import RevealOnScroll from './ui/RevealOnScroll';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:isaacipp1709@gmail.com?subject=${encodeURIComponent(
      formData.subject || 'Contacto desde Portafolio'
    )}&body=${encodeURIComponent(
      `Nombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`
    )}`;
    window.open(mailtoUrl, '_blank');
    setSubmitted(true);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('isaacipp1709@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 max-w-6xl mx-auto px-4 sm:px-6 border-t border-slate-200/60 relative">
      <div className="space-y-12">
        <RevealOnScroll>
          <div className="space-y-2 text-center max-w-xl mx-auto">
            <p className="font-mono text-xs font-semibold tracking-wider text-blue-600 uppercase">
              // 08. Contacto Directo
            </p>
            <h2 className="text-3xl sm:text-4xl font-sora font-bold tracking-tight text-slate-900">
              Hablemos de nuevos desafíos.
            </h2>
            <p className="text-sm text-slate-600">
              ¿Buscas un perfil enfocado en gestión ordenada, optimización de procesos y rigor analítico? Escríbeme directamente.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* COLUMNA IZQUIERDA: DATOS */}
          <div className="lg:col-span-5 space-y-6">
            <RevealOnScroll delay={0.1}>
              <div className="p-6 sm:p-7 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-card space-y-5">
                <h3 className="font-sora text-base font-semibold text-slate-900">
                  Información de Contacto
                </h3>

                <div className="space-y-4">
                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0 mt-0.5">
                      <Mail size={16} />
                    </div>
                    <div className="space-y-0.5 flex-1 min-w-0">
                      <div className="text-[10px] font-mono text-slate-500">Email directo</div>
                      <div className="flex items-center gap-2">
                        <a
                          href="mailto:isaacipp1709@gmail.com"
                          className="text-xs font-mono font-semibold text-slate-800 hover:text-blue-600 transition-colors truncate"
                        >
                          isaacipp1709@gmail.com
                        </a>
                        <button
                          type="button"
                          onClick={copyEmail}
                          className="text-slate-400 hover:text-blue-600 transition-colors"
                          title="Copiar email"
                        >
                          <Copy size={12} />
                        </button>
                      </div>
                      {copied && <span className="text-[10px] text-emerald-600 font-mono font-semibold">¡Copiado al portapapeles!</span>}
                    </div>
                  </div>

                  {/* Teléfono */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0 mt-0.5">
                      <Phone size={16} />
                    </div>
                    <div className="space-y-0.5">
                      <div className="text-[10px] font-mono text-slate-500">Teléfono / WhatsApp</div>
                      <a
                        href="https://wa.me/56945642085"
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-mono font-semibold text-slate-800 hover:text-blue-600 transition-colors"
                      >
                        +56 9 4564 2085
                      </a>
                    </div>
                  </div>

                  {/* Ubicación */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0 mt-0.5">
                      <MapPin size={16} />
                    </div>
                    <div className="space-y-0.5">
                      <div className="text-[10px] font-mono text-slate-500">Ubicación</div>
                      <div className="text-xs font-semibold text-slate-800">Macul, Santiago, Chile</div>
                    </div>
                  </div>

                  {/* Disponibilidad */}
                  <div className="flex items-start gap-3 pt-3 border-t border-slate-100">
                    <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                      <Briefcase size={16} />
                    </div>
                    <div className="space-y-0.5">
                      <div className="text-[10px] font-mono text-slate-500">Disponibilidad</div>
                      <div className="text-xs text-emerald-700 font-semibold flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        Abierto a nuevas oportunidades
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* COLUMNA DERECHA: FORMULARIO */}
          <div className="lg:col-span-7">
            <RevealOnScroll delay={0.2}>
              <div className="p-6 sm:p-8 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-card">
                {submitted ? (
                  <div className="py-8 text-center space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 mx-auto flex items-center justify-center text-blue-600">
                      <CheckCircle2 size={24} />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-sora text-base sm:text-lg font-semibold text-slate-900">
                        ¡Listo! Tu cliente de correo se ha abierto.
                      </h3>
                      <p className="text-xs text-slate-600 max-w-sm mx-auto">
                        Si no se abrió automáticamente, puedes escribir directamente a <strong>isaacipp1709@gmail.com</strong>.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2 rounded-lg bg-slate-100 border border-slate-200 text-xs font-mono font-semibold text-slate-700 hover:bg-slate-200 transition-colors"
                    >
                      Enviar otro mensaje
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-xs font-mono text-slate-600 mb-1.5 font-medium">
                          Nombre completo
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          placeholder="Ej. Camila Morales"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-50/70 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all font-sans"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-xs font-mono text-slate-600 mb-1.5 font-medium">
                          Correo electrónico
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          placeholder="tu-correo@empresa.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-50/70 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all font-sans"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-xs font-mono text-slate-600 mb-1.5 font-medium">
                        Asunto
                      </label>
                      <input
                        id="subject"
                        type="text"
                        required
                        placeholder="Ej. Oportunidad laboral / Proyecto de gestión"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50/70 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all font-sans"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-mono text-slate-600 mb-1.5 font-medium">
                        Mensaje
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        required
                        placeholder="Describe la propuesta o los objetivos que buscas alcanzar..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50/70 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all resize-none font-sans"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 text-white font-sora font-semibold text-sm hover:bg-blue-700 hover:shadow-md hover:shadow-blue-500/25 transition-all"
                    >
                      <span>Enviar Mensaje</span>
                      <Send size={15} />
                    </button>
                  </form>
                )}
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
