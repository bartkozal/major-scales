import React from "react";
import logo from "./logo.png";
import "./PianoGroove.css";

const PianoGroove = () => (
  <div className="PianoGroove">
    <p>Learn jazz piano (and more) at</p>
    <a href="https://www.pianogroove.com/">
      <img className="PianoGroove__logo" src={logo} alt="PianoGroove" />
    </a>
  </div>
);

export default PianoGroove;
