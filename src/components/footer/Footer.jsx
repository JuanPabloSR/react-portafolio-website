import React from "react";
import "./footer.css";
import { BsLinkedin, BsGithub, BsTwitter,BsYoutube } from "react-icons/bs";
import { SiUpwork } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <a href="/#" className="footer__logo animate__animated animate__flash">
        JuanSanchezDev
      </a>

      <ul className="permalinks">
        <li>
          <a href="/#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials animate__animated animate__fadeInUp">
        <a href="https://github.com/JuanPabloSR">
          <BsGithub />
        </a>
        <a href="https://www.linkedin.com/in/juan-pablo-sanchez-rey/">
          <BsLinkedin />
        </a>
        <a href="https://twitter.com/JPablo30TM">
          <BsTwitter />
        </a>
        <a href="https://www.youtube.com/channel/UCa1mHR24KdIy4srxuGKAOlQ">
          <BsYoutube />
        </a>
        <a href="https://www.upwork.com/freelancers/~01aa1f42199fb7d6f3">
          <SiUpwork />
        </a>
      </div>

      <div className="footer__copyright animate__animated animate__fadeInUp">
        <small>&copy; JuanSanchezDev All rights reserved </small>
      </div>
    </footer>
  );
};
export default Footer;
