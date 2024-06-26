import React from "react";
import OverviewCourseMedia from "../overviewCourseMedia";

// import media file
import bannerSingleCourseMedia from "assets/images/source/course-media/single-course-media.jpg";
import timeLine from "assets/images/source/course-media/single-course-media-timeline.png";
import starRate from "assets/images/source/course-media/starRate.png";
import ContentListCourseMedia from "../contentList";
import ContentLessonCourseMedia from "../contentLesson";
import { useTranslation } from "react-i18next";
import useSiteTitle from "core/hooks/useSiteTitle";
function SingleCourseMedia(props) {
  const { name, numberSudentRate, description, titelePage } = props;
  // const { t } = useTranslation("common");
  // useSiteTitle(t("tower1"));
  return (
    <div>
      <div className="container mt-5 mb-5">
        <div className="d-flex row">
          <div className="col-md-4  col-lg-4 offset-lg-0 offset-md-0  col-sm-12 offset-sm-0 col-xs-12 order2 mb-5">
            <OverviewCourseMedia title={"Tổng quan"} {...props} />
          </div>
          <div className="col-md-8 col-lg-8  col-sm-12 col-xs-12">
            <img
              src={bannerSingleCourseMedia}
              alt="img_singlecourse"
              width="100%"
            />
            <div className="row mt-5 ">
              <div
                className="title-h2"
                style={{ textTransform: "uppercase", fontFamily: "Gilroy" }}
              >
                {!!name ? name : "Title of the course"}
              </div>
              <div className="d-flex align-items-center mt-3">
                <img
                  src={starRate}
                  alt="star-rate"
                  height={15}
                  style={{ marginRight: 10 }}
                />
                {numberSudentRate} học viên đã đăng ký
              </div>
              <div className="mt-3 description-gray">{description}</div>
            </div>
            <div className="row">
              <ContentListCourseMedia {...props} />
            </div>
            <div className="row mt-5">
              <ContentLessonCourseMedia {...props} />
            </div>
            <div className="row mt-5">
              <img src={timeLine} alt="img_singlecourse" width="100%" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleCourseMedia;
