import * as React from "react"
import { useEffect } from "react"
import { Link } from "react-router-dom"

// Environment Variables
import { API_KEY, API_URL } from "../../apiTMDBapp"

// Material UI components and styles
import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"

// Components
import SpinnerMovie from "./SpinnerMovie"
import PaginationRounded from "./PaginationRounded"

// Custom Hooks
import useDataMovies from "../customHooks/useDataMovies"
import useLoading from "../customHooks/useLoading"

export default function LatestReleases() {
  const { getData, data, totalPages, currentPage, setCurrentPage } =
    useDataMovies()
  const loading = useLoading()

  useEffect(() => {
    getData(
      `${API_URL}/movie/now_playing?api_key=${API_KEY}&page=${currentPage}`
    )
  }, [currentPage, totalPages])

  return (
    <section className="h-full bg-[#030317] flex flex-col text-white pt-24">
      <h1 className="font-['Limelight'] uppercase text-center text-xl md:text-3xl py-[25px] mt-5 lg:text-[40px]">
        Latest Releases
      </h1>
      <section className="mx-[35px] flex flex-wrap grow justify-center">
        {loading ? (
          <SpinnerMovie />
        ) : (
          <>
            {data.results?.map((movie) => (
              <Link to={`/description/${movie.id}`} key={movie.id}>
                <Card className="w-[250px] h-[340px] m-10 hover:transition hover:duration-300 hover:ease-in-out hover:shadow-lg dark:hover:shadow-[0px_5px_30px_0px_rgba(24,17,167,79%)] hover:scale-105">
                  <CardMedia
                    className="h-[300px]"
                    component="img"
                    alt={movie.title}
                    image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  />
                  <Typography
                    sx={{
                      padding: "8px",
                      textAlign: "center",
                      fontWeight: "700",
                      fontSize: "1.1rem",
                    }}
                    component="div"
                  >
                    {movie.title}
                  </Typography>
                </Card>
              </Link>
            ))}
          </>
        )}
      </section>
      <PaginationRounded
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </section>
  )
}
