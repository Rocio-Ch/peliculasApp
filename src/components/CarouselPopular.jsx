import { useState, useEffect } from 'react'
// Import Swiper React components and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Navigation } from 'swiper/modules';

import { TbEyePlus } from 'react-icons/tb'
export default function CarouselPopular() {



return (
  <section className='mb-[100px]'>
    <h3 className='text-center text-xl text-white md:text-3xl'>Peliculas Mejor Puntadas</h3>
    <Swiper
      loop={true}
      navigation={true}
      autoplay={{
          delay: 2000,
          disableOnInteraction: false,
      }}
      modules={[Autoplay, Navigation]}
      slidesPerView={1}
      breakpoints={{
        '@0.00': {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        '@0.75': {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        '@1.50': {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        '@2.00': {
          slidesPerView: 5,
          spaceBetween: 10,
        },
      }}
      className="mySwiper smallCarousel"
    >
     
        <SwiperSlide key={index} className='hover:cursor-pointer'>
          <img src='' alt="movie" className='h-full max-h-[350px]' />
          <div className='text-white mt-[5px] flex justify-end'>
            <TbEyePlus className='w-[17px] h-[17px]'/>
          </div>
        </SwiperSlide>
    
    </Swiper>
  </section>
);
}