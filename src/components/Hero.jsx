import { business, waLink } from '../data/menuData';
import FireCanvas from './FireCanvas';

export default function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-[min(100svh,920px)] items-end overflow-hidden">
      <img
        src="/images/hero.jpg"
        alt="Bandeja de carnes ahumadas al barril"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/30 to-transparent" />

      {/* Animación de llamas y brasas al barril */}
      <FireCanvas intensity={1.15} />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-40 lg:px-10 lg:pb-24">
        <p className="eyebrow rise">Austin, Texas · 100% al barril</p>
        <h1
          className="display rise mt-6 max-w-4xl text-[2.9rem] leading-[1.02] sm:text-7xl lg:text-[6.5rem]"
          style={{ animationDelay: '0.1s' }}
        >
          Se domina
          <br />
          <em className="ember-word text-bone/95">el fuego.</em>
        </h1>
        <p
          className="rise mt-8 max-w-md text-[0.95rem] leading-relaxed text-ash"
          style={{ animationDelay: '0.2s' }}
        >
          {business.quoteEs} Comida ahumada y asada, cocinada al barril.
        </p>

        <div className="rise mt-10 flex flex-wrap gap-4" style={{ animationDelay: '0.3s' }}>
          <a href="#menu" className="btn btn-solid">Ver el menú</a>
          <a href={waLink()} target="_blank" rel="noreferrer" className="btn btn-line">
            Pedir por WhatsApp
          </a>
        </div>

        <div className="mt-16 flex flex-wrap items-center gap-x-10 gap-y-3 border-t hairline pt-6 text-[0.72rem] uppercase tracking-[0.2em] text-ash">
          <span>{business.city}</span>
          <a href={`tel:${business.phoneRaw}`} className="transition-colors hover:text-bone">
            {business.phone}
          </a>
          <span className="hidden sm:inline">Ahumados al barril</span>
        </div>
      </div>
    </section>
  );
}
