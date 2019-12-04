import React from "react";

function ColorBadge({ color }) {
  return (
    <div
      style={{
        borderRadius: "50%",
        width: 15,
        height: 15,
        margin: "0px 10px 0px 3px",
        display: "inline-block",
        backgroundColor: color
      }}
    ></div>
  );
}

export default ColorBadge;
