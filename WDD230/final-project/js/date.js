var months = new Array ("January","February","March","April","May","June","July","August","September","October","November","December");
var daysofweek = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
var f=new Date();
document.getElementById("date-link").innerHTML = daysofweek[f.getDay()] + ", " + months[f.getMonth()] + " " + f.getDate() + " " + f.getFullYear();
var date_temple = document.getElementsByClassName("date-temple");
for (var i=0; i<date_temple.length; i++){
    date_temple[i]. innerHTML = daysofweek[f.getDay()] + ", " + months[f.getMonth()] + " " + f.getDate() + " " + f.getFullYear();
}