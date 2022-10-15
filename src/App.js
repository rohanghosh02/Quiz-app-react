import React, { useState } from "react";
import { questions } from "./Questions";
import "./styles/App.css";

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if(isCorrect ===true){
     
      setScore(score+1)
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="app">
      {/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion+1}</span>/{questions.length}
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
  );
}
