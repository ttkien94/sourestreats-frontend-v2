import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import playButton from "assets/images/source/course-media/playButton.png";
import Film from "assets/images/source/course-media/film.png";
import { useState } from "react";
function ContentLessonCourseMedia(props) {
  const { detailCourseOnline } = props;
  const renderItem = (pharse, index) => {
    return (
      <div className="mt-4" key={index}>
        <div className="d-flex justify-content-between">
          <div style={{ color: "#0463C3" }}>{pharse.pharse}</div>
          <div className="d-flex justify-content-between description-gray">
            {pharse.permission ? "Unclocked" : "Clocked"}
            {pharse.isView ? <ExpandMoreIcon /> : <ExpandLessIcon />}
          </div>
        </div>
        {pharse?.videoList?.map((item2, idx2) => {
          const hours = Math.floor(item2.duration / 3600);
          const minutes = Math.floor((item2.duration % 3600) / 60);
          const second = (item2.duration % 3600) % 60;

          return (
            <div className="mt-3 d-flex justify-content-between">
              <div className="d-flex" style={{ maxWidth: "80%" }}>
                <img
                  src={Film}
                  alt={Film}
                  className="mr-2"
                  style={{ maxHeight: 24 }}
                />{" "}
                Bài học
                {" : " + item2.name}
              </div>
              <div
                className="description-gray d-flex"
                style={{ textAlign: "end" }}
              >
                <div>
                  {!!hours && hours + "h "} {!!minutes && minutes + "m "}
                  {!!second && +second + "s"}
                </div>
                <div>
                  <img
                    src={playButton}
                    alt={playButton}
                    width={20}
                    height={20}
                    className="ml-2"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  return (
    <div>
      <div className="title-h2">Nội dung khóa học</div>
      {/* <div className="description-gray">3 hours. 3 packages. 14 lessons.</div> */}
      <div className="mt-4">
        {detailCourseOnline.lesson.map((pharse, index) => {
          return renderItem(pharse, index);
        })}
      </div>
    </div>
  );
}

export default ContentLessonCourseMedia;
