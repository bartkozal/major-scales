import React, { Fragment } from "react";
import Title from "../Title";
import Question from "../Question";
import AnswerInput from "../AnswerInput";
import Answer from "../Answer";
import NextButton from "../NextButton";
import Summary from "../Summary";
import "./Quiz.css";

const Quiz = ({ onQuizSubmit, isAnswerCorrect, isAnswerVisible }) => (
  <div className="Quiz">
    <Title />
    <Question />
    <AnswerInput onAnswerSubmit={onQuizSubmit} />

    {isAnswerVisible && (
      <Fragment>
        <Answer isAnswerCorrect={isAnswerCorrect} />
        <NextButton />
      </Fragment>
    )}

    <Summary />
  </div>
);

export default Quiz;
