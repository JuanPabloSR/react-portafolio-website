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
              <p>Responsive Desing</p>
            </li>
            <li>
              <GiSwordInStone className="service__list-icon" />
              <p>1 page</p>
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
              <p>Responsive Desing</p>
            </li>
            <li>
              <GiSwordInStone className="service__list-icon" />
              <p>Responsive Desing</p>
            </li>
            <li>
              <GiSwordInStone className="service__list-icon" />
              <p>5 pages</p>
            </li>
            <li>
              <GiSwordInStone className="service__list-icon" />
              <p>Source File</p>
            </li>
            <li>
              <GiSwordInStone className="service__list-icon" />
              <p>Convert to HTML/CSS</p>
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
              <p>Responsive Desing</p>
            </li>
            <li>
              <GiSwordInStone className="service__list-icon" />
              <p>Responsive Desing</p>
            </li>
            <li>
              <GiSwordInStone className="service__list-icon" />
              <p>10 pages</p>
            </li>
            <li>
              <GiSwordInStone className="service__list-icon" />
              <p>Source File</p>
            </li>
            <li>
              <GiSwordInStone className="service__list-icon" />
              <p>Convert to HTML/CSS</p>
            </li>
            <li>
              <GiSwordInStone className="service__list-icon" />
              <p>E-commerce functionality</p>
            </li>
            <li>
              <GiSwordInStone className="service__list-icon" />
              <p>Content upload</p>
            </li>
          </ul>
        </article>

        {/* END OF ECCOMERCE */}
      </div>
    </section>
  );
};

export default Services;
