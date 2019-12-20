const temple_object = "/final-project/js/temple-list.json";
fetch(temple_object)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) { 
    const temple = jsonObject['temples'];
    console.log(temple);
    for(var i = 0 ; i < temple.length ; i++){
    /*CARD TEMPLE CREATION*/
    let temple_cards = document.createElement("div");
    temple_cards.className = "temple-card";
    /*THREE CARD SECTIONS */
    let all_blocks = document.createElement("div");
    all_blocks.className = "all-blocks";
    let first_block = document.createElement("section");
    first_block.className = "first-block";
    let second_block = document.createElement("section");
    second_block.className = "second-block";
    let third_block = document.createElement("section");
    third_block.className = "third-block";
    /*IMAGE BOX CREATION*/ 
    let image_box = document.createElement("div");
    image_box.className="image-box";
    let temple1 = document.createElement("img");
    temple1.className="temple1";
    temple1.src =temple[i].photo;
    temple1.alt =temple[i].name;
    let temple1_title = document.createElement("h3");
    temple1_title.className="temple1-title";
    temple1_title.textContent=temple[i].name;
    

    /*CONTACT BOX CREATION*/
    let contact_card_box = document.createElement("div");
    contact_card_box.className="box-summary";
    let contact_card_title = document.createElement("h3");
    contact_card_title.textContent="Info";
    contact_card_title.className = "box-title";
    let address = document.createElement("p");
    address.textContent="Address: " + temple[i].address; 
    let telephone =document.createElement("p");
    telephone.textContent="Telephone: " + temple[i].telephone; 
    let email = document.createElement("p"); 
    email.textContent="Email: " + temple[i].email;

    /* SERVICES BOX CREATION*/
    let services_box = document.createElement("div");
    services_box.className = "box-summary";
    let services_title = document.createElement("h3");
    services_title.className="box-title";
    services_title.textContent="Services";
    let services_text =document.createElement("div"); 
    services_text.className ="services-text";
    let services0 = document.createElement("p");
    let services1 = document.createElement("p");
    let services2 = document.createElement("p");
    let services3 = document.createElement("p");
    services0.textContent = temple[i].services[0];
    services1.textContent = temple[i].services[1];
    services2.textContent = temple[i].services[2];
    services3.textContent = temple[i].services[3];

    /*SCHEDULE BOX CREATION*/
    let schedule_box = document.createElement("div");
    schedule_box.className="box-summary";
    let schedule_title = document.createElement("h3");
    schedule_title.textContent="Schedule";
    schedule_title.className="box-title";
    let schedule_text = document.createElement("div");
    schedule_text.className="schedule-text";
    let ordinance = document.createElement("p");
    ordinance.textContent="Ordinance Schedule: " + temple[i].ordinance_schedule;
    let session = document.createElement("p");
    session.textContent="Session schedule: " + temple[i].session_schedule;
    let closure = document.createElement("p");
    closure.textContent = "Temple closure schedule: " + temple[i].temple_closure_schedule;
    
    /*HISTORY BOX CREATION*/
    let history_box = document.createElement("div");
    history_box.className = "box-summary";
    let history_title = document.createElement("h3");
    history_title.textContent = "History";
    history_title.className = "box-title";
    let history_text = document.createElement("div");
    let history_info = document.createElement("p");
    history_info.textContent = temple[i].history;

    /*WEATHER BOX*/
    let weather_box = document.createElement("div");
    weather_box.className = "box-summary";
    let weather_title = document.createElement("h3");
    weather_title.className = "box-title";
    weather_title.textContent = "Weather Summary"
    let weather_text = document.createElement("div");
    weather_text.className = "weather-text";
    let temperature = document.createElement("p");
    temperature.className="temperature";
    let wind = document.createElement("p");
    wind.className = "wind";
    let humidity = document.createElement("p");
    humidity.className ="humidity";
    let current = document.createElement("p");
    current.className ="current";
    
    
    /*POPULATING IMAGE BOX */
    image_box.appendChild(temple1_title);
    image_box.appendChild(temple1);


    /*POPULATING CONTACT BOX*/
    contact_card_box.appendChild(contact_card_title);
    contact_card_box.appendChild(address);
    contact_card_box.appendChild(telephone);
    contact_card_box.appendChild(email);

    /*POPULATING SERVICES BOX */
    services_box.appendChild(services_title);
    services_text.appendChild(services0);
    services_text.appendChild(services1);
    services_text.appendChild(services2);
    services_text.appendChild(services3);
    services_box.appendChild(services_text);

    /*POPULATING SCHEDULE BOX*/
    schedule_box.appendChild(schedule_title);
    schedule_text.appendChild(ordinance);
    schedule_text.appendChild(session);
    schedule_text.appendChild(closure);
    schedule_box.appendChild(schedule_text);

    /*POPULATING HISTORY BOX*/
    history_box.appendChild(history_title);
    history_text.appendChild(history_info);
    history_box.appendChild(history_text);

    /*POPULATING WEATHER BOX*/
    weather_box.appendChild(weather_title);
    weather_text.appendChild(current);
    weather_text.appendChild(temperature);
    weather_text.appendChild(wind);
    weather_text.appendChild(humidity);
    weather_box.appendChild(weather_text);

    /*POPULATING FIRST BLOCK*/ 
    first_block.appendChild(contact_card_box);
    first_block.appendChild(services_box);
    /*POPULATING SECOND BLOCK*/
    second_block.appendChild(schedule_box);
    second_block.appendChild(history_box);
    /*POPULATING THIRD BLOCK*/
    weather_box.appendChild(weather_title);
    weather_box.appendChild(weather_text);
    third_block.appendChild(weather_box);

    /*POPULATING CARDS*/ 
    temple_cards.appendChild(image_box);
    all_blocks.appendChild(first_block);
    all_blocks.appendChild(second_block);
    all_blocks.appendChild(third_block);
    temple_cards.appendChild(all_blocks);
    

    /*POPULATING WRAPPER-SECTION*/
    document.querySelector('section.wrapper-section').appendChild(temple_cards);
    }
    
    
  });


  const apiCedar = 'https://api.openweathermap.org/data/2.5/weather?id=5784025&APPID=abdae41d051b90c3354abd81c4cdf5b5&units=imperial';
