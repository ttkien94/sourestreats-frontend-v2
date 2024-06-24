import React, { useEffect, useState } from "react";
import { Fade, Bounce } from "react-awesome-reveal";
import Timeline from "app/modules/ClientModules/lpe/mrVas/components/timeline";

import banner from "assets/images/source/course-offline/1st/banner.jpg";
import banner02 from "assets/images/source/course-offline/1st/banner-2.png";
import coachVas01 from "assets/images/source/course-offline/1st/coach-vas-01.png";
import coachVas02 from "assets/images/source/course-offline/1st/coach-vas-02.png";
import coachVas03 from "assets/images/source/course-offline/1st/coach-vas-03.png";
import coachVas04 from "assets/images/source/course-offline/1st/coach-vas-04.png";
import coachThanh from "assets/images/source/course-offline/1st/coach-thanh.png";
import coachThanh03 from "assets/images/source/course-offline/1st/coach-thanh-03.png";
import tfs from "assets/images/source/course-offline/1st/tfs.png";
import forWho from "assets/images/source/course-offline/1st/bg-for-who.jpg";
// import iconForWho from "assets/images/source/course-offline/1st/icon-for-who.png";
import benefit from "assets/images/source/course-offline/1st/bg-benefit.png";
import bgPrice from "assets/images/source/course-offline/1st/bg-price.jpg";
import aoMockup from "assets/images/source/course-offline/1st/ao-mockup.png";

import qrZalo from "assets/images/course/course-offline/khoi-dau-thinh-vuong/qr-zalo.jpg";
import qrVIB from "assets/images/qrVIB.jpg";
// personal img
import khanhvy from "assets/images/source/khanh-my.png";
import nguyentuanvu from "assets/images/source/nguyen-tuan-vu.png";
import hoanhai from "assets/images/source/hoan-hai.png";

