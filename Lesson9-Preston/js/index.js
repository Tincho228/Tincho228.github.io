const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
   
    for (let i = 0; i < towns.length; i++ ) {
      if (towns[i].name == "Fish Haven" || towns[i].name == "Preston" || towns[i].name == "Soda Springs"){
        /*Creating all the elements */
        let town_section = document.createElement("section");
        let town_image = document.createElement("img");
        town_image.className = "town-image";
        let town_info = document.createElement("div");
        town_info.className = "infoDiv";
        let town_name = document.createElement("h2");
        let town_motto = document.createElement("p");
        town_motto.className = "mottoDiv";
        let town_yearfounded =document.createElement("p");
        let town_population = document.createElement("p");
        let town_rainfall = document.createElement("p");
        /* populating elements */
        if (towns[i].name == "Fish Haven"){
          town_image.src = "/Lesson9-Preston/img/Home/Fish Haven.jpg";}
        if (towns[i].name == "Preston"){
          town_image.src = "/Lesson9-Preston/img/Home/Preston.jpg";}
        if (towns[i].name == "Soda Springs"){
          town_image.src = "/Lesson9-Preston/img/Home/Soda Springs.jpg";}
        town_name.textContent = towns[i].name;
        town_motto.textContent = towns[i].motto;
        town_yearfounded.textContent = "Year Founded: " + towns[i].yearFounded;
        town_population.textContent = "Population: " + towns[i].currentPopulation;
        town_rainfall.textContent = "Annual Rain Fall: " + towns[i].averageRainfall;       
        /*  Giving an Id to each image */
        document.getElementsByTagName("img")[1].id = "FishHaven";
        document.getElementsByTagName("img")[2].id = "Preston";
        document.getElementsByClassName("contact-map")[0].id = "Map";
      
        
        /* Append the infoDiv*/
         town_info.appendChild(town_name);
         town_info.appendChild(town_motto);
         town_info.appendChild(town_yearfounded);
         town_info.appendChild(town_population);
         town_info.appendChild(town_rainfall);
        /* Append the section */
         town_section.appendChild(town_info);
         town_section.appendChild(town_image);
        /* Append the class */
        document.querySelector('div.three-towns').appendChild(town_section);
      }
      else {
        continue;
      }
    }
  });  