import React from "react";

const AnswerInput = ({ onSubmit, updateUserAnswer, userAnswer }) => (
  <form onSubmit={onSubmit}>
    <input
      className="QuizAnswerInput"
      type="text"
      onChange={updateUserAnswer}
      value={userAnswer}
    />
  </form>
);

export default AnswerInput;
