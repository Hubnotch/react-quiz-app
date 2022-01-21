import React from "react";
// import Button from "./Button.js";

function Question(props) {
  console.log(props);
  // console.log(props.correctAnswer)
  return (
    <div className="question">
      <h3>{props.question}</h3>
      <div className="question--options">
        <button className="btn options">{props.correct_answer}</button>
        <button className="btn options">{props.incorrect_answers[0]}</button>
        <button className="btn options">{props.incorrect_answers[1]}</button>
        <button className="btn options">{props.incorrect_answers[2]}</button>
      </div>
    </div>
  );
}

export default Question;
