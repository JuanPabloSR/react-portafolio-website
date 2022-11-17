import React from "react";
import "./contact.css";
import {BsLinkedin, BsWhatsapp} from 'react-icons/bs';
import {IoMdMail} from 'react-icons/io';

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <IoMdMail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>juanpablosanchez744@gmail.com</h5>
            <a href="mailto:juanpablosanchez744@gmail.com" target="_blank" rel="noreferrer">Send message</a>
          </article>

          <article className="contact__option">
            <BsLinkedin className="contact__option-icon"/>
            <h4>Linkedin</h4> 
            <h5>Juan Pablo Sánchez Rey</h5>
            <a href="https://www.linkedin.com/in/juan-pablo-sanchez-rey/" target="_blank" rel="noreferrer" >Send message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon"/>
            <h4>Whatsapp</h4>  
            <h5>+57 300 2535 687</h5>
            <a href="https://api.whatsapp.com/send?phone=573002535687&text=Hola%2C%20trabajemos%20juntos!" target="_blank" rel="noreferrer">Send message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form action="">
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="email" name="email" placeholder="Your Email" required/>
          <textarea type="message" rows="7" name="name" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};
export default Contact;
