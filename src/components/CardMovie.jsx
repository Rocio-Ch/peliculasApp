import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function CardMovie() {
  return (
    <Link to="/descripcion">
        <Card className='w-[250px] h-[340px]'>
            <CardMedia
                className='h-[300px]'
                component="img"
                alt="green iguana"
                image="https://c4.wallpaperflare.com/wallpaper/750/174/497/animados-cars-cartoon-dibujos-wallpaper-preview.jpg"
            />
            <Typography sx={{padding: '8px', textAlign:'center', fontWeight:'700', fontSize:'1.1rem'}} component="div">
                Cars
            </Typography>
        </Card>
    </Link>
  );
}