import React from 'react'
import { AnswerObject } from "../App"

type Props = {
    question: string,
    answers: string[],
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void,
    userAnswer: AnswerObject | undefined,
    questionNum: number,
    totalQuestions: number
}

const QuestionCard: React.FC<Props> = ({ question, answers, callback, userAnswer, questionNum, totalQuestions }) => {
    return (
        <div>
            <p className="number">Question: {questionNum} / {totalQuestions}</p>
            <p dangerouslySetInnerHTML={{__html: question}} />
            <div>
                {answers.map(answer => {
                    return <button key={answers.indexOf(answer)} disabled={!!userAnswer} value={answer} onClick={callback}>{answer}</button>
                })}
            </div>
        </div>
    )
}

export default QuestionCard
