const temp = document.getElementById('temp');
const cityName = document.getElementById('cityName');

export default class UI {
  // input the location and receive weatherdata via console

  static displayTemp(weatherData) {
    temp.innerText = `C: ${weatherData.current.temp_c}° - F: ${weatherData.current.temp_f}°`;
  }

  static displayCityName(weatherData) {
    cityName.innerText = `${weatherData.location.name}`;
  }
}
