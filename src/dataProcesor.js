import { updateScreen } from "./screenUpdate";

export function procesData(object) {
  let days = object.days;
  let precipprobNext = new Array(15);
  let tempNext = new Array(15);
  for (let i = 0; i < 15; i++) {
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