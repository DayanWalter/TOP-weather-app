import 'normalize.css';
import '@fortawesome/fontawesome-free/css/all.css';

import './style.css';

import UI from './modules/UI';

const fetchButton = document.getElementById('fetch');
const celsiusButton = document.getElementById('celsius');
const fahrenheitButton = document.getElementById('fahrenheit');

async function getWeather() {
  const input = document.querySelector('input').value;

  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=3a25b7e9e04241afbfe75158232208&q=${input}&aqi=no`,
    { mode: 'cors' }
  );
  const weatherData = await response.json();

  UI.changeTempToCelsius(weatherData);

  return weatherData;
}

fetchButton.addEventListener('click', getWeather);
celsiusButton.addEventListener('click', () => {
  getWeather().then((weatherData) => {
    UI.changeTempToCelsius(weatherData);
  });
});

fahrenheitButton.addEventListener('click', () => {
  getWeather().then((weatherData) => {
    UI.changeTempToFahrenheit(weatherData);
  });
});
