const apiKey = "2fa64dacea2980ff2f50ce3e0027de52";
const city = "Mendoza";
                                                               //? Query params
const API_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=metric`;

const btnSave = document.getElementById("weather-save");


const inputSearchWeather = document.getElementById('weather-search');

/**
 * Obtener el clima de la ubicación actual del usuario
 * Si este permite al buscador acceder a su ubicación
 * 
 */

if(navigator.geolocation) {

  navigator.geolocation.getCurrentPosition(
    // Se obtiene la ubicación del usuario
    (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      buscarClima(`&lat=${lat}&lon=${lon}`); 
    },
    (error) => {
      console.log(error);
    } // Error al obtener la ubicación
  );

}


// # Obtener el clima de una ciudad que ingrese el usuario
inputSearchWeather.addEventListener('keyup', (evento) => {

    if(evento.key === "Enter") {
      
      // 1- Obtener el valor del input
      const ciudad = inputSearchWeather.value;
      // 2- Buscar el clima de la ciudad ingresada
      buscarClima(`&q=${ciudad}`);
      // 3- Pintar el clima en el HTML

    } 

})

function buscarClima(query) {
  console.log(query);
  

  axios
    .get(`${API_URL+query}`)
    .then((response) => {
      console.log(response.data); // Obtenemos la data de la respuesta

      const clima = response.data;

      drawWeather(clima);

      if(query.includes("&q=")) {
        btnSave.removeAttribute('disabled');
      }


    })
    .catch((error) => {
      console.error("Error al obtener los datos del clima", error);
    
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No se encontró la ciudad ingresada!',
      })

    });
}

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

    iconHTML.innerHTML = `<img src=https://openweathermap.org/img/wn/${icon}@2x.png>`;
    // iconHTML.innerHTML = `<script>alert("Hola")<\/script>`

    // const elementoImg = document.createElement('img');

    // elementoImg.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    // elementoImg.setAttribute('alt', `Imagen clima ${location}`)

    // elementoImg.classList.add('imagen-clima', 'lg')

    // elementoImg.style.border = '2px solid black';

    // iconHTML.innerHTML = ''; // Limpiar el HTML del contenedor de la imagen
    // iconHTML.appendChild(elementoImg); // Agregar la imagen al contenedor

    // elementoImg.innerText = 'Algun texto'

    // elementoImg.removeAttribute('alt')

}

btnSave.addEventListener('click', () => {
  
  const ciudad = inputSearchWeather.value;
  console.log("Se guardará:", ciudad)

})

