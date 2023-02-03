import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  color: ""
}

const date = new Date();
const curTime = date.getHours();

let greeting = '';

if (curTime >0 && curTime < 12) {
  customStyle.color = "red";
  greeting = "Good Morning!";
} else if (curTime >= 12 && curTime < 18) {
  customStyle.color = "green";
  greeting = "Good Afternoon!";
} else {
  customStyle.color = "blue";
  greeting = "Good Night!";
}



ReactDOM.render(
  <h1 className="heading" style={customStyle}> {greeting} </h1>,
  document.getElementById("root")
);
