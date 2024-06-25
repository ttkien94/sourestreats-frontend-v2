import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { styled } from "@mui/material/styles";
import { Box, Button, Modal } from "@mui/material";
import useSiteTitle from "core/hooks/useSiteTitle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightIcon from "@mui/icons-material/Flight";
import _ from "lodash";
import axios from "axios";

import Vimeo from "@u-wave/react-vimeo";
import "./styles/styles.scss";
import Loading from "share/loading";
import {
  getDetailScheduleCourseOnlineAction,
  handleUserAnswerToQuestion,
} from "core/redux/actions/scheduleCourseOnlineAction";
import FormatNumberic from "share/formatNumber";

import Quiz from "./components/quiz";

const VideoStreaming = (props) => {
  // useSiteTitle("video_streaming");
  const location = useLocation();
  const loading = true;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { detailScheduleCourseOnline } = useSelector(
    (state) => state.scheduleCourseOnline
  );
  const { userInfo } = useSelector((state) => state.auth);
  const [data, setData] = useState({});

  const [video, setVideo] = useState({});
  const [pharse, setPharse] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [answerQuestion, setAnswerQuestion] = useState(true);
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [video]);

  useEffect(() => {
    if (userInfo) {
      if (detailScheduleCourseOnline?.studentList?.length > 0) {
        const index = detailScheduleCourseOnline.studentList.findIndex(
          (ele) => ele._id === userInfo._id
        );
        if (index !== -1) {
          handleDataInput(detailScheduleCourseOnline?.studentList[index]);
        } else {
          detailScheduleCourseOnline?.courseOnline?.length > 0 &&
            handleDataInput(detailScheduleCourseOnline.courseOnline[0]);
        }
      } else {
        detailScheduleCourseOnline?.courseOnline?.length > 0 &&
          handleDataInput(detailScheduleCourseOnline.courseOnline[0]);
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [detailScheduleCourseOnline]);

  const handleDataInput = (data) => {
    setData(data);
    setPharse(data.lesson[0]);
    setVideo(data.lesson[0].videoList[0]);
    // if (!answerQuestion) {
    //   setVideo(data.lesson[0].videoList[0]);
    // }
  };
  const loadData = () => {
    dispatch(getDetailScheduleCourseOnlineAction("6668158eff4b143bd4cc6a16"));
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleRegister = async (e, pharse) => {
    e.preventDefault();
    if (!token) {
      navigate("/dang-nhap", { state: { from: location } });
    } else {
      // xác nhận thông tin & chuyển tới cskh
      const data = _.cloneDeep(userInfo);
      data["tags"] = ["register-tower1", pharse];
      data["import_by_tag_name"] = true;
      await axios({
        method: "POST",
        url: "https://api.service.ladiflow.com/1.0/customer/create-or-update",
        headers: {
          "Api-Key": "a21928473afdf60440c8adddec916036aac285ce560b0133",
        },
        data,
      })
        .then((response) => {
          console.log("response", response);
          setOpenModal(true);
          setAnswerQuestion(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const handleSendAnswer = (selectedAnswer) => {
    let newData = _.cloneDeep(data);
    newData.lesson.forEach((les) => {
      if (les.pharse === pharse.pharse) {
        les.videoList.forEach((vid) => {
          if (vid._id === video._id) {
            vid.answerList = selectedAnswer;
          }
        });
      }
    });
    dispatch(
      handleUserAnswerToQuestion(
        "6668158eff4b143bd4cc6a16",
        userInfo._id,
        newData.lesson,
        setAnswerQuestion
      )
    );
  };

  const handleRedirect = () => {
    navigate("/dang-nhap", { state: { from: location } });
  };

  const handleVideo = (videoItem) => {
    setVideo(videoItem);
    setAnswerQuestion(false);
  };

  const renderModal = () => {
    const style = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      // width: 1000,
      // maxHeight: "100%",
      bgcolor: "background.paper",
      border: "1px solid #000",
      boxShadow: 24,
      p: 4,
      zIndex: 9999,
    };
    return (
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{ marginTop: 20, marginBottom: 20 }}
      >
        <Box sx={style}>
          {answerQuestion ? (
            <div className="answer-question">Tra loi cau hoi </div>
          ) : (
            <div className="title-h2">
              Cám ơn bạn đã đăng ký. Soul retreats sẽ phản hồi trong vòng 24h
              làm việc
            </div>
          )}
        </Box>
      </Modal>
    );
  };

  const renderItem = (videoItem, index) => {
    const hours = Math.floor(videoItem.duration / 3600);
    const minutes = Math.floor((videoItem.duration % 3600) / 60);
    const second = (videoItem.duration % 3600) % 60;
    return (
      <div>
        <div
          className={
            "p-3 d-flex justify-content-between pointer " +
            (videoItem.name === video.name && "isLearning ") +
            (videoItem.answerList && " isLearned")
          }
          onClick={() => {
            handleVideo(videoItem, videoItem);
          }}
        >
          <div className="d-flex " style={{}}>
            <FlightTakeoffIcon className={"mr-2 icon-gradient-" + index} />
            Bài học
            {" " + `${index + 1}` + ": " + videoItem.name}
          </div>
          <div className="" style={{ minWidth: 70, textAlign: "end" }}>
            ({!!hours && hours + ":"}
            {!!minutes && minutes + ":"}
            {!!second && +second})
          </div>
        </div>
      </div>
    );
  };

  const renderVideo = () => {
    return (
      <div>
        <Vimeo
          video={video?.url}
          allow="autoplay; fullscreen; picture-in-picture"
          title="Mối quan hệ hoàn hảo"
          frameborder="0"
          //   paused={paused}
          onEnd={(e) => {
            if (document.webkitCancelFullScreen) {
              document.webkitCancelFullScreen();
            }
            if (!video.answerList) setAnswerQuestion(true);
          }}
          onPlay={() => console.log("onPlay")}
          onPlaying={() => console.log("onPlaying")}
          onPause={() => console.log("onPause")}
          onSeeked={() => {
            console.log("onSeeked");
          }}
          className="box p-4"
          onTimeUpdate={(e) => {
            // console.log("onTimeUpdate", e.seconds, video.testAt);
            // e.seconds >= video.testAt && setShowModal(true);
          }}
          responsive
        />
      </div>
    );
  };
  const renderLeftContent = () => {
    return (
      <div
        className="col-lg-3 col-md-4 col-sm-12 col-xs-12 py-3"
        style={{
          borderRight: "1px solid gray",
          borderBottom: "1px solid gray",
        }}
      >
        <div
          className="d-flex align-items-center p-2 "
          style={{
            borderBottom: "1px solid gray",
            color: "rgba(4, 99, 195, 1)",
          }}
        >
          <ArrowBackIcon
            sx={{ color: "gray" }}
            className="pointer mr-3"
            onClick={() => {
              setPharse(data.lesson);
            }}
          />
          {pharse?.length > 0 ? (
            <p
              className="title-h2 "
              style={{
                marginBottom: 0,
                // color: "white",
                textTransform: "uppercase",
              }}
            >
              Chọn Phần Học
            </p>
          ) : (
            <div>
              <p style={{ marginBottom: 0 }}>{pharse?.pharse}</p>
              <p
                className="title-h2 "
                style={{
                  marginBottom: 0,
                  // color: "white",
                  textTransform: "uppercase",
                }}
              >
                {pharse.title}
              </p>
            </div>
          )}
        </div>

        {pharse?.length > 0
          ? // render pharse
            pharse.map((item, index) => {
              return (
                <div className="mt-3" key={index}>
                  <p
                    style={{ marginBottom: 0 }}
                    className={"icon-gradient-" + index}
                  >
                    {item.pharse}
                  </p>
                  <Button
                    variant="contained"
                    className={
                      "button-primary mr-2 mt-3 animate-bounce  background-lesson-" +
                      index
                    }
                    style={{
                      fontSize: "16px",
                    }}
                    onClick={(e) => {
                      item.permission
                        ? setPharse(data.lesson[index])
                        : handleRegister(e, item.pharse);
                    }}
                    // disabled={!item.permission}
                  >
                    {item.title}
                    {!item.permission && (
                      <>
                        &nbsp;-&nbsp; <FormatNumberic num={item.price} />
                      </>
                    )}
                  </Button>
                </div>
              );
            })
          : // render video in pharse
            pharse?.videoList?.map((item, index) => {
              return renderItem(item, index);
            })}
      </div>
    );
  };
  const renderRightContent = () => {
    return (
      <div className="col-lg-9 col-md-8 col-sm-12 col-xs-12 min-vh-100">
        {answerQuestion ? (
          <Quiz
            video={video}
            pharse={pharse}
            handleSendAnswer={(selectedAnswer) =>
              handleSendAnswer(selectedAnswer)
            }
          />
        ) : (
          renderVideo()
        )}
      </div>
    );
  };
  return !token ? (
    <div className="container">
      <div className="container-login">
        <h1>Cám ơn bạn đã xem website của chúng tôi!</h1>
        <p>
          Đây là trang website chỉ dành riêng cho hội viên. vui lòng đăng nhập
          để xem thêm
        </p>
        <a
          href="#"
          class="button"
          onClick={() => {
            handleRedirect();
          }}
        >
          Đăng Nhập
        </a>
      </div>
    </div>
  ) : data?.lesson?.length > 0 ? (
    <Box sx={{ display: "flex" }} className="video-streaming">
      <div className="container-fluid">
        <div className="row">
          {renderLeftContent()}
          {renderRightContent()}
        </div>
      </div>
      {renderModal()}

      {!answerQuestion && !video.answerList && (
        <div className="d-flex justify-content-end pointer ">
          <Button
            variant="contained"
            className={
              "button-primary  my-3 animate-bounce  background-lesson-1 position-absolute"
            }
            style={{
              fontSize: "16px",
              bottom: "80px",
              right: "50px",
            }}
            onClick={() => {
              setAnswerQuestion(true);
            }}
          >
            Trả lời câu hỏi
          </Button>
        </div>
      )}
    </Box>
  ) : (
    <Loading count={11} />
  );
};

export default VideoStreaming;
