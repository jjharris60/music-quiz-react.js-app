import './styles/App.css'
import React from 'react';
// import AudioPlayer from './Components/AudioPlayerComponents/AudioPlayer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./Components/Home";
import AudioPlayer from './Components/AudioPlayerComponents/AudioPlayer';
// import Home from './Components/AudioPlayerComponents/Pages/Home'

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/audioplayer' element={<AudioPlayer />} />
                </Routes>
            </BrowserRouter>

        </>
    )
}

export default App;
