const h1 = document.querySelector("h1");
const tempH3 = document.querySelector("#temp-h3");
const tempMaxH3 = document.querySelector("#maxtemp-h3");
const tempMinH3 = document.querySelector("#mintemp-h3");
const conditions = document.querySelector("#conditions");
const precipprob = document.querySelector(`#precip-prob`);


export function updateScreen(weather) {
  h1.textContent = weather.resolvedAddress;
  tempH3.textContent = `Actual temp: ${weather.tempCelcius.toFixed(2)}ºC`;
  tempMaxH3.textContent = `Max temp: ${weather.maxTemp.toFixed(2)}ºC`;
  tempMinH3.textContent = `Min temp: ${weather.minTemp.toFixed(2)}ºC`;
  conditions.textContent = `Actual conditions: ${weather.conditions}`;
  precipprob.textContent = `Humidity: ${weather.humidity}% Precipitation probabilty: ${weather.precipprob}%`;
}