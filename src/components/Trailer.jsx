import { useEffect } from 'react'
import { useParams } from "react-router-dom"
import { API_URL, API_KEY } from '../../apiTMDBapp'
import { RiCloseLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import SpinnerMovie from "./SpinnerMovie"
import useLoading from "../customHooks/useLoading"
import useDataMovies from "../customHooks/useDataMovies"
import noTrailer from '../assets/noTrailer.gif'

export default function Trailer() {
    
    const { getData, data } = useDataMovies()
    const { id } = useParams()
    const loading = useLoading()

    useEffect(() => {
    getData(`${API_URL}/movie/${id}/videos?api_key=${API_KEY}`)
    }, [id])
 
    const trailer = data.results?.find(
    (video) => video.type === "Trailer" || video.type === "Teaser" && video.site === "YouTube"
    )

    console.log(trailer)

      return (
        <>
            {loading ? (
                <SpinnerMovie />
            ) : (
                <>
                    {trailer ?  
                        <div className='video-responsive bg-[#030317] pt-2.5 flex flex-col justify-center mt-[100px] xl:pt-[30px]'>
                            <Link to={`/description/${id}`} >
                                <button className='flex justify-end pr-5 absolute right-0 text-xl lg:text-[30px] text-white'>
                                    <RiCloseLine />
                                </button>
                            </Link>
                            <iframe frameBorder="0" allowFullScreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title={trailer.name} src={`https://www.youtube.com/embed/${trailer.key}`} id="widget2" ></iframe>
                        </div>
                     : 
                     <div className='h-full bg-[#030317] pt-2.5 flex flex-col  items-center mt-[100px] xl:pt-[30px] '>
                        <img src={noTrailer} alt="PopCorn gif" className='w-[180px] mt-[50px] lg:w-[350px] lg:mt-[100px]' />
                        <p className="text-xl text-white mt-2.5 font-['Limelight'] uppercase md:text-[30px]">No trailer available</p>

                    </div>
                    }
                </>
            )}
        </>
    )
}
