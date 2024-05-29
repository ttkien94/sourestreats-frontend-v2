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
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import _ from "lodash";

function OverviewCourseMedia(props) {
  const { userInfo } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const title = props.title;
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem("accessToken");
  const handleRegister = async (e) => {
    e.preventDefault();
    if (!token) {
      navigate("/dang-nhap", { state: { from: location } });
    } else {
      // xác nhận thông tin & chuyển tới cskh

      const data = _.cloneDeep(userInfo);

      data["tags"] = ["register-tower1"];
      data["import_by_tag_name"] = true;
      await axios({
        method: "POST",
        url: "https://api.service.ladiflow.com/1.0/customer/create-or-update",
        headers: {
          "Api-Key": "a21928473afdf60440c8adddec916036aac285ce560b0133",
        },
        data,
      })
        .then((response) => {
          console.log("response", response);
          setOpenModal(true);
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
        });
    }
  };
  const checkPermission = userInfo?.courseMedia?.find((e) => e === "tower1");
  const handleClose = () => {
    setOpenModal(false);
  };
  const renderModal = () => {
    const style = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 1000,
      maxHeight: "100%",
      bgcolor: "background.paper",
      border: "2px solid #000",
      boxShadow: 24,
      p: 4,
    };
    return (
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{ marginTop: 20, marginBottom: 20 }}
      >
        <Box sx={style}>
          <div className="title-h2">
            Cám ơn bạn đã đăng ký. Soul retreats sẽ phản hồi trong vòng 24h làm
            việc
          </div>
        </Box>
      </Modal>
    );
  };
  return (
    <div className="overview-course-media sticky">
      {renderModal()}
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
      {!checkPermission ? (
        <div className="mt-3 d-flex align-items-center action-purchase justify-content-around">
          <div className="">
            <p className="default-price"> $44.00</p>
            <p className="title-h2 promo-price">$29.99</p>
          </div>
          <div className="ml-5">
            <Button
              variant="contained"
              sx={{ borderRadius: 20, p: 1, pl: 5, pr: 5 }}
              onClick={(e) => {
                handleRegister(e);
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
            sx={{
              borderRadius: 20,
              p: 1,
              pl: 5,
              pr: 5,
              backgroundColor: "green",
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
