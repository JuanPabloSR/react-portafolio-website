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
    name: "Johan Garcia",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos laboriosam, perspiciatis ut asperiores recusandae repellendus quasi facere sint maiores nesciunt.",
  },
  {
    avatar: AVTR2,
    name: "Devin Dixon",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos laboriosam, perspiciatis ut asperiores recusandae repellendus quasi facere sint maiores nesciunt.",
  },
  {
    avatar: AVTR3,
    name: "Ana Rivera",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos laboriosam, perspiciatis ut asperiores recusandae repellendus quasi facere sint maiores nesciunt.",
  },
  {
    avatar: AVTR4,
    name: "Tassleem Ansari",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos laboriosam, perspiciatis ut asperiores recusandae repellendus quasi facere sint maiores nesciunt.",
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
