import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me2.webp";
import HeaderSocials from "./HeaderSocials";
import "animate.css";
import ReactGA from "react-ga4";

const Header = () => {
  
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
ReactGA.pageview(window.location.pathname);

export default Header;
