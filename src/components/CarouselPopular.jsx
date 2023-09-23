import { useEffect } from 'react'
import { API_URL, API_KEY } from '../../apiTMDBapp'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { Link } from 'react-router-dom'
import { TbEyePlus } from 'react-icons/tb'
import useDataMovies from "../customHooks/useDataMovies"
import 'swiper/css'
import 'swiper/css/navigation'


export default function CarouselPopular() {

  const { getData, data } = useDataMovies()

  useEffect(() => {
      getData(`${API_URL}/movie/popular?api_key=${API_KEY}`)
  }, [])

  return (
    <section className='mb-[100px]'>
      <h3 className='text-start text-xl text-white md:text-3xl lg:text-[40px] ml-5'>Popular Movies</h3>
      <Swiper
        loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        slidesPerView={1}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          '@0.60': {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          '@0.75': {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          '@1.50': {
            slidesPerView: 6,
            spaceBetween: 20,
          },
          '@2.00': {
            slidesPerView: 8,
            spaceBetween: 10,
          },
        }}
        className="mySwiper smallCarousel"
      >
        {data.results?.map((movie, index) => (
          <SwiperSlide key={index} className='hover:cursor-pointer'>
            <Link to={`/description/${movie.id}`}>
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="movie" className='h-full max-h-[350px]' />
            </Link>
            <div className='text-white mt-[5px] flex justify-end w-[225px]'>
              <TbEyePlus className='w-[17px] h-[17px]'/>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}