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
        '+ Agregar / Add'
      )}
    </button>
  );
}

function Card({ d, added, onAdd, onOpen }) {
  return (
    <article className="group flex flex-col">
      <button
        onClick={() => onOpen(d)}
        className="relative flex aspect-[4/3] w-full cursor-pointer items-center justify-center overflow-hidden bg-plate p-6"
        aria-label={`Ver ${d.name}`}
      >
        <img
          src={d.image}
          alt={`${d.name} - ${d.en}`}
          loading="lazy"
          className="plate-shadow max-h-full max-w-full object-contain transition-transform duration-700 group-hover:scale-[1.05]"
        />
      </button>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h4 className="display text-[1.6rem] leading-tight text-bone">{d.name}</h4>
          <p className="display mt-0.5 text-[1.1rem] italic text-brass">{d.en}</p>
        </div>
        <AddButton added={added} onClick={() => onAdd(d)} className="mt-1.5" />
      </div>
      {(d.description || d.descriptionEn) && (
        <div className="mt-3 space-y-1.5 border-t hairline pt-3">
          {d.description && (
            <p className="text-[0.84rem] leading-relaxed text-bone/85">{d.description}</p>
          )}
          {d.descriptionEn && (
            <p className="text-[0.78rem] italic leading-relaxed text-ash">{d.descriptionEn}</p>
          )}
        </div>
      )}
    </article>
  );
}

function Row({ d, added, onAdd }) {
  return (
    <li className="flex items-start justify-between gap-6 border-b hairline py-5">
      <div className="max-w-xl">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
          <h4 className="display text-[1.45rem] leading-tight text-bone">{d.name}</h4>
          <span className="display text-[1.05rem] italic text-brass">· {d.en}</span>
        </div>
        {d.description && (
          <p className="mt-2.5 text-[0.84rem] leading-relaxed text-bone/85">{d.description}</p>
        )}
        {d.descriptionEn && (
          <p className="mt-1 text-[0.78rem] italic leading-relaxed text-ash">{d.descriptionEn}</p>
        )}
      </div>
      <AddButton added={added} onClick={() => onAdd(d)} className="mt-1.5" />
    </li>
  );
}

function Group({ cat, cart, onAdd, onOpen, solo }) {
  const list = dishes.filter((d) => d.category === cat.id);
  const withImg = list.filter((d) => d.image);
  const plain = list.filter((d) => !d.image);
  const inCart = (id) => cart.some((c) => c.id === id);
  const cols =
    cat.id === 'acompanantes'
      ? 'sm:grid-cols-2 lg:grid-cols-4'
      : cat.id === 'especiales'
      ? 'sm:grid-cols-2 lg:grid-cols-4'
      : 'sm:grid-cols-2 lg:grid-cols-3';

  return (
    <div className="mt-16 first:mt-10">
      {!solo && (
        <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-2 border-b hairline pb-4">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <h3 className="display text-3xl sm:text-4xl">{cat.name}</h3>
            <span className="display text-xl italic text-brass">{cat.en}</span>
          </div>
          <p className="text-[0.76rem] text-ash">{cat.note}</p>
        </div>
      )}

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
            <p className="eyebrow">La Carta · Our Menu</p>
            <h2 className="display mt-5 text-5xl leading-[1.05] sm:text-6xl">
              Del barril
              <br />
              <em>a la mesa.</em>
            </h2>
          </div>
          <div className="flex flex-col justify-end space-y-2 lg:col-span-7">
            <p className="max-w-xl text-[0.95rem] leading-relaxed text-bone/90">
              {business.included}
            </p>
            <p className="max-w-xl text-[0.85rem] italic leading-relaxed text-ash">
              {business.includedEn}
            </p>
          </div>
        </div>
      </div>

      {/* Navegación fija bilingüe del menú */}
      <div className="sticky top-20 z-30 mt-14 border-y hairline bg-coal/95 backdrop-blur">
        <div className="no-scrollbar mx-auto flex max-w-7xl gap-10 overflow-x-auto px-6 lg:px-10">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#sec-${s.id}`}
              className={`relative shrink-0 py-5 text-[0.72rem] uppercase tracking-[0.22em] transition-colors ${
                active === s.id ? 'text-bone' : 'text-ash hover:text-bone'
              }`}
            >
              <span>{s.name}</span>
              <span className="ml-2 text-brass/80">/ {s.en}</span>
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
            <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1">
              <span className="text-[0.7rem] tracking-[0.3em] text-brass">0{i + 1}</span>
              <h2 className="display text-5xl sm:text-6xl">{s.name}</h2>
              <span className="display text-2xl italic text-brass sm:text-3xl">/ {s.en}</span>
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
