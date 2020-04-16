var slider = document.getElementById("myrange");
var output = document.getElementById("outputspan");
output.innerHTML = slider.value;
slider.oninput = function() {
output.innerHTML = this.value;
}