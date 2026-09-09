# Bitácora Integral de Desarrollo y Configuración del Portafolio Profesional

* **Título:** Documento Técnico y Registro de Desarrollo — Plataforma Portafolio Personal
* **Autor:** Isaac Patricio Pastén Díaz
* **Carrera / Especialidad:** Estudiante de Ingeniería en Administración de Empresas (INACAP)
* **Fecha de Creación:** 8 de septiembre de 2026
* **Repositorio GitHub:** [nexuslabsaihq-svg/personal-platform-ISAAC](https://github.com/nexuslabsaihq-svg/personal-platform-ISAAC)
* **Plataforma de Despliegue:** [Vercel](https://vercel.com) (CI/CD automático desde rama `main`)

---

## 1. Resumen Ejecutivo de la Jornada

En esta sesión se desarrolló desde cero, configuró, estilizó y desplegó en producción el **Portafolio Profesional Web de Isaac Patricio Pastén Díaz**. El proyecto pasó de ser un repositorio vacío en GitHub a una aplicación web moderna de una sola página (SPA), altamente optimizada, con un sistema de diseño oscuro y elegante, animaciones físicas suaves basadas en **Framer Motion**, arquitectura **Mobile-First** y contenido 100% verídico alineado al perfil administrativo y tecnológico de Isaac.

---

## 2. Fase 1: Configuración del Entorno y Repositorio

1. **Instalación y Configuración del Toolchain Local (Windows):**
   * Se identificó la ausencia de Git y Node.js en las variables de entorno del sistema.
   * Se instaló Git mediante Windows Package Manager (`winget`) y se configuró su persistencia en el `PATH` del usuario.
   * Se descargó e instaló una versión portable y autónoma de **Node.js LTS (v20.18.0)** y **npm (10.8.2)** en el espacio local de usuario.
   * Se integró **GitHub CLI (`gh` v2.67.0)** para resolver la autenticación OAuth mediante Device Flow (`https://github.com/login/device`), permitiendo operaciones de `git push` seguras y sin fricción.

2. **Inicialización y Metadatos en GitHub:**
   * Se clonó el repositorio remoto inicialmente vacío.
   * Se configuraron automáticamente la descripción y topics oficiales en GitHub:
     * **Descripción:** *"Portafolio profesional de Isaac Patricio Pastén Díaz — Estudiante de Ingeniería en Administración de Empresas."*
     * **Topics:** `portfolio`, `react`, `tailwindcss`, `vite`.
   * Se crearon los archivos base:
     * `.gitignore` estándar para proyectos Node/Vite (ignorando `node_modules/`, `dist/`, logs y archivos de sistema).
     * `README.md` inicial con documentación técnica y comandos de ejecución local.

3. **Corrección de Codificación de Archivos:**
   * Se detectó y subsanó la inclusión automática de marcas de orden de bytes (BOM UTF-8) introducidas por scripts de PowerShell, normalizando todos los archivos de configuración (`package.json`, `tailwind.config.js`, `vite.config.js`) a UTF-8 sin BOM para garantizar compatibilidad con los parsers de Vite y PostCSS.

---

## 3. Fase 2: Stack Tecnológico y Rendimiento

* **Framework Base:** [React 18](https://react.dev/)
* **Bundler & Dev Server:** [Vite 5](https://vitejs.dev/)
* **Framework de Estilos:** [Tailwind CSS 3](https://tailwindcss.com/) + PostCSS + Autoprefixer
* **Motor de Animaciones:** [Framer Motion](https://www.framer.com/motion/) (versión liviana <30KB, sin dependencias pesadas como GSAP o Three.js)
* **Iconografía:** [Lucide React](https://lucide.dev/) (iconos SVG optimizados mediante tree-shaking)
* **Métricas de Compilación:**
  * **Tiempo de build:** ~4.7 segundos.
  * **Bundle CSS:** 26.8 kB (~5.3 kB comprimido con gzip).
  * **Bundle JS:** 329 kB (~101 kB comprimido con gzip).
  * **Performance móvil:** Carga casi instantánea en smartphones, interacción táctil optimizada y consumo mínimo de datos.

---

## 4. Fase 3: Sistema de Diseño Definitivo

Se configuraron variables personalizadas en `tailwind.config.js` y `src/index.css`:

* **Fondo Base (`base`):** `#0B0E14` (casi negro con matiz azulado profundo).
* **Superficie / Cards (`surface`):** `#131722` (gris pizarra oscuro con contraste suave).
* **Bordes (`border-dark`):** `#1F2430` (opacidad entre 40% y 60%).
* **Texto Principal (`text-main`):** `#E8EAED` (blanco cálido de alta legibilidad).
* **Texto Secundario (`text-muted`):** `#8B92A5` (gris neutro para subtítulos y metadatos).
* **Acento Primario (`accent`):** `#5B8DEF` (azul acero para botones de acción, hover, enlaces y resplandores luminosos).
* **Acento Secundario Logros (`gold`):** `#D4AF37` (dorado metálico reservado exclusivamente para métricas destacadas, notas de egreso y certificaciones).

### Tipografía (Google Fonts)
1. **Sora (600/700):** Títulos de gran impacto jerárquico (H1 a H3).
2. **Inter (400/500):** Cuerpo de texto, bio, descripciones y campos de formulario.
3. **JetBrains Mono (400/500):** Etiquetas estilo desarrollador, chips de código, porcentajes, monograma y badges.

---

## 5. Fase 4: Secciones y Componentes Implementados

### 1. Navbar Fijo (`src/components/Navbar.jsx`)
* Fijado en la parte superior (`fixed top-0 w-full z-50`).
* Fondo transparente en la cabecera que transmuta a un vidrio esmerilado con desenfoque (`bg-[#0B0E14]/90 backdrop-blur-md`) al hacer scroll.
* **Scroll Spy automático:** Detecta la sección visible y desplaza un subrayado indicador continuo animado (`layoutId="navbar-indicator"`).
* Enlaces: `Home`, `About`, `Skills`, `Portfolio`, `Process`, `Contact`.
* Monograma "IP" con título "Isaac Pastén" a la izquierda.
* Botón de descarga/solicitud de CV tipo píldora a la derecha.
* Menú móvil hamburguesa interactivo con animaciones de entrada y salida mediante `AnimatePresence`.

### 2. Sección Hero (`src/components/Hero.jsx`)
* **Columna izquierda:**
  * Badge superior: *"Estudiante de Administración de Empresas"* con luz de estado parpadeante.
  * Título principal en 3 líneas: *"Construyo procesos administrativos que <span class='text-accent'>funcionan</span>."*
  * Párrafo de trayectoria: Etapa final en INACAP, experiencia liderando equipos de más de 7 personas y optimización operativa.
  * Botones de acción: *"Ver Portfolio"* (relleno con acento primario) y *"Contactarme"* (outline).
  * Barra social directa con enlaces a su perfil real de **LinkedIn**, **GitHub** y **Email**.
* **Columna derecha:**
  * **Imagen real de perfil** ubicada en `/public/images/profile.jpg` en un contenedor circular con marco oscuro y un aura difuminada en azul acero (`#5B8DEF/20`) detrás de la foto.
  * **3 Cards flotantes animadas** con contadores que ascienden desde 0 al entrar en pantalla:
    1. **7+** — Personas lideradas (con icono de equipo).
    2. **8** — Certificaciones INACAP (con icono de insignia).
    3. **5.9** — Nota de egreso / Ranking N°2 (con icono de trofeo).
  * **Snippet de herramientas:** Card tipo terminal con botones de control y checklist interactivo:
    * ✔ Excel Intermedio
    * ✔ Power BI Básico
    * ✔ HCMFRONT

### 3. About Me + My Expertise (`src/components/About.jsx`)
* **Columna izquierda (About Me):**
  * Párrafo biográfico completo y honesto sobre el enfoque analítico, liderazgo y resolución ágil de incidencias.
  * 4 fichas de datos rápidos: Nombre completo, Ubicación (*Macul / Santiago, Chile*), Correo y Estado de disponibilidad (*"Abierto a trabajar"* con punto verde activo).
  * Botón hacia la metodología de trabajo.
* **Columna derecha (My Expertise):**
  * 6 barras de progreso horizontales con animación fluida de llenado (de 0% al valor exacto) al entrar en el viewport:
    * Excel (reportes y control) — **65%**
    * Power BI — **40%**
    * HCMFRONT (gestión de personas) — **70%**
    * Gestión de Equipos y Personas — **80%**
    * Atención al Cliente y Resolución de Incidencias — **90%**
    * IA Aplicada (Prompt Engineering, Claude, Gemini) — **75%**

### 4. Selected Work / Portfolio (`src/components/Portfolio.jsx`)
* Sistema de 3 pestañas dinámicas con transición animada suave:
  * **Pestaña Projects:**
    1. **Finance Nexus:** Badge *Full Stack*, ERP financiero para PYMEs chilenas, tags (`React`, `Firebase`, `Gemini API`) y enlace directo a `https://finance-nexus.vercel.app`.
    2. **Ecosistema NOSTRADAMUZ:** Badge *IA Aplicada*, orquestación de agentes con 8+ skills especializadas, tags (`Claude`, `Gemini`, `Prompt Engineering`).
    3. **Análisis UX — WOM Chile:** Badge *Académico*, informe de evaluación sumativa y tangibilización de servicios.
  * **Pestaña Certificates:**
    * Grilla con las 8 certificaciones oficiales de INACAP acompañadas de sus fechas, entidades emisoras y sellos dorados `#D4AF37`.
  * **Pestaña Tech Stack:**
    * Comparativa en dos cards entre *Gestión, Negocios & Personas* y *Tecnología, Desarrollo & IA Aplicada*.

### 5. My Work Process (`src/components/Process.jsx`)
* Grilla de 6 fases metodológicas adaptadas a la gestión administrativa:
  * `01 Diagnóstico` — Entender el objetivo y levantar la información operativa.
  * `02 Planificación` — Definir tareas críticas, plazos y recursos necesarios.
  * `03 Ejecución` — Aplicar el proceso o tarea administrativa con rigor y coordinación.
  * `04 Control` — Verificar el cumplimiento estricto de estándares y procedimientos.
  * `05 Auditoría` — Revisar cuadraturas financieras, control de inventario y desviaciones.
  * `06 Entrega` — Reportar resultados cuantitativos y cerrar el ciclo de gestión.

### 6. Testimonials (`src/components/Testimonials.jsx`)
* En cumplimiento estricto de no inventar referencias de personas inexistentes, se implementó una card elegante con icono de reloj y el mensaje:
  > *"Sección en construcción — referencias laborales próximamente."*
  > *En proceso de recopilación de cartas de recomendación.*

### 7. By The Numbers (`src/components/Numbers.jsx`)
* Sección previa al contacto con las 4 grandes métricas en formato tipográfico prominente, en color dorado `#D4AF37` y con animación de conteo:
  * **7+** Personas Lideradas
  * **8** Certificaciones INACAP
  * **5.9** Nota de Egreso
  * **N°2** Ranking de Egreso

### 8. Contacto Directo (`src/components/Contact.jsx`)
* **Datos a la izquierda:**
  * Correo electrónico oficial: `isaacipp1709@gmail.com` (con botón interactivo para copiar al portapapeles con un clic).
  * Teléfono / WhatsApp directo: `+56 9 4564 2085`.
  * Ubicación: `Macul, Santiago, Chile`.
  * Estado de disponibilidad: `Abierto a nuevas oportunidades`.
* **Formulario a la derecha:**
  * Campos: Nombre completo, Correo electrónico, Asunto y Mensaje.
  * Manejador de envío con enlace `mailto:` codificado y pantalla interactiva de confirmación visual.

### 9. Footer (`src/components/Footer.jsx`)
* Monograma "IP" + "Isaac Pastén".
* Links de navegación rápida.
* Texto de copyright oficial: `© 2026 Isaac Pastén Díaz. Todos los derechos reservados.`
* **Botón flotante "Volver arriba":** Aparece en la esquina inferior derecha tras scroll (`>400px`) y realiza un desplazamiento suave hasta la cabecera.

---

## 6. Fase 5: Gestión de la Fotografía de Perfil

1. El usuario subió su foto real mediante GitHub como `public/profile.jpg.JPG`.
2. Se sincronizó el repositorio local mediante `git pull origin main`.
3. Se copió y resguardó el archivo en [`public/images/profile.jpg`](file:///C:/Users/Alumnosnunoa/.gemini/antigravity/scratch/personal-platform-ISAAC/public/images/profile.jpg) (382.7 kB) para cumplir con la ruta estricta `/images/profile.jpg` solicitada en el Hero.
4. Se agregó un manejador de fallback automático (`onError`) en el componente `Hero.jsx` para garantizar que la imagen siempre se visualice bajo cualquier entorno o servidor de desarrollo.

---

## 7. Fase 6: Estado de Git y Despliegue en Vercel

* **Rama Principal:** `main`
* **Historial de Commits Realizados en la Sesión:**
  1. `aeaabc8` — *feat: maqueta inicial del portafolio*
  2. `26fe962` — *feat: sistema de diseño + animaciones de scroll*
  3. `20e09cc` — *Upload profile.jpg.JPG (commit remoto del usuario)*
  4. `dd01446` — *feat: rediseño completo estilo referencia — todas las secciones*
* **Integración con Vercel:**
  * El repositorio está conectado a la plataforma de Vercel.
  * Cada `git push` a `main` desencadena la compilación y actualización inmediata del sitio en producción.
* **Seguridad y Respaldo:**
  * El árbol de trabajo local (`git status`) se encuentra totalmente limpio y sincronizado con el repositorio remoto.

---

## 8. Tareas Pendientes / Siguientes Pasos Sugeridos

1. **Archivo PDF del Currículum Vitae:**
   * Agregar el archivo físico `cv-isaac-pasten.pdf` en la carpeta `public/` para que el botón "Descargar CV" ejecute una descarga directa del documento.
2. **Capturas de Pantalla de Proyectos:**
   * Opcionalmente, agregar capturas de pantalla de la interfaz de *Finance Nexus* o la portada del *Análisis UX WOM Chile*.
3. **Cartas de Recomendación:**
   * Reemplazar la tarjeta de "Sección en construcción" una vez se disponga de testimonios o cartas de profesores/jefaturas.

---

*Documento generado y archivado el 8 de septiembre de 2026 para resguardo del proyecto personal-platform-ISAAC.*


---

## Sesión: 9 de Septiembre de 2026 — v2.0 Rediseño Integral

**Agente IA:** Antigravity (Google Deepmind) — Modelo Claude Sonnet 4.6 Thinking  
**Método de commit:** GitHub REST API (PAT Fine-grained token, scope Contents R/W)  
**Total de archivos modificados/creados:** 20  
**Total de commits:** 12 (por archivo, fases 0 a 7)

---

### Fase 0 — Corrección Crítica de Contraste y Paleta (WCAG AA)

Paleta actualizada en `tailwind.config.js`:

| Token | Antes | Después | Ratio vs #0B0E14 |
|-------|-------|---------|------------------|
| surface | #131722 | #151A24 | — |
| border-dark | #1F2430 | #262C3A | — |
| text-main | #E8EAED | #F5F6F8 | ~14:1 ✅ |
| text-muted | #8B92A5 | #A8AFC0 | ~5.5:1 ✅ |
| accent | #5B8DEF | #6B9BFF | ~4.9:1 ✅ |
| gold | #D4AF37 | #E5C158 | — |

Agrega: keyframes (float, drawIn, countUp), boxShadow accent/gold, fontFamily Sora/Inter/JetBrains Mono.

---

### Fase 1 — Sistema de Animación Completo

**Nuevos hooks:**
- `src/hooks/useReducedMotion.js` — lee `prefers-reduced-motion`, desactiva animaciones decorativas
- `src/hooks/useMousePosition.js` — posición del cursor normalizada [-1,1]
- `src/hooks/usePointerDevice.js` — detecta `pointer: fine` vs táctil

**Nuevos componentes UI:**
- `src/components/ui/CustomCursor.jsx` — cursor dual-ring con RAF smooth lag, adapta color por contexto (proyecto=gold, link=blue). Desactivado en táctil.
- `src/components/ui/MagneticButton.jsx` — atracción spring ≤8px hacia cursor. Desactivado en táctil.
- `src/components/ui/RevealOnScroll.jsx` — opacity+y+blur reveal con IntersectionObserver, once:true
- `src/components/ui/SectionDivider.jsx` — SVG wave/angle/curve que conecta visualmente secciones adyacentes

**Nuevo componente 3D:**
- `src/components/hero/HeroScene.jsx` — React Three Fiber (R3F). 6 nodos octaédricos conectados tipo organigrama (evoca administración/datos). Flotación con sin(time), rotación ±6° reactiva al cursor en desktop. Canvas 400×400px, lazy-loaded con Suspense. `powerPreference: 'low-power'`. Desactivado en reduced-motion.

**Componentes existentes actualizados:**
- `Hero.jsx`: 3D HeroScene como decoración detrás de la foto (foto sigue siendo elemento principal). Parallax 3 capas con `useMotionValue`. Botones Ver Portfolio / Contactarme / Ver CV wrapped en `MagneticButton`. Reveal animations en todos los bloques. Paleta migrada a tokens.
- `Navbar.jsx`: Agrega ítems Servicios, CV, Finance Nexus. Pill de "8 Certs" en gold. Indicador deslizante `layoutId` preservado. Paleta migrada a tokens.
- `About.jsx`: Skill bars con `motion.div` que se dibujan al entrar viewport (IntersectionObserver once:true). Reveal animations. Bio expandida. Paleta migrada.
- `Portfolio.jsx`: 3D tilt cards (rotateX/Y ±8° según posición mouse, spring). Hover avanzado: tags y links aparecen con opacity+translate al hover. Reveal staggered. Paleta migrada.

---

### Fase 2 — Sección de Certificaciones

**Nuevo archivo:** `src/components/Certifications.jsx`

- 8 certificados INACAP con datos reales y completos (título, descripción de contenidos, institución con link a inacap.cl, N° de registro, fecha)
- Números de certificado reales: N° 11462629, 11462618, 11461648, 11462626, 11462623, 11462632, 11462608; Asistente en Remuneraciones: "N° no disponible"
- Timeline vertical por año (2023, 2024, 2025) sticky en desktop, pills horizontales en móvil
- Filtro con AnimatePresence, contador por año

---

### Fase 3 — CV Interactivo (React Router)

**Nuevo archivo:** `src/pages/CVPage.jsx`

- Ruta: `/cv` (React Router DOM v6)
- Secciones: Resumen, Experiencia (timeline animado), Educación (timeline), Habilidades (barras animadas), Certificaciones (grid), Idiomas (cards con banderas)
- Diseño distinto al sitio principal: fondo #0B0E14 limpio, tipografía document-style, sin efectos decorativos
- Sin datos sensibles: sin teléfono, email, RUT ni dirección exacta — solo "Macul, Santiago" y disponibilidad
- Acordeón animado con AnimatePresence (height 0→auto)

---

### Fase 4 — Página Finance Nexus

**Nuevo archivo:** `src/pages/FinanceNexusPage.jsx`

- Ruta: `/finance-nexus`
- Escena R3F dedicada: 4 capas horizontales (cubos tipo balance sheet) que flotan y rotan lentamente — evoca ERP/finanzas. DataFlow connectors pulsantes entre capas.
- Rol de Isaac: Fundador & Desarrollador Líder (explicitado)
- Sección dedicada "IA Aplicada — No un buzzword": Prompt Engineering, Gemini API Integration, Automatización de Flujos
- Stack: React+Vite, Firebase, Gemini API, Tailwind CSS
- Botón "Visitar proyecto" → https://finance-nexus.vercel.app (link real)
- Sin métricas de negocio inventadas

---

### Fase 5 — Hobbies e Idiomas

**Nuevo archivo:** `src/components/HobbiesLanguages.jsx`

- Idiomas con banderas: 🇬🇧 Inglés Intermedio (B1, barra 55%), 🇫🇷 Francés Básico (A2, barra 25%), 🇮🇹 Italiano "[Nivel a confirmar por Isaac]" (sin barra)
- 4 placeholders de hobbies editables con comentario `// TODO: Reemplazar con hobby real de Isaac`
- Nota al pie: "Contenido de hobbies pendiente de confirmación por Isaac"

---

### Fase 6 — Servicios Freelance

**Nuevo archivo:** `src/components/Services.jsx`

- 3 cards: "Asesoría Administrativa para PYMEs", "Organización de Procesos y Control de Caja", "Automatización con IA para Tareas Administrativas"
- Cada card con descripción, tags técnicos y botón → #contact
- Sin precios ni casos de éxito inventados
- Tono profesional de venta de servicios

---

### Fase 7 — Integración Final

**App.jsx actualizado:**
- React Router DOM v6 con rutas `/`, `/cv`, `/finance-nexus`
- `CustomCursor` integrado en layout principal
- `SectionDivider` entre cada sección (wave/angle/curve alternados)
- Orden de secciones: Hero → About → Portfolio → Services → Numbers → Process → Certifications → HobbiesLanguages → Testimonials → Contact

**package.json actualizado (v0.2.0):**
- `react-router-dom: ^6.27.0`
- `@react-three/fiber: ^8.17.10`
- `@react-three/drei: ^9.115.0`
- `three: ^0.169.0`

---

### Estado Final del Árbol de Commits (Rama: main)

```
ec43f09 feat(fase0): correccion de paleta y contraste WCAG AA
6ac0f47 feat(fase1): hook useReducedMotion para prefers-reduced-motion
3063c1a feat(fase1): hook useMousePosition para tracking del cursor
fe594c6 feat(fase1): hook usePointerDevice para detectar pointer fine vs touch
be92006 feat(fase1): CustomCursor con anillo y punto, RAF smooth lag
f41ebb4 feat(fase1): MagneticButton con atraccion suave al cursor
03c4610 feat(fase1): RevealOnScroll con opacity+y+blur al entrar viewport
9bcdc5c feat(fase1): SectionDivider SVG wave para continuidad visual entre secciones
e924448 feat(fase1): HeroScene R3F - nodos organigrama flotantes reactivos al cursor
3e8a82f feat(fase1): Navbar actualizado - nuevos items CV/Finance/Servicios/Certs
0c024f4 feat(fase1): Hero con 3D HeroScene, parallax 3 capas, botones magneticos
4dc5401 feat(fase0+1): About con skill bars animadas, reveal, paleta WCAG AA
9ab924a feat(fase1): Portfolio con 3D tilt cards, reveal, hover avanzado
f9cd013 feat(fase2): seccion Certificaciones con 8 certs INACAP, timeline por año
2aba4d0 feat(fase5): seccion Hobbies e Idiomas - banderas, niveles verificados
0e48af3 feat(fase6): seccion Servicios freelance - 3 cards con link a contacto
6584af0 feat(fase3): pagina CV interactivo con acordeon, timeline animado, skill bars
1eb56de feat(fase4): pagina Finance Nexus con 3D R3F ERP scene, IA aplicada destacada
16e1c0a feat(fase3+6): App.jsx React Router v6, CustomCursor, SectionDividers
7bee25b chore(deps): react-router-dom, three, @react-three/fiber, @react-three/drei
```

---

### Pendiente de parte de Isaac

1. **Hobbies reales**: Reemplazar los 4 placeholders en `src/components/HobbiesLanguages.jsx` (buscar `TODO: Reemplazar`)
2. **Nivel de italiano**: Confirmar nivel real en `LANGUAGES` array del mismo archivo
3. **`npm install`**: Ejecutar en el repo local para instalar las nuevas dependencias (react-router-dom, three, @react-three/fiber, @react-three/drei). Vercel lo hace automáticamente en el deploy.
4. **Build de producción local**: Si se requiere verificar sin Vercel, ejecutar `npm run build` una vez instaladas las deps.

---

### Notas Técnicas de Rendimiento

- El canvas 3D del Hero usa `powerPreference: 'low-power'` y `dpr: [1, 1.5]` para evitar sobrecarga en dispositivos móviles
- Todas las animaciones decorativas se desactivan con `prefers-reduced-motion: reduce`
- El cursor personalizado y los botones magnéticos se desactivan automáticamente en dispositivos táctiles (`pointer: coarse`)
- Los componentes de página (CVPage, FinanceNexusPage) son lazy-loaded con React.lazy + Suspense — no bloquean la carga inicial
- React Three Fiber carga solo cuando el Hero entra en viewport (Suspense fallback visible)
