import { useEffect, useState } from 'react';
import { sections, categories, dishes, business } from '../data/menuData';

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
      className={`cursor-pointer whitespace-nowrap text-[0.68rem] uppercase tracking-[0.2em] transition-colors ${
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

function Card({ d, added, onAdd, onOpen }) {
  return (
    <article className="group">
      <button
        onClick={() => onOpen(d)}
        className="relative flex aspect-[4/3] w-full cursor-pointer items-center justify-center overflow-hidden bg-plate p-6"
        aria-label={`Ver ${d.name}`}
      >
        <img
          src={d.image}
          alt={d.name}
          loading="lazy"
          className="plate-shadow max-h-full max-w-full object-contain transition-transform duration-700 group-hover:scale-[1.05]"
        />
      </button>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h4 className="display text-[1.6rem] leading-tight">{d.name}</h4>
          <p className="mt-1 text-[0.78rem] text-ash">{d.en}</p>
        </div>
        <AddButton added={added} onClick={() => onAdd(d)} className="mt-2" />
      </div>
      {d.description && (
        <p className="mt-3 text-[0.85rem] leading-relaxed text-ash">{d.description}</p>
      )}
    </article>
  );
}

function Row({ d, added, onAdd }) {
  return (
    <li className="flex items-start justify-between gap-6 border-b hairline py-5">
      <div className="max-w-xl">
        <h4 className="display text-[1.45rem] leading-tight">{d.name}</h4>
        <p className="mt-1 text-[0.78rem] text-ash">{d.en}</p>
        {d.description && <p className="mt-3 text-[0.85rem] leading-relaxed text-ash">{d.description}</p>}
      </div>
      <AddButton added={added} onClick={() => onAdd(d)} className="mt-2" />
    </li>
  );
}

function Group({ cat, cart, onAdd, onOpen, solo }) {
  const list = dishes.filter((d) => d.category === cat.id);
  const withImg = list.filter((d) => d.image);
  const plain = list.filter((d) => !d.image);
  const inCart = (id) => cart.some((c) => c.id === id);
  const cols = cat.id === 'especiales' ? 'sm:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-3';

  return (
    <div className="mt-16 first:mt-10">
      {!solo && (<div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-1 border-b hairline pb-4">
        <div className="flex items-baseline gap-4">
          <h3 className="display text-3xl sm:text-4xl">{cat.name}</h3>
          <span className="display hidden text-lg italic text-ash sm:inline">{cat.en}</span>
        </div>
        <p className="text-[0.78rem] text-ash">{cat.note}</p>
      </div>)}

      {withImg.length > 0 && (
        <div className={`mt-10 grid gap-x-8 gap-y-14 ${cols}`}>
          {withImg.map((d) => (
            <Card key={d.id} d={d} added={inCart(d.id)} onAdd={onAdd} onOpen={onOpen} />
          ))}
        </div>
      )}

      {plain.length > 0 && (
        <ul className={`grid gap-x-12 border-t hairline md:grid-cols-2 ${withImg.length ? 'mt-14' : 'mt-0 border-t-0'}`}>
          {plain.map((d) => (
            <Row key={d.id} d={d} added={inCart(d.id)} onAdd={onAdd} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default function Menu({ cart, onAdd, onOpen }) {
  const [active, setActive] = useState(sections[0].id);

  useEffect(() => {
    const els = sections.map((s) => document.getElementById(`sec-${s.id}`)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        const vis = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (vis) setActive(vis.target.id.replace('sec-', ''));
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: [0, 0.1, 0.5] },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="menu" className="relative scroll-mt-16 bg-coal pt-28 lg:pt-36">
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
      </div>

      {/* Navegación fija del menú */}
      <div className="sticky top-20 z-30 mt-14 border-y hairline bg-coal/95 backdrop-blur">
        <div className="no-scrollbar mx-auto flex max-w-7xl gap-10 overflow-x-auto px-6 lg:px-10">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#sec-${s.id}`}
              className={`relative shrink-0 py-5 text-[0.72rem] uppercase tracking-[0.24em] transition-colors ${
                active === s.id ? 'text-bone' : 'text-ash hover:text-bone'
              }`}
            >
              {s.name}
              <span
                className={`absolute inset-x-0 -bottom-px h-px origin-left bg-ember transition-transform duration-300 ${
                  active === s.id ? 'scale-x-100' : 'scale-x-0'
                }`}
              />
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-28 lg:px-10 lg:pb-36">
        {sections.map((s, i) => (
          <div key={s.id} id={`sec-${s.id}`} className={`scroll-mt-44 ${i ? 'mt-28' : 'mt-20'}`}>
            <div className="flex items-baseline gap-5">
              <span className="text-[0.7rem] tracking-[0.3em] text-brass">0{i + 1}</span>
              <h2 className="display text-5xl sm:text-6xl">{s.name}</h2>
              <span className="display hidden text-2xl italic text-ash sm:inline">{s.en}</span>
            </div>
            {s.groups.map((g) => (
              <Group key={g} cat={categories.find((c) => c.id === g)} cart={cart} onAdd={onAdd} onOpen={onOpen} solo={s.groups.length === 1} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
