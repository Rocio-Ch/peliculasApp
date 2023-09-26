import CarouselMoviesBanner from "./CarouselMoviesBanner"
import CarouselPopular from "./CarouselPopular"
import CarouselTopRated from "./CarouselTopRated"
import SearchContainer from "./SearchContainer"
import SpinnerMovie from "./SpinnerMovie"
import useLoading from "../customHooks/useLoading"

export default function MainContainer({ search }) {

  const loading = useLoading()

    return (
        <main className="flex flex-col flex-grow">
          {loading ? (
            <SpinnerMovie />
          ) : (
            <>
              {search === "" ? (
                <>
                  <CarouselMoviesBanner />
                  <CarouselPopular />
                  <CarouselTopRated />
                </>
              ) : (
                <SearchContainer search={search} />
              )}
            </>
          )}
        </main>
      )
}