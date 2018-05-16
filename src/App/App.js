import React from "react";
import Button from "../Button";
import Quiz from "../Quiz";
import QuizSummary from "../Quiz/Summary";

const App = ({
  isQuizStarted,
  questions,
  currentQuestion,
  score,
  verifyAnswer,
  startQuiz
}) => (
  <div className="App">
    {isQuizStarted ? (
      <Quiz
        questions={questions}
        currentQuestion={currentQuestion}
        score={score}
        onAnswerSubmit={verifyAnswer}
      />
    ) : (
      <div>
        <QuizSummary score={score} />
        <Button onClick={startQuiz}>Try again</Button>
      </div>
    )}
  </div>
);

export default App;
