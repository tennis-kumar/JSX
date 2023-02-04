import React from "react";

function Heading() {

  const date = new Date();
  const currentTime = date.getHours();

  const customStyle = {
    color: "",
  };

  let greeting;

  if (currentTime >= 0 && currentTime < 12) {
    greeting = "Good Morning";
    customStyle.color = "Green";
  } else if (currentTime >= 12 && currentTime < 18) {
    greeting = "Good Afternoon";
    customStyle.color = "Orange";
  } else {
    greeting = "Good Night";
    customStyle.color = "Blue";
  }

  return (
    <h1 className="heading" style={customStyle}>
      {" "}
      {greeting}
    </h1>
  );
}

export default Heading;