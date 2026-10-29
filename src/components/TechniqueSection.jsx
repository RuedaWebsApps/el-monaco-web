import React from 'react';
import { Flame, Clock, Award, ShieldCheck, HeartHandshake, Sparkles } from 'lucide-react';
import { businessInfo } from '../data/menuData';

export default function TechniqueSection() {
  const steps = [
    {
      num: "01",
      title: "El Fuego & Carbón",
      desc: "No usamos gas ni electricidad. Encendemos carbón vegetal seleccionado en el fondo del barril para generar una brasa constante y pura.",
      icon: Flame,
    },
    {
      num: "02",
      title: "Cocción Indirecta 360°",
      desc: "Las carnes se suspenden verticalmente en ganchos de acero dentro del cilindro. El calor envolvente circula uniformemente sin quemar la superficie.",
      icon: Clock,
    },
    {
      num: "03",
      title: "El Cuerito Cristalino",
      desc: "La grasa cae sobre el difusor inferior, evaporando jugos y ahumando la pieza de forma continua hasta lograr un chicharrón crujiente que truena al corte.",
      icon: Award,
    },
    {
      num: "04",
      title: "Salsas y Guarnición Fresca",
      desc: "Cada orden sale acompañada de guacamole fresco preparado a diario, ají ahumado artesanal y papas o yucas al vapor recién salidas.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="tecnica" className="py-20 bg-[#0b0a0a] relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-950/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-950/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Story & Philosophy */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-950/60 border border-red-800/40 text-red-400 text-xs font-bold tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Maestría en Ahumados</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight leading-tight">
              En El Mónaco no se prende una parrilla...
              <span className="block text-red-500 font-brand">se domina el fuego</span>
            </h2>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              La técnica del barril de acero es un arte ancestral perfeccionado. A diferencia de una parrilla convencional donde la llama directa arrebata la carne, nuestro barril crea un horno de convección cilíndrico donde el calor viaja en espiral.
            </p>

            <p className="text-zinc-400 text-sm leading-relaxed">
              El resultado es una carne que retiene el 100% de sus jugos internos mientras desarrolla una costra dorada inconfundible y un sutil aroma a humo que deleita desde el primer bocado.
            </p>

            {/* Quote client badge */}
            <div className="p-4 rounded-2xl bg-zinc-900/80 border-l-4 border-red-600 border-zinc-800 space-y-1">
              <p className="text-xs uppercase tracking-wider text-zinc-400 font-semibold">
                Compromiso de El Mónaco
              </p>
              <p className="text-sm italic text-zinc-200">
                “Servir comida ahumada y asada con orgullo artesanal para deleitar a cada familia y evento en Austin.”
              </p>
            </div>
          </div>

          {/* Right Column: 4 Technique Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {steps.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-red-600/50 transition-all hover:bg-zinc-900/90 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black font-mono text-zinc-700 group-hover:text-red-500 transition-colors">
                      {s.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-red-950/50 border border-red-900/40 flex items-center justify-center text-red-400 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-base sm:text-lg font-heading font-bold text-white mb-2 uppercase tracking-wide">
                    {s.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
