// Import Swiper React components
import { useEffect } from 'react'
import { API_URL, API_KEY } from '../../apiTMDBapp'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { Link } from 'react-router-dom'
import { EffectFade, Navigation, Pagination } from 'swiper/modules'
import useDataMovies from "../customHooks/useDataMovies"
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function CarouselMoviesBanner() {

    const { getData, data } = useDataMovies()

    useEffect(() => {     
        getData(`${API_URL}/movie/now_playing?api_key=${API_KEY}`)
    }, [])

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
                delay: 2500,
                disableOnInteraction: false,
            }}
            modules={[EffectFade, Navigation, Pagination, Autoplay]}
            loop={true}
            className="mySwiper relative w-full max-h-[750px] mt-[90px] mb-[100px]"
        >
            {data.results?.map((movie) => (
                <SwiperSlide key={movie.id} className='bg-center bg-cover'>
                    <div className='relative w-full text-white flex justify-center'>
                        <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} className='w-full max-h-[900px] block' />
                    </div>
                    <div className='absolute flex flex-col items-center justify-center text-white w-[90%] bottom-[30px] p-2.5 bg-[#030317b0] rounded lg:p-5 lg:text-[2rem] xl:w-2/5 xl:bottom-10'>
                        <h2 className='text-center text-sm font-semibold mb-2 md:text-xl xl:mb-4 xl:text-[2rem]'>{movie.title}</h2>
                        <Link to={`/description/${movie.id}`} >
                            <button className='text-xs py-1 px-4 bg-[#007aff] rounded lg:py-1 lg:px-6 lg:bottom-[120px] lg:text-lg'>More</button>
                        </Link>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
        </>
    )
}