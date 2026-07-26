import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '#propiedades', label: 'Propiedades' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream-50/90 backdrop-blur-md border-b border-ink-900/10 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#inicio" className="flex items-baseline gap-2 group">
          <span className="font-serif text-2xl tracking-wide text-ink-900">
            Maison
          </span>
          <span className="text-[10px] tracking-widest2 uppercase text-clay-500">
            Boutique
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm tracking-wide text-ink-700 hover:text-clay-600 transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-clay-500 hover:after:w-full after:transition-all after:duration-300"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacto"
          className="hidden md:inline-block text-sm tracking-wide px-5 py-2.5 border border-ink-900/30 rounded-full text-ink-900 hover:bg-ink-900 hover:text-cream-50 transition-all duration-300"
        >
          Agendar visita
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-ink-900"
          aria-label="Menú"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          open ? 'max-h-80 mt-4' : 'max-h-0'
        }`}
      >
        <nav className="px-6 flex flex-col gap-4 pb-6 bg-cream-50/95 backdrop-blur-md">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm tracking-wide text-ink-700 hover:text-clay-600 transition-colors py-1"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="text-sm tracking-wide px-5 py-2.5 border border-ink-900/30 rounded-full text-center text-ink-900 hover:bg-ink-900 hover:text-cream-50 transition-all"
          >
            Agendar visita
          </a>
        </nav>
      </div>
    </header>
  );
}
