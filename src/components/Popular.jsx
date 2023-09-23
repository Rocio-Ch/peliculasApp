import * as React from 'react'
import { useEffect } from 'react'
import { API_KEY, API_URL } from '../../apiTMDBapp'
import { Link } from 'react-router-dom'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import SpinnerMovie from './SpinnerMovie'
import Typography from '@mui/material/Typography'
import useDataMovies from '../customHooks/useDataMovies'
import useLoading from '../customHooks/useLoading'

export default function Popular() {

    const { getData, data } = useDataMovies()
    const loading = useLoading()

    useEffect(() => {
        getData(`${API_URL}/movie/popular?api_key=${API_KEY}`)
    }, [])
    
    return (
        <section className='bg-[#030317] text-white pt-24'>
            <h1 className='text-center text-xl md:text-3xl py-[25px] mt-5'>Popular Movies</h1>
            <section className="mx-[35px] flex flex-wrap justify-center">
            {loading ? (
                <SpinnerMovie />
                ) : (
                <>
                    {data.results?.map((movie) => (
                        <Link to={`/description/${movie.id}`} key={movie.id}>
                            <Card className='w-[250px] h-[340px] m-10 hover:transition hover:duration-300 hover:ease-in-out hover:shadow-lg dark:hover:shadow-[0px_5px_30px_0px_rgba(24,17,167,79%)] hover:scale-105'>
                                <CardMedia
                                    className='h-[300px]'
                                    component="img"
                                    alt={movie.title}
                                    image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                />
                                <Typography sx={{ padding: '8px', textAlign: 'center', fontWeight: '700', fontSize: '1.1rem' }} component="div">
                                    {movie.title}
                                </Typography>
                            </Card>
                        </Link>
                    ))}
                </>
            )}
        </section>
    </section>

    )
}