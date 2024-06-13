import React from "react";

import banner from "assets/images/source/course-offline/1st/1st-banner-middle.png";
import bannerLeft from "assets/images/source/course-offline/1st/1st-banner-left.png";
import bannerRight from "assets/images/source/course-offline/1st/1st-banner-right.png";
import "./styles.scss";
import { Button } from "@mui/material";

function TheFirstStep() {
  return (
    <div className="the-first-step">
      <div className="row tfs-banner">
        <div
          className="section-background coach-vas-2"
          style={{
            backgroundImage: "url(" + bannerLeft + ")",
          }}
        />
        <div
          className="section-background coach-vas-3"
          style={{
            backgroundImage: "url(" + bannerRight + ")",
          }}
        />
        <div
          className="section-background"
          style={{
            backgroundImage: "url(" + banner + ")",
          }}
        />
        <div className="overlay"></div>
        <div className="container-fluid text-white text-center">
          <div className="title-h1">KHỞI ĐẦU THỊNH VƯỢNG</div>
          <div className="description-gray">
            KHÁM PHÁ ĐAM MÊ VÀ SỨ MỆNH CUỘC ĐỜI BẠN
          </div>
          <Button className="button-orange mb-5 mt-3">Đăng ký ngay</Button>
        </div>
      </div>
    </div>
  );
}

export default TheFirstStep;
