import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Quiz from "./Quiz";
import { QUIZ_LENGTH } from "../constants";
import { stopQuiz, scorePoint, showAnswer } from "../actionCreators";

class QuizContainer extends PureComponent {
  verifyAnswer = () => {
    const {
      currentQuestion,
      stopQuiz,
      scorePoint,
      showAnswer,
      userInput,
      correctAnswer
    } = this.props;

    if (currentQuestion === QUIZ_LENGTH - 1) {
      stopQuiz();
      return;
    }

    if (userInput === correctAnswer) {
      scorePoint();
    }

    showAnswer();
  };

  render() {
    const { userInput, correctAnswer, isAnswerVisible } = this.props;

    return (
      <Quiz
        isAnswerVisible={isAnswerVisible}
        isAnswerCorrect={userInput === correctAnswer}
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
}) => ({
  isAnswerVisible,
  userInput,
  currentQuestion,
  correctAnswer: questionsSet[currentQuestion].correctAnswer
});

const mapDispatchToProps = { stopQuiz, scorePoint, showAnswer };

export default connect(mapStateToProps, mapDispatchToProps)(QuizContainer);
