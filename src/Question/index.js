import React from "react";
import { connect } from "react-redux";
import Question from "./Question";

const QuestionContainer = ({ scaleName, noteNumber }) => (
  <Question scaleName={scaleName} noteNumber={noteNumber} />
);

const mapStateToProps = ({ questionsSet, currentQuestion }) => ({
  scaleName: questionsSet[currentQuestion].scaleName,
  noteNumber: questionsSet[currentQuestion].noteNumber
});

export default connect(mapStateToProps)(QuestionContainer);
