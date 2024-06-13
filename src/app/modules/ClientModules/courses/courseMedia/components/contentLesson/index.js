import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import playButton from "assets/images/source/course-media/playButton.png";
import Film from "assets/images/source/course-media/film.png";
import FormatNumberic from "share/formatNumber";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import { useState } from "react";
import { Button } from "@mui/material";
import { useEffect } from "react";
import _ from "lodash";
import "./styles.scss";
function ContentLessonCourseMedia(props) {
  const { userData, handleRegister } = props;

  const [data, setData] = useState([]);
  const token = localStorage.getItem("accessToken");
  useEffect(() => {
    if (userData && userData.lesson && userData.lesson.length > 0) {
      setData(props.userData);
    } else setData(props.detailCourseOnline);
  }, [props.detailCourseOnline]);

  const handleShowContent = (type, index) => {
    let newData = _.cloneDeep(data);
    newData.lesson[index].isView = type;
    setData(newData);
  };
  console.log("token", token);
  const renderItem = (pharse, index) => {
    return (
      <div className="mt-5" key={index}>
        <div className="d-flex justify-content-between">
          <div>
            <div style={{ color: "#0463C3" }}>{pharse.pharse}</div>
            <div
              className={" title-h3 title-lesson-" + index}
              style={{
                textTransform: "uppercase",
              }}
            >
              {pharse.title}
            </div>
          </div>
          <div className="d-flex justify-content-between description-gray align-items-center">
            {!token && index === 0 ? (
              <Button
                className={
                  "button-primary mr-2 animate-bounce background-lesson-" +
                  index
                }
                style={{
                  fontSize: "16px",
                }}
                variant="contained"
                onClick={(e) => {
                  handleRegister(e, pharse.pharse);
                }}
              >
                Đăng nhập để xem
              </Button>
            ) : pharse.permission ? (
              <div className=" description-gray mr-2">Unclocked</div>
            ) : (
              <Button
                className={
                  "button-primary mr-2 animate-bounce background-lesson-" +
                  index
                }
                style={{
                  fontSize: "16px",
                }}
                variant="contained"
                onClick={(e) => {
                  handleRegister(e, pharse.pharse);
                }}
              >
                <FormatNumberic num={pharse.price} />
              </Button>
            )}
            {pharse.isView ? (
              <Button
                onClick={() => {
                  handleShowContent(false, index);
                }}
              >
                <ExpandLessIcon />
              </Button>
            ) : pharse.videoList?.length > 0 ? (
              <Button
                className="pl-2"
                onClick={() => {
                  handleShowContent(true, index);
                }}
              >
                <ExpandMoreIcon />
              </Button>
            ) : (
              <Button
                className="pl-2"
                disabled={true}
                onClick={() => {
                  handleShowContent(true, index);
                }}
              ></Button>
            )}
          </div>
        </div>
        {pharse?.videoList?.map((item2, idx2) => {
          const hours = Math.floor(item2.duration / 3600);
          const minutes = Math.floor((item2.duration % 3600) / 60);
          const second = (item2.duration % 3600) % 60;
          return (
            <div
              className="mt-3 d-flex justify-content-between "
              key={item2._id}
            >
              <div className="d-flex" style={{ maxWidth: "80%" }}>
                {/* <img
                    src={FlightTakeoffIcon}
                    alt={FlightTakeoffIcon}
                    className="mr-2"
                    style={{ maxHeight: 24 }}
                  /> */}
                <FlightTakeoffIcon className={"mr-2 icon-gradient-" + index} />
                Bài học
                {" : " + item2.name}
              </div>
              <div
                className="description-gray d-flex"
                style={{ textAlign: "end" }}
              >
                <div>
                  {pharse.permission && token ? (
                    <div className="d-flex  mr-4">
                      {!!hours && hours + "h "} {!!minutes && minutes + "m "}
                      {!!second && +second + "s"}
                      <img
                        src={playButton}
                        alt={playButton}
                        width={20}
                        height={20}
                        className="ml-3"
                        onClick={() => {
                          props?.handleRedirect(index, idx2);
                        }}
                      />
                    </div>
                  ) : (
                    <div className="pr-4">
                      {!!hours && hours + "h "} {!!minutes && minutes + "m "}
                      {!!second && +second + "s"}
                    </div>
                  )}
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
      <div className="d-flex justify-content-center">
        <div className="title-h2 box-title ">Nội dung khóa học</div>
      </div>
      {/* <div className="description-gray">3 hours. 3 packages. 14 lessons.</div> */}
      <div className="mt-4">
        {userData?.lesson?.length > 0
          ? userData.lesson.map((pharse, index) => {
              return renderItem(pharse, index);
            })
          : props.detailCourseOnline?.lesson?.length > 0 &&
            props.detailCourseOnline?.lesson.map((pharse, index) => {
              return renderItem(pharse, index);
            })}
      </div>
    </div>
  );
}

export default ContentLessonCourseMedia;
