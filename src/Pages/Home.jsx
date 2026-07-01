import { Link } from 'react-router-dom'

const CATEGORIAS = [
  {
    inicial:     'T',
    nombre:      'Tablas',
    descripcion: 'Shortboards, Longboards y Fish para todo nivel de surfista.',
  },
  {
    inicial:     'W',
    nombre:      'Wetsuits',
    descripcion: 'Trajes de neopreno para el frío del Pacífico peruano.',
  },
  {
    inicial:     'A',
    nombre:      'Accesorios',
    descripcion: 'Leashes, ceras, quillas y todo lo que necesitas en el agua.',
  },
]

export default function Home() {
  return (
    <div>
      <section
        className="relative min-h-[88vh] flex items-center justify-center text-center px-4"
        style={{ background: 'linear-gradient(135deg, #001233 0%, #0A2239 40%, #176087 80%, #1D84B5 100%)' }}
      >
        <div className="relative z-10 max-w-3xl">
          <p className="text-pacific text-xs font-bold uppercase tracking-[4px] mb-5">
            Punta Hermosa, Lima - Perú
          </p>
          <h1 className="font-display text-6xl md:text-8xl text-white tracking-widest leading-none mb-6">
            BIENVENIDO A PERUSURF
          </h1>
          <p className="text-white/65 text-lg md:text-xl mb-10">
            Tu tienda de surf en Punta Hermosa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/tienda"
              className="bg-pacific hover:bg-ocean text-prussian font-bold text-lg px-10 py-4 rounded-full transition-colors duration-200"
            >
              Ver Catálogo
            </Link>
            <Link
              to="/nosotros"
              className="border-2 border-white/50 hover:border-white text-white font-bold text-lg px-10 py-4 rounded-full transition-colors duration-200"
            >
              Conócenos
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl md:text-5xl text-center text-prussian tracking-widest mb-3">
            NUESTRAS CATEGORÍAS
          </h2>
          <p className="text-center text-gray-400 mb-14">
            Todo lo que necesitas para dominar las olas del Pacífico
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CATEGORIAS.map(cat => (
              <div
                key={cat.nombre}
                className="bg-white rounded-xl shadow-sm border-t-4 border-prussian p-8 text-center hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-prussian text-white font-display text-2xl flex items-center justify-center mx-auto mb-5">
                  {cat.inicial}
                </div>
                <h3 className="font-display text-2xl text-prussian tracking-wide mb-3">{cat.nombre}</h3>
                <p className="text-gray-400 text-sm mb-7">{cat.descripcion}</p>
                <Link
                  to="/tienda"
                  className="border-2 border-prussian text-prussian hover:bg-prussian hover:text-white font-bold px-6 py-2 rounded-lg transition-colors duration-200 text-sm inline-block"
                >
                  Explorar
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-24 text-center px-4"
        style={{ background: 'linear-gradient(135deg, #0A2239 0%, #176087 100%)' }}
      >
        <div className="max-w-3xl mx-auto">
          <h3 className="font-display text-4xl md:text-5xl text-white tracking-widest mb-5">
            LAS MEJORES OLAS DEL PACÍFICO
          </h3>
          <p className="text-white/65 text-lg mb-10">
            Equípate con los mejores productos de surf disponibles en Perú.
          </p>
          <Link
            to="/contacto"
            className="bg-white text-prussian hover:bg-pacific hover:text-white font-bold text-lg px-10 py-4 rounded-full transition-colors duration-200 inline-block"
          >
            Contáctanos
          </Link>
        </div>
      </section>
    </div>
  )
}
