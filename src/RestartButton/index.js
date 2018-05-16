import React from "react";
import { connect } from "react-redux";
import RestartButton from "./RestartButton";
import { startQuiz } from "../actionCreators";

const RestartButtonContainer = ({ startQuiz }) => (
  <RestartButton onClick={startQuiz} />
);

const mapDispatchToProps = {
  startQuiz
};

export default connect(null, mapDispatchToProps)(RestartButtonContainer);
