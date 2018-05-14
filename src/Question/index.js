import React, { PureComponent } from "react";
import Question from "./Qustion";

export default class QuestionContainer extends PureComponent {
  state = {
    userAnswer: ""
  };

  updateUserAnswer = event => {
    this.setState({ userAnswer: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();

    const { userAnswer } = this.state;
    const { correctAnswer, onQuestionSubmit } = this.props;

    onQuestionSubmit(userAnswer, correctAnswer);
    this.setState({ userAnswer: "" });
  };

  render() {
    const { scaleName, noteNumber } = this.props;
    const { userAnswer } = this.state;

    return (
      <Question
        scaleName={scaleName}
        noteNumber={noteNumber}
        userAnswer={userAnswer}
        onSubmit={this.onSubmit}
        updateUserAnswer={this.updateUserAnswer}
      />
    );
  }
}
