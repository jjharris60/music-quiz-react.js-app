import { useState, useEffect } from "react"
import VolumeUp from '../../audio/images/volume_up.svg'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import Col from 'react-bootstrap/Col';
// import VolumeDown from '../../audio/images/volume_down.svg'

const Volume = ({ audioRef }) => {
    const [volume, setVolume] = useState(20)
    // const [muteVolume, setMuteVolume] = useState(false);

    useEffect(() => {
        if (audioRef) {
            audioRef.current.volume = volume / 100
            // audioRef.current.muted = muteVolume;
        }
    })
    return (
        <Container fluild className="progressbarcontainer p-0">
            <Row>
                <Col className="ps-2 col-2 d-flex align-items-center">
                    <img className="volumeicons" alt="Volume low icon" src={VolumeUp} style={{ width: '15px' }} />
                </Col>
                <Col className="p-0 col-10 d-flex align-items-center">
                    <input id='volume' type='range' max={100} value={volume} onChange={(volumeEvent) => setVolume(volumeEvent.target.value)} />
                </Col>
            </Row>
            {/* <img className="volumeicons" alt="Volume high icon" src={VolumeUp} /> */}
        </Container>

    )
}






export default Volume