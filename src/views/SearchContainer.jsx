import * as React from "react"
import { useEffect } from "react"

// Environment Variables
import { API_KEY, API_URL } from "../../apiTMDBapp"

// Custom Hooks
import useDataMovies from "../customHooks/useDataMovies"
import useLoading from "../customHooks/useLoading"
import SpinnerMovie from "../components/SpinnerMovie"

// Components
import CardMovie from "../components/CardMovie"
import PaginationRounded from "../components/PaginationRounded"


export default function SearchContainer({ search }) {
  const loading = useLoading()
  const { getData, data, totalPages, currentPage, setCurrentPage } =
    useDataMovies()

  useEffect(() => {
    getData(
      `${API_URL}/search/movie?api_key=${API_KEY}${
        search ? `&query=${search}` : ""
      }&page=${currentPage}`
    )
  }, [search, currentPage])

  return (
    <div className="mb-[70px] h-full flex flex-col lg:mb-0">
      <div className="flex items-center justify-center mt-[100px] mx-[35px] mb-[30px]">
        <h2 className="font-['Limelight'] text-2xl mt-4 mb-2 text-white text lg:text-[40px]">
          Search results
        </h2>
      </div>
      <section className="mx-[35px] mb-[80px] flex flex-wrap grow justify-center lg:mb-0">
      {loading ? (
          <SpinnerMovie />
        ) : (
          <>
            {data.results?.map((movie) => {
              return (
                <CardMovie key={movie.id} title={movie.title} poster={movie.poster_path} id={movie.id} />
              )
            })}
          </>
        )}
      </section>
      <PaginationRounded
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </div>
  )
}
