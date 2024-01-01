import React from "react";
import LoadingCube from "assets/images/loader-cube.gif";

function Loading() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <img src={LoadingCube} alt={LoadingCube} />
    </div>
  );
}

export default Loading;
