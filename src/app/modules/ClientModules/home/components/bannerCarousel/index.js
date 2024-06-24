import React, { useState } from "react";
// import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import ModalVideo from "react-modal-video";

// import { getIdVideo } from "core/utils/videoLinkUtil";

// import media file
import vas from "assets/images/source/banner/coach-vas.jpg";
import lhgt from "assets/images/source/banner/coach-giang-thanh.jpg";
import Video from "assets/video-demo.mp4";
import theOrigins from "assets/images/source/banner/the-origins.jpg";

import vasThumbnail from "assets/images/source/thumbnail-vas.jpg";
import gtThumbnail from "assets/images/source/thumbnail-gt.jpg";

import "swiper/components/pagination/pagination.min.css";

import "./styles/styles.scss";

SwiperCore.use([Autoplay, Pagination, Navigation]);

const topUpSrc = [
  {
    imgSrc: theOrigins,
    bigText: "Về THE ORIGINS",
    desc: "intro_sr",
    linkVideo: "https://www.youtube.com/watch?v=ed3F3lkJCyg",
    linkInfo: "/",
    video: Video,
  },
  {
    imgSrc: vas,
    bigText: "Về Mr. Vas",
    desc: "intro_vas",
    linkVideo: "https://www.youtube.com/watch?v=DZGkncRVn44",
    linkInfo: "/lpe/mr-vas",
    imgVideo: vasThumbnail,
  },
  {
    imgSrc: lhgt,
    bigText: "Về Ms. La Hạ Giang Thanh",
    desc: "intro_gt",
    linkVideo: "https://www.youtube.com/watch?v=fAkvJPXMfjU",
    linkInfo: "/lpe/ms-la-ha-giang-thanh",
    imgVideo: gtThumbnail,
  },
];

function BannerCarousel() {
  // const [video, setVideo] = useState("");

  const [isVisible, setIsVisible] = useState(false);

  // const handleOpenVideo = (link) => {
  //   setVideo(getIdVideo(link));
  //   setIsVisible(!isVisible);
  // };

  return (
    <div className="container-fluid px-0">
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
              <div className="row">
                <img src={v.imgSrc} alt={v.imgSrc} className="img-fluid" />

                {/* <div className="wrapper-innerText">
                  <p>{t(v.desc)}</p>
                </div> */}
                {/* <div className=" col-md-5 col-lg-5 col-xs-12 col-sm-12 pr-0 left-content">
                  <div className="banner-item_innerText h-100">
                    <div className="overlay"></div>
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

                <div className="col-md-7 col-lg-7 col-xs-12 col-sm-12">
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
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isVisible}
        // videoId={video}
        videoId=""
        onClose={() => setIsVisible(false)}
      />
    </div>
  );
}

export default BannerCarousel;
