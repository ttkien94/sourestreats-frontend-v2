import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
function WrapperImg(props) {
  const TitleHomeClient = (textAlign, title, description, description2) => {
    return (
      <div
        style={{
          textAlign: textAlign,
          marginTop: "60px",
        }}
      >
        <h1 className={`title px-3`}>{title}</h1>
        {description && <p className="description mt-3">{description}</p>}
        {description2 && <p className="description">{description2}</p>}
      </div>
    );
  };

  return (
    <div className="container mt-5 ">
      {TitleHomeClient(
        "center",
        props?.title,
        props?.description,
        props?.description2
      )}

      <div className="wrapperImg">
        {props?.catelogyImg?.map((catelogy, index) => {
          return (
            <Link
              className={`gridItem${index + 1} `}
              key={index}
              to={catelogy.link}
            >
              <img src={catelogy.img} alt={"Error"} />
              <p className="wrapperTitle">{catelogy.title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default WrapperImg;
