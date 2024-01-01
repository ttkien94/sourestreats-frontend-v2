import React from "react";
import SliderVideo from "share/sliderVideo";
import TitleCourseOnline from "../components/titleCourseMedia";
import DetailCourseOnline from "../components/detailCourseMedia";
import TabViewCourseOnline from "../components/tabViewCourseMedia";
import SearchCourseOnline from "../components/searchCourseMedia";
import TeacherCourseOnline from "../components/teacherCourseMedia";
import ContactForm from "share/contactForm";
// import media file
import lifeUni from "assets/images/source/lifeUni.jpg";
import vas from "assets/images/vas.jpg";
import lhgt from "assets/images/lhgt.jpg";
import Video from "assets/video-demo.mp4";
import vasThumbnail from "assets/images/source/thumbnail-vas.jpg";
import gtThumbnail from "assets/images/source/thumbnail-gt.jpg";
import { useSelector } from "react-redux";
import "./styles/styles.scss";
import book from "assets/images/source/course-media/book.png";
import earth from "assets/images/source/course-media/earth.png";
import flashLight from "assets/images/source/course-media/flashLight.png";
import vasAvatar from "assets/images/source/avatar-vas.png";
import useSiteTitle from "core/hooks/useSiteTitle";
import { useTranslation } from "react-i18next";

function CourseMediaSelfMastery() {
  const { userInfo } = useSelector((state) => state.auth);
  const { t } = useTranslation("common");
  useSiteTitle(t("sefl_mastery"));
  const topUpSrc = [
    {
      imgSrc: lifeUni,
      bigText: "Về LIFE UNI",
      desc: "intro_lifeuni",
      linkVideo:
        "https://player.vimeo.com/video/890973918?badge=0&amp;autopause=0&amp;quality_selector=1&amp;progress_bar=1&amp;player_id=0&amp;app_id=58479",
      linkInfo: "/",
      video: Video,
    },

    {
      imgSrc: vas,
      bigText: "Về Mr. Vas",
      desc: "intro_vas",
      linkVideo:
        "https://player.vimeo.com/video/890973041?badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479",
      linkInfo: "/lpe/mr-vas",
      imgVideo: vasThumbnail,
    },
    {
      imgSrc: lhgt,
      bigText: "Về Ms. La Hạ Giang Thanh",
      desc: "intro_gt",
      linkVideo:
        "https://player.vimeo.com/video/890972259?badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479",
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
    <div className="self-mastery">
      <div className="box-banner">
        <div className="box-image">
          <img className="group-image-book" alt="Group" src={book} />
        </div>
        <div className="box-image">
          <img className="group-image-earth" alt="Group" src={earth} />
        </div>
        <div className="box-image">
          <img
            className="group-image-flash-light"
            alt="Group"
            src={flashLight}
          />
        </div>
        <h1 className="box-banner-title">KHÓA HỌC ONLINE</h1>
      </div>
      {(userInfo.course === "sm" ||
        userInfo.course === "phoenix" ||
        userInfo.course === "dragon") && <SliderVideo topUpSrc={topUpSrc} />}
      <div className=" mt-5 container ">
        <div className="row ">
          <div className="col-md-9">
            <div className="row">
              {/**
               * <TitleCourseOnline
                tag={tag}
                date={"2023-10-29"}
                name={"perfect_relationship"}
                student={"51"}
                defaultPrice={"67.00"}
                promoPrice={"50.00"}
                numberSudentRate={"44"}
              />
                   <DetailCourseOnline />
         
               */}
              <TabViewCourseOnline />
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="row co-right-content">
              <TeacherCourseOnline name="Coach Vas" avatar={vasAvatar} />

              {/**
              <SearchCourseOnline />
              <ContactForm />            
            */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseMediaSelfMastery;
