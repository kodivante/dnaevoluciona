# Referencia Técnica Abierta: DNA EVOLUCIONA

Este documento sirve como la **Guía de Referencia Técnica y Arquitectónica** para el proyecto **DNA EVOLUCIONA**. Contiene un desglose detallado de la estructura del código, vinculando de forma precisa la interrelación entre la estructura (HTML), la presentación (CSS) y la interacción (JavaScript). 

Esta guía está diseñada para que cualquier desarrollador pueda navegar ágilmente por el código base, entender las decisiones de diseño mediante *Glassmorphism* y ubicar inmediatamente cada regla y clase clave.

---

## 1. Arquitectura Base y Variables Globales
La presentación del proyecto se construye sobre un sistema de diseño modular (Design System) basado en variables de CSS.

*   **Google Fonts & Reset:** `assets/css/style.css` (Líneas 1-3).
    *   Fuentes importadas: `Inter` (cuerpo de texto) y `Montserrat` (encabezados).
*   **Variables CSS (`:root`):** `assets/css/style.css` (Líneas 4-56).
    *   **Colores:** Define el color de fondo (`--body-color`), el verde neón de acento (`--neon-green`, L15) y el brillo neón (`--neon-glow`).
    *   **Tipografía:** Tamaños base y variables para escalado responsive.
*   **Media Query de Tipografía:** `assets/css/style.css` (Líneas 58-69). Ajusta los tamaños tipográficos en pantallas `min-width: 968px`.
*   **Reinicios y Estilos Base:** `assets/css/style.css` (Líneas 71-111). Normalización, estilos para `body`, `h1-h4`, `a`, e `img`.
*   **Clases Reutilizables Generales:** `assets/css/style.css` (Líneas 112-151). Controlan la grilla (`.grid`, L119), los contenedores (`.container`, L113), y los acentos visuales (`.text-neon`, L140 y `.italic`, L144).

---

## 2. Header y Menú de Navegación (Header Navigation)
El menú adopta un efecto de cristal desvanecido (*Glassmorphism*) cuando se realiza scroll y tiene una estructura adaptable a pantallas móviles mediante un menú lateral emergente.

*   **Estructura HTML:** `index.html` (Líneas 21-43).
    *   **Logotipo:** L24-26.
    *   **Menú (Lista de enlaces):** L28-36.
    *   **Botón Hamburguesa (Móvil):** L38-41.
*   **Estilos CSS:** `assets/css/style.css` (Líneas 152-235).
    *   `.header`: L153-162 (Posicionamiento fijo y transparente por defecto).
    *   `.scroll-header`: L163-167 (El script de JS inyecta esta clase para generar un fondo translúcido y aplicar `backdrop-filter: blur(10px)`).
    *   `.nav__menu` (Responsive): L197-211 (Se utiliza un menú superpuesto `position: fixed` oscurecido para pantallas `< 767px`).
*   **Interacción JavaScript:** `assets/js/main.js` (Líneas 1-24).
    *   **Toggle Menú:** L1-16 (Abre y cierra el menú lateral modificando `.show-menu`).
    *   **Scroll Header:** L18-24 (Detecta `scrollY >= 50` para agregar la clase css `.scroll-header`).

---

## 3. Hero Section (Inicio)
Es el "Top of the funnel". Impacta fuertemente con una imagen de fondo y un llamado a la acción centrado con tipografía de alto contraste.

*   **Estructura HTML:** `index.html` (Líneas 46-67).
*   **Estilos CSS:** `assets/css/style.css` (Líneas 236-293).
    *   `.hero`: L237-244 (Implementación de imagen de fondo y altura mínima a `100vh`).
    *   `.hero__bg-overlay`: L246-254 (Gradiente superpuesto para oscurecer la imagen de 0% a 100%).
*   **Componente - Botones:** (Líneas 294-350 de `style.css`).
    *   `.button--neon`: L307-311 (Fondo verde sólido con `box-shadow` resplandeciente). Hover en L313-317.
    *   `.button--ghost`: L319-326 (Fondo transparente con borde sutil). Hover en L328-331.

---

## 4. Sección de Estadísticas (Stats Section)
Bloque flotante que solapa el fondo del Hero y aporta prueba social inmediata al distribuir métricas clave.

*   **Estructura HTML:** `index.html` (Líneas 69-88). Tres contadores numéricos.
*   **Estilos CSS:** `assets/css/style.css` (Líneas 351-385).
    *   `.stats`: L352-357 (Se usa un margen negativo `margin-top: -3rem` y `z-index: 5` para montarse sobre la hero).
    *   `.stats__container`: L359-367 (Contenedor oscuro con `box-shadow: 0 20px 40px rgba(0,0,0,0.5)`).

---

## 5. Beneficios y Ecosistema (Glassmorphism Cards)
Esta sección aloja tarjetas que presentan un alto grado de modernidad mediante la abstracción CSS de *Cristal*.

