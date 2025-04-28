# Wortise Technical Test - CMS de Artículos

Este es un proyecto desarrollado como parte de una prueba técnica para la posición de **Desarrollador/a Fullstack (Next.js)**.

## Proyecto en Producción

- **Link**: [wortise-technical-test.vercel.app](https://wortise-technical-test.vercel.app)
- **Usuario de prueba**: `juanperez@gmail.com`
- **Contraseña**: `12345678`

## Tecnologías utilizadas

- **Next.js** (Page Router)
- **TypeScript**
- **Zod** (validaciones)
- **BetterAuth** (autenticación)
- **Tailwind CSS** (estilos)
- **React Hook Form** (formularios)
- **TanStack Query** (manejo de queries y caché)
- **MongoDB** (driver nativo)

---

## Funcionalidades requeridas

### Autenticación

- [x] Registro de nuevos usuarios
- [x] Inicio y cierre de sesión
- [ ] Protección del registro con un captcha
- [x] Uso de BetterAuth como solución de autenticación
- [x] Rutas privadas protegidas para usuarios autenticados

### Artículos

- [x] Crear artículos
  - [ ] (CRUD solo por el autor)
- [x] Leer artículos
- [x] Actualizar artículos
- [x] Eliminar artículos
- [x] Listado paginado de artículos creados
- [x] Vista de detalle de cada artículo, con nombre del autor

### Página principal del CMS

- [] Listado de autores registrados
- [] Cantidad total de artículos publicados por cada autor

### Buscador (Server-side)

- [x] Búsqueda de artículos filtrando por:
  - [x] Título
  - [x] Texto
  - [] Nombre del autor

---

## Criterios técnicos implementados

- [x] Tipado fuerte en todo el proyecto (frontend y backend)
- [x] Validaciones robustas con **Zod** en formularios y endpoints
- [x] Consultas eficientes a la base de datos
- [x] Uso correcto de **TanStack Query** y hooks personalizados
- [x] Prevención de renders innecesarios
- [x] Código limpio y organizado
- [] Interfaz responsive
- [x] UX mínima pero cuidada

---
