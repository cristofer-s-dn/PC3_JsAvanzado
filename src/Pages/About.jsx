const STATS = [
  { valor: '10+', etiqueta: 'Años de experiencia'        },
  { valor: '500+', etiqueta: 'Surfistas equipados'        },
  { valor: '100+', etiqueta: 'Productos disponibles'      },
  { valor: '1',    etiqueta: 'Ubicación en Punta Hermosa' },
]

const VALORES = [
  {
    titulo:      'CALIDAD',
    descripcion: 'Solo trabajamos con las mejores marcas de surf del mundo para garantizar tu rendimiento en el agua.',
  },
  {
    titulo:      'PASIÓN',
    descripcion: 'Somos surfistas que entienden exactamente lo que necesitas dentro y fuera del Pacífico.',
  },
  {
    titulo:      'COMUNIDAD',
    descripcion: 'Fomentamos activamente la cultura del surf en toda la costa peruana.',
  },
]

export default function About() {
  return (
    <div>
      <div
        className="py-24 text-center px-4"
        style={{ background: 'linear-gradient(135deg, #001233 0%, #0A2239 60%, #176087 100%)' }}
      >
        <h1 className="font-display text-6xl text-white tracking-widest mb-4">NOSOTROS</h1>
        <p className="text-pacific max-w-xl mx-auto text-lg">
          La tienda de surf más completa de Punta Hermosa, Lima - Perú.
        </p>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-4xl text-prussian tracking-widest mb-6">NUESTRA HISTORIA</h2>
            <p className="text-gray-500 mb-4 leading-relaxed">
              PERUSURF nace en el corazón de Punta Hermosa, uno de los mejores destinos de surf del Perú y
              América Latina. Fundada por surfistas apasionados, nuestra misión desde el primer día ha sido
              ofrecer el mejor equipamiento para que cada ola sea una experiencia inolvidable.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Contamos con tablas para todos los niveles, trajes de neopreno especializados para el frío del
              Pacífico y una amplia variedad de accesorios seleccionados por nuestro equipo de expertos.
            </p>
          </div>
          <div
            className="rounded-2xl p-10 text-center"
            style={{ background: 'linear-gradient(135deg, #0A2239, #176087)' }}
          >
            <p className="font-display text-6xl text-pacific tracking-widest mb-3">PERUSURF</p>
            <p className="text-white/40 uppercase tracking-[4px] text-xs">Est. Punta Hermosa, Lima</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map(stat => (
              <div key={stat.etiqueta} className="bg-white rounded-xl shadow-sm p-6 text-center">
                <p className="font-display text-5xl text-prussian tracking-widest">{stat.valor}</p>
                <p className="text-gray-400 text-xs uppercase tracking-wider mt-2">{stat.etiqueta}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-20 px-4"
        style={{ background: 'linear-gradient(135deg, #0A2239 0%, #176087 100%)' }}
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-4xl text-white text-center tracking-widest mb-16">
            NUESTROS VALORES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {VALORES.map(v => (
              <div key={v.titulo} className="text-center">
                <h3 className="font-display text-3xl text-pacific tracking-widest mb-4">{v.titulo}</h3>
                <p className="text-white/65 leading-relaxed text-sm">{v.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
