import React from "react";
import amazongift from "../assets/images/amazongift.svg";
import info from "../assets/images/info.svg";
import arrowRight from "../assets/images/arrowRight.svg";

const Arrivals = ({ theme }) => {
  const arrivalData = [
    {
      type: "Amazon Gift Card",
      desc: "Amazon Gift Card is a global fashion destination for 20-somethings, selling all the freshest styles complemented by exclusive content....",
      pricing: "This card has a fee of $ 0.99",
    },
    {
      type: "Amazon Gift Card",
      desc: "Amazon Gift Card is a global fashion destination for 20-somethings, selling all the freshest styles complemented by exclusive content....",
      pricing: "This card has a fee of $ 0.99",
    },
    {
      type: "Amazon Gift Card",
      desc: "Amazon Gift Card is a global fashion destination for 20-somethings, selling all the freshest styles complemented by exclusive content....",
      pricing: "This card has a fee of $ 0.99",
    },
    {
      type: "Amazon Gift Card",
      desc: "Amazon Gift Card is a global fashion destination for 20-somethings, selling all the freshest styles complemented by exclusive content....",
      pricing: "This card has a fee of $ 0.99",
    },
    {
      type: "Amazon Gift Card",
      desc: "Amazon Gift Card is a global fashion destination for 20-somethings, selling all the freshest styles complemented by exclusive content....",
      pricing: "This card has a fee of $ 0.99",
    },
    {
      type: "Amazon Gift Card",
      desc: "Amazon Gift Card is a global fashion destination for 20-somethings, selling all the freshest styles complemented by exclusive content....",
      pricing: "This card has a fee of $ 0.99",
    },
    {
      type: "Amazon Gift Card",
      desc: "Amazon Gift Card is a global fashion destination for 20-somethings, selling all the freshest styles complemented by exclusive content....",
      pricing: "This card has a fee of $ 0.99",
    },
    {
      type: "Amazon Gift Card",
      desc: "Amazon Gift Card is a global fashion destination for 20-somethings, selling all the freshest styles complemented by exclusive content....",
      pricing: "This card has a fee of $ 0.99",
    },
    {
      type: "Amazon Gift Card",
      desc: "Amazon Gift Card is a global fashion destination for 20-somethings, selling all the freshest styles complemented by exclusive content....",
      pricing: "This card has a fee of $ 0.99",
    },
    {
      type: "Amazon Gift Card",
      desc: "Amazon Gift Card is a global fashion destination for 20-somethings, selling all the freshest styles complemented by exclusive content....",
      pricing: "This card has a fee of $ 0.99",
    },
    {
      type: "Amazon Gift Card",
      desc: "Amazon Gift Card is a global fashion destination for 20-somethings, selling all the freshest styles complemented by exclusive content....",
      pricing: "This card has a fee of $ 0.99",
    },
    {
      type: "Amazon Gift Card",
      desc: "Amazon Gift Card is a global fashion destination for 20-somethings, selling all the freshest styles complemented by exclusive content....",
      pricing: "This card has a fee of $ 0.99",
    },
  ];
  return (
    <div className="arrivals">
      {arrivalData.map((arrivalData, index) => (
        <div
          key={index}
          className="card"
          style={{ background: theme && "#1e1a1a" }}
        >
          <div style={{ background: theme && "#1e1a1a" }}>
            <span style={{ color: theme && "#000000" }}>Giftcard</span>
            <div className="card_head">
              <img src={amazongift} alt="" />
              <h5>{arrivalData.type}</h5>
            </div>
            <p>{arrivalData.desc}</p>
            <p className="info">
              <img src={info} alt="" />
              <span> {arrivalData.pricing}</span>
            </p>
            <button>
              Purchase card <img src={arrowRight} alt="" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Arrivals;
