import { useState } from "react"
const QuizInput = ({ currentTrack, setTrackIndex, setCurrentTrack, tracks, trackIndex, audioRef }) => {
    const [inputValue, newInputValue] = useState('')
    const [scoreValue, newScoreValue] = useState(0)
    const classElements = Array.from(document.getElementsByClassName('track-info'));
    const nextButton = document.getElementById('next-button');
    const inputClassElements = Array.from(document.getElementsByClassName('input-elements'));
    classElements.forEach(element => {
        element.style.display = 'none'
    });
    inputClassElements.forEach(element => {
        element.style.display = 'block'
    });

    // sets an initial input value of '' and a function to update the state
    // const currentTrackAuthor = currentTrack.author
    // const currentTrackSource = currentTrack.src
    const currentTrackValues = [currentTrack.author, currentTrack.title]
    // Function for updating the user's input value
    const userInputHandler = onchange = (event) => {
        // updates the new inputValue to whatever the user inputs into the <input> tag
        newInputValue(event.target.value)
    }

    // Function for checking if user's anwser is correct. Compares the string value from the <input> tag to the currentTrack's value's, such as author and title
    const checkYourAnwser = () => {
        if (inputValue === currentTrackValues[0] || currentTrackValues[1]) {
            classElements.forEach(element => {
                element.style.display = 'block'
            });
            inputClassElements.forEach(element => {
                element.style.display = 'none'
            });
            nextButton.style.display = 'block'
        }
    }

    // const nextTrack = onclick = () => {
    //     setTrackIndex((prev) => prev + 1)
    //     setCurrentTrack(tracks[trackIndex + 1])
    //     newScoreValue(scoreValue + 1)
    // }


    return (
        <div>
            <p className="input-elements">{currentTrack.question}</p>
            <button id="next-button" style={{ display: 'none' }} onClick={() => {
                setTrackIndex((prev) => prev + 1)
                setCurrentTrack(tracks[trackIndex + 1])
                newScoreValue(scoreValue + 1)
                nextButton.style.display = 'none'
            }} />
            <input className="input-elements" id="input-field" type="text" value={inputValue} onChange={userInputHandler} />
            <button className="input-elements" id="submit-button" onClick={checkYourAnwser} />
            <p>Score:{scoreValue}</p>
        </div>
    )
}

export default QuizInput;