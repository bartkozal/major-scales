import React, { PureComponent } from "react";
import AnswerInput from "./AnswerInput";

export default class AnswerInputContainer extends PureComponent {
  state = {
    userInput: ""
  };

  updateUserAnswer = event => {
    this.setState({ userInput: event.target.value });
  };

  onInputSubmit = event => {
    event.preventDefault();

    const { userInput } = this.state;
    const { correctAnswer, onAnswerSubmit } = this.props;

    onAnswerSubmit(userInput, correctAnswer);
    this.setState({ userInput: "" });
  };

  render() {
    const { userInput } = this.state;

    return (
      <AnswerInput
        userAnswer={userInput}
        onInputSubmit={this.onInputSubmit}
        updateUserAnswer={this.updateUserAnswer}
      />
    );
  }
}
