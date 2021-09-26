import Monthly from "./Monthly";
import Driver from "./Driver";
import RevenueFactors from "./RevenueFactors";
import React, { useEffect, useState } from "react";

const RevenueDriver = () => {
  const [years, setYears] = useState(2);
  return (
    <div>
      <div>
        <label>
          Set period by last:
          <input
            min={"1"}
            width="20"
            type="number"
            value={years}
            onChange={(event) => setYears(event.target.value)}
          />
          years
        </label>
      </div>
      <Monthly years={years} />
      <Driver />
      <RevenueFactors />
    </div>
  );
};

export default RevenueDriver;
