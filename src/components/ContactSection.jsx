import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Flame,
  Send,
  MessageCircle,
  ExternalLink,
  Clock,
  Sparkles,
  Share2
} from 'lucide-react';
import { businessInfo } from '../data/menuData';

export default function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    eventDate: '',
    guests: '',
    interest: 'Bandejas y Parrilladas',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `🔥 *CONSULTA DIRECTA WEB - EL MÓNACO* 🔥\n\n` +
      `👤 *Nombre:* ${form.name}\n` +
      `📱 *Teléfono:* ${form.phone}\n` +
      `📅 *Fecha de Evento / Pedido:* ${form.eventDate || 'Por definir'}\n` +
      `👥 *Número de Personas:* ${form.guests || 'No especificado'}\n` +
      `🥩 *Interés:* ${form.interest}\n` +
      `💬 *Mensaje:* ${form.message || 'Sin mensaje adicional'}`;

    window.open(`https://wa.me/1${businessInfo.phoneRaw}?text=${encodeURIComponent(text)}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="py-20 bg-[#0e0c0c] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-950/60 border border-red-800/40 text-red-400 text-xs font-bold tracking-widest uppercase mb-3">
            <Flame className="w-3.5 h-3.5" />
            <span>Haz tu Encargo o Cotiza tu Evento</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mb-4">
            Contáctanos & Pedidos
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Atendemos pedidos familiares, reuniones de fin de semana y eventos especiales con el sabor 100% auténtico del barril.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Direct Info Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-zinc-900 to-[#141212] border border-red-950/80 shadow-2xl space-y-6">
              <h3 className="text-xl font-heading font-black text-white uppercase tracking-wide flex items-center gap-2">
                <Flame className="w-5 h-5 text-red-500" />
                Información de Contacto
              </h3>

              <div className="space-y-4">
                {/* Phone & WhatsApp */}
                <a
                  href={`tel:${businessInfo.phoneRaw}`}
                  className="flex items-start gap-4 p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-800/80 hover:border-red-600/60 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-red-950/60 border border-red-900/40 flex items-center justify-center text-red-500 group-hover:scale-105 group-hover:bg-red-600 group-hover:text-white transition-all shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-zinc-400 uppercase tracking-wider block font-semibold">
                      Teléfono Directo / Pedidos
                    </span>
                    <span className="text-base font-bold text-white group-hover:text-red-400 transition-colors">
                      {businessInfo.phone}
                    </span>
                  </div>
                </a>

                {/* WhatsApp button */}
                <a
                  href={businessInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-800/80 hover:border-green-600/60 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-green-950/60 border border-green-900/40 flex items-center justify-center text-green-500 group-hover:scale-105 group-hover:bg-green-600 group-hover:text-white transition-all shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-zinc-400 uppercase tracking-wider block font-semibold">
                      WhatsApp Inmediato
                    </span>
                    <span className="text-base font-bold text-white group-hover:text-green-400 transition-colors">
                      {businessInfo.whatsappFormatted}
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${businessInfo.email}`}
                  className="flex items-start gap-4 p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-800/80 hover:border-red-600/60 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-red-950/60 border border-red-900/40 flex items-center justify-center text-red-500 group-hover:scale-105 group-hover:bg-red-600 group-hover:text-white transition-all shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs text-zinc-400 uppercase tracking-wider block font-semibold">
                      Correo Electrónico
                    </span>
                    <span className="text-sm sm:text-base font-bold text-white group-hover:text-red-400 transition-colors truncate block">
                      {businessInfo.email}
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-4 p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-800/80">
                  <div className="w-10 h-10 rounded-lg bg-red-950/60 border border-red-900/40 flex items-center justify-center text-red-500 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-zinc-400 uppercase tracking-wider block font-semibold">
                      Área de Cobertura
                    </span>
                    <span className="text-sm font-bold text-white">
                      Austin, Texas y alrededores
                    </span>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      Pregunta por disponibilidad para entregas y eventos privados.
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-zinc-800">
                <span className="text-xs uppercase tracking-wider text-zinc-400 font-semibold block mb-3">
                  Síguenos en Redes Sociales
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={businessInfo.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-3 rounded-xl bg-black/60 border border-zinc-800 hover:border-red-500 hover:bg-zinc-900 text-white text-xs font-bold transition-all"
                  >
                    <span>TikTok</span>
                    <ExternalLink className="w-3.5 h-3.5 text-red-500" />
                  </a>

                  <a
                    href={businessInfo.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-3 rounded-xl bg-black/60 border border-zinc-800 hover:border-red-500 hover:bg-zinc-900 text-white text-xs font-bold transition-all"
                  >
                    <span>Facebook</span>
                    <ExternalLink className="w-3.5 h-3.5 text-red-500" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 shadow-2xl">
              <h3 className="text-xl font-heading font-black text-white uppercase tracking-wide mb-2">
                Envíanos una Consulta
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mb-6">
                Completa este formulario y se abrirá tu WhatsApp listo con todos los datos para que el asador te confirme de inmediato.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                      Nombre Completo *
                    </label>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Tu nombre"
                      className="w-full px-4 py-3 bg-black/70 border border-zinc-800 focus:border-red-600 rounded-xl text-white text-sm outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                      Teléfono de Contacto *
                    </label>
                    <input
                      required
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="Ej. 737-000-0000"
                      className="w-full px-4 py-3 bg-black/70 border border-zinc-800 focus:border-red-600 rounded-xl text-white text-sm outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                      Fecha del Pedido / Evento
                    </label>
                    <input
                      type="date"
                      value={form.eventDate}
                      onChange={(e) => setForm({ ...form, eventDate: e.target.value })}
                      className="w-full px-4 py-3 bg-black/70 border border-zinc-800 focus:border-red-600 rounded-xl text-white text-sm outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                      ¿Para cuántas personas?
                    </label>
                    <input
                      type="text"
                      value={form.guests}
                      onChange={(e) => setForm({ ...form, guests: e.target.value })}
                      placeholder="Ej. 4 personas / 25 personas"
                      className="w-full px-4 py-3 bg-black/70 border border-zinc-800 focus:border-red-600 rounded-xl text-white text-sm outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                    Plato o Servicio de Interés
                  </label>
                  <select
                    value={form.interest}
                    onChange={(e) => setForm({ ...form, interest: e.target.value })}
                    className="w-full px-4 py-3 bg-black/70 border border-zinc-800 focus:border-red-600 rounded-xl text-white text-sm outline-none transition-colors"
                  >
                    <option value="Chicharrón y Costichicharrón al Barril">Chicharrón y Costichicharrón al Barril</option>
                    <option value="Bandeja El Mónaco / Bandeja del Charro">Bandeja El Mónaco / Bandeja del Charro</option>
                    <option value="Cortes Prémium (Ribeye, Picaña, Entraña)">Cortes Prémium (Ribeye, Picaña, Entraña)</option>
                    <option value="Tabla Prémium para Eventos">Tabla Prémium para Eventos</option>
                    <option value="Servicio de Asado al Barril Privado">Servicio de Asado al Barril Privado</option>
                    <option value="Otro">Otro requerimiento especial</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                    Mensaje o Detalles Especiales
                  </label>
                  <textarea
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Escribe cualquier detalle adicional, acompañamiento preferido o duda..."
                    className="w-full px-4 py-3 bg-black/70 border border-zinc-800 focus:border-red-600 rounded-xl text-white text-sm outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-red-600 via-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-heading text-base font-bold uppercase tracking-wider transition-all shadow-xl shadow-red-950/60 hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Consulta por WhatsApp</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
