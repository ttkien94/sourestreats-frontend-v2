import React from "react";
import "./styles/styles.scss";

function IsLoading(props) {
  const { size } = props;
  return (
    <div
      className={
        size === "small" ? "loading-container-small" : "loading-container"
      }
    >
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default IsLoading;
