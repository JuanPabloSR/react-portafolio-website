import React, { useEffect } from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me2.webp";
import HeaderSocials from "./HeaderSocials";
import "animate.css";
import ReactGA from "react-ga4";
import { pageview } from "react-ga";

const Header = () => {
  useEffect(() => {
    ReactGA.send(pageview);
  }, []); 
  ReactGA.event({
    category: "category",
    action: "test action",
    label: "label",
  });
  return (
    <header>
      <div className="container header__container">
        <h5 className="animate__animated animate__fadeInDown">Hello I'm</h5>
        <h1 className="animate__animated animate__slideInDown">
          Juan P. Sánchez
        </h1>
        <h5 className="text-light animate__animated animate__pulse">
          Fullstack Developer
        </h5>
        <CTA />
        <HeaderSocials />

        <div className="me ">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};


export default Header;
