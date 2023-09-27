import { Link } from "react-router-dom"

// Import Swiper React components and modules
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"

// Icons
import { TbEyePlus } from "react-icons/tb"

// Import Swiper React styles
import "swiper/css"
import "swiper/css/navigation"

export default function CarouselMovies({ data }) {

  return (
      <Swiper
        loop={true}
        autoplay={{
          delay: 3250,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        slidesPerView={1}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          "@0.60": {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          "@0.75": {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          "@1.50": {
            slidesPerView: 6,
            spaceBetween: 20,
          },
          "@2.00": {
            slidesPerView: 8,
            spaceBetween: 10,
          },
        }}
        className="mySwiper smallCarousel"
      >
        {data.results?.map((movie, index) => (
          <SwiperSlide key={index} className="hover:cursor-pointer">
            <Link to={`/description/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt="movie"
                className="h-full max-h-[350px]"
              />
            </Link>
            <div className="mt-[5px] text-white flex justify-end w-[225px]">
              <TbEyePlus className="w-[17px] h-[17px]" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
  )
}
