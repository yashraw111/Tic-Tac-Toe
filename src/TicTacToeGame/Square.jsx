import React from "react";


const Square = (props) => {
  return (
    <div
      onClick={props.onClick}
      style={{
        border: "none",
        height: "100px",
        width: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: props.value ? "not-allowed" : "pointer",
        backgroundColor:"#223541",
        fontSize: "54px",
        fontWeight: "500",
        color: props.value === "X" ? "#F2BF00" : "#5BFFCB",
      }}
      className="square"
    >
      {props.value}
    </div>
  );
};

export default Square;
