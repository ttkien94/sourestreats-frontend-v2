import React, { useState } from "react";
import ExcelRenderer from "./excelRenderer";
import DataStudentForm from "./dataStudentForm";
import { QRCodeCanvas } from "qrcode.react";
import { Box, Button, DialogTitle, IconButton, Modal } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import ClearIcon from "@mui/icons-material/Clear";
import FormatNumberic from "share/formatNumber";
import { getAllStudentAction } from "core/redux/actions/studentAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { cloneDeep } from "lodash";

// Action
import { createArrayStudentAction } from "core/redux/actions/studentAction";
import AlertDialog from "share/alertDialog";
function ImportData(props) {
  const [table, setTable] = useState([]);
  const [errorImport, setErrorImport] = useState(false);
  const [openAlertDialog, setOpenAlertDialog] = useState(false);
  const [dataModal, setDataModal] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const { studentList } = useSelector((state) => state.student);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllStudentAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOpenAlertDialog = (data) => {
    setOpenAlertDialog(true);
    setDataModal(data);
  };
  const handleOpen = (data) => {
    setOpenModal(true);
    setDataModal(data);
  };
  const handleClose = () => {
    setOpenModal(false);
  };

  const fileHandler = (event) => {
    let fileObj = event.target.files[0];
    //just pass the fileObj as parameter
    ExcelRenderer(fileObj, (err, resp) => {
      if (err) {
        console.log(err);
      } else {
        let res = [];
        // console.log("resp.rows", resp.rows);
        Object.keys(resp.rows).map((propKey) => {
          // let array = [];
          var obj = {};
          Object.keys(resp.rows[propKey]).map((childPropKey) => {
            // let obj = {};
            let key = resp.rows[0][childPropKey];
            let value = resp.rows[propKey][childPropKey];
            obj[key] = value;
            // array.push(obj);
          });
          let findIndex = studentList.data.findIndex(
            (x) => x.cccd === obj.cccd
          );
          //  obj["exist"] = 1 : trung vs csdl, 2: trung voi dòng khác trên file
          if (findIndex === -1) {
            obj["exist"] = 0;
            let findIndex2 = res.findIndex((x) => x.cccd === obj.cccd);
            if (findIndex2 !== -1) {
              obj["exist"] = 2;
            }
          } else {
            obj["exist"] = 1;
          }

          res[propKey] = obj;
        });
        setTable(res);
      }
    });
  };

  const handleUpdateImportData = (item) => {
    const newTable = cloneDeep(table);
    const findIndex = newTable.findIndex((x) => x.cccd === item.cccd);
    if (findIndex === -1) {
      item["exist"] = 0;
    } else {
      item["exist"] = 2;
    }
    newTable[item.STT] = item;
    setTable(newTable);
  };

  const handleDeletedItem = () => {
    const newTable = cloneDeep(table);
    const findIndex = newTable.findIndex((x) => x.cccd === dataModal.cccd);
    newTable.splice(findIndex, 1);
    setTable(newTable);
    setOpenAlertDialog(false);
  };

  const handleCreateALLStudentInList = () => {
    let findIndex = table.findIndex((x) => x.exist === 1 || x.exist === 2);
    if (findIndex !== -1) {
      setErrorImport(true);
    } else {
      setErrorImport(false);
      let arrayStudent = cloneDeep(table);
      arrayStudent.splice(0, 1);
      dispatch(createArrayStudentAction(arrayStudent));
      setTable([]);
    }
  };

  const renderModal = () => {
    const style = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 1000,
      maxHeight: "100%",
      bgcolor: "background.paper",
      border: "2px solid #000",
      boxShadow: 24,
      p: 4,
      overflow: "scroll",
    };
    return (
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{ marginTop: 20, marginBottom: 20 }}
      >
        <Box sx={style}>
          <DataStudentForm
            data={dataModal}
            setOpenModal={setOpenModal}
            isImportData={true}
            handleUpdateImportData={(item) => handleUpdateImportData(item)}
          />
        </Box>
      </Modal>
    );
  };

  const renderItem = (item, idx) => {
    // find _id exist
    // let findIndex = studentList?.data.findIndex((x) => x.cccd === item.cccd);
    return (
      <div
        key={idx}
        style={{
          backgroundColor:
            idx === 0
              ? "gray"
              : item.exist === 0
              ? "white"
              : item.exist === 1
              ? "red"
              : "yellow",
        }}
        className={idx === 0 ? "list-student-theader" : "list-student-row"}
      >
        <div className="list-student-cell">{idx ? idx : "STT"}</div>
        <div className="list-student-cell">{item.cccd && item.cccd}</div>
        <div className="list-student-cell student-min-width">
          {item.name && item.name}
        </div>
        <div className="list-student-cell student-min-width">
          {item.email && item.email}
        </div>
        <div className="list-student-cell student-min-width">
          {item.phone && item.phone}
        </div>
        <div className="list-student-cell">{item.gender && item.gender}</div>
        <div className="list-student-cell">
          {item.birthday && item.birthday}
        </div>
        <div className="list-student-cell">{item.job && item.job}</div>
        <div className="list-student-cell">{item.course && item.course}</div>
        <div className="list-student-cell">
          {item.old_student && item.old_student}
        </div>
        <div className="list-student-cell">
          {item.fee_payable && idx === 0 ? (
            item.fee_payable
          ) : (
            <FormatNumberic num={item.fee_payable} />
          )}
        </div>
        <div className="list-student-cell">
          {item.fee_have_been_paid && idx === 0 ? (
            item.fee_have_been_paid
          ) : (
            <FormatNumberic num={item.fee_have_been_paid} />
          )}
        </div>
        <div className="list-student-cell student-action">
          {idx === 0 ? (
            item.action
          ) : (
            <div>
              <IconButton
                color="secondary"
                className="flex-alignitem inline-block"
                onClick={() => handleOpen(item)}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                color="error"
                className="flex-alignitem inline-block"
                onClick={() => handleOpenAlertDialog(item)}
              >
                <ClearIcon />
              </IconButton>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="row">
      <div className="mt-3">
        <h3>Nhập dữ liệu học viên</h3>
        <input type="file" onChange={(e) => fileHandler(e)} className="my-3" />
        <p>Kiểm tra trùng học viên trên file, trong data, xóa dòng học viên</p>
        <b>
          Note: màu đỏ là trùng cccd trong dữ liệu, màu vàng là trùng cccd trong
          file
        </b>

        <div className="list-student-table mt-3">
          {renderModal()}

          <AlertDialog
            openAlertDialog={openAlertDialog}
            setOpenAlertDialog={setOpenAlertDialog}
            handleAction={handleDeletedItem}
            dataModal={dataModal}
          />
          {table.map((item, idx) => {
            return renderItem(item, idx);
          })}
        </div>
      </div>
      <div className="d-flex flex-row-reverse w-100">
        {table.length > 0 && (
          <Button
            variant="contained"
            onClick={handleCreateALLStudentInList}
            className="mt-3 "
          >
            Thêm học viên
          </Button>
        )}
      </div>
      <div className="d-flex flex-row-reverse w-100 mt-3">
        <h4 className="error" style={{ color: "red" }}>
          {errorImport && "Còn lỗi, hãy sửa lỗi trước khi thêm"}
        </h4>
      </div>
    </div>
  );
}

export default ImportData;
