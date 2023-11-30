import useSiteTitle from "core/hooks/useSiteTitle";
import React from "react";
import { useTranslation } from "react-i18next";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import DataCourseForm from "./components/dataCourseForm";
import CheckinCourse from "./components/checkinCourse";
import ListCourse from "./components/listCourse";
import "./styles.scss";
import TabView from "share/tabView/tabView";
function Course(props) {
  const { t } = useTranslation("common");
  useSiteTitle(t("student_info"));
  const tabPanel = [
    { component: <ListCourse /> },
    { component: <CheckinCourse /> },
    { component: <DataCourseForm /> },
  ];
  const tab = [
    {
      icon: <DescriptionOutlinedIcon />,
      label: "course_manager",
    },

    {
      icon: <DescriptionOutlinedIcon />,
      label: "course_checkin",
    },
    {
      icon: <AssignmentIndOutlinedIcon />,
      label: "fill_form",
    },
  ];

  return (
    <div className="container">
      <div className="course my-5 ">
        <TabView tab={tab} tabPanel={tabPanel} />
      </div>
    </div>
  );
}

export default Course;
