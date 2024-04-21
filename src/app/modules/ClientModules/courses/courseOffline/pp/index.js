import React, { useState } from "react";
import * as Yup from "yup";
import { Formik, Form, FastField } from "formik";
import khanhvy from "assets/images/source/khanh-my.png";
import nguyentuanvu from "assets/images/source/nguyen-tuan-vu.png";
import hoanhai from "assets/images/source/hoan-hai.png";
import TitleHomeClient from "app/modules/ClientModules/home/components/title";
import hoiTruong from "assets/images/course/course-offline/khoi-dau-thinh-vuong/hoi-truong-form-dang-ky.png";
import qrZalo from "assets/images/course/course-offline/khoi-dau-thinh-vuong/qr-zalo.jpg";
import qrACB from "assets/images/course/course-offline/khoi-dau-thinh-vuong/qr-acb.jpg";
import InputField from "app/components/customField/inputField";

import "./styles/styles.scss";
import FormCountDownt from "./formCountDown";
import RegisterForm from "share/registerForm";
import Button from "@mui/material/Button";
import { useRef } from "react";
import TestimonialCard from "app/modules/ClientModules/home/components/testimonialCart";
import { useTranslation } from "react-i18next";
import { Box, Modal, Typography } from "@mui/material";
import { useEffect } from "react";
const phoneRegExp = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;

