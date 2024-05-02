import React, { useEffect, useState } from "react";
import Modal from "./components/modal";

import banner from "./assets/banner-icpc.jpg";
import certification from "./assets/bang-chung-nhan-nlp.png";
import privilege01 from "./assets/privilege01.png";
import privilege03 from "./assets/privilege03.png";
import quote2 from "./assets/quote2-icpc.jpg";
import identity03 from "assets/images/source/offline/imcpc/imcpc-1.jpg";
import identity04 from "assets/images/source/offline/imcpc/imcpc-2.jpg";
import "./styles/styles.scss";
// import { useTranslation } from "react-i18next";
import useSiteTitle from "core/hooks/useSiteTitle";
import UiApplyCourse from "share/uiApplyCourse";

const data_apply = [
  "Hiểu ra căn nguyên mọi vấn đề, lý giải cho cách hành xử của con người ở mọi khía cạnh.",
  "Nhận thức và xử lý những lỗ hỏng cảm xúc đã cản trở con người bạn ",
  'Chữa lành những căn bệnh đến từ "thân" và "tâm", từ đơn giản đến phức tạp.',
  "Biết được cách làm chủ mọi cuộc giao tiếp, làm chủ trạng thái cơ thể & duy trì năng lượng tích cực. ",
  'Tìm lại đáp án cho câu hỏi "Tôi là ai" và "Tôi sống để làm gì".',
  "Làm chủ Cơ thể & Tâm trí từ những quy trình NLP các cấp bậc. ",
  "Trở thành Nhà Tư Vấn Trị Liệu chuyên sâu, có khả năng giúp đỡ cho người xung quanh.",
  "Khám phá Nhân dạng và Lẽ Sống với cấp độ cao hơn.",
];

const Environment = {
  text: "Environment",
  description:
    "Môi trường (Làm việc/Gia đình/Mối quan hệ): Chính là nơi bạn gặp phải vấn đề và không thể hiện bản thân hay hạnh phúc ở đó.",
};
const Behavior = {
  text: "Behavior",
  description:
    "Hành vi: Bạn cần phải linh hoạt để có thể làm chủ trong mọi vấn đề, mọi trường hợp xảy đến.",
};

const Capabilities = {
  text: "Capabilities",
  description:
    "Năng lực: Trạng thái bên trong, những cảm xúc tích cực/ tiêu cực, sự tự tin đưa ra những quyết định của bạn.",
};

const BeliefAndValues = {
  text: "Belief & Values",
  description:
    "Niềm tin & Giá trị: Thứ bạn không thể nhìn thấy. Nhưng lại tạo nên những quyết định, ảnh hưởng 99% đến hành động và kết quả.",
};

const IdentityAndLifePurpose = {
  text: "Identity & Life Purpose",
  description:
    "Nhân dạng & Lẽ sống: Khi chúng ta biết mình là ai, hiểu rõ về bản chất con người và vai trò của bạn trong thế giới này. ",
};
const SpiritualAndVision = {
  text: `Spiritual & Vision`,
  description:
    "Tâm linh & Tầm nhìn: Vận hành những nguồn lực nhiệm màu bạn chưa từng biết đến trong vũ trụ này. Nhìn thấy được tiềm năng cuộc sống vĩ đại của chính mình và của con người.",
};

