import React from "react";
import Button from "../Button";
import Quiz from "../Quiz";
import Summary from "../Summary";

const App = ({
  isQuizRunning,
  questionsSet,
  currentQuestion,
  score,
  verifyAnswer,
  startQuiz
}) => (
  <div className="App">
    {isQuizRunning ? (
      <Quiz
        questionsSet={questionsSet}
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
