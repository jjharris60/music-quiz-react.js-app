import { useRef, useState } from 'react';
import { tracks } from '../../audio/data/tracks';
// import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import components
import DisplayTrack from './DisplayTrack';
import Controls from './Controls';
import ProgressBar from './ProgressBar';
import QuizInput from './QuizInput';
import Volume from './Volume';

const AudioPlayer = () => {
    // const navigate = useNavigate();
    const [trackIndex, setTrackIndex] = useState(0)
    const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);
    const [timeProgress, setTimeProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    // reference
    const audioRef = useRef();
    const progressBarRef = useRef();

    // return (
    //     <div className="audio-player">
    //         {/* <button onClick={() => navigate(-1)}>Home</button> */}
    //         <div className="inner">
    //             <DisplayTrack {...{ currentTrack, audioRef, setDuration, progressBarRef }} />
    //             <div id='audio-controls'>
    // <Controls {...{
    //     audioRef, progressBarRef, duration, setTimeProgress, tracks,
    //     trackIndex,
    //     setTrackIndex,
    //     setCurrentTrack
    // }} />
    // <ProgressBar {...{ progressBarRef, audioRef, timeProgress, duration }} />
    // <Volume {...{ audioRef }} />
    //             </div>
    //             <QuizInput {...{ audioRef, currentTrack, trackIndex, setTrackIndex, setCurrentTrack, tracks }} />
    //         </div>
    //     </div>
    // );
    return (
        <Container>
            <Row className='row d-flex justify-content-center'>
                <Col className='col-8'>
                    <DisplayTrack {...{ currentTrack, audioRef, setDuration, progressBarRef }} />
                </Col>
            </Row>
            {/* <Row>
                <Col>
                    <Controls {...{
                        audioRef, progressBarRef, duration, setTimeProgress, tracks,
                        trackIndex,
                        setTrackIndex,
                        setCurrentTrack
                    }} />
                    <ProgressBar {...{ progressBarRef, audioRef, timeProgress, duration }} />
                    <Volume {...{ audioRef }} />
                </Col>
            </Row> */}
            <Row className='d-flex mb-4 justify-content-center'>
                <Col className='col-lg-5 col-md-6 col-sm-8 col-8'>
                    <QuizInput {...{ audioRef, currentTrack, trackIndex, setTrackIndex, setCurrentTrack, tracks }} />
                </Col>
            </Row>
        </Container>
    )
};

export default AudioPlayer;