const PP = () => {
  const { t } = useTranslation("common");
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({});
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const arrayTestimonials = [
    {
      id: 1,
      rating: 5,
      hero: t("chair_man_talk"),
      name: `${t("ms")} Nguyễn Khánh Vy`,
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
      name: `${t("ms")} Phạm Thị Hoàn Hải`,
      // job: t("project_consultant"),
      ava: hoanhai,
    },
  ];
  const generalTicket = {
    title: "GENERAL",
    defaultPrice: "1.999.000Đ",
    promoPrice: "99.000Đ",
    promoText: "Mua 1 Tặng 1",
  };
  const vipTicket = {
    title: "DIAMOND - VIP",
    defaultPrice: "6.999.000đ",
    promoPrice: "3.499.000đ",
    promoText: "3 NGƯỜI TRỞ LÊN CHỈ CÒN 1.166.000 VNĐ/ NGƯỜI",
  };
  const platinumTicket = {
    title: "PLATINUM",
    defaultPrice: "1.999.000Đ",
    promoPrice: "99.000Đ",
    promoText: "3 NGƯỜI TRỞ LÊN CHỈ CÒN 466.000 VNĐ/ NGƯỜI",
  };
  const listBenefitGen = ["Tài liệu học tập", "Ghế ngồi general"];
  const listBenefitVip = [
    "Teabreak",
    "Tặng Gift Voucher trị giá: 666.000đ khi đăng ký chương trình Offline",
    "Ngồi hàng ghế đầu tiên",
    "Gift Voucher 50% khi mua sách 'The Owner's Script' độc quyền từ chuyên gia Coach Vas trị giá 1.288.000 VNĐ (bao gồm: sách in + video 2h thực hành sách + chữ ký chuyên gia)",
    "Chụp ảnh và đặt câu hỏi cùng chuyên gia",
    "Tài liệu học tập",
  ];
  const listBenefitPla = [
    "Tặng Gift Voucher trị giá: 366.000đ khi đăng ký chương trình Offline",
    "Ngồi hàng ghế gần với chuyên gia sau V.I.P",
    "Tài liệu học tập",
    "Gift 50% khi mua áo phiên bản giới hạn (limited)",
  ];
  const initialValues = {
    name: "",
    date: Number(new Date()),
    email: "",
    phone: "",
    loaive: "",
    songuoidicung: "",
    form_item279: "",
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Vui lòng nhập trường này.")
      .min(3, "Có ít nhất là 3 ký tự.")
      .max(40, "Có nhiều nhất là 40 ký tự."),
    email: Yup.string()
      .required("Vui lòng nhập trường này")
      .max(255)
      .email("Email chưa đúng"),
    phone: Yup.string()
      .required("Vui lòng nhập trường này")
      .matches(phoneRegExp, "Số điện thoại chưa đúng."),
    date: Yup.number("Vui lòng nhập đúng định dạng")
      .required("Vui lòng nhập trường này")
      .min(new Date(1900, 0, 1), "Ngày thấp nhất không dưới năm 1900")
      .max(new Date(), "Ngày lớn nhất không được quá hôm nay"),
  });
  const formData = useRef(null);
  const executeScroll = () => formData.current.scrollIntoView();

  const bannerSection = (title) => {
    return (
      <div id="SECTION238" className="ladi-section py-5">
        <div className="ladi-section-background"></div>
        <div className="ladi-overlay"></div>
        <div className="ladi-container">
          <div id="GROUP239" className="ladi-element">
            <div className="ladi-group">
              <div id="BOX240" className="ladi-element">
                <div className="ladi-box ladi-transition"></div>
              </div>
              <div id="BOX241" className="ladi-element">
                <div className="ladi-box ladi-transition"></div>
              </div>
              <div id="BOX242" className="ladi-element">
                <div className="ladi-box ladi-transition"></div>
              </div>
            </div>
          </div>
          <div id="GROUP243" className="ladi-element">
            <div className="ladi-group">
              <div id="BOX244" className="ladi-element">
                <div className="ladi-box ladi-transition"></div>
              </div>
              <div id="BOX245" className="ladi-element">
                <div className="ladi-box ladi-transition"></div>
              </div>
            </div>
          </div>
          {/* Logo */}
          {/* <div id="IMAGE246" className="ladi-element">
            <div className="ladi-image ladi-transition">
              <div className="ladi-image-background"></div>
            </div>
          </div> */}
          <div id="GROUP250" className="ladi-group ladi-element">
            <div id="HEADLINE255">
              <h3 className="ladi-headline ladi-transition">
                THE FRIST STEP <br />
                KHỞI ĐẦU THỊNH VƯỢNG
              </h3>
            </div>

            <div id="PARAGRAPH260">
              <div className="ladi-paragraph ladi-transition">
                KHÁM PHÁ ĐAM MÊ VÀ SỨ MỆNH CUỘC ĐỜI BẠN
              </div>
            </div>
            <div id="LIST_PARAGRAPH270" className="pt-3">
              <div className="ladi-list-paragraph">
                <ul>
                  <li>
                    <span style={{ fontWeight: "bold", fontSize: "20px" }}>
                      Thời gian: 26.05.2024
                    </span>
                  </li>
                  <li>
                    <span style={{ fontWeight: "bold", fontSize: "20px" }}>
                      Địa điểm: Thành Phố Hồ Chí Minh
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            {renderCallAction()}
          </div>
          {/* <div id="GROUP250">
            <div className="ladi-group">
              <div id="SHAPE251" className="ladi-element">
                <div className="ladi-shape ladi-transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="none"
                    viewBox="0 0 422.41 34.48"
                    className=""
                    fill="rgba(45, 142, 124, 1.0)"
                  >
                    <path d="M3.49,7c7.6,0,11.49,5.67,16,12.23C24.4,26.37,30,34.48,41.25,34.48S58.09,26.37,63,19.21C67.51,12.65,71.41,7,79,7s11.5,5.67,16,12.23c4.91,7.16,10.47,15.27,21.75,15.27s16.84-8.11,21.76-15.27C143,12.65,146.93,7,154.53,7s11.5,5.67,16,12.23c4.91,7.16,10.48,15.27,21.75,15.27s16.85-8.11,21.76-15.27C218.55,12.65,222.44,7,230,7s11.5,5.67,16,12.23c4.91,7.16,10.48,15.27,21.76,15.27s16.85-8.11,21.76-15.27C294.08,12.65,298,7,305.58,7s11.5,5.67,16,12.23c4.92,7.16,10.48,15.27,21.76,15.27s16.85-8.11,21.77-15.27c4.51-6.56,8.41-12.23,16-12.23s11.5,5.67,16,12.23c4.91,7.16,10.48,15.27,21.77,15.27a3.49,3.49,0,1,0,0-7c-7.62,0-11.51-5.67-16-12.24C398,8.11,392.41,0,381.13,0s-16.86,8.11-21.77,15.26c-4.51,6.57-8.41,12.24-16,12.24s-11.5-5.67-16-12.24C322.42,8.11,316.86,0,305.58,0s-16.85,8.11-21.76,15.26c-4.51,6.57-8.41,12.24-16,12.24s-11.5-5.67-16-12.24C246.89,8.11,241.32,0,230,0S213.2,8.11,208.29,15.26c-4.5,6.57-8.39,12.24-16,12.24s-11.49-5.67-16-12.24C171.38,8.11,165.81,0,154.53,0s-16.84,8.11-21.76,15.26c-4.5,6.57-8.4,12.24-16,12.24s-11.49-5.67-16-12.24C95.86,8.11,90.29,0,79,0S62.17,8.11,57.25,15.26c-4.5,6.57-8.4,12.24-16,12.24s-11.5-5.67-16-12.24C20.33,8.11,14.77,0,3.49,0a3.49,3.49,0,0,0,0,7Z"></path>
                  </svg>
                </div>
              </div>
              <div id="HEADLINE255">
                <h3 className="ladi-headline ladi-transition">
                  THE FRIST STEP <br />
                  KHỞI ĐẦU THỊNH VƯỢNG
                </h3>
              </div>

              <div id="PARAGRAPH260">
                <div className="ladi-paragraph ladi-transition">
                  KHÁM PHÁ ĐAM MÊ VÀ SỨ MỆNH CUỘC ĐỜI BẠN
                </div>
              </div>
              <div id="LIST_PARAGRAPH270" className="pt-3">
                <div className="ladi-list-paragraph">
                  <ul>
                    <li>
                      <span style={{ fontWeight: "bold", fontSize: "20px" }}>
                        Thời gian: 26.05.2024
                      </span>
                    </li>
                    <li>
                      <span style={{ fontWeight: "bold", fontSize: "20px" }}>
                        Địa điểm: Thành Phố Hồ Chí Minh
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              {renderCallAction()}
            </div>
          </div> */}
        </div>
      </div>
    );
  };
  const renderCallAction = () => {
    return (
      <div data-action="true" id="GROUP301">
        <Button
          variant="contained"
          sx={{
            bgcolor: "red",
            fontWeight: "bold",
            fontSize: 16,
            alignItems: "center",
            borderRadius: 20,
          }}
          onClick={() => {
            executeScroll();
          }}
        >
          <div id="SHAPE292">
            <div
              className="ladi-transition mr-2"
              style={{ marginBottom: "4px" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                preserveAspectRatio="none"
                viewBox="0 0 218.3 150.67"
                className=""
                fill="#FFFFFF"
              >
                <polygon
                  style={{ opacity: 0.3 }}
                  points="218.3 53.34 125.91 0 125.91 106.67 218.3 53.34"
                />
                <polygon
                  style={{ opacity: 0.6 }}
                  points="155.34 53.34 62.96 0 62.96 106.67 155.34 53.34"
                />
                <polygon points="92.38 53.34 0 0 0 106.67 92.38 53.34" />
              </svg>
            </div>
          </div>
          ĐĂNG KÝ NGAY
        </Button>
      </div>
    );
  };
  const renderForWho = () => {
    return (
      <div id="SECTION266" className="ladi-section">
        <div className="ladi-section-background"></div>
        <div className="ladi-container  d-flex align-items-end justify-content-center">
          <div id="GROUP272" className="ladi-element">
            <div className="ladi-group">
              <div id="BOX273" className="ladi-element">
                <div className="ladi-box">
                  <div className="ladi-overlay"></div>
                </div>
              </div>
              <div id="BOX274" className="ladi-element">
                <div className="ladi-box"></div>
              </div>
            </div>
          </div>
          <div id="GROUP278" className="ladi-element">
            <div className="ladi-group">
              <div id="HEADLINE284" className="ladi-element">
                <h3 className="ladi-headline">
                  KHÓA HỌC DÀNH CHO TẤT CẢ NHỮNG AI ĐANG
                </h3>
              </div>
              <div id="LINE261" className="ladi-element">
                <div className="ladi-line">
                  <div className="ladi-line-container"></div>
                </div>
              </div>
              <div id="SHAPE276" className="ladi-element">
                <div className="ladi-shape">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="none"
                    viewBox="0 0 100.49 100.49"
                    fill="rgba(242, 67, 13, 1.0)"
                  >
                    <path d="M50.24,50.24h50.25a50.25,50.25,0,1,0-50.25,50.25Z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div id="GROUP279" className="ladi-element">
            <div className="ladi-group">
              <div id="BOX283" className="ladi-element">
                <div className="ladi-box"></div>
              </div>
              <div id="BOX284" className="ladi-element">
                <div className="ladi-box">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="none"
                    viewBox="0 0 1408 1896.08"
                    fill="rgba(255, 255, 255, 1.0)"
                  ></svg>
                </div>
              </div>
              <div id="HEADLINE285" className="ladi-element">
                <h3 className="ladi-headline">
                  Tâm trạng thất thường, trầm cảm, dễ tổn thương
                  <br />
                </h3>
              </div>
              <div id="SHAPE277" className="ladi-element">
                <div className="ladi-shape">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="none"
                    viewBox="0 0 1408 1896.08"
                    fill="rgba(255, 255, 255, 1.0)"
                  >
                    <path d="M1120 256H288q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113V416q0-66-47-113t-113-47zm288 160v832q0 119-84.5 203.5T1120 1536H288q-119 0-203.5-84.5T0 1248V416q0-119 84.5-203.5T288 128h832q119 0 203.5 84.5T1408 416z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div id="GROUP274" className="ladi-element">
            <div className="ladi-group">
              <div id="BOX275" className="ladi-element">
                <div className="ladi-box"></div>
              </div>
              <div id="BOX276" className="ladi-element">
                <div className="ladi-box"></div>
              </div>
              <div id="HEADLINE279" className="ladi-element">
                <h3 className="ladi-headline">
                  Mong muốn thành công nhưng sợ thất bại
                  <br />
                </h3>
              </div>
              <div id="SHAPE272" className="ladi-element">
                <div className="ladi-shape">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="none"
                    viewBox="0 0 1408 1896.08"
                    fill="rgba(255, 255, 255, 1.0)"
                  >
                    <path d="M1120 256H288q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113V416q0-66-47-113t-113-47zm288 160v832q0 119-84.5 203.5T1120 1536H288q-119 0-203.5-84.5T0 1248V416q0-119 84.5-203.5T288 128h832q119 0 203.5 84.5T1408 416z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div id="GROUP275" className="ladi-element">
            <div className="ladi-group">
              <div id="BOX277" className="ladi-element">
                <div className="ladi-box"></div>
              </div>
              <div id="BOX278" className="ladi-element">
                <div className="ladi-box"></div>
              </div>
              <div id="HEADLINE280" className="ladi-element">
                <h3 className="ladi-headline">
                  Stress, căng thẳng trong công việc, gia đình, học tập, tài
                  chính,tình yêu,...
                  <br />
                </h3>
              </div>
              <div id="SHAPE273" className="ladi-element">
                <div className="ladi-shape">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="none"
                    viewBox="0 0 1408 1896.08"
                    fill="rgba(255, 255, 255, 1.0)"
                  >
                    <path d="M1120 256H288q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113V416q0-66-47-113t-113-47zm288 160v832q0 119-84.5 203.5T1120 1536H288q-119 0-203.5-84.5T0 1248V416q0-119 84.5-203.5T288 128h832q119 0 203.5 84.5T1408 416z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div id="GROUP276" className="ladi-element">
            <div className="ladi-group">
              <div id="BOX279" className="ladi-element">
                <div className="ladi-box"></div>
              </div>
              <div id="BOX280" className="ladi-element">
                <div className="ladi-box"></div>
              </div>
              <div id="HEADLINE281" className="ladi-element">
                <h3 className="ladi-headline">
                  Mất tập trung, dễ chán nản mệt mỏi, lười biếng, trì hoãn trong
                  mọi việc.
                  <br />
                </h3>
              </div>
              <div id="SHAPE274" className="ladi-element">
                <div className="ladi-shape">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="none"
                    viewBox="0 0 1408 1896.08"
                    fill="rgba(255, 255, 255, 1.0)"
                  >
                    <path d="M1120 256H288q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113V416q0-66-47-113t-113-47zm288 160v832q0 119-84.5 203.5T1120 1536H288q-119 0-203.5-84.5T0 1248V416q0-119 84.5-203.5T288 128h832q119 0 203.5 84.5T1408 416z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div id="GROUP277" className="ladi-element">
            <div className="ladi-group">
              <div id="BOX281" className="ladi-element">
                <div className="ladi-box"></div>
              </div>
              <div id="BOX282" className="ladi-element">
                <div className="ladi-box"></div>
              </div>
              <div id="HEADLINE282" className="ladi-element">
                <h3 className="ladi-headline">
                  Mất định hướng, không có mục tiêu, chưa hiểu bản thân mình cần
                  gì, muốn gì…
                  <br />
                </h3>
              </div>
              <div id="SHAPE275" className="ladi-element">
                <div className="ladi-shape">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="none"
                    viewBox="0 0 1408 1896.08"
                    fill="rgba(255, 255, 255, 1.0)"
                  >
                    <path d="M1120 256H288q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113V416q0-66-47-113t-113-47zm288 160v832q0 119-84.5 203.5T1120 1536H288q-119 0-203.5-84.5T0 1248V416q0-119 84.5-203.5T288 128h832q119 0 203.5 84.5T1408 416z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-5">{renderCallAction()}</div>
        </div>
      </div>
    );
  };
  const renderMrVas = () => {
    return (
      <div id="SECTION263" className="ladi-section">
        <div className="ladi-section-background"></div>
        <div className="ladi-container">
          <div id="GROUP304" className="ladi-element">
            <div className="ladi-group">
              <div id="SHAPE295" className="ladi-element">
                <div className="ladi-shape">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="none"
                    viewBox="0 0 394.81 100.47"
                    className=""
                    fill="rgba(186, 186, 186, 1)"
                  >
                    <rect
                      x="313.52"
                      y="16.56"
                      width="67.35"
                      height="67.35"
                      transform="translate(628.21 -159.74) rotate(135)"
                    ></rect>
                    <path d="M331.64,100.47,281.4,50.24,331.64,0l50.23,50.24Zm-45-50.23,45,45,45-45-45-45Z"></path>
                    <rect
                      x="172.81"
                      y="16.56"
                      width="67.35"
                      height="67.35"
                      transform="translate(388.02 -60.25) rotate(135)"
                    ></rect>
                    <path d="M190.94,100.47,140.7,50.24,190.94,0l50.23,50.24Zm-45-50.23,45,45,45-45-45-45Z"></path>
                    <rect
                      x="32.11"
                      y="16.56"
                      width="67.35"
                      height="67.35"
                      transform="translate(147.83 39.24) rotate(135)"
                    ></rect>
                    <path d="M50.23,100.47,0,50.24,50.23,0l50.24,50.24Zm-45-50.23,45,45,45-45-45-45Z"></path>
                  </svg>
                </div>
              </div>
              <div id="SHAPE294" className="ladi-element">
                <div className="ladi-shape">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="none"
                    viewBox="0 0 161.6 150"
                    className=""
                    fill="rgba(253, 126, 48, 1)"
                  >
                    <path d="M77.1,0,0,77.1a37.7,37.7,0,0,0,1.4,8.2L86.6,0Z"></path>
                    <path d="M147.5,40.1,41.8,145.7a37.7,37.7,0,0,0,6.5,2.6L150.8,45.8Z"></path>
                    <path d="M95.7,0,3.9,91.8l1,1.9,2.2,3.9L104.8,0Z"></path>
                    <path d="M135.1,18.6,134,16.9,24.1,126.8l2.5,4.3.8,1.2L137.3,22.4Z"></path>
                    <path d="M101.7,150l53.1-53.1,1.8-3.2a37.6,37.6,0,0,0,4.5-12.3L92.6,150Z"></path>
                    <path d="M140.6,28.2,31.3,137.6a37.6,37.6,0,0,0,4.9,4.5L144.1,34.2Z"></path>
                    <path d="M112.7,1.2,10.5,103.3l3.4,5.9L119.4,3.8A37.7,37.7,0,0,0,112.7,1.2Z"></path>
                    <path d="M125,7.3,17.3,115l3.4,5.9L129.9,11.7A37.6,37.6,0,0,0,125,7.3Z"></path>
                    <path d="M160.1,64l-86,86h9.3l78.2-78.2A37.6,37.6,0,0,0,160.1,64Z"></path>
                    <path d="M156.7,56l-2.5-4.3L56.1,149.9h8.9l92.5-92.5Z"></path>
                    <path d="M59.1,0,7.5,51.6,5,56A37.6,37.6,0,0,0,.7,67.3L68,0Z"></path>
                    <path d="M135.1,131.2l7.2-12.5-30.1,30.1A37.7,37.7,0,0,0,135.1,131.2Z"></path>
                    <path d="M26.6,18.6,20.3,29.5,48.5,1.3A37.6,37.6,0,0,0,26.6,18.6Z"></path>
                  </svg>
                </div>
              </div>
              <div id="HEADLINE270" className="ladi-element">
                <h2 className="ladi-headline">CHUYÊN GIA QUỐC TẾ COACH VAS</h2>
              </div>
            </div>
          </div>
          <div id="IMAGE261" className="ladi-element">
            <div className="ladi-image">
              <div className="ladi-image-background"></div>
            </div>
          </div>
          <div id="BOX266" className="ladi-element">
            <div className="ladi-box"></div>
          </div>
          <div id="LIST_PARAGRAPH266" className="ladi-element">
            <div className="ladi-list-paragraph">
              <ul>
                <li>
                  Nhà sáng lập Life Uni VN, chuyên gia hàng đầu châu Á và sở hữu
                  hàng loạt những bằng cấp về huấn luyện tư duy, tâm - trí - lực
                  con người hàng đầu Thế Giới.
                </li>
                <li>
                  Master Trainer có hơn 40 năm kinh nghiệm trong đào tạo và huấn
                  luyện với hơn 20 năm kinh nghiệm trong đào tạo và lập trình
                  ngôn ngữ tư duy và các ngành khoa học tâm trí khác.
                </li>
                <li>
                  Xuất thân từ Lực Lượng Vũ Trang Singapore. Với 27 năm kinh
                  nghiệm trong lĩnh vực đào tạo con người và lãnh đạo lực lượng
                  Quân đội, ông đã thúc đẩy hàng ngàn hàng ngàn người trong số
                  học thực hiện những điều to lớn mà thường ngày họ không dám
                  làm.
                </li>
                <li>
                  Mr Vas luôn cống hiến cho sự nghiệp đào tạo quý cá nhân, quý
                  tổ chức đạt được những kết quả phi thường sau khóa học, giúp
                  họ chiến thắng bản thân và luôn giữ vị trí dẫn đầu trong quý
                  cuộc tranh tài hay những trường kinh doanh khốc liệt.
                </li>
              </ul>
            </div>
          </div>
          <div id="HEADLINE272" className="ladi-element"></div>
          <div id="GROUP267" className="ladi-element">
            <div className="ladi-group">
              <div id="SHAPE266" className="ladi-element">
                <div className="ladi-shape">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="none"
                    viewBox="0 0 32 32"
                    className=""
                    fill="rgba(234, 242, 255, 1.0)"
                  >
                    <image
                      href="https://w.ladicdn.com/ladiui/icons/social/tiktok-icon.svg"
                      height="32"
                      width="32"
                    ></image>
                  </svg>
                </div>
              </div>
              <div id="SHAPE268" className="ladi-element">
                <div className="ladi-shape">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="none"
                    viewBox="0 0 1559.268 1896.0833"
                    fill="rgba(234, 242, 255, 1.0)"
                  >
                    <path d="M1451 128q35 0 60 25t25 60v1366q0 35-25 60t-60 25h-391v-595h199l30-232h-229V689q0-56 23.5-84t91.5-28l122-1V369q-63-9-178-9-136 0-217.5 80T820 666v171H620v232h200v595H85q-35 0-60-25t-25-60V213q0-35 25-60t60-25h1366z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div id="LINE260" className="ladi-element">
            <div className="ladi-line">
              <div className="ladi-line-container"></div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const renderValueProgram = () => {
    return (
      <div id="SECTION267" className="ladi-section">
        <div className="ladi-section-background"></div>
        <div className="ladi-container">
          <div id="SHAPE278" className="ladi-element">
            <div className="ladi-shape">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                preserveAspectRatio="none"
                viewBox="0 0 214.5 150"
                fill="rgba(217, 235, 255, 0.3)"
              >
                <path d="M119.7,149.8H41.8c-19.7,0-26.6-11-18.4-29.5,1.4-3.2,3.5-6.1,5.4-9.2,5.9-9.8,4.2-16.5-4.3-24.1C13.3,77,4.6,65,.8,50.1s6.8-32.3,24.5-42C52.1-6.7,76.8.4,100.1,16.2S137,54.5,146.9,79.4c7.5,18.7,17,32.9,38.5,36.6,13.1,2.3,20.7,12.2,26.7,23.8,3.9,7.7,3.7,10.3-6,10.2C177.4,149.5,148.5,149.8,119.7,149.8Z"></path>
              </svg>
            </div>
          </div>
          <div id="GROUP281" className="ladi-element">
            <div className="ladi-group">
              <div id="HEADLINE286" className="ladi-element">
                <h3 className="ladi-headline">
                  ĐẾN VỚI CHƯƠNG TRÌNH BẠN NHẬN ĐƯỢC GÌ?
                </h3>
              </div>
              <div id="SHAPE279" className="ladi-element">
                <div className="ladi-shape">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="none"
                    viewBox="0 0 92.24 127.88"
                    fill="rgba(13, 98, 242, 1)"
                  >
                    <path d="M85.08,81,17.94,95.55,0,66.47s23.52,3.87,45.83,7.61C66.22,77.51,85.59,80.82,85.08,81Z"></path>
                    <path d="M92.23,73.56,37,32.66,47.08,0S93.15,74.17,92.23,73.56Z"></path>
                    <path d="M75.43,99.76,49.89,127.88l-17.41-7.33S75.82,99.28,75.43,99.76Z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div id="GROUP282" className="ladi-element">
            <div className="ladi-group">
              <div id="BOX285" className="ladi-element">
                <div className="ladi-box"></div>
              </div>
              <div id="BOX286" className="ladi-element">
                <div className="ladi-box"></div>
              </div>
              <div id="BOX287" className="ladi-element">
                <div className="ladi-box"></div>
              </div>
              <div id="BOX288" className="ladi-element">
                <div className="ladi-box"></div>
              </div>
              <div id="SHAPE280" className="ladi-element">
                <div className="ladi-shape">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="none"
                    viewBox="0 0 150.2 150"
                    fill="rgba(217, 235, 255, 0.6)"
                  ></svg>
                </div>
              </div>
            </div>
          </div>
          <div id="GROUP284" className="ladi-element">
            <div className="ladi-group">
              <div id="BOX289" className="ladi-element">
                <div className="ladi-box"></div>
              </div>
              <div id="HEADLINE287" className="ladi-element">
                <h3 className="ladi-headline">
                  02
                  <br />
                </h3>
              </div>
              <div id="PARAGRAPH275" className="ladi-element">
                <div className="ladi-paragraph">
                  Xóa bỏ những suy nghĩ tiêu cực,
                  <br />
                  <span style={{ color: "rgb(255, 145, 77)" }}>
                    xây dựng tư duy tích cực
                  </span>
                  ,<br />
                  vượt qua thử thách
                  <span style={{ color: "rgb(255, 145, 77)" }}>
                    đối mặt với khó khăn.
                  </span>
                  <br />
                </div>
              </div>
            </div>
          </div>
          <div id="GROUP286" className="ladi-element">
            <div className="ladi-group">
              <div id="BOX290" className="ladi-element">
                <div className="ladi-box"></div>
              </div>
              <div id="HEADLINE288" className="ladi-element">
                <h3 className="ladi-headline">
                  01
                  <br />
                </h3>
              </div>
              <div id="PARAGRAPH277" className="ladi-element">
                <div className="ladi-paragraph">
                  Phát hiện ra những
                  <span style={{ color: "rgb(255, 145, 78)" }}>
                    thói quen,
                    <br />
                    tư duy xấu đang ngăn cản bạn thành công
                  </span>
                  <br />
                </div>
              </div>
              <div id="LINE262" className="ladi-element">
                <div className="ladi-line">
                  <div className="ladi-line-container"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="GROUP287" className="ladi-element">
            <div className="ladi-group">
              <div id="BOX291" className="ladi-element">
                <div className="ladi-box"></div>
              </div>
              <div id="HEADLINE290" className="ladi-element">
                <h3 className="ladi-headline">
                  03
                  <br />
                </h3>
              </div>
              <div id="PARAGRAPH279" className="ladi-element">
                <div className="ladi-paragraph">
                  <span style={{ color: "rgb(255, 145, 77)" }}>
                    Đánh giá lại cuộc sống của bạn
                  </span>
                  và khám phá những
                  <span style={{ color: "rgb(255, 145, 77)" }}>
                    khả năng tiềm tàng
                  </span>
                  mà chính bạn cũng chưa phát hiện ra
                  <br />
                </div>
              </div>
            </div>
          </div>
          <div id="GROUP289" className="ladi-element">
            <div className="ladi-group">
              <div id="BOX292" className="ladi-element">
                <div className="ladi-box"></div>
              </div>
              <div id="HEADLINE291" className="ladi-element">
                <h3 className="ladi-headline">
                  04
                  <br />
                </h3>
              </div>
              <div id="PARAGRAPH281" className="ladi-element">
                <div className="ladi-paragraph">
                  <span style={{ color: "rgb(255, 145, 77)" }}>
                    Trải nghiệm các quy trình chuyển hóa
                  </span>
                  đưa bạn quay lại trạng thái tích cực.
                  <br />
                </div>
              </div>
            </div>
          </div>
          {/**
        <div data-action="true" id="GROUP299" className="ladi-element">
        <div className="ladi-group">
          <div data-action="true" id="BUTTON274" className="ladi-element">
            <div className="ladi-button ladi-transition">
              <div className="ladi-button-background"></div>
              <div
                id="BUTTON_TEXT274"
                className="ladi-element ladi-button-headline"
              >
                <p className="ladi-headline ladi-transition">
                  ĐĂNG KÝ NGAY&nbsp; &nbsp;&nbsp;
                </p>
              </div>
            </div>
          </div>
          <div id="SHAPE290" className="ladi-element">
            <div className="ladi-shape ladi-transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                preserveAspectRatio="none"
                viewBox="0 0 218.3 140.67"
                className=""
                fill="#FFFFFF"
              >
                <polygon
                  style={{ opacity: 0.3 }}
                  points="218.3 53.34 125.91 0 125.91 106.67 218.3 53.34"
                />
                <polygon
                  style={{ opacity: 0.6 }}
                  points="155.34 53.34 62.96 0 62.96 106.67 155.34 53.34"
                />
                <polygon points="92.38 53.34 0 0 0 106.67 92.38 53.34" />
              </svg>
            </div>
          </div>
        </div>
      </div>
     */}
        </div>
      </div>
    );
  };
  const renderHeaderPrice = (data, list) => {
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
        {data?.title == "GENERAL" && <FormCountDownt date={"05/16/2024"} />}
        <div className="box-promotion py-2 mt-3 col-9">
          <h4 className="default-price">{data?.defaultPrice}</h4>
          <h3 className="promo-price">{data?.promoPrice}</h3>
          <h5 className="promo-text">{data?.promoText}</h5>
        </div>
        {list && (
          <>
            <div className="list-paragraph mt-4">
              <ul>
                {list.map((x, idx) => {
                  return <li key={idx}>{x}</li>;
                })}
              </ul>
            </div>
            <div className="d-flex  justify-content-center align-items-center text-center mt-3">
              {renderCallAction()}
            </div>
          </>
        )}
      </div>
    );
  };
  const renderPrice = () => {
    return (
      <div id="SECTION268" className="ladi-section py-5">
        <div className="ladi-section-background"></div>
        <div className="ladi-overlay"></div>
        <div className="container">
          <div className="col-md-10 offset-md-1">
            <div className="row">
              <div className="col-md-3 col-lg-3 col-xl-3 col-sm-12 ">
                <div className="row general price-box ">
                  {renderHeaderPrice(generalTicket, listBenefitGen)}
                </div>
              </div>
              <div className="col-md-5 col-lg-5 col-xl-5 col-sm-12 ">
                <div className="row vip price-box">
                  {renderHeaderPrice(vipTicket, listBenefitVip)}
                </div>
              </div>
              <div className="col-md-4 col-lg-4 col-xl-4 col-sm-12 ">
                <div className="row platinum price-box ">
                  {renderHeaderPrice(platinumTicket, listBenefitPla)}
                </div>
              </div>
            </div>
            <div className="row description mt-5">
              <h3>ƯU ĐÃI ĐẶC BIỆT KHI ĐĂNG KÝ THEO NHÓM!</h3>
              <p>
                - Gọi ngay Hotline/zalo: 0906880917; 0901883917 để được hỗ trợ
                <br />- Ngoài ra, hãy tham gia ngay nhóm Zalo để cùng tham dự
                Livestream hàng tuần miễn phí với Chuyên gia Quốc tế Coach Vas
                tại đường link dưới đây: &nbsp;
                <a href="https://zalo.me/g/keaxjv229" target="_blank">
                  https://zalo.me/g/keaxjv229
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const renderPopUp = () => {
    const style = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      // borderRadius: 10,
      // bgcolor: "background.paper",
      border: "1px solid #000",
      boxShadow: 24,
      overflow: "scroll",
      height: "100%",
      display: "block",
    };
    return (
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="popup">
            <div className="popup-background"></div>
            <div className="overlay" />
            <div className="container">
              <div className="col-12 px-5 py-5">
                <div className="row">
                  <h2>CÁM ƠN BẠN </h2>
                  <h4>ĐÃ ĐĂNG KÝ CHƯƠNG TRÌNH</h4>
                  <h3>THE FIRST STEP</h3>
                </div>
                {data?.loaive === "General" && (
                  <div className="row  price-box ">
                    {renderHeaderPrice(generalTicket)}
                  </div>
                )}
                {data?.loaive === "Platinum" && (
                  <div className="row  price-box ">
                    {renderHeaderPrice(platinumTicket)}
                  </div>
                )}
                {data?.loaive === "Vip" && (
                  <div className="row  price-box ">
                    {renderHeaderPrice(vipTicket)}
                  </div>
                )}
                <div className="row mt-4 d-flex justify-content-center">
                  <h4 style={{ color: "yellow" }}>HOÀN THÀNH ĐĂNG KÝ</h4>
                  <p className="mt-2 mb-2" style={{ lineHeight: 1.5 }}>
                    Nội dung chuyển khoản: <br />
                    {data?.first_name + " " + data?.phone + " " + data?.loaive}
                  </p>
                  <img src={qrACB} alt="image" />
                  <p className="mt-3">
                    Sau khi hoàn tất thanh toán <br />
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
                  <img src={qrZalo} alt="image" />
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
          </div>
        </Box>
      </Modal>

      //   <Box sx={style}>
      //     <div className="modal">
      //       <Typography id="modal-modal-title">

      //       </Typography>
      //     </div>
      //   </Box>
      // </Modal>
    );
    // return (
    //   <div id="SECTION_POPUP" className="ladi-section">
    //     <div className="ladi-section-background"></div>
    //     <div className="ladi-container">
    //       <div id="POPUP261" className="ladi-element">
    //         <div className="ladi-popup">
    //           <div className="ladi-popup-background"></div>
    //           <div className="ladi-overlay"></div>
    //           <div id="HEADLINE393" className="ladi-element">
    //             <h1 className="ladi-headline ladi-transition">CẢM ƠN bạn!</h1>
    //           </div>
    //           <div id="IMAGE264" className="ladi-element">
    //             <div className="ladi-image ladi-transition">
    //               <div className="ladi-image-background"></div>
    //             </div>
    //           </div>
    //           <div id="HEADLINE394" className="ladi-element">
    //             <h3 className="ladi-headline ladi-transition">
    //               Sau khi hoàn tất thanh toán
    //               <br />
    //               Bạn vui lòng
    //               <span style={{ color: "rgb(255,214,0)", fontWeight: "bold" }}>
    //                 GỬI BILL THANH TOÁN VÀO{" "}
    //               </span>
    //               <span style={{ color: "rgb(255,214,0)", fontWeight: "bold" }}>
    //                 ZALO{" "}
    //               </span>
    //               <span style={{ color: "rgb(255,214,0)", fontWeight: "bold" }}>
    //                 CSKH
    //               </span>
    //               <br />
    //             </h3>
    //           </div>
    //           <div id="IMAGE265" className="ladi-element">
    //             <div className="ladi-image ladi-transition">
    //               <div className="ladi-image-background"></div>
    //             </div>
    //           </div>
    //           <div id="HEADLINE395" className="ladi-element">
    //             <h3 className="ladi-headline ladi-transition">
    //               Trong vòng 12h CSKH sẽ liên hệ và gửi mail cho bạn để xác nhận
    //               thông tin
    //               <br />
    //             </h3>
    //           </div>
    //           <div id="IMAGE266" className="ladi-element">
    //             <div className="ladi-image ladi-transition">
    //               <div className="ladi-image-background"></div>
    //             </div>
    //           </div>
    //           <div id="HEADLINE396" className="ladi-element">
    //             <h3 className="ladi-headline">
    //               ĐÃ ĐĂNG KÝ CHƯƠNG TRÌNH
    //               <br />
    //             </h3>
    //           </div>
    //           <div id="HEADLINE397" className="ladi-element">
    //             <h3 className="ladi-headline ladi-transition">
    //               TÌM LẠI LẼ SỐNG VÀ KHÁT VỌNG THÀNH CÔNG
    //               <br />
    //             </h3>
    //           </div>
    //           <div id="HEADLINE399" className="ladi-element">
    //             <h3 className="ladi-headline ladi-transition">
    //               THÔNG TIN CHUYỂN KHOẢN
    //             </h3>
    //           </div>
    //           <div id="HEADLINE409" className="ladi-element">
    //             <h3 className="ladi-headline ladi-transition">
    //               <span style={{ fontWeight: "bold" }}>
    //                 Nôi dung chuyển khoản:
    //               </span>
    //               Hoten sdt loaive
    //               <br />
    //             </h3>
    //           </div>
    //           <div id="HEADLINE410" className="ladi-element">
    //             <h3 className="ladi-headline ladi-transition">
    //               <span style={{ fontWeight: "bold" }}>
    //                 <span style={{ textDecorationLine: "underline" }}>
    //                   Ví dụ
    //                 </span>
    //                 :
    //               </span>
    //               NguyenVanA 0123456789 VIP
    //               <br />
    //             </h3>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // );
  };
  const renderForm = () => {
    return (
      <div className="mb-5 pt-5" ref={formData}>
        <div className="ladi-section-background"></div>
        <div className="d-flex container">
          <div className="col-12">
            <div className="row mt-5">
              <div id="SHAPE102" className="ladi-element">
                <div className="ladi-shape ladi-transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="none"
                    viewBox="0 0 214.5 150"
                    fill='url("#SHAPE102_desktop_gradient")'
                  >
                    <defs id="SHAPE102_defs">
                      <linearGradient
                        id="SHAPE102_desktop_gradient"
                        gradientTransform="rotate(0)"
                      >
                        <stop
                          offset="0%"
                          stopColor="rgba(77, 124, 142, 0.8)"
                        ></stop>
                        <stop
                          offset="100%"
                          stopColor="rgba(48, 142, 125, 0.9)"
                        ></stop>
                      </linearGradient>
                    </defs>
                    <path d="M119.7,149.8H41.8c-19.7,0-26.6-11-18.4-29.5,1.4-3.2,3.5-6.1,5.4-9.2,5.9-9.8,4.2-16.5-4.3-24.1C13.3,77,4.6,65,.8,50.1s6.8-32.3,24.5-42C52.1-6.7,76.8.4,100.1,16.2S137,54.5,146.9,79.4c7.5,18.7,17,32.9,38.5,36.6,13.1,2.3,20.7,12.2,26.7,23.8,3.9,7.7,3.7,10.3-6,10.2C177.4,149.5,148.5,149.8,119.7,149.8Z"></path>
                  </svg>
                </div>
              </div>
              {/* <div id="SHAPE103" className="ladi-element">
                <div className="ladi-shape ladi-transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="none"
                    viewBox="0 0 188.1 148"
                    className=""
                    fill='url("#SHAPE103_desktop_gradient")'
                  >
                    <defs id="SHAPE103_defs">
                      <linearGradient
                        id="SHAPE103_desktop_gradient"
                        gradientTransform="rotate(77)"
                      >
                        <stop
                          offset="0%"
                          stopColor="rgba(77, 124, 142, 1.0)"
                        ></stop>
                        <stop
                          offset="100%"
                          stopColor="rgba(46, 142, 125, 1.0)"
                        ></stop>
                      </linearGradient>
                    </defs>
                    <path
                      d="M188,63.6c-1.2,28.6-14.6,50.6-35,65q-3.8,2.7-7.9,5c-21.2,12-48.2,16.8-76.1,13.3C8.5,139.4.9,80.4.9,80.4S-7.6,33.3,28.3,19.2s55,36.6,87,3.6C158.9-22.3,190.5,3.8,188,63.6Z"
                      transform="translate(0 0)"
                    ></path>
                  </svg>
                </div>
              </div> */}
              <div className="col-md-8 col-lg-8  d-flex align-items-center justify-content-center">
                <div className="row  d-flex align-items-center justify-content-center">
                  <div className="col-md-7 col-lg-7">
                    <img src={hoiTruong} alt="image" />
                  </div>
                  <div className="col-md-5 col-lg-5 py-5">
                    <FormCountDownt date={"05/26/2024"} />
                  </div>
                </div>
              </div>
              <div className="col-md-4  col-lg-4 d-flex align-items-center justify-content-center">
                <RegisterForm
                  title={"Đừng bỏ lỡ cơ hội. Đăng ký ngay!"}
                  type={"TheFirstStep"}
                  handleOpen={() => {
                    handleOpen();
                  }}
                  setData={(i) => {
                    setData(i);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="pp">
      {renderPopUp()}
      <div className="ladi-wraper">
        {bannerSection("The First Step")}
        {renderForWho()}
        {renderMrVas()}
        {renderValueProgram()}
        {renderPrice()}
        {renderForm()}
      </div>
      <section className="container testimonials">
        <TitleHomeClient
          title={t("testimonials")}
          description={t("testimonials_desc")}
          textAlign="center"
        />

        <div className="row mt-5">
          {arrayTestimonials.map((info, index) => {
            return (
              <TestimonialCard
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
      </section>
    </div>
  );
};

export default PP;
