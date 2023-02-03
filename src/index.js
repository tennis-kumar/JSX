import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1 className="heading"> My Favorite Food items (few)!</h1> <br></br>
    <div>
      <img
        className="food-img"
        alt="Veggies"
        src="https://cdn.pixabay.com/photo/2013/07/13/01/22/vegetables-155616__340.png"
      />
      <img
        className="food-img"
        alt="Raspberry"
        src="https://cdn.pixabay.com/photo/2017/07/28/14/29/macarons-2548827__340.jpg"
      />
      <img
        className="food-img"
        alt="Noodles"
        src="https://cdn.pixabay.com/photo/2017/11/08/22/18/spaghetti-2931846__340.jpg"
      />
    </div>
  </div>,
  document.getElementById("root")
);
