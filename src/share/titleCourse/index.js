import React from "react";
import "./styles.scss";
import { useTranslation } from "react-i18next";
function TitleCourse(props) {
  const style = {
    color: "#121416",
    fontSize: 24,
    fontStyle: "normal",
    fontWeight: 700,
    textTransform: "capitalize",
    display: "flex",
    alignItems: "center",
  };
  const { t } = useTranslation("common");
  return (
    <div style={style}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2"
        height="23"
        viewBox="0 0 2 19"
        fill="none"
        className="mr-2"
      >
        <path d="M1.91192 0H0V21H1.91192V0Z" fill="#5F2DED" />
      </svg>
      {t(props.title)}
    </div>
  );
}

export default TitleCourse;
