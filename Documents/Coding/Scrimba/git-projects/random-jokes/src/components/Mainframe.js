import React, { useContext, useState } from 'react'
import { JokesContext } from '../contexts/JokesContext'

const Mainframe = () => {
    const [punch, setPunch] = useState(false)
    const [btn, setbtn] = useState(false)
    const { jokes: { setup, punchline }, count, setCount } = useContext(JokesContext)

    const handlePunchline = () => {
        setPunch(true)
        setbtn(true)
    }

    const handleNextJoke = () => {
        setPunch(false)
        setbtn(false)
        setCount(count + 1)
    }

    return (
        <div className="main">
            <div className="bubble">
                <p>{setup}</p>
            </div>
            {punch ? <div className="punchline">
                <p>{punchline}</p>
            </div> : <div></div>}
            <div className="buttons">
                {!btn ? <button className="pl" onClick={handlePunchline}>Punchline</button> :
                <button className="nj" onClick={handleNextJoke}>Next Joke</button>}
            </div>
        </div>
    )
}

export default Mainframe