import React from "react";
import Button from "../Button";
import Quiz from "../Quiz";
import Summary from "../Summary";

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
        <Summary score={score} />
        <Button onClick={startQuiz}>Try again</Button>
      </div>
    )}
  </div>
);

export default App;