function IMCPC() {
  // const { t } = useTranslation("common");
  useSiteTitle("imcpc");
  const [show, setShow] = useState(false);
  // const [content, setContent] = useState(false);
  const content = false;
  const [ICPC, setICPC] = useState({
    Opacity: 1,
    zIndex: 1,
    changeOpacity: "changeOpacity",
  });
  const [IMCPC, setIMCPC] = useState({
    Opacity: 0.2,
    zIndex: 0,
    changeOpacity: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const triangle = [
    {
      name: ICPC,
      className: "triangle1",
      value: [
        {
          className: "triangle-background-1",
          text: Environment.text,
          description: Environment.description,
          position: "0%",
        },
        {
          className: "triangle-background-2",
          text: Behavior.text,
          description: Behavior.description,
          position: "0%",
        },
        {
          className: "triangle-background-3",
          text: Capabilities.text,
          description: Capabilities.description,
          position: "0%",
        },
        {
          className: "triangle-background-4",
          text: BeliefAndValues.text,
          description: BeliefAndValues.description,
        },
        {
          className: "triangle-background-5",
          text: IdentityAndLifePurpose.text,
          description: IdentityAndLifePurpose.description,
          position: "0%",
        },
        {
          className: "triangle-background-6",
          text: SpiritualAndVision.text,
          description: SpiritualAndVision.description,
          position: "0%",
        },
      ],
    },
    {
      name: IMCPC,
      className: "triangle2",
      value: [
        {
          className: "triangle-background-1",
          text: "Spiritual & Vision",
          description:
            "Tâm linh & Tầm nhìn: Vận hành những nguồn lực nhiệm màu bạn chưa từng biết đến trong vũ trụ này. Nhìn thấy được tiềm năng cuộc sống vĩ đại của chính mình và của con người.",
        },
        {
          className: "triangle-background-2",
          text: "Identity & Life Purpose",
          description:
            "Nhân dạng & Lẽ sống: Khi chúng ta biết mình là ai, hiểu rõ về bản chất con người và vai trò của bạn trong thế giới này.",
        },
        {
          className: "triangle-background-3",
          text: "Belief & Values",
          description:
            "Niềm tin & Giá trị: Thứ bạn không thể nhìn thấy. Nhưng lại tạo nên những quyết định, ảnh hưởng 99% đến hành động và kết quả.",
        },
        {
          className: "triangle-background-4",
          text: "Capabilities",
          description:
            "Năng lực: Trạng thái bên trong, những cảm xúc tích cực/ tiêu cực, sự tự tin đưa ra những quyết định của bạn.",
        },
        {
          className: "triangle-background-5",
          text: "Behavior",
          description:
            "Hành vi: Bạn cần phải linh hoạt để có thể làm chủ trong mọi vấn đề, mọi trường hợp xảy đến.",
        },
        {
          className: "triangle-background-6",
          text: "Environment",
          description:
            "Môi trường (Làm việc/Gia đình/Mối quan hệ): Chính là nơi bạn gặp phải vấn đề và không thể hiện bản thân hay hạnh phúc ở đó.",
        },
      ],
    },
  ];

  const value1 = [
    "Phá vỡ niềm tin giới hạn, mở ra ước mơ lớn hơn.",
    "Tái thiết lập tầm nhìn và mục tiêu để đạt tầm cao vĩ đại.",
    "Ôm trọn niềm tin đầy sức mạnh để đạt thành công cực đại.",
    "Đánh giá và cải thiện giá trị cốt lõi giúp giải phóng sự phát triển cá nhân.",
    "Cài đặt giá trị cốt lõi để thúc đẩy hành trình tiếp theo.",
    "Làm chủ liệu pháp trị liệu để xây dựng hệ thống niềm tin vững chắc.",
    "Nhận thức và xác định về Hành Trình Anh Hùng.",
  ];

  const value2 = [
    "Áp dụng mô hình hóa để kích hoạt Thiên Tài Sáng Tạo bên trong bạn.",
    "Nhận thức về hành vi con người qua quá trình tiến hóa.",
    "Tiếp cận nghệ thuật lãnh đạo có tầm nhìn và toàn diện.",
    "Hiểu về nhân dạng và cách nó ảnh hưởng đến cơ thể, tâm trí.",
    "Nhận thức về sự tiến hóa và khả năng kiến tạo số phận từ góc nhìn tâm linh.",
    "Áp dụng kiến thức về vật lý lượng tử để đạt đến thành công cực đại.",
    "Hiểu rõ quy luật thu hút nguồn lực và sử dụng chúng để đạt đến thành công cực đại.",
  ];

  // const showModal = (value) => {
  //   setShow(true);
  //   setContent(value);
  // };

  const hideModal = () => {
    setShow(false);
  };
  const changeStyleICPC = () => {
    setICPC({ Opacity: 1, zIndex: 1, changeOpacity: "changeOpacity" });
    setIMCPC({ Opacity: 0.2, zIndex: 0, changeOpacity: "" });
  };
  const changeStyleIMCPC = () => {
    setICPC({ Opacity: 0.2, zIndex: 0, changeOpacity: "" });
    setIMCPC({ Opacity: 1, zIndex: 1, changeOpacity: "changeOpacity" });
  };

  return (
    <div className="Imcpc">
      <img src={banner} className="img-fluid " alt={banner} />
      <div className="container">
        <div className="row mt-5">
          <h2 className="quote">GIÁ TRỊ NHẬN ĐƯỢC TỪ CHƯƠNG TRÌNH</h2>
        </div>

        <div className="row flex-alignitem mt-4 ">
          <div className="col-md-6 mb-3">
            <img src={identity03} alt={identity03} />
          </div>
          <div className="col-md-6 ">
            <ul>
              {value1.map((item, index) => {
                return (
                  <li key={index} className="text-justify mt-2">
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="row flex-alignitem mt-5  pb-3">
          <div className="col-md-6 order-last mb-3">
            <img src={identity04} alt={identity04} />
          </div>
          <div className="col-md-6 ">
            <ul>
              {value2.map((item, index) => {
                return (
                  <li key={index} className="text-justify mt-2">
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="row mt-5">
          <h2 className="quote">
            Áp dụng NLP vào việc chữa lành tận sâu những vấn đề tưởng chừng như
            không thể giải quyết được và xây dựng sự nghiệp cống hiến vĩ đại cho
            cuộc đời.
          </h2>
        </div>
        <div className="row tab-menu">
          <div className="col-6">
            <button onClick={changeStyleICPC}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <h2>ICPC</h2>
            </button>
          </div>
          <div className="col-6">
            <button onClick={changeStyleIMCPC}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <h2>IMCPC</h2>
            </button>
          </div>
        </div>

        <div className="triangle-level">
          {triangle.map((item, index) => {
            return (
              <div
                key={index}
                className={`${item.className} ${item.name.changeOpacity}`}
                style={{
                  opacity: item.name.Opacity,
                  zIndex: item.name.zIndex,
                }}
              >
                {item.value.map((row, idx) => {
                  return (
                    <div className={row.className} key={idx}>
                      <p>
                        {row.text}
                        {/**
                      <button
                          onClick={() => {
                            showModal(row.description);
                          }}
                        >
                         
                        </button>
                    */}
                        <i className="fas fa-info-circle "></i>
                        <div className="popup">{row.description}</div>
                      </p>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className={show ? "modal display-block" : "modal display-none"}>
          <Modal
            handleClose={hideModal}
            content={content}
            onClickOutside={() => {
              setShow(false);
            }}
          ></Modal>
        </div>
        <div className="row quote2 mt-5 mb-5">
          <img src={quote2} className="img-fluid" alt={quote2} />
        </div>
        <UiApplyCourse
          data={data_apply}
          title="ỨNG DỤNG THỰC TIỄN SAU CHƯƠNG TRÌNH"
        />
        <div className="row privilege mt-5 pt-3">
          <h2 className="quote">ĐẶC QUYỀN TỪ CHƯƠNG TRÌNH</h2>
          <div className="col-lg-4 col-md-4 col-sm-12 ">
            <img src={privilege01} className="img-fluid" alt={privilege01} />
            <p>Bộ quy trình NLP dành riêng cho việc Coaching Online</p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <img
              src={certification}
              className="img-fluid"
              alt={certification}
            />
            <p>Bằng chứng nhận NLP đẳng cấp quốc tế</p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <img src={privilege03} className="img-fluid" alt={privilege03} />
            <p>
              Trở thành Nhà Tư Vấn Trị Liệu giải quyết vấn đề cho khách hàng,
              cho mọi người.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IMCPC;
