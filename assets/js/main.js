/* =============== MENU MÓVIL (NAV) =============== 
  (Relacionado con index.html Líneas 21-43 / style.css Líneas 152-235)
  Este script maneja la apertura y cierre del menú hamburguesa en dispositivos móviles. 
*/
const navMenu = document.getElementById('nav-menu'), /* Contenedor de la lista de enlaces */
      navToggle = document.getElementById('nav-toggle'), /* Botón hamburguesa */
      navLinks = document.querySelectorAll('.nav__link') /* Todos los enlaces de navegación */

/* Función de apertura del menú */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        // Alterna (agrega o quita) la clase .show-menu que desencadena la animación en CSS
        navMenu.classList.toggle('show-menu')
    })
}

/* Función para ocultar el menú al hacer clic en un enlace (modo móvil) */
navLinks.forEach(n => n.addEventListener('click', () => {
    // Cuando el usuario hace clic en un enlace, el menú emergente se cierra automáticamente
    navMenu.classList.remove('show-menu')
}))

/* =============== CAMBIO DE FONDO EN EL HEADER (GLASSMORPHISM) =============== 
   Cuando el usuario baja (scroll) por la pantalla, el menú que era transparente 
   obtiene un fondo borroso (Glassmorphism). 
   (Ver CSS clase .scroll-header en style.css Aprox L163) 
*/
function scrollHeader(){
    const header = document.getElementById('header')
    // Cuando el desplazamiento vertical (scrollY) es igual o mayor a 50 vh, 
    // se agrega la clase .scroll-header al header. Si es menor, se elimina.
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/* =============== ESPÍA DE SCROLL PARA ENLACES ACTIVOS =============== 
   Este script pinta de color "neón" el enlace del menú correspondiente 
   a la sección que el usuario está viendo actualmente en la pantalla.
*/
const sections = document.querySelectorAll('section[id]') // Selecciona todas las etiquetas <section> que tangan un ID

function scrollActive(){
    const scrollY = window.pageYOffset // Obtiene cuántos pixeles hemos bajado en la pantalla

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight, // Altura total de la sección actual
              sectionTop = current.offsetTop - 58,  // Distancia de la sección desde el top (ajustada por la altura del menú)
              sectionId = current.getAttribute('id') // Obtiene el ID (ej: 'inicio', 'cursos')

        // Si la posición de la pantalla está dentro del rango visible de esta sección
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            // Añade la clase .active-link al enlace correspondiente en la navegación (CSS: color neon)
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            // La remueve cuando salimos de su rango visual
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/* =============== ANIMACIÓN EN CASCADA / REVELACIÓN AL HACER SCROLL =============== 
   Este scrip activa la transición CSS de los elementos ocultos para que 
   aparezcan flotando cuando bajamos la página.
   (Busca .reveal y .reveal.active en el archivo style.css Aprox L564)
*/
function reveal() {
    var reveals = document.querySelectorAll(".reveal"); // Selecciona todos los elementos con la clase "reveal"

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight; // La altura de nuestra pantalla de navegador
        var elementTop = reveals[i].getBoundingClientRect().top; // A qué distancia está este elemento desde el tope
        var elementVisible = 100; // Un factor de margen (se revela cuando entra 100px a la vista)

        // Si la pantalla ha alcanzado la posición del elemento...
        if (elementTop < windowHeight - elementVisible) {
            // ... inyecta la clase activa (lo que dispara el opacity: 1 y el transform en CSS)
            reveals[i].classList.add("active");
        }
    }
}

// Ejecuta la función cada vez que el usuario hace scroll
window.addEventListener("scroll", reveal);
// Ejecuta el evento inmediatamente de arranque para los elementos visibles iniciales (hero)
reveal();
