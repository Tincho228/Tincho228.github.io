const request = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(request)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    let preston_event_p = document.createElement("div");
    preston_event_p.className ="event-p";
    let preston_event_wrapper = document.createElement("div");
    preston_event_wrapper.className ="event-wrapper";
    let preston_event_h1 = document.createElement("h2");
    preston_event_h1.textContent="Upcoming Events in Preston";
    preston_event_h1.className = "event-title";
    let preston_event_hr = document.createElement("hr");
    let preston_event_info = document.createElement("div");
    preston_event_info.className = "event-info";
    let preston_event_image = document.createElement("img");
    preston_event_image.className = "event-image";
    preston_event_image.src = "/Lesson11/img/Hero-assests/Preston-event small.jpg";
    preston_event_image.alt = towns[4].name + " event"; 

    for (let i = 0; i < towns[4].events.length; i++ ) {
    let event_p = document.createElement("p");   
    event_p.textContent = towns[4].events[i];
    document.createElement("p").textContent = event_p;
    preston_event_p.appendChild(event_p);
    }
    preston_event_wrapper.appendChild(preston_event_h1);
    preston_event_wrapper.appendChild(preston_event_hr);
    preston_event_info.appendChild(preston_event_p);
    preston_event_info.appendChild(preston_event_image);
    document.querySelector('div.upcoming-events').appendChild(preston_event_wrapper);
    document.querySelector('div.upcoming-events').appendChild(preston_event_info);
  });  

  const apiURLcurrent = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=abdae41d051b90c3354abd81c4cdf5b5&units=imperial';
fetch(apiURLcurrent)
  .then((response) => response.json())
  .then((jsObject) => {
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

  
const apiURLforecast = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=abdae41d051b90c3354abd81c4cdf5b5&units=imperial';
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
        var daysofweek = new Array("Sun","Mon","Tue","Wed","Thu","Fri","Sat");
        var currentday = daysofweek[unixtime.getDay()];
            // image-icon //
        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png';
            //populating html//
        document.getElementById("Day-" + daycounter).innerHTML = currentday;
        document.getElementById("tempDay-" + daycounter).innerHTML = jsObject.list[i].main.temp + " F";
        document.getElementById("iconDay-" + daycounter).setAttribute("src" , imagesrc);
        document.getElementById("iconDay-" + daycounter).setAttribute("alt" , jsObject.list[i].weather[0].description);
        daycounter++ ;
        }
        else {
            continue;
        }
    }
  });