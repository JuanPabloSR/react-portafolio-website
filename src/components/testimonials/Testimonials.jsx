import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
 
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Devin Dixon - Founder & CEO at BingeWave",
    review:
      "Working with Juan Pablo was a good experience, he helped us with a code revision for a project we are developing in React.",
  },
  {
    avatar: AVTR2,
    name: "Derus Mantilla - Developer",
    review:
      "I have been able to study and work with Juan, he is an incredible developer with a lot of passion for what he does, I wish him the best.",
  },
  {
    avatar: AVTR3,
    name: "Johan Garcia - Lawyer",
    review:
      "Juan Pablo helped me creating my web site for my law firm, everything very professional and on time, I would recommend him without hesitation.",
  },
  {
    avatar: AVTR4,
    name: "Camilo Garcia - Developer",
    review:
      "I met Juan Pablo in college, I have done several freelance jobs with him, without a doubt he is a great developer, with great programming skills.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonails__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="Avatar" />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
export default Testimonials;
