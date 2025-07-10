import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NotFound: React.FC = () => {
    const navigate = useNavigate();
    return (
        <Box p={2}>
            <Typography variant="h4">404 - Page Not Found</Typography>
            <Button onClick={() => navigate('/')} variant="contained" sx={{ mt: 2 }}>
                Back to Home
            </Button>
        </Box>
    );
};

export default NotFound;