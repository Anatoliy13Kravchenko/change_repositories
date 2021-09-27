import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { genData, options } from "./config";

interface Props {
  years: number;
}

const Driver = ({ years }: Props) => {
  const [data, setData] = useState(genData(years));

  useEffect(() => {
    setData(genData(years));
  }, [years]);
  // @ts-ignore
  return <Bar key={"drivers"} data={data} options={options} />;
};

export default Driver;
