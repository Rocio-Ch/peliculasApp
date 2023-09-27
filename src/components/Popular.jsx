import * as React from "react"
import { useEffect } from "react"

// Environment Variables
import { API_KEY, API_URL } from "../../apiTMDBapp"

// Components
import SpinnerMovie from "./SpinnerMovie"
import PaginationRounded from "./PaginationRounded"
import CardMovie from "./CardMovie"

// Custom Hooks
import useDataMovies from "../customHooks/useDataMovies"
import useLoading from "../customHooks/useLoading"

export default function Popular() {
  const { getData, data, totalPages, currentPage, setCurrentPage } =
    useDataMovies()
  const loading = useLoading()

  useEffect(() => {
    getData(`${API_URL}/movie/popular?api_key=${API_KEY}&page=${currentPage}`)
  }, [currentPage, totalPages])

  return (
    <section className="h-full bg-[#030317] flex flex-col text-white pt-24">
      <h1 className="font-['Limelight'] uppercase text-center text-xl md:text-3xl py-[25px] mt-5 lg:text-[40px]">
        Popular Movies
      </h1>
      <section className="mx-[35px] flex flex-wrap grow justify-center">
        {loading ? (
          <SpinnerMovie />
        ) : (
          <>
            {data.results?.map((movie) => (
              <CardMovie key={movie.id} id={movie.id} title={movie.title} poster={movie.poster_path}  />
            ))}
          </>
        )}
      </section>
      <PaginationRounded
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </section>
  )
}
