import React, { useState } from "react";
import "./styles.scss";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import SimCardDownloadIcon from "@mui/icons-material/SimCardDownload";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import { Box, Button, Modal } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FormatNumberic from "share/formatNumber";

function OverviewCourseMedia(props) {
  const { userInfo } = useSelector((state) => state.auth);

  const { title, userData } = props;
  const navigate = useNavigate();

  const checkPermission = userInfo?.courseMedia?.find((e) => e === "tower1");
  const { handleRegister } = props;

  return (
    <div className="overview-course-media sticky">
      <p className="title-h2">{title}</p>
      <div className="break-line" />
      <div className="mt-3 d-flex">
        <MovieFilterIcon />
        <p className="ml-3">
          <b>Thời lượng:</b> 4h45p
        </p>
      </div>
      <div className="mt-3 d-flex">
        <LibraryBooksIcon />
        <p className="ml-3">
          <b>Số lượng video: </b>
          10 video
        </p>
      </div>
      <div className="mt-3 d-flex">
        <SimCardDownloadIcon />
        <p className="ml-3">
          <b>Cấp độ: </b> Cơ bản
        </p>
      </div>
      <div className="mt-3 d-flex">
        <HelpCenterIcon />
        <p className="ml-3">
          <b>Trả lời câu hỏi từng video</b>
        </p>
      </div>
      {/* <div className="mt-3 d-flex">
        <CardMembershipIcon />
        <p className="ml-3"> Certificate of completion </p>
      </div> */}
      <div className="mt-3 d-flex">
        <AccessAlarmIcon />
        <b className="ml-3">Truy cập trọn đời</b>
      </div>
      <div className="mt-3 d-flex">
        <WatchLaterIcon />
        <b className="ml-3">Học bất cứ nơi nào</b>
      </div>
      {!userData.fullPermission ? (
        <div className="mt-3 d-flex align-items-center action-purchase justify-content-around">
          <div className="">
            <p className="default-price"> $44.00</p>
            <p className="title-h3 promo-price">
              <FormatNumberic num={props.detailCourseOnline.totalPrice} />
            </p>
          </div>
          <div className="ml-5">
            <Button
              variant="contained"
              className="button-primary animate-bounce"
              style={{
                background: "yellow",
                color: "red",
                fontSize: "16px",
                fontWeight: "bold",
                borderRadius: 20,
              }}
              onClick={(e) => {
                handleRegister(e, "Full");
              }}
            >
              Đăng Ký
            </Button>
          </div>
        </div>
      ) : (
        <div className="d-flex mt-3">
          <Button
            variant="contained"
            className="button-primary"
            style={{
              background: "yellow",
              color: "red",
              fontSize: "16px",
              fontWeight: "bold",
              borderRadius: 20,
            }}
            onClick={() => {
              navigate("/chuong-trinh-huan-luyen/media/video-streaming", {
                state: { detailCourseOnline: props.detailCourseOnline },
              });
            }}
          >
            Phát Video
          </Button>
        </div>
      )}
    </div>
  );
}

export default OverviewCourseMedia;
