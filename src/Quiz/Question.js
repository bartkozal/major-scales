import React from "react";

const Question = ({ noteNumber, scaleName }) => (
  <div className="QuizQuestion">
    {noteNumber} note in {scaleName}
  </div>
);

export default Question;
