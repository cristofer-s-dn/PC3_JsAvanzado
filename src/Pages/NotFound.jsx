import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  const starsRef = useRef(null)

  useEffect(() => {
    const container = starsRef.current
    if (!container) return
    for (let i = 0; i < 55; i++) {
      const star = document.createElement('div')
      const size = Math.random() * 2.5 + 0.8
      star.className = 'star'
      star.style.cssText = `
        width:${size}px;
        height:${size}px;
        top:${Math.random() * 55}%;
        left:${Math.random() * 100}%;
        --delay:${Math.random() * 3}s;
        --dur:${2 + Math.random() * 3}s;
      `
      container.appendChild(star)
    }
    return () => { while (container.firstChild) container.removeChild(container.firstChild) }
  }, [])

  return (
    <div
      className="relative flex items-center justify-center text-center overflow-hidden px-4"
      style={{
        minHeight: 'calc(100vh - 140px)',
        background: 'linear-gradient(180deg, #001233 0%, #0A2239 38%, #176087 68%, #1D84B5 100%)',
      }}
    >
      <div ref={starsRef} className="absolute inset-0 pointer-events-none" />

      <div
        className="absolute rounded-full"
        style={{
          top: 28, right: 80, width: 44, height: 44,
          background: '#f0e8c0',
          boxShadow: '0 0 24px rgba(240,232,192,0.4)',
        }}
      />

      <div className="relative z-10 flex flex-col items-center">
        <p className="text-white/30 font-bold text-xs uppercase tracking-[4px] mb-4">
          PERUSURF &mdash; PUNTA HERMOSA
        </p>

        <h1
          className="font-display leading-none mb-3"
          style={{
            fontSize: 'clamp(5rem, 18vw, 9rem)',
            letterSpacing: '8px',
            color: '#53A2BE',
            textShadow: '0 0 50px rgba(83,162,190,0.25)',
          }}
        >
          404
        </h1>

        <div className="tabla-bob mb-5">
          <svg width="130" viewBox="0 0 120 48" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="60" cy="24" rx="55" ry="20" fill="#53A2BE" />
            <ellipse cx="60" cy="24" rx="55" ry="20" fill="none" stroke="#1D84B5" strokeWidth="1.5" />
            <line x1="60" y1="6" x2="60" y2="42" stroke="#1D84B5" strokeWidth="1" strokeDasharray="3,3" />
            <ellipse cx="60" cy="32" rx="10" ry="5" fill="#0A2239" opacity="0.5" />
            <ellipse cx="60" cy="32" rx="10" ry="5" fill="none" stroke="#1D84B5" strokeWidth="1" />
            <path d="M6 24 Q20 10 60 8 Q100 10 114 24" fill="none" stroke="white" strokeWidth="1" opacity="0.3" />
          </svg>
        </div>

        <h2
          className="font-display text-white tracking-[4px] mb-4"
          style={{ fontSize: 'clamp(1.4rem, 4vw, 2rem)' }}
        >
          OLA NO ENCONTRADA
        </h2>
        <p className="text-white/55 text-sm max-w-xs leading-relaxed mb-10">
          Parece que esta página se fue con la marea.<br />
          Vuelve al lineup y encuentra tu próxima ola.
        </p>

        <Link
          to="/"
          className="font-display text-prussian text-lg tracking-[2.5px] px-10 py-3 rounded-full transition-colors duration-200 inline-block"
          style={{ background: '#53A2BE' }}
          onMouseOver={e => e.currentTarget.style.background = '#1D84B5'}
          onMouseOut={e  => e.currentTarget.style.background = '#53A2BE'}
        >
          VOLVER AL LINEUP
        </Link>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden pointer-events-none">
        <div
          className="wave-layer"
          style={{ bottom: 0, height: 90, background: 'rgba(83,162,190,0.18)', animationDuration: '6s' }}
        />
        <div
          className="wave-layer"
          style={{ bottom: 8, height: 70, background: 'rgba(83,162,190,0.12)', animationDuration: '9s', animationDirection: 'reverse' }}
        />
        <div
          className="wave-layer"
          style={{ bottom: 16, height: 55, background: 'rgba(255,255,255,0.07)', animationDuration: '7s', animationDelay: '-2s' }}
        />
      </div>
    </div>
  )
}
