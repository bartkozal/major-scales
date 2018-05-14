import React from "react";
import Question from "./Question";
import QuizTitle from "./QuizTitle";
import QuizSummary from "./QuizSummary";

const Quiz = ({ questions, currentQuestion, score, onQuestionSubmit }) => (
  <div>
    <QuizTitle currentQuestion={currentQuestion} />
    <Question
      {...questions[currentQuestion]}
      onQuestionSubmit={onQuestionSubmit}
    />
    <QuizSummary score={score} />
  </div>
);

export default Quiz;
