import '../styles/App.css'
import DisplayTrack from './DisplayTrack';
import Controls from './Controls';
import ProgressBar from './ProgressBar';
import { tracks } from '../audio/tracks';

const AudioPlayer = () => {
    console.log(tracks)
    return (
        <div>
            <p id='welcometitle'>Welcome Mr Harris</p>
            <DisplayTrack />
            <Controls />
            <ProgressBar />
        </div>
    )
}


export default AudioPlayer;
