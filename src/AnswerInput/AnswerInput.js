import React from "react";

const AnswerInput = ({ onInputSubmit, updateUserAnswer, userAnswer }) => (
  <form onSubmit={onInputSubmit}>
    <input
      className="AnswerInput"
      type="text"
      onChange={updateUserAnswer}
      value={userAnswer}
    />
  </form>
);

export default AnswerInput;
