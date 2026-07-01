import { useState } from 'react'

const CAMPOS_INICIALES = {
  nombre:  '',
  correo:  '',
  asunto:  '',
  mensaje: '',
}

const INFO = [
  { etiqueta: 'Dirección', valor: 'Av. Principal 123, Punta Hermosa, Lima - Perú' },
  { etiqueta: 'Correo',    valor: 'info@perusurf.pe'                               },
  { etiqueta: 'Teléfono',  valor: '+51 987 654 321'                                },
  { etiqueta: 'Horario',   valor: 'Lunes a Sábado: 8am - 7pm'                     },
]

export default function Contact() {
  const [campos,   setCampos]   = useState(CAMPOS_INICIALES)
  const [errores,  setErrores]  = useState({})
  const [enviado,  setEnviado]  = useState(false)

  const handleChange = e => {
    const { name, value } = e.target
    setCampos(p => ({ ...p, [name]: value }))
    if (errores[name]) setErrores(p => ({ ...p, [name]: '' }))
  }

  const validar = () => {
    const nuevo = {}
    if (!campos.nombre.trim())  nuevo.nombre  = 'El nombre es obligatorio.'
    if (!campos.correo.trim())  nuevo.correo  = 'El correo es obligatorio.'
    else if (!/\S+@\S+\.\S+/.test(campos.correo)) nuevo.correo = 'Ingresa un correo válido.'
    if (!campos.asunto.trim())  nuevo.asunto  = 'El asunto es obligatorio.'
    if (!campos.mensaje.trim()) nuevo.mensaje = 'El mensaje es obligatorio.'
    return nuevo
  }

  const handleSubmit = e => {
    e.preventDefault()
    const nuevosErrores = validar()
    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores)
      return
    }
    setEnviado(true)
  }

  const handleNuevo = () => {
    setCampos(CAMPOS_INICIALES)
    setErrores({})
    setEnviado(false)
  }

  const inputBase = 'w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ocean transition-colors duration-200'
  const inputOk   = `${inputBase} border-gray-200 focus:border-ocean`
  const inputErr  = `${inputBase} border-red-400 focus:border-red-400 bg-red-50`

  return (
    <div>
      <div
        className="py-20 text-center px-4"
        style={{ background: 'linear-gradient(135deg, #001233 0%, #0A2239 60%, #176087 100%)' }}
      >
        <h1 className="font-display text-5xl md:text-6xl text-white tracking-widest mb-3">CONTÁCTENOS</h1>
        <p className="text-pacific">Estamos en Punta Hermosa, Lima - Perú</p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          <div className="lg:col-span-2">
            {enviado ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-display text-3xl text-green-700 tracking-widest mb-3">MENSAJE ENVIADO</h3>
                <p className="text-green-600 mb-2">
                  Gracias, <strong>{campos.nombre}</strong>. Recibimos tu consulta sobre{' '}
                  <em>{campos.asunto}</em>.
                </p>
                <p className="text-green-600 text-sm mb-8">
                  Te contactaremos en <strong>{campos.correo}</strong> a la brevedad.
                </p>
                <button
                  onClick={handleNuevo}
                  className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-bold px-8 py-2.5 rounded-full transition-colors duration-200 text-sm"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div
                  className="px-7 py-4"
                  style={{ background: 'linear-gradient(135deg, #0A2239, #176087)' }}
                >
                  <h2 className="text-white font-bold text-xs uppercase tracking-[2px]">
                    Formulario de Contacto
                  </h2>
                </div>
                <form onSubmit={handleSubmit} noValidate className="p-7 space-y-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      value={campos.nombre}
                      onChange={handleChange}
                      placeholder="Tu nombre completo"
                      className={errores.nombre ? inputErr : inputOk}
                    />
                    {errores.nombre && (
                      <p className="text-red-500 text-xs mt-1">{errores.nombre}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      name="correo"
                      value={campos.correo}
                      onChange={handleChange}
                      placeholder="tu@correo.com"
                      className={errores.correo ? inputErr : inputOk}
                    />
                    {errores.correo && (
                      <p className="text-red-500 text-xs mt-1">{errores.correo}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                      Asunto
                    </label>
                    <input
                      type="text"
                      name="asunto"
                      value={campos.asunto}
                      onChange={handleChange}
                      placeholder="Motivo de tu consulta"
                      className={errores.asunto ? inputErr : inputOk}
                    />
                    {errores.asunto && (
                      <p className="text-red-500 text-xs mt-1">{errores.asunto}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                      Mensaje
                    </label>
                    <textarea
                      name="mensaje"
                      value={campos.mensaje}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Escribe tu consulta aquí..."
                      className={errores.mensaje ? inputErr : inputOk}
                    />
                    {errores.mensaje && (
                      <p className="text-red-500 text-xs mt-1">{errores.mensaje}</p>
                    )}
                  </div>

                  {campos.nombre && (
                    <div className="bg-blue-50 border border-blue-100 rounded-lg px-4 py-3 text-xs text-blue-500">
                      Hola, <strong>{campos.nombre}</strong>.
                      {campos.correo && <> Te contactaremos en: <strong>{campos.correo}</strong>.</>}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg font-bold text-white text-sm tracking-wider transition-colors duration-200"
                    style={{ background: 'linear-gradient(135deg, #0A2239, #176087)' }}
                    onMouseOver={e => e.currentTarget.style.background = '#176087'}
                    onMouseOut={e  => e.currentTarget.style.background = 'linear-gradient(135deg, #0A2239, #176087)'}
                  >
                    ENVIAR MENSAJE
                  </button>
                </form>
              </div>
            )}
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-7 h-fit">
            <h2
              className="font-display text-2xl tracking-widest mb-7"
              style={{ color: '#0A2239' }}
            >
              INFORMACIÓN
            </h2>
            <div className="space-y-6">
              {INFO.map(item => (
                <div key={item.etiqueta}>
                  <p className="text-xs font-bold uppercase tracking-[2px] text-gray-400 mb-1">
                    {item.etiqueta}
                  </p>
                  <p className="text-gray-600 text-sm">{item.valor}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
