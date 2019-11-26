function toggleMenu() {
	document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

function CurrentDate() {
	var months = new Array ("January","February","March","April","May","June","July","August","September","October","November","December");
  var daysofweek = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
  var f=new Date();

return (daysofweek[f.getDay()] + ", " + months[f.getMonth()] + " " + f.getDate() + " " + f.getFullYear());

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

// SLIDER CONFIGURATION//
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    let town_event_p = document.createElement("div");
    town_event_p.className ="event-p";
    let town_event = document.createElement("div");
    town_event.className ="event-wrapper";
    let town_event_h1 = document.createElement("h2");
    town_event_h1.textContent="Upcoming Events in Preston";
    town_event_h1.className = "event-title";
    let town_event_hr = document.createElement("hr");
    let town_event_info = document.createElement("div");
    town_event_info.className = "event-info";
    let town_event_image = document.createElement("img");
    town_event_image.className = "event-image";
    town_event_image.src = "/Lesson11/img/Hero-assests/Preston-event small.jpg";
    town_event_image.alt = towns[4].name + " event"; 

    for (let i = 0; i < towns[4].events.length; i++ ) {
    let event_p = document.createElement("p");   
    event_p.textContent = towns[4].events[i];
    document.createElement("p").textContent = event_p;
    town_event_p.appendChild(event_p);
    }
    town_event.appendChild(town_event_h1);
    town_event.appendChild(town_event_hr);
    town_event_info.appendChild(town_event_p);
    town_event_info.appendChild(town_event_image);
    

    document.querySelector('div.upcoming-events').appendChild(town_event);
    document.querySelector('div.upcoming-events').appendChild(town_event_info);
  });  