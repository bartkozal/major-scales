import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Button from "../Button";
import { loadNextQuestion, clearUserInput } from "../actionCreators";

class NextButton extends PureComponent {
  handleButtonClick = () => {
    this.props.loadNextQuestion();
    this.props.clearUserInput();
  };

  render() {
    return <Button onClick={this.handleButtonClick}>Next one</Button>;
  }
}

const mapDispatchToProps = {
  loadNextQuestion,
  clearUserInput
};

export default connect(null, mapDispatchToProps)(NextButton);
