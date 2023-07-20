const COORDS = 'coords';
const WeatherAPI = 'a450719f4dd66f6e029a08de234208f5';
const weather = document.querySelector('.js_weather');
const maxTemp = document.querySelector('.max_temp');
const minTemp = document.querySelector('.min_temp');
const currentTemp = document.querySelector('.current_temp');
const Tweather = document.querySelector('.T-weather');
const PLACE = document.querySelector('.js_place');
const weatherImg = document.querySelector('.weatherImg');
const currentHumidity = document.querySelector('.current_humidity');

function getWeather(lat, lng) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${WeatherAPI}&units=metric)`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      const currentTemperature = json.main.temp;
      const maxTemperature = json.main.temp_max;
      const minTemperature = json.main.temp_min;
      const Mainweather = json.weather[0].main;
      const place = json.name;
      const imgURL =
        'http://openweathermap.org/img/w/' + json.weather[0].icon + '.png';
      const Humidity = json.main.humidity;

      currentTemp.innerText = `${Math.floor(currentTemperature) - 273}°`;
      maxTemp.innerText = `${Math.floor(maxTemperature) - 273}°`;
      minTemp.innerText = `${Math.floor(minTemperature) - 273}°`;
      Tweather.innerText = Mainweather;
      PLACE.innerText = place;
      weatherImg.setAttribute('src', imgURL);
      currentHumidity.innerText = Humidity + '%';
    });
} //getWeather

function saveCoords(coordsobj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsobj));
}

function handleGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsobj = {
    latitude,
    longitude,
  };
  saveCoords(coordsobj);
}

function handleGeoError() {
  console.log('cant access');
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    const parseCoords = JSON.parse(loadedCoords);
    getWeather(parseCoords.latitude, parseCoords.longitude);
  }
}

function init() {
  loadCoords();
}
init();
