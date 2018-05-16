import React from "react";

const Title = ({ currentQuestion, quizLength }) => (
  <div className="Title">
    {currentQuestion + 1} / {quizLength}
  </div>
);

export default Title;
