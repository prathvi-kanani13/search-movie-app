import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
    Typography,
    Box,
    CircularProgress,
    CardMedia,
    Button,
    Container,
} from '@mui/material';
import { Movie } from '../types/Movie';

const MovieDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [movie, setMovie] = useState<Movie | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const res = await fetch(
                    `https://api.themoviedb.org/3/movie/${id}?api_key=0913487c8490a4b2067959af4dc2d9c4`
                );
                const data = await res.json();
                if (data.success === false || data.status_code) {
                    setMovie(null);
                } else {
                    setMovie(data);
                }
            } catch (error) {
                console.error('Error fetching movie:', error);
                setMovie(null);
            } finally {
                setLoading(false);
            }
        };
        fetchMovie();
    }, [id]);

    useEffect(() => {
        if (!loading && !movie) {
            navigate('/invalid');
        }
    }, [loading, movie, navigate]);

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" mt={4}>
                <CircularProgress />
            </Box>
        );
    }

    if (!movie) {
        return (
            <Box textAlign="center" mt={4}>
                <Typography variant="h6">Movie not found.</Typography>
            </Box>
        );
    }

    return (
        <Container maxWidth="sm" sx={{ mt: 4, textAlign: 'center' }}>
            <Typography variant="h4" sx={{ mb: 2 }}>
                {movie.title}
            </Typography>
            <CardMedia
                component="img"
                image={
                    movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                        : 'https://via.placeholder.com/500x750?text=No+Image'
                }
                alt={movie.title}
                sx={{
                    width: '100%',
                    maxHeight: 600,
                    objectFit: 'cover',
                    borderRadius: 2,
                    mb: 2,
                }}
            />
            <Typography variant="subtitle1" sx={{ mb: 2 }}>
                Release Date: {movie.release_date || 'N/A'}
            </Typography>
            <Typography variant="body1" textAlign="justify">
                {movie.overview || 'No description available.'}
            </Typography>
            <Button onClick={() => navigate('/')} variant="contained" sx={{ mt: 3 }}>
                Back to Home
            </Button>
        </Container>
    );
};

export default MovieDetail;