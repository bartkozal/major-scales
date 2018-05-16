import React from "react";

const Question = ({ noteNumber, scaleName }) => (
  <div className="Question">
    {noteNumber} note in {scaleName}
  </div>
);

export default Question;
