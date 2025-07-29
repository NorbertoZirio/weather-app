//const cityName = prompt("Ingresa una ciudad");

async function getWeather(city) {
  const promes = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=GYNKRCLAP2XT62UF8J8ZLGCVH`,
    { mode: "cors" }
  );

  const response = await promes.json();
  console.log(response);
  procesData(response);
}

function procesData(object) {
  const weather = {
    tempCelcius: ((object.currentConditions.temp - 32) * 5) / 9,
    conditions: object.currentConditions.conditions,
    humidity: object.currentConditions.humidity,
    precipprob: object.currentConditions.precipprob,
  };

  return console.log(weather.conditions);
}

//getWeather(cityName);
