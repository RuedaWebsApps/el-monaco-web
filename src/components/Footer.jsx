import React from 'react';
import { Flame, Heart, Phone, Mail, MapPin } from 'lucide-react';
import { businessInfo } from '../data/menuData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-zinc-900 text-zinc-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-red-600 flex items-center justify-center text-white">
                <Flame className="w-5 h-5 animate-pulse" />
              </div>
              <span className="font-heading text-lg font-black tracking-wider text-white uppercase">
                {businessInfo.name}
              </span>
            </div>
            <p className="text-zinc-400 text-xs max-w-md leading-relaxed">
              Especialistas en la auténtica técnica de asado y ahumado 100% al barril con carbón vegetal en Austin, Texas. Carnes tiernas, jugosas y chicharrones con piel ultra crocante.
            </p>
            <p className="text-xs text-red-500 italic font-mono">
              “{businessInfo.manifestoEs}”
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#inicio" className="hover:text-red-400 transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-red-400 transition-colors">
                  Menú al Barril
                </a>
              </li>
              <li>
                <a href="#tecnica" className="hover:text-red-400 transition-colors">
                  Nuestra Técnica
                </a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-red-400 transition-colors">
                  Galería de Fotos
                </a>
              </li>
              <li>
                <a href="#testimonios" className="hover:text-red-400 transition-colors">
                  Testimonios
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-red-400 transition-colors">
                  Contacto y Pedidos
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
              Contacto Directo
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-red-500" />
                <a href={`tel:${businessInfo.phoneRaw}`} className="hover:text-white">
                  {businessInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-red-500" />
                <a href={`mailto:${businessInfo.email}`} className="hover:text-white truncate">
                  {businessInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-red-500" />
                <span>{businessInfo.city}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>
            © {currentYear} {businessInfo.name}. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-2">
            <span>Diseñado con pasión para</span>
            <span className="text-white font-semibold">El Mónaco</span>
            <span>• Austin, TX</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
