import { useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom"
import { API_URL, API_KEY } from '../../apiTMDBapp'
import { RiCloseLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import SpinnerMovie from "./SpinnerMovie"
import useLoading from "../customHooks/useLoading"

export default function Trailer() {
    
    const { id } = useParams()
    const [trailerMovie, setTrailerMovie] = useState()
    const loading = useLoading()
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`${API_URL}/movie/${id}/videos?api_key=${API_KEY}`)
            .then(response => response.json())
            .then((data) => {
                const trailer = data.results.find(
                (video) => video.type === "Trailer" || video.type === "Teaser" && video.site === "YouTube"
                )
                if (trailer) {
                    setTrailerMovie(trailer.key)
                    loading
                } else {
                    navigate("/not-found")
                }})
            .catch((error) => {
                navigate("/not-found")
            })
      }, [id])

      return (
        <>
            {loading ? (
                <SpinnerMovie />
            ) : (
                <>
                    {trailerMovie && ( 
                        <div className='video-responsive bg-[#030317] pt-2.5 flex flex-col justify-center mt-[100px] xl:pt-[30px]'>
                            <Link to={`/description/${id}`} >
                                <button className='flex justify-end pr-5 absolute right-0 text-xl lg:text-[30px] text-white'>
                                    <RiCloseLine />
                                </button>
                            </Link>
                            <iframe frameBorder="0" allowFullScreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="Deadpool" src={`https://www.youtube.com/embed/${trailerMovie}`} id="widget2" ></iframe>
                        </div>
                    )}
                </>
            )}
        </>
    )
}
