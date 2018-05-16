import React from "react";
import { connect } from "react-redux";
import Answer from "./Answer";

const AnswerContainer = ({
  isAnswerCorrect,
  noteNumber,
  scaleName,
  correctAnswer,
  currentQuestion
}) => (
  <Answer
    isAnswerCorrect={isAnswerCorrect}
    noteNumber={noteNumber}
    scaleName={scaleName}
    correctAnswer={correctAnswer}
  />
);

const mapStateToProps = ({ questionsSet, currentQuestion }) => {
  const question = questionsSet[currentQuestion];

  return {
    noteNumber: question.noteNumber,
    scaleName: question.scaleName,
    correctAnswer: question.correctAnswer,
    currentQuestion
  };
};

export default connect(mapStateToProps)(AnswerContainer);
