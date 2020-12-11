import React, { useState, useEffect, createContext } from "react"

export const APIContext = createContext()

const APIContextProvider = (props) => {
    const [people, setPeople] = useState([])

    const getPeople = async () => {
        const res = await fetch("http://swapi.dev/api/people/")
        const data = await res.json()
        setPeople(data.results)
    }

    useEffect(() => {
        getPeople()
    }, [])

    return (
        <APIContext.Provider value={{ people }}>
            {props.children}
        </APIContext.Provider>
    )
}

export default APIContextProvider
