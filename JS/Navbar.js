
window.onscroll = function() {Navbarfixa()};
var navbar = document.getElementById("Navbar");
var fixo = navbar.offsetTop;
function Navbarfixa() {
  if (window.pageYOffset > fixo) {
    navbar.classList.add("fixado");
  } 
  else {
    navbar.classList.remove("fixado");
  }
      
}