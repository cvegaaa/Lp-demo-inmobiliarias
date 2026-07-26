import { ArrowRight } from 'lucide-react';

export default function FeaturedStrip() {
  return (
    <section className="bg-cream-100 py-16 border-y border-ink-900/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <p className="font-serif text-2xl md:text-3xl text-ink-900 max-w-xl leading-snug">
          Cada propiedad de nuestro catálogo ha sido visitada y seleccionada por
          nuestro equipo. Ninguna está aquí por casualidad.
        </p>
        <a
          href="#propiedades"
          className="group inline-flex items-center gap-2 text-sm tracking-wide text-clay-600 hover:text-clay-700 transition-colors whitespace-nowrap"
        >
          Ver el catálogo completo
          <ArrowRight
            size={16}
            className="group-hover:translate-x-1 transition-transform"
          />
        </a>
      </div>
    </section>
  );
}
