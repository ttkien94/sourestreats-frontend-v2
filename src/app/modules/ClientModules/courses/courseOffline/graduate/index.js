import React from "react";
import useSiteTitle from "core/hooks/useSiteTitle";

import graduate01 from "../../assets/images/chuong-trinh-huan-luyen/offline/graduate/chinh-phuc-tam-tri-va-co-the-lpe-banner.png";
// import graduate02 from "../../assets/images/chuong-trinh-huan-luyen/offline/graduate/chinh-phuc-tam-tri-va-co-the-lpe-hinh-hoc-vien-01.png";
// import graduate03 from "../../assets/images/chuong-trinh-huan-luyen/offline/graduate/chinh-phuc-tam-tri-va-co-the-lpe-hinh-hoc-vien-02.png";
import graduate04 from "../../assets/images/chuong-trinh-huan-luyen/offline/graduate/chinh-phuc-tam-tri-va-co-the-lpe-hinh-hoc-vien-03.png";

import "./styles/styles.scss";
import UiApplyCourse from "share/uiApplyCourse";
import { useEffect } from "react";
const array_value = [
  "Tư vấn và đúc kết tất cả các trải nghiệm và bài học đã trải qua. Liên hệ đến các Nguồn Lực để đạt được Thành Công Cực Đại",
  "Đúc Kết về Thông Điệp Meta trong khóa PO, SM, UM, ICPC và Thuyết Trình Nhóm",
  "Đúc Kết về Thông Điệp Meta trong khóa IMCPC và Thuyết Trình Nhóm",
  "Tích Hợp toàn bộ Hành Trình của Đại Học Cuộc Đời qua việc sử dụng Mô Hình SOAR (Phòng Tập Thiên Nhiên)",
  "Tổng Hợp Cấu Trúc của Trải Nghiệm Con Người bằng việc Thuyết Trình Nhóm",
  "Lế Tốt Nghiệp - Tốt Nghiệp Cuộc Đời và trở thành NLP Master Coach",
];

function GRADUATE() {
  // const array_value = [
  //   "Xem lại và Vận Hành phong cách sống của người đã tốt nghiệp Trường Đời",
  // ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useSiteTitle("graduate_program");
  return (
    <div className="graduate text-center container-fluid">
      <div className="row">
        <img src={graduate01} alt={graduate01} className="img-fluid w-100" />
      </div>

      <div className="container">
        <h2 className="quote">GIÁ TRỊ NHẬN ĐƯỢC TỪ CHƯƠNG TRÌNH</h2>
        <div className="row flex-alignitem  mt-5">
          <div className="col-lg-6 col-md-6">
            <iframe
              height="315"
              src="https://www.youtube.com/embed/iZNITdzCapQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="col-lg-6 col-md-6">
            <ul>
              <li className="text-white">
                Tốt Nghiệp Trường Đời và sẵn sàng cho một cơ thể toàn diện để có
                thể vượt qua mọi thử thách cả về Tâm Trí lẫn Thể Chất vô cùng
                khó khăn một cách dễ dàng
              </li>
              <li className="text-white">
                Xem lại và Vận Hành phong cách sống của người đã tốt nghiệp
                Trường Đời - Cho Bản Thân, Gia Đình, Đất Nước và Nhân Loại
              </li>
              <li className="text-white">
                Chắt lọc Tầm Nhìn Cá Nhân, Mục Đích Sống, Khát Vọng & Mục Tiêu
                tạo những Cống Hiến Trọng Đại & Ý Nghĩa cuộc đời
              </li>
              <li className="text-white">
                Trở thành Bậc Thầy Tư Vấn Trị Liệu - Truyền Động Lực với khóa
                học NLP
              </li>
            </ul>
          </div>
        </div>
        <div className="row mt-3">
          <UiApplyCourse data={array_value} title="GIÁ TRỊ CỐT LÕI" />
          <div className="my-5">
            <img src={graduate04} alt={graduate04} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GRADUATE;
