import React from "react";

function BannerComboCourseMedia(props) {
  return (
    <div className="bannerComboCourseMedia relative" style={{ height: 330 }}>
      <div
        className="section-background"
        style={{
          backgroundImage: `url("${props?.bg}")`,
        }}
      ></div>
      <div className="overlay"></div>
      <div className="container">
        <div className="banner-content">
          <div className="banner-content-text">Course Bundles</div>
          <div className="banner-content-header">
            Title of the bundle which can <br /> extend to 2 or 3 lines
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerComboCourseMedia;
