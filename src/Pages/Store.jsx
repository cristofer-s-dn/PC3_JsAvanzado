import { useState, useEffect } from 'react'
import { getProductos } from '../Services/api'

const stockColor = stock => {
  if (stock === 0)  return 'text-gray-400'
  if (stock <= 3)   return 'text-red-500'
  if (stock <= 8)   return 'text-yellow-500'
  return 'text-green-600'
}

export default function Store() {
  const [productos,             setProductos]             = useState([])
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todas')
  const [busqueda,              setBusqueda]              = useState('')
  const [cargando,              setCargando]              = useState(true)
  const [error,                 setError]                 = useState(null)

  useEffect(() => {
    getProductos()
      .then(data => {
        setProductos(data)
        setCargando(false)
      })
      .catch(err => {
        setError(err.message)
        setCargando(false)
      })
  }, [])

  const categorias = ['Todas', ...new Set(productos.map(p => p.categoria))]

  const productosFiltrados = productos
    .filter(p => categoriaSeleccionada === 'Todas' || p.categoria === categoriaSeleccionada)
    .filter(p => p.nombre.toLowerCase().includes(busqueda.toLowerCase()))

  return (
    <div>
      <div
        className="py-20 text-center px-4"
        style={{ background: 'linear-gradient(135deg, #001233 0%, #0A2239 60%, #176087 100%)' }}
      >
        <h1 className="font-display text-5xl md:text-6xl text-white tracking-widest mb-3">
          CATALOGO DE PRODUCTOS
        </h1>
        <p className="text-pacific">Equipamiento de surf de primera calidad en Punta Hermosa</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <div className="flex flex-wrap gap-2">
            {categorias.map(cat => (
              <button
                key={cat}
                onClick={() => setCategoriaSeleccionada(cat)}
                className={`px-5 py-2 rounded-full font-bold text-sm border-2 transition-colors duration-200 ${
                  categoriaSeleccionada === cat
                    ? 'bg-prussian border-prussian text-white'
                    : 'border-prussian text-prussian hover:bg-prussian hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <input
            type="text"
            placeholder="Buscar producto..."
            value={busqueda}
            onChange={e => setBusqueda(e.target.value)}
            className="ml-auto border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-ocean focus:ring-1 focus:ring-ocean"
          />
        </div>

        {cargando && (
          <div className="text-center py-24">
            <div className="w-12 h-12 border-4 border-prussian border-t-pacific rounded-full animate-spin mx-auto mb-5" />
            <p className="text-gray-400 text-sm">Cargando productos...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
            <p className="font-bold text-red-600 mb-1">Error de conexion</p>
            <p className="text-red-500 text-sm">{error}</p>
          </div>
        )}

        {!cargando && !error && (
          <>
            {productosFiltrados.length === 0 ? (
              <div className="text-center py-24 text-gray-400">
                No se encontraron productos para la seleccion actual.
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {productosFiltrados.map(producto => (
                  <div
                    key={producto.id}
                    className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
                  >
                    <div className="relative">
                      <img
                        src={producto.imagen}
                        alt={producto.nombre}
                        className="w-full h-52 object-cover"
                      />
                      <span className="absolute top-3 left-3 bg-prussian text-white text-xs font-bold px-2 py-1 rounded">
                        {producto.categoria}
                      </span>
                      {producto.stock <= 3 && producto.stock > 0 && (
                        <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                          Ultimas unidades
                        </span>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-jet text-sm leading-snug mb-2">{producto.nombre}</h3>
                      <p className="font-display text-2xl text-prussian tracking-wide mb-2">
                        S/ {Number(producto.precio).toFixed(2)}
                      </p>
                      <p className={`text-sm font-bold mb-4 ${stockColor(producto.stock)}`}>
                        Stock: {producto.stock} unidades
                      </p>
                      <button
                        disabled={producto.stock === 0}
                        className={`w-full py-2 rounded-lg font-bold text-sm transition-colors duration-200 ${
                          producto.stock === 0
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            : 'bg-prussian hover:bg-baltic text-white'
                        }`}
                      >
                        {producto.stock === 0 ? 'Sin Stock' : 'Agregar al Carrito'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
            <p className="text-right text-xs text-gray-300 mt-6">
              Mostrando {productosFiltrados.length} de {productos.length} productos
            </p>
          </>
        )}
      </div>
    </div>
  )
}
