import React from 'react';
import { Star, MessageSquareQuote, ThumbsUp } from 'lucide-react';
import { testimonials } from '../data/menuData';

export default function TestimonialsSection() {
  return (
    <section id="testimonios" className="py-20 bg-[#0b0a0a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-950/60 border border-red-800/40 text-red-400 text-xs font-bold tracking-widest uppercase mb-3">
            <ThumbsUp className="w-3.5 h-3.5" />
            <span>Opiniones de Quienes ya Probaron</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mb-4">
            Clientes Satisfechos
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            La mejor recomendación es el crujido del chicharrón y el sabor ahumado que deja a todos con ganas de repetir.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-red-600/40 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Star rating */}
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-zinc-200 text-sm leading-relaxed italic mb-6">
                  “{t.comment}”
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wide">
                    {t.name}
                  </h4>
                  <p className="text-xs text-red-400">{t.role}</p>
                </div>
                <MessageSquareQuote className="w-6 h-6 text-zinc-700" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
