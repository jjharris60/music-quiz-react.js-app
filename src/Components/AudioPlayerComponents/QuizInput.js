import { useState } from "react"
const QuizInput = ({ currentTrack, setTrackIndex, setCurrentTrack, tracks, trackIndex }) => {
    const [inputValue, newInputValue] = useState('')

    const currentTrackAuthor = currentTrack.author
    // const currentTrackSource = currentTrack.src

    const userInputHandler = onchange = (e) => {
        return newInputValue(e.target.value)
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
            <p>Question 1</p>
            <input id="input-field" type="text" value={inputValue} onChange={userInputHandler} />
            <button id="submit-button" onClick={checkYourAnwser} />
        </div>
    )
}

export default QuizInput;