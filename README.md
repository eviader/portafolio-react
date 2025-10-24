# 🎨 Portafolio Personal - Emanuel Viader

Portafolio web moderno y minimalista desarrollado con React y Vite, diseñado para mostrar mis proyectos y habilidades como desarrollador Front-End.

![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-6.2.0-646CFF?style=for-the-badge&logo=vite)
![GSAP](https://img.shields.io/badge/GSAP-3.13.0-88CE02?style=for-the-badge&logo=greensock)

## ✨ Características

- **Diseño Responsivo**: Adaptado para todos los dispositivos (desktop, tablet, móvil)
- **Animaciones Fluidas**: Implementadas con GSAP para transiciones suaves y profesionales
- **Efectos Visuales Interactivos**:
  - MetaBalls animadas en el fondo
  - ClickSpark effect al hacer clic
  - Efectos hover personalizados
- **Navegación Moderna**: Sistema de navegación pill-style con animaciones
- **Componentes Reutilizables**: Arquitectura modular y escalable
- **Optimización de Rendimiento**: Carga rápida y experiencia fluida

## 🚀 Tecnologías Utilizadas

### Core
- **React 19.0.0** - Librería de UI
- **Vite 6.2.0** - Build tool y dev server
- **React Router DOM 7.9.1** - Enrutamiento

### Animaciones & Efectos
- **GSAP 3.13.0** - Librería de animaciones profesionales
- **@gsap/react 2.1.2** - Integración de GSAP con React
- **OGL 1.0.11** - WebGL para efectos visuales avanzados

### Desarrollo
- **ESLint** - Linting y calidad de código
- **@vitejs/plugin-react** - Plugin de Vite para React

## 📦 Instalación

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn

### Pasos

1. **Clonar el repositorio**
```bash
git clone https://github.com/emaviader/portafolio-react.git
cd portafolio-react
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Ejecutar en modo desarrollo**
```bash
npm run dev
```

4. **Abrir en el navegador**
```
http://localhost:5173
```

## 🛠️ Scripts Disponibles

```bash
# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Vista previa del build de producción
npm run preview

# Ejecutar linter
npm run lint
```

## 📂 Estructura del Proyecto

```
portafolio-react/
├── src/
│   ├── assets/             # Imágenes, logos y recursos estáticos
│   │   ├── projectsImg/    # Imágenes de proyectos
│   │   └── logo-svg-ev.svg
│   ├── components/         # Componentes reutilizables
│   │   ├── avatar/         # Componente de avatar
│   │   ├── button/         # Botones personalizados
│   │   ├── containerApp/   # Contenedor principal
│   │   ├── metaBalls/      # Efecto MetaBalls
│   │   ├── mouse/          # Efectos del cursor
│   │   │   ├── Cursor.jsx
│   │   │   └── cliclSpark/ # Efecto de chispas al hacer clic
│   │   └── pillNav/        # Navegación pill-style
│   ├── pages/              # Páginas de la aplicación
│   │   ├── about/          # Página Sobre Mí
│   │   │   ├── About.jsx
│   │   │   └── About.css
│   │   └── projects/       # Página de Proyectos
│   │       ├── Projects.jsx
│   │       ├── ProjectsCard.jsx
│   │       └── data/
│   ├── App.jsx             # Componente principal
│   ├── App.css             # Estilos globales de la app
│   ├── index.css           # Estilos base y variables CSS
│   └── main.jsx            # Punto de entrada
├── public/                 # Archivos públicos
├── index.html              # HTML principal
├── package.json            # Dependencias y scripts
├── vite.config.js          # Configuración de Vite
└── README.md               # Este archivo
```

## 🎨 Características del Diseño

### Sistema de Diseño
- **Tipografía**: Space Grotesk (display) + Inter (body)
- **Colores**:
  - Principal: `#DF3F1F` (rojo vibrante)
  - Fondo: `#F8F8F8` (gris claro)
  - Texto: Escala de grises desde `#1a1a1a` hasta `#4a4a4a`

### Componentes Destacados

#### MetaBalls
Efecto de fondo animado usando WebGL con bolas que se mueven y se funden entre sí.

#### ClickSpark
Efecto de partículas que aparece al hacer clic en cualquier lugar de la pantalla.

#### PillNav
Sistema de navegación moderno con indicador animado tipo píldora que se mueve entre secciones.

#### Button Component
Botones personalizados con efecto hover de expansión circular desde el centro.

## 🌐 Páginas

### Home (`/`)
- Presentación principal
- Avatar animado
- Llamados a la acción
- Efectos visuales interactivos

### Sobre Mí (`/about`)
- Información personal y profesional
- Habilidades y tecnologías
- Experiencia y trayectoria
- Diseño de tarjeta centrada con fondo degradado

### Proyectos (`/projects`)
- Galería de proyectos realizados
- Cards con información detallada
- Links a demos y repositorios
- Diseño responsive en grid

## 🎯 Próximas Mejoras

- [ ] Página de Contacto con formulario funcional
- [ ] Modo oscuro (Dark Mode)
- [ ] Sección de Blog
- [ ] Integración con CMS para gestión de contenido
- [ ] Optimización de imágenes con lazy loading
- [ ] Tests unitarios y de integración
- [ ] Accesibilidad WCAG AA

## 📱 Responsive Design

El portafolio está optimizado para los siguientes breakpoints:

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Tablet Portrait**: 641px - 768px
- **Mobile Large**: 481px - 640px
- **Mobile**: 375px - 480px
- **Mobile Small**: < 375px

## 🤝 Contribuciones

Este es un proyecto personal, pero si encuentras algún bug o tienes sugerencias, siéntete libre de abrir un issue o hacer un pull request.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - mira el archivo [LICENSE](LICENSE) para más detalles.

## 👤 Autor

**Emanuel Viader**
- GitHub: [@emaviader](https://github.com/emaviader)
- Portfolio: [Tu URL de portafolio]

---

⭐ Si te gusta este proyecto, no dudes en darle una estrella en GitHub
