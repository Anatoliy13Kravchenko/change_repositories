import React from "react";
import { Bar } from "react-chartjs-2";
import { data, options } from "./config";

const RevenueFactors = () => {
  // @ts-ignore
  return <Bar data={data} options={options} />;
};

export default RevenueFactors;
