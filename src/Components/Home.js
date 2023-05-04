import React from 'react';
import { useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate();

    // return (
    //     <div className='home-container'>
    //         <ThemeProvider theme={homeTheme}>
    //             <Grid container xs spacing={2}>
    //                 <Grid className='home-page-items' item xs={12} display='flex' justifyContent='center' alignItems='center' sx={{ padding: 0 }}>
    //                     <Typography variant='h1' sx={{ margin: '0 2rem 0 2rem' }}>What song?</Typography>
    //                 </Grid>
    //                 <Grid className='home-page-items' item xs={12} display='flex' justifyContent='center' sx={{ padding: 0 }}>
    //                     <Typography variant='h2' sx={{ margin: '0 2rem 0 2rem' }}>Aim of the Game:</Typography>
    //                 </Grid>
    //                 <Grid className='home-page-items' item xs={12} display='flex' justifyContent='center' sx={{ padding: 0 }} >
    //                     <Typography variant='p' sx={{ margin: '0 2rem 0 2rem' }}>You will hear a number of different tracks and will be asked a question about the track you are hearing.</Typography>
    //                 </Grid>
    //                 <Grid className='home-page-items' item xs={12} display='flex' justifyContent='center' sx={{ padding: 0 }}>
    //                     <button className='container-button' onClick={() => navigate("/audioplayer")}>Ready to play</button>
    //                 </Grid>
    //             </Grid>
    //         </ThemeProvider>
    //     </div>
    // )
    return (
        <div id='home-container'>
            <h1 id='home-container-title'>What Song?</h1>
            <p id='home-container-title-text'>Aim of the Game:</p>
            <p id='home-container-text'>You will hear a number of different tracks and will be asked a question about the track you are hearing.</p>
            <button id='home-container-button' onClick={() => navigate("/audioplayer")}>Ready to play</button>
        </div>
    )
};

export default Home;