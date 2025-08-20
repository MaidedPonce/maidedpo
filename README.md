# Portfolio Personal - Maided Hernandez

[![Next.js](https://img.shields.io/badge/Next.js-15.5.0-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.3-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-teal)](https://tailwindcss.com/)

Portfolio profesional de Maided Hernandez, desarrolladora frontend especializada en React, Next.js y tecnologías web modernas. Este sitio presenta mis proyectos, habilidades técnicas y experiencia profesional.

## 🚀 Características

- **Rendimiento Optimizado**: Construido con Next.js 15 y optimización de imágenes
- **Accesibilidad Mejorada**: Navegación por teclado, ARIA labels y contraste de colores
- **Diseño Responsive**: Adaptable a todos los dispositivos y tamaños de pantalla
- **Animaciones Fluidas**: Implementadas con Framer Motion para una experiencia visual atractiva
- **TypeScript**: Tipado fuerte para mayor mantenibilidad y detección temprana de errores
- **SEO Optimizado**: Meta tags completos y structured data para mejor posicionamiento

## 🛠️ Tecnologías Utilizadas

- **Framework**: Next.js 15.5.0 (App Router)
- **Lenguaje**: TypeScript 5.7.3
- **UI/UX**: React 19.0.0, Tailwind CSS 3.4.17
- **Animaciones**: Framer Motion 11.16.4
- **Efectos Visuales**: TSParticles 3.7.1
- **Herramientas**: ESLint, Prettier
- **Deployment**: Vercel (recomendado)

## 📦 Instalación y Desarrollo

### Prerrequisitos

- Node.js 18+ 
- npm, yarn, pnpm o bun

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/MaidedPonce/maidedpo.git
   cd maidedpo
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   # o
   yarn install
   # o
   pnpm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   # o
   pnpm dev
   ```

4. **Abrir en el navegador**
   
   Visita [http://localhost:3000](http://localhost:3000) para ver el resultado.

## 📝 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta ESLint para revisar el código
- `npm run format:fix` - Formatea el código con Prettier

## 🏗️ Estructura del Proyecto

```
src/
├── app/                    # App Router de Next.js
│   ├── globals.css        # Estilos globales
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página principal
├── hooks/                  # Hooks personalizados de React
│   ├── useGetWidth.tsx    # Hook para obtener dimensiones
│   └── index.ts           # Exportaciones
└── ui/                     # Componentes de interfaz
    ├── components/         # Componentes reutilizables
    │   ├── Animation.tsx   # Wrapper de animaciones
    │   ├── Header.tsx      # Navegación principal
    │   └── ...
    └── containers/         # Secciones de la página
        ├── Projects.tsx    # Sección de proyectos
        ├── Stack.tsx       # Tecnologías
        └── ...
```

## 🎨 Secciones del Portfolio

- **Header**: Navegación principal con scroll suave
- **Hero**: Presentación principal con animaciones
- **Proyectos**: Showcase de trabajos destacados
- **Stack Tecnológico**: Herramientas y tecnologías dominadas
- **Educación**: Formación académica y certificaciones

## 🌟 Mejoras Implementadas

### ✅ Correcciones Críticas
- Solución de errores de construcción y dependencias
- Corrección de warnings de React Hooks
- Actualización de dependencias de seguridad

### ✅ Mejoras de Rendimiento
- Optimización de imágenes con Next.js Image
- Implementación de lazy loading
- Mejora en estrategia de carga de componentes

### ✅ Accesibilidad
- Textos alternativos descriptivos en imágenes
- Navegación por teclado mejorada
- ARIA labels y roles semánticos
- Estados de focus visibles

### ✅ TypeScript y Calidad
- Reemplazo de tipos `any` con interfaces específicas
- Mejora en tipado de props y componentes
- Validación de tipos más estricta

### ✅ SEO y Metadatos
- Meta tags completos y optimizados
- Open Graph tags para redes sociales
- Twitter Cards implementation
- Mejora en títulos y descripciones

## 🚀 Deployment

### Vercel (Recomendado)

El método más fácil para desplegar es usar [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

1. Conecta tu repositorio de GitHub
2. Vercel detectará automáticamente que es un proyecto Next.js
3. El deployment se realizará automáticamente

### Otros Proveedores

También puedes desplegar en:
- **Netlify**: Con soporte para Next.js
- **AWS Amplify**: Para aplicaciones React/Next.js
- **Railway**: Deployment simplificado
- **DigitalOcean App Platform**: Con soporte para contenedores

## 📧 Contacto

- **Portfolio**: [maidedpo.vercel.app](https://maidedpo.vercel.app) (cuando esté desplegado)
- **GitHub**: [@MaidedPonce](https://github.com/MaidedPonce)
- **LinkedIn**: [Maided Hernandez](https://linkedin.com/in/maided-hernandez)

## 📄 Licencia

Este proyecto es personal y está disponible para referencia. Si deseas usar alguna parte del código, por favor contacta al autor.

---

Desarrollado con ❤️ por [Maided Hernandez](https://github.com/MaidedPonce)
