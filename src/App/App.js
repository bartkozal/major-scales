import React from "react";
import Quiz from "../Quiz";
import RestartButton from "../RestartButton";
import Summary from "../Summary";
import PianoGroove from "../PianoGroove";
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

    <PianoGroove />
  </div>
);

export default App;
