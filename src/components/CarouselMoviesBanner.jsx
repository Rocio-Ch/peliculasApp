// Import Swiper React components
/* import React, { useRef, useState } from 'react';
import { useEffect } from 'react'; */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

export default function CarouselMoviesBanner() {

  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        loop={true}
        className="mySwiper relative w-full max-h-[750px] mt-[60px]"
      >
        <SwiperSlide className='bg-center bg-cover'>
                <div className='relative w-full text-white flex justify-center'>
                    <img src="" className='w-full max-h-[900px] block' />
                </div>
                <div className='absolute flex flex-col items-center justify-center text-white w-[90%] bottom-[30px] p-2.5 bg-[#030317b0] rounded lg:p-5 lg:text-[2rem] xl:w-2/5 xl:bottom-10'>
                      <h1 className='text-sm font-semibold mb-2 md:text-xl xl:mb-4 xl:text-[2rem]'></h1>
                      <button className='text-xs py-1 px-4 bg-[#007aff] rounded lg:py-1 lg:px-6 lg:bottom-[120px] lg:text-lg'>Ver más</button>
                </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}