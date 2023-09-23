import CarouselMoviesBanner from "./CarouselMoviesBanner"
import CarouselPopular from "./CarouselPopular"
import CarouselTopRated from "./CarouselTopRated"
import SearchContainer from "./SearchContainer"
import SpinnerMovie from "./SpinnerMovie"
import useLoading from "../customHooks/useLoading"

export default function MainContainer({ movieResults, setCurrentPage, currentPage, totalPages }) {

    const loading = useLoading()

    return (
        <main className="flex flex-col flex-grow">
          {loading ? (
            <SpinnerMovie />
          ) : (
            <>
              {movieResults.length === 0 ? (
                <>
                  <CarouselMoviesBanner />
                  <CarouselPopular />
                  <CarouselTopRated />
                </>
              ) : (
                <SearchContainer movieResults={movieResults} setCurrentPage={setCurrentPage} currentPage={currentPage} totalPages={totalPages} />
              )}
            </>
          )}
        </main>
      )
}