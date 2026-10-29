import React, { useState } from 'react';
import { ShoppingBag, X, Plus, Minus, Trash2, Send, Phone, ShieldAlert, Sparkles } from 'lucide-react';
import { businessInfo } from '../data/menuData';

export default function CartModal({ isOpen, onClose, cartItems, onUpdateQuantity, onRemove, onClear }) {
  const [customerName, setCustomerName] = useState('');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleSendWhatsApp = () => {
    if (cartItems.length === 0) return;

    let message = `🔥 *HOLA EL MÓNACO - PEDIDO / COTIZACIÓN* 🔥\n\n`;
    if (customerName.trim()) {
      message += `👤 *Cliente:* ${customerName.trim()}\n`;
    }
    message += `📍 *Ubicación:* Austin, TX\n\n`;
    message += `📋 *PLATILLOS SELECCIONADOS:*\n`;

    cartItems.forEach((item, index) => {
      message += `  ${index + 1}. *${item.title}* x${item.quantity}\n`;
    });

    if (notes.trim()) {
      message += `\n📝 *Notas o Acompañantes elegidos:* ${notes.trim()}\n`;
    }

    message += `\n✅ *A la espera de confirmación de disponibilidad y precios actualizados.* ¡Gracias!`;

    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/1${businessInfo.phoneRaw}?text=${encoded}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#141212] border border-red-950/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-5 bg-gradient-to-r from-red-950/60 to-zinc-900 border-b border-red-900/40 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-red-600/20 border border-red-500/40 flex items-center justify-center">
              <ShoppingBag className="w-5 h-5 text-red-500" />
            </div>
            <div>
              <h3 className="text-lg font-heading font-bold text-white uppercase tracking-wide">
                Tu Bandeja de Pedido
              </h3>
              <p className="text-xs text-zinc-400">
                {totalCount} {totalCount === 1 ? 'platillo seleccionado' : 'platillos seleccionados'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-5 overflow-y-auto flex-1 space-y-4">
          {cartItems.length === 0 ? (
            <div className="text-center py-10">
              <ShoppingBag className="w-12 h-12 text-zinc-600 mx-auto mb-3" />
              <p className="text-zinc-300 font-medium">Tu bandeja está vacía</p>
              <p className="text-zinc-500 text-xs mt-1 max-w-xs mx-auto">
                Explora el menú y agrega los platillos que deseas cotizar o encargar directamente a El Mónaco.
              </p>
            </div>
          ) : (
            <>
              {/* Items List */}
              <div className="space-y-3">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="p-3 bg-zinc-900/80 border border-zinc-800/80 rounded-xl flex items-center gap-3 justify-between"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-12 h-12 rounded-lg object-cover shrink-0 border border-zinc-800"
                      />
                      <div className="min-w-0">
                        <h4 className="text-sm font-bold text-white truncate">{item.title}</h4>
                        <p className="text-[11px] text-zinc-400 truncate">{item.highlights?.[0] || '100% al barril'}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <div className="flex items-center bg-black/50 border border-zinc-800 rounded-lg">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="p-1.5 text-zinc-400 hover:text-white transition-colors"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-2 text-xs font-bold text-white font-mono">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="p-1.5 text-zinc-400 hover:text-white transition-colors"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <button
                        onClick={() => onRemove(item.id)}
                        className="p-1.5 text-zinc-500 hover:text-red-400 transition-colors"
                        title="Eliminar de la lista"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Customer Inputs */}
              <div className="pt-2 border-t border-zinc-800/80 space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                    Tu Nombre (Opcional):
                  </label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Ej. Juan Pérez"
                    className="w-full px-3 py-2 bg-black/60 border border-zinc-800 focus:border-red-600 rounded-lg text-white text-xs outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                    Notas o preferencias (Papa o Yuca, término, hora):
                  </label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Ej. Preferimos con yuca al vapor y salsa extra de queso..."
                    className="w-full px-3 py-2 bg-black/60 border border-zinc-800 focus:border-red-600 rounded-lg text-white text-xs outline-none resize-none"
                  />
                </div>

                <div className="p-3 bg-red-950/20 border border-red-900/30 rounded-lg flex items-start gap-2 text-[11px] text-zinc-400">
                  <Sparkles className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>
                    El pedido se enviará preformateado por WhatsApp directamente al maestro asador de <strong>El Mónaco</strong> para confirmación inmediata.
                  </span>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-zinc-950 border-t border-zinc-800/80 flex items-center justify-between gap-3">
          {cartItems.length > 0 ? (
            <>
              <button
                onClick={onClear}
                className="text-xs text-zinc-500 hover:text-red-400 transition-colors"
              >
                Vaciar lista
              </button>

              <button
                onClick={handleSendWhatsApp}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-green-950/50 hover:scale-[1.02] cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Pedir por WhatsApp</span>
              </button>
            </>
          ) : (
            <button
              onClick={onClose}
              className="w-full py-2.5 rounded-xl bg-zinc-800 text-zinc-300 text-xs font-semibold hover:bg-zinc-700 transition-colors"
            >
              Cerrar y continuar viendo el menú
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
