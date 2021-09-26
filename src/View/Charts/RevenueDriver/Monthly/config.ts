const rand = () => Math.round(Math.random() * 2000000 - 1000000);

function generateYearsBetween(startYear = 2020, endYear) {
  const endDate = endYear || new Date().getFullYear();
  let years = [];
  for (var i = startYear; i <= endDate; i++) {
    years.push(startYear);
    startYear++;
  }
  return years;
}

const setPeriod = (years) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const currentYear = new Date().getFullYear();
  const startPeriodYear = currentYear - years;
  const yearList = generateYearsBetween(startPeriodYear, currentYear);

  return yearList.flatMap((year) => {
    return monthNames.map((month) => {
      return `${month.substring(0, 3)}-${year}`;
    });
  });
};

function getRandomRgb() {
  var num = Math.round(0xffffff * Math.random());
  var r = num >> 16;
  var g = (num >> 8) & 255;
  var b = num & 255;
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

export const genData = (years) => {
  const period = setPeriod(years);
  return {
    labels: period,
    datasets: [
      {
        barPercentage: 1,
        categoryPercentage: 1,
        hoverBorderColor: "#3080d0",
        hoverBorderWidth: "1",
        label: "Test",
        data: [
          { x: 5, y: null },
          { x: null, y: 10 },
          { x: 20, y: 10 }
        ],
        backgroundColor: period.map(() => getRandomRgb())
      },
      {
        barPercentage: 1,
        categoryPercentage: 1,
        hoverBorderColor: "#3080d0",
        hoverBorderWidth: "1",
        grouped: true,
        label: "Gros revenue",
        data: period.map(() => rand()),
        backgroundColor: period.map(() => getRandomRgb())
      },
      {
        barPercentage: 1,
        categoryPercentage: 1,
        hoverBorderColor: "#3080d0",
        hoverBorderWidth: "1",
        grouped: true,
        label: "Gros revenue(VAT excluded)",
        data: period.map(() => rand()),
        backgroundColor: period.map(() => getRandomRgb())
      }
    ]
  };
};

export const options = {
  plugins: {
    legend: {
      display: true,
      position: "right",
      labels: {
        fontColor: "#3080d0"
      }
    }
  },
  scales: {
    x: {
      grid: {
        display: false
      },
      stacked: true
    },
    y: {
      grid: {},
      offset: false,
      ticks: {
        format: {
          style: "currency",
          currency: "USD"
        }
        // callback: (value: any, i: number) => {
        // return `${value}$`;
        // }
      }
    }
  }
};
