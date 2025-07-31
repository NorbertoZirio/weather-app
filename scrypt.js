async function getWeather(city = "La Habana") {
  const promes = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=GYNKRCLAP2XT62UF8J8ZLGCVH`,
    { mode: "cors" }
  );

  const response = await promes.json();
  console.log(response);
  procesData(response);
}

function procesData(object) {
  let days = object.days;
  let precipprobNext = new Array(15);
  let tempNext = new Array(15);
  for (i = 0; i < 15; i++) {
    precipprobNext[i] = days[i].precipprob;
    tempNext[i] = (((days[i].temp - 32) * 5) / 9).toFixed(2);
  }
  tempNext = tempNext.map((temp) => parseFloat(temp));

  const weather = {
    tempCelcius: ((object.currentConditions.temp - 32) * 5) / 9,
    maxTemp: ((object.days[0].tempmax - 32) * 5) / 9,
    minTemp: ((object.days[0].tempmin - 32) * 5) / 9,
    conditions: object.currentConditions.conditions,
    humidity: object.currentConditions.humidity,
    precipprob: object.currentConditions.precipprob,
    resolvedAddress: object.resolvedAddress,
    precipprobNext: precipprobNext,
    tempNext: tempNext,
  };
  console.log(weather.tempNext);
  updateScreen(weather);
  //return console.log(weather.conditions);
}
getWeather();

const input = document.querySelector("input");
const h1 = document.querySelector("h1");
const tempH3 = document.querySelector("#temp-h3");
const tempMaxH3 = document.querySelector("#maxtemp-h3");
const tempMinH3 = document.querySelector("#mintemp-h3");
const conditions = document.querySelector("#conditions");
const precipprob = document.querySelector(`#precip-prob`);

input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    getWeather(input.value);
  }
});

function updateScreen(weather) {
  h1.textContent = weather.resolvedAddress;
  tempH3.textContent = `Actual temp: ${weather.tempCelcius.toFixed(2)}ºC`;
  tempMaxH3.textContent = `Max temp: ${weather.maxTemp.toFixed(2)}ºC`;
  tempMinH3.textContent = `Min temp: ${weather.minTemp.toFixed(2)}ºC`;
  conditions.textContent = `Actual conditions: ${weather.conditions}`;
  precipprob.textContent = `Humidity: ${weather.humidity}% Precipitation probabilty: ${weather.precipprob}%`;
}
