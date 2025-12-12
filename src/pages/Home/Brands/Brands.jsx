import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import amazonLogo from "../../../assets/brands/amazon.png";
import casioLogo from "../../../assets/brands/casio.png";
import moonstarLogo from "../../../assets/brands/moonstar.png";
import randstadLogo from "../../../assets/brands/randstad.png";
import starLogo from "../../../assets/brands/star.png";
import startPeopleLogo from "../../../assets/brands/start_people.png";
import { Autoplay } from "swiper/modules";

const brandsLogo = [
  amazonLogo,
  casioLogo,
  moonstarLogo,
  randstadLogo,
  starLogo,
  startPeopleLogo,
  amazonLogo,
  casioLogo,
  moonstarLogo,
  randstadLogo,
  starLogo,
  startPeopleLogo,
];

const Brands = () => {
  return (
    <section className="pt-20 pb-10">
      <h2 className="text-3xl font-extrabold text-secondary text-center">
        We've helped thousands of sales teams
      </h2>
      <div className="max-w-7xl mx-auto mt-16">
        <Swiper
          slidesPerView={2}
          centeredSlides={true}
          spaceBetween={10}
          grabCursor={true}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 60,
            },
          }}
          modules={[Autoplay]}
        >
          {brandsLogo.map((logo, index) => (
            <SwiperSlide key={index}>
              <figure className="w-full flex justify-center items-center">
                <img src={logo} alt="" />
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Brands;
