import React from 'react'
import Arrivals from './Arrivals'
import Filters from './Filters'

const LatestArrival = () => {
  return (
    <div className="latestArrival">
      <h4>Latest Arrivals</h4>
      <div className="arrivalWrapper">
        <Filters />
        <Arrivals />
      </div>
    </div>
  );
}

export default LatestArrival