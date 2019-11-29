function toggleMenu() {
	document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
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
//Integrar las dos funciones de abajo

function hide_saturday (){
var f = new Date();
var x = document.getElementsByClassName("saturday")[0];
if (f.getDay() == 5){
x.style.display = "block";
}
else {
x.style.display = "none";
}
}	
