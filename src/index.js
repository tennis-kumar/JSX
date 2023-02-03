import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  color: "red",
  fontSize: "50px",
  border: "1px solid black"
}

customStyle.color = 'blue';

ReactDOM.render(
    <h1 style={customStyle} > This is an H1 Element! </h1>,
  document.getElementById("root")
);
