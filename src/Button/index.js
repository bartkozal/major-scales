import React from "react";

const Button = ({ onClick, children }) => (
  <button className="Button" onClick={onClick}>
    {children}
  </button>
);

export default Button;
