import React from "react";

import DetailsTopic from "../components/detailsTopic";
import "./styles.scss";
import { qBank, arrayVideo } from "../components/questionBank";
import Vimeo from "@u-wave/react-vimeo";
// import media file

import { useState } from "react";
import Question from "../components/questions";
import { Button } from "@material-ui/core";
import { useEffect } from "react";
import DetailsDescription from "../components/detailsDescription";
import { data } from "./const";
import { array } from "prop-types";
function TowerOne() {
  const [showModal, setShowModal] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isLearned, setIsLearned] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [user, setUser] = useState([
    { title: "Tầng 1", floor: 1, totalPass: 5 },
    { title: "Tầng 2", floor: 2, totalPass: 0 },
  ]);
  const [arrayVideo, setArrayVideo] = useState(data.inforCourse[0].arrayVideo);
  const [video, setVideo] = useState(arrayVideo[0]?.listVideo[0] || []);

  useEffect(() => {
    handleCheckScore();
  }, []);

  // useEffect(() => {
  //   const { question } = video;
  //   if (video.score === question.length) {
  //     if (arrayVideo[video.floor - 1].havePermission === true) {
  //       console.log("have +1");
  //       let newData = arrayVideo;
  //       newData[video.floor - 1].totalScore += 1;
  //       newData[video.floor - 1].listVideo[video.id + 1].isVisible = true;
  //       console.log("newData", newData);
  //       setArrayVideo(newData);
  //     }
  //   }
  // }, [showModal]);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleCheckScore = () => {
    const { question } = video;
    if (video.score === question.length) {
      setIsLearned(true);
    }
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { question } = video;

    if (currentQuestion + 1 < question.length) {
      setCurrentQuestion((preState) => preState + 1);
      setSelectedOption("");
      if (selectedOption === question[currentQuestion].answer) {
        setVideo((preState) => ({
          ...video,
          score: preState.score + 1,
        }));
      }
    } else {
      setShowModal(false);
      if (selectedOption === question[currentQuestion].answer) {
        if (video.score === question.length - 1) {
          if (arrayVideo[video.floor - 1].havePermission === true) {
            let newData = arrayVideo;
            newData[video.floor - 1].totalScore += 1;
            newData[video.floor - 1].listVideo[video.id + 1].isVisible = true;
            setArrayVideo(newData);
          }
        }
      }
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setVideo({ ...video, score: 0 });
    setCurrentQuestion(0);
    setSelectedOption("");
  };
  const handleOnClick = (e) => {
    setVideo(e);
    setCurrentQuestion(0);
    setSelectedOption("");
  };
  return (
    <div className="tower-one container">
      <div className="row space-between">
        <div className="col-lg-8  col-md-7 box-video">
          <div className="video-player">
            <Vimeo
              video={video.url}
              allow="autoplay; fullscreen; picture-in-picture"
              title="Mối quan hệ hoàn hảo"
              frameborder="0"
              //   paused={paused}
              onEnd={(e) => {
                if (document.webkitCancelFullScreen) {
                  document.webkitCancelFullScreen();
                }
                !isLearned && setShowModal(true);
              }}
              onPlay={() => console.log("onPlay")}
              onPlaying={() => console.log("onPlaying")}
              onPause={() => console.log("onPause")}
              onSeeked={() => {
                console.log("onSeeked");
              }}
              onTimeUpdate={(e) => {
                // console.log("onTimeUpdate", e.seconds, video.testAt);
                // e.seconds >= video.testAt && setShowModal(true);
              }}
              responsive
            />
          </div>
          <div className="mt-3">
            <Question
              question={video.question[currentQuestion]}
              showModal={showModal}
              handleCloseModal={handleCloseModal}
              selectedOption={selectedOption}
              onOptionChange={handleOptionChange}
              onSubmit={handleFormSubmit}
            />
            <Button
              onClick={() => {
                !isLearned && setShowModal(true);
              }}
              variant="outlined"
            >
              Click
            </Button>
            <h2 className="quote">Xem Hết Video để trả lời câu hỏi!</h2>
          </div>
        </div>
        <div className="col-lg-4 col-md-5">
          <DetailsDescription
            title="Tháp 1"
            level="1"
            released="01 Jan 2024"
            star="4"
            rating="392"
            buttonFree="Miễn Phí"
          />

          <DetailsTopic
            title="Topics"
            number="13"
            arrayVideo={arrayVideo}
            handleOnClick={handleOnClick}
            className="mt-3"
          />
        </div>
      </div>
    </div>
  );
}

export default TowerOne;
