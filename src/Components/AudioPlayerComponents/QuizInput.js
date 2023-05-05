import { useState } from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
const QuizInput = ({ currentTrack, setTrackIndex, setCurrentTrack, tracks, trackIndex, audioRef }) => {
    const [inputValue, newInputValue] = useState('')
    const [scoreValue, newScoreValue] = useState(0)
    const Thumbnail = document.getElementById('track-cover')
    const TrackInfo = document.getElementById('tracktext1')
    const TrackInfo1 = document.getElementById('tracktext2')

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
            Thumbnail.style.filter = 'blur(0)'
            TrackInfo.style.display = 'block'
            TrackInfo1.style.display = 'block'
            // classElements.forEach(element => {
            //     element.style.display = 'block'
            // });
            // inputClassElements.forEach(element => {
            //     element.style.display = 'none'
            // });
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
        // nextButton.style.display = 'none'
        // thumbnail.style.display = 'none'
        // trackTitle.style.display = 'none'
        // trackAuthor.style.display = 'none'
        setTrackIndex((prev) => prev + 1)
        setCurrentTrack(tracks[trackIndex + 1])
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
                    <Col className='col-6'>
                        <Row className="d-flex justify-content-center">
                            <input className="input-elements" id="input-field" type="text" value={inputValue} onChange={userInputHandler} placeholder="Your anwser" />
                        </Row>
                    </Col>
                </Row>
                <Row className='d-flex justify-content-center mt-3'>
                    <Col className='d-flex justify-content-center'>
                        <Row>
                            {/* <button onClick={checkYourAnwser} className="button-custom1">Submit answer</button> */}
                            <Button onClick={checkYourAnwser} className="btn btn-sm custom-button-1" id="submitanswer">Submit answer</Button>
                        </Row>
                    </Col>
                </Row>
                <Row className='d-flex justify-content-center mt-3'>
                    <Col className='d-flex justify-content-center'>
                        <Row>
                            {/* <button onClick={nextTrack} className="button-custom1">Next question</button> */}
                            <Button onClick={nextTrack} className="btn btn-sm custom-button-1" id="nextquestion">Next question</Button>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Container>
    )



}

export default QuizInput;