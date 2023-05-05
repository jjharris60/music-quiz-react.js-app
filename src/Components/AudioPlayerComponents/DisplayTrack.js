import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const DisplayTrack = ({ currentTrack, audioRef, setDuration, progressBarRef }) => {
    const onLoadedMetadata = () => {
        const seconds = audioRef.current.duration;
        setDuration(seconds);
        progressBarRef.current.max = seconds;
    };
    return (
        <Container className='d-flex justfiy-content-center'>
            <Col>
                <audio src={currentTrack.src} ref={audioRef} onLoadedMetadata={onLoadedMetadata}></audio>
                <Row className='d-flex justify-content-center mt-4'>
                    <Col className='d-flex justify-content-center col-12'>
                        <Row>
                            <img alt='track-cover' src={currentTrack.thumbnail} style={{ width: '400px', display: 'block' }} />
                        </Row>
                    </Col>
                </Row>
                <Row className='d-flex justify-content-center'>
                    <Col className='col-12'>
                        <Row>
                            <p className='tracktext'>{currentTrack.title}</p>
                        </Row>
                    </Col>
                </Row>
                <Row className='d-flex justify-content-center mt-2'>
                    <Col className='col-12'>
                        <Row>
                            <p className='tracktext'>{currentTrack.author}</p>
                        </Row>
                    </Col>
                </Row>
            </Col>
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