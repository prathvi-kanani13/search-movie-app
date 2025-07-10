import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Movie } from '../types/Movie';

interface Props {
  movie: Movie;
}

const MovieCard: React.FC<Props> = ({ movie }) => {
  const navigate = useNavigate();

  return (
    <Card onClick={() => navigate(`/movie/${movie.id}`)} sx={{ cursor: 'pointer', height: '100%' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <CardContent>
          <Typography variant="subtitle1">{movie.title}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MovieCard;