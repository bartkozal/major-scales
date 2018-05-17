import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Quiz from "./Quiz";
import { QUIZ_LENGTH } from "../constants";
import {
  stopQuiz,
  scorePoint,
  showAnswer,
  loadNextQuestion,
  clearUserInput
} from "../actionCreators";

export class QuizContainer extends PureComponent {
  verifyAnswer = () => {
    const {
      currentQuestion,
      stopQuiz,
      scorePoint,
      showAnswer,
      isAnswerCorrect,
      isAnswerVisible,
      loadNextQuestion,
      clearUserInput
    } = this.props;

    if (currentQuestion === QUIZ_LENGTH - 1) {
      stopQuiz();
      return;
    }

    if (isAnswerVisible) {
      loadNextQuestion();
      clearUserInput();
      return;
    }

    if (isAnswerCorrect) {
      scorePoint();
    }

    showAnswer();
  };

  render() {
    const { isAnswerCorrect, isAnswerVisible } = this.props;

    return (
      <Quiz
        isAnswerVisible={isAnswerVisible}
        isAnswerCorrect={isAnswerCorrect}
        onQuizSubmit={this.verifyAnswer}
      />
    );
  }
}

const mapStateToProps = ({
  isAnswerVisible,
  userInput,
  questionsSet,
  currentQuestion
}) => {
  const correctAnswer = questionsSet[currentQuestion].correctAnswer;

  return {
    isAnswerVisible,
    isAnswerCorrect: userInput === correctAnswer,
    userInput,
    currentQuestion,
    correctAnswer
  };
};

const mapDispatchToProps = {
  stopQuiz,
  scorePoint,
  showAnswer,
  loadNextQuestion,
  clearUserInput
};

export default connect(mapStateToProps, mapDispatchToProps)(QuizContainer);
