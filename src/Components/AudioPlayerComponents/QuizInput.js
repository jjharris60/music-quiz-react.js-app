import { useState } from "react"
const QuizInput = ({ currentTrack, setTrackIndex, setCurrentTrack, tracks, trackIndex }) => {
    const [inputValue, newInputValue] = useState('')
    // sets an initial input value of '' and a function to update the state

    const currentTrackAuthor = currentTrack.author
    // const currentTrackSource = currentTrack.src

    const userInputHandler = onchange = (event) => {
        // updates the new inputValue to whatever the user inputs into the <input> tag
        return newInputValue(event.target.value)
    }

    const checkYourAnwser = () => {
        if (inputValue === currentTrackAuthor) {
            setTrackIndex((prev) => prev + 1)
            setCurrentTrack(tracks[trackIndex + 1])
        } else {
            console.log('This is wrong')
        }
    }

    return (
        <div>
            <p>{currentTrack.question}</p>
            <input id="input-field" type="text" value={inputValue} onChange={userInputHandler} />
            <button id="submit-button" onClick={checkYourAnwser} />
        </div>
    )
}

export default QuizInput;