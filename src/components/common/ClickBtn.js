import React from "react";

const ClickBtn = (props) => {
  return (
    <div
      onClick={!props.disabled && props.onClick}
      className={`${props.type} click-btn ${props.disabled ? "disabled" : ""}`}
      style={{ width: props.width, fontSize: props.fontSize || "16px" }}
    >
      {props.text}
    </div>
  );
};

export default ClickBtn;
