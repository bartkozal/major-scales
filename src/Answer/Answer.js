import React from "react";
import classNames from "classnames";
import "./Answer.css";

const Answer = ({ isAnswerCorrect, correctAnswer }) => (
  <div
    className={classNames("Answer", [
      isAnswerCorrect ? "Answer--correct" : "Answer--incorrect"
    ])}
  >
    {isAnswerCorrect ? (
      "Correct, nice!"
    ) : (
      <div>
        Incorrect. The answer is: <strong>{correctAnswer}</strong>
      </div>
    )}
  </div>
);

export default Answer;
