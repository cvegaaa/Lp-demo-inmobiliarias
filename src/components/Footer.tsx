import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-cream-100/70 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-cream-100/10">
          <div className="md:col-span-2">
            <div className="flex items-baseline gap-2 mb-4">
              <span className="font-serif text-2xl text-cream-50">Maison</span>
              <span className="text-[10px] tracking-widest2 uppercase text-clay-400">
                Boutique
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-sm">
              Inmobiliaria boutique especializada en residencias con carácter en
              la costa, la ciudad y el campo. Un trato cercano, una selección
              reducida.
            </p>
          </div>
          <div>
            <h4 className="text-cream-50 text-sm mb-4 tracking-wide">Explorar</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#propiedades" className="hover:text-clay-400 transition-colors">Propiedades</a></li>
              <li><a href="#servicios" className="hover:text-clay-400 transition-colors">Servicios</a></li>
              <li><a href="#nosotros" className="hover:text-clay-400 transition-colors">Nosotros</a></li>
              <li><a href="#contacto" className="hover:text-clay-400 transition-colors">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-cream-50 text-sm mb-4 tracking-wide">Síguenos</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-cream-100/20 flex items-center justify-center hover:bg-clay-500 hover:border-clay-500 transition-all"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-cream-100/20 flex items-center justify-center hover:bg-clay-500 hover:border-clay-500 transition-all"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 flex flex-col md:flex-row justify-between gap-4 text-xs text-cream-100/50">
          <p>© {new Date().getFullYear()} Maison Boutique. Todos los derechos reservados.</p>
          <p>Diseñado con cuidado para quienes buscan un lugar, no una casa.</p>
        </div>
      </div>
    </footer>
  );
}
