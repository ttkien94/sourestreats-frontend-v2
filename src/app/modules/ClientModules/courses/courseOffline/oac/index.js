import React from "react";
import useSiteTitle from "core/hooks/useSiteTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

import "./styles/styles.scss";
import { oac } from "../../assets/images/chuong-trinh-huan-luyen/offline";
import UiApplyCourse from "share/uiApplyCourse";
import { useEffect } from "react";
SwiperCore.use([Autoplay, Pagination, Navigation]);

function OAC() {
  useSiteTitle("OAC_program");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const imgStudent = [oac.oac01, oac.oac02, oac.oac03, oac.oac04];
  const array_value = [
    "Giúp các bé hiểu & nhận biết tài năng của mình là gì?",
    "Nhận ra được đam mê của các bé là gì?",
    "Hiểu rõ tầm quan trọng của đội nhóm & làm việc đội nhóm.",
    "Tạo dựng kỹ năng làm việc nhóm - hỗ trợ nhóm.",
    "Thực hiện các trò chơi mang tính học tập & đội nhóm cao.",
    "Biết được vì sao lại có trẻ thông minh và trẻ không thông minh.",
    "Quy trình làm tăng sự tự tin của các bé.",
    "Khai mở khả năng sáng tạo không giới hạn có sẵn trong mỗi bé.",
    "Thiết lập tầm nhìn, mục tiêu cho các em.",
    "Đây chỉ là một trong số ít những giá trị mà Mr.Vas mang lại, sẽ còn nhiều bài học & bài tập thực hành thú vị nữa đến với các bé.",
  ];

  return (
    <div className="container-fluid oac">
      <div className="row">
        <img src={oac.oac05} alt={oac.oac05} />
      </div>
      <div className="container">
        <div className="row flex-alignitem">
          <div className="col-md-6 offset-md-3 mt-3">
            <iframe
              height="315"
              src="https://www.youtube.com/embed/9zXcFWl9u2Y"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="row flex-alignitem mt-3">
          <div className="col-xl-8 offset-xl-2">
            <div className="row flex-alignitem ">
              <div className="col-xl-3 offset-xl-0 col-sm-8 offset-sm-2">
                <img src={oac.oac06} alt={oac.oac06} className="img-500" />
              </div>
              <div className="col-xl-9 ">
                <div className="camp flex-alignitem">
                  <p className="text-white">
                    TRẠI THIẾU NIÊN XUẤT CHÚNG (Outstanding Achiever Camp) -
                    Trại Huấn Luyện Thiếu Niên Xuất Chúng về Tâm trí và Thể Chất
                    thông qua phương pháp NLP (Neuro - Linguistic Programming)
                    do chuyên gia hàng đầu Châu Á - NLP Master Trainer Vasanth
                    Gopalan thiết kế và trực tiếp huấn luyện.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row py-5 text-center">
          <div className="col-md-10 offset-md-1">
            <UiApplyCourse
              data={array_value}
              minHeight={200}
              title="CÁC BÉ NHẬN ĐƯỢC GIÁ TRỊ VÀ CHUYỂN HÓA NHƯ THẾ NÀO TRONG TRẠI HUẤN LUYỆN NÀY?"
              className="mb-3"
            />

            <Swiper
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              navigation={true}
              pagination={{ clickable: true }}
            >
              {imgStudent.map((item, index) => {
                return (
                  <SwiperSlide className="item-swiper" key={index}>
                    <img src={item} alt={item} className="img-fluid" />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
export default OAC;
