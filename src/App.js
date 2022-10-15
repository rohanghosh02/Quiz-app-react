import React, { useState } from "react";
import { questions } from "./Questions";
import "./styles/App.css";

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  // const [previousScore, setPreviousScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
   
    }
  };

  const handleResetButtonClick = () => {
    setShowScore(false);
    setCurrentQuestion(0);
    setScore(0)
  };
//   const handlePreviousScore = () => {
// //  setPreviousScore(0)
//   };

  return (
    <>
      <div className="header">Quiz App</div>
      <hr />
      <div className="app">
        {/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
        {showScore ? (
          <div className="score-section">
            You scored {score} out of {questions.length}
            <div className="reset-button">
              <button onClick={handleResetButtonClick}>Reset</button>
            </div>
            {/* <div className="reset-button">
              <button onClick={handlePreviousScore}>Previous Score </button>
            </div>
            <span className="prev-score"> Your Previous Score :{previousScore}</span> */}
           
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map(
                (answerOptions, index) => (
                  <button
                    onClick={() =>
                      handleAnswerButtonClick(answerOptions.isCorrect)
                    }
                    key={index + "id"}
                  >
                    {answerOptions.answerText}
                  </button>
                )
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
}
