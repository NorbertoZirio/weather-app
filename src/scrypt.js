import './styles.css'
import { getWeather } from './getWeatherCond';



getWeather();

const input = document.querySelector("input");


input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    getWeather(input.value);
  }
});


