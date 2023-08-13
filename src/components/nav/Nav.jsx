import React from "react";
import "./nav.css";
import { AiFillHome } from "react-icons/ai";
import { SiAboutdotme } from "react-icons/si";
import { AiFillBook } from "react-icons/ai";
import { MdHomeRepairService } from "react-icons/md";
import { MdContactMail } from "react-icons/md";
import { useState } from "react";

const Nav = () => {
  const [isActive, setisActive] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setisActive("#")}
        className={isActive == "#" ? "active" : ""}
      >
        <AiFillHome />
      </a>
      <a
        href="#about"
        onClick={() => setisActive("#about")}
        className={isActive == "#about" ? "active" : ""}
      >
        <SiAboutdotme />
      </a>
      <a
        href="#experience"
        onClick={() => setisActive("#experience")}
        className={isActive == "#experience" ? "active" : ""}
      >
        <AiFillBook />
      </a>
      <a
        href="#services"
        onClick={() => setisActive("#services")}
        className={isActive == "#services" ? "active" : ""}
      >
        <MdHomeRepairService />
      </a>
      <a
        href="#contact"
        onClick={() => setisActive("#contact")}
        className={isActive == "#contact" ? "active" : ""}
      >
        <MdContactMail />
      </a>
    </nav>
  );
};

export default Nav;
