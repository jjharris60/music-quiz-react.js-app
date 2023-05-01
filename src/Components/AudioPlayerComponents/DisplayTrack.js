const DisplayTrack = ({ currentTrack, audioRef, setDuration, progressBarRef }) => {
    const onLoadedMetadata = () => {
        const seconds = audioRef.current.duration;
        setDuration(seconds);
        progressBarRef.current.max = seconds;
    };
    return (
        <div>
            <audio src={currentTrack.src} ref={audioRef} onLoadedMetadata={onLoadedMetadata} autoPlay />
            <div className="track-info" id="audio-image" style={{ display: 'none' }}>
                <img alt="track-cover" src={currentTrack.thumbnail} />
            </div>
            <div className="track-info" id="audio-text" style={{ display: 'none' }}>
                <p className="track-info" id="song-title">{currentTrack.title}</p>
                <p className="track-info" id="song-author">{currentTrack.author}</p>
            </div>
        </div>
    );
};
export default DisplayTrack;