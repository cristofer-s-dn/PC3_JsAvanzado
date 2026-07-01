import { Link } from 'react-router-dom'

export default function Footer() {
  const anio = new Date().getFullYear()

  return (
    <footer className="bg-prussian text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

          <div>
            <div className="mb-4">
              <span className="text-pacific font-display text-2xl tracking-widest">PERU</span>
              <span className="text-white  font-display text-2xl tracking-widest">SURF</span>
            </div>
            <p className="text-white/45 text-sm leading-relaxed">
              La tienda de surf más completa de la costa peruana, ubicada en el corazón de Punta Hermosa.
            </p>
          </div>

          <div>
            <h6 className="text-white/35 font-bold text-xs uppercase tracking-[3px] mb-5">Navegación</h6>
            <ul className="space-y-3 text-sm">
              {[
                { to: '/', label: 'Inicio' },
                { to: '/nosotros', label: 'Nosotros' },
                { to: '/tienda', label: 'Tienda' },
                { to: '/contacto', label: 'Contacto' },
              ].map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="text-white/55 hover:text-pacific transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h6 className="text-white/35 font-bold text-xs uppercase tracking-[3px] mb-5">Contacto</h6>
            <address className="not-italic text-sm text-white/55 space-y-2">
              <p>Av. Principal 123, Punta Hermosa</p>
              <p>Lima - Perú</p>
              <p>info@perusurf.pe</p>
              <p>+51 987 654 321</p>
            </address>
          </div>

        </div>

        <div className="border-t border-white/10 mt-12 pt-6 text-center">
          <p className="text-white/25 text-xs tracking-wider">
            Estudiante de Ingeniería Sergio Dávila - Proyecto PC3 JS Avanzado 2026
          </p>
        </div>
      </div>
    </footer>
  )
}
