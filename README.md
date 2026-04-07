# DNA EVOLUCIONA - Premium Landing Page (Portfolio Case Study)

![DNA Rediseño](https://img.shields.io/badge/Estado-Completado-brightgreen?style=for-the-badge) ![Tech Stack](https://img.shields.io/badge/Stack-HTML5%20|%20CSS3%20|%20JSVainilla-blue?style=for-the-badge) ![Metodología](https://img.shields.io/badge/Metodolog%C3%ADa-AI--Driven%20Development-orange?style=for-the-badge) ![Licencia](https://img.shields.io/badge/Propiedad-Prohibida%20su%20venta-red?style=for-the-badge)

🟢 **[Ver Despliegue en Vivo: GitHub Pages](https://kodivante.github.io/dnaevoluciona/)**

Este repositorio contiene el código fuente para el rediseño conceptual y funcional de la Landing Page de **DNA EVOLUCIONA**. Este proyecto nace como un caso práctico de demostración ante la restricción de mostrar los desarrollos reales de mi agencia (sujetos a estrictos acuerdos de confidencialidad y NDA con mis clientes). 

El objetivo principal de este rediseño es fungir como una pieza de portafolio que demuestre dos pilares fundamentales:
1. **Dominio profundo del UI/UX** enfocado en altas tasas de conversión para e-commerce.
2. **Capacidad de integración de IA Autónoma** en el flujo de trabajo, lo que me permite maquetar y desplegar interfaces complejas en tiempos récord.

---

## 🚀 Características Clave del Rediseño

Frente a la versión anterior de la landing page, se incorporaron las siguientes mejoras estratégicas:

- **Dark Mode (Modo Obsidiana):** Al tratarse de suplementación deportiva, los fondos blancos restan agresividad. El uso de tonos carbón enfatiza el color corporativo (`#39ff14` Neón) creando una psicología de impacto, velocidad y "alta energía".
- **Sistema Glassmorphism:** Implementé contenedores con desenfoque trasero (`backdrop-filter`) que le otorgan un aspecto "High-Term" visualmente muy limpio y en tendencia (inspirado en UI moderno de marcas top internacionales).
- **Responsive Navigation Avanzado:** El menú móvil no es un "dropdown" genérico. Implementé un panel `Overlay` a 100vh que se desliza lateralmente, garantizando que el usuario tenga una experiencia inmersiva típica de una app nativa, no de una web tradicional.
- **Scroll Reveal Asíncrono:** Para mantener el interés en el scroll down, integré micro-animaciones en cascada generadas al vuelo usando lógica nativa matemática con `.getBoundingClientRect` en JS, prescindiendo del peso de librerías extrañas que afectarían los Core Web Vitals y el SEO de Google.

---

## 🛠 Arquitectura Tecnológica

La arquitectura se centró en "Rendimiento Primero" (Performance-First). No se utiliza ningún framework de abstracción pesada como Bootstrap o Tailwind, demostrando la capacidad de control atómico del *stack* base:

- **HTML5 Semántico:** Estructuras bajo etiquetas precisas (`header`, `main`, `section`, `nav`, `footer`) y un control riguroso bajo formato CSS **BEM (Block, Element, Modifier)** garantizando un código de fácil mantenimiento para equipos a escala.
- **CSS3 Puro:** Utilización extensa de CSS Custom Properties (`:root`), Flexbox y CSS Grid para layouts bidimensionales (sección Educación y Cards).
- **Control Vectorial (Boxicons):** Gestión optimizada de glifos e íconos para ahorrar miles de requests HTTP.

### Organigrama del Proyecto
```text
DNA_EVOLUCIONA/
├── index.html                   # Core Markup Semántico y Estructura
├── README.md                    # Documentación y Log de Arquitectura
├── kodivante_agent_prompt.md    # Configuración de base del Agente IA Nativo
└── assets/
    ├── css/
    │   └── style.css            # Estilos globales, Variables y Media-Queries
    └── js/
        └── main.js              # Lógica de componentes interactivos y Observer
```

---

## 🤖 El Modelo: Desarrollo Acelerado e Integración de IA

La maquetación de este proyecto sirvió no solo como ejercicio de UI/UX, sino como demostración del **flujo de ingeniería de prompts** y uso de mi propio "AI Coding Agent" calibrado según mi agencia *Kodivante*.

### ¿Cómo sistematicé la producción con LLMs?

1. **Context-Aware AI (Agente KDA v1.4 - DNA Specific):** Antes de iniciar la codificación, preparé mi entorno instanciando a mi Agente Autónomo (Kodivante Dev Architect). En esta iteración (v1.4.0-DNA), el archivo de configuración (*System Prompt*) fue calibrado exclusivamente para satisfacer los requerimientos y la filosofía de diseño estricta de la marca **DNA EVOLUCIONA**. Este documento funge como la "personalidad técnica" inyectada al LLM y le enseña en crudo la estructura de carpetas de mi agencia (`/assets/css`, `/assets/js`), metodologías de código (BEM) y la implementación de mi estándar visual. *Puedes consultar directamente el texto íntegro de este system prompt en el archivo `kodivante_agent_prompt.md` o desplegando el siguiente acordeón:*

<details>
<summary><strong>👁️ Ver Configuración del Agente KDA v1.4 (Click para expandir)</strong></summary>

```markdown
# KODIVANTE SYSTEM PROMPT (KDA v1.4)
## MISSION: REDISEÑO DNA EVOLUCIONA

{
  "AGENT_NAME": "Kodivante Dev Architect (KDA)",
  "VERSION": "1.4.0-DNA",
  "ROLE": "Senior Frontend Engineer & UI/UX Expert",
  "AGENCY_STANDARD": "Kodivante High-End Enterprise",
  "CURRENT_PROJECT": "DNA EVOLUCIONA Landing Page",
  "FRAMEWORKS_ALLOWED": ["Vanilla HTML5", "Vanilla CSS3", "Vanilla JS (ES6+)"]
}

## 🧠 CORE SYSTEM INSTRUCTIONS

A partir de este momento actúas como el **Arquitecto Frontend Senior de Kodivante**. Has sido instanciado Específicamente con el fin de maquetar, estructurar y codificar el rediseño absoluto de la Landing Page del cliente **"DNA EVOLUCIONA"** (una marca de suplementación corporativa). Tu objetivo es maximizar la retención y la conversión de usuarios basándote en los siguientes principios inquebrantables.

### 1. ARQUITECTURA DEL PROYECTO
No sugieras librerías de terceros (React, Tailwind, Bootstrap). DNA EVOLUCIONA requiere tiempos de carga de milisegundos. Debes estructurar los archivos de la siguiente manera excluyente:
- Directorio Raíz: `/index.html` (Markup Semántico Puro)
- Estilos Locales: `/assets/css/style.css` 
- Interacciones y UI Events: `/assets/js/main.js`

### 2. FILOSOFÍA VISUAL DNA EVOLUCIONA
La marca DNA debe evocar agresividad deportiva, éxito corporativo y alta energía. Aplica los siguientes tokens de diseño:
- **Tema Base:** Dark Mode estricto. Fondos de grises profundos (carbón) `#050505` a `#111111` para resaltar los productos.
- **Acento (Color Principal):** Verde Neón (`#39ff14`). Utilízalo solo en botones (Call to Actions) y en palabras críticas usando una clase `.text-neon`.
- **Efecto Glassmorphism:** Los contenedores de beneficios y los fondos de sección deben asemejar cristales oscuros utilizando `background: rgba(26,26,26,0.6)` con un `backdrop-filter: blur(15px)`.
- **Tipografía Excepcional:** Incluye dos ramas de Google Fonts. *Montserrat Italic* para títulos (transmitiendo velocidad), e *Inter* para lectura fluida.

### 3. METODOLOGÍAS Y ETIQUETAS
1. **Semántica Extrema:** Nunca utilices un `<div>` cuando exista una etiqueta semántica superior (`<header>`, `<main>`, `<section>`).
2. **Nomenclatura (BEM):** Usa convenciones BEM (Block, Element, Modifier). Ejemplo: `.hero__container`, `.button--ghost`.
3. **Manejo de CSS Variables:** El archivo `.css` debe iniciar controlando todo a nivel `:root`. Pondera media-queries a nivel "Mobile-First".

### 4. ANIMACIONES Y MÓVIL (APP-LIKE EXPERIENCE)
1. **Drawer Móvil:** El navbar en móvil (`max-width: 767px`) no será de tipo bloque en caída vertical. Generarás un Overlay a `100vh` deslizando elegantemente (`right: 0`) para dar percepción de App nativa.
2. **Scroll Observer:** Implementa JavaScript puro asíncrono para revelar visualmente (`.reveal`) las tarjetas de beneficios a medida que haces *scroll*. Agrega retrasos progresivos (`transition-delay`) en interfaces Grid.

> INICIANDO SECUENCIA. PROCESANDO CAPTURAS ANTIGUAS DE DNA EVOLUCIONA. GENERANDO REESCRITURA TOTAL DE LA VISTA DEL CLIENTE BAJO KDA V1.4.
```
</details>
2. **Evaluación de Datos Ópticos (Computer Vision):** Extraje la UI antigua, la alimenté al pipeline visual del Agente (LLM multimodal), el cual mapeó los mapas de calor implícitos, fallas de *Call to Actions* inoperables y retornos focales pobres, devolviendo la estrategia teórica del rediseño.
3. **Drafting (Text-to-Image):** Solicité al agente embebido desarrollar el "Concepto Visual" (Mockup HD) del rediseño en formato Dark Mode + Neón, validando la tesis estética sin siquiera abrir Figma.
4. **Autonomous Deployment (Zero to One):** El framework interno generó los archivos simultáneamente creando un ecosistema de despliegue instantáneo.

> El flujo tradicional (Wireframes > Mockups > Layout > JS Coding) se redujo drásticamente. Soy capaz de operar a la inteligencia artificial como un ingeniero Senior Frontend que orquesta un batallón de *Devs* bajo su mando.

---

## 📖 Referencia Técnica y Mapa Arquitectónico

A continuación se expone la guía arquitectónica generada para auditar este proyecto. Este documento traza un mapa topográfico directo entre el HTML semántico, sus variables CSS y el controlador interactivo JavaScript.

<details>
<summary><strong>📐 Ver Documentación Técnica Exhaustiva (Click para expandir)</strong></summary>

# Referencia Técnica Abierta: DNA EVOLUCIONA

Este documento sirve como la **Guía de Referencia Técnica y Arquitectónica** para el proyecto **DNA EVOLUCIONA**. Contiene un desglose detallado de la estructura del código, vinculando de forma precisa la interrelación entre la estructura (HTML), la presentación (CSS) y la interacción (JavaScript). 

Esta guía está diseñada para que cualquier desarrollador pueda navegar ágilmente por el código base, entender las decisiones de diseño mediante *Glassmorphism* y ubicar inmediatamente cada regla y clase clave.

---

## 1. Arquitectura Base y Variables Globales
La presentación del proyecto se construye sobre un sistema de diseño modular (Design System) basado en variables de CSS.

*   **Google Fonts & Reset:** `assets/css/style.css` (Líneas 1-3).
    *   Fuentes importadas: `Inter` (cuerpo de texto) y `Montserrat` (encabezados).
*   **Variables CSS (`:root`):** `assets/css/style.css` (Líneas 4-56).
    *   **Colores:** Define el color de fondo (`--body-color`), el verde neón de acento (`--neon-green`) y el brillo neón (`--neon-glow`).
    *   **Tipografía:** Tamaños base y variables para escalado responsive.
*   **Media Query de Tipografía:** `assets/css/style.css` (Líneas 58-69). Ajusta los tamaños tipográficos en pantallas `min-width: 968px`.
*   **Reinicios y Estilos Base:** `assets/css/style.css` (Líneas 71-111). Normalización, estilos para `body`, `h1-h4`, `a`, e `img`.
*   **Clases Reutilizables Generales:** `assets/css/style.css` (Líneas 112-151). Controlan la grilla (`.grid`), los contenedores (`.container`), y los acentos visuales (`.text-neon` y `.italic`).

---

## 2. Header y Menú de Navegación (Header Navigation)
El menú adopta un efecto de cristal desvanecido (*Glassmorphism*) cuando se realiza scroll y tiene una estructura adaptable a pantallas móviles mediante un menú lateral emergente.

*   **Estructura HTML:** `index.html` (Módulo: `#header` `<header>`).
*   **Estilos CSS:** `assets/css/style.css` (`.header`, `.scroll-header`, `.nav__menu`).
*   **Interacción JavaScript:** `assets/js/main.js`. (Toggle Menu y Scroll Header).

---

## 3. Hero Section (Inicio)
Es el "Top of the funnel". Impacta fuertemente con una imagen de fondo y call to actions centrados.

*   **Estructura HTML:** `index.html` (`#inicio`).
*   **Estilos CSS:** `assets/css/style.css` (`.hero`).
*   **Botones:** `assets/css/style.css` (`.button--neon`, `.button--ghost`).

---

## 4. Sección de Estadísticas (Stats Section)
Bloque flotante que solapa el fondo del Hero y aporta prueba social inmediata.

*   **Estructura HTML:** `index.html` (`.stats`).
*   **Estilos CSS:** `assets/css/style.css` (`.stats`, `.stats__container` con márgenes negativos).

---

## 5. Beneficios y Ecosistema (Glassmorphism Cards)
Esta sección aloja tarjetas que presentan modernidad usando abstracción CSS de Cristal.

*   La clase núcleo es `.glass` en  `assets/css/style.css`. Implementa un desenfoque usando `backdrop-filter: blur(16px);`.
*   El hover (`.glass:hover`) eleva las tarjetas en el eje Y y proyecta la neblina neón al fondo.

---

## 6. Sección de Educación y Banners Fotográficos
Tarjetas educativas de doble bloque para la oferta académica con animaciones hover en su imagen base usando `overflow: hidden`.

---

## 7. Animaciones de Entrada (Scroll Reveal) y Enlaces Activos
El diseño cuenta con su propio *motor* nativo asincrónico para inyectar animación al descender.

*   **Clases CSS Base:** `assets/css/style.css` (`.reveal` inicial en opacidad 0, `.reveal.active` inicial en 1).
*   **Control JS:** `assets/js/main.js` utiliza iteraciones `IntersectionObserver` o GetBoundingClientRect para activar y desactivar las clases sin usar librerías de 3eros al descender.

---

</details>

---

## 👤 Acerca del Desarrollador

Candidato buscando demostrar no solamente la escritura de un `<div class="card">` estándar, sino la habilidad para resolver problemas en la cima del mercado actual del desarrollo web: **Automatización con IA, Arquitecturas Rápidas, Visión de UX Avanzado y entendimiento profundo de conversión de retención**.
