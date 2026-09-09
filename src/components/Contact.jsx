import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Briefcase, Send, CheckCircle2, Copy, AlertCircle } from 'lucide-react';
import MagneticButton from './ui/MagneticButton';
import RevealOnScroll from './ui/RevealOnScroll';
import { useReducedMotion } from '../hooks/useReducedMotion';

const CONTACT_INFO = [
  {
    icon: Mail,
    label: 'Email directo',
    value: 'isaacipp1709@gmail.com',
    href: 'mailto:isaacipp1709@gmail.com',
    action: 'copy',
    color: 'accent',
  },
  {
    icon: Phone,
    label: 'Teléfono / WhatsApp',
    value: '+56 9 4564 2085',
    href: 'https://wa.me/56945642085',
    action: 'link',
    color: 'accent',
  },
  {
    icon: MapPin,
    label: 'Ubicación',
    value: 'Macul, Santiago, Chile',
    href: null,
    action: null,
    color: 'accent',
  },
  {
    icon: Briefcase,
    label: 'Disponibilidad',
    value: 'Abierto a nuevas oportunidades',
    href: null,
    action: null,
    color: 'emerald',
    isBadge: true,
  },
];

function ContactInfoCard({ icon: Icon, label, value, href, action, color, isBadge, delay }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const borderColor = color === 'accent' ? 'border-border-dark hover:border-accent/50' : 'border-border-dark';
  const bgColor = color === 'accent' ? 'bg-accent/10' : 'bg-emerald-500/10';
  const textColor = color === 'accent' ? 'text-accent' : 'text-emerald-400';
  const badgeBg = color === 'accent' ? 'bg-accent/5' : 'bg-emerald-950/40 border-emerald-800/40';
  const badgeDot = color === 'accent' ? 'bg-accent' : 'bg-emerald-400';

  return (
    <RevealOnScroll delay={delay}>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: delay || 0 }}
        className={`flex items-start gap-4 p-5 rounded-xl bg-surface/80 border ${borderColor} backdrop-blur-sm hover:shadow-card transition-all duration-300 group`}
      >
        {/* Icon box */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          className={`w-10 h-10 rounded-lg ${bgColor} border border-border-dark flex items-center justify-center ${textColor} shrink-0 mt-0.5`}
        >
          <Icon size={18} />
        </motion.div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="text-[10px] font-mono text-text-muted uppercase tracking-wider mb-1.5">
            {label}
          </div>

          {isBadge ? (
            <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full ${badgeBg} text-xs font-medium ${textColor}`}>
              <span className={`w-2 h-2 rounded-full ${badgeDot} animate-pulse`} />
              {value}
            </div>
          ) : (
            <div className="flex items-center gap-2 gap-y-1">
              {href ? (
                <a
                  href={href}
                  target={action === 'link' ? '_blank' : undefined}
                  rel={action === 'link' ? 'noreferrer' : undefined}
                  className="text-sm font-mono text-text-main hover:text-accent transition-colors truncate"
                >
                  {value}
                </a>
              ) : (
                <span className="text-sm font-mono text-text-main truncate">{value}</span>
              )}

              {action === 'copy' && (
                <button
                  type="button"
                  onClick={copyToClipboard}
                  className="text-text-muted hover:text-accent transition-colors shrink-0 ml-auto"
                  title="Copiar email"
                  aria-label="Copiar email"
                >
                  <motion.div
                    animate={copied ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ duration: 0.3 }}
                  >
                    <Copy size={14} />
                  </motion.div>
                </button>
              )}

              {action === 'link' && (
                <motion.div
                  whileHover={{ x: 2 }}
                  className="text-text-muted group-hover:text-accent transition-colors shrink-0 ml-auto"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </motion.div>
              )}
            </div>
          )}

          {/* Copied feedback */}
          <AnimatePresence>
            {copied && (
              <motion.span
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                className="text-[10px] text-emerald-400 font-mono block mt-1"
              >
                ✓ Copiado
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </RevealOnScroll>
  );
}

function FormField({ label, id, type = 'text', placeholder, value, onChange, error, delay }) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={!reducedMotion ? { opacity: 0, y: 8 } : {}}
      whileInView={!reducedMotion ? { opacity: 1, y: 0 } : {}}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: delay || 0 }}
      className="space-y-2"
    >
      <label htmlFor={id} className="block text-xs font-mono text-text-muted uppercase tracking-wider">
        {label}
      </label>

      {type === 'textarea' ? (
        <textarea
          id={id}
          rows={4}
          required
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full px-4 py-3 rounded-xl bg-base border border-border-dark text-sm text-text-main placeholder-text-muted/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all duration-200 resize-none"
        />
      ) : (
        <input
          id={id}
          type={type}
          required
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full px-4 py-3 rounded-xl bg-base border border-border-dark text-sm text-text-main placeholder-text-muted/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all duration-200"
        />
      )}

      {/* Error message */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="flex items-center gap-1.5 text-[11px] text-red-400 font-mono"
          >
            <AlertCircle size={12} />
            {error}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const reducedMotion = useReducedMotion();

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'El nombre es requerido';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = 'Email válido requerido';
    if (!formData.subject.trim()) newErrors.subject = 'El asunto es requerido';
    if (!formData.message.trim()) newErrors.message = 'El mensaje es requerido';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    // Simula envío (en producción, integrar con backend)
    setTimeout(() => {
      const mailtoUrl = `mailto:isaacipp1709@gmail.com?subject=${encodeURIComponent(
        formData.subject || 'Contacto desde Portafolio'
      )}&body=${encodeURIComponent(
        `Nombre: ${formData.name}\nCorreo: ${formData.email}\n\nMensaje:\n${formData.message}`
      )}`;

      window.open(mailtoUrl, '_blank');
      setSubmitted(true);
      setLoading(false);
      setErrors({});
    }, 600);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setSubmitted(false);
  };

  return (
    <section
      id="contact"
      className="py-24 max-w-6xl mx-auto px-4 sm:px-6 border-t border-border-dark/40 relative overflow-hidden"
    >
      {/* Fondo decorativo */}
      {!reducedMotion && (
        <motion.div
          className="absolute inset-0 pointer-events-none -z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
          <div className="absolute top-40 left-10 w-72 h-72 rounded-full bg-gold/5 blur-3xl" />
        </motion.div>
      )}

      <div className="space-y-12 relative z-10">
        {/* Header */}
        <RevealOnScroll>
          <motion.div className="space-y-3">
            <p className="font-mono text-xs font-semibold tracking-wider text-accent uppercase">
              // 07. Contact
            </p>
            <h2 className="text-3xl sm:text-4xl font-sora font-bold tracking-tight text-text-main">
              Hablemos de nuevos desafíos.
            </h2>
            <p className="text-sm text-text-muted max-w-lg leading-relaxed">
              ¿Buscas un perfil enfocado en gestión ordenada, optimización de procesos y rigor analítico?
              Escríbeme directamente y conversemos sobre tu proyecto.
            </p>
          </motion.div>
        </RevealOnScroll>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* COLUMNA IZQUIERDA: Contact Info */}
          <div className="lg:col-span-5 space-y-4">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-lg font-sora font-semibold text-text-main mb-6"
            >
              Canales de contacto
            </motion.h3>

            <div className="space-y-3">
              {CONTACT_INFO.map((info, i) => (
                <ContactInfoCard key={info.label} {...info} delay={0.1 + i * 0.08} />
              ))}
            </div>

            {/* Nota adicional */}
            <RevealOnScroll delay={0.5}>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-8 p-4 rounded-xl bg-accent/5 border border-accent/20 backdrop-blur-sm"
              >
                <p className="text-xs text-text-muted leading-relaxed">
                  <strong className="text-accent">Respuesta rápida:</strong> Intento responder todos los mensajes en menos de 24 horas.
                  Si es urgente, prefiéro WhatsApp.
                </p>
              </motion.div>
            </RevealOnScroll>
          </div>

          {/* COLUMNA DERECHA: Formulario */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 sm:p-8 rounded-2xl bg-surface/80 border border-border-dark backdrop-blur-sm shadow-card"
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  // Success state
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="py-12 text-center space-y-6"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 rounded-2xl bg-base border border-accent/40 mx-auto flex items-center justify-center text-accent"
                    >
                      <CheckCircle2 size={32} />
                    </motion.div>

                    <div className="space-y-2">
                      <h3 className="font-sora text-lg sm:text-xl font-semibold text-text-main">
                        ¡Mensaje enviado!
                      </h3>
                      <p className="text-sm text-text-muted max-w-sm mx-auto leading-relaxed">
                        Tu cliente de correo se ha abierto. Si no, puedes escribir directamente a{' '}
                        <strong className="text-accent">isaacipp1709@gmail.com</strong>
                      </p>
                    </div>

                    <MagneticButton>
                      <button
                        type="button"
                        onClick={handleReset}
                        className="px-6 py-2.5 rounded-xl bg-accent hover:bg-accent-hover text-base font-semibold text-white transition-all duration-200"
                      >
                        Enviar otro mensaje
                      </button>
                    </MagneticButton>
                  </motion.div>
                ) : (
                  // Form state
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-5"
                  >
                    {/* Name & Email row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormField
                        id="name"
                        label="Nombre completo"
                        placeholder="Ej. Camila Morales"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          setErrors({ ...errors, name: '' });
                        }}
                        error={errors.name}
                        delay={0.1}
                      />
                      <FormField
                        id="email"
                        label="Correo electrónico"
                        type="email"
                        placeholder="tu-correo@empresa.com"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          setErrors({ ...errors, email: '' });
                        }}
                        error={errors.email}
                        delay={0.15}
                      />
                    </div>

                    {/* Subject */}
                    <FormField
                      id="subject"
                      label="Asunto"
                      placeholder="Ej. Oportunidad laboral / Proyecto de gestión"
                      value={formData.subject}
                      onChange={(e) => {
                        setFormData({ ...formData, subject: e.target.value });
                        setErrors({ ...errors, subject: '' });
                      }}
                      error={errors.subject}
                      delay={0.2}
                    />

                    {/* Message */}
                    <FormField
                      id="message"
                      label="Mensaje"
                      type="textarea"
                      placeholder="Describe la propuesta o los objetivos que buscas alcanzar..."
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        setErrors({ ...errors, message: '' });
                      }}
                      error={errors.message}
                      delay={0.25}
                    />

                    {/* Submit button */}
                    <motion.div
                      initial={!reducedMotion ? { opacity: 0, y: 8 } : {}}
                      whileInView={!reducedMotion ? { opacity: 1, y: 0 } : {}}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                      className="pt-2"
                    >
                      <MagneticButton>
                        <button
                          type="submit"
                          disabled={loading}
                          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-accent hover:bg-accent-hover text-base font-semibold text-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <motion.span
                            animate={{ opacity: loading ? 0.6 : 1 }}
                            transition={{ duration: 0.2 }}
                          >
                            {loading ? 'Enviando...' : 'Enviar Mensaje'}
                          </motion.span>
                          <motion.div
                            animate={loading ? { rotate: 360 } : {}}
                            transition={{ duration: 1, repeat: loading ? Infinity : 0 }}
                          >
                            <Send size={16} />
                          </motion.div>
                        </button>
                      </MagneticButton>
                    </motion.div>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
