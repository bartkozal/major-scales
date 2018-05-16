import React from "react";
import { connect } from "react-redux";
import Answer from "./Answer";

const AnswerContainer = ({ isAnswerCorrect, correctAnswer }) => (
  <Answer isAnswerCorrect={isAnswerCorrect} correctAnswer={correctAnswer} />
);

const mapStateToProps = ({ questionsSet, currentQuestion }) => ({
  correctAnswer: questionsSet[currentQuestion].correctAnswer
});

export default connect(mapStateToProps)(AnswerContainer);
