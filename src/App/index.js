import React, { Component } from "react";
import App from "./App";
import { drawQuestions, parseQuestions, normalizeAnswer } from "../utils";
import { QUIZ_LENGTH } from "../constants";

export default class AppContainer extends Component {
  state = {
    isQuizRunning: false,
    questionsSet: [],
    currentQuestion: 0,
    score: 0
  };

  startQuiz = () => {
    this.setState({
      isQuizRunning: true,
      questionsSet: parseQuestions(drawQuestions()),
      currentQuestion: 0,
      score: 0
    });
  };

  verifyAnswer = (userAnswer, correctAnswer) => {
    const { score, currentQuestion } = this.state;

    if (currentQuestion === QUIZ_LENGTH - 1) {
      this.setState({
        isQuizRunning: false
      });
      return;
    }

    if (normalizeAnswer(userAnswer) === correctAnswer) {
      this.setState({
        score: score + 1
      });
    }

    this.setState({
      currentQuestion: currentQuestion + 1
    });
  };

  componentDidMount() {
    this.startQuiz();
  }

  render() {
    const { isQuizRunning, questionsSet, currentQuestion, score } = this.state;

    return (
      <App
        isQuizRunning={isQuizRunning}
        questionsSet={questionsSet}
        currentQuestion={currentQuestion}
        score={score}
        verifyAnswer={this.verifyAnswer}
        startQuiz={this.startQuiz}
      />
    );
  }
}
