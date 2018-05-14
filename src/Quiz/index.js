import React from "react";
import Question from "../Question";
import Title from "./Title";
import Summary from "./Summary";

const Quiz = ({ questions, currentQuestion, score, onQuestionSubmit }) => (
  <div>
    <Title currentQuestion={currentQuestion} />
    <Question
      {...questions[currentQuestion]}
      onQuestionSubmit={onQuestionSubmit}
    />
    <Summary score={score} />
  </div>
);

export default Quiz;
