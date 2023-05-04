import { useRef, useState } from 'react';
import { tracks } from '../../audio/data/tracks';
import { useNavigate } from 'react-router-dom';

// import components
import DisplayTrack from './DisplayTrack';
import Controls from './Controls';
import ProgressBar from './ProgressBar';
import QuizInput from './QuizInput';
import Volume from './Volume';

const AudioPlayer = () => {
    const navigate = useNavigate();
    const [trackIndex, setTrackIndex] = useState(0)
    const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);
    const [timeProgress, setTimeProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    // reference
    const audioRef = useRef();
    const progressBarRef = useRef();

    return (
        <div className="audio-player">
            <button onClick={() => navigate(-1)}>Home</button>
            <div className="inner">
                <DisplayTrack {...{ currentTrack, audioRef, setDuration, progressBarRef }} />
                <div id='audio-controls'>
                    <Controls {...{
                        audioRef, progressBarRef, duration, setTimeProgress, tracks,
                        trackIndex,
                        setTrackIndex,
                        setCurrentTrack
                    }} />
                    <ProgressBar {...{ progressBarRef, audioRef, timeProgress, duration }} />
                    <Volume {...{ audioRef }} />
                </div>
                <QuizInput {...{ audioRef, currentTrack, trackIndex, setTrackIndex, setCurrentTrack, tracks }} />
            </div>
        </div>
    );
};

export default AudioPlayer;