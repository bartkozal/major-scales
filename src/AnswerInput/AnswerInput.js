import React from "react";

const AnswerInput = ({ onInputSubmit, onInputChange, userInput }) => (
  <form onSubmit={onInputSubmit}>
    <input
      className="AnswerInput"
      type="text"
      onChange={onInputChange}
      value={userInput}
    />
  </form>
);

export default AnswerInput;
