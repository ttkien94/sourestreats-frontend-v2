import {
  getCourseOnlineAction,
  getDetailCourseOnlineAction,
} from "core/redux/actions/courseOnlineAction";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SingleCourseMedia from "../components/singleCourseMedia";

function Tower1() {
  const { detailCourseOnline, loading } = useSelector(
    (state) => state.courseOnline
  );
  console.log("detailCourseOnline", detailCourseOnline);
  const dispatch = useDispatch();
  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Fetch Table Data
  const loadData = () => {
    dispatch(getDetailCourseOnlineAction("665311152f6302044cdf7be4"));
  };

  return detailCourseOnline &&
    detailCourseOnline.lesson &&
    detailCourseOnline.lesson.length > 0 ? (
    <SingleCourseMedia
      name={detailCourseOnline.name}
      numberSudentRate={19.218}
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
      learnerReview={[
        { title: "Exceeded", rate: 90 },
        { title: "Yes", rate: 40 },
        { title: "Somewhat", rate: 60 },
        { title: "Not Really", rate: 33 },
        { title: "No", rate: 0 },
      ]}
    />
  ) : (
    <></>
  );
}

export default Tower1;
