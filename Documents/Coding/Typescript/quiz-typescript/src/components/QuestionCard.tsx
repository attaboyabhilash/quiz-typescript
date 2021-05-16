import React from 'react'
import { AnswerObject } from "../App"
import { ButtonWrapper } from "./QuestionCard.styles"

type Props = {
    question: string,
    answers: string[],
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void,
    userAnswer: AnswerObject | undefined,
    questionNum: number,
    totalQuestions: number,
    score: number
}

const QuestionCard: React.FC<Props> = ({ question, answers, callback, userAnswer, questionNum, totalQuestions, score }) => {
    return (
        <div>
            <div className="flexer">
                <p className="score">Score: {score}</p>
                <p className="number">Question: {questionNum} / {totalQuestions}</p>
            </div>
            <p className="question" dangerouslySetInnerHTML={{__html: question}} />
            <div>
                {answers.map(answer => {
                    return <ButtonWrapper key={answers.indexOf(answer)} correct={userAnswer?.correctAnswer === answer} userClicked={userAnswer?.answer === answer}>
                        <button disabled={!!userAnswer} value={answer} onClick={callback}>
                            {answer}
                        </button>
                    </ButtonWrapper>
                })}
            </div>
        </div>
    )
}

export default QuestionCard
