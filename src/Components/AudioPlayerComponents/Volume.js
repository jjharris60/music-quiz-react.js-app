import { useState, useEffect } from "react";
import VolumeUp from '../../audio/images/volume_up.svg'
// import VolumeDown from '../../audio/images/volume_down.svg'

const Volume = ({ audioRef }) => {
    const [volume, setVolume] = useState(20);
    // const [muteVolume, setMuteVolume] = useState(false);

    useEffect(() => {
        if (audioRef) {
            audioRef.current.volume = volume / 100;
            // audioRef.current.muted = muteVolume;
        }
    })
    return (
        <div className='volume'>
            <img className="volumeicons" alt="Volume low icon" src={VolumeUp} />
            <input id='volume' type='range' max={100} value={volume} onChange={(volumeEvent) => setVolume(volumeEvent.target.value)} />
            {/* <img className="volumeicons" alt="Volume high icon" src={VolumeUp} /> */}
        </div>
    )
}



export default Volume