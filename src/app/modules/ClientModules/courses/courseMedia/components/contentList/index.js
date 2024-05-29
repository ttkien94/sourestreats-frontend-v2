import React from "react";
import iconWillLearn from "assets/images/source/course-media/willLearn.png";
import iconForWho from "assets/images/source/course-media/forWho.png";
import RemoveIcon from "@mui/icons-material/Remove";
import Check from "@mui/icons-material/Check";
function ContentListCourseMedia(props) {
  const { willLearn, forWho } = props;
  const renderContent = (type, icon, title, array, IconUl) => {
    return (
      <div className="mt-5">
        <img src={icon} alt="" />
        {/* <div className="" style={{ color: "#0463C3" }}>
          Clear. Concise. Comprehensive.
        </div> */}
        <div className="title-h2">{title}</div>
        <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
          {array.map((item, idx) => {
            return (
              <li className="mt-2" style={{ lineHeight: "28px" }}>
                <IconUl sx={{ color: "#0463C3" }} className="mr-2" />
                {type === "willLearn" ? (
                  <span>
                    <b>{item.title}:</b> {item.content}
                  </span>
                ) : (
                  item
                )}
              </li>
            );
          })}
        </ul>
        {type === "willLearn" ? (
          <div className="description-gray">
            Tham gia khóa học này để trang bị cho mình những kiến thức và công
            cụ cần thiết nhằm cải thiện cuộc sống, đạt được mục tiêu và phát
            triển bản thân một cách toàn diện bạn nhé!
          </div>
        ) : (
          <b>
            Khóa học này phù hợp với mọi đối tượng mong muốn phát triển bản
            thân, từ chuyên gia, sinh viên, nhà tư vấn đến những người tìm kiếm
            sự tự cải thiện. Nó cung cấp các công cụ và kiến thức cần thiết để
            đạt được thành tích cao, quản lý cảm xúc, xây dựng mối quan hệ lành
            mạnh và sử dụng trí tưởng tượng để định hình tương lai.
          </b>
        )}
      </div>
    );
  };
  return (
    <div className="">
      {renderContent(
        "willLearn",
        iconWillLearn,
        "Bạn sẽ tìm hiểu về:",
        willLearn,
        Check
      )}
      {renderContent(
        "forWho",
        iconForWho,
        "Khóa học dành cho ai",
        forWho,
        RemoveIcon
      )}
    </div>
  );
}

export default ContentListCourseMedia;
