import { ArrowDown, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=2000"
          alt="Residencia frente al mar"
          className="w-full h-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-ink-900/30 to-ink-900/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 md:pb-28 w-full">
        <div className="max-w-3xl animate-fade-up">
          <p className="flex items-center gap-2 text-cream-100/90 text-xs tracking-widest2 uppercase mb-6">
            <span className="h-px w-10 bg-clay-400" />
            Inmobiliaria boutique · Desde 2009
          </p>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] text-cream-50 text-balance">
            Residencias excepcionales para quienes buscan
            <span className="italic text-clay-400"> un lugar, no una casa.</span>
          </h1>
          <p className="mt-7 text-cream-100/85 text-lg leading-relaxed max-w-xl">
            Curamos una selección reducida de propiedades con carácter en la
            costa, la ciudad y el campo. Cada una, elegida a mano.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#propiedades"
              className="group inline-flex items-center gap-3 px-7 py-4 bg-cream-50 text-ink-900 rounded-full text-sm tracking-wide hover:bg-clay-400 hover:text-cream-50 transition-all duration-300"
            >
              Ver propiedades
              <ArrowDown
                size={16}
                className="group-hover:translate-y-0.5 transition-transform"
              />
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-7 py-4 border border-cream-50/40 text-cream-50 rounded-full text-sm tracking-wide hover:bg-cream-50/10 transition-all"
            >
              Hablar con un asesor
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-10 gap-y-3 text-cream-100/80 text-sm">
            <span className="flex items-center gap-2">
              <MapPin size={14} className="text-clay-400" /> Costa del Sol
            </span>
            <span className="flex items-center gap-2">
              <MapPin size={14} className="text-clay-400" /> Mallorca
            </span>
            <span className="flex items-center gap-2">
              <MapPin size={14} className="text-clay-400" /> Madrid · Barcelona
            </span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 z-10 hidden md:flex items-center gap-3 text-cream-100/70 text-xs tracking-widest2 uppercase rotate-90 origin-bottom-right">
        <span className="h-px w-12 bg-cream-100/40" />
        Desliza
      </div>
    </section>
  );
}
