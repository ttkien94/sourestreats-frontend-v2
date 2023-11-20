import React from "react";
import SliderVideo from "share/sliderVideo";
import TitleCourseOnline from "../components/titleCourseMedia";
import DetailCourseOnline from "../components/detailCourseMedia";
import TabViewCourseOnline from "../components/tabViewCourseMedia";
import SearchCourseOnline from "../components/searchCourseMedia";
import TeacherCourseOnline from "../components/teacherCourseMedia";
import ContactForm from "share/contactForm";
// import media file
import lpe from "assets/images/lpe.jpg";
import vas from "assets/images/vas.jpg";
import lhgt from "assets/images/lhgt.jpg";
import Video from "assets/video-demo.mp4";
import vasThumbnail from "assets/images/source/thumbnail-vas.jpg";
import gtThumbnail from "assets/images/source/thumbnail-gt.jpg";
import { useSelector } from "react-redux";
import "./styles/styles.scss";
function CourseMediaSelfMastery() {
  const { userInfo } = useSelector((state) => state.auth);
  const topUpSrc = [
    {
      imgSrc: lpe,
      bigText: "Về LIFE UNI",
      desc: "intro_lpe",
      linkVideo:
        "https://player.vimeo.com/video/876600835?badge=0&amp;autopause=0&amp;quality_selector=1&amp;progress_bar=1&amp;player_id=0&amp;app_id=58479",
      linkInfo: "/",
      video: Video,
    },

    {
      imgSrc: vas,
      bigText: "Về Mr. Vas",
      desc: "intro_vas",
      linkVideo:
        "https://player.vimeo.com/video/876236010?badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479",
      linkInfo: "/lpe/mr-vas",
      imgVideo: vasThumbnail,
    },
    {
      imgSrc: lhgt,
      bigText: "Về Ms. La Hạ Giang Thanh",
      desc: "intro_gt",
      linkVideo:
        "https://player.vimeo.com/video/876300467?badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479",
      linkInfo: "/lpe/ms-la-ha-giang-thanh",
      imgVideo: gtThumbnail,
    },
    // {
    //   imgSrc: rossi,
    //   bigText: "Về Mr.Rossi",
    //   desc: "intro_rossi",
    //   linkVideo:
    //     "https://player.vimeo.com/video/876600835?badge=0&amp;autopause=0&amp;quality_selector=1&amp;progress_bar=1&amp;player_id=0&amp;app_id=58479",
    //   linkInfo: "",
    //   imgVideo: rossiThumbnail,
    // },
  ];
  const tag = [
    {
      color: "blue",
      name: "popular",
    },
    {
      color: "purple",
      name: "relationship",
    },
  ];
  return (
    <div>
      {(userInfo.role === "sm" ||
        userInfo.role === "phoenix" ||
        userInfo.role === "dragon") && <SliderVideo topUpSrc={topUpSrc} />}
      <div className=" mt-5 container ">
        <div className="row ">
          <div className="col-md-9">
            <div className="row">
              <TitleCourseOnline
                tag={tag}
                date={"2023-10-29"}
                name={"perfect_relationship"}
                student={"51"}
                defaultPrice={"67.00"}
                promoPrice={"50.00"}
                numberSudentRate={"44"}
              />
              <DetailCourseOnline />
              <TabViewCourseOnline />
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="row co-right-content">
              <TeacherCourseOnline name="Coach Vas" />
              <SearchCourseOnline />
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseMediaSelfMastery;
