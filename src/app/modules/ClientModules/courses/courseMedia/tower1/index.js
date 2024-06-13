import axios from "axios";
import _ from "lodash";
import {
  getCourseOnlineAction,
  getDetailCourseOnlineAction,
} from "core/redux/actions/courseOnlineAction";
import { getDetailScheduleCourseOnlineAction } from "core/redux/actions/scheduleCourseOnlineAction";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import SingleCourseMedia from "../components/singleCourseMedia";
import { Modal } from "@mui/base";
import { Box } from "@mui/material";
import Loading from "share/loading";
import { useTranslation } from "react-i18next";
import useSiteTitle from "core/hooks/useSiteTitle";

function Tower1() {
  const [userData, setUserData] = useState({});
  const { t } = useTranslation("common");
  useSiteTitle(t("course_media"));
  // const { detailCourseOnline } = useSelector((state) => state.courseOnline);
  const [detailCourseOnline, setDetailCourseOnline] = useState({});
  const { detailScheduleCourseOnline } = useSelector(
    (state) => state.scheduleCourseOnline
  );
  const { userInfo } = useSelector((state) => state.auth);
  const token = localStorage.getItem("accessToken");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    loadData();
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    console.log("detailScheduleCourseOnline", detailScheduleCourseOnline);
    if (userInfo) {
      if (detailScheduleCourseOnline?.studentList?.length > 0) {
        detailScheduleCourseOnline.studentList.forEach((ele) => {
          ele._id === userInfo._id && setUserData(ele);
        });
      }
    }
    if (detailScheduleCourseOnline?.courseOnline?.length > 0) {
      setDetailCourseOnline(detailScheduleCourseOnline.courseOnline[0]);
    }
  }, [detailScheduleCourseOnline]);
  // Fetch Table Data
  const loadData = () => {
    dispatch(getDetailScheduleCourseOnlineAction("6668158eff4b143bd4cc6a16"));
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleRegister = async (e, pharse) => {
    e.preventDefault();
    if (!token) {
      navigate("/dang-nhap", { state: { from: location } });
    } else {
      // xác nhận thông tin & chuyển tới cskh
      const data = _.cloneDeep(userInfo);
      data["tags"] = ["register-tower1", pharse];
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
          console.log(err);
        });
    }
  };

  const handleRedirect = (pharseIndex, videoIndex) => {
    navigate("/chuong-trinh-huan-luyen/media/video-streaming/_id=", {
      state: {
        from: location,
        data: userInfo ? userData : detailCourseOnline,
        pharseIndex: pharseIndex,
        videoIndex: videoIndex,
      },
    });
  };
  const renderModal = () => {
    const style = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      // width: 1000,
      // maxHeight: "100%",
      bgcolor: "background.paper",
      border: "2px solid #000",
      boxShadow: 24,
      p: 4,
      zIndex: 9999,
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

  return detailCourseOnline &&
    detailCourseOnline.lesson &&
    detailCourseOnline.lesson.length > 0 ? (
    <>
      <SingleCourseMedia
        name={detailCourseOnline.name}
        handleRegister={(e, pharse) => handleRegister(e, pharse)}
        numberSudentRate={168}
        description={detailCourseOnline.description}
        willLearn={[
          {
            title: "Thành Tích",
            content:
              "Hiểu rõ những yếu tố cần thiết để đạt được thành tích đỉnh cao và cách tạo ra mục đích, ý nghĩa cho cuộc sống của bạn.",
          },
          {
            title: "Bí Mật của Ba Tâm Trí",
            content:
              "Tìm hiểu về ba phần quan trọng của tâm trí và cách chúng tương tác để ảnh hưởng đến quyết định và hành vi của bạn.",
          },
          {
            title: "Sức Mạnh của Trí Tưởng Tượng",
            content:
              "Khám phá cách sử dụng trí tưởng tượng để định hình tương lai và hiện thực hóa các mục tiêu của bạn.",
          },
          {
            title: "Mô Hình Mắt",
            content:
              "Hiểu về mô hình mắt và cách nó phản ánh trạng thái tinh thần và cảm xúc của bạn.",
          },
          {
            title: "Kiểm Soát Cảm Xúc",
            content:
              "Học cách kiểm soát và quản lý cảm xúc để duy trì trạng thái tinh thần tích cực và ổn định.",
          },
          {
            title: "Mối Quan Hệ",
            content:
              "Khám phá cấu trúc của các mối quan hệ trong cuộc sống và học cách xây dựng, duy trì mối quan hệ lành mạnh và ý nghĩa.",
          },
        ]}
        forWho={[
          "Nhân viên văn phòng",
          "Nhà lãnh đạo, quản lý",
          "Học sinh, sinh viên muốn thành công",
          "Nhà tư vấn, Chuyên gia tâm lý",
          "Người muốn phát triển bản thân",
        ]}
        detailCourseOnline={detailCourseOnline}
        handleRedirect={(pharseIndex, videoIndex) =>
          handleRedirect(pharseIndex, videoIndex)
        }
        userData={userData}
        learnerReview={[
          { title: "Exceeded", rate: 90 },
          { title: "Yes", rate: 40 },
          { title: "Somewhat", rate: 60 },
          { title: "Not Really", rate: 33 },
          { title: "No", rate: 0 },
        ]}
      />
      {renderModal()}
    </>
  ) : (
    // chưa xử lý loading
    <Loading></Loading>
  );
}

export default Tower1;
