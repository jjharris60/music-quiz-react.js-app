// import { tracks } from '../audio/tracks';
// import { useEffect, useRef } from 'react';
// import DisplayTrack from './DisplayTrack';
// import Controls from './Controls';
// import ProgressBar from './ProgressBar';

// const AudioPlayer = () => {
//     const audioRef = useRef();

//     useEffect(() => {
//         // Creates a new Audio object
//         const audio = new Audio();

//         // Setting up and event listener for when the audio finishes playing
//         audio.addEventListener('ended', () => {
//             audioRef.current.src = tracks[(tracks.indexOf(audioRef.current.src) + 1) % tracks.length].src;
//         });
//         // Set the initial source of the audio object to the first track
//         audio.src = tracks[0].src
//         // Store the audio object in the ref so we can access it later
//         audioRef.current = audio;

//         // Play function
//         const play = () => {
//             audioRef.current.play();
//         };

//         // Pause function
//         const pause = () => {
//             audioRef.current.pause();
//         };
//         return (
//             <div>
//                 <p>Welcome Mr Harris</p>
//                 <DisplayTrack />
//                 <Controls />
//                 <ProgressBar />
//                 <Controls play={play} pause={pause}></Controls>
//                 <audio ref={audioRef} controls></audio>
//             </div>
//         )
//     })
// }
// export default AudioPlayer;
import { useState } from 'react';
import { tracks } from '../audio/tracks';
// import DisplayTrack from './DisplayTrack';
// // import Controls from './Controls';
// import ProgressBar from './ProgressBar';
const AudioPlayer = () => {
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const currentTrack = tracks[currentTrackIndex];

    const handleNextTrack = () => {
        const nextTrackIndex = (currentTrackIndex + 1) % tracks.length;
        setCurrentTrackIndex(nextTrackIndex)
    };

    return (
        <div>
            <p>Welcome Mr Harris</p>
            <audio controls src={currentTrack.src} onEnded={handleNextTrack} autoPlay>
            </audio>
        </div>
    );
};

export default AudioPlayer;

