import React, { useState } from "react";
import { ExcelRenderer, OutTable } from "./outTable";
import SendEmail from "share/sendEmail";
import "./styles.scss";
import emailjs from "@emailjs/browser";
import TabView from "share/tabView/tabView";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
// import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import CheckboxIconSvg from "share/iconSvg/checkboxIcon";
import DataStudentForm from "./components/dataStudentForm";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
function ImportData(props) {
  const [table, setTable] = useState({
    cols: [
      { name: "A", key: 0 },
      { name: "B", key: 1 },
      { name: "C", key: 2 },
      { name: "D", key: 3 },
      { name: "E", key: 4 },
      { name: "F", key: 5 },
      { name: "G", key: 6 },
      { name: "H", key: 7 },
      { name: "I", key: 8 },
      { name: "J", key: 9 },
      { name: "K", key: 10 },
    ],
    rows: [
      [
        "STT",
        "cccd",
        "name",
        "email",
        "sdt",
        "giới tính",
        "năm sinh",
        "nghề",
        "Khóa học",
        "Học viên cũ",
        "hinh ảnh",
      ],
      [
        1,
        "094038001905",
        "trịnh trung kiên 1",
        "ttkien94@gmail.com",
        "0383204367",
        "nam",
        1994,
        "IT",
        "dragon",
        "cb06",
      ],
    ],
  });
  const fileHandler = (event) => {
    let fileObj = event.target.files[0];
    //just pass the fileObj as parameter
    console.log("fileObj;", fileObj);
    ExcelRenderer(fileObj, (err, resp) => {
      if (err) {
        console.log(err);
      } else {
        console.log("resp", resp.cols, resp.rows);
        setTable({
          cols: resp.cols,
          rows: resp.rows,
        });
      }
    });
  };
  return (
    <div className="row">
      <div className="mt-3">
        <h3>Nhập dữ liệu học viên</h3>
        <OutTable
          data={table.rows}
          columns={table.cols}
          tableClassName="ExcelTable2007"
          tableHeaderRowClass="tableHeaderRowClass"
          // withZeroColumn={true}
          // withoutRowNum={true}
          // withZeroColumn={true}
          tableHeader="tableHeader"
        />
        <input type="file" onChange={(e) => fileHandler(e)} className="mt-3" />
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

function AllData(props) {
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
  const tabPanel = [
    { component: <AllData /> },
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
      label: "import_data",
    },
    {
      icon: <AssignmentIndOutlinedIcon />,
      label: "fill_form",
    },
  ];
  // const ExcelDateToJSDate = (date) => {
  //   let converted_date = new Date(Math.round((date - 25569) * 864e5));
  //   converted_date = String(converted_date).slice(4, 15);
  //   date = converted_date.split(" ");
  //   let day = date[1];
  //   let month = date[0];
  //   month = "JanFebMarAprMayJunJulAugSepOctNovDec".indexOf(month) / 3 + 1;
  //   if (month.toString().length <= 1) month = "0" + month;
  //   let year = date[2];
  //   return String(day + "-" + month + "-" + year.slice(2, 4));
  // };

  return (
    <div className="container">
      <div className="import-data-checkin my-5 ">
        <TabView tab={tab} tabPanel={tabPanel} />
      </div>
    </div>
  );
}

export default ImportDataCheckin;
