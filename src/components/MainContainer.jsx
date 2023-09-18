import CarouselMoviesBanner from "./CarouselMoviesBanner"
import CarouselPopular from "./CarouselPopular"
import CarouselTopRated from "./CarouselTopRated"


export default function MainContainer() {
    return (
        <main className="flex flex-col flex-grow">
            <CarouselMoviesBanner />
            <CarouselPopular />
            <CarouselTopRated />
        </main>
    )
}