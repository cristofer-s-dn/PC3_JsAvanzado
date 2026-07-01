const BASE_URL = 'https://6a1b3aecbc2f94475493136f.mockapi.io/productos'

export const getProductos = async () => {
  const res = await fetch(`${BASE_URL}/productos`)
  if (!res.ok) throw new Error('No se pudo conectar con el servidor. Verifica tu URL de MockAPI.')
  return res.json()
}
