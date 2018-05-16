import React from "react";
import classNames from "classnames";

const Answer = ({ isAnswerCorrect, noteNumber, scaleName, correctAnswer }) => (
  <div
    className={classNames("Answer", [
      isAnswerCorrect ? "Answer--correct" : "Answer--incorrect"
    ])}
  >
    {isAnswerCorrect ? (
      "Correct, nice!"
    ) : (
      <div>
        Incorrect. The {noteNumber} note in {scaleName} is:{" "}
        <strong>{correctAnswer}</strong>
      </div>
    )}
  </div>
);

export default Answer;
