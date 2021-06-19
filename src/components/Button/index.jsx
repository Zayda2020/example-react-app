import React from "react";

const Button = (props) => {
  return (
    <button className={props.className} type={props.type || "button"} onClick={props.onClick}>
      {props.name}
    </button>
  );
};

export default Button



// <button type="submit">Click Here!</button>


// document.querySelector("button").addEventListener("click", () => {
//   console.log("The button has been clicked")
// })

