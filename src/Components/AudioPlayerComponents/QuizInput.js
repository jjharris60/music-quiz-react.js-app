import { useState } from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
const QuizInput = ({ currentTrack, setTrackIndex, setCurrentTrack, tracks, trackIndex, audioRef }) => {
    const [inputValue, newInputValue] = useState('')
    const [scoreValue, newScoreValue] = useState(0)
    // const classElements = Array.from(document.querySelectorAll('.track-info'));
    const thumbnail = document.getElementById('track-cover');
    const trackTitle = document.getElementById('song-title');
    const trackAuthor = document.getElementById('song-author');
    const nextButton = document.getElementById('next-button');
    const submitButton = document.getElementById('submit-button');

    // classElements.forEach(element => {
    //     element.style.display = 'none'
    // });
    // inputClassElements.forEach(element => {
    //     element.style.display = 'block'
    // });

    // sets an initial input value of '' and a function to update the state
    // const currentTrackAuthor = currentTrack.author
    // const currentTrackSource = currentTrack.src
    const currentTrackValues = [currentTrack.author, currentTrack.title]
    // Function for updating the user's input value
    const userInputHandler = onchange = (userInputEvent) => {
        // updates the new inputValue to whatever the user inputs into the <input> tag
        newInputValue(userInputEvent.target.value)
    }

    // Function for checking if user's anwser is correct. Compares the string value from the <input> tag to the currentTrack's value's, such as author and title
    const checkYourAnwser = () => {
        if (inputValue === currentTrackValues[0] || inputValue === currentTrackValues[1]) {
            thumbnail.style.display = 'block'
            // classElements.forEach(element => {
            //     element.style.display = 'block'
            // });
            // inputClassElements.forEach(element => {
            //     element.style.display = 'none'
            // });
            nextButton.style.display = 'block'
            trackTitle.style.display = 'block'
            trackAuthor.style.display = 'block'
            submitButton.style.display = 'none'
            newInputValue('')
            newScoreValue(scoreValue + 1)
        } else {
            alert('wrong anwser')
            // setTrackIndex((prev) => prev + 1)
            // setCurrentTrack(tracks[trackIndex + 1])
        }
        console.log(checkYourAnwser)
    }

    const nextTrack = () => {
        nextButton.style.display = 'none'
        thumbnail.style.display = 'none'
        trackTitle.style.display = 'none'
        trackAuthor.style.display = 'none'
        setTrackIndex((prev) => prev + 1)
        setCurrentTrack(tracks[trackIndex + 1])
        submitButton.style.display = 'block'
    }

    // return (
    //     <div className="quizinput">
    //         <p className="input-elements">{currentTrack.question}</p>
    //         <button className="input-elements" id="next-button" style={{ display: 'none' }} onClick={nextTrack}>Next question</button>
    // <input className="input-elements" id="input-field" type="text" value={inputValue} onChange={userInputHandler} placeholder="Your anwser" />
    //         <button className="input-elements" id="submit-button" style={{ display: 'block' }} onClick={checkYourAnwser}>Submit anwser</button>
    //         <p className="input-elements">Score:{scoreValue}</p>
    //     </div>
    // )
    return (
        <Card className="quizinputcard pt-3 pb-3">
            <Container className='d-flex justfiy-content-center'>
                <Col>
                    <Row className='d-flex justify-content-center'>
                        <Col>
                            <Row>
                                <p className="quizinputtext m-0 p-0">{currentTrack.question}</p>
                            </Row>
                        </Col>
                    </Row>
                    <Row className='d-flex justify-content-center mt-3'>
                        <Col className='d-flex justify-content-center'>
                            <Row>
                                {/* <button onClick={nextTrack} className="button-custom1">Next question</button> */}
                                <Button onClick={nextTrack} className="btn custom-button-1">Next question</Button>
                            </Row>
                        </Col>
                    </Row>
                    <Row className='d-flex justify-content-center mt-3'>
                        <Col className='col-6'>
                            <Row>
                                <input className="input-elements" id="input-field" type="text" value={inputValue} onChange={userInputHandler} placeholder="Your anwser" />
                            </Row>
                        </Col>
                    </Row>
                    <Row className='d-flex justify-content-center mt-3'>
                        <Col className='d-flex justify-content-center'>
                            <Row>
                                {/* <button onClick={checkYourAnwser} className="button-custom1">Submit answer</button> */}
                                <Button onClick={checkYourAnwser} className="btn custom-button-1">Submit answer</Button>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Container>
        </Card>
    )



}

export default QuizInput;