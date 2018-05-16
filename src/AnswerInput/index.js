import React, { PureComponent } from "react";
import AnswerInput from "./AnswerInput";

export default class AnswerInputContainer extends PureComponent {
  state = {
    userAnswer: ""
  };

  updateUserAnswer = event => {
    this.setState({ userAnswer: event.target.value });
  };

  onInputSubmit = event => {
    event.preventDefault();

    const { userAnswer } = this.state;
    const { correctAnswer, onAnswerSubmit } = this.props;

    onAnswerSubmit(userAnswer, correctAnswer);
    this.setState({ userAnswer: "" });
  };

  render() {
    const { userAnswer } = this.state;

    return (
      <AnswerInput
        userAnswer={userAnswer}
        onInputSubmit={this.onInputSubmit}
        updateUserAnswer={this.updateUserAnswer}
      />
    );
  }
}
