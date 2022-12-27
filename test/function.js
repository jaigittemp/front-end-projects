const menubtn = document.getElementsByClassName("menu-bar")[0];
const navitem = document.getElementsByClassName("nav-items-container");
menubtn.addEventListener("click", function () {
  navitem[0].classList.toggle("hidden");
});
