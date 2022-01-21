import React from 'react'
import Question from './Question.js'
import data from "../data.js"
// import {nanoid} from "nanoid"

function Quiz() {

    const questionsArray = data["results"]
    
    //console.log(questionsArray[0]);
    
    const questions = questionsArray.map((question) => (
    
    <Question key= {question} 

    {...question}
        // question={question} 
        // correctAnswer = {question.correct_answer}
        // incorrectAnwers = {question.incorrect_answers.map(answer=>answer)}
    />
    ));
    return (
        <section className="quiz">
          {questions}
          
        </section>
    )
}

export default Quiz
