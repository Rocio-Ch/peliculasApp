import * as React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import PaginationRounded from './PaginationRounded';
import defaultPoster from '../assets/defaultPoster.png'

export default function SearchContainer({ movieResults, setCurrentPage, currentPage, totalPages/* , search */ }) {
    return (
        <div className='mb-[70px]'>
            <div className='flex items-center justify-center mt-[100px] mx-[35px] mb-[30px]'>
                <h2 className='text-2xl my-4 text-white underline underline-offset-8 decoration-blue-500'>Resultados de busqueda</h2>
            </div>
            <section className="mx-[35px] mb-[80px] flex flex-wrap justify-center">
                {movieResults && movieResults.map((movie) => {
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
            <PaginationRounded setCurrentPage={setCurrentPage} currentPage={currentPage} totalPages={totalPages} /* search={search} */ />
        </div>
    )
}