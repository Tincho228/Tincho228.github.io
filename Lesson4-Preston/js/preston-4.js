function toggleMenu() {
	document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

function CurrentDate() {
	var months = new Array ("January","February","March","April","May","June","July","August","September","October","November","December");
var daysofweek = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
var f=new Date();
return (daysofweek[f.getDay()] + ", " + months[f.getMonth()] + " " + f.getDate() + " " + f.getFullYear());

}
