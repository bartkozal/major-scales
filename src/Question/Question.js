import React from "react";
import "./Question.css";

const Question = ({ noteNumber, scaleName }) => (
  <div className="Question">
    {noteNumber} note in {scaleName}
  </div>
);

export default Question;