*   **Estructura HTML:** `index.html` (Líneas 90-131). Grilla de 4 tarjetas (`.benefit__card`).
*   **Estilos CSS:** `assets/css/style.css` (Líneas 386-420).
    *   **La clase `.glass`:** L391-399. (Núcleo de Glassmorphism). Aplica fondo negro semi-transparente `rgba(26, 26, 26, 0.6)` con efecto de difuminado por detrás usando `backdrop-filter: blur(16px);`.
    *   **Efecto `.glass:hover`:** L401-405. Eleva el elemento `transform: translateY(-5px)` y le añade una sombra color verde neón usando `box-shadow`.
    *   **.benefit__icon:** L407-415. Icono centrado en una circunferencia verde semi-transparente.

---

## 6. Sección de Educación y Banners Fotográficos
Bloques visuales con imágenes a fondo perdido que escalan gradualmente de forma interactiva (Hover Zoom).

*   **Estructura HTML:** `index.html` (Líneas 133-164). Dos contenedores en grilla de clase `.edu__banner`.
*   **Estilos CSS:** `assets/css/style.css` (Líneas 421-478).
    *   `.edu__banner`: L426-433 (Usa `overflow: hidden` para que el efecto escala no rompa el diseño).
    *   `.edu__img`: L435-443 (Posicionamiento absoluto para rellenar la tarjeta).
    *   `.edu__overlay`: L445-453 (Gradiente obscuro `linear-gradient` para garantizar legibilidad del texto encima del banner).
    *   `.edu__banner:hover .edu__img`: L455-457 (Cambio en zoom `transform: scale(1.05)`).

---

## 7. Sección de Conversión (Call to Action / Emprende)
Invita explícitamente a la captación de prospectos.

*   **Estructura HTML:** `index.html` (Líneas 166-187). Grilla de dos columnas combinando texto a la izquierda y foto con estilo glassmorphism.
*   **Estilos CSS:** `assets/css/style.css` (Líneas 479-510).
    *   `.cta__list li`: L489-496 (Ajustes de espaciado y alineación vertical tipo Flexbox).
    *   `.cta__image-data`: L502-505 (Aplica padding redondeado sobre la imagen final).

---

## 8. Footer y Floating WhatsApp (Componentes Finales)
*   **Footer HTML:** `index.html` (Líneas 191-200).
*   **Footer CSS:** `assets/css/style.css` (Líneas 511-539).
*   **Botón WhatsApp HTML:** `index.html` (Líneas 202-205).
*   **Botón WhatsApp CSS:** `assets/css/style.css` (Líneas 540-563). Un diseño fijo (`fixed`) flotando `bottom: 2rem` y `right: 2rem`, con un color WhatsApp oficial (`#25d366`) modificado ligeramente para que combine con la base negra del diseño.

---

## 9. Animaciones de Entrada (Scroll Reveal) y Enlaces Activos (Scroll Spy)
El diseño usa JavaScript para inyectar animación al momento en el que dejas ver secciones bajando por la página web, y también marca en color neón el apartado en el menú principal donde de encuentra el usuario viendo actualmente.

*   **Reglas CSS Base:** `assets/css/style.css` (Líneas 564-575). 
    *   `.reveal` (L565): Todos los elementos nacen ocultos con `opacity: 0` y `transform: translateY(30px)`.
    *   `.reveal.active` (L571): Revela progresivamente el elemento en un `ease` a `opacity: 1`.
*   **Scroll Active (Menu "Spy"):** `assets/js/main.js` (Líneas 26-44). Detecta la posición del scroll de pantalla versus los `#ids` del documento para aplicar o remover `.active-link` en el Nav principal.
*   **Motor Scroll Reveal:** `assets/js/main.js` (Líneas 46-64). Itera cada clase en `.reveal`. Cuando su distancia con el `windowHeight` encaja, le inyecta la clase `.active`, desencadenando la transición en CSS.

---

## 10. Control Multi-Dispositivo (Media Queries)
Por su naturaleza "Mobile First", se comienza escalando desde pantallas pequeñas para finalmente inyectar componentes paralelos en las pantallas grandes.

*   **Código de Puntos de Ruptura (Breakpoints):** `assets/css/style.css` (Líneas 576-637).
    *   **Dispositivos medianos `min-width: 576px`:** (L578-583). Permite reajustar los `.benefits__container` a 2 columnas.
    *   **Dispositivos tablets `min-width: 768px`:** (L585-620). El nav superior despliega la barra de enlaces desvaneciendo el botón hamburguesa, estadísticas a 3 columnas.
    *   **Dispositivos `min-width: 1024px`:** (L623-637). Márgenes en cascada automático y permite abrir los beneficios a 4 columnas paralelas en `grid-template-columns: repeat(4, 1fr)`.
