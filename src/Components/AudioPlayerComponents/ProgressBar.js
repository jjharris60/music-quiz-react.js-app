import { Row, Col, Container } from "react-bootstrap";

const ProgressBar = ({ progressBarRef, audioRef, timeProgress, duration }) => {
    const handleProgressChange = () => {
        audioRef.current.currentTime = progressBarRef.current.value
    }

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
        <Container className="progressbarcontainer">
            <Row>
                <Col className="d-flex align-items-center col">
                    <input type="range" ref={progressBarRef} defaultValue={0} onChange={handleProgressChange} id="progressbar" />
                    <p className="ps-3 pe-1 m-0 time-current">{formatTime(timeProgress)}</p>
                    <p className="m-0">/</p>
                    <p className="time-current m-0 ps-1">{formatTime(duration)}</p>
                </Col>
                {/* <Col className="d-flex align-items-center col-3 p-0 mb-1">
                    <span className="time-current">{formatTime(timeProgress)}/{formatTime(duration)}</span>
                </Col> */}
            </Row>
        </Container>
    )
    // return (
    //     <Container fluid className="p-0">
    //         <Col>
    //             <Row>
    //                 <Col className="d-flex align-items-center p-0 col-9">
    //                     <input type="range" ref={progressBarRef} defaultValue={0} onChange={handleProgressChange} id="progressbar" />
    //                 </Col>
    //                 <Col className="d-flex align-items-center p-0 ps-3 col-3">
    //                     <p className="time-current m-0">{formatTime(timeProgress)}/{formatTime(duration)}</p>
    //                 </Col>
    //             </Row>
    //         </Col>
    //     </Container>
    // )
};
export default ProgressBar