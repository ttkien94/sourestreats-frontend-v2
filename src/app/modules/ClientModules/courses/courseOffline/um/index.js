import useSiteTitle from "core/hooks/useSiteTitle";
import React from "react";
import { useEffect } from "react";
import UiApplyCourse from "share/uiApplyCourse";
import { um } from "../../assets/images/chuong-trinh-huan-luyen/offline";
import "./styles/styles.scss";
function UniversalMastery() {
  useSiteTitle("universal_mastery");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const arrayValue = [
    "Hiểu được cách hình thành tư duy và chúng tác động đến ta như thế nào.",
    "Thảo luận và áp dụng các tư duy này trong từng khía cạnh của cuộc sống",
    "Hành động ra bên ngoài và kích neo các hành vi tương thích phù hợp",
    "Áp dụng & hợp nhất các tư duy đã học vào cuộc sống",
    "Tạo mục tiêu & tầm nhìn",
    "Tìm ra sứ mệnh của bạn",
    "Đạp tan nỗi sợ & sự tiêu cực",
    "Vượt qua giới hạn bản thân",
  ];
  return (
    <div className="um">
      <div className="container-fluid p-0">
        <img src={um.universalMasteryBanner} alt={um.universalMasteryBanner} />
        <div className="container">
          <div className="row ">
            <h2 className="quote">LÀM CHỦ TƯ DUY - THẮP SÁNG CUỘC ĐỜI </h2>
            <div className="col-md-6 offset-md-3">
              <iframe
                height="315"
                src="https://www.youtube.com/embed/-xi-26hJz8U?si=fz4PAWHce6YVOTF5"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="row flex-alignitem mt-3">
            <div className="col-md-6">
              <img src={um.universalMastery02} alt={um.universalMastery02} />
            </div>
            <div className="col-md-6 text-center ">
              <div className="reason">
                <p>Bạn có biết</p>
                <p>Sự khác biệt giữa người thành công & người thất bại ?</p>
                <p>Sự khác biệt giữa người lạc quan & bi quan ?</p>
                <p>Sự khác biệt giữa người giàu & người nghèo ?</p>
                <h3>
                  ĐÂU LÀ LÝ DO CHỈ CÓ 0,7% NGƯỜI THÀNH CÔNG TRÊN THẾ GIỚI ?
                </h3>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <img
              src={um.universalMastery03}
              alt={um.universalMastery03}
              className="col-10 offset-1"
            />
            <div className="col-10 offset-1 thinkDiffirent mt-3">
              <div className="row flex-alignitem">
                <div className="col-md-3">
                  <img
                    src={um.universalMastery04}
                    alt={um.universalMastery04}
                    className="apple"
                  />
                </div>
                <div className="col-md-9 text-justify">
                  <p style={{ color: "orange" }}>
                    Đây là câu slogan nổi tiếng của hãng Apple. Để trở thành một
                    tượng đài vững chắc trong ngành công nghệ số như hiện nay,
                    những vị lãnh đạo tài ba cùng toàn thể đội ngũ Apple đã sáng
                    tạo không ngừng nghỉ và cho ra đời những sản phẩm ưu tú vượt
                    trội. Thương hiệu Apple – không phải sản phẩm làm nên danh
                    tiếng, mà chính là lối tư duy khác biệt của cố CEO Steve
                    Jobs đã tạo nên những giá trị tuyệt vời để lại cho muôn đời
                    sau.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-6 offset-md-3 col-sm-10 offset-sm-1 text-justify mindset">
              <p>
                Tư duy là quá trình tâm lý phản ánh những thuộc tính, bản chất
                của các mối liên hệ và quan hệ bên trong. Có tính quy luật của
                sự vật hiện tượng mà trước đó ta chưa từng biết.
              </p>
              <p>
                Những ám cảnh đã trải nghiệm trong quá khứ ảnh hưởng đến toàn bộ
                quyết định thực hiện điều gì đó ở thời điểm hiện tại của mỗi
                người.
              </p>
              <h3>
                LÀM THẾ NÀO ĐỂ THIẾT LẬP CÁC TƯ DUY KHÁC BIỆT ĐỂ CÓ THỂ SUY NGHĨ
                NHƯ CÁC BẬC VĨ NHÂN XUẤT CHÚNG?
              </h3>
            </div>
          </div>

          <div className="row mt-5">
            <UiApplyCourse title="GIÁ TRỊ NHẬN ĐƯỢC" data={arrayValue} />
          </div>
          <h2 className="quote mb-3">
            VƯỢT QUA NỖI SỢ HÃI <br /> để biến cuộc đời bạn thành kiệt tác
          </h2>
          <div className="col-md-8 offset-md-2">
            <p className="text-white text-justify">
              Nổi sợ hãi là kẻ thù lớn nhất của thành công. Để chạm đến thành
              công, liệu bạn có dám đạp tan mọi nỗi sợ hãi, mọi khó khăn, chướng
              ngại? Thử thách bước đi trên than hồng trong chương trình sẽ tiếp
              thêm sự dũng cảm, giúp bạn vượt qua được giới hạn bản thân.
            </p>
          </div>
          <h2 className="quote mb-3">NHỮNG THAY ĐỔI TÍCH CỰC</h2>
          <div className="row flex-alignitem">
            <div className="col-md-10 offset-md-1">
              <div className="row flex-alignitem">
                <div className="col-md-6 changePositive">
                  <p>
                    <img
                      src={um.universalMastery06}
                      alt={um.universalMastery06}
                      className="d-inline-block mr-2"
                    />
                    Tìm ra con người bạn phải trở thành và SỨ MỆNH của bạn
                  </p>
                  <p>
                    <img
                      src={um.universalMastery06}
                      alt={um.universalMastery06}
                      className="d-inline-block mr-2"
                    />
                    Tạo MỤC TIÊU và TẦM NHÌN đầy SỨC MẠNH cho bản thân
                  </p>
                  <p>
                    <img
                      src={um.universalMastery06}
                      alt={um.universalMastery06}
                      className="d-inline-block mr-2"
                    />
                    Đập tan mọi NỖI SỢ HÃI và SỰ TIÊU CỰC đang giữ chân bạn
                  </p>
                  <p>
                    <img
                      src={um.universalMastery06}
                      alt={um.universalMastery06}
                      className="d-inline-block mr-2"
                    />
                    Tiếp ĐỘNG LỰC thôi thúc bạn làm việc với 100% năng lượng
                  </p>
                  <p>
                    <img
                      src={um.universalMastery06}
                      alt={um.universalMastery06}
                      className="d-inline-block mr-2"
                    />
                    Vượt qua GIỚI HẠN của bản thân, kiến tạo kiệt tác cuộc đời
                  </p>
                </div>
                <div className="col-md-6">
                  <img
                    src={um.universalMastery07}
                    alt={um.universalMastery07}
                    // className="col-10 offset-1"
                  />
                </div>
                <p className="changePositiveQuote">
                  Đặc biệt, sau chương trình bạn sẽ hiểu cách tư vấn trị liệu
                  tâm lí - tư duy cho những người xung quanh, từ đó tạo động lực
                  và truyền cảm hứng tích cực đến họ.
                </p>
              </div>
            </div>
          </div>

          <div className="row ">
            <h2 className="quote">
              CHƯƠNG TRÌNH ĐƯỢC XÂY DỰNG CHO CÁC ĐỐI TƯỢNG
            </h2>
            <div className="col-md-10 offset-md-1">
              <div className="row flex-alignitem text-center">
                <div className="col-md-6 mb-3">
                  <h3>TỪ 15 TUỔI TRỞ LÊN</h3>
                  <img
                    src={um.universalMastery08}
                    alt={um.universalMastery08}
                  />
                  <p>
                    Chương trình được xây dựng dành riêng cho những học viên
                    đang trong độ tuổi từ 15 trở lên.
                  </p>
                </div>
                <div className="col-md-6 mb-3">
                  <h3>GHÉT CUỘC ĐỜI TẦM THƯỜNG</h3>
                  <img
                    src={um.universalMastery09}
                    alt={um.universalMastery09}
                  />
                  <p>
                    Muốn tìm lại và thực hiện những giấc mơ vĩ đại của cuộc đời
                    mình để sống thực sự ý nghĩa.
                  </p>
                </div>
                <div className="col-md-6 mb-3">
                  <h3>NỖI SỢ ĐANG GIỮ CHÂN</h3>
                  <img
                    src={um.universalMastery10}
                    alt={um.universalMastery10}
                  />
                  <p>
                    Muốn vượt qua giới hạn, vượt qua nổi sợ hãi để mạnh mẽ thẳng
                    tiến đến mục tiêu cuộc đời.
                  </p>
                </div>
                <div className="col-md-6 mb-3">
                  <h3>THIẾU MỤC TIÊU CUỘC ĐỜI</h3>
                  <img
                    src={um.universalMastery11}
                    alt={um.universalMastery11}
                  />
                  <p>
                    Muốn vượt qua giới hạn, vượt qua nổi sợ hãi để mạnh mẽ thẳng
                    tiến đến mục tiêu cuộc đời.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UniversalMastery;
