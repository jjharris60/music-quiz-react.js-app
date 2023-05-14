import { useState } from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import { Card } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const QuizInput = ({ currentTrack, setTrackIndex, setCurrentTrack, tracks, trackIndex, audioRef, setBlock, setNone, setBlur, elementStateBlock, elementStateNone, elementStateNone1, setBlock1, setNone1, setBlock2, setNone2, elementStateNone2, elementStateNone3, setNone3 }) => {
    const navigate = useNavigate()
    const [inputValue, newInputValue] = useState('')
    const [scoreValue, newScoreValue] = useState(0)
    const lastTrack = tracks[tracks.length - 1]
    const lastSrc = lastTrack.src

    // sets an initial input value of '' and a function to update the state
    const currentTrackValues = [currentTrack.author, currentTrack.title, currentTrack.releaseyear, currentTrack.answer]
    // Function for updating the user's input value
    const userInputHandler = onchange = (userInputEvent) => {
        // updates the new inputValue to whatever the user inputs into the <input> tag
        newInputValue(userInputEvent.target.value)
    }

    const checkYourAnwser = () => {
        if (inputValue === '') {
            alert('Type your guess into the text box')
            return
        }
        if ((currentTrackValues.some(trackValue => trackValue.toLowerCase() === inputValue.toLowerCase()))) {
            setNone('block')
            setBlur('blur(0)')
            setBlock('none')
            setBlock1('none')
            setNone3('block')
            audioRef.current.pause()
            newInputValue('')
            newScoreValue(scoreValue + 1);
            if (currentTrack.src === lastSrc) {
                setNone('block')
                setBlock('none')
                setNone1('none')
                setBlock1('none')
                setBlock2('block')
                setNone2('block')
                setNone3('none')
            }
        } else if (currentTrackValues.some(trackValue => trackValue.toLowerCase() !== inputValue.toLowerCase())) {
            setNone1('block')
            setBlur('blur(0)')
            setBlock('none')
            setBlock1('none')
            setNone1('block')
            setNone3('block')
            audioRef.current.pause()
            newInputValue('')
            if (currentTrack.src === lastSrc) {
                setNone('none')
                setBlock('none')
                setNone1('block')
                setBlock1('none')
                setBlock2('block')
                setNone2('block')
                setNone3('none')
            }
        }
    }

    const nextTrack = () => {
        setNone('none')
        setBlock('block')
        setBlock1('block')
        setBlur('blur(40px)')
        setNone1('none')
        setNone3('none')
        setTrackIndex((prev) => prev + 1)
        setCurrentTrack(tracks[trackIndex + 1])
    }

    return (
        <Container className='d-flex justfiy-content-center'>
            <Col>
                <Row className='d-flex justify-content-center'>
                    <Col>
                        <Row>
                            <p className="quizinputtext m-0 p-0" style={elementStateBlock}>{currentTrack.question}</p>
                            <p className="quizinputtext1 m-0" style={elementStateNone}>Correct!</p>
                            <p className="quizinputtext1 m-0" style={elementStateNone1}>Unlucky!</p>
                        </Row>
                    </Col>
                </Row>
                <Row className='d-flex justify-content-center mt-4'>
                    <Col className='col-xl-3 col-lg-3 col-md-6 col-sm-8 col'>
                        <Row className="d-flex justify-content-center">
                            <input className="inputfield" type="text" value={inputValue} onChange={userInputHandler} placeholder="Your guess" style={elementStateBlock} required />
                        </Row>
                    </Col>
                </Row>
                <Row className='d-flex justify-content-center mt-4'>
                    <Col className='d-flex justify-content-center'>
                        <Row>
                            {/* <button onClick={checkYourAnwser} className="button-custom1">Submit answer</button> */}
                            <Button onClick={checkYourAnwser} className="btn btn-md custombutton" style={elementStateBlock}>Are you correct?</Button>
                        </Row>
                    </Col>
                </Row>
                <Row className='d-flex justify-content-center mt-2'>
                    <Col className='d-flex justify-content-center'>
                        <Row>
                            {/* <button onClick={nextTrack} className="button-custom1">Next question</button> */}
                            <Button onClick={nextTrack} className="btn btn-md custombutton" style={elementStateNone3}>Next question</Button>
                            <button className='btn btn-md custombutton' onClick={() => navigate("/")} style={elementStateNone2}>Play again</button>
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

// 