import React from "react";
import "./experience.css";
import {
  SiJava,
  SiAngular,
  SiCss3,
  SiBootstrap,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiOracle,
  SiRabbitmq,
  SiSpringboot,
  SiMongodb,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <SiHtml5 className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiCss3 className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiJavascript className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiBootstrap className='experience__details-icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiAngular className='experience__details-icon'/>
              <div>
                <h4>Angular</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiReact className='experience__details-icon'/>
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND */}
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <SiJava className='experience__details-icon'/>
              <div>
                <h4>Java</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiSpringboot className='experience__details-icon'/>
              <div>
                <h4>SpringBoot</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <GrMysql className='experience__details-icon'/>
              <div>
                <h4>MySql</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiMongodb className='experience__details-icon'/>
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiOracle className='experience__details-icon'/>
              <div>
                <h4>Oracle</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiRabbitmq className='experience__details-icon'/>
              <div>
                <h4>RabbitMQ</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF BACKEND */}
      </div>
    </section>
  );
};
export default Experience;
