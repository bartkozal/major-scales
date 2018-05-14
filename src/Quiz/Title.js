import React from "react";
import { QUIZ_LENGTH } from "../constants";

const QuizTitle = ({ currentQuestion }) => (
  <div>
    {currentQuestion + 1} / {QUIZ_LENGTH}
  </div>
);

export default QuizTitle;
