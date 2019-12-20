/*FUNCTION TOGGLE MENU*/

function toggleMenu() {
  document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
  var logo = document.getElementsByClassName("header-logo");
  var header = document.getElementsByClassName("header-title");
  var  temp = window.getComputedStyle(logo[0]).getPropertyValue("opacity");
  if (temp==1){
    logo[0].style.opacity = 0.1;
    header[0].style.opacity = 0.1; }
  if (temp==0.1){
    logo[0].style.opacity = 1;
    header[0].style.opacity = 1;
  }
}

function activeclass(){
var elements =document.getElementsByClassName("btn");
        for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}
}
