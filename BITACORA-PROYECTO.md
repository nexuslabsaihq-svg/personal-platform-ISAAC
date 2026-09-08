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
