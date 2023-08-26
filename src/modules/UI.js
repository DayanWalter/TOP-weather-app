const p = document.querySelector('p');
export default class UI {
  // input the location and receive weatherdata via console

  static changeTempToCelsius(weatherData) {
    p.innerText = `Temperatur in C: ${weatherData.current.temp_c}°`;
  }

  static changeTempToFahrenheit(weatherData) {
    p.innerText = `Temperatur in F: ${weatherData.current.temp_f}°`;
  }
}
