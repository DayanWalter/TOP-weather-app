import 'normalize.css';
import '@fortawesome/fontawesome-free/css/all.css';

import './style.css';

import UI from './modules/UI';

// const fetchButton = document.getElementById('fetch');
const form = document.getElementById('form');

async function getWeather() {
  const input = document.querySelector('input').value;

  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=3a25b7e9e04241afbfe75158232208&q=${input}&aqi=no`,
      { mode: 'cors' }
    );
    const weatherData = await response.json();

    UI.displayTemp(weatherData);
    UI.displayCityName(weatherData);
    UI.displayCountry(weatherData);

    console.log(weatherData);
  } catch (error) {
    UI.displayError(error);
  }
  // because of eslint
  return null;
}

// fetchButton.addEventListener('click', getWeather);
form.addEventListener('submit', (e) => {
  e.preventDefault();
  getWeather();
});
