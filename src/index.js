import 'normalize.css';
import '@fortawesome/fontawesome-free/css/all.css';

import './style.css';

const p = document.querySelector('p');
const fetchButton = document.getElementById('fetch');
const celsiusButton = document.getElementById('celsius');
const fahrenheitButton = document.getElementById('fahrenheit');

// input the location and receive weatherdata via console
async function getWeather() {
  const input = document.querySelector('input').value;

  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=3a25b7e9e04241afbfe75158232208&q=${input}&aqi=no`,
    { mode: 'cors' }
  );
  const weatherData = await response.json();
  changeTempToCelsius(weatherData);
  return weatherData;
}

function changeTempToCelsius(weatherData) {
  p.innerText = `Temperatur in C: ${weatherData.current.temp_c}°`;
}

function changeTempToCelsiusClick() {
  getWeather().then((weatherData) => {
    changeTempToCelsius(weatherData);
  });
}

function changeTempToFahrenheit(weatherData) {
  p.innerText = `Temperatur in F: ${weatherData.current.temp_f}°`;
}

function changeTempToFahrenheitClick() {
  getWeather().then((weatherData) => {
    changeTempToFahrenheit(weatherData);
  });
}

fetchButton.addEventListener('click', getWeather);
celsiusButton.addEventListener('click', changeTempToCelsiusClick);
fahrenheitButton.addEventListener('click', changeTempToFahrenheitClick);
