import React, { useState, useEffect } from 'react';
import { Flame, Phone, Menu, X, ShoppingBag } from 'lucide-react';
import { businessInfo } from '../data/menuData';

export default function Navbar({ cartCount, onOpenCart }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Menú Interactivo', href: '#menu' },
    { name: 'Nuestra Técnica', href: '#tecnica' },
    { name: 'Galería', href: '#galeria' },
    { name: 'Testimonios', href: '#testimonios' },
    { name: 'Contacto & Pedidos', href: '#contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-md border-b border-red-950/40 shadow-2xl py-3'
          : 'bg-gradient-to-b from-black/90 via-black/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-red-600 to-red-900 flex items-center justify-center shadow-lg shadow-red-900/40 border border-red-500/30 group-hover:scale-105 transition-transform">
              <Flame className="w-6 h-6 text-white animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-lg sm:text-xl font-bold tracking-wider text-white uppercase group-hover:text-red-400 transition-colors">
                EL MÓNACO
              </span>
              <span className="text-[10px] sm:text-xs text-red-500 font-semibold tracking-widest uppercase">
                100% Ahumados al Barril
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium tracking-wide text-zinc-300 hover:text-white hover:border-b-2 hover:border-red-500 transition-all py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions: Cart & Call / WhatsApp */}
          <div className="flex items-center gap-3">
            {/* Interactive Tray Button */}
            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-zinc-900/90 border border-red-600/40 hover:border-red-500 hover:bg-zinc-800 transition-all shadow-md group cursor-pointer"
              title="Ver platillos para cotizar"
            >
              <ShoppingBag className="w-4 h-4 text-red-500 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-semibold hidden sm:inline">Mi Pedido</span>
              {cartCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-red-600 text-white text-[11px] font-bold flex items-center justify-center animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Direct Order Button */}
            <a
              href={businessInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-red-900/40 hover:shadow-red-600/50 hover:scale-105"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Pedir Ahora</span>
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-zinc-400 hover:text-white rounded-lg focus:outline-none"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-zinc-950/98 border-b border-red-950/50 px-6 py-6 mt-3 shadow-2xl backdrop-blur-xl transition-all">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-zinc-200 hover:text-red-400 border-b border-zinc-900 pb-2 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <a
                href={businessInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-sm uppercase tracking-wider shadow-lg"
              >
                <Phone className="w-4 h-4" />
                Pedir por WhatsApp ({businessInfo.phone})
              </a>
              <div className="text-center text-xs text-zinc-400">
                📍 {businessInfo.city} • Domina el fuego
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
