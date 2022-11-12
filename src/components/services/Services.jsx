import React from "react";
import "./service.css";
import { GiSwordInStone } from "react-icons/gi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Landing Page Desing</h3>
          </div>
          <ul className="service__list">
            <li>
              <GiSwordInStone className="service__list-icon" />
              <p>Contact Form</p>
            </li>

            <li>
              <GiSwordInStone className="service__list-icon" />
              <p>SSL security certificate</p>
            </li>

            <li>
              <GiSwordInStone className="service__list-icon" />
              <p>Hosting and domain included</p>
            </li>
            <li>
              <GiSwordInStone className="service__list-icon" />
              <p>Contact Form</p>
            </li>

            <li>
              <GiSwordInStone className="service__list-icon" />
              <p>SSL security certificate</p>
            </li>

            <li>
              <GiSwordInStone className="service__list-icon" />
              <p>Hosting and domain included</p>
            </li>
          </ul>
        </article>
        {/* END OF LANDING PAGE */}

        <article className="service">
          <div className="service__head">
            <h3>Web Page Desing</h3>
          </div>
          <ul className="service__list">
            <li>
              <GiSwordInStone className="service__list-icon" />
              <p>Contact Form</p>
            </li>

            <li>
              <GiSwordInStone className="service__list-icon" />
              <p>SSL security certificate</p>
            </li>

            <li>
              <GiSwordInStone className="service__list-icon" />
              <p>Hosting and domain included</p>
            </li>
            <li>
              <GiSwordInStone className="service__list-icon" />
              <p>Contact Form</p>
            </li>

            <li>
              <GiSwordInStone className="service__list-icon" />
              <p>SSL security certificate</p>
            </li>

            <li>
              <GiSwordInStone className="service__list-icon" />
              <p>Hosting and domain included</p>
            </li>
          </ul>
        </article>
        {/* END OF WEBSITE */}

        <article className="service">
          <div className="service__head">
            <h3>Eccomerce Desing</h3>
          </div>
          <ul className="service__list">
            <li>
              <GiSwordInStone className="service__list-icon" />
              <p>Contact Form</p>
            </li>

            <li>
              <GiSwordInStone className="service__list-icon" />
              <p>SSL security certificate</p>
            </li>

            <li>
              <GiSwordInStone className="service__list-icon" />
              <p>Hosting and domain included</p>
            </li>
            <li>
              <GiSwordInStone className="service__list-icon" />
              <p>Contact Form</p>
            </li>

            <li>
              <GiSwordInStone className="service__list-icon" />
              <p>SSL security certificate</p>
            </li>

            <li>
              <GiSwordInStone className="service__list-icon" />
              <p>Hosting and domain included</p>
            </li>
          </ul>
        </article>

        {/* END OF ECCOMERCE */}
      </div>
    </section>
  );
};

export default Services;
