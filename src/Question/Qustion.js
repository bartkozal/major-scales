import React from "react";

const Question = ({
  onSubmit,
  updateUserAnswer,
  userAnswer,
  noteNumber,
  scaleName
}) => (
  <div className="Question">
    <div className="Question-Title">
      {noteNumber} note in {scaleName}
    </div>

    <form onSubmit={onSubmit}>
      <input
        className="Question-Input"
        type="text"
        onChange={updateUserAnswer}
        value={userAnswer}
      />
    </form>
  </div>
);

export default Question;
