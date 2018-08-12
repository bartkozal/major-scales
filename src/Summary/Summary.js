import React from "react";
import "./Summary.css";

const Summary = ({ score }) => (
  <div className="Summary">
    Your score: <strong>{score}</strong>
  </div>
);

export default Summary;
