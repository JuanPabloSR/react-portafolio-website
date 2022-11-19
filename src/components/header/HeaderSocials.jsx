import React from "react";
import { BsLinkedin, BsGithub, BsTwitter, BsYoutube } from "react-icons/bs";
import { SiUpwork } from "react-icons/si";

const HeaderSocials = () => {
  return (
    <div className="header__socials animate__animated animate__backInLeft ">
      <a
        className="item"
        href="https://github.com/JuanPabloSR"
        target="_blank"
        rel="noreferrer"
      >
        <BsGithub />
      </a>
      <a
        className="item"
        href="https://www.linkedin.com/in/juan-pablo-sanchez-rey-5216061ba/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        className="item"
        href="https://twitter.com/JPablo30TM"
        target="_blank"
        rel="noreferrer"
      >
        <BsTwitter />
      </a>
      <a
        className="item"
        href="https://www.upwork.com/freelancers/~01aa1f42199fb7d6f3"
        target="_blank"
        rel="noreferrer"
      >
        <SiUpwork />
      </a>
      <a
        className="item"
        href="https://www.youtube.com/channel/UCa1mHR24KdIy4srxuGKAOlQ"
        target="_blank"
        rel="noreferrer"
      >
        <BsYoutube />
      </a>
    </div>
  );
};

export default HeaderSocials;
