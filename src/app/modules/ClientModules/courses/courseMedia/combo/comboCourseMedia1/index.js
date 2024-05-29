import React from "react";
import bg from "assets/images/course/course-media/banner/bannerComboCourseMedia.png";
import bg2 from "assets/images/course/course-media/banner/bannerComboCourseMedia2.png";
import BannerComboCourseMedia from "../components/bannerComboCourseMedia";
import BundlesCombo from "../components/bundleCombo";
import OverviewCourseMedia from "../../components/overviewCourseMedia";
function ComboCourseMedia1() {
  return (
    <div>
      <BannerComboCourseMedia bg={bg} />
      <div className="container mt-5 mb-5">
        <div className=" d-flex">
          <div className="col-4 col-md-4  col-lg-4 offset-lg-0 offset-md-0  col-sm-8 offset-sm-2 order-2 ">
            <OverviewCourseMedia
              title={"Tổng quan"}
              data={{
                title: "Tổng quan",
                defaultPrice: 44.0,
                promoPrice: 29.99,
              }}
            />
          </div>
          <div className="col-8 col-md-8 col-lg-8  col-sm-12">
            <BundlesCombo bg={bg2} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComboCourseMedia1;
