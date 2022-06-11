import React from "react";
import Arrivals from "./Arrivals";
import Filters from "./Filters";

const LatestArrival = ({ theme }) => {
  return (
    <div className="latestArrival">
      <h4>Latest Arrivals</h4>
      <div className="arrivalWrapper">
        <Filters theme={theme} />
        <Arrivals theme={theme} />
      </div>
    </div>
  );
};

export default LatestArrival;
