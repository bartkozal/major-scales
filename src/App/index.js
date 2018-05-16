import React, { PureComponent } from "react";
import { connect } from "react-redux";
import App from "./App";
import { startQuiz } from "../actionCreators";

class AppContainer extends PureComponent {
  componentDidMount() {
    this.props.startQuiz();
  }

  render() {
    return <App isQuizRunning={this.props.isQuizRunning} />;
  }
}

const mapStateToProps = ({ isQuizRunning }) => ({ isQuizRunning });

const mapDispatchToProps = { startQuiz };

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
