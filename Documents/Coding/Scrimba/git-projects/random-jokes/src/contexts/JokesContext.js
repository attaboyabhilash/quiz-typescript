import React, { createContext, useState, useEffect } from 'react'

export const JokesContext = createContext()

const JokesContextProvider = (props) => {
    const [jokes, setJokes] = useState([])
    const [count, setCount] = useState(0)

    useEffect(() => {
        fetch('https://official-joke-api.appspot.com/jokes/programming/random')
            .then(res => res.json())
            .then(data => setJokes(data[0]))
            .catch(err => console.error(err))
    }, [count])

    return (
        <JokesContext.Provider value={{jokes, count, setCount}}>
            {props.children}
        </JokesContext.Provider>
    )
}

export default JokesContextProvider
