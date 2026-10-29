import { useMemo, useState } from 'react';
import { categories, dishes, business } from '../data/menuData';

function Check() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M2 7.5l3.2 3L12 3.5" />
    </svg>
  );
}

function AddButton({ added, onClick, className = '' }) {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer text-[0.68rem] uppercase tracking-[0.2em] transition-colors ${
        added ? 'text-brass' : 'text-bone hover:text-ember'
      } ${className}`}
    >
      {added ? (
        <span className="inline-flex items-center gap-2"><Check /> En tu pedido</span>
      ) : (
        '+ Agregar'
      )}
    </button>
  );
}

export default function Menu({ cart, onAdd, onOpen }) {
  const [active, setActive] = useState(categories[0].id);
  const cat = categories.find((c) => c.id === active);

  const { withImg, plain } = useMemo(() => {
    const list = dishes.filter((d) => d.category === active);
    return { withImg: list.filter((d) => d.image), plain: list.filter((d) => !d.image) };
  }, [active]);

  const inCart = (id) => cart.some((c) => c.id === id);

  return (
    <section id="menu" className="relative scroll-mt-16 bg-coal py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="eyebrow">La carta</p>
            <h2 className="display mt-5 text-5xl leading-[1.05] sm:text-6xl">
              Del barril
              <br />
              <em>a la mesa.</em>
            </h2>
          </div>
          <div className="flex items-end lg:col-span-7">
            <p className="max-w-lg text-[0.95rem] leading-relaxed text-ash">
              {business.included} Arma tu pedido y envíalo por WhatsApp para confirmar disponibilidad.
            </p>
          </div>
        </div>

        {/* Categorías */}
        <div className="no-scrollbar mt-16 -mx-6 flex gap-9 overflow-x-auto border-b hairline px-6 lg:mx-0 lg:px-0">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`relative shrink-0 cursor-pointer pb-5 text-[0.72rem] uppercase tracking-[0.22em] transition-colors ${
                active === c.id ? 'text-bone' : 'text-ash hover:text-bone'
              }`}
            >
              {c.name}
              <span
                className={`absolute inset-x-0 -bottom-px h-px bg-ember transition-transform duration-300 origin-left ${
                  active === c.id ? 'scale-x-100' : 'scale-x-0'
                }`}
              />
            </button>
          ))}
        </div>

        <div key={active} className="rise">
          <div className="mt-8 flex flex-wrap items-baseline justify-between gap-2">
            <p className="display text-2xl italic text-ash">{cat.en}</p>
            <p className="text-[0.8rem] text-ash">{cat.note}</p>
          </div>

          {/* Platos con foto */}
          {withImg.length > 0 && (
            <div className="mt-10 grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
              {withImg.map((d) => (
                <article key={d.id} className="group">
                  <button
                    onClick={() => onOpen(d)}
                    className="relative flex aspect-[4/3] w-full cursor-pointer items-center justify-center overflow-hidden bg-plate p-6"
                    aria-label={`Ver ${d.name}`}
                  >
                    <img
                      src={d.image}
                      alt={d.name}
                      loading="lazy"
                      className="plate-shadow max-h-full max-w-full object-contain transition-transform duration-700 group-hover:scale-[1.06]"
                    />
                  </button>
                  <div className="mt-5 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="display text-[1.6rem] leading-tight">{d.name}</h3>
                      <p className="mt-1 text-[0.78rem] text-ash">{d.en}</p>
                    </div>
                    <AddButton added={inCart(d.id)} onClick={() => onAdd(d)} className="mt-2 shrink-0" />
                  </div>
                  {d.description && (
                    <p className="mt-3 line-clamp-3 text-[0.85rem] leading-relaxed text-ash">{d.description}</p>
                  )}
                </article>
              ))}
            </div>
          )}

          {/* Platos sin foto: lista */}
          {plain.length > 0 && (
            <ul className={`border-t hairline ${withImg.length ? 'mt-16' : 'mt-10'}`}>
              {plain.map((d) => (
                <li key={d.id} className="flex items-start justify-between gap-6 border-b hairline py-6">
                  <div className="max-w-2xl">
                    <h3 className="display text-[1.5rem] leading-tight">{d.name}</h3>
                    <p className="mt-1 text-[0.78rem] text-ash">{d.en}</p>
                    {d.description && (
                      <p className="mt-3 text-[0.85rem] leading-relaxed text-ash">{d.description}</p>
                    )}
                  </div>
                  <AddButton added={inCart(d.id)} onClick={() => onAdd(d)} className="mt-2 shrink-0" />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
