import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me1.jpg";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I''m</h5>
        <h1>Satyam Agarwal</h1>
        <h5 className="text-light">Front-end Developer</h5>
        <CTA />
        <HeaderSocials />
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
        <div className="me test">
          <img src={ME} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
