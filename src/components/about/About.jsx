import React from "react";
import "./about.css";
import ME from "../../assets/yo.webp";
import { FaAward } from "react-icons/fa";
import { ImUsers } from "react-icons/im";
import { BsFileCodeFill } from "react-icons/bs";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container ">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards animate__animated animate__rotateInUpLeft">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>+2 years working as developer</small>
            </article>

            <article className="about__card">
              <ImUsers className="about__icon" />
              <h5>Clients</h5>
              <small>+12 satisfied personal clients</small>
            </article>

            <article className="about__card">
              <BsFileCodeFill className="about__icon" />
              <h5>Projects</h5>
              <small>+25 projects of all types</small>
            </article>
          </div>

          <p>
            Hi, I am a fullstack developer with more than 2 years of experience
            in the industry. <br/>
            I have experience developing landingpages,
            webPages, Ecommerce, Apis, microservices etc. <br />
            I use for the frontend 
            Html, Css, Sass, Bootstrap, Materialize, Javascript, Typescript,
            Reactjs, Angular. <br /><br />
            For the backend Java with Springboot, Webflux, I'm
            learning NodeJs Database relational and non-relational, Mysql,
            Oracle, MongoDB <br /> 
             I look forward to working with you
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};
export default About;
