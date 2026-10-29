import { business } from '../data/menuData';
import FireCanvas from './FireCanvas';

export default function Barril() {
  return (
    <section id="barril" className="relative scroll-mt-16 overflow-hidden bg-ink py-28 lg:py-36">
      {/* Brasas y fuego suave en el fondo de la sección */}
      <FireCanvas intensity={0.75} />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-12 lg:gap-20 lg:px-10">
        <div className="lg:col-span-7">
          <div className="relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden bg-plate p-6 sm:p-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ember/15 via-transparent to-transparent"
            />
            <img
              src="/images/chicharron-barril.webp"
              alt="Chicharrón al barril"
              loading="lazy"
              className="plate-shadow relative z-10 max-h-full max-w-full object-contain"
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
