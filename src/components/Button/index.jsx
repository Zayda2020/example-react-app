import React from "react";

import "./styles.css"

const Button = (props) => {
  return (
    <button className={`button ${props.className}`} type={props.type || "button"} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button



// <button type="submit">Click Here!</button>


// document.querySelector("button").addEventListener("click", () => {
//   console.log("The button has been clicked")
// })

