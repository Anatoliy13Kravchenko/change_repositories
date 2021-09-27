/* tslint:disable */
const rand = () => Math.floor(Math.random() * 255);

export const genData = () => ({
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      type: "line",
      label: "Dataset 1",
      borderColor: `rgb(${rand()}, ${rand()}, ${rand()})`,
      fill: false,
      data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()]
    },
    {
      label: "Dataset 2",
      backgroundColor: `rgb(${rand()}, ${rand()}, ${rand()})`,
      data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()]
    },
    {
      label: "Dataset 3",
      backgroundColor: `rgb(${rand()}, ${rand()}, ${rand()})`,
      data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()]
    },
    {
      label: "Dataset 4",
      backgroundColor: `rgb(${rand()}, ${rand()}, ${rand()})`,
      data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()]
    }
  ]
});

export const options = {
  scales: {
    x: {
      stacked: true
    },
    y: {
      stacked: true,
      ticks: {
        beginAtZero: true
      }
    }
  }
};
