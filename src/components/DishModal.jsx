import { useEffect } from 'react';
import { X } from 'lucide-react';
import { business, categories } from '../data/menuData';

export default function DishModal({ dish, added, onClose, onAdd }) {
  useEffect(() => {
    if (!dish) return;
    const k = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', k);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', k);
      document.body.style.overflow = '';
    };
  }, [dish, onClose]);

  if (!dish) return null;
  const cat = categories.find((c) => c.id === dish.category);

  return (
    <div className="fade fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm" onClick={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative grid max-h-[92vh] w-full max-w-5xl overflow-y-auto bg-coal md:grid-cols-2"
      >
        <button onClick={onClose} aria-label="Cerrar" className="absolute right-4 top-4 z-10 cursor-pointer p-2 text-ash hover:text-bone">
          <X size={22} />
        </button>

        <div className="flex min-h-[18rem] items-center justify-center bg-plate p-10">
          <img src={dish.image} alt={`${dish.name} - ${dish.en}`} className="plate-shadow max-h-[26rem] w-full object-contain" />
        </div>

        <div className="flex flex-col justify-center p-8 sm:p-12">
          <p className="eyebrow">{cat?.name} · {cat?.en}</p>
          <h3 className="display mt-4 text-4xl leading-tight sm:text-5xl">{dish.name}</h3>
          <p className="display mt-2 text-2xl italic text-brass">{dish.en}</p>

          {(dish.description || dish.descriptionEn) && (
            <div className="mt-7 space-y-2">
              {dish.description && (
                <p className="text-[0.95rem] leading-relaxed text-bone/90">{dish.description}</p>
              )}
              {dish.descriptionEn && (
                <p className="text-[0.88rem] italic leading-relaxed text-ash">{dish.descriptionEn}</p>
              )}
            </div>
          )}

          <div className="mt-6 border-t hairline pt-5 space-y-1">
            <p className="text-[0.78rem] leading-relaxed text-bone/80">{business.included}</p>
            <p className="text-[0.74rem] italic leading-relaxed text-ash">{business.includedEn}</p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <button onClick={() => onAdd(dish)} className="btn btn-solid">
              {added ? 'En tu pedido / In order' : 'Agregar / Add to order'}
            </button>
            <button onClick={onClose} className="btn btn-line">Cerrar / Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}
