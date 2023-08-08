// Función para mostrar u ocultar el menú desplegable
function toggleMenu() {
  const mobileMenu = document.querySelector(".mobile-menu");
  mobileMenu.classList.toggle("active");

  const menuBurguer = document.querySelector(".menuBurguer");
  menuBurguer.classList.toggle("active");
}

// Obtener el icono del menú hamburguesa
const menuBurguer = document.querySelector(".menuBurguer");

// Agregar evento de clic al icono
menuBurguer.addEventListener("click", toggleMenu);
