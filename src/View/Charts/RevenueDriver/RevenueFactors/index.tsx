import React from "react";
import { Bar } from "react-chartjs-2";
import { data, options } from "./config.ts";

const RevenueFactors = () => {
  return <Bar data={data} options={options} />;
};

export default RevenueFactors;
