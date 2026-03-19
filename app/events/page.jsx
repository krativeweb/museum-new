"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function EventHero() {
  return (
    <section className="event-hero">
      <div className="overlay" />

      <div className="content-wrapper">
        {/* LEFT TEXT */}
        <div className="left-content">
         <span className="tag">EVENTS</span>
<h1>
  Celebrating <br />
  Constitutional <br />
  Events & Dialogues
</h1>
<p>
  A thoughtfully curated series of national and international events,
  including conferences, panel discussions, workshops, and public forums.
  These engagements bring together scholars, policymakers, students,
  and citizens to reflect on constitutional values, democratic traditions,
  and their relevance in contemporary society.
</p>

        </div>

        {/* RIGHT COVERFLOW CAROUSEL */}
        <div className="right-content">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1.6}
            centeredSlides={true}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="event-swiper"
          >
            <SwiperSlide>
              <div className="event-slide">
                <img src="https://i.pinimg.com/736x/e3/43/d1/e343d1b7b4144fe8d96123444aeb74ce.jpg" alt="Event 1" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="event-slide">
                <img src="https://i.pinimg.com/736x/2d/0d/db/2d0ddbbf242816c4db36ec6cf4ab168e.jpg" alt="Event 2" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="event-slide">
                <img src="https://i.pinimg.com/736x/e3/43/d1/e343d1b7b4144fe8d96123444aeb74ce.jpg" alt="Event 3" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="event-slide">
                <img src="https://i.pinimg.com/736x/2d/0d/db/2d0ddbbf242816c4db36ec6cf4ab168e.jpg" alt="Event 4" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="event-slide">
                <img src="https://i.pinimg.com/736x/2d/0d/db/2d0ddbbf242816c4db36ec6cf4ab168e.jpg" alt="Event 4" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="event-slide">
                <img src="https://i.pinimg.com/736x/2d/0d/db/2d0ddbbf242816c4db36ec6cf4ab168e.jpg" alt="Event 4" />
              </div>
            </SwiperSlide>
                <SwiperSlide>
                <div className="event-slide">
                    <img src="https://i.pinimg.com/736x/2d/0d/db/2d0ddbbf242816c4db36ec6cf4ab168e.jpg" alt="Event 4" />
                </div>
                </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
