import React, { useState } from "react";
import { Link } from "react-router-dom";
import PriceCouse from "share/priceCourse";
import "./styles/styles.scss";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { getIdVideo } from "core/utils/videoLinkUtil";
import ModalVideo from "react-modal-video";
// import media file
// import lpe from "assets/images/lpe.jpg";
// import vas from "assets/images/vas.jpg";
// import lhgt from "assets/images/lhgt.jpg";
// import rossi from "assets/images/rossi.jpg";
// import Video from "assets/video-demo.mp4";
// import vasThumbnail from "assets/images/source/thumbnail-vas.jpg";
// import gtThumbnail from "assets/images/source/thumbnail-gt.jpg";
// import rossiThumbnail from "assets/images/source/thumbnail-rossi.jpg";

function SelfMastery() {
  const { userInfo } = useSelector((state) => state.auth);
  const { t } = useTranslation("common");
  const [video, setVideo] = useState("");

  const [isVisible, setIsVisible] = useState(false);

  const handleOpenVideo = (link) => {
    setVideo(getIdVideo(link));
    setIsVisible(!isVisible);
  };

  const topUpSrc = [
    {
      // imgSrc: lpe,
      // bigText: "Về LIFE UNI",
      // desc: "intro_lpe",
      // linkVideo:
      //   "https://player.vimeo.com/video/876218561?badge=0&amp;autopause=0&amp;quality_selector=1&amp;progress_bar=1&amp;player_id=0&amp;app_id=58479",
      // linkInfo: "/",
      // video: Video,
    },

    // {
    //   imgSrc: vas,
    //   bigText: "Về Mr. Vas",
    //   desc: "intro_vas",
    //   linkVideo: "https://www.youtube.com/watch?v=DZGkncRVn44",
    //   linkInfo: "/lpe/mr-vas",
    //   imgVideo: vasThumbnail,
    // },
    // {
    //   imgSrc: lhgt,
    //   bigText: "Về Ms. La Hạ Giang Thanh",
    //   desc: "intro_gt",
    //   linkVideo: "https://www.youtube.com/watch?v=fAkvJPXMfjU",
    //   linkInfo: "/lpe/ms-la-ha-giang-thanh",
    //   imgVideo: gtThumbnail,
    // },
    // {
    //   imgSrc: rossi,
    //   bigText: "Về Mr.Rossi",
    //   desc: "intro_rossi",
    //   linkVideo: "https://www.youtube.com/watch?v=4N5WAMJuo6U",
    //   linkInfo: "",
    //   imgVideo: rossiThumbnail,
    // },
  ];

  return (
    <div className="container co-detail">
      <section className="co-detail-over-view my-5 row">
        <div className="col-md-8">
          <h1 className="co-detail-over-view-title">Complete Python Mastery</h1>
          <p className="co-detail-over-view-description my-4">
            Everything you need to program in Python in one course (includes 3
            real-world projects)
          </p>
          <div className="my-4 ">
            <b className="co-detail-over-view-trust-score">4.7</b> -
            <span className="text-sm"> 2631 reviews</span>
          </div>
          <Link
            to=""
            className="action-buy-course text-sm text-center py-2 px-4"
          >
            ACCESS ALL COURSES FOR $29/M
          </Link>
          <div className="my-2 item-center justify-start flex">
            <hr className="inline-block w-6 mr-2" />
            or
            <hr className="inline-block w-6 ml-2" />
          </div>
          <Link
            to=""
            className="action-buy-course-blue text-sm text-center py-2 px-4"
          >
            Buy this course for
            <PriceCouse
              defaultPrice={149}
              promoPrice={15}
              defaultPriceStyle={`text-sm inline-block ml-2`}
              promoPriceStyle={`text-xs`}
            />
          </Link>
        </div>

        <div className="col-md-4 co-detail"></div>
      </section>
      {(userInfo.role === "sm" ||
        userInfo.role === "phoenix" ||
        userInfo.role === "dragon") && (
        <section className="co-detail-video">
          {
            //   topUpSrc.map((v, index) => {
            //   return (
            //     <div className="row mt-5" key={index}>
            //       <div className="col-12 col-lg-5 pr-0">
            //         <div className="banner-item_innerText h-100">
            //           {v.video && (
            //             <video
            //               width="100%"
            //               height="100%"
            //               muted
            //               loop
            //               autoPlay
            //               playsInline
            //             >
            //               <source src={Video} type="video/mp4" />
            //               Your browser does not support the video tag.
            //             </video>
            //             // <div style="padding:75% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/876218561?badge=0&amp;autopause=0&amp;quality_selector=1&amp;progress_bar=1&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Mối quan hệ hoàn hảo"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
            //           )}
            //           {v.imgVideo && (
            //             <img
            //               src={v.imgVideo}
            //               alt={v.imgVideo}
            //               className="img-fluid"
            //             />
            //           )}
            //           {!!v.linkInfo.length && (
            //             <div
            //               className="btnPlay-video"
            //               onClick={() => {
            //                 handleOpenVideo(v.linkVideo);
            //               }}
            //             >
            //               <i className="fas fa-play"></i>
            //             </div>
            //           )}
            //           {!!v.linkInfo.length && (
            //             <Link to={v.linkInfo} className="btnDetail">
            //               <span>{t("read_more")}</span>
            //               <svg width="13px" height="10px" viewBox="0 0 12 10">
            //                 <path d="M1,5 L11,5"></path>
            //                 <polyline points="8 1 12 5 8 9"></polyline>
            //               </svg>
            //             </Link>
            //           )}
            //         </div>
            //       </div>
            //     </div>
            //   );
            // })
          }
          <div className="video-source row mb-5">
            <iframe
              src="https://player.vimeo.com/video/876218561?badge=0&amp;autopause=0&amp;quality_selector=1&amp;progress_bar=1&amp;player_id=0&amp;app_id=58479"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              className="video-iframe"
              title="Mối quan hệ hoàn hảo"
            ></iframe>
          </div>
          <script src="https://player.vimeo.com/api/player.js"></script>
        </section>
      )}

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

export default SelfMastery;
