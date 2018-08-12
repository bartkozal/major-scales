import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Button from "../Button";
import { loadNextQuestion, clearUserInput } from "../actionCreators";
import "./NextButton.css";

class NextButton extends PureComponent {
  handleButtonClick = () => {
    this.props.loadNextQuestion();
    this.props.clearUserInput();
  };

  render() {
    return (
      <div>
        <Button onClick={this.handleButtonClick}>Next one</Button>
        <div className="NextButton__hint">or press Enter key</div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  loadNextQuestion,
  clearUserInput
};

export default connect(
  null,
  mapDispatchToProps
)(NextButton);
