import { useRef, useMemo, useCallback, useState } from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import { Card } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const QuizInput = ({ currentTrack, setTrackIndex, setCurrentTrack, tracks, trackIndex, audioRef, trackText, trackText1, thumbnail, audioPlayerRow }) => {
    const navigate = useNavigate()
    const [inputValue, newInputValue] = useState('')
    const [scoreValue, newScoreValue] = useState(0)
    const submitAnswer = useRef();
    const nextQuestion = useRef()
    const currentTrackQ = useRef()
    const correctAnswer = useRef()
    const inputField = useRef()
    const finishQuiz = useRef();
    const incorrectAnswer = useRef();
    const lastTrack = tracks[tracks.length - 1]
    const lastSrc = lastTrack.src

    // sets an initial input value of '' and a function to update the state
    const currentTrackValues = useMemo(() => [currentTrack.author, currentTrack.title], [currentTrack.author, currentTrack.title]);
    // Function for updating the user's input value
    const userInputHandler = onchange = (userInputEvent) => {
        // updates the new inputValue to whatever the user inputs into the <input> tag
        newInputValue(userInputEvent.target.value)
    }

    // Function for checking if user's anwser is correct. Compares the string value from the <input> tag to the currentTrack's value's, such as author and title
    // const checkYourAnwser = () => {
    //     if (inputValue === currentTrackValues[0] || inputValue === currentTrackValues[1]) {
    //         thumbnail.current.style.filter = 'blur(0)'
    //         trackText.current.style.display = 'block'
    //         trackText1.current.style.display = 'block'
    //         submitAnswer.current.style.display = 'none'
    //         nextQuestion.current.style.display = 'block'
    //         currentTrackQ.current.style.display = 'none'
    //         correctAnswer.current.style.display = 'block'
    //         inputField.current.style.display = 'none'
    //         audioPlayerRow.current.style.display = 'none'
    //         audioRef.current.pause()
    //         newInputValue('')
    //         newScoreValue(scoreValue + 1)
    //     } else if (inputValue !== currentTrackValues[0] || inputValue !== currentTrackValues[1]) {
    //         thumbnail.current.style.filter = 'blur(0)'
    //         trackText.current.style.display = 'block'
    //         trackText1.current.style.display = 'block'
    //         submitAnswer.current.style.display = 'none'
    //         nextQuestion.current.style.display = 'block'
    //         currentTrackQ.current.style.display = 'none'
    //         inputField.current.style.display = 'none'
    //         incorrectAnswer.current.style.display = 'block'
    //         audioPlayerRow.current.style.display = 'none'
    //         audioRef.current.pause()
    //         newInputValue('')
    //         // setTrackIndex((prev) => prev + 1)
    //         // setCurrentTrack(tracks[trackIndex + 1])
    //     }
    // }

    const checkYourAnwser = useCallback(() => {
        if (inputValue === '') {
            alert('Type your guess into the text box')
            return;
        }
        if (inputValue.toLowerCase() === currentTrackValues[0].toLowerCase() ||
            inputValue.toUpperCase() === currentTrackValues[0].toUpperCase() ||
            inputValue.toLowerCase() === currentTrackValues[1].toLowerCase() ||
            inputValue.toUpperCase() === currentTrackValues[1].toUpperCase()) {
            thumbnail.current.style.filter = 'blur(0)';
            trackText.current.style.display = 'block';
            trackText1.current.style.display = 'block';
            submitAnswer.current.style.display = 'none';
            nextQuestion.current.style.display = 'block';
            currentTrackQ.current.style.display = 'none';
            correctAnswer.current.style.display = 'block';
            inputField.current.style.display = 'none';
            audioPlayerRow.current.style.display = 'none';
            audioRef.current.pause();
            newInputValue('');
            newScoreValue(scoreValue + 1);
            if (currentTrack.src === lastSrc) {
                nextQuestion.current.style.display = 'none'
                finishQuiz.current.style.display = 'block'
                thumbnail.current.style.display = 'block'
                trackText.current.style.display = 'block';
                trackText1.current.style.display = 'block';
                submitAnswer.current.style.display = 'none';
                nextQuestion.current.style.display = 'none';
                currentTrackQ.current.style.display = 'none';
                inputField.current.style.display = 'none';
                incorrectAnswer.current.style.display = 'block';
                audioPlayerRow.current.style.display = 'none';
            }
        } else if (inputValue.toLowerCase() !== currentTrackValues[0].toLowerCase() ||
            inputValue.toUpperCase() !== currentTrackValues[0].toUpperCase() ||
            inputValue.toLowerCase() !== currentTrackValues[1].toLowerCase() ||
            inputValue.toUpperCase() !== currentTrackValues[1].toUpperCase()) {
            thumbnail.current.style.filter = 'blur(0)';
            trackText.current.style.display = 'block';
            trackText1.current.style.display = 'block';
            submitAnswer.current.style.display = 'none';
            nextQuestion.current.style.display = 'block';
            currentTrackQ.current.style.display = 'none';
            inputField.current.style.display = 'none';
            incorrectAnswer.current.style.display = 'block';
            audioPlayerRow.current.style.display = 'none';
            audioRef.current.pause();
            newInputValue('');
            if (currentTrack.src === lastSrc) {
                nextQuestion.current.style.display = 'none'
                finishQuiz.current.style.display = 'block'
                thumbnail.current.style.display = 'block'
                trackText.current.style.display = 'block';
                trackText1.current.style.display = 'block';
                submitAnswer.current.style.display = 'none';
                nextQuestion.current.style.display = 'none';
                currentTrackQ.current.style.display = 'none';
                inputField.current.style.display = 'none';
                incorrectAnswer.current.style.display = 'block';
                audioPlayerRow.current.style.display = 'none';
            }
        }
    }, [inputValue, currentTrackValues, thumbnail, trackText, trackText1, submitAnswer, nextQuestion, currentTrackQ, correctAnswer, inputField, audioPlayerRow, audioRef, newInputValue, newScoreValue, scoreValue, currentTrack.src, finishQuiz, lastSrc]);

    const nextTrack = useCallback(() => {
        // console.log(currentTrack.src, lastSrc);
        // if (currentTrack.src === lastSrc) {
        //     nextQuestion.current.style.display = 'none'
        //     finishQuiz.current.style.display = 'block'
        // } else {
        thumbnail.current.style.filter = 'blur(40px)'
        trackText.current.style.display = 'none'
        trackText1.current.style.display = 'none'
        submitAnswer.current.style.display = 'block'
        nextQuestion.current.style.display = 'none'
        currentTrackQ.current.style.display = 'block'
        correctAnswer.current.style.display = 'none'
        inputField.current.style.display = 'block'
        incorrectAnswer.current.style.display = 'none'
        audioPlayerRow.current.style.display = 'block'
        setTrackIndex((prev) => prev + 1)
        setCurrentTrack(tracks[trackIndex + 1])
    }, [nextQuestion, thumbnail, trackText, trackText1, submitAnswer, currentTrackQ, correctAnswer, inputField, incorrectAnswer, audioPlayerRow, setTrackIndex, setCurrentTrack, trackIndex, tracks])

    // const nextTrack = () => {
    //     if (currentTrack.src === lastSrc) {
    //         nextQuestion.current.style.display = 'none'
    //         finishQuiz.style.display = 'block'
    //     }
    //     else {
    // thumbnail.current.style.filter = 'blur(40px)'
    // trackText.current.style.display = 'none'
    // trackText1.current.style.display = 'none'
    // submitAnswer.current.style.display = 'block'
    // nextQuestion.current.style.display = 'none'
    // currentTrackQ.current.style.display = 'block'
    // correctAnswer.current.style.display = 'none'
    // inputField.current.style.display = 'block'
    // incorrectAnswer.current.style.display = 'none'
    // audioPlayerRow.current.style.display = 'block'
    // setTrackIndex((prev) => prev + 1)
    // setCurrentTrack(tracks[trackIndex + 1])
    //     }
    // }

    return (
        <Container className='d-flex justfiy-content-center'>
            <Col>
                <Row className='d-flex justify-content-center'>
                    <Col>
                        <Row>
                            <p className="quizinputtext m-0 p-0" style={{ display: 'block' }} ref={currentTrackQ}>{currentTrack.question}</p>
                            <p className="quizinputtext m-0" style={{ display: 'none', fontSize: '2rem' }} ref={correctAnswer}>Correct!</p>
                            <p className="quizinputtext m-0" style={{ display: 'none', fontSize: '2rem' }} ref={incorrectAnswer}>Unlucky!</p>
                        </Row>
                    </Col>
                </Row>
                <Row className='d-flex justify-content-center mt-3'>
                    <Col className='col-lg-3 col-8'>
                        <Row className="d-flex justify-content-center">
                            <input className="inputfield" type="text" value={inputValue} onChange={userInputHandler} ref={inputField} placeholder="Your guess" style={{ display: 'block' }} />
                        </Row>
                    </Col>
                </Row>
                <Row className='d-flex justify-content-center mt-3'>
                    <Col className='d-flex justify-content-center'>
                        <Row>
                            {/* <button onClick={checkYourAnwser} className="button-custom1">Submit answer</button> */}
                            <Button onClick={checkYourAnwser} className="btn btn-md custombutton" style={{ display: 'block' }} ref={submitAnswer}>Are you correct?</Button>
                        </Row>
                    </Col>
                </Row>
                <Row className='d-flex justify-content-center mt-2'>
                    <Col className='d-flex justify-content-center'>
                        <Row>
                            {/* <button onClick={nextTrack} className="button-custom1">Next question</button> */}
                            <Button onClick={nextTrack} className="btn btn-md custombutton" style={{ display: 'none' }} ref={nextQuestion}>Next question</Button>
                            <button className='btn btn-md custombutton' onClick={() => navigate("/")} style={{ display: 'none' }} ref={finishQuiz}>Play again</button>
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