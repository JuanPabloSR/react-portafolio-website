import React from "react";
import "./about.css";
import ME from "../../assets/meee.jpeg";
import { FaAward } from "react-icons/fa";
import { ImUsers } from "react-icons/im";
import { GiEvilBook } from "react-icons/gi";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>

            <article className="about__card">
              <ImUsers className="users__icon" />
              <h5>Clients</h5>
              <small>12+ Satisfied Clients </small>
            </article>

            <article className="about__card">
              <GiEvilBook className="project__icon" />
              <h5>Projects</h5>
              <small>26+ Completed</small>
            </article>
          </div>

          <p>
            I am a young fullstack developer from Colombia.
            <br />I have been passionate about programming for years, I have
            been able to work for companies, as well as I have done freelance
            development.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};
export default About;
