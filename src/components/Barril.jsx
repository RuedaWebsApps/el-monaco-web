import { business } from '../data/menuData';

export default function Barril() {
  return (
    <section id="barril" className="scroll-mt-16 bg-ink py-28 lg:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-12 lg:gap-20 lg:px-10">
        <div className="lg:col-span-7">
          <div className="flex aspect-[16/10] w-full items-center justify-center bg-plate p-8 sm:p-12">
            <img
              src="/images/chicharron-barril.webp"
              alt="Chicharrón al barril"
              loading="lazy"
              className="plate-shadow max-h-full max-w-full object-contain"
            />
          </div>
        </div>

        <div className="lg:col-span-5">
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
