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
      <h4>Vì sao bạn chọn Khóa học này?</h4>
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

export default function TabViewCourseOnline() {
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
    <Box sx={{ bgcolor: "background.paper" }} className="mt-5 col-12">
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
