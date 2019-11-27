const request_preston = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(request_preston)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    let soda_event_p = document.createElement("div");
    soda_event_p.className ="event-p";
    let soda_event_wrapper = document.createElement("div");
    soda_event_wrapper.className ="event-wrapper";
    let soda_event_h1 = document.createElement("h2");
    soda_event_h1.textContent="Upcoming Events in Soda Springs";
    soda_event_h1.className = "event-title";
    let soda_event_hr = document.createElement("hr");
    let soda_event_info = document.createElement("div");
    soda_event_info.className = "event-info";
    let soda_event_image = document.createElement("img");
    soda_event_image.className = "event-image";
    soda_event_image.src = "/Lesson11/img/Hero-assests/Soda-event-small.jpg";
    soda_event_image.alt = towns[5].name + " event"; 

    for (let i = 0; i < towns[5].events.length; i++ ) {
    let event_p = document.createElement("p");   
    event_p.textContent = towns[5].events[i];
    document.createElement("p").textContent = event_p;
    soda_event_p.appendChild(event_p);
    }
    soda_event_wrapper.appendChild(soda_event_h1);
    soda_event_wrapper.appendChild(soda_event_hr);
    soda_event_info.appendChild(soda_event_p);
    soda_event_info.appendChild(soda_event_image);
    document.querySelector('div.upcoming-events').appendChild(soda_event_wrapper);
    document.querySelector('div.upcoming-events').appendChild(soda_event_info);
  });  

  const apiURLcurrent = 'https://api.openweathermap.org/data/2.5/weather?id=5607916&APPID=abdae41d051b90c3354abd81c4cdf5b5&units=imperial';
fetch(apiURLcurrent)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById("currently-info").innerHTML = jsObject.weather[0].main;
    document.getElementById("temperature").innerHTML = jsObject.main.temp;
    document.getElementById("humidity-info").innerHTML = jsObject.main.humidity + " %";
    document.getElementById("speed").innerHTML = jsObject.wind.speed;
    var t = parseFloat(document.getElementById("temperature").innerHTML);  
    var s = parseFloat(document.getElementById("speed").innerHTML);
    var f = 0;
    if (t <= 50 && s > 3 ){ 
          f= 35.74 + (0.6215 * t) - (35.75 * Math.pow (s, 0.16)) + (0.4275 * t * Math.pow (s, 0.16));
          f= Math.round(f);
          document.getElementById("windchill").innerHTML = f;
      }
    else {
          document.getElementById("windchill").innerHTML = "N/A";
      }
  });  

  
const apiURLforecast = 'https://api.openweathermap.org/data/2.5/forecast?id=5607916&APPID=abdae41d051b90c3354abd81c4cdf5b5&units=imperial';
fetch(apiURLforecast)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    var daycounter = 1;
    for (let i = 0 ; i < jsObject.list.length ; i++ ){
        var time = "18:00:00";
        var date = jsObject.list[i].dt_txt;
        var intro = date.match(time);
        if(intro){
            // date //
        var unixtime = new Date (parseFloat(jsObject.list[i].dt) * 1000);
        var daysofweek = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
        var currentday = daysofweek[unixtime.getDay()];
            // image-icon //
        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png';
            //populating html//
        document.getElementById("Day-" + daycounter).innerHTML = currentday;
        document.getElementById("tempDay-" + daycounter).innerHTML = jsObject.list[i].main.temp + " F";
        document.getElementById("iconDay-" + daycounter).setAttribute("src" , imagesrc);
        document.getElementById("iconDay-" + daycounter).setAttribute("alt" , jsObject.list[i].weather[0].description);
        daycounter++ ;
        console.log(i);
        }
        else {
            continue;
        }
    }
  });