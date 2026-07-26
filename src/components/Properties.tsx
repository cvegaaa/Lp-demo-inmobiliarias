import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import type { Property } from '@/types';
import { formatPrice } from '@/types';
import { Bed, Bath, Maximize, MapPin, Search, SlidersHorizontal } from 'lucide-react';
import PropertyModal from './PropertyModal';

const TYPES = ['Todos', 'Villa', 'Penthouse', 'Loft', 'Townhouse', 'Apartment'];
const STATUSES = ['Todos', 'For Sale', 'For Rent'];

export default function Properties() {
  const [items, setItems] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [type, setType] = useState('Todos');
  const [status, setStatus] = useState('Todos');
  const [query, setQuery] = useState('');
  const [active, setActive] = useState<Property | null>(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      let q = supabase
        .from('properties')
        .select('*')
        .order('featured', { ascending: false })
        .order('created_at', { ascending: false });
      if (type !== 'Todos') q = q.eq('property_type', type);
      if (status !== 'Todos') q = q.eq('status', status);
      const { data, error } = await q;
      if (error) {
        setError('No pudimos cargar las propiedades. Inténtalo de nuevo.');
        setItems([]);
      } else {
        setItems(data as Property[]);
        setError(null);
      }
      setLoading(false);
    })();
  }, [type, status]);

  const filtered = query
    ? items.filter(
        (p) =>
          p.title.toLowerCase().includes(query.toLowerCase()) ||
          p.location.toLowerCase().includes(query.toLowerCase())
      )
    : items;

  return (
    <section id="propiedades" className="py-24 md:py-32 bg-cream-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="flex items-center gap-2 text-xs tracking-widest2 uppercase text-clay-500 mb-4">
              <span className="h-px w-8 bg-clay-500" /> Catálogo
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink-900 max-w-xl leading-tight">
              Una colección breve, elegida con criterio.
            </h2>
          </div>
          <p className="text-ink-500 max-w-sm leading-relaxed">
            No mostramos cientos de viviendas. Mostramos las que merecen ser
            habitadas por las personas adecuadas.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col lg:flex-row gap-4 mb-10">
          <div className="relative flex-1">
            <Search
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-400"
            />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar por nombre o ubicación…"
              className="w-full pl-11 pr-4 py-3.5 bg-white border border-ink-900/10 rounded-full text-sm text-ink-800 placeholder:text-ink-400 focus:outline-none focus:border-clay-500 transition-colors"
            />
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex items-center gap-2 text-ink-500 text-xs tracking-wide">
              <SlidersHorizontal size={14} /> Tipo:
            </div>
            <div className="flex gap-2 flex-wrap">
              {TYPES.map((t) => (
                <button
                  key={t}
                  onClick={() => setType(t)}
                  className={`px-4 py-2 rounded-full text-xs tracking-wide transition-all ${
                    type === t
                      ? 'bg-ink-900 text-cream-50'
                      : 'bg-white border border-ink-900/10 text-ink-700 hover:border-clay-500'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex gap-2 flex-wrap">
              {STATUSES.map((s) => (
                <button
                  key={s}
                  onClick={() => setStatus(s)}
                  className={`px-4 py-2 rounded-full text-xs tracking-wide transition-all ${
                    status === s
                      ? 'bg-clay-500 text-cream-50'
                      : 'bg-white border border-ink-900/10 text-ink-700 hover:border-clay-500'
                  }`}
                >
                  {s === 'For Sale'
                    ? 'En venta'
                    : s === 'For Rent'
                    ? 'En alquiler'
                    : 'Todos'}
                </button>
              ))}
            </div>
          </div>
        </div>

        {error && (
          <div className="text-center py-20 text-ink-500">{error}</div>
        )}

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="aspect-[4/5] bg-cream-100 rounded-2xl animate-pulse"
              />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20 text-ink-500">
            No hay propiedades que coincidan con tu búsqueda.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((p, i) => (
              <article
                key={p.id}
                onClick={() => setActive(p)}
                className="group cursor-pointer animate-fade-up"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-cream-100">
                  <img
                    src={p.image_url}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  <span
                    className={`absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] tracking-widest2 uppercase backdrop-blur-sm ${
                      p.status === 'For Rent'
                        ? 'bg-sage-500/90 text-cream-50'
                        : 'bg-clay-500/90 text-cream-50'
                    }`}
                  >
                    {p.status === 'For Rent' ? 'En alquiler' : 'En venta'}
                  </span>
                  {p.featured && (
                    <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] tracking-widest2 uppercase bg-cream-50/90 text-ink-900 backdrop-blur-sm">
                      Destacada
                    </span>
                  )}
                  <div className="absolute bottom-0 inset-x-0 p-5 text-cream-50">
                    <div className="flex items-center gap-1.5 text-cream-100/90 text-xs mb-1">
                      <MapPin size={12} /> {p.location}
                    </div>
                    <h3 className="font-serif text-2xl leading-tight">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-clay-400 font-medium">
                      {formatPrice(p.price, p.status)}
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-5 text-ink-500 text-sm">
                  <span className="flex items-center gap-1.5">
                    <Bed size={15} /> {p.bedrooms}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Bath size={15} /> {p.bathrooms}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Maximize size={15} /> {p.area_sqm} m²
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {active && <PropertyModal property={active} onClose={() => setActive(null)} />}
    </section>
  );
}
