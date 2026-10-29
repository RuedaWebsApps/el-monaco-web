import { business } from '../data/menuData';

export default function Barril() {
  return (
    <section id="barril" className="scroll-mt-16 bg-ink py-28 lg:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-12 lg:gap-20 lg:px-10">
        <div className="relative lg:col-span-6">
          <img
            src="/images/barril.jpg"
            alt="Chicharrón recién salido del barril"
            loading="lazy"
            className="aspect-[4/3] w-full object-cover"
          />
          <div className="pointer-events-none absolute -bottom-4 -right-4 hidden h-full w-full border border-brass/30 lg:block" />
        </div>

        <div className="lg:col-span-6 lg:pl-6">
          <p className="eyebrow">El Barril</p>
          <blockquote className="display mt-6 text-4xl leading-[1.12] sm:text-5xl">
            “{business.quoteEs}”
          </blockquote>
          <p className="display mt-6 text-xl italic text-ash">{business.quoteEn}</p>
          <p className="mt-10 max-w-md text-[0.95rem] leading-relaxed text-ash">
            Comida ahumada y asada, 100% al barril. Chicharrón crujiente, cortes premium y bandejas para compartir, siempre con las salsas de la casa, guacamole y ají ahumado.
          </p>
          <a href="#menu" className="btn btn-line mt-10">Explorar la carta</a>
        </div>
      </div>
    </section>
  );
}
