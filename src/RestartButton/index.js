import React from "react";
import { connect } from "react-redux";
import Button from "../Button";
import { startQuiz } from "../actionCreators";

const RestartButton = ({ startQuiz }) => (
  <Button onClick={startQuiz}>Try again</Button>
);

const mapDispatchToProps = {
  startQuiz
};

export default connect(null, mapDispatchToProps)(RestartButton);