import "./styles.scss";
import { useTranslation } from "react-i18next";
import CourseOfflineTestimonialCard from "../components/courseOfflineTestimonialCard";
import ModalVideo from "react-modal-video";
import { Box, Button, Modal } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import RegisterForm from "share/registerForm";
import FormCountDownt from "../pp/formCountDown";
import { useRef } from "react";
import useSiteTitle from "core/hooks/useSiteTitle";
import SEO from "share/seo/seo";
const arrayFowWho = [
  {
    bg: "https://w.ladicdn.com/source/illustration/reviews-02.svg",
    title: "Mong muốn thành công nhưng sợ thất bại",
  },
  {
    bg: "https://w.ladicdn.com/source/illustration/reviews-02.svg",
    title: "Mất tập trung, dễ chán nản, lười biếng và trì hoãn trong mọi việc",
  },
  {
    bg: "https://w.ladicdn.com/source/illustration/reviews-02.svg",
    title: "Bị stress trong công việc, học tập, gia đình",
  },
  {
    bg: "https://w.ladicdn.com/source/illustration/reviews-02.svg",
    title: "Tâm trạng thất thường, trầm cảm, dễ tổn thương",
  },
  {
    bg: "https://w.ladicdn.com/source/illustration/reviews-02.svg",
    title: "Chưa có định hướng và mục tiêu rõ ràng cho sự nghiệp, tương lai",
  },
];
const arrayPrice = [
  {
    title: "GENERAL",
    benefit: [
      "Ghế ngồi General (xa sân khấu)",
      "Tham gia toàn bộ khóa học THE RESTART",
    ],
    defaultPrice: "1.999.000 Đ",
    promoPrice: "399.000 Đ",
    promoText: "Mua 1 Tặng 1",
    warningText: "CHỈ CÒN 9 VÉ CUỐI CÙNG",
  },

  {
    title: "PLATINUM",
    benefit: [
      "Tặng Gift Voucher trị giá: 366.000đ khi đăng ký chương trình OFFLINE",
      "Ngồi hàng ghế gần với chuyên gia sau V.I.P",
    ],
    // defaultPrice: "2.999.000 Đ",
    promoPrice: "1.800.000 Đ",
    promoText: "3 NGƯỜI TRỞ LÊN",
    promoText2: "CHỈ CÒN 1.599.000 VNĐ/ NGƯỜI",
    warningText: "SẮP TĂNG LÊN 2.999.000 Đ",
  },
  {
    title: "VIP",
    benefit: [
      "Teabreak",
      "Tặng Gift Voucher trị giá: 666.000đ khi đăng ký chương trình OFFLINE",
      "Ngồi hàng ghế đầu tiên",
      "Chụp ảnh và đặt câu hỏi cùng chuyên gia",
    ],
    // defaultPrice: "6.999.000 đ",
    promoPrice: "3.600.000 đ",
    promoText: "3 NGƯỜI TRỞ LÊN ",
    promoText2: "CHỈ CÒN 3.199.000 VNĐ/ NGƯỜI",
    warningText: "SẮP TĂNG LÊN 6.999.000 Đ",
  },
];
const arrayArchiment = [
  {
    number: "+13",
    title: "Khóa học",
    desc: "Khai phá tiềm năng bản thân",
  },
  {
    number: "+650K",
    title: "Học viên",
    desc: "Trở thành phiên bản tốt nhất",
  },
  {
    number: "+50Y",
    title: "Kinh nghiệm",
    desc: "Giảng dạy trên thế giới",
  },
];
const arrayReason = [
  {
    number: "13",
    title: "Khóa học",
    desc: "Trị Liệu Tâm Lý",
    desc2: "Chăm Sóc Sức Khỏe Toàn Diện",
  },
  {
    number: "33%",
    title: "Khóa học",
    desc: "Xây Dựng Lối Sống",
    desc2: "Lành Mạnh",
  },
  {
    number: 3,
    title: "Khóa học",
    desc: "Thay Đổi ",
    desc2: "Tư Duy Tích Cực",
  },
];
const quoteVas = [
  {
    eng: "𝐀𝐋𝐖𝐀𝐘𝐒 𝐇𝐀𝐕𝐄 𝐀 𝐏𝐎𝐒𝐈𝐓𝐈𝐕𝐄 𝐌𝐈𝐍𝐃𝐒𝐄𝐓 𝐀𝐍𝐃 𝐁𝐄 𝐑𝐄𝐀𝐃𝐘 𝐓𝐎 𝐅𝐀𝐂𝐄 𝐀𝐍𝐘 𝐃𝐈𝐅𝐅𝐈𝐂𝐔𝐋𝐓𝐈𝐄𝐒",
    vn: "Luôn có tư duy tích cực và sẵn sàng đối mặt với mọi khó khăn",
  },
  {
    eng: "𝐓𝐎 𝐌𝐀𝐊𝐄 𝐘𝐎𝐔𝐑 𝐏𝐑𝐄𝐒𝐄𝐍𝐓 𝐃𝐈𝐅𝐅𝐄𝐑𝐄𝐍𝐓, 𝐈𝐌𝐀𝐆𝐈𝐍𝐄 𝐘𝐎𝐔𝐑 𝐅𝐔𝐓𝐔𝐑𝐄",
    vn: "Để hiện tại của bạn khác đi hãy hình dung tưởng tượng về tương lai của bạn",
  },
  {
    eng: " 𝐒𝐏𝐄𝐍𝐃 𝐌𝐎𝐑𝐄 𝐓𝐈𝐌𝐄 𝐏𝐑𝐀𝐈𝐒𝐈𝐍𝐆 𝐀𝐍𝐃 𝐋𝐎𝐕𝐈𝐍𝐆 𝐘𝐎𝐔𝐑𝐒𝐄𝐋𝐅 𝐓𝐇𝐀𝐍 𝐂𝐑𝐈𝐓𝐈𝐂𝐈𝐙𝐈𝐍𝐆 𝐀𝐍𝐃 𝐉𝐔𝐃𝐆𝐈𝐍𝐆",
    vn: "Hãy tự khen ngợi và yêu thương bản thân hơn là chỉ trích và phê phán",
  },
  {
    eng: " 𝗣𝗘𝗢𝗣𝗟𝗘 𝗔𝗟𝗪𝗔𝗬𝗦 𝗟𝗜𝗠𝗜𝗧 𝗧𝗛𝗘𝗠𝗦𝗘𝗟𝗩𝗘𝗦 𝗪𝗜𝗧𝗛 𝗛𝗔𝗕𝗜𝗧𝗦 𝗧𝗛𝗔𝗧 𝗧𝗛𝗘𝗬 𝗛𝗔𝗩𝗘 𝗕𝗘𝗘𝗡 𝗗𝗢𝗜𝗡𝗚 𝗙𝗢𝗥 𝗔 𝗟𝗢𝗡𝗚 𝗧𝗜𝗠𝗘",
    vn: "Con người luôn tự giới hạn mình bằng những thói quen cũ",
  },
];
const quoteThanh = [
  "Hành động hiện tại của chúng ta bây giờ là vô vàn trải nghiệm từ quá khứ",
  "Con người luôn luôn tự giới hạn mình bằng thói quen lâu nay vẫn hay làm",
  "Đừng chờ ai đó thay đổi cuộc đời bạn, chính bạn là người thay đổi chính mình",
  "Nỗ lực nâng cấp bản thân, tìm kiếm cơ hội bằng việc mở lòng đón nhận những góc nhìn mới",
];
function TheRestart() {
  const { t } = useTranslation("common");
  useSiteTitle("the_restart");
  const [videoId, setvideoId] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [step, setStep] = useState(0);
  const [data, setData] = useState({});
  const [ticket, setTicket] = useState("");

  const formData = useRef(null);
  const executeScroll = () =>
    formData.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "start",
    });

  const arrayTestimonials = [
    {
      id: 1,
      rating: 5,
      hero: t("chair_man_talk"),
      name: `${t("ms")} Lê Huỳnh Khánh My`,
      // job: `(${t("chair_man")}  Deloitte Việt Nam)`,
      ava: khanhvy,
    },
    {
      id: 2,
      rating: 4,
      hero: t("ceo_talk"),
      name: `${t("mr")} Nguyễn Tuấn Vũ`,
      // job: `(${t("ceo")} Vietphulabel)`,
      ava: nguyentuanvu,
    },
    {
      id: 3,
      rating: 5,
      hero: t("project_consultant_talk"),
      name: `${t("ms")} Phạm Thị Hoàng Hải`,
      // job: t("project_consultant"),
      ava: hoanhai,
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleOpenVideo = (id) => {
    setvideoId(id);
    setIsOpen(!isOpen);
  };

  const handleRedirectZalo = () => {
    window.open("https://zalo.me/0906880917", "_blank");
  };
  const renderBanner = () => {
    return (
      <div className="tfs-banner  pb-5">
        <div
          className="section-background"
          style={{
            backgroundImage: "url(" + banner + ")",
            backgroundSize: "cover",
          }}
        />
        <div className="overlay"></div>
        <div className="container">
          <div className="position-relative">
            <div className="d-flex justify-content-center ">
              <img src={coachVas01} alt="Coach Vas" />
            </div>
            <div className="tfs-banner-content">
              <img src={tfs} alt="Coach Vas" />
              <div className="headline-h1 animate-bounce ">
                Ngày<span className="headline-h2 d-none  d-sm-inline">:</span>{" "}
                <span className="headline-h1">13-14/07/2024</span>
              </div>
              <div className="headline-h2">
                Thời gian{" "}
                <span className="headline-h2 d-none  d-sm-inline">:</span>{" "}
                <span className="headline-h2 ">8:00 - 18:00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const renderForWho = () => {
    return (
      <div className="for-who position-relative ">
        <div className="background-behind-white"></div>
        <div className=" ">
          <div className=" text-center">
            <div
              className="section-background "
              style={{
                backgroundImage: "url(" + forWho + ")",
                backgroundSize: "cover",
                backgroundAttachment: "fix",
                backgroundPosition: "top",
              }}
            ></div>
            <div className="overlay "></div>

            <div className=" container">
              <div className="row py-5 ">
                <div className="mb-5 col-12 text-white title-h2 animate-bounce">
                  Khoá học dành cho bạn
                </div>
                <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-10 offset-sm-1 col-xs-12 offset-xs-0">
                  {arrayFowWho.map((item, index) => (
                    <Fade left key={index}>
                      <div className="rounded border border-info mb-3">
                        <div className="for-who-content d-flex align-items-center justify-content-start p-3 rounded ">
                          <StarIcon className="for-who-star"></StarIcon>
                          <div style={{ fontSize: "18px" }}>{item.title}</div>
                        </div>
                      </div>
                    </Fade>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const renderCoachVas = () => {
    return (
      <div className="mb-5 tfs-coachvas">
        <div
          className="section-background"
          style={{
            backgroundImage: "url(" + banner02 + ")",
            backgroundSize: "cover",
            borderRadius: "20px",
          }}
        ></div>
        <Timeline view="tfs" />

        <div className="tfs-coachvas-content">
          <img
            src={coachVas02}
            alt="coach vas 02"
            className="img-coachvas-02 "
          />
          <img src={coachVas03} alt="Coach Vas" className="img-coachvas-03" />
        </div>
      </div>
    );
  };
  const renderTestimonial = () => {
    return (
      <div className="row  course-offline-testimonial">
        <div className="headline-h1 mb-5">Cảm nhận của học viên</div>
        {arrayTestimonials.map((info, index) => {
          return (
            <CourseOfflineTestimonialCard
              rating={info.rating}
              hero={info.hero}
              name={info.name}
              job={info.job}
              ava={info.ava}
              key={index}
            />
          );
        })}
      </div>
    );
  };

  const renderVideo = () => {
    return (
      <div className="position-relative tfs-video mb-5">
        {/* <div className="headline-h1 w-100"></div> */}
        <Bounce>
          <img
            src={benefit}
            alt="benefit"
            style={{ cursor: "none" }}
            onClick={() => {
              handleOpenVideo("gvaJLapbPOU");
            }}
          />
        </Bounce>
        <div
          className="buttonPlay centerXYPosition animate-bounce"
          onClick={() => {
            handleOpenVideo("gvaJLapbPOU");
          }}
        >
          <i className="fal fa-play"></i>
        </div>
      </div>
    );
  };
  const renderBenefit = () => {
    return (
      <div className="tfs-benefit">
        <div className="container tfs-benefit-content relative ">
          <div className="archiment row">
            {arrayArchiment.map((item, index) => {
              return (
                <div
                  className="col-lg-4 offset-lg-0 col-md-8 offset-md-2 col-sm-12 offset-sm-0 col-xs-12 offset-xs-0 text-center mb-5"
                  key={index}
                >
                  <div className="headline-h1">{item.number}</div>
                  <div className="archiment-title">{item.title}</div>
                  <div className="archiment-desc d-flex justify-content-center">
                    <div className="w-75">{item.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="headline-h1 mb-5">THAM GIA KHÓA HỌC</div>
          <div className="archiment row">
            {arrayReason.map((item, index) => {
              return (
                <div
                  className="col-lg-4 offset-lg-0 col-md-8 offset-md-2 col-sm-12 offset-sm-0 col-xs-12 offset-xs-0 mb-5 text-center d-flex justify-content-center animate-bounce "
                  key={index}
                >
                  <div className="rounded border w-75 tfs-archiment-box">
                    <div>{item.desc}</div>
                    <div>{item.desc2}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };
  const renderHeaderPrice = (data) => {
    return (
      <div>
        <div className="d-flex inline-block justify-content-center align-items-center text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            preserveAspectRatio="none"
            viewBox="0 0 2048.0005 1896.0833"
            className="icon mr-3"
            fill="rgba(255, 255, 255, 1.0)"
          >
            <path d="M212 768l623 665-300-665H212zm812 772l349-772H675zM538 640l204-384H480L192 640h346zm675 793l623-665h-323zM683 640h682l-204-384H887zm827 0h346l-288-384h-262zm141-486l384 512q14 18 13 41.5t-17 40.5l-960 1024q-18 20-47 20t-47-20L17 748Q1 731 0 707.5T13 666l384-512q18-26 51-26h1152q33 0 51 26z"></path>
          </svg>
          <h3 className="headline">
            <span style={{ fontWeight: "bold" }}>{data?.title}</span>
          </h3>
        </div>
        {/* {data?.title === "GENERAL" && <FormCountDownt date={"06/23/2024"} />} */}
        <div className="box-promotion py-2 mt-3 col-12">
          <h4 className="default-price">{data?.defaultPrice}</h4>
          <h3 className="promo-price">{data?.promoPrice}</h3>
          <h5 className="promo-text">{data?.promoText}</h5>
          <h5 className="promo-text">{data?.promoText2}</h5>
        </div>
      </div>
    );
  };

  const renderSwitch = () => {
    switch (step) {
      case 0:
        return (
          <RegisterForm
            title={"Thông tin đăng ký !"}
            type={"TheRestart"}
            ticket={ticket}
            setStep={(i) => {
              setStep(i);
            }}
            setData={(i) => {
              setData(i);
            }}
          />
        );
      case 1:
        return (
          <div className="row popup">
            <div className="popup-background"></div>
            <div className="overlay" />
            <div className="col-12 px-5 py-5">
              <Button
                variant="contained"
                color="error"
                onClick={() => {
                  setOpenModal(false);
                }}
                className="tfs-close-modal"
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                }}
              >
                X
              </Button>
              <div className="row">
                <h2>CÁM ƠN BẠN </h2>
                <h4>ĐÃ ĐĂNG KÝ CHƯƠNG TRÌNH</h4>
                <h3>THE RESTART</h3>
              </div>
              {data?.loaive === "General" && (
                <div className="row  price-box ">
                  {renderHeaderPrice(arrayPrice[0])}
                </div>
              )}
              {data?.loaive === "Platinum" && (
                <div className="row  price-box ">
                  {renderHeaderPrice(arrayPrice[1])}
                </div>
              )}
              {data?.loaive === "Vip" && (
                <div className="row  price-box ">
                  {renderHeaderPrice(arrayPrice[2])}
                </div>
              )}
              <div className="row mt-4 d-flex justify-content-center">
                <h4 style={{ color: "yellow" }}>HOÀN THÀNH ĐĂNG KÝ</h4>
                <p className="mt-2 mb-2" style={{ lineHeight: 1.5 }}>
                  Anh/Chị vui lòng chuyển khoản với cú pháp: <br />
                  {data?.first_name + " " + data?.phone + " " + data?.loaive}
                </p>
                <p>Ngân hàng VIB</p>
                <p>Chủ tài khoản: LA HẠ GIANG THANH</p> <p>STK: 798888696</p>
                <img src={qrVIB} alt="qrVIB" />
                <p className="mt-3">
                  ✨ Sau khi hoàn tất thanh toán <br />
                  Bạn vui lòng
                  <h4
                    style={{
                      color: "yellow",
                      marginTop: 15,
                      marginBottom: 15,
                    }}
                  >
                    GỬI BILL THANH TOÁN VÀO ZALO CSKH
                  </h4>
                </p>
                <img
                  src={qrZalo}
                  alt=""
                  onClick={() => {
                    handleRedirectZalo();
                  }}
                />
                <p className="mt-3">
                  Trong vòng 24h Soul Retreats sẽ liên hệ cho bạn để xác nhận
                  thông tin.
                </p>
                <p>
                  Bạn cũng sẽ nhận được email với thông tin hữu ích về chương
                  trình.
                </p>
              </div>
            </div>
          </div>
        );
      default:
        return <></>;
    }
  };

  const renderPopUp = () => {
    const style = {
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "40px",
      boxShadow: 24,
      position: "absolute",
      overflow: "auto",
      display: "block",
      maxHeight: "90%",
      width: "100%",
    };
    return (
      <Modal
        open={openModal}
        onClose={() => {
          setOpenModal(false);
          setStep(0);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          borderRadius: "40px",
        }}
      >
        <Box sx={style}>
          <div className="container">{renderSwitch()}</div>
        </Box>
      </Modal>
    );
  };
  const renderTrainer = () => {
    return (
      <div className="tfs-trainer row ">
        <div className="col-lg-6 offset-lg-0 col-md-10 offset-md-1 col-sm-10 offset-sm-1 col-xs-12 offset-xs-0 tfs-trainer-content ">
          <div className="tfs-trainer-img d-flex justify-content-center mb-5 order-2">
            <img src={coachVas04} alt="Coach Vas" />
            <img
              src={coachVas03}
              alt="Coach Vas"
              className="img-trainer-title"
            />
          </div>
          <div className=" mb-5">
            {quoteVas.map((item, index) => {
              return (
                <div
                  key={index}
                  className="rounded box  mb-3 p-3 ml-3 mr-3 text-justify animate-bounce"
                >
                  <div className="title-h3 text-white">{item.vn}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-lg-6 offset-lg-0 col-md-10 offset-md-1 col-sm-10 offset-sm-1 col-xs-12 offset-xs-0 tfs-trainer-content mb-5">
          <div className="tfs-trainer-img d-flex justify-content-center mb-5">
            <img
              src={coachThanh}
              alt="coachThanh"
              className="img-coach-thanh"
            />
            <img
              src={coachThanh03}
              alt="coachThanh"
              className="img-trainer-title"
            />
          </div>
          <div className="">
            {quoteThanh.map((item, index) => {
              return (
                <div
                  key={index}
                  className="rounded box  mb-3 p-3 ml-3 mr-3 text-justify animate-bounce"
                >
                  <div className="title-h3 text-white">{item}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };
  const renderPrice = () => {
    return (
      <div className="tfs-price position-relative mb-5">
        <div
          className="section-background"
          style={{
            backgroundImage: "url(" + bgPrice + ")",
            backgroundSize: "cover",
            borderBottomRightRadius: "20px",
            borderBottomLeftRadius: "20px",
          }}
        ></div>
        <div className="col-lg-12 col-xl-10 offset-xl-1 mb-5">
          <div
            style={{
              color: "white",
              fontSize: "64px",
              textAlign: "center",
              fontWeight: "bold",
              paddingTop: "32px",
            }}
          >
            CÁC HẠNG VÉ
          </div>
          <div className="row">
            {arrayPrice.map((item, index) => {
              return (
                <div
                  className="col-lg-4 col-md-12 col-sm-12 col-xs-12  my-3 d-flex align-items-stretch  "
                  key={index}
                >
                  <div className="price-box rounded p-3">
                    <div
                      className={`headline-h3 mb-3  ${
                        item.title === "GENERAL"
                          ? "tfs-general"
                          : item.title === "PLATINUM"
                          ? "tfs-platinum"
                          : "tfs-vip"
                      }`}
                    >
                      {item.title}
                    </div>
                    <ul>
                      {item.benefit.map((b, index2) => {
                        return <li key={index2}>{b}</li>;
                      })}
                      {item.title !== "GENERAL" && (
                        <li style={{ fontWeight: "bold" }}>
                          <span
                            style={{ fontSize: "24px", lineHeight: "24px" }}
                          >
                            Gift Voucher{" "}
                            {item.title === "PLATINUM" ? "25%" : "50%"}&nbsp;
                          </span>
                          khi mua áo phiên bản giới hạn (limited)
                        </li>
                      )}
                    </ul>
                    {item.title !== "GENERAL" && (
                      <div className="d-flex justify-content-end">
                        <img
                          src={aoMockup}
                          alt="logo"
                          className="tfs-price-img"
                        />
                      </div>
                    )}
                    <div
                      className={`price-box-promo-text mb-3 ${
                        item.title === "GENERAL" &&
                        "price-box-promo-text-general "
                      }`}
                      ref={item.title === "GENERAL" ? formData : null}
                    >
                      {item.warningText}
                    </div>

                    <div
                      className={`tfs-price-register text-center mt-5 ${
                        item.title !== "VIP"
                          ? "position-bottom"
                          : "position-vip"
                      }`}
                    >
                      <div className="default-price">{item?.defaultPrice}</div>
                      <div className="headline-h2 animate-bounce tfs-promo-price">
                        {item?.promoPrice}
                      </div>
                      <div
                        className={
                          item.title !== "GENERAL"
                            ? " tfs-promo-text"
                            : "tfs-promo-text-general"
                        }
                      >
                        {item?.promoText}
                      </div>
                      <div className="tfs-promo-text">{item?.promoText2}</div>

                      <Button
                        className="w-75 tfs-btn-register animate-bounce"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onClick={() => {
                          setOpenModal(true);
                          setTicket(item.title);
                        }}
                      >
                        Đăng ký
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {renderTrainer()}
      </div>
    );
  };

  const renderBox = () => {
    return (
      <div className="position-relative">
        <div className="background-behind"></div>
        <div className="container py-5">
          <div className="box">
            {renderCoachVas()}
            {renderTestimonial()}
            {renderVideo()}
            {renderBenefit()}
            {renderPrice()}
          </div>
        </div>
      </div>
    );
  };
  const renderFixedBottom = () => {
    return (
      <div className="tfs-fixed-bottom">
        <div className="container potision-relative">
          <img src={coachVas01} alt="Coach Vas" />
          <Button
            className=" tfs-btn-register animate-bounce"
            onClick={() => {
              executeScroll();
            }}
          >
            Đăng ký
          </Button>
          <div className="mt-4  tfs-fixed-bottom-content">
            <p className="title-h2"> GENERAL: 399.000đ </p>
            <span className="d-none d-sm-block"> &nbsp;-&nbsp;</span>
            <span className="title-h2"> Mua 1 Tặng 1</span>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="the-first-step">
      <SEO
        title={t("the_restart")}
        description="Beginner friendly page for learning React meta."
        name="Company name."
        type="article"
        img={coachVas01}
      />
      {renderBanner()}
      {renderForWho()}
      {renderBox()}
      {renderPopUp()}
      {renderFixedBottom()}
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId={videoId}
        onClose={() => handleOpenVideo(!isOpen)}
      />
    </div>
  );
}

export default TheRestart;
