# 🍥✨ Anime Explorer - Examen Final

Una aplicación web moderna para explorar animes, personajes y obtener información detallada usando la API de **Jikan** (API no oficial de MyAnimeList).

🔗 **[Ver Demo en Vivo en Vercel](https://vercel.com/asbeliens-projects/examen-final-anime-g1g7)**

## 🚀 Características

- ✅ **Explorar Animes**: Navega por animes populares con paginación
- ✅ **Detalle de Anime**: Visualiza información completa de cada anime (sinopsis, géneros, episodios, estado, año)
- ✅ **Chat con IA**: Pregunta sobre animes y personajes y obtén respuestas
- ✅ **Diseño Responsivo**: Interfaz moderna con Bootstrap 5
- ✅ **Gestión de Estado**: Usando Zustand para manejo eficiente del estado
- ✅ **Enrutamiento**: React Router v7 para navegación fluida

## 📋 Requisitos Previos

- Node.js >= 18.x
- npm >= 9.x

## 🔧 Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/Asbelien/examen_final_anime.git
cd examen_final_anime
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Iniciar servidor de desarrollo**
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5176/` (o en el puerto disponible más cercano)

## 📦 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia servidor de desarrollo con HMR |
| `npm run build` | Compila la aplicación para producción |
| `npm run preview` | Previsualiza la versión compilada |
| `npm run lint` | Valida la calidad del código con ESLint |

## 🏗️ Estructura del Proyecto

```
src/
├── components/
│   ├── layout/
│   │   └── Header.jsx           # Navegación principal
│   └── modules/
│       └── character/
│           └── AnimeCard.jsx    # Tarjeta de anime
├── pages/
│   ├── HomePage.jsx             # Página de inicio
│   ├── AnimesPage.jsx           # Listado de animes
│   ├── AnimeDetailPage.jsx      # Detalle de un anime
│   └── ChatPage.jsx             # Chat con IA
├── layouts/
│   └── RootLayout.jsx           # Layout raíz con Header
├── services/
│   └── jikanApi.js              # Cliente API Jikan
├── stores/
│   └── useCharactersStore.js    # Store de Zustand (animes)
├── App.jsx                      # Router principal
└── main.jsx                     # Punto de entrada

public/
├── vite.svg
└── ...

index.html                        # Template HTML
package.json                      # Dependencias y scripts
vite.config.js                    # Configuración Vite
eslint.config.js                  # Configuración ESLint
```

## 🔌 Dependencias Principales

```json
{
  "react": "^19.2.0",                    // Framework React
  "react-dom": "^19.2.0",                // Renderizado en DOM
  "react-router-dom": "^7.9.6",          // Enrutamiento web
  "zustand": "^5.0.8",                   // Gestión de estado
  "bootstrap": "^5.3.8",                 // Framework CSS
  "bootstrap-icons": "^1.13.1"           // Iconos
}
```

## 🌐 API Jikan

La aplicación utiliza **Jikan API v4** (https://jikan.moe/api) para obtener datos de animes:

### Endpoints usados:

- **Listar Animes**: `GET /anime?page={page}`
- **Detalle de Anime**: `GET /anime/{id}`
- **Buscar Anime**: `GET /anime?q={query}`

**Nota**: La API es pública y no requiere autenticación.

## 🛣️ Rutas de la Aplicación

| Ruta | Componente | Descripción |
|------|-----------|-------------|
| `/` | HomePage | Página de inicio con botones de navegación |
| `/animes` | AnimesPage | Listado de animes populares |
| `/animes/:id` | AnimeDetailPage | Detalle completo de un anime |
| `/chat` | ChatPage | Chat interactivo con IA |

## 🧪 Testing

(Por implementar) Estructura lista para agregar pruebas unitarias con Jest o Vitest.

## 📝 Notas de Desarrollo

### Gestión de Estado con Zustand

El store `useAnimeStore` maneja:
- Listado de animes
- Estados de carga e errores
- Paginación
- Métodos para obtener animes

```javascript
const { animes, isLoading, error, fetchAnimes } = useAnimeStore();
```

### Navegación

Utiliza React Router v7 con el siguiente flujo:
```
BrowserRouter
  └── RootLayout (Header + Outlet)
      ├── HomePage
      ├── AnimesPage
      ├── AnimeDetailPage
      └── ChatPage
```

## 🚀 Deployment

### Opción 1: Vercel
```bash
npm install -g vercel
vercel
```

### Opción 2: Netlify
```bash
npm run build
# Sube la carpeta 'dist' a Netlify
```

### Opción 3: GitHub Pages
Configura el repositorio en Settings → Pages y selecciona la rama a desplegar.

## 🐛 Troubleshooting

### Error: "Failed to resolve import"
- Verifica que todos los archivos existan en las rutas correctas
- Asegúrate de usar rutas relativas correctas (`../`)

### Puerto en uso
- El servidor automáticamente busca otros puertos si 5173 está ocupado
- Puedes especificar un puerto: `npm run dev -- --port 3000`

### Problemas con la API
- Verifica tu conexión a internet
- La API de Jikan puede tener límites de rate limiting

## 📚 Recursos

- [React Docs](https://react.dev)
- [React Router Docs](https://reactrouter.com)
- [Zustand Docs](https://github.com/pmndrs/zustand)
- [Jikan API Docs](https://docs.api.jikan.moe)
- [Bootstrap 5 Docs](https://getbootstrap.com/docs/5.3)
- [Vite Docs](https://vite.dev)

## 👨‍💻 Autor

**Asbelien** - [GitHub](https://github.com/Asbelien)

## 📄 Licencia

Este proyecto es de uso educativo como examen final.

---

**Última actualización**: Diciembre 3, 2025
