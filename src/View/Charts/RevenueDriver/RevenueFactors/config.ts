export const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [
        [1, 30],
        [12, 19],
        [9, 15]
      ],
      barPercentage: 1,
      categoryPercentage: 1,
      hoverBorderColor: "#3080d0",
      hoverBorderWidth: "1",
      grouped: true,
      backgroundColor: "rgba(255, 99, 132, 0.2)"
    },
    {
      label: "# of Green Votes",
      data: [
        [15, 30],
        [11, 17],
        [9, 13]
      ],
      barPercentage: 1,
      categoryPercentage: 1,
      hoverBorderColor: "#3080d0",
      hoverBorderWidth: "1",
      grouped: true,
      backgroundColor: "rgb(75, 192, 192)"
    },
    {
      label: "# of Blue Votes",
      data: [
        [12, 25],
        [10, 15],
        [7, 12]
      ],
      barPercentage: 1,
      categoryPercentage: 1,
      hoverBorderColor: "#3080d0",
      hoverBorderWidth: "1",
      grouped: true,
      backgroundColor: "rgb(54, 162, 235)"
    }
  ]
};

export const options = {
  scales: {
    y: {
      ticks: {
        beginAtZero: true
      }
    },
    x: {
      stacked: false
    }
  }
};
