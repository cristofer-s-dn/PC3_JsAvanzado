import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `font-bold text-sm uppercase tracking-wider transition-colors duration-200 ${
      isActive ? 'text-pacific' : 'text-white/75 hover:text-pacific'
    }`

  return (
    <nav className="bg-prussian shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          <NavLink to="/" className="flex items-baseline gap-0">
            <span className="text-pacific font-display text-3xl tracking-widest">PERU</span>
            <span className="text-white  font-display text-3xl tracking-widest">SURF</span>
          </NavLink>

          <div className="hidden md:flex items-center gap-8">
            <NavLink to="/"         className={linkClass} end>Inicio</NavLink>
            <NavLink to="/nosotros" className={linkClass}>Nosotros</NavLink>
            <NavLink to="/tienda"   className={linkClass}>Tienda</NavLink>
            <NavLink to="/contacto" className={linkClass}>Contacto</NavLink>
          </div>

          <button
            className="md:hidden text-white p-2 focus:outline-none"
            onClick={() => setOpen(p => !p)}
            aria-label="Abrir menú"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-prussian border-t border-white/10 px-6 pt-3 pb-5 flex flex-col gap-5">
          <NavLink to="/"         className={linkClass} end onClick={() => setOpen(false)}>Inicio</NavLink>
          <NavLink to="/nosotros" className={linkClass} onClick={() => setOpen(false)}>Nosotros</NavLink>
          <NavLink to="/tienda"   className={linkClass} onClick={() => setOpen(false)}>Tienda</NavLink>
          <NavLink to="/contacto" className={linkClass} onClick={() => setOpen(false)}>Contacto</NavLink>
        </div>
      )}
    </nav>
  )
}
