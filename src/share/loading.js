import React from "react";
import Spinner from "assets/images/spinner-loader.gif";

function Loading() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#e4e4e0 ",
      }}
    >
      <img src={Spinner} alt={Spinner} />
    </div>
  );
}

export default Loading;
