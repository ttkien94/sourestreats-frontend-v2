import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import { getIdVideo } from "core/utils/videoLinkUtil";
const styled = {
  boxVideo: {
    width: "100%",
    backgroundColor: "#282C38",
    borderRadius: "26px",
    color: "white",
  },
  videoPlayer: {
    backgroundColor: "rgba(255, 255, 255, 0.18)",
    borderRadius: "26px 26px 0 26px",
    height: "420px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
  buttonPlay: {
    padding: "20px",
    backgroundColor: "rgba(255,255,255,0.14)",
    borderRadius: "26px",
  },
  title: {},
};
function ShowVideoReview(props) {
  const [isVisible, setIsVisible] = useState(false);
  const [video, setVideo] = useState(true);
  const { title } = props;
  const handleOpenVideo = (link) => {
    setVideo(getIdVideo(link));
    setIsVisible(!isVisible);
  };
  return (
    <div className="show-video-review" style={styled.boxVideo}>
      <div
        className="box-video"
        style={styled.videoPlayer}
        onClick={() => {
          handleOpenVideo(
            "https://www.youtube.com/watch?v=LlMtFVAU-9Q&ab_channel=LifeUniVN"
          );
        }}
      >
        <i className="fal fa-play" style={styled.buttonPlay}></i>
      </div>
      <p style={styled.title} className="py-4 px-4">
        {title && title}
      </p>

      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isVisible}
        videoId={video}
        onClose={() => setIsVisible(false)}
      />
    </div>
  );
}

export default ShowVideoReview;
