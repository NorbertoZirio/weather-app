import Chart from "chart.js/auto";


let myChart = null;



export function createGraphic(weather) {
  
    const chart = document.querySelector("#chart").getContext("2d");

    if (myChart) {
      myChart.destroy();
    }
  
    let datos = {
    labels: [
      "Dia 1",
      "Dia 2",
      "Dia 3",
      "Dia 4",
      "Dia 5",
      "Dia 6",
      "Dia 7",
      "Dia 8",
      "Dia 9",
      "Dia 10",
      "Dia 11",
      "Dia 12",
      "Dia 13",
      "Dia 14",
      "Dia 15",
    ],
    datasets: [
      {
        label: "Probabilidad de precipitaciones",
        data: weather.precipprobNext,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  myChart=new Chart(chart, {
    type: "line",
    data: datos,
    options: {
        responsive: true,
        maintainAspectRatio: true,
        
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Grafico",
        },
      },
    },
  });
}
