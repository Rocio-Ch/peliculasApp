// Components
import CarouselMoviesBanner from "./CarouselMoviesBanner"
import CarouselPopular from "./CarouselPopular"
import CarouselTopRated from "./CarouselTopRated"
import SpinnerMovie from "./SpinnerMovie"

// Custom Hooks
import useLoading from "../customHooks/useLoading"

export default function MainContainer() {
  const loading = useLoading()

  return (
    <main className="flex flex-col flex-grow">
      {loading ? (
        <SpinnerMovie />
      ) : (
        <>
          <CarouselMoviesBanner />
          <CarouselPopular />
          <CarouselTopRated />
        </>
      )}
    </main>
  )
}
