import React from "react";
import Quiz from "../Quiz";
import RestartButton from "../RestartButton";
import Summary from "../Summary";
import "./App.css";

const App = ({ isQuizRunning }) => (
  <div className="App">
    {isQuizRunning ? (
      <Quiz />
    ) : (
      <div>
        <Summary />
        <RestartButton />
      </div>
    )}
  </div>
);

export default App;
