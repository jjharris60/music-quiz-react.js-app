import React from 'react';
import { useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate();

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