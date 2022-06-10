import React from "react";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
import insta from "../assets/images/insta.svg";
import facebook from "../assets/images/facebook.svg";
import twitter from "../assets/images/twitter.svg";
import linkedin from "../assets/images/linkedin.svg";
import arrowTop from "../assets/images/arrowTop.svg";
import search from "../assets/images/search.svg";
import arrowRight from "../assets/images/arrowRight.svg";
import light from "../assets/images/light.svg";
import dark from "../assets/images/dark.svg";
import getstarted from "../assets/images/getstarted.svg";



const HomepageLayout = (props) => {
  return (
    <div>
      <header>
        <div id="logo">
          <img src={logo} alt="logo" />
        </div>
        <div>
          <Link to="/">
            <p>
              Personal <img src={arrowRight} alt="arrowRight" />
            </p>
          </Link>
          <Link to="/businessHomepage">
           <p>
            Business <img src={arrowRight} alt="arrowRight" />
          </p>
          </Link>

        
          <div className="input_wrapper">
            <img src={search} alt="search" />
            <input type="text" placeholder="Find cards anywhere" />
          </div>
        </div>
        <div>
          <div className="theme_toggle">
            <div className="light">
              <img src={light} alt="light" />
            </div>
            <div className="dark">
              <img src={dark} alt="dark" />
            </div>
          </div>
          <div className="login">
            <p>Login</p>
            <Link to="/businessHomepage">
              <button>
                Get started <img src={getstarted} alt="getstarted" />
              </button>
            </Link>
          </div>
        </div>
      </header>
      <div>{props.children}</div>
      <footer>
        <div className="row1">
          <div>
            <img src={logo} alt="logo" />
            <p>Creating Happiness One Giftcard at a Time.</p>
            <div className="social">
              <img src={insta} alt="insta" />
              <img src={twitter} alt="twitter" />
              <img src={facebook} alt="facebook" />
              <img src={linkedin} alt="linkedin" />
            </div>
          </div>
          <div>
            <h5>Contact us</h5>
            <p>hello@digiftng.com</p>
            <div>
              <h5>Office</h5>
              <p>
                226, Awolowo road, Ikoyi, <br /> Lagos State, Nigeria
              </p>
              <span>Our privacy policy - Terms and Condition</span>
            </div>
          </div>
          <ul>
            <h5>Company</h5>
            <li>
              <Link to="">Careers</Link>
            </li>
            <li>
              <Link to="">FAQ</Link>
            </li>
          </ul>
          <ul>
            <h5>Products</h5>
            <li>
              <Link to="">Contact</Link>
            </li>
            <li>
              <Link to="">Personal</Link>
            </li>
            <li>
              <Link to="">Business</Link>
            </li>
            <li>
              <Link to="">Vendor</Link>
            </li>
          </ul>
          <ul>
            <h5>Contact</h5>
            <li>
              <Link to="">Contact</Link>
            </li>
            <li>
              <Link to="">Instagram</Link>
            </li>
            <li>
              <Link to="">Twitter</Link>
            </li>
            <li>
              <Link to="">LinkedIn</Link>
            </li>
            <li>
              <Link to="">Facebook</Link>
            </li>
          </ul>
        </div>
        <div className="row2">
          <div>
            <a href="#logo"><img src={arrowTop} alt="arrowTop" /></a>
            
          </div>
          <p>
            The website www.digiftng.com is owned and operated by Blinksky
            Nigeria Limited, a company duly registered under the Laws of the
            Federal Republic of Nigeria with RC Number: 1656204. Trademark to
            all logos of Giftcards are owned by their respective brands and
            Blinksky Nigeria Limited doesn’t claim ownership of these
            trademarks. All Giftcards dominated in USD are provided in
            conjunction with BlinkSky Inc. Users must have valid US account and
            in some cases a valid US address before purchasing.
          </p>
        </div>
        <p className="copy">Copyright © 2022 Blinksky Nigeria Limited</p>
      </footer>
    </div>
  );
};

export default HomepageLayout;
