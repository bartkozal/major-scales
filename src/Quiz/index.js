import React from "react";
import AnswerInput from "../AnswerInput";
import Question from "../Question";
import Summary from "../Summary";
import Title from "../Title";

const Quiz = ({ questionsSet, currentQuestion, score, onAnswerSubmit }) => {
  const { scaleName, noteNumber, correctAnswer } = questionsSet[
    currentQuestion
  ];

  return (
    <div className="Quiz">
      <Title currentQuestion={currentQuestion} />
      <Question scaleName={scaleName} noteNumber={noteNumber} />
      <AnswerInput
        correctAnswer={correctAnswer}
        onAnswerSubmit={onAnswerSubmit}
      />
      <Summary score={score} />
    </div>
  );
};

export default Quiz;
