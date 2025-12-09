const burger = document.querySelector("#burger");
const xBurger = document.querySelector("#xBurger");
const links = document.querySelector("#divLinks");
const mode = document.querySelector("#mode");
const modeIcon = document.querySelector("#modeIcon");
const body = document.body;

// Bonton Abrir Menú hamburguesa
burger.addEventListener('click', () => {
  links.style.display = 'flex';
});
// Boton Cerrar Menu Hamburguesa
xBurger.addEventListener('click', () => {
  links.style.display = 'none';
});

// Verifica si está en modo Light o modo Dark
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
  modeIcon.classList.remove("fa-solid", "fa-cloud-moon");
  modeIcon.classList.add("fa-solid", "fa-cloud-sun", "fa-flip-horizontal");
}

mode.addEventListener('click', () => {
  body.classList.toggle('dark');

  if (body.classList.contains('dark')) {
    modeIcon.classList.remove("fa-solid", "fa-cloud-moon");
    modeIcon.classList.add("fa-solid", "fa-cloud-sun", "fa-flip-horizontal");
    localStorage.setItem('theme', 'dark');
  } else {
    modeIcon.classList.remove("fa-solid", "fa-cloud-sun", "fa-flip-horizontal");
    modeIcon.classList.add("fa-solid", "fa-cloud-moon");
    localStorage.setItem('theme', 'light');
  }
});