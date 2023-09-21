import { useState, useEffect } from "react";
import CarouselMoviesBanner from "./CarouselMoviesBanner"
import SearchContainer from "./SearchContainer";

const TOKEN_ACCESS_API = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YTYxOTcxYmZiODg1ZWU0YWU0NGIxMzk3YjhmZDRiNyIsInN1YiI6IjY0ZTNjMjNjYzNjODkxMDEwMDdhOWY0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EORgrdqgriLzwW2MFHeyvmSzC3jqa7xs7Wpxc4PQaJg"

export default function MainContainer({ movieResults, setCurrentPage, currentPage, totalPages }) {

    const [upComing, setUpComing] = useState([])

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
            accept: 'application/json',
            Authorization: `Bearer ${TOKEN_ACCESS_API}`
            }
        };
        
        fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
            .then(response => response.json())
            .then(data => setUpComing(data.results))
            .catch(err => console.error(err))
    }, []);

    return (
        <main className="flex flex-col flex-grow">
            {movieResults.length === 0 ? (
                <CarouselMoviesBanner upComing={upComing} />
            ) : (
                <SearchContainer movieResults={movieResults} setCurrentPage={setCurrentPage} currentPage={currentPage} totalPages={totalPages} />
            )}
        </main>
    )
}