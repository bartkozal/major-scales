import React from "react";
import AnswerInput from "../AnswerInput";
import Question from "../Question";
import Summary from "../Summary";
import Title from "../Title";

const Quiz = ({ onQuizSubmit }) => (
  <div className="Quiz">
    <Title />
    <Question />
    <AnswerInput onAnswerSubmit={onQuizSubmit} />
    <Summary />
  </div>
);

export default Quiz;
