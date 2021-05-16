import React from 'react'
import QuestionCard from "./components/QuestionCard"

const App = () => {

  const startTrivia = async () => {

  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }

  return (
    <div className="App">
      <h1>Trivia</h1>
      <button className="start" onClick={startTrivia}>Start Quiz</button>
      <p className="score">Score:</p>
      <p>Loading...</p>
      <QuestionCard />
      <button className="next" onClick={nextQuestion}>Next</button>
    </div>
  )
}

export default App

