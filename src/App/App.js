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
        onQuestionSubmit={verifyAnswer}
      />
    ) : (
      <div>
        {score !== null && <QuizSummary score={score} />}
        <Button onClick={startQuiz}>Start Quiz</Button>
      </div>
    )}
  </div>
);

export default App;
