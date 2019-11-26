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
        }
        else {
            continue;
        }
    }
  });










