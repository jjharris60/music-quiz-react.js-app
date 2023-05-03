const ProgressBar = ({ progressBarRef, audioRef, timeProgress, duration }) => {
    const handleProgressChange = () => {
        audioRef.current.currentTime = progressBarRef.current.value
    }
    // Formatting the time
    const formatTime = (time) => {
        if (time && !isNaN(time)) {
            const minutes = Math.floor(time / 60);
            const formatMinutes =
                minutes < 10 ? `0${minutes}` : `${minutes}`;
            const seconds = Math.floor(time % 60);
            const formatSeconds =
                seconds < 10 ? `0${seconds}` : `${seconds}`;
            return `${formatMinutes}:${formatSeconds}`;
        }
        return '00:00';
    };

    return (
        <div className="progress">
            <div id="volume-control">
                <input type="range" ref={progressBarRef} defaultValue={0} onChange={handleProgressChange} id="progressbar" />
            </div>
            <div id="time-current">
                <span className="time-current">{formatTime(timeProgress)}</span>
            </div>
            <p id="spacer">/</p>
            <div id="time">
                <span className="time">{formatTime(duration)}</span>
            </div>
        </div>


    )
};
export default ProgressBar