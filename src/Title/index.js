import React from "react";
import { QUIZ_LENGTH } from "../constants";

const Title = ({ currentQuestion }) => (
  <div className="Title">
    {currentQuestion + 1} / {QUIZ_LENGTH}
  </div>
);

export default Title;
