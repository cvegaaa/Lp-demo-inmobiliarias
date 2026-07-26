import { useEffect } from 'react';
import type { Property } from '@/types';
import { formatPrice } from '@/types';
import { Bed, Bath, Maximize, MapPin, X, Check } from 'lucide-react';

export default function PropertyModal({
  property,
  onClose,
}: {
  property: Property;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const gallery = [property.image_url, ...property.gallery].slice(0, 4);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end md:items-center justify-center p-0 md:p-6 bg-ink-900/60 backdrop-blur-sm animate-fade-up"
      style={{ animationDuration: '0.3s' }}
      onClick={onClose}
    >
      <div
        className="relative bg-cream-50 w-full max-w-4xl max-h-[92vh] rounded-t-3xl md:rounded-3xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-cream-50/90 backdrop-blur flex items-center justify-center text-ink-900 hover:bg-clay-500 hover:text-cream-50 transition-all"
          aria-label="Cerrar"
        >
          <X size={18} />
        </button>

        <div className="overflow-y-auto no-scrollbar">
          <div className="grid grid-cols-2 gap-1.5 p-1.5">
            {gallery.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`${property.title} ${i + 1}`}
                className={`w-full object-cover ${
                  i === 0 ? 'col-span-2 h-64 md:h-80' : 'h-40 md:h-52'
                }`}
              />
            ))}
          </div>

          <div className="p-7 md:p-10">
            <div className="flex items-center gap-2 text-xs tracking-widest2 uppercase text-clay-500 mb-3">
              <MapPin size={13} /> {property.location}
            </div>
            <h3 className="font-serif text-3xl md:text-4xl text-ink-900 leading-tight">
              {property.title}
            </h3>
            <p className="mt-3 text-clay-600 font-medium text-lg">
              {formatPrice(property.price, property.status)}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-6 text-ink-700">
              <span className="flex items-center gap-2">
                <Bed size={17} className="text-clay-500" /> {property.bedrooms} dorm.
              </span>
              <span className="flex items-center gap-2">
                <Bath size={17} className="text-clay-500" /> {property.bathrooms} baños
              </span>
              <span className="flex items-center gap-2">
                <Maximize size={17} className="text-clay-500" /> {property.area_sqm} m²
              </span>
              <span className="text-ink-500 text-sm">·</span>
              <span className="text-sm text-ink-700">{property.property_type}</span>
            </div>

            <p className="mt-6 text-ink-700 leading-relaxed text-[15px]">
              {property.description}
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Asesoramiento personalizado',
                'Visita privada sin compromiso',
                'Gestión de financiación',
                'Acompañamiento legal',
              ].map((f) => (
                <div
                  key={f}
                  className="flex items-center gap-2 text-sm text-ink-700"
                >
                  <Check size={16} className="text-sage-600" /> {f}
                </div>
              ))}
            </div>

            <a
              href={`#contacto`}
              onClick={onClose}
              className="mt-8 inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-ink-900 text-cream-50 rounded-full text-sm tracking-wide hover:bg-clay-500 transition-all"
            >
              Solicitar información sobre esta propiedad
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
