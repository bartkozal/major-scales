import React from "react";

const Summary = ({ score }) => (
  <div className="QuizSummary">
    Your score: <strong>{score}</strong>
  </div>
);

export default Summary;
