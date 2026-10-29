import React, { useState, useMemo } from 'react';
import {
  Flame,
  Award,
  Utensils,
  Users,
  Sparkles,
  PlusCircle,
  Check,
  Search,
  Eye,
  Plus,
  Info,
  ShieldCheck,
} from 'lucide-react';
import { menuCategories, menuItems, businessInfo } from '../data/menuData';

const iconMap = {
  Flame,
  Award,
  Utensils,
  Users,
  Sparkles,
  PlusCircle,
};

export default function InteractiveMenu({ onAddToCart, onItemSelect, cartItems }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        (item.titleEn && item.titleEn.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="menu" className="py-20 bg-[#0e0c0c] relative">
      {/* Subtle border separator */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-red-900/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-950/60 border border-red-800/40 text-red-400 text-xs font-bold tracking-widest uppercase mb-3">
            <Flame className="w-3.5 h-3.5" />
            <span>Carta Digital Interactiva</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mb-4">
            Nuestro Menú al Barril
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Elige tus platillos favoritos para armar tu cotización o encargo directo vía WhatsApp. Cada plato es elaborado artesanalmente al fuego directo de carbón.
          </p>

          {/* Included sauces notice banner */}
          <div className="mt-5 p-3 sm:p-4 rounded-xl bg-gradient-to-r from-zinc-900 via-red-950/30 to-zinc-900 border border-red-900/40 flex items-center justify-center gap-3 text-xs sm:text-sm text-zinc-300">
            <ShieldCheck className="w-5 h-5 text-red-500 shrink-0" />
            <span>
              <strong>Garantía de sabor:</strong> {businessInfo.includeNote}
            </span>
          </div>
        </div>

        {/* Search & Categories Bar */}
        <div className="mb-10 space-y-4">
          {/* Search Input */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-5 h-5 text-zinc-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar platillo (ej. Chicharrón, Ribeye, Moro)..."
              className="w-full pl-12 pr-4 py-3 bg-zinc-900/90 border border-zinc-800 focus:border-red-600 rounded-xl text-white placeholder-zinc-500 text-sm outline-none transition-colors shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-white px-2 py-1 bg-zinc-800 rounded"
              >
                Limpiar
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {menuCategories.map((cat) => {
              const Icon = iconMap[cat.icon] || Flame;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-red-600 text-white shadow-lg shadow-red-900/50 scale-105'
                      : 'bg-zinc-900/90 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-red-500'}`} />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-zinc-400 mb-6 px-1">
          <span>Mostrando {filteredItems.length} platillos</span>
          <span className="text-zinc-500">Haz clic en un platillo para ver detalle o agrégalo a tu pedido</span>
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => {
            const inCart = cartItems?.some((c) => c.id === item.id);
            return (
              <div
                key={item.id}
                className="group relative rounded-2xl bg-[#141212] border border-zinc-800/80 hover:border-red-600/70 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-red-950/40 hover:-translate-y-1"
              >
                {/* Image Section: Modern Dark Ambient Frame */}
                <div
                  className="relative h-60 w-full overflow-hidden bg-gradient-to-b from-zinc-900/90 to-[#141212] flex items-center justify-center p-4 cursor-pointer"
                  onClick={() => onItemSelect(item)}
                >
                  {/* Subtle red spotlight behind transparent dish */}
                  <div className="absolute inset-0 bg-radial from-red-600/10 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.85)] group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Badge */}
                  {item.badge && (
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-red-600/95 backdrop-blur-sm text-white text-[11px] font-bold tracking-wider uppercase shadow-md">
                      {item.badge}
                    </span>
                  )}

                  {/* Quick View Button */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onItemSelect(item);
                      }}
                      className="p-2 rounded-full bg-black/70 hover:bg-red-600 text-white backdrop-blur-sm transition-colors cursor-pointer"
                      title="Ver foto en grande y detalles"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Title */}
                    <h3
                      onClick={() => onItemSelect(item)}
                      className="text-lg sm:text-xl font-heading font-bold text-white group-hover:text-red-400 transition-colors cursor-pointer"
                    >
                      {item.title}
                    </h3>
                    {item.titleEn && (
                      <p className="text-xs text-zinc-400 italic font-mono mb-2">
                        {item.titleEn}
                      </p>
                    )}

                    {/* Description */}
                    <p className="text-zinc-300 text-xs sm:text-sm line-clamp-3 leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Highlights Tags */}
                    {item.highlights && item.highlights.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {item.highlights.map((h, i) => (
                          <span
                            key={i}
                            className="text-[10px] font-medium bg-zinc-900 border border-zinc-800 text-zinc-300 px-2 py-0.5 rounded"
                          >
                            ✓ {h}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Action Footer */}
                  <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between gap-3">
                    <button
                      onClick={() => onItemSelect(item)}
                      className="text-xs font-medium text-zinc-400 hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <Info className="w-3.5 h-3.5 text-red-500" />
                      <span>Más detalles</span>
                    </button>

                    <button
                      onClick={() => onAddToCart(item)}
                      className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                        inCart
                          ? 'bg-zinc-800 border border-green-500/50 text-green-400 hover:bg-zinc-700'
                          : 'bg-red-600 hover:bg-red-500 text-white shadow-md shadow-red-900/30'
                      }`}
                    >
                      {inCart ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-green-400" />
                          <span>Agregado</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>Agregar a Pedido</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-zinc-900/30 rounded-2xl border border-dashed border-zinc-800">
            <Utensils className="w-12 h-12 text-zinc-600 mx-auto mb-3" />
            <h4 className="text-lg font-bold text-zinc-300">No encontramos ningún platillo</h4>
            <p className="text-zinc-500 text-sm mt-1">Prueba con otra palabra o revisa todas las categorías.</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 bg-red-600 text-white text-xs font-bold rounded-lg uppercase"
            >
              Ver todo el menú
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
