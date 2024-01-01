import React from "react";
import { Avatar } from "@mui/material";
import "./styles.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
function TeacherCourseOnline(props) {
  const { name, avatar } = props;
  const ImageAvatar = () => {
    return (
      <div className="mb-3">
        <div className="image-avatar">
          <Avatar
            alt={name && name}
            src={avatar && avatar}
            sx={{ width: 95, height: 95, background: "gray" }}
          />
        </div>
        <div className="mt-3 avatar-name">{name}</div>
        <div className="mt-1 avatar-job">Master Trainer</div>
        <div className="mt-3 avatar-description">
          Một ngày nào đó, toàn thể nhân loại đã được tốt nghiệp Đại Học Cuộc
          Đời. Họ đang sống mỗi khoảnh khắc trong mừng vui và phước lành"
        </div>
        <div className="mt-3 avatar-social">
          <a
            href="https://www.facebook.com/vasanth.gopalan.1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon color="primary" className="mr-1" />
          </a>
          <TwitterIcon className="mr-1" />
          <YouTubeIcon />
        </div>
      </div>
    );
  };
  return (
    <div className="col-md-12 ">
      <div className="teacher-course-online box-center py-3 px-4 ">
        {avatar ? <ImageAvatar avatar={avatar} name={name} /> : <ImageAvatar />}
      </div>
    </div>
  );
}

export default TeacherCourseOnline;
