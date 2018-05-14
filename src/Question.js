import React, { PureComponent } from "react";

class Question extends PureComponent {
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
      <div>
        {noteNumber} note in {scaleName}
        <div>
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              onChange={this.updateUserAnswer}
              value={userAnswer}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Question;
