import React from "react";
import TabView from "share/tabView/tabView";
import QRScanCode from "./components/QRScanCode";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
function Course() {
  const tabPanel = [
    { component: <QRScanCode /> },
    { component: <QRScanCode /> },
    { component: <QRScanCode /> },
  ];
  const tab = [
    {
      icon: <DescriptionOutlinedIcon />,
      label: "student_info",
    },
    {
      icon: <DescriptionOutlinedIcon />,
      label: "qr_scan_code",
    },
    {
      icon: <AssignmentIndOutlinedIcon />,
      label: "fill_form",
    },
  ];
  return <TabView tab={tab} tabPanel={tabPanel} />;
}

export default Course;
