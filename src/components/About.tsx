const stats = [
  { value: '15', label: 'años curando propiedades' },
  { value: '120+', label: 'residencias entregadas' },
  { value: '40', label: 'clientes activos este año' },
];

export default function About() {
  return (
    <section id="nosotros" className="py-24 md:py-32 bg-cream-100">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <div className="relative">
          <img
            src="https://images.pexels.com/photos/32870/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1200"
            alt="Interior de una residencia"
            className="rounded-2xl w-full aspect-[4/5] object-cover"
          />
          <div className="absolute -bottom-6 -right-4 md:-right-8 bg-cream-50 p-6 rounded-2xl shadow-xl max-w-[200px]">
            <p className="font-serif text-3xl text-clay-600 leading-none">2009</p>
            <p className="text-xs text-ink-500 mt-2 tracking-wide">
              Fundada en Marbella por un pequeño equipo de apasionados por la
              arquitectura.
            </p>
          </div>
        </div>

        <div>
          <p className="flex items-center gap-2 text-xs tracking-widest2 uppercase text-clay-500 mb-4">
            <span className="h-px w-8 bg-clay-500" /> Nosotros
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink-900 leading-tight mb-6">
            Creemos que una casa se elige con el corazón y se compra con
            criterio.
          </h2>
          <p className="text-ink-700 leading-relaxed mb-4">
            Maison nació como respuesta a las grandes cadenas: un equipo pequeño,
            cercano y especializado en propiedades con alma. Conocemos cada
            vivienda que ofrecemos, sus barrios, su luz y su historia.
          </p>
          <p className="text-ink-700 leading-relaxed mb-10">
            Trabajamos con un número limitado de clientes para garantizar una
            atención impecable. No buscamos volumen, buscamos coincidencias
            acertadas entre personas y lugares.
          </p>

          <div className="grid grid-cols-3 gap-6 border-t border-ink-900/10 pt-8">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-serif text-4xl text-ink-900">{s.value}</p>
                <p className="text-xs text-ink-500 mt-2 leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
