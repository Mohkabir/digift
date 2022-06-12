import React, { useEffect} from "react";
import hero from "../assets/images/hero.svg";
import amazon from "../assets/images/amazon.svg";
import mastercard from "../assets/images/mastercard.svg";
import lastCard from "../assets/images/LastCard.svg";

import "../scss/personalHomepage.scss";
import LatestArrival from "../components/LatestArrival";
import Review from "../components/Review";

const PersonalHomePage = ({ theme }) => {

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behaviour: "smooth",
    });
  };
  useEffect(() => {
    scrollTop();
  }, []);
  return (
    <div className="personalHomePage">
      <div className="hero">
        <img src={hero} alt="" />
        <div className="cards">
          <img src={amazon} alt="amazon" />
          <img src={mastercard} alt="mastercard" />
        </div>
      </div>
      <LatestArrival theme={theme} />
      <Review theme={theme} />
      {/* <div className="happiness">
        <h1>Create happ1iness from buying a gift card today.</h1>
      </div> */}
      <img src={lastCard} className="happiness_img" alt="" />
    </div>
  );
};
export default PersonalHomePage;
