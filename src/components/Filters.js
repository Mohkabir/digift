import React from "react";

const Filters = ({ theme }) => {
  return (
    <div className="filters" style={{ background: theme && "#1e1a1a" }}>
      <div>
        <div className="filter_head">
          <h5>Filters</h5>
          <p>Reset</p>
        </div>
        <h5>Categories</h5>
        <div>
          <div>
            <input type="checkbox" name="Ecommerce" value="Ecommerce" />
            <label for="vehicle1"> Ecommerce</label>
          </div>

          <div>
            <input type="checkbox" name="Popular" value="Popular" />
            <label for="vehicle2"> Popular</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="Airtime"
              value="Airtime & Electricity"
            />
            <label for="AirtimeElectricity">Airtime & Electricity</label>
          </div>
          <div>
            <input type="checkbox" name="Gaming" value="Gaming" />
            <label for="Gaming"> Gaming</label>
          </div>
          <div>
            <input type="checkbox" name="Electronics" value="Electronics" />
            <label for="Electronics"> Electronics</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="ClothesFashion"
              value="Clothes and Fashion"
            />
            <label for="Clothes"> Clothes and Fashion</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="JewelryWatches"
              value="JewelryWatches"
            />
            <label for="JewelryWatches"> Jewelry & Watches</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="Homefurnitures"
              value="Homefurnitures"
            />
            <label for="Homefurnitures"> Home and furnitures</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="SportsEntertainment"
              value="SportsEntertainment"
            />
            <label for="SportsEntertainment"> Sports & Entertainment</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
