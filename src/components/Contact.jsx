import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Briefcase, Send, CheckCircle2, Copy } from 'lucide-react';

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
    // Prepara el enlace mailto directo y muestra feedback
    const mailtoUrl = `mailto:isaacipp1709@gmail.com?subject=${encodeURIComponent(
      formData.subject || 'Contacto desde Portafolio'
    )}&body=${encodeURIComponent(
      `Nombre: ${formData.name}\nCorreo: ${formData.email}\n\nMensaje:\n${formData.message}`
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
    <section id="contact" className="py-24 max-w-6xl mx-auto px-4 sm:px-6 border-t border-[#1F2430]/40">
      <div className="space-y-12">
        <div className="space-y-2">
          <p className="font-mono text-xs font-semibold tracking-wider text-accent uppercase">
            // 06. Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-sora font-bold tracking-tight text-[#E8EAED]">
            Hablemos de nuevos desafíos.
          </h2>
          <p className="text-sm text-[#8B92A5] max-w-lg">
            ¿Buscas un perfil enfocado en gestión ordenada, optimización de procesos y rigor analítico? Escríbeme directamente.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* COLUMNA IZQUIERDA: DATOS */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-[#131722] border border-[#1F2430] space-y-5">
              <h3 className="font-sora text-base font-semibold text-[#E8EAED]">
                Información de Contacto
              </h3>

              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#1F2430]/60 flex items-center justify-center text-accent shrink-0 mt-0.5">
                    <Mail size={16} />
                  </div>
                  <div className="space-y-0.5 flex-1 min-w-0">
                    <div className="text-[10px] font-mono text-[#8B92A5]">Email directo</div>
                    <div className="flex items-center gap-2">
                      <a
                        href="mailto:isaacipp1709@gmail.com"
                        className="text-xs font-mono text-[#E8EAED] hover:text-accent transition-colors truncate"
                      >
                        isaacipp1709@gmail.com
                      </a>
                      <button
                        type="button"
                        onClick={copyEmail}
                        className="text-[#8B92A5] hover:text-white transition-colors"
                        title="Copiar email"
                      >
                        <Copy size={12} />
                      </button>
                    </div>
                    {copied && <span className="text-[10px] text-emerald-400 font-mono">¡Copiado!</span>}
                  </div>
                </div>

                {/* Teléfono */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#1F2430]/60 flex items-center justify-center text-accent shrink-0 mt-0.5">
                    <Phone size={16} />
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-[10px] font-mono text-[#8B92A5]">Teléfono / WhatsApp</div>
                    <a
                      href="https://wa.me/56945642085"
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-mono text-[#E8EAED] hover:text-accent transition-colors"
                    >
                      +56 9 4564 2085
                    </a>
                  </div>
                </div>

                {/* Ubicación */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#1F2430]/60 flex items-center justify-center text-accent shrink-0 mt-0.5">
                    <MapPin size={16} />
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-[10px] font-mono text-[#8B92A5]">Ubicación</div>
                    <div className="text-xs text-[#E8EAED]">Macul, Santiago, Chile</div>
                  </div>
                </div>

                {/* Disponibilidad */}
                <div className="flex items-start gap-3 pt-2 border-t border-[#1F2430]/60">
                  <div className="w-9 h-9 rounded-xl bg-emerald-950/40 border border-emerald-800/40 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                    <Briefcase size={16} />
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-[10px] font-mono text-[#8B92A5]">Disponibilidad</div>
                    <div className="text-xs text-emerald-400 font-medium flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Abierto a nuevas oportunidades
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: FORMULARIO */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#131722] border border-[#1F2430] shadow-xl">
              {submitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#1F2430] border border-accent/40 mx-auto flex items-center justify-center text-accent">
                    <CheckCircle2 size={24} />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-sora text-base sm:text-lg font-semibold text-[#E8EAED]">
                      ¡Listo! Tu cliente de correo se ha abierto.
                    </h3>
                    <p className="text-xs text-[#8B92A5] max-w-sm mx-auto">
                      Si tu cliente de correo no se abrió automáticamente, puedes escribir directamente a <strong>isaacipp1709@gmail.com</strong>.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 rounded-lg bg-[#1F2430] text-xs font-mono text-[#E8EAED] hover:bg-[#252C3B] transition-colors"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono text-[#8B92A5] mb-1.5">
                        Nombre completo
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="Ej. Camila Morales"
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
                        placeholder="tu-correo@empresa.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#0B0E14] border border-[#1F2430] text-sm text-[#E8EAED] placeholder-[#8B92A5]/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all font-sans"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-mono text-[#8B92A5] mb-1.5">
                      Asunto
                    </label>
                    <input
                      id="subject"
                      type="text"
                      required
                      placeholder="Ej. Oportunidad laboral / Proyecto de gestión"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
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
                      placeholder="Describe la propuesta o los objetivos que buscas alcanzar..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0B0E14] border border-[#1F2430] text-sm text-[#E8EAED] placeholder-[#8B92A5]/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none font-sans"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-accent text-[#0B0E14] font-sora font-semibold text-sm hover:bg-accent-hover hover:shadow-[0_0_20px_rgba(91,141,239,0.35)] transition-all"
                  >
                    <span>Enviar Mensaje</span>
                    <Send size={15} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
