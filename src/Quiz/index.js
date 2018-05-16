import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Quiz from "./Quiz";
import { QUIZ_LENGTH } from "../constants";
import { stopQuiz, scorePoint, loadNextQuestion } from "../actionCreators";

class QuizContainer extends PureComponent {
  verifyAnswer = () => {
    const {
      userInput,
      correctAnswer,
      currentQuestion,
      stopQuiz,
      scorePoint,
      loadNextQuestion
    } = this.props;

    if (currentQuestion === QUIZ_LENGTH - 1) {
      stopQuiz();
      return;
    }

    if (userInput === correctAnswer) {
      scorePoint();
    }

    loadNextQuestion();
  };

  render() {
    return <Quiz onQuizSubmit={this.verifyAnswer} />;
  }
}

const mapStateToProps = ({ userInput, questionsSet, currentQuestion }) => ({
  userInput,
  currentQuestion,
  correctAnswer: questionsSet[currentQuestion].correctAnswer
});

const mapDispatchToProps = { stopQuiz, scorePoint, loadNextQuestion };

export default connect(mapStateToProps, mapDispatchToProps)(QuizContainer);
