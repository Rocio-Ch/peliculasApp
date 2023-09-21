import { useState, useEffect } from 'react'
import { TOKEN_ACCESS_API, API_URL } from '../../apiTMDBapp'
// Import Swiper React components and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Navigation } from 'swiper/modules';

import { TbEyePlus } from 'react-icons/tb'
export default function CarouselTopRated() {

const [topRated, setTopRated] = useState([])


useEffect(() => {
  const options = {
      method: 'GET',
      headers: {
      accept: 'application/json',
      Authorization: `Bearer ${TOKEN_ACCESS_API}`,
      }
  };
  
  fetch(`${API_URL}/movie/top_rated?language=en-US&page=1`, options)
  .then(response => response.json())
  .then(data => setTopRated(data.results))
  .catch(err => console.error(err));
}, []);

return (
  <section>
    <h3 className='text-center text-xl text-white md:text-3xl'>Top Rated Movies</h3>
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
      {topRated.map((movie, index) => (
        <SwiperSlide key={index} className='hover:cursor-pointer'>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="movie" className='h-full max-h-[350px]' />
          <div className='text-white mt-[5px] flex justify-end'>
            <TbEyePlus className='w-[17px] h-[17px]'/>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);
}