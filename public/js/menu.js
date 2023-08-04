// Capturar el elemento del menú hamburguesa y el menú móvil
const menuBurguer = document.querySelector('.menuBurguer');
const mobileMenu = document.querySelector('.mobile-menu');

// Agregar evento al clic en el menú hamburguesa
menuBurguer.addEventListener('click', () => {
  // Mostrar u ocultar el menú móvil al hacer clic en el icono hamburguesa
  mobileMenu.classList.toggle('show');
});
