import React, { useState } from 'react';
import { Camera, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { galleryImages } from '../data/menuData';

export default function GallerySection() {
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  const openLightbox = (index) => {
    setActiveImageIndex(index);
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section id="galeria" className="py-20 bg-[#0e0c0c] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-950/60 border border-red-800/40 text-red-400 text-xs font-bold tracking-widest uppercase mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Galería Fotográfica Real</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mb-4">
            Directo del Barril a tu Mesa
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Fotografías 100% reales de nuestros asados, cortes y bandejas preparadas para nuestros clientes en Austin.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              onClick={() => openLightbox(idx)}
              className="group relative h-48 sm:h-64 rounded-xl overflow-hidden bg-zinc-950 border border-zinc-800 hover:border-red-600/70 cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-red-950/30"
            >
              <img
                src={img.src}
                alt={img.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                <span className="text-xs font-bold text-white uppercase tracking-wide">
                  {img.title}
                </span>
                <span className="text-[11px] text-zinc-300 line-clamp-1">
                  {img.desc}
                </span>
                <div className="absolute top-3 right-3 p-1.5 rounded-full bg-black/60 text-white">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeImageIndex !== null && (
          <div
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          >
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 z-20 p-3 rounded-full bg-zinc-900/80 text-white hover:bg-red-600 transition-colors cursor-pointer"
              aria-label="Cerrar visor"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Button */}
            <button
              onClick={prevImage}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-zinc-900/80 text-white hover:bg-red-600 transition-colors z-20 cursor-pointer"
              aria-label="Imagen anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={nextImage}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-zinc-900/80 text-white hover:bg-red-600 transition-colors z-20 cursor-pointer"
              aria-label="Siguiente imagen"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image Container */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center justify-center"
            >
              <img
                src={galleryImages[activeImageIndex].src}
                alt={galleryImages[activeImageIndex].title}
                className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl border border-zinc-800"
              />
              <div className="text-center mt-4">
                <h4 className="text-base sm:text-lg font-bold text-white uppercase tracking-wide">
                  {galleryImages[activeImageIndex].title}
                </h4>
                <p className="text-xs sm:text-sm text-zinc-400">
                  {galleryImages[activeImageIndex].desc}
                </p>
                <span className="text-[11px] text-zinc-500 font-mono mt-1 block">
                  Foto {activeImageIndex + 1} de {galleryImages.length}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
