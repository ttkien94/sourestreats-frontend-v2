import React from "react";

import "./styles.scss";
import PriceCourse from "share/priceCourse";
import TitleCourse from "share/titleCourse";
function DetailCourseMedia(props) {
  return (
    <div className="detail-course-media mt-4 col-md-12">
      <TitleCourse title="detail_course" />
      <div className=" detail-course-media-content mt-2">
        <div className="row">
          <div className="col-6 line-vertical px-5">
            <div className="row">
              <div className="col-6 mt-4">Chuyên gia:</div>
              <div className="col-6 mt-4">Coach Vas</div>
            </div>
            <div className="row">
              <div className="col-6 mt-3">Số bài học:</div>
              <div className="col-6 mt-3">10</div>
            </div>
            <div className="row">
              <div className="col-6 mt-3">Thời gian:</div>
              <div className="col-6 mt-3">20h 41m</div>
            </div>
            <div className="row">
              <div className="col-6 mt-3 mb-4">Đã đăng ký</div>
              <div className="col-6 mt-3 mb-4 ">2 học viên</div>
            </div>
          </div>
          <div className="col-6 px-5">
            <div className="row">
              <div className="col-6 mt-4">Cấp độ:</div>
              <div className="col-6 mt-4">Cơ bản</div>
            </div>
            <div className="row">
              <div className="col-6 mt-3">Ngôn ngữ:</div>
              <div className="col-6 mt-3">Tiếng anh + Vietsub</div>
            </div>
            <div className="row">
              <div className="col-6 mt-3">Giá Khóa Học</div>
              <div
                className="col-6 mt-3"
                style={{ display: "flex", alignItems: "center" }}
              >
                <PriceCourse
                  promoPrice={"50.00"}
                  promoPriceStyle={{
                    color: "#5C727D",
                    fontSize: 16,
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "normal",
                  }}
                  timeLimit="month"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-6 mt-3 mb-4">Trạng thái:</div>
              <div className="col-6 mt-3 mb-4">Đã mua</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailCourseMedia;
