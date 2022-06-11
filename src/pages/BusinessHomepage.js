import React from "react";
import "../scss/businessPage.scss";
import dashboard from "../assets/images/dashboard.svg";
import chooseUs from "../assets/images/choose-us.svg";
import code from "../assets/images/code-img.svg";
import design from "../assets/images/design.svg";

const BusinessHomepage = ({ theme }) => {
  return (
    <div className="businessHomepage">
      <div className="hero">
        <div>
          <h1>
            Expand the giftcard industry, <span>one card</span> at a time!
          </h1>
          <p>
            Digift helps businesses connect with customers by letting them offer
            their business gift cards to a large number of people.
          </p>
          <div className="btn_group">
            <button>Get started</button>
            <button>Sign In</button>
          </div>
        </div>
        <div>
          <img src={dashboard} alt="dashboard img" />
        </div>
      </div>

      <div className="section1">
        <div>
          <p>Digift helps businesses </p>
          <h1>
            Why do fast-growing <br /> merchant and vendor <br /> choose
            <img src={chooseUs} alt="chooseUs" />
            us?
          </h1>
          <p>
            Whether you’re a business looking to sell your own gift cards, a{" "}
            <br />
            company looking for bulk gift card solution, digift is for you.
          </p>
          <p>Create an account today</p>
        </div>
      </div>
      <div className="design">
        <div style={{ background: theme ? "#1e1a1a" : "" }}>
          <div>
            <h2>
              Designed for <br /> today’s <span>ambitious</span>
              <br /> businesses.
            </h2>
            <p>
              We give merchants the ability to sell digital Gift Cards for their
              business quickly, intuitively and affordably.
            </p>
          </div>
          <img src={design} alt="design" />
        </div>
        <div style={{ background: theme ? "#1e1a1a" : "" }}>
          <div>
            <h2>
              Features that <br />
              <span>empower</span> your <br /> business
            </h2>
            <p>
              Automate your sales and marketing so you can focus on other areas
              of your business.
            </p>
          </div>
          <img src={design} alt="design" />
        </div>
      </div>
      <div className="hero section_last">
        <div>
          <h1>
            Our API is built to be as
            <span> lightweight</span> and efficient as possible.
          </h1>
          <p>We offer client and server libraries in everything from our API</p>
          <div className="btn_group">
            <button>Get started</button>
            <button>Sign In</button>
          </div>
        </div>
        <div>
          <img src={code} alt="code img" />
        </div>
      </div>
    </div>
  );
};

export default BusinessHomepage;
