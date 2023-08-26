const temp = document.getElementById('temp');
const city = document.getElementById('city');
const country = document.getElementById('country');

export default class UI {
  // input the location and receive weatherdata via console

  static displayTemp(weatherData) {
    temp.innerText = `C: ${weatherData.current.temp_c}° - F: ${weatherData.current.temp_f}°`;
  }

  static displayCityName(weatherData) {
    city.innerText = `${weatherData.location.name}`;
  }

  static displayCountry(weatherData) {
    country.innerText = `${weatherData.location.country}`;
  }

  static displayError(error) {
    console.log(error);
    temp.innerText = 'Please choose another Name';
    city.innerText = `City is unknown`;
  }
}
