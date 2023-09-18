import { Carousel } from "react-carousel-minimal";

export default function CarouselMovies() {
 const data = [
    {
      image: "https://blogs.uai.com.br/opipoqueiro/wp-content/uploads/sites/54/2021/10/Duna-01.jpg",
      caption: "Dune"
    },
    {
      image: "https://neftaleon.files.wordpress.com/2011/06/xmenfirstclassukbanner.jpg",
      caption: "X-men"
    },
    {
      image: "https://www.wetanz.com/media//amasty/shopby/option_images/146768033123a810f5abad3aa0a1420b83498efab1.jpg",
      caption: "The lord of the Rings"
    }
  ];

  const captionStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: 'white',
    textShadow: '1px 0 15px #000 , -1px 0 15px #000 , 0 1px 15px #000 , 0 -1px 15px #000 , 1px 1px 15px #000 , -1px -1px 15px #000 , 1px -1px 15px #000 , -1px 1px 15px #000 '
  }
  
  return (
    <div className="Carousel">
      <div style={{ textAlign: "center" }}>
        <Carousel
        data={data}
        time={4000}
        width="100%"
        height="600px"
        captionStyle={captionStyle}
        captionPosition="bottom"
        automatic={true}
        /* dots={true} */
        slideBackgroundColor="darkgrey"
        slideImageFit="cover"
        style={{
            textAlign: "center",
            maxWidth: "100%",
            maxHeight: "600px",
        }}
        />
        <button className="bg-[#000] text-white py-[5px] px-2.5 relative bottom-[35px] text-xs rounded-lg md:px-5 md:bottom-[45px] md:text-lg">Ver detalles</button>
      </div>
    </div>
  );
}