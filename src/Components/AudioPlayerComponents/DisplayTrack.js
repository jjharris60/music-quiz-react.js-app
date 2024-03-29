import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// thumbnail, trackText, trackText1
const DisplayTrack = ({ currentTrack, audioRef, setDuration, progressBarRef, elementSateBlur, elementStateNone, elementSateBlock }) => {
    const onLoadedMetadata = () => {
        const seconds = audioRef.current.duration
        setDuration(seconds)
        // progressBarRef.current.max = seconds;
    };

    return (
        <Container fluid className='displaytrackcontainer'>
            <Row>
                <Col>
                    <audio src={currentTrack.src} ref={audioRef} onLoadedMetadata={onLoadedMetadata}></audio>
                    <Row className='mt-4'>
                        <Col className='d-flex justify-content-center'>
                            <img className='trackcover' alt='song cover' src={currentTrack.thumbnail} style={elementSateBlur} />
                        </Col>
                    </Row>
                    <Row className='mt-4'>
                        <Col>
                            <p className='tracktext' style={elementStateNone}>{currentTrack.title}</p>
                        </Col>
                    </Row>
                    <Row className='mt-2'>
                        <Col>
                            <p className='tracktext' style={elementStateNone}>{currentTrack.author}</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
    // return (
    //     <div>
    //         <audio src={currentTrack.src} ref={audioRef} onLoadedMetadata={onLoadedMetadata} autoPlay />
    //         <div className="track-info" id="audio-image">
    //             <img alt="track-cover" src={currentTrack.thumbnail} style={{ display: 'none', width: 200 }} id="track-cover" />
    //         </div>
    //         <div className="track-info" id="audio-text" >
    //             <p className="track-info" id="song-title" style={{ display: 'none' }}>{currentTrack.title}</p>
    //             <p className="track-info" id="song-author" style={{ display: 'none' }}>{currentTrack.author}</p>
    //         </div>
    //     </div>
    // );
};
export default DisplayTrack;