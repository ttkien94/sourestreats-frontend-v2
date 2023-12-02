import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
// import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import CheckboxIconSvg from "share/iconSvg/checkboxIcon";
import "./styles.scss";
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component={"span"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function Introduce(props) {
  return (
    <div className="row">
      <h4>Chúng ta không thể tồn tại một mình trên thế giới này</h4>
      <div className="space-around mt-3">
        <span>
          {/**
          <CheckboxIconSvg backgroundColor="#F0F3F8" color="#5F2DED" />   
          */}

          <CheckboxIconSvg backgroundColor="#5F2DED" color="#F0F3F8" />
        </span>
        <span className="ml-2 introduce-content">
          Mỗi ngày trôi qua chúng ta đều phải tiếp xúc với người khác: gia đình,
          bạn bè, đồng nghiệp, sếp, nhân viên, hàng xóm, người bán hàng, ... Và
          mọi vấn đề xảy ra đều bắt nguồn từ bất hòa trong các mối quan hệ này.
        </span>
      </div>
      <div className="space-around mt-3">
        <span>
          <CheckboxIconSvg backgroundColor="#5F2DED" color="#F0F3F8" />
        </span>
        <span className="ml-2 introduce-content">
          Người mà chúng ta trò chuyện nhiều nhất là chính bản thân mình. Trước
          bất kỳ quyết định nào, chúng ta cũng suy nghĩ và tự hỏi bản thân mình
          nhiều điều. Đôi lúc, ta nghĩ bụng sẽ làm nhưng rồi lại không làm, ta
          trì hoãn, ta bắt đầu mà không hoàn thành, ... Đó là lúc mối quan hệ
          với chính mình không hòa hợp.
        </span>
      </div>
      <div className="space-around mt-3">
        <span>
          <CheckboxIconSvg backgroundColor="#5F2DED" color="#F0F3F8" />
        </span>
        <span className="ml-2 introduce-content">
          Hầu hết mọi người đều nghĩ phải cần có ít nhất HAI NGƯỜI để mối quan
          hệ trở nên tốt đẹp. Ai cũng mong chờ người kia thay đổi, người kia
          hiểu mình, người kia nên làm thế này/thế kia, …Mọi quyết định luôn
          đúng ngay tại thời điểm chúng ta đưa ra quyết định. Nhưng khi có vấn
          đề xảy ra thì chúng ta thường nhìn thấy lỗi từ người khác, vì những
          yếu tố tác động bên ngoài, …Chỉ vì tin điều này, nhiều cuộc hôn nhân
          đổ vỡ, kinh doanh thất bại, chiến tranh xảy ra,... Câu hỏi tất cả
          chúng ta đặt ra là làm thế nào để thiết lập những mối quan hệ bền vững
          và hoàn hảo. Chúng ta tìm kiếm câu trả lời bằng nhiều cách khác nhau:
          đọc sách, tham gia khoá học, tìm nhà tư vấn, … Nhưng đến bây giờ, các
          mối quan hệ của chúng ta ra sao? Đâu mới là câu trả lời thực sự?
        </span>
      </div>

      {/**
          <h4 className="mt-5">Giới thiệu khóa học</h4>
          <p className="introduce-content">
            Hiểu được căn nguyên của những mối quan hệ xấu dẫn đến sự căng thẳng và
            bệnh tật như thế nào
          </p>
          <p className="introduce-content">
            Hiểu được lộ trình của các mối quan hệ tốt đang trở nên xấu dần theo
            thời gian
          </p>
          <p className="introduce-content">
            Chữa lành mối quan hệ của bản thân với CHÍNH BẢN THÂN BẠN và những người
            quan trọng trong cuộc đời bạn
          </p>
          <p className="introduce-content">
            Chữa lành mối quan hệ của bạn với Mẹ Trái Đất
          </p>
          <p className="introduce-content">
            Trải nghiệm các chuẩn đoán và tư vấn trị liệu cho những người xung
            quanh, để giúp chữa lành các mối quan hệ của họ
          </p>
          <p className="introduce-content">
            Làm thế nào để trở nên đặc biệt và sở hữu những mối quan hệ bền vững{" "}
          </p>
         */}
    </div>
  );
}

function CourseContent(props) {
  return (
    <div className="row">
      <h4>Nội dung khóa học</h4>
      <div className="space-around mt-3">
        <span className="flex-alignitem">
          <CheckboxIconSvg backgroundColor="#F0F3F8" color="#5F2DED" />
        </span>
        <span className="ml-2">
          Lorem Ipsum is simply dummying text of the printing andtypesetting
          industry most of the standard. Lorem Ipsum is simply dummying text of
          the printing andtypesetting industry most of the standard.
        </span>
      </div>
      <div className="space-around mt-3">
        <span className="flex-alignitem">
          <CheckboxIconSvg backgroundColor="#5F2DED" color="#F0F3F8" />
        </span>
        <span className="ml-2">
          Lorem Ipsum is simply dummying text of the printing andtypesetting
          industry most of the standard. Lorem Ipsum is simply dummying text of
          the printing andtypesetting industry most of the standard.
        </span>
      </div>
      <div className="space-around mt-3">
        <span className="flex-alignitem">
          <CheckboxIconSvg backgroundColor="#F0F3F8" color="#5F2DED" />
        </span>
        <span className="ml-2">
          Lorem Ipsum is simply dummying text of the printing andtypesetting
          industry most of the standard. Lorem Ipsum is simply dummying text of
          the printing andtypesetting industry most of the standard.
        </span>
      </div>
      <div className="space-around mt-3">
        <span className="flex-alignitem">
          <CheckboxIconSvg backgroundColor="#F0F3F8" color="#5F2DED" />
        </span>
        <span className="ml-2">
          Lorem Ipsum is simply dummying text of the printing andtypesetting
          industry most of the standard. Lorem Ipsum is simply dummying text of
          the printing andtypesetting industry most of the standard.
        </span>
      </div>
      <div className="space-around mt-3">
        <span className="flex-alignitem">
          <CheckboxIconSvg backgroundColor="#F0F3F8" color="#5F2DED" />
        </span>
        <span className="ml-2">
          Lorem Ipsum is simply dummying text of the printing andtypesetting
          industry most of the standard. Lorem Ipsum is simply dummying text of
          the printing andtypesetting industry most of the standard.
        </span>
      </div>
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function TabViewCourseMedia() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const { t } = useTranslation("common");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    // setValue(index);
  };

  return (
    <Box sx={{ bgcolor: "background.paper" }} className=" col-12">
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
          TabIndicatorProps={{ style: { background: "white" } }}
        >
          <Tab
            label={t("introduce")}
            icon={<DescriptionOutlinedIcon />}
            {...a11yProps(0)}
          />
          {/**
             * 
          <Tab
            label={t("course_content")}
            icon={<AssignmentIndOutlinedIcon />}
            {...a11yProps(1)}
          />
          <Tab
            label={t("evaluate")}
            icon={<StarBorderOutlinedIcon />}
            {...a11yProps(2)}
          />
             */}
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Introduce />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <CourseContent />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          {t("evaluate")}
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
