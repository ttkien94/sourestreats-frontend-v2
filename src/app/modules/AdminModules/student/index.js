import React from "react";
import TabView from "share/tabView/tabView";
// import emailjs from "@emailjs/browser";
// import SendEmail from "share/sendEmail";
// import CheckboxIconSvg from "share/iconSvg/checkboxIcon";
// import { useDispatch, useSelector } from "react-redux";
// import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
// import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import DataStudentForm from "./components/dataStudentForm";

import useSiteTitle from "core/hooks/useSiteTitle";
import ListStudent from "./components/listStudent";

import "./styles.scss";
import ImportData from "./components/importData";
import { useTranslation } from "react-i18next";

function Student() {
  const { t } = useTranslation("common");
  useSiteTitle(t("student_info"));
  const tabPanel = [
    { component: <ListStudent /> },
    { component: <ImportData /> },
    { component: <DataStudentForm /> },
  ];
  const tab = [
    {
      icon: <DescriptionOutlinedIcon />,
      label: "student_info",
    },

    {
      icon: <DescriptionOutlinedIcon />,
      label: "import_data",
    },
    {
      icon: <AssignmentIndOutlinedIcon />,
      label: "fill_form",
    },
  ];

  return (
    <div className="container">
      <div className="import-data-checkin my-5 ">
        <TabView tab={tab} tabPanel={tabPanel} />
      </div>
    </div>
  );
}

export default Student;
