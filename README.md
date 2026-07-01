# 🏄 PERUSURF — Tienda de Surf en Punta Hermosa

Aplicación web desarrollada con **React + Vite** para una tienda de surf ubicada en Punta Hermosa, Lima - Perú. El proyecto consume una API REST (MockAPI) para mostrar un catálogo de productos de surf con filtros, búsqueda y validación de formularios.

## 📸 Vista Previa

| Página | Descripción |
|--------|-------------|
| **Inicio** | Hero principal con CTA, categorías de productos y sección destacada |
| **Nosotros** | Historia de la tienda, estadísticas y valores de la empresa |
| **Catálogo** | Productos obtenidos desde MockAPI con filtros por categoría y buscador |
| **Contacto** | Formulario con validación reactiva e información de contacto |
| **404** | Página de error personalizada con animaciones de olas |

## 🚀 Tecnologías Utilizadas

| Tecnología | Versión | Uso |
|------------|---------|-----|
| [React](https://react.dev/) | 18.2 | Biblioteca principal de UI |
| [Vite](https://vitejs.dev/) | 5.1 | Bundler y servidor de desarrollo |
| [React Router DOM](https://reactrouter.com/) | 6.22 | Enrutamiento SPA |
| [Tailwind CSS](https://tailwindcss.com/) | 3.4 | Framework de estilos utilitarios |
| [MockAPI](https://mockapi.io/) | — | API REST para datos de productos |

## ✨ Características

- **SPA con React Router** — Navegación fluida entre páginas sin recargas
- **Consumo de API REST** — Productos cargados dinámicamente desde MockAPI con `fetch`
- **Filtros y búsqueda** — Filtrado por categoría y búsqueda por nombre en tiempo real
- **Formulario con validación** — Validación reactiva con mensajes de error y feedback visual
- **Diseño responsivo** — Adaptable a móvil, tablet y escritorio con Tailwind CSS
- **Página 404 personalizada** — Animaciones CSS de olas y estrellas
- **Indicadores de stock** — Semáforo de colores y etiqueta "Últimas unidades"
- **Tipografía premium** — Google Fonts (Bebas Neue + Nunito)
- **Paleta de colores temática** — Tonos oceánicos (Prussian Blue, Pacific, Ocean, Baltic)

## 📁 Estructura del Proyecto

```
perusurf-react/
├── index.html                  # Punto de entrada HTML
├── package.json                # Dependencias y scripts
├── vite.config.js              # Configuración de Vite
├── tailwind.config.js          # Configuración de Tailwind CSS
├── postcss.config.js           # Configuración de PostCSS
└── src/
    ├── main.jsx                # Punto de entrada de React
    ├── App.jsx                 # Componente raíz con rutas
    ├── index.css               # Estilos globales y animaciones
    ├── Components/
    │   ├── Navbar.jsx          # Barra de navegación responsive
    │   └── Footer.jsx          # Pie de página con info de contacto
    ├── Pages/
    │   ├── Home.jsx            # Página de inicio
    │   ├── About.jsx           # Página "Nosotros"
    │   ├── Store.jsx           # Catálogo de productos (API)
    │   ├── Contact.jsx         # Formulario de contacto
    │   └── NotFound.jsx        # Página 404
    └── Services/
        └── api.js              # Servicio de consumo de API
```

## ⚙️ Instalación y Ejecución

### Prerrequisitos

- [Node.js](https://nodejs.org/) v16 o superior
- npm (incluido con Node.js)

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/cristofer-s-dn/PC3_JsAvanzado.git

# 2. Entrar al directorio del proyecto
cd PC3_JsAvanzado

# 3. Instalar dependencias
npm install

# 4. Iniciar el servidor de desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## 🌐 API REST

El catálogo de productos consume una API REST alojada en **MockAPI**:

```
GET https://6a1b3aecbc2f94475493136f.mockapi.io/productos/productos
```

Cada producto contiene:
- `id` — Identificador único
- `nombre` — Nombre del producto
- `precio` — Precio en soles (S/)
- `categoria` — Categoría (Tablas, Wetsuits, Accesorios)
- `stock` — Unidades disponibles
- `imagen` — URL de imagen del producto

## 📜 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo con HMR |
| `npm run build` | Genera el bundle de producción en `/dist` |
| `npm run preview` | Previsualiza el build de producción |

## 👤 Autor

**Sergio Dávila**  
Estudiante de Ingeniería  
Proyecto PC3 — JavaScript Avanzado 2026