fetch(apiCedar)
  .then((response) => response.json())
  .then((jsObject) => {
  let Cedar = jsObject;
  document.getElementsByClassName("current")[0].textContent ="Current: " +  Cedar.weather[0].main;
  document.getElementsByClassName("temperature")[0].textContent ="Temperature: " +  Cedar.main.temp + " F";
  document.getElementsByClassName("wind")[0].textContent ="Wind: " +  Cedar.wind.speed + " mph";
  document.getElementsByClassName("humidity")[0].textContent ="Humidity: " +  Cedar.main.humidity + " %";

  });

const apiChicago = 'https://api.openweathermap.org/data/2.5/weather?id=4896861&APPID=abdae41d051b90c3354abd81c4cdf5b5&units=imperial';
fetch(apiChicago)
    .then((response) => response.json())
    .then((jsObject) => {
    let Chicago =jsObject;
    document.getElementsByClassName("current")[1].textContent ="Current: " +  Chicago.weather[0].main;
    document.getElementsByClassName("temperature")[1].textContent ="Temperature: " +  Chicago.main.temp + " F";
    document.getElementsByClassName("wind")[1].textContent ="Wind: " +  Chicago.wind.speed + " mph";
    document.getElementsByClassName("humidity")[1].textContent ="Humidity: " +  Chicago.main.humidity + " %";
  });
  
const apiAtlanta = 'https://api.openweathermap.org/data/2.5/weather?id=4212937&APPID=abdae41d051b90c3354abd81c4cdf5b5&units=imperial';
fetch(apiAtlanta)
  .then((response) => response.json())
  .then((jsObject) => {
  let Atlanta =jsObject;
  document.getElementsByClassName("current")[2].textContent ="Current: " +  Atlanta.weather[0].main;
  document.getElementsByClassName("temperature")[2].textContent ="Temperature: " +  Atlanta.main.temp + " F";
  document.getElementsByClassName("wind")[2].textContent ="Wind: " +  Atlanta.wind.speed + " mph";
  document.getElementsByClassName("humidity")[2].textContent ="Humidity: " +  Atlanta.main.humidity + " %"; 
  });

  const apiManhattan = 'https://api.openweathermap.org/data/2.5/weather?id=5664535&APPID=abdae41d051b90c3354abd81c4cdf5b5&units=imperial';
fetch(apiManhattan)
  .then((response) => response.json())
  .then((jsObject) => {
  let Manhattan =jsObject;
  document.getElementsByClassName("current")[3].textContent ="Current: " +  Manhattan.weather[0].main;
  document.getElementsByClassName("temperature")[3].textContent ="Temperature: " +  Manhattan.main.temp + " F";
  document.getElementsByClassName("wind")[3].textContent ="Wind: " +  Manhattan.wind.speed + " mph";
  document.getElementsByClassName("humidity")[3].textContent ="Humidity: " +  Manhattan.main.humidity + " %"; 
  });

  
 