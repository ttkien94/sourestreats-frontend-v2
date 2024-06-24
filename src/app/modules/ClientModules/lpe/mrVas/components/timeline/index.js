import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper";

import "swiper/components/pagination/pagination.min.css";
import "./styles/styles.scss";
import { Fade } from "react-awesome-reveal";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

function Timeline(props) {
  const refPagination = useRef();

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      const ref = refPagination.current;

      let year = ref
        .querySelectorAll(".swiper-slide")
        [index].getAttribute("data-year");

      return '<span class="' + className + '">' + year + "</span>";
    },
  };

  return (
    <div className="wrapper-timeline rounded ">
      <div className="timeline rounded ">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          className="swiper-container rounded"
          direction={"vertical"}
          pagination={pagination}
          navigation={true}
          speed={1500}
          ref={refPagination}
          allowTouchMove={false}
          noSwiping
        >
          <SwiperSlide
            style={{
              backgroundImage:
                props?.view === "tfs"
                  ? "unset"
                  : "url(https://unsplash.it/1920/500?image=13)",
            }}
            className="swiper-slide rounded"
            data-year="Achievement"
          >
            <div className="swiper-slide-content">
              <span className="timeline-year">Thành Tựu</span>

              {/* <h4 className="timeline-title">Our nice super title</h4> */}
              <Fade left cascade>
                <p className="timeline-text">
                  <ol>
                    <li>Nhà sáng lập The Origins</li>
                    <li>Một trong 4 bậc thầy về đào tạo NLP tại châu Á</li>
                    <li>
                      Chuyên Gia Quốc Tế Về Tư vấn & Đào tạo Lập trình Ngôn ngữ
                      Tư duy – NLP ( được cấp bởi NLPU & ABNLP)
                    </li>
                    <li>Thành viên Hội đồng Giám khảo Thôi miên Hoa Kỳ</li>
                    <li>
                      Chuyên gia cao cấp về ứng dụng phương pháp Tâm lý – Trị
                      liệu
                    </li>
                    <li>30 năm kinh nghiệm Lãnh Đạo và Quản Lý</li>
                    <li>
                      Huấn luyện viên được cấp phép dạy đi trên than hồng do
                      Viện Nghiên cứu và Đào tạo FireWalking (FIRE), Texas USA
                      cấp
                    </li>
                    <li>
                      Chứng chỉ giảng dạy “Thôi miên trị liệu” (Hypnotherapy)
                      được chứng nhận bởi Hội Đồng Thôi Miên Hoa Kỳ
                    </li>
                  </ol>
                </p>
              </Fade>
            </div>
          </SwiperSlide>
          <SwiperSlide
            style={{
              backgroundImage:
                props?.view === "tfs"
                  ? "unset"
                  : "url(https://unsplash.it/1920/500?image=13)",
            }}
            className="swiper-slide rounded"
            data-year="2003"
          >
            <div className="swiper-slide-content">
              <span className="timeline-year">2003</span>

              {/* <h4 className="timeline-title">Our nice super title</h4> */}
              <p className="timeline-text">
                Mr. Vas rời khỏi vị trí Sĩ quan quân đội Singapore, bắt đầu sự
                nghiệp trở thành Diễn Giả NLP của mình
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide
            className="swiper-slide rounded"
            style={{
              backgroundImage:
                props?.view === "tfs"
                  ? "unset"
                  : "url(https://unsplash.it/1920/500?image=14)",
            }}
            data-year="2004"
          >
            <div className="swiper-slide-content">
              <span className="timeline-year">2004</span>

              {/* <h4 className="timeline-title">Our nice super title</h4> */}
              <p className="timeline-text">
                Mr. Vas bắt đầu hành trình huấn luyện - đào tạo của mình. Tại
                nhiều quốc gia ở Châu Á, Mr. Vas tạo nên Leading Performance
                Group, nơi đưa ra giải pháp cho mọi vấn đề của con người.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide
            className="swiper-slide"
            style={{
              backgroundImage:
                props?.view === "tfs"
                  ? "unset"
                  : "url(https://unsplash.it/1920/500?image=15)",
            }}
            data-year="2019"
          >
            <div className="swiper-slide-content">
              <span className="timeline-year">2019</span>

              {/* <h4 className="timeline-title">Our nice super title</h4> */}
              <p className="timeline-text">
                THE ORIGINS ngày một phát triển với nhiều hơn nữa những chương
                trình đào tạo tuyệt vời. Phù hợp với nhiều nhu cầu, nhiều đối
                tượng khác nhau. Chương trình Tìm Lại Lẽ Sống & Khát Vọng Thành
                Công (Lần thứ 35) đón nhận hơn 3000 người Việt Nam tham dự.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide
            className="swiper-slide rounded"
            style={{
              backgroundImage:
                props?.view === "tfs"
                  ? "unset"
                  : "url(https://unsplash.it/1920/500?image=15)",
            }}
            data-year="2020"
          >
            <div className="swiper-slide-content">
              <span className="timeline-year">2020</span>

              {/* <h4 className="timeline-title">Our nice super title</h4> */}
              <p className="timeline-text">
                THE ORIGINS đã lần thứ 5 dẫn dắt một số lượng rất lớn học viên
                cùng chinh phục Nóc nhà Đông Dương - Đỉnh Fansipan. Năm thứ 5
                học viên Đại học Cuộc Đời được chấp chứng nhận Tốt nghiệp
                Combo10 với nhiều chứng chỉ NLP chuyên ngành khác.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide
            className="swiper-slide rounded"
            style={{
              backgroundImage:
                props?.view === "tfs"
                  ? "unset"
                  : "url(https://unsplash.it/1920/500?image=15)",
            }}
            data-year="2021"
          >
            <div className="swiper-slide-content">
              <span className="timeline-year">2021</span>

              {/* <h4 className="timeline-title">Our nice super title</h4> */}
              <p className="timeline-text">
                Bước vào giai đoạn Covid, THE ORIGINS tiếp tục cho ra mắt chuỗi
                chương trình online, nhằm giải quyết kịp thời các vấn đề của con
                người ở giai đoạn hiện tại. Dù tình thế khó khăn như thế nào,
                THE ORIGINS vẫn không bao giờ trì hoãn các kế hoạch hoạt động và
                phát triển.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide
            className="swiper-slide rounded"
            style={{
              backgroundImage:
                props?.view === "tfs"
                  ? "unset"
                  : "url(https://unsplash.it/1920/500?image=15)",
            }}
            data-year="2022"
          >
            <div className="swiper-slide-content">
              <span className="timeline-year">2022</span>

              {/* <h4 className="timeline-title">Our nice super title</h4> */}
              <p className="timeline-text">
                THE ORIGINS cho ra đời một chuỗi chương trình hoàn toàn mới, phù
                hợp với những ai mong muốn trở thành Diễn Giả NLP và là đối tác
                chính thức của THE ORIGINS: ITTC.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Timeline;
