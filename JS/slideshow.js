var index = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("Slides");
  var pontos = document.getElementsByClassName("ponto");
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  index++;
  if (index > slides.length) {index = 1}    
  for (i = 0; i < pontos.length; i++) {
    pontos[i].className = pontos[i].className.replace(" active", "");
  }
  slides[index-1].style.display = "block";  
  pontos[index-1].className += " active";
  setTimeout(showSlides, 4000); 
}