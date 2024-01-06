import React from "react";
import { useTranslation } from "react-i18next";
import "./styles.scss";
function UiApplyCourse(props) {
  const { t } = useTranslation("common");
  const data = props.data;
  const title = props.title;
  const classname = props.className ? props.className : "";
  return (
    <div
      className={`row apply  justify-content-center align-items-center ${classname}`}
    >
      <h2 className="quote">{t(title)}</h2>
      {data.map((value, index) => {
        return (
          <div className="col-lg-4 col-md-6 mt-3" key={index}>
            <div
              className="apply-card"
              style={{ minHeight: props.minHeight ? props.minHeight : 180 }}
            >
              <div className="apply-content">
                <p>{t(value)}</p>
              </div>
              <div className="number-icon-area ">
                <div className="icon"></div>
                <h1>0{index + 1}</h1>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default UiApplyCourse;
