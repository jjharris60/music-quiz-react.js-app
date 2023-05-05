import { useRef, useState } from 'react';
import { tracks } from '../../audio/data/tracks';
// import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import components
import DisplayTrack from './DisplayTrack';
import Controls from './Controls';
// import ProgressBar from './ProgressBar';
import QuizInput from './QuizInput';
// import Volume from './Volume';

const AudioPlayer = () => {
    // const navigate = useNavigate();
    const [trackIndex, setTrackIndex] = useState(0)
    const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);
    const [timeProgress, setTimeProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    // reference
    const audioRef = useRef();
    const progressBarRef = useRef();

    return (
        <Container fluid className='vh-100 d-flex align-items-center'>
            <Col className='maincolumn'>
                <Row className='justify-content-center'>
                    <Col className='col-8'>
                        <DisplayTrack {...{ currentTrack, audioRef, setDuration, progressBarRef }} />
                    </Col>
                </Row>
                <Row className='d-flex justify-content-center mt-4'>
                    <Col id="audioplayerrow" className='col-lg-8 col-8' style={{ display: 'block' }}>
                        <Row className='justify-content-center'>
                            <Col className='d-flex justify-content-end col-1 p-0'>
                                <Controls {...{
                                    audioRef, progressBarRef, duration, timeProgress, setTimeProgress, tracks,
                                    trackIndex,
                                    setTrackIndex,
                                    setCurrentTrack
                                }} />
                            </Col>
                            {/* <Col className='col-10 p-0'>
                                <ProgressBar {...{ progressBarRef, audioRef, timeProgress, duration }} />
                            </Col> */}
                            {/* <Col className='col-2 d-flex align-items-center'>
                                <Volume {...{ audioRef }} />
                            </Col> */}
                        </Row>
                    </Col>
                </Row>
                <Row className='justify-content-center mt-4'>
                    <Col className='col-8'>
                        <QuizInput {...{ audioRef, currentTrack, trackIndex, setTrackIndex, setCurrentTrack, tracks }} />
                    </Col>
                </Row>
            </Col>
        </Container>

    );
    // return (
    //     <Container>
    //         <Row className='row d-flex justify-content-center'>
    //             <Col className='col-8'>
    //                 <DisplayTrack {...{ currentTrack, audioRef, setDuration, progressBarRef }} />
    //             </Col>
    //         </Row>

    //         <Row className='d-flex justify-content-center'>
    //             <Col className='col-8 p-0 justify-content-center'>
    //                 <div className='card py-3'>
    //                     <Row>
    //                         <Col className='d-flex align-items-center col-1 p-0 justify-content-end'>
    // <Controls {...{
    //     audioRef, progressBarRef, duration, setTimeProgress, tracks,
    //     trackIndex,
    //     setTrackIndex,
    //     setCurrentTrack}} />
    //                         </Col>
    //                         <Col className='col-11 pl-1'>
    //                             <ProgressBar {...{ progressBarRef, audioRef, timeProgress, duration }} />
    //                         </Col>
    // {/* <Volume {...{ audioRef }} /> */}
    //                     </Row>
    //                 </div>
    //             </Col>
    //         </Row>
    //         <Row className='d-flex mt-3 mb-4 justify-content-center'>
    //             <Col className='col-xxl-3 col-xl-3 col-lg-4 col-md-5 col-sm-6 col-12'>
    //                 <QuizInput {...{ audioRef, currentTrack, trackIndex, setTrackIndex, setCurrentTrack, tracks }} />
    //             </Col>
    //         </Row>
    //     </Container>
    // )
};

export default AudioPlayer;