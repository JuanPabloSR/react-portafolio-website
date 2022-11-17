import React from "react";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://github.com/JuanPabloSR" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/juan-pablo-sanchez-rey-5216061ba/"
        target="_blank" rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://twitter.com/JPablo30TM" target="_blank" rel="noreferrer">
        <BsTwitter />{" "}
      </a>
    </div>
  );
};

export default HeaderSocials;
