import { useState, useEffect, useRef, useCallback } from 'react';
// icons
import {
  // IoPlayBackSharp,
  // IoPlayForwardSharp,
  // IoPlaySkipBackSharp,
  // IoPlaySkipForwardSharp,
  IoPlaySharp,
  IoPauseSharp,
} from 'react-icons/io5';

const Controls = ({ audioRef, progressBarRef, duration, setTimeProgress, tracks, trackIndex, setTrackIndex, setCurrentTrack }) => {

  // const [volume, setVolume] = useState(20)
  const playAnimationRef = useRef();

  // const repeat = useCallback(() => {
  //   const currentTime = audioRef.current.currentTime;
  //   setTimeProgress(currentTime)
  //   progressBarRef.current.value = currentTime
  //   progressBarRef.current.style.setProperty(
  //     '--range-progress',
  //     `${(progressBarRef.current.value / duration) * 100}%`
  //   );
  //   playAnimationRef.currentTime = requestAnimationFrame(repeat);
  // }, [audioRef, duration, progressBarRef, setTimeProgress]);

  const repeat = useCallback(() => {
    if (!audioRef.current) return;
    // guard clause, which checks if audioRef.current is null or undefined and will return from the function without executing the rest of the code. This is so that a button to navigate back to home can execute without errors.
    const currentTime = audioRef.current.currentTime;
    setTimeProgress(currentTime)
    progressBarRef.current.value = currentTime
    // progressBarRef.current.style.setProperty(
    //   '--range-progress',
    //   `${(progressBarRef.current.value / duration) * 100}%`
    // );
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [audioRef, progressBarRef, setTimeProgress]);

  // audioRef.current.play();

  const [isPlaying, setIsPlaying] = useState(false);
  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
    // audioRef.current.play();
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    playAnimationRef.currentTime = requestAnimationFrame(repeat);
  }, [isPlaying, audioRef, repeat]);

  useEffect(() => {
    if (audioRef) {
      // audioRef.current.volume = volume / 100;
      audioRef.current.oncanplaythrough = () => {
        audioRef.current.play();
        setIsPlaying(true)
      }
      // audioRef.current.muted = muteVolume;
    }
  }, [audioRef]);

  // Other onClick handlers
  // const skipForward = () => {
  //   audioRef.current.currentTime += 15;
  // }
  // const skipBackward = () => {
  //   audioRef.current.currentTime -= 15;
  // }
  // const handlePrevious = () => {
  //   if (trackIndex === 0) {
  //     let lastTrackIndex = tracks.length - 1;
  //     setTrackIndex(lastTrackIndex);
  //     setCurrentTrack(tracks[lastTrackIndex])
  //   } else {
  //     setTrackIndex((prev) => prev - 1);
  //     setCurrentTrack(tracks[trackIndex - 1])
  //   }
  // }
  // const handleNext = () => {
  //   if (trackIndex >= tracks.length - 1) {
  //     setTrackIndex(0);
  //     setCurrentTrack(tracks[0]);
  //   } else {
  //     setTrackIndex((prev) => prev + 1)
  //     setCurrentTrack(tracks[trackIndex + 1])
  //     audioRef.current.play()
  //   }
  // }

  // const volumeOnChange = onchange = (e) => {
  //   setVolume(e.target.value);
  // }

  return (
    <div className="controls-wrapper">
      <div className="controls">
        {/* <button>
          <IoPlaySkipBackSharp onClick={handlePrevious} />
        </button> */}
        {/* <button onClick={skipBackward}>
          <IoPlayBackSharp />
        </button> */}
        <button onClick={togglePlayPause} id='playpausebtn'>
          {isPlaying ? <IoPauseSharp /> : <IoPlaySharp />}
        </button>
        {/* <button onClick={skipForward}>
          <IoPlayForwardSharp />
        </button> */}
        {/* <button onClick={handleNext}>
          <IoPlaySkipForwardSharp />
        </button> */}
      </div>
      {/* <div className='volume'>
        <input id='volume' type='range' max={100} value={volume} onChange={(volumeEvent) => setVolume(volumeEvent.target.value)} />
      </div> */}
    </div>
  );
};

export default Controls;
