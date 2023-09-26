import * as React from 'react'
import { useEffect } from "react"
import { API_KEY, API_URL } from "../../apiTMDBapp";
import { Link } from 'react-router-dom'
import useDataMovies from '../customHooks/useDataMovies'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import PaginationRounded from './PaginationRounded'
import defaultPoster from '../assets/defaultPoster.png'

export default function SearchContainer({ search }) {

    const { getData, data, totalPages, currentPage, setCurrentPage } = useDataMovies()

    useEffect(() => {
      getData(`${API_URL}/search/movie?api_key=${API_KEY}${search ? `&query=${search}` : ""}&page=${currentPage}`)
    }, [search, currentPage])

    return (
        <div className='mb-[70px]'>
            <div className='flex items-center justify-center mt-[100px] mx-[35px] mb-[30px]'>
                <h2 className="font-['Limelight'] text-2xl mt-4 mb-2 text-white text lg:text-[40px]">Search results</h2>
            </div>
            <section className="mx-[35px] mb-[80px] flex flex-wrap justify-center">
                {data.results?.map((movie) => {
                        return (
                            <Link key={movie.id} to={`/description/${movie.id}`}>
                                <Card className='w-[250px] h-[340px] m-10 hover:transition hover:duration-300 hover:ease-in-out hover:shadow-lg dark:hover:shadow-[0px_5px_30px_0px_rgba(24,17,167,79%)] hover:scale-105'>
                                    <CardMedia
                                        className='h-[300px]'
                                        component="img"
                                        alt={`Poster ${movie.title}`}
                                        image={movie.poster_path
                                            ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                                            : defaultPoster}
                                    />
                                    <Typography sx={{padding: '8px', textAlign:'center', fontWeight:'700', fontSize:'1.1rem'}} component="div">
                                        {movie.title}
                                    </Typography>
                                </Card>
                            </Link>
                        )
                    })}        
            </section>
            <PaginationRounded setCurrentPage={setCurrentPage} currentPage={currentPage} totalPages={totalPages} />
        </div>
    )
}