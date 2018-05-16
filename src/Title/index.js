import React from "react";
import { connect } from "react-redux";
import { QUIZ_LENGTH } from "../constants";
import Title from "./Title";

const TitleContainer = ({ currentQuestion }) => (
  <Title currentQuestion={currentQuestion} quizLength={QUIZ_LENGTH} />
);

const mapStateToProps = ({ currentQuestion }) => ({ currentQuestion });

export default connect(mapStateToProps)(TitleContainer);
