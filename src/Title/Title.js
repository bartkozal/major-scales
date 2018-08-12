import React from "react";
import "./Title.css";

const Title = ({ currentQuestion, quizLength }) => (
  <div className="Title">
    {currentQuestion + 1} / {quizLength}
  </div>
);

export default Title;
