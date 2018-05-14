import React from "react";

const Question = ({
  onSubmit,
  updateUserAnswer,
  userAnswer,
  noteNumber,
  scaleName
}) => (
  <div>
    {noteNumber} note in {scaleName}
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={updateUserAnswer} value={userAnswer} />
      </form>
    </div>
  </div>
);

export default Question;
