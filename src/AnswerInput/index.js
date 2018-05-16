import React, { PureComponent } from "react";
import AnswerInput from "./AnswerInput";
import { connect } from "react-redux";
import { updateUserInput, clearUserInput } from "../actionCreators";

class AnswerInputContainer extends PureComponent {
  handleInputChange = event => {
    this.props.updateUserInput(event.target.value);
  };

  handleInputSubmit = event => {
    event.preventDefault();
    this.props.onAnswerSubmit();
    this.props.clearUserInput();
  };

  render() {
    const { userInput } = this.props;

    return (
      <AnswerInput
        userInput={userInput}
        onInputSubmit={this.handleInputSubmit}
        onInputChange={this.handleInputChange}
      />
    );
  }
}

const mapStateToProps = ({ userInput }) => ({ userInput });

const mapDispatchToProps = {
  updateUserInput,
  clearUserInput
};

export default connect(mapStateToProps, mapDispatchToProps)(
  AnswerInputContainer
);
