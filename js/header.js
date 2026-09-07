const burger = document.querySelector("#burger");
const links = document.querySelector("#divLinks");
const overlay = document.querySelector("#overlay");
const mode = document.querySelector("#mode");
const modeIcon = document.querySelector("#modeIcon");
const body = document.body;

// Abrir el menú hamburguesa (añade la clase que dispara la animación de entrada)
function openMenu() {
  links.classList.remove('closing');
  links.classList.add('active');
  overlay.classList.add('show'); // oscurece el fondo
}

// Cerrar el menú hamburguesa (reproduce la animación de salida)
function closeMenu() {
  if (!links.classList.contains('active')) return;
  links.classList.remove('active');
  void links.offsetWidth; // obliga al navegador a reiniciar la animación
  links.classList.add('closing');
  overlay.classList.remove('show'); // restaura el fondo
}

// Al terminar la animación de cierre, ocultar el menú
links.addEventListener('animationend', () => {
  if (links.classList.contains('closing')) {
    links.classList.remove('closing');
  }
});

// Abrir / Cerrar menú hamburguesa al pulsar el botón
burger.addEventListener('click', (e) => {
  e.stopPropagation();
  if (links.classList.contains('active')) {
    closeMenu();
  } else {
    openMenu();
  }
});

// Cerrar el menú al hacer clic en cualquier parte de la pantalla
document.addEventListener('click', () => {
  if (links.classList.contains('active')) {
    closeMenu();
  }
});

// Cerrar el menú al hacer clic sobre un enlace
links.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    closeMenu();
  }
});

// Verifica si está en modo Light o modo Dark
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
  modeIcon.classList.remove("fa-solid","fa-moon");
  modeIcon.classList.add("fa-solid", "fa-sun");
}

mode.addEventListener('click', () => {
  body.classList.toggle('dark');

  if (body.classList.contains('dark')) {
    modeIcon.classList.remove("fa-solid","fa-moon");
    modeIcon.classList.add("fa-solid", "fa-sun");
    localStorage.setItem('theme', 'dark');
  } else {
    modeIcon.classList.remove("fa-solid", "fa-sun");
    modeIcon.classList.add("fa-solid","fa-moon");
    localStorage.setItem('theme', 'light');
  }
});