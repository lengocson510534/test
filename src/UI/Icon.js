import React from "react";
import "./icon.css";
const Icon = (props) => {
  return (
    <div className="icon">
      <i className={props.icon}></i>
      <span className="title">{props.title}</span>
    </div>
  );
};

export default Icon;
