import React from "react";
import "../styles/styles.scss";
import Vimeo from "@u-wave/react-vimeo";
import { Button } from "@mui/material";
// import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import TabView from "share/tabView/tabView";
// import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
// import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import ListRankUser from "./components/listRankUser";
import ListRankUser2 from "./components/listRankUser2";
import YourCourse from "../components/yourCourse";
const arrayYourCourse = [
  { name: "After Effects", type: "Video editing", percent: "50%" },
  { name: "Adobe Illustrator", type: "Design", percent: "56%" },
  { name: "HTML", type: "Programming", percent: "77%" },
];
const userList = [
  { name: "Floyd Miles", complete: "98/100" },
  { name: "Bessie Cooper", complete: "95/100" },
  { name: "Darlene Robertson", complete: "88/100" },
  { name: "Guy Hawkins", complete: "86/100" },
  { name: "Justatee", complete: "82/100" },
];
function CourseOnlineHome() {
  const renderVideo = () => {
    return (
      <div className="box-radius">
        <Vimeo
          video="https://player.vimeo.com/video/897490048?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          allow="autoplay; fullscreen; picture-in-picture"
          title="Mối quan hệ hoàn hảo"
          frameborder="0"
          //   paused={paused}
          onEnd={(e) => {
            // if (document.webkitCancelFullScreen) {
            //   document.webkitCancelFullScreen();
            // }
            // !isLearned && setShowModal(true);
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
        <div className="d-flex justify-content-between align-items-center py-4 px-4">
          <p className="learned-time font-size14">
            Learned time: 26:30 - 1:10:13
          </p>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#FBCD2D",
              color: "black",
              fontSize: "14px",
              fontWeight: "700",
              borderRadius: "10px",
            }}
          >
            Continue your recent courses
          </Button>
        </div>
      </div>
    );
  };

  const renderRanking = () => {
    const tabPanel = [
      { component: <ListRankUser userList={userList} /> },
      { component: <ListRankUser2 /> },
      { component: <ListRankUser2 /> },
    ];

    const tab = [
      {
        label: "All",
      },
      {
        label: "Average",
      },
      {
        label: "class",
      },
    ];
    return (
      <div className="box-radius  px-4 py-4 ">
        <h3 style={{ color: "white" }}>Bảng xếp hạng</h3>
        <TabView
          tab={tab}
          tabPanel={tabPanel}
          className="mt-3"
          background="#282C38"
          underLine="#5361FD"
        />
      </div>
    );
  };

  return (
    <div className="course-online-home container">
      <div className="row mt-3">
        <div className="col-lg-7 col-md-6 left-content">
          {renderVideo()}
          <YourCourse arrayYourCourse={arrayYourCourse} />
        </div>
        <div className="col-lg-5 col-md-6 right-content">{renderRanking()}</div>
      </div>
    </div>
  );
}

export default CourseOnlineHome;
