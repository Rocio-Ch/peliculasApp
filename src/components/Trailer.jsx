import { useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom"
import { RiCloseLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const TOKEN_ACCESS_API = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YTYxOTcxYmZiODg1ZWU0YWU0NGIxMzk3YjhmZDRiNyIsInN1YiI6IjY0ZTNjMjNjYzNjODkxMDEwMDdhOWY0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EORgrdqgriLzwW2MFHeyvmSzC3jqa7xs7Wpxc4PQaJg"

export default function Trailer() {
    
    const { id } = useParams()
    const [trailerMovie, setTrailerMovie] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
            accept: 'application/json',
            Authorization: `Bearer ${TOKEN_ACCESS_API}`
            }
        }

        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
            .then(response => response.json())
            .then((data) => {
/*                 console.log(data) */
                const trailer = data.results.find(
                (video) => video.type === "Trailer" || video.type === "Teaser" && video.site === "YouTube"
                )
        
                if (trailer) {
                    setTrailerMovie(trailer.key)
                } else {
                    navigate("/not-found")
                }
            })
            .catch((error) => {
                navigate("/not-found")
            })
      }, [id])

    return (
        <div className='video-responsive bg-[#030317] pt-2.5 flex flex-col justify-center mt-[100px] xl:pt-[30px]'>
            <Link to={`/description/${id}`} >
                <button className='flex justify-end pr-5 absolute right-0 text-xl lg:text-[30px] text-white'>
                    <RiCloseLine />
                </button>
            </Link>
            <iframe frameBorder="0" allowFullScreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="Deadpool" src={`https://www.youtube.com/embed/${trailerMovie}`} id="widget2" ></iframe>
        </div>
    )
}
