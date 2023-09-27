import { useEffect } from "react"
import { useParams, Link } from "react-router-dom"

// Environment Variables
import { API_URL, API_KEY } from "../../apiTMDBapp"

// Icons
import { ImPlay2 } from "react-icons/im"
import { BiSolidStar } from "react-icons/bi"

// Components
import SpinnerMovie from "./SpinnerMovie"

// Custom Hooks
import useDataMovies from "../customHooks/useDataMovies"
import useLoading from "../customHooks/useLoading"

// Images
import defaultPoster from "../assets/defaultPoster.png"
import defaultBackdrop from "../assets/defaultBackdrop1.jpg"

export default function DetailMovie() {
  const { getData, data } = useDataMovies()
  const loading = useLoading()
  const { id } = useParams()

  useEffect(() => {
    getData(`${API_URL}/movie/${id}?api_key=${API_KEY}`)
  }, [id])

  return (
    <section>
      {loading ? (
        <SpinnerMovie />
      ) : (
        <>
          <div
            className="h-screen flex flex-col items-center flex-grow pt-[110px] bg-cover bg-top bg-no-repeat blur-sm opacity-50"
            style={{
              backgroundImage: `url(${
                data.backdrop_path
                  ? `https://image.tmdb.org/t/p/original/${data.backdrop_path}`
                  : defaultBackdrop
              })`,
            }}
          ></div>
          <div className="w-[90%] left-[5%] top-[-4%] absolute flex flex-col items-center justify-center text-white min-[600px]:top-[0%] lg:flex-row lg:w-full lg:top-[15%] lg:left-[0%] lg:top-[15%]">
            <div className="flex justify-center w-full h-[100%] md:w-[70%] lg:max-w-[500px] lg:mr-2.5 lg:px-5">
              <div
                className="h-[350px] w-[300px] mt-[102px] bg-no-repeat bg-center bg-cover lg:h-[600px] lg:w-[460px] lg:mt-0 shadow-[0px_0px_30px_1px_rgba(64,64,69,43%)]"
                style={{
                  backgroundImage: `url(${
                    data.poster_path
                      ? `https://image.tmdb.org/t/p/original/${data.poster_path}`
                      : defaultPoster
                  })`,
                }}
              />
            </div>
            <div className="w-full md:w-[70%] lg:max-w-[700px] lg:h-[600px] lg:flex lg:flex-col lg:justify-between">
              <div className="bg-[#030317b0] p-2.5 my-2.5 rounded-lg lg:mt-0 lg:p-[20px] lg:mr-5">
                <div className="flex flex-wrap items-center justify-between mt-2 mb-4 px-1">
                  <h3 className="font-bold mb-2.5 lg:text-2xl">
                    {data.title} -{" "}
                    <span className="font-normal">
                      {data.release_date?.split("-")[0]}
                    </span>
                  </h3>
                  <Link
                    to={`/trailer/${id}`}
                    className="flex items-center mb-2.5 hover:text-blue-500"
                  >
                    <ImPlay2 size={20} />
                    <span className="ml-1 sm:text-base">Trailer</span>
                  </Link>
                </div>
                <p className="text-xs px-1 sm:text-base">{data.overview}</p>
                <div className="flex flex-wrap my-4 px-1">
                  {data.genres &&
                    data.genres.map(({ name, id }) => (
                      <p
                        key={id}
                        className="text-xs font-bold p-2.5 mr-2.5 mb-2.5 py-1 border rounded-full lg:text-base"
                      >
                        {name}
                      </p>
                    ))}
                </div>
                <div className="flex items-center my-4 px-1">
                  <BiSolidStar size={20} className="text-amber-400" />
                  <span className="ml-1 font-black">{data.vote_average}</span>
                </div>
                <div className="flex items-center">
                  <a
                    href={`https://www.imdb.com/title/${data.imdb_id}`}
                    target="_blank"
                    className="flex flex-col justify-center group relative h-8 w-20 overflow-hidden rounded-lg bg-white text-lg shadow"
                  >
                    <div className="absolute inset-0 w-3 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                    <div className="relative text-[#030317] group-hover:text-[#030317] flex items-center justify-center text-2xl">
                      <p className="text-base font-semibold">IMDB</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  )
}
