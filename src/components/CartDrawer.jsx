import { useState } from 'react';
import { X, Minus, Plus } from 'lucide-react';
import { waLink } from '../data/menuData';

export default function CartDrawer({ open, items, onClose, onQty, onClear }) {
  const [name, setName] = useState('');
  const [notes, setNotes] = useState('');
  if (!open) return null;

  const send = () => {
    const lines = items.map((i) => `• ${i.name} x${i.qty}`).join('\n');
    const text =
      `Hola El Mónaco, quisiera hacer un pedido.\n\n${name ? `Nombre: ${name}\n\n` : ''}${lines}` +
      `${notes ? `\n\nNotas: ${notes}` : ''}\n\n¿Me confirman disponibilidad? Gracias.`;
    window.open(waLink(text), '_blank');
  };

  return (
    <div className="fade fixed inset-0 z-50 bg-ink/80 backdrop-blur-sm" onClick={onClose}>
      <aside
        onClick={(e) => e.stopPropagation()}
        className="slide-in absolute right-0 top-0 flex h-full w-full max-w-md flex-col border-l hairline bg-coal"
      >
        <div className="flex items-center justify-between border-b hairline px-7 py-6">
          <div>
            <p className="eyebrow">Tu selección</p>
            <h3 className="display mt-1 text-3xl">Mi pedido</h3>
          </div>
          <button onClick={onClose} aria-label="Cerrar" className="cursor-pointer text-ash hover:text-bone">
            <X size={22} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-7">
          {items.length === 0 ? (
            <p className="py-16 text-center text-[0.9rem] text-ash">
              Aún no has agregado platos. Explora la carta y elige lo que se te antoje.
            </p>
          ) : (
            <>
              <ul>
                {items.map((i) => (
                  <li key={i.id} className="flex items-center gap-4 border-b hairline py-5">
                    {i.image ? (
                      <img src={i.image} alt="" className="h-14 w-16 shrink-0 bg-plate object-contain p-1" />
                    ) : (
                      <div className="h-14 w-16 shrink-0 bg-plate" />
                    )}
                    <div className="min-w-0 flex-1">
                      <p className="display truncate text-xl leading-tight">{i.name}</p>
                    </div>
                    <div className="flex items-center gap-3 text-ash">
                      <button onClick={() => onQty(i.id, i.qty - 1)} className="cursor-pointer hover:text-bone" aria-label="Menos"><Minus size={14} /></button>
                      <span className="w-4 text-center text-sm text-bone">{i.qty}</span>
                      <button onClick={() => onQty(i.id, i.qty + 1)} className="cursor-pointer hover:text-bone" aria-label="Más"><Plus size={14} /></button>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="space-y-6 py-8">
                <input className="field" placeholder="Tu nombre" value={name} onChange={(e) => setName(e.target.value)} />
                <textarea
                  className="field resize-none"
                  rows={3}
                  placeholder="Notas: papa o yuca, hora, personas…"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </div>
            </>
          )}
        </div>

        <div className="flex items-center justify-between gap-4 border-t hairline px-7 py-6">
          {items.length > 0 ? (
            <>
              <button onClick={onClear} className="cursor-pointer text-[0.68rem] uppercase tracking-[0.2em] text-ash hover:text-bone">
                Vaciar
              </button>
              <button onClick={send} className="btn btn-solid">Enviar por WhatsApp</button>
            </>
          ) : (
            <button onClick={onClose} className="btn btn-line w-full">Ver la carta</button>
          )}
        </div>
      </aside>
    </div>
  );
}
