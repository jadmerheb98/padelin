document.addEventListener("DOMContentLoaded", function () {

  const toggle = document.querySelector(".dropdown-toggle");
  const menu = document.querySelector(".dropdown-menu");

  if (!toggle || !menu) return;

  toggle.addEventListener("click", function (e) {
    e.stopPropagation();
    menu.classList.toggle("show");
  });

  document.addEventListener("click", function () {
    menu.classList.remove("show");
  });

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle) {
  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("show");
  });
}

});
