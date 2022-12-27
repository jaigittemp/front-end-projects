// js code for nav hamburger-menu toggle onclick event
const menuele = document.querySelector(".menu-btn");
let navitemele = document.querySelector(".nav-links");
menuele.addEventListener("click", function () {
  navitemele.classList.toggle("active");
  navitemele.style.transition = "3s";
});
