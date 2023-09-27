import { useEffect } from "react"

// Environment Variables
import { API_URL, API_KEY } from "../../apiTMDBapp"

// Custom Hooks
import useDataMovies from "../customHooks/useDataMovies"

// Components
import CarouselMovies from "./CarouselMovies"

export default function CarouselPopular() {
  const { getData, data } = useDataMovies()

  useEffect(() => {
    getData(`${API_URL}/movie/popular?api_key=${API_KEY}`)
  }, [])

  return (
    <section className="mb-[100px]">
      <h3 className="text-start text-xl text-white md:text-3xl lg:text-[40px] ml-5 font-['Limelight']">
        Popular Movies
      </h3>
      <CarouselMovies data={data} />
    </section>
  )
}
