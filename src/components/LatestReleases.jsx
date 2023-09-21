import * as React from 'react';
import { useState, useEffect } from 'react';
import { TOKEN_ACCESS_API, API_URL } from '../../apiTMDBapp'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function LatestReleases() {
  
  const [latestReleases, setLatestReleases] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${TOKEN_ACCESS_API}`,
      },
    };

    fetch(`${API_URL}/movie/now_playing?language=en-US&page=1`, options)
      .then((response) => response.json())
      .then((data) => setLatestReleases(data.results))
      .catch((err) => console.error(err));
  }, []);

  return (
        <section className='bg-[#030317] text-white pt-24'>
          <h1 className='text-center text-xl md:text-3xl py-[25px] mt-5 font-semibold'>Latest Releases</h1>
          <section className="mx-[35px] flex flex-wrap justify-center">
            {latestReleases.map((movie) => (
              <Link to="/latest-releases" key={movie.id}>
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
          </section>
        </section>
  );
}