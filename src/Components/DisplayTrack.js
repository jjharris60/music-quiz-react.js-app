const DisplayTrack = ({ currentTrack, audioRef, setDuration, progressBarRef }) => {
    const onLoadedMetadata = () => {
        const seconds = audioRef.current.duration;
        setDuration(seconds);
        progressBarRef.current.max = seconds;
    };
    return (
        <div>
            <audio src={currentTrack.src} ref={audioRef} onLoadedMetadata={onLoadedMetadata} autoPlay />
            <div className="audio-image">
                <img alt="track-cover" src={currentTrack.thumbnail} />
            </div>
            <div className="audio-text">
                <p className="song-title">{currentTrack.title}</p>
                <p className="song-author">{currentTrack.author}</p>
            </div>
        </div>
    );
};
export default DisplayTrack;