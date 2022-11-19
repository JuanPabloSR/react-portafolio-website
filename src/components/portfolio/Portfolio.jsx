import React from "react";
import "./portafolio.css";
import IMG1 from "../../assets/mywebpage2.png";
import IMG2 from "../../assets/oldpage3.png";
import IMG3 from "../../assets/martinezfajardo.png";
import IMG4 from "../../assets/rickandmortyAp.png";
import IMG5 from "../../assets/piensalo.png";
import IMG6 from "../../assets/candy.png";

const data = [
  {
    id:1, 
    image:IMG1,
    title: 'My Personal WebSite ReactJS',
    github: 'https://github.com/JuanPabloSR/react-portafolio-website',
    demo: 'https://github.com/JuanPabloSR'
  },
  {
    id:2, 
    image:IMG2,
    title: 'My Old WebSite Html, css, Js',
    github: 'https://github.com',
    demo: 'https://github.com/JuanPabloSR/Mipaginaweb'
  },
  {
    id:3, 
    image:IMG3,
    title: 'Website developed for a law firm',
    github: 'https://github.com/JuanPabloSR/MartinezFajardoSAS',
    demo: 'https://github.com/JuanPabloSR'
  },
  {
    id:4, 
    image:IMG4,
    title: 'Rick and Morty - Api Vue',
    github: 'https://github.com/JuanPabloSR/RickAndMortyApi',
    demo: 'https://github.com/JuanPabloSR'
  },
  {
    id:5, 
    image:IMG5,
    title: 'Website quiz contest',
    github: 'https://github.com/JuanPabloSR/PIENSALO',
    demo: 'https://piensalo.netlify.app/'
  },
  {
    id:6, 
    image:IMG6,
    title: 'Candy Crush Game, Javascript',
    github: 'https://github.com/JuanPabloSR/CandyCrushGame',
    demo: 'https://github.com/JuanPabloSR'
  },

]





const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
         data.map(({id, image, title, github, demo}) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target='_blank' rel="noreferrer">Github</a>
                <a href={demo} className="btn btn-primary" target='_blank' rel="noreferrer">Live Demo</a>
              </div>
            </article>
          )
         }) 
        }
      </div>
    </section>
  );
};
export default Portfolio;
