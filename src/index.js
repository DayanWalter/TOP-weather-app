import 'normalize.css';
import '@fortawesome/fontawesome-free/css/all.css';

import './style.css';
import template from './modules/template';

template();
// input the location and receive weatherdata via console
async function getWeather() {
  const response = await fetch(
    'http://api.weatherapi.com/v1/current.json?key=3a25b7e9e04241afbfe75158232208&q=London&aqi=no',
    { mode: 'cors' }
  );
  const weatherData = await response.json();

  console.log(weatherData);
}
getWeather();
