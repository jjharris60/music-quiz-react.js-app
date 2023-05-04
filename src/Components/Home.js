import React from 'react';
import { useNavigate } from "react-router-dom"
import Grid from '@mui/material/Unstable_Grid2'
import { Typography, createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

const Home = () => {
    const navigate = useNavigate();

    const homeTheme = createTheme({
        typography: {
            fontFamily: 'century-gothic',
            h1: {
                fontWeight: 600,
                fontSize: '3rem',
                '@media (min-width: 320px)': {
                    fontSize: '3.25rem'
                },
                '@media (min-width: 480px)': {
                    fontSize: '4rem',
                },
                '@media (min-width: 768px)': {
                    fontSize: '4.75rem',
                },
            },
            h2: {
                fontSize: '1.5rem'
            },
            p: {
                fontFamily: 'century-gothic',
                fontSize: '1rem',
                '@media (min-width: 480px)': {
                    fontSize: '1.125rem'
                },
            }
        }
    });

    return (
        <div className='home-container'>
            <ThemeProvider theme={homeTheme}>
                <Grid container xs spacing={2}>
                    <Grid className='home-page-items' item xs={12} display='flex' justifyContent='center' alignItems='center' sx={{ padding: 0 }}>
                        <Typography variant='h1' sx={{ margin: '0 2rem 0 2rem' }}>What song?</Typography>
                    </Grid>
                    <Grid className='home-page-items' item xs={12} display='flex' justifyContent='center' sx={{ padding: 0 }}>
                        <Typography variant='h2' sx={{ margin: '0 2rem 0 2rem' }}>Aim of the Game:</Typography>
                    </Grid>
                    <Grid className='home-page-items' item xs={12} display='flex' justifyContent='center' sx={{ padding: 0 }} >
                        <Typography variant='p' sx={{ margin: '0 2rem 0 2rem' }}>You will hear a number of different tracks and will be asked a question about the track you are hearing.</Typography>
                    </Grid>
                    <Grid className='home-page-items' item xs={12} display='flex' justifyContent='center' sx={{ padding: 0 }}>
                        <button className='container-button' onClick={() => navigate("/audioplayer")}>Ready to play</button>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </div>

        // <div id='home-container'>
        //     <h1 id='home-container-title'>What Song?</h1>
        //     <p id='home-container-title-text'>Aim of the Game:</p>
        //     <p id='home-container-text'>You will hear a number of different tracks and will be asked a question about the track you are hearing.</p>
        //     <button id='home-container-button' onClick={() => navigate("/audioplayer")}>Ready to play</button>
        // </div>
    )
};

export default Home;