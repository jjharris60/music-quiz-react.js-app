import { useState } from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import { Card } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
const QuizInput = ({ currentTrack, setTrackIndex, setCurrentTrack, tracks, trackIndex, audioRef }) => {
    const navigate = useNavigate()
    const [inputValue, newInputValue] = useState('')
    const [scoreValue, newScoreValue] = useState(0)
    const Thumbnail = document.getElementById('track-cover')
    const TrackInfo = document.getElementById('tracktext1')
    const TrackInfo1 = document.getElementById('tracktext2')
    const submitAnswer = document.getElementById('submitanswer')
    const nextQuestion = document.getElementById('nextquestion')
    const currentTrackQ = document.getElementById('currenttrackq')
    const correctAnswer = document.getElementById('correctanswer')
    const inputField = document.getElementById('inputfield')
    const audioPlayerRow = document.getElementById('audioplayerrow')
    const finishQuiz = document.getElementById('finishquiz')
    const incorrectAnswer = document.getElementById('incorrectanswer')
    const lastTrack = tracks[tracks.length - 1]
    const lastSrc = lastTrack.src
    // console.log(currentTrack.src)
    // const lastSrc = lastTrack.src;

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
            submitAnswer.style.display = 'none'
            nextQuestion.style.display = 'block'
            correctAnswer.style.display = 'block'
            currentTrackQ.style.display = 'none'
            inputField.style.display = 'none'
            audioPlayerRow.style.display = 'none'
            // classElements.forEach(element => {
            //     element.style.display = 'block'
            // });
            // inputClassElements.forEach(element => {
            //     element.style.display = 'none'
            // });
            audioRef.current.pause()
            newInputValue('')
            newScoreValue(scoreValue + 1)
        } else if (inputValue !== currentTrackValues[0] || inputValue !== currentTrackValues[1]) {
            Thumbnail.style.filter = 'blur(0)'
            TrackInfo.style.display = 'block'
            TrackInfo1.style.display = 'block'
            submitAnswer.style.display = 'none'
            nextQuestion.style.display = 'block'
            incorrectAnswer.style.display = 'block'
            currentTrackQ.style.display = 'none'
            inputField.style.display = 'none'
            audioPlayerRow.style.display = 'none'
            audioRef.current.pause()
            newInputValue('')
            // setTrackIndex((prev) => prev + 1)
            // setCurrentTrack(tracks[trackIndex + 1])
        }
    }

    const nextTrack = () => {
        if (currentTrack.src === lastSrc) {
            nextQuestion.style.display = 'none'
            finishQuiz.style.display = 'block'
        }
        else {
            Thumbnail.style.filter = 'blur(40px)'
            TrackInfo.style.display = 'none'
            TrackInfo1.style.display = 'none'
            submitAnswer.style.display = 'block'
            nextQuestion.style.display = 'none'
            correctAnswer.style.display = 'none'
            incorrectAnswer.style.display = 'none'
            currentTrackQ.style.display = 'block'
            inputField.style.display = 'block'
            audioPlayerRow.style.display = 'block'
            setTrackIndex((prev) => prev + 1)
            setCurrentTrack(tracks[trackIndex + 1])
        }
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
                            <p id="currenttrackq" className="quizinputtext m-0 p-0" style={{ display: 'block' }}>{currentTrack.question}</p>
                            <p id="correctanswer" className="quizinputtext m-0" style={{ display: 'none', fontSize: '2rem' }}>Correct!</p>
                            <p id="incorrectanswer" className="quizinputtext m-0" style={{ display: 'none', fontSize: '2rem' }}>Unlucky!</p>
                        </Row>
                    </Col>
                </Row>
                <Row className='d-flex justify-content-center mt-3'>
                    <Col className='col-lg-3 col-8'>
                        <Row className="d-flex justify-content-center">
                            <input className="input-elements" id="inputfield" type="text" value={inputValue} onChange={userInputHandler} placeholder="Your anwser" style={{ display: 'block' }} />
                        </Row>
                    </Col>
                </Row>
                <Row className='d-flex justify-content-center mt-3'>
                    <Col className='d-flex justify-content-center'>
                        <Row>
                            {/* <button onClick={checkYourAnwser} className="button-custom1">Submit answer</button> */}
                            <Button onClick={checkYourAnwser} className="btn btn-md custom-button-1" id="submitanswer" style={{ display: 'block' }}>Are you correct?</Button>
                        </Row>
                    </Col>
                </Row>
                <Row className='d-flex justify-content-center mt-2'>
                    <Col className='d-flex justify-content-center'>
                        <Row>
                            {/* <button onClick={nextTrack} className="button-custom1">Next question</button> */}
                            <Button onClick={nextTrack} className="btn btn-md custom-button-1" id="nextquestion" style={{ display: 'none' }}>Next question</Button>
                            <button id="finishquiz" className='btn btn-md custom-button-1' onClick={() => navigate("/home")} style={{ display: 'none' }}>Back to the Start</button>
                        </Row>
                    </Col>
                </Row>
                <Row className='d-flex justify-content-center mt-3'>
                    <Col className='d-flex justify-content-center'>
                        <Row>
                            <p>Your Score: {scoreValue}</p>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Container>
    )



}

export default QuizInput;