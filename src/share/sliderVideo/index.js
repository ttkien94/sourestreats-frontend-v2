import React from "react";
// import useState from "react";
// import { useTranslation } from "react-i18next";
// import ModalVideo from "react-modal-video";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import Vimeo from "@u-wave/react-vimeo";
// import { getIdVideo } from "core/utils/videoLinkUtil";

import "swiper/components/pagination/pagination.min.css";

import "./styles.scss";
// import Video from "assets/video-demo.mp4";

SwiperCore.use([Autoplay, Pagination, Navigation]);

function SliderVideo(props) {
  const { topUpSrc } = props;
  // const [video, setVideo] = useState("");

  // const [isVisible, setIsVisible] = useState(false);

  // const handleOpenVideo = (link) => {
  //   setVideo(getIdVideo(link));
  //   setIsVisible(!isVisible);
  // };

  return (
    <div className="container-fluid px-0 ">
      <Swiper
        slidesPerView={1}
        className="swiper-container"
        // autoplay={{
        //   delay: 10000,
        //   disableOnInteraction: false,
        // }}
        loop={true}
        navigation={true}
        pagination={{
          dynamicBullets: true,
        }}
      >
        {topUpSrc.map((v, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="row slider-video py-4">
                <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                  <Vimeo
                    video={v.linkVideo}
                    allow="autoplay; fullscreen; picture-in-picture"
                    title="Mối quan hệ hoàn hảo"
                    frameborder="0"
                    //   paused={paused}
                    onEnd={() => {}}
                    onPlay={() => console.log("onPlay")}
                    onPlaying={() => console.log("onPlaying")}
                    onPause={() => console.log("onPause")}
                    onSeeked={() => {
                      console.log("onSeeked");
                    }}
                    onTimeUpdate={(e) => {
                      // console.log("onTimeUpdate", e);
                      // e.seconds >= 60 && setPaused(true);
                    }}
                    responsive
                  />
                </div>
                {/** <div className="col-12 col-lg-5 pr-0">
              <div className="banner-item_innerText h-100">
                {v.video && (
                  <video
                    width="100%"
                    height="100%"
                    muted
                    loop
                    autoPlay
                    playsInline
                  >
                    <source src={Video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}

                {v.imgVideo && (
                  <img
                    src={v.imgVideo}
                    alt={v.imgVideo}
                    className="img-fluid"
                  />
                )}
                {!!v.linkInfo.length && (
                  <div
                    className="btnPlay-video"
                    onClick={() => {
                      handleOpenVideo(v.linkVideo);
                    }}
                  >
                    <i className="fas fa-play"></i>
                  </div>
                )}

                {!!v.linkInfo.length && (
                  <Link to={v.linkInfo} className="btnDetail">
                    <span>{t("read_more")}</span>

                    <svg width="13px" height="10px" viewBox="0 0 12 10">
                      <path d="M1,5 L11,5"></path>
                      <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                  </Link>
                )}
              </div>
            </div>

            <div className="col-12 col-lg-7 pl-sm-3 pl-lg-0">
              <div className="banner-item_picture">
                <img src={v.imgSrc} alt={v.imgSrc} className="img-fluid" />

                <div className="wrapper-innerText">
                  <p>{t(v.desc)}</p>
                </div>

                <Link to={v.linkInfo} className="btnDetailSmall">
                  Xem thêm
                </Link>
              </div>
            </div> */}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/**
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isVisible}
        videoId={video}
        onClose={() => setIsVisible(false)}
      />
       */}
      <script src="https://player.vimeo.com/api/player.js"></script>
    </div>
  );
}

export default SliderVideo;
