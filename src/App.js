import React, { Component } from "react";
import Button from "./Button";
import Quiz from "./Quiz";
import QuizSummary from "./QuizSummary";
import { drawQuestions, parseQuestions } from "./utils";
import { QUIZ_LENGTH } from "./constants";

class App extends Component {
  state = {
    isQuizStarted: false,
    questionsSet: [],
    currentQuestion: 0,
    score: null
  };

  startQuiz = () => {
    this.setState({
      isQuizStarted: true,
      questions: parseQuestions(drawQuestions()),
      currentQuestion: 0,
      score: 0
    });
  };

  verifyAnswer = (userAnswer, correctAnswer) => {
    const { score, currentQuestion } = this.state;

    if (currentQuestion === QUIZ_LENGTH - 1) {
      this.setState({
        isQuizStarted: false
      });
      return;
    }

    if (userAnswer.toUpperCase() === correctAnswer) {
      this.setState({
        score: score + 1
      });
    }

    this.setState({
      currentQuestion: currentQuestion + 1
    });
  };

  render() {
    const { isQuizStarted, questions, currentQuestion, score } = this.state;

    return isQuizStarted ? (
      <Quiz
        questions={questions}
        currentQuestion={currentQuestion}
        score={score}
        onQuestionSubmit={this.verifyAnswer}
      />
    ) : (
      <div>
        {score !== null && <QuizSummary score={score} />}
        <Button onClick={this.startQuiz}>Start Quiz</Button>
      </div>
    );
  }
}

export default App;
