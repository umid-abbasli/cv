// src/components/MySwiper.js
'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { Navigation, Pagination } from 'swiper/modules'; // Import necessary modules

const MySwiper = ({ slides = [], slidesPerView = 1, centeredSlides = false, spaceBetween = 50, autoplayDelay = 3000, paginationClickable = true }) => {
    return (
      <Swiper
        modules={[Navigation, Pagination]} // Pass modules as an array
        autoplay={{ delay: autoplayDelay }} // Autoplay with dynamic delay
        spaceBetween={spaceBetween} // Space between slides
        slidesPerView={slidesPerView} // Display slides per view dynamically
        navigation // Enable navigation arrows
        centeredSlides={centeredSlides}
        loop={true}
        pagination={{ clickable: paginationClickable }} // Enable clickable pagination dots
      >
        {slides.map((slideContent, index) => (
          <SwiperSlide key={index}>
            {slideContent}
          </SwiperSlide>
        ))}
      </Swiper>
    );
  };  

export default MySwiper;
