import { useState } from "react"
const QuizInput = ({ currentTrack, setTrackIndex, setCurrentTrack, tracks, trackIndex, audioRef }) => {
    const [inputValue, newInputValue] = useState('')
    // const [scoreValue, newScoreValue] = useState(0)
    // const classElements = Array.from(document.querySelectorAll('.track-info'));
    const thumbnail = document.getElementById('audio-image');
    const trackInfo = document.getElementById('audio-text');
    const nextButton = document.getElementById('next-button');

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
    const userInputHandler = onchange = (event) => {
        // updates the new inputValue to whatever the user inputs into the <input> tag
        newInputValue(event.target.value)
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
        } else {
            alert('Wrong answer, try again')
        }
        console.log(checkYourAnwser)
    }

    const nextTrack = () => {
        nextButton.style.display = 'none'
        thumbnail.style.display = 'none'
        setTrackIndex((prev) => prev + 1)
        setCurrentTrack(tracks[trackIndex + 1])
    }

    return (
        <div>
            <p className="input-elements">{currentTrack.question}</p>
            <button id="next-button" style={{ display: 'none' }} onClick={nextTrack} />
            <input className="input-elements" id="input-field" type="text" value={inputValue} onChange={userInputHandler} />
            <button className="input-elements" id="submit-button" onClick={checkYourAnwser} />
            {/* <p>Score:{scoreValue}</p> */}
        </div>
    )
}

export default QuizInput;