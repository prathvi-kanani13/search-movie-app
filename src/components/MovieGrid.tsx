import React from 'react';
import { Grid } from '@mui/material';
import MovieCard from './MovieCrad';
import { Movie } from '../types/Movie';

interface Props {
  movies: Movie[];
}

const MovieGrid: React.FC<Props> = ({ movies }) => (

  <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
    {movies.map((movie) => (
      <Grid key={movie.id} size={{ xs: 2, sm: 4, md: 2 }}>
        <MovieCard movie={movie} />
      </Grid>
    ))}
  </Grid>

);

export default MovieGrid;