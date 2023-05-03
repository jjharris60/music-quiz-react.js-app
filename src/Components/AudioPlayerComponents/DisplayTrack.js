const DisplayTrack = ({ currentTrack, audioRef, setDuration, progressBarRef }) => {
    const onLoadedMetadata = () => {
        const seconds = audioRef.current.duration;
        setDuration(seconds);
        progressBarRef.current.max = seconds;
    };
    return (
        <div>
            <audio src={currentTrack.src} ref={audioRef} onLoadedMetadata={onLoadedMetadata} autoPlay />
            <div className="track-info" id="audio-image">
                <img alt="track-cover" src={currentTrack.thumbnail} style={{ display: 'none', width: 500 }} id="track-cover" />
            </div>
            <div className="track-info" id="audio-text" >
                <p className="track-info" id="song-title" style={{ display: 'none' }}>{currentTrack.title}</p>
                <p className="track-info" id="song-author" style={{ display: 'none' }}>{currentTrack.author}</p>
            </div>
        </div>
    );
};
export default DisplayTrack;