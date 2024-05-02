import React from "react";

import DetailsTopic from "../components/detailsTopic";
import Vimeo from "@u-wave/react-vimeo";
// import media file

import { useState } from "react";
import Question from "../components/questions";
// import { Button } from "@material-ui/core";
import { useEffect } from "react";
import DetailsDescription from "../components/detailsDescription";
import { courseOnline } from "./const";
function TowerOne() {
  const [showModal, setShowModal] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isLearned, setIsLearned] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  // const [listFloor, setListFloor] = useState(
  //   courseOnline.listUser[0].inforCourse.listFloor
  // );
  const listFloor = courseOnline.listUser[0].inforCourse.listFloor;
  const [data, setData] = useState(listFloor[0]?.listVideo[0] || []);

  useEffect(() => {
    const { question } = data;
    if (data?.score === question.length) {
      setIsLearned(true);
    }
  }, [data]);

  const handleOptionChange = (e) => {
    setSelectedOption(e);
  };

  // const handleCheckScore = () => {
  //   const { question } = data;
  //   if (data.score === question.length) {
  //     setIsLearned(true);
  //   }
  // };
  const handleFormSubmit = (e, action) => {
    e.preventDefault();
    // console.log("action", action);
    // const { question } = data;

    // if (currentQuestion + 1 < question.length) {
    //   setCurrentQuestion((preState) => preState + 1);
    //   setSelectedOption("");
    //   if (selectedOption === question[currentQuestion].answer) {
    //     setData((preState) => ({
    //       ...data,
    //       score: preState.score + 1,
    //     }));
    //   }
    // } else {
    //   setShowModal(false);
    //   if (selectedOption === question[currentQuestion].answer) {
    //     if (data.score === question.length - 1) {
    //       if (listFloor[data.floor - 1].havePermission === true) {
    //         let newData = listFloor;
    //         newData[data.floor - 1].totalScore += 1;
    //         newData[data.floor - 1].listFloor[data.id + 1].isVisible = true;
    //         setListFloor(newData);
    //       }
    //     }
    //   }
    // }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setData({ ...data, score: 0 });
    setCurrentQuestion(0);
    setSelectedOption("");
  };
  const handleOnClick = (e) => {
    setData(e);
    setCurrentQuestion(0);
    setSelectedOption("");
  };
  const renderLeftContent = () => {
    return (
      <div className="col-lg-8  col-md-7 ">
        <div className="box-radius">
          <Vimeo
            video={data.url}
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
            className="video-player"
            onTimeUpdate={(e) => {
              // console.log("onTimeUpdate", e.seconds, video.testAt);
              // e.seconds >= video.testAt && setShowModal(true);
            }}
            responsive
          />
          <div className="py-4 px-4">
            <p>{data.name}</p>
            <Question
              question={data.question[currentQuestion]}
              video={data}
              showModal={showModal}
              handleCloseModal={handleCloseModal}
              selectedOption={selectedOption}
              onOptionChange={handleOptionChange}
              onSubmit={(e, action) => handleFormSubmit(e, action)}
              className="question d-flex align-item-center justify-content-center"
            />
            {/* <Button
              onClick={() => {
                !isLearned && setShowModal(true);
              }}
              variant="outlined"
            >
              Click
            </Button> */}
            {/* <h2 className="quote">Xem Hết Video để trả lời câu hỏi!</h2> */}
          </div>
        </div>
        <div className="box-radius mt-4 py-4 px-4">
          <p>Mô tả tầng 1</p>
          <p className="description font-size14">
            This course is for Rails newbies and anyone looking to get a solid
            foundation. It’s designed to teach you everything you need to start
            building web applications in Rails right away.
          </p>
          <button className="see-detail mt-3 px-2 py-2">See Detail</button>
        </div>
      </div>
    );
  };
  const renderRightContent = () => {
    return (
      <div className="col-lg-4 col-md-5">
        <DetailsDescription data={courseOnline} buttonFree="Miễn Phí" />
        <DetailsTopic
          title="Topics"
          number="13"
          listFloor={listFloor}
          handleOnClick={handleOnClick}
          className="mt-4 px-4 pb-4"
        />
      </div>
    );
  };
  // const renderLeftContent1 = () => {
  //   return (
  //     <div className=" col-lg-8  col-md-7  ">
  //       <div className="triaple">
  //         <div className="box-floor4"></div>
  //         <div className="box-floor3"></div>
  //         <div className="box-floor2">
  //           <div className="box-floor21"></div>
  //           <div className="box-floor22"></div>
  //           <div className="box-floor23"></div>
  //         </div>
  //         <div className="box-floor1">
  //           <div className="box-floor11"></div>
  //           <div className="box-floor12"></div>
  //           <div className="box-floor13"></div>
  //           <div className="box-floor14"></div>
  //           <div className="box-floor15"></div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };
  return (
    <div className="tower-one container">
      <div className="row space-between">
        {renderLeftContent()}
        {renderRightContent()}
      </div>
    </div>
  );
}

export default TowerOne;
