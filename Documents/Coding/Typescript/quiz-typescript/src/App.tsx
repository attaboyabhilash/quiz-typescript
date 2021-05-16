import React, { useState } from 'react'
import QuestionCard from "./components/QuestionCard"
import { fetchQuizQuestions, Difficulty, QuestionState } from "./apis"
import HashLoader from "react-spinners/HashLoader";

export type AnswerObject = {
  question: string,
  answer: string,
  correct: boolean,
  correctAnswer: string
}

const TOTAL_QUESTIONS = 10;

const App = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [questions, setQuestions] = useState<QuestionState[]>([])
  const [number, setNumber] = useState(0)
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([])
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(true)

  const startTrivia = async () => {
    setIsLoading(true)
    setGameOver(false)
    try {
      const newQuestions = await fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY)
      setQuestions(newQuestions)
      setScore(0)
      setUserAnswers([])
      setNumber(0)
    } catch (error) {
      console.error(error)
    }
    setIsLoading(false)
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if(!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer
      if(correct) setScore(prevScore => prevScore + 1)
      const answerobj = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer
      }
      setUserAnswers(prev => [...prev, answerobj])
    }
  }

  const nextQuestion = () => {
    const nextQuestion = number + 1
    if(nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true)
    } else {
      setNumber(nextQuestion)
    }
  }

  return (
    <div className="App">
      <h1>Trivia</h1>
      {gameOver || userAnswers.length === TOTAL_QUESTIONS ? <button className="start" onClick={startTrivia}>Start Quiz</button> : null}
      {isLoading && <div className="hash_loader"><HashLoader color="#0984e3" loading={isLoading} size={40} /></div> }
      {!isLoading && !gameOver && userAnswers.length !== TOTAL_QUESTIONS ? (
        <QuestionCard 
          question={questions[number].question}
          answers={questions[number].answers}
          callback={checkAnswer}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          questionNum={number + 1}
          totalQuestions={TOTAL_QUESTIONS}
          score={score} 
        />
      ) : !isLoading ? <p className="new_score">Score: {score}</p> : null}
      {!isLoading && !gameOver && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 
        ? 
        (<button className="next" onClick={nextQuestion}>Next</button>)
        :
        null
      }
    </div>
  )
}

export default App

