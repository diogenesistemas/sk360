export const RadarData = {
  labels: ["Comunicação", "Liderança", "Ética", "Trabalho em equipe", "Adaptabilidade","Gestão de tempo", "Criatividade", "Senso crítico"],
  datasets: [
    {
      label: "Soft Skills",
      backgroundColor: "rgba(34, 202, 236, .2)",
      borderColor: "rgba(34, 202, 236, 1)",
      pointBackgroundColor: "rgba(34, 202, 236, 1)",
      poingBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(34, 202, 236, 1)",
      data: ['10', '8', '6', '6', '5', '3', '2', '0']
    }
  ]
};
export const RadarOptions = {
  scale: {
    ticks: {
      min: 0,
      max: 10,
      stepSize: 1,
      showLabelBackdrop: false,
      backdropColor: "rgba(203, 197, 11, 1)"
    },
    angleLines: {
      color: "rgba(255, 255, 255, .3)",
      lineWidth: 1
    },
    gridLines: {
      color: "rgba(255, 255, 255, .3)",
      circular: true
    }
  }
};
