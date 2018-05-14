import React from "react";
import Question from "./Question";
import { QUIZ_LENGTH } from "./constants";

const Quiz = ({ questions, currentQuestion, score, onQuestionSubmit }) => (
  <div>
    {currentQuestion + 1} / {QUIZ_LENGTH}
    <Question
      {...questions[currentQuestion]}
      onQuestionSubmit={onQuestionSubmit}
    />
    Your score: {score}
  </div>
);

export default Quiz;
