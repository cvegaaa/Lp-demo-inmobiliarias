import { Compass, KeyRound, FileSignature, HeartHandshake } from 'lucide-react';

const services = [
  {
    icon: Compass,
    title: 'Búsqueda a medida',
    text: 'No esperamos a que encuentres la vivienda: la encontramos por ti, incluso antes de que salga al mercado.',
  },
  {
    icon: KeyRound,
    title: 'Visitas privadas',
    text: 'Recorres cada propiedad en exclusiva, sin prisas y con el contexto que merece una decisión así.',
  },
  {
    icon: FileSignature,
    title: 'Acompañamiento legal',
    text: 'Notaría, financiación y fiscalidad, coordinados por nuestro equipo para que solo firmes y disfrutes.',
  },
  {
    icon: HeartHandshake,
    title: 'Después de las llaves',
    text: 'Reformas, interiorismo y puesta a punto. Te acompañamos hasta que la casa sea tuya de verdad.',
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 md:py-32 bg-ink-900 text-cream-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <p className="flex items-center gap-2 text-xs tracking-widest2 uppercase text-clay-400 mb-4">
            <span className="h-px w-8 bg-clay-400" /> Cómo trabajamos
          </p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            Un servicio de trato cercano, no una agencia más.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-ink-700/40 rounded-2xl overflow-hidden">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="bg-ink-900 p-8 hover:bg-ink-800 transition-colors duration-500 group animate-fade-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="w-12 h-12 rounded-full border border-clay-400/40 flex items-center justify-center mb-6 group-hover:bg-clay-500 group-hover:border-clay-500 transition-all">
                <s.icon size={20} className="text-clay-400 group-hover:text-cream-50 transition-colors" />
              </div>
              <h3 className="font-serif text-2xl mb-3">{s.title}</h3>
              <p className="text-cream-100/70 leading-relaxed text-sm">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
