import React from "react";
import "./input.css";
const Input = (props) => {
  return (
    <div className="input">
      <i className="bx bx-search"></i>
      <input type={props.type} placeholder={props.placeholder} />
      <i className="bx bxs-microphone"></i>
    </div>
  );
};

export default Input;
