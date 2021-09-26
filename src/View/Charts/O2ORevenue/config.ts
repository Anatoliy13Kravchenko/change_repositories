export const data = {
  labels: ["Total", "Ipad", "BORIS", "Pullback", "WhatsApp", "Outreach tasks"],
  datasets: [
    {
      label: "# of Red Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: "rgb(255, 99, 132)"
    },
    {
      label: "# of Blue Votes",
      data: [2, 3, 20, 5, 1, 4],
      backgroundColor: "rgb(54, 162, 235)"
    },
    {
      label: "# of Green Votes",
      data: [3, 10, 13, 15, 22, 30],
      backgroundColor: "rgb(75, 192, 192)"
    }
  ]
};

export const options = {
  scales: {
    x: {
      stacked: false
    },
    y: {
      ticks: {
        format: {
          style: "currency",
          currency: "USD"
        },
        beginAtZero: true
      },
      stacked: true
    }
  }
};
