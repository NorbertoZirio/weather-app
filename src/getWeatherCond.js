import { procesData } from "./dataProcesor";

export async function getWeather(city = "La Habana") {
  const promes = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=GYNKRCLAP2XT62UF8J8ZLGCVH`,
    { mode: "cors" }
  );

  const response = await promes.json();
  console.log(response);
  procesData(response);
}
