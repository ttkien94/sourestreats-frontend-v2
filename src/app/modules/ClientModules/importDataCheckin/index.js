import React, { useState } from "react";
import { ExcelRenderer, OutTable } from "./components/outTable";
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
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import useSiteTitle from "core/hooks/useSiteTitle";
import ListStudent from "./components/listStudent";

import "./styles.scss";

function ImportData(props) {
  const [table, setTable] = useState([]);
  const fileHandler = (event) => {
    let fileObj = event.target.files[0];
    //just pass the fileObj as parameter
    ExcelRenderer(fileObj, (err, resp) => {
      if (err) {
        console.log(err);
      } else {
        let res = [];

        Object.keys(resp.rows).map((propKey) => {
          let array = [];
          Object.keys(resp.rows[propKey]).map((childPropKey) => {
            let obj = {};
            let key = resp.rows[0][childPropKey];
            let value = resp.rows[propKey][childPropKey];
            obj[key] = value;
            array.push(obj);
          });
          res[propKey] = array;
        });
        setTable(res);
      }
    });
  };
  return (
    <div className="row">
      <div className="mt-3">
        <h3>Nhập dữ liệu học viên</h3>
        <input type="file" onChange={(e) => fileHandler(e)} className="my-3" />
        <p>Kiểm tra trùng học viên, xóa dòng học viên</p>
        <OutTable
          data={table}
          tableClassName="ExcelTable2007"
          tableHeaderRowClass="tableHeaderRowClass"
          // withZeroColumn={true}
          // withoutRowNum={true}
          // withZeroColumn={true}
          tableHeader="tableHeader"
        />
      </div>
    </div>
  );
}

function FillForm(props) {
  const [table, setTable] = useState({ cols: [], rows: [] });

  return (
    <div className="row">
      <div className="mt-3">
        <DataStudentForm setTable={setTable} />
        <OutTable
          data={table.rows}
          columns={table.cols}
          tableClassName="ExcelTable2007"
          tableHeaderRowClass="tableHeaderRowClass"
          tableHeader="tableHeader"
        />
      </div>
    </div>
  );
}

function QRScanCode(props) {
  const [data, setData] = useState("");
  const [torchOn, setTorchOn] = useState(false);
  return (
    <div>
      <BarcodeScannerComponent
        width={500}
        height={500}
        torch={torchOn}
        onUpdate={(err, result) => {
          if (result) setData(result.text);
          else setData("Not Found");
        }}
      />
      <p>{data}</p>
      <button onClick={() => setTorchOn(!torchOn)}>
        Switch Torch {torchOn ? "Off" : "On"}
      </button>
    </div>
  );
}
function ImportDataCheckin() {
  useSiteTitle("account_detail");
  const tabPanel = [
    { component: <ListStudent /> },
    { component: <QRScanCode /> },
    { component: <ImportData /> },
    { component: <FillForm /> },
  ];
  const tab = [
    {
      icon: <DescriptionOutlinedIcon />,
      label: "all_data_student",
    },
    {
      icon: <DescriptionOutlinedIcon />,
      label: "qr_scan_code",
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

export default ImportDataCheckin;
