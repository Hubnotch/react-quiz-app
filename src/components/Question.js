import React from 'react'
// import Button from "./Button.js";

function Question(props) {
  console.log(props.incorrectAnswers)
    return (
      <div className="question">
        <h3>{props.question}</h3>
        <div className="question--options">
          <button className="btn options">{props.incorrectAnswers}</button>
          {/* <button className="btn options">Hola</button>
          <button className="btn options">Au Revoir</button>
          <button className="btn options">Salir</button> */}
        </div>
      </div>
    );
}

export default Question
