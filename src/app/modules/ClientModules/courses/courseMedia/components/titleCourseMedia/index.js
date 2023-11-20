import React from "react";
import { useTranslation } from "react-i18next";
import PriceCourse from "share/priceCourse";
import "./styles.scss";
import LocalLibrarySharpIcon from "@mui/icons-material/LocalLibrarySharp";
import starRate from "assets/images/source/star/star-rate-5.png";
function TitleCourseMedia(props) {
  const {
    tag,
    date,
    name,
    defaultPrice,
    promoPrice,
    student,
    numberSudentRate,
  } = props;
  const { t } = useTranslation("common");
  return (
    <div className="col-md-12">
      <div className="title-course-media">
        <div className="title-course-media-tag">
          {tag.map((item, index) => {
            return (
              <div
                style={{
                  backgroundColor: item.color,
                  color: "white",
                  fontWeight: "500",
                  fontSize: 14,
                  display: "inline-block",
                }}
                className="mr-3 px-2 py-1 mt-3"
                key={index}
              >
                {t(item.name)}
              </div>
            );
          })}
        </div>
        <p
          style={{ minWidth: 200, fontSize: 14 }}
          className="mt-3 title-course-media-date"
        >
          {t("last_update")}: <span>{date}</span>
        </p>
      </div>
      <div className="title-course-media-name mt-4">
        <h3>{t(name)}</h3>
      </div>
      <div className="title-course-media-value mt-3">
        <PriceCourse defaultPrice={defaultPrice} promoPrice={promoPrice} />
        <LocalLibrarySharpIcon className="ml-3 mr-1" color={"#5F2DED"} />
        <span className="student">
          {student} {t("student")}
        </span>
        <span className="ml-3 student-rate">
          <img src={starRate} alt="star-rate" height={15} />({numberSudentRate})
        </span>
      </div>
    </div>
  );
}

export default TitleCourseMedia;
