const apiKey = "2fa64dacea2980ff2f50ce3e0027de52";
const city = "Mendoza";
                                                               //? Query params
const API_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=metric`;


const inputSearchWeather = document.getElementById('weather-search');

inputSearchWeather.addEventListener('keyup', (evento) => {

    console.log(evento.key)

})



axios
  .get(`${API_URL}&q=${city}`)
  .then((response) => {
    console.log(response.data); // Obtenemos la data de la respuesta 

    const clima = response.data;
    
    drawWeather(clima);

  })
  .catch((error) => {
    console.error("Error al obtener los datos del clima", error);
  });


function drawWeather(data) {

    // id="weather-location"
    // id="weather-temp"
    // id="weather-icon"

    // Pintar el clima en el HTML
    const locationHTML = document.getElementById("weather-location");
    const tempHTML = document.getElementById("weather-temp");
    const iconHTML = document.getElementById("weather-icon");

    const temp = data.main.temp;
    const location = data.name;
    const icon = data.weather[0].icon;

    locationHTML.innerText = location;
    tempHTML.innerText = temp;

    // iconHTML.innerHTML = `<img src=https://openweathermap.org/img/wn/${icon}@2x.png>`;

    const elementoImg = document.createElement('img');

    elementoImg.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    elementoImg.setAttribute('alt', `Imagen clima ${location}`)

    elementoImg.classList.add('imagen-clima', 'lg')

    elementoImg.style.border = '2px solid black';

    iconHTML.appendChild(elementoImg)

    

    // elementoImg.innerText = 'Algun texto'

    // elementoImg.removeAttribute('alt')
    
    
    console.log(elementoImg)



    
    console.log(temp, icon, location);

}


