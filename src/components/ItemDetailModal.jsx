import React from 'react';
import { X, Flame, Check, Plus, ShieldCheck, MessageCircle } from 'lucide-react';
import { businessInfo } from '../data/menuData';

export default function ItemDetailModal({ item, onClose, onAddToCart, inCart }) {
  if (!item) return null;

  const handleOrderThis = () => {
    onAddToCart(item);
    const msg = `Hola El Mónaco, me interesa ordenar el siguiente plato: *${item.title}*. ¿Tienen disponibilidad hoy?`;
    window.open(`https://wa.me/1${businessInfo.phoneRaw}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#141212] border border-red-900/60 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/70 text-zinc-300 hover:text-white hover:bg-red-600 transition-all cursor-pointer backdrop-blur-sm"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Top: Transparent PNG Dish Showcase with Spotlight */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-gradient-to-b from-zinc-900 via-[#181515] to-[#141212] flex items-center justify-center p-6 shrink-0">
          <div className="absolute inset-0 bg-radial from-red-600/15 via-transparent to-transparent" />
          
          <img
            src={item.image}
            alt={item.title}
            className="max-h-full max-w-full object-contain filter drop-shadow-[0_16px_32px_rgba(0,0,0,0.9)]"
          />

          {item.badge && (
            <div className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-red-600 text-white text-xs font-bold uppercase tracking-wider shadow-lg">
              {item.badge}
            </div>
          )}
        </div>

        {/* Info Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-red-500 uppercase tracking-widest mb-1">
              <Flame className="w-4 h-4" />
              <span>100% Ahumado al Barril • Austin, TX</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-black text-white uppercase">
              {item.title}
            </h2>
            {item.titleEn && (
              <p className="text-sm text-zinc-400 italic font-mono mt-0.5">
                {item.titleEn}
              </p>
            )}
          </div>

          <div>
            <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
              Descripción del Platillo
            </h4>
            <p className="text-zinc-200 text-sm sm:text-base leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* Highlights */}
          {item.highlights && item.highlights.length > 0 && (
            <div>
              <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
                Detalles de Preparación
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {item.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-xs text-zinc-300 bg-zinc-900/90 border border-zinc-800 p-2 rounded-lg"
                  >
                    <Check className="w-4 h-4 text-red-500 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Sauces Notice */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-red-950/40 to-zinc-900 border border-red-900/50 flex items-start gap-3 text-xs sm:text-sm text-zinc-300">
            <ShieldCheck className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white block font-heading tracking-wide">
                Incluido con este plato:
              </strong>
              <span>{businessInfo.includeNote}</span>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 bg-zinc-950 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={() => onAddToCart(item)}
            className={`w-full sm:w-auto flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              inCart
                ? 'bg-zinc-800 border border-green-500/60 text-green-400'
                : 'bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700'
            }`}
          >
            {inCart ? (
              <>
                <Check className="w-4 h-4 text-green-400" />
                <span>En tu Bandeja</span>
              </>
            ) : (
              <>
                <Plus className="w-4 h-4" />
                <span>Agregar a mi Bandeja</span>
              </>
            )}
          </button>

          <button
            onClick={handleOrderThis}
            className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-red-900/40 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Consultar este Plato</span>
          </button>
        </div>
      </div>
    </div>
  );
}
