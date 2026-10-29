import React from 'react';
import { Flame, Utensils, MessageCircle, ChevronDown, CheckCircle, ShieldCheck } from 'lucide-react';
import { businessInfo } from '../data/menuData';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background with Dark Smoked Overlay & Hero Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/galeria-1.jpg"
          alt="Ahumados Al Barril El Mónaco"
          className="w-full h-full object-cover object-center filter brightness-[0.28] contrast-125 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0a0a] via-[#0b0a0a]/70 to-black/80" />
        <div className="absolute inset-0 bg-radial from-red-950/20 via-transparent to-black/90 pointer-events-none" />
      </div>

      {/* Floating Ambient Glowing Embers */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-red-600/10 blur-[130px] rounded-full pointer-events-none animate-flame" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Top Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/70 border border-red-500/40 text-red-300 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-6 shadow-lg shadow-red-950/50 backdrop-blur-sm">
          <Flame className="w-4 h-4 text-red-500 animate-pulse" />
          <span>Austin, Texas • Tradición 100% al Barril</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tight leading-[1.08] mb-4">
          Ahumados Al Barril
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-red-600 font-brand tracking-widest mt-1 text-glow">
            EL MÓNACO
          </span>
        </h1>

        {/* The Client Slogan / Manifesto */}
        <div className="max-w-3xl mx-auto mb-8">
          <p className="text-xl sm:text-2xl md:text-3xl font-light italic text-zinc-200 border-y border-red-900/40 py-3 sm:py-4 px-4 bg-black/40 backdrop-blur-sm">
            “{businessInfo.manifestoEs}”
          </p>
          <p className="text-xs sm:text-sm text-zinc-400 font-mono tracking-wider mt-2 uppercase">
            {businessInfo.manifestoEn}
          </p>
        </div>

        {/* Feature Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-zinc-300 mb-10">
          <div className="flex items-center gap-2 bg-zinc-900/80 px-3.5 py-1.5 rounded-full border border-zinc-800">
            <CheckCircle className="w-4 h-4 text-red-500" />
            <span>Chicharrón Ultra Crujiente</span>
          </div>
          <div className="flex items-center gap-2 bg-zinc-900/80 px-3.5 py-1.5 rounded-full border border-zinc-800">
            <CheckCircle className="w-4 h-4 text-red-500" />
            <span>Cortes Prémium al Carbón</span>
          </div>
          <div className="flex items-center gap-2 bg-zinc-900/80 px-3.5 py-1.5 rounded-full border border-zinc-800">
            <ShieldCheck className="w-4 h-4 text-red-500" />
            <span>Guacamole & Ají Casero Incluidos</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <a
            href="#menu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-heading text-lg font-bold uppercase tracking-wider transition-all shadow-xl shadow-red-900/50 hover:shadow-red-600/60 hover:-translate-y-0.5 cursor-pointer"
          >
            <Utensils className="w-5 h-5" />
            <span>Explorar Menú</span>
          </a>

          <a
            href={businessInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-white font-heading text-lg font-bold uppercase tracking-wider border border-red-900/60 hover:border-red-500/80 transition-all shadow-lg hover:-translate-y-0.5"
          >
            <MessageCircle className="w-5 h-5 text-green-500" />
            <span>Contactar / Pedidos</span>
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-14 sm:mt-16 flex flex-col items-center gap-2 text-zinc-500 hover:text-red-400 transition-colors">
          <span className="text-[11px] uppercase tracking-widest font-mono">Bajar al Menú</span>
          <a href="#menu" aria-label="Bajar al menú">
            <ChevronDown className="w-5 h-5 animate-bounce text-red-500" />
          </a>
        </div>
      </div>
    </section>
  );
}
