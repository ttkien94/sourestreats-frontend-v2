import React from "react";
import SoulRetreatsBanner from "app/components/banner";
import CardItemMedia from "./components/cardItem";
import useSiteTitle from "core/hooks/useSiteTitle";

// import media file
import ccs from "assets/images/source/online/ccs.jpg";
import bfw from "assets/images/source/online/bfw.jpg";
import vl from "assets/images/source/online/vl.jpg";
import banner from "assets/images/source/banner/khoa-hoc-online-banner.jpg";

import "./styles.scss";

function CourseMediaTower() {
  useSiteTitle("media_course");

  const right_course = [
    {
      id: 1,
      name: "crisis conqueror",
      link: "/chuong-trinh-huan-luyen/online/ccs",
      img: ccs,
    },
    {
      id: 2,
      name: "beauty from within",
      link: "/chuong-trinh-huan-luyen/media/beauty-from-within",
      img: bfw,
    },
    {
      id: 3,
      name: "visionary leadership",
      link: "/chuong-trinh-huan-luyen/media/visionary-leadership",
      img: vl,
    },
  ];

  return (
    <div className="courseOnline-page">
      <SoulRetreatsBanner
        bannerImg={banner}
        headText="Khóa học Media"
        subText="THE ORIGINS có các khóa học trực tuyến nhằm cung cấp kiến thức cho những học viên có nhu cầu học từ xa."
      />

      <div className="container pb-5">
        <div className="heading">
          <h1 className="heading-text">
            Các khóa Media hiện tại của THE ORIGINS
          </h1>
          <p className="heading-desc">
            Dành cho tất cả học viên có nhu cầu học Online
          </p>
        </div>

        <div className="row py-3">
          {right_course.map((y, index) => {
            return (
              <div className="col-12 col-md-6" key={index}>
                <CardItemMedia
                  img={y.img}
                  name={y.name}
                  link={y.link}
                  desc={y.desc}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CourseMediaTower;
