// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import required modules
import { Autoplay } from 'swiper/modules';
export default function CarouselTopRated() {

    const data = [
        {
          image: "https://blogs.uai.com.br/opipoqueiro/wp-content/uploads/sites/54/2021/10/Duna-01.jpg",
        },
        {
          image: "https://neftaleon.files.wordpress.com/2011/06/xmenfirstclassukbanner.jpg",
        },
        {
          image: "https://www.wetanz.com/media//amasty/shopby/option_images/146768033123a810f5abad3aa0a1420b83498efab1.jpg",
        },
        {
          image: "https://www.infobae.com/new-resizer/YiZkyGKmh_4wjB0mr0HV8uXoFRQ=/1024x512/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/QNRAM7YSTJE5PHCXWU4FGQWV54.jpg",
        },
        {
          image: "https://i.ytimg.com/vi/ZgrCZVjPg9g/maxresdefault.jpg",
        },
        {
          image: "https://blogs.uai.com.br/opipoqueiro/wp-content/uploads/sites/54/2021/10/Duna-01.jpg",
        },
        {
          image: "https://neftaleon.files.wordpress.com/2011/06/xmenfirstclassukbanner.jpg",
        },
        {
          image: "https://www.wetanz.com/media//amasty/shopby/option_images/146768033123a810f5abad3aa0a1420b83498efab1.jpg",
        },
        {
          image: "https://www.infobae.com/new-resizer/YiZkyGKmh_4wjB0mr0HV8uXoFRQ=/1024x512/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/QNRAM7YSTJE5PHCXWU4FGQWV54.jpg",
        },
        {
          image: "https://i.ytimg.com/vi/ZgrCZVjPg9g/maxresdefault.jpg",
        }
      ];

      
      return (
        <>
          <h3 className='text-center text-xl p-4 text-white md:text-2xl lg:text-3xl'>Peliculas Mejor Puntadas</h3>
          <Swiper
            loop={true}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
            modules={[Autoplay]}
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
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <img src={item.image} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      );
}