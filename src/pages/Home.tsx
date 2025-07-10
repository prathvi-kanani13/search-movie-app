import React, { useState, useEffect } from 'react';
import { TextField, Box, Typography, CircularProgress } from '@mui/material';
import MovieGrid from '../components/MovieGrid';
import { Movie } from '../types/Movie';

const Home: React.FC = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(false);

    const fetchMovies = async () => {
        if (!query) return;
        setLoading(true);
        try {
            const res = await fetch(
                `https://api.themoviedb.org/3/search/movie?api_key=0913487c8490a4b2067959af4dc2d9c4&query=${query}`
            );
            const data = await res.json();
            setMovies(data.results);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMovies();
    }, [query]);

    return (
        <Box p={2}>
            <Typography variant="h4" mb={2}>
                Movie Search App
            </Typography>
            <TextField
                fullWidth
                label="Search Movies"
                variant="outlined"
                onChange={(e) => setQuery(e.target.value)}
                sx={{ mb: 2 }}
            />
            {loading ? (
                <Box display="flex" justifyContent="center" mt={4}>
                    <CircularProgress />
                </Box>
            ) : (
                <MovieGrid movies={movies} />
            )}
        </Box>
    );
};

export default Home;