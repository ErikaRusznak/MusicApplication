import React from "react";
import { Spinner } from "react-bootstrap";

function Loading({ size = 100, color = "red" }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <Spinner
        style={{
          width: size,
          height: size,
          color: color,
        }}
        animation="border"
      />
    </div>
  );
}

export default Loading;
