import React, { useState } from "react";
import TableCell from "@mui/material/TableCell";
import LPEAvatar from "app/components/avatar";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { Box, Button, Modal } from "@mui/material";
import { TableRow } from "@material-ui/core";
import AlertDialog from "share/alertDialog";
import { useEffect } from "react";
import { render } from "@testing-library/react";

function TableUserList({
  dataItem,
  labelId,
  handleOpenDrawer,
  onHandleDelete,
  addUserToCourse,
  handleAddUserToList,
  type,
  handleOpenDialog,
}) {
  const [data, setData] = useState(dataItem);
  const [openModal, setOpenModal] = useState(false);
  const [dataModal, setDataModal] = useState({});
  useEffect(() => {
    setData(dataItem);
  }, [dataItem]);
  const handleDelete = (id) => {
    onHandleDelete && onHandleDelete(id);
  };
  const handleClose = () => {
    setOpenModal(false);
  };
  console.log("dataModal", dataModal);
  const renderModal = () => {
    const style = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      // width: 1000,
      maxHeight: "100%",
      bgcolor: "background.paper",
      border: "1px solid #000",
      boxShadow: 24,
      p: 4,
      zIndex: 9999,
      overflow: "auto",
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
          <div className="title-h1 d-flex align-items-center justify-content-center">
            {dataModal.pharse}
          </div>
          <div>
            {dataModal.videoList?.length > 0 &&
              dataModal.videoList.map((vid) => {
                return (
                  <div key={vid._id} className="mb-5">
                    <p className="title-h3">{vid.name}</p>
                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        {vid.questionList?.length > 0 &&
                          vid.questionList.map((ques) => {
                            return <div key={ques._id}>{ques.question} </div>;
                          })}
                      </div>
                      <div>
                        {vid.answerList?.length > 0 ? (
                          vid.answerList.map((ans, idx) => {
                            return (
                              <div key={idx}>
                                {ans.value} - {ans.answer ? "đúng" : "sai"}
                              </div>
                            );
                          })
                        ) : (
                          <>Chưa trả lời câu hỏi</>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </Box>
      </Modal>
    );
  };
  const renderPermission = (lesson) => {
    return lesson.map((pharse, index) => {
      return (
        <p className="d-flex align-items-center" key={index}>
          <span style={{ width: "100px" }}>
            {pharse.pharse + " : " + pharse.permission}
          </span>
          <Button
            disabled={index === 0 ? true : false}
            variant="outlined"
            className="mx-3"
            color={pharse.permission ? "error" : "primary"}
            onClick={() => {
              handleOpenDialog({ data, pharse, pharseIndex: index });
            }}
          >
            Thay đổi
          </Button>
          <Button
            variant="outlined"
            startIcon={<ModeEditOutlinedIcon />}
            onClick={() => {
              setOpenModal(true);
              setDataModal(pharse);
            }}
          >
            Chỉnh sửa
          </Button>
        </p>
      );
    });
  };
  return (
    data && (
      <TableRow>
        <TableCell component="th" id={labelId} scope="row">
          <LPEAvatar avatar={data.avatar} name={data.name} />
        </TableCell>
        <TableCell align="left">{data.email}</TableCell>
        <TableCell align="left">{data.phone}</TableCell>
        <TableCell align="left">
          {type === "scheduleCourseOnline" ? (
            <>
              {data.fullPermission
                ? "Toàn Quyền"
                : renderPermission(data.lesson)}
            </>
          ) : (
            <span
              className={`${
                data.role === "admin" ? "admin-style" : "client-style"
              } role-item`}
            >
              {data.role}
            </span>
          )}
        </TableCell>

        <TableCell align="left">
          {addUserToCourse ? (
            <Button
              variant="outlined"
              onClick={() => {
                handleAddUserToList(data);
              }}
              startIcon={<AddIcon />}
            >
              Thêm
            </Button>
          ) : (
            <div>
              {type === "userManager" && (
                <Button
                  variant="outlined"
                  startIcon={<ModeEditOutlinedIcon />}
                  onClick={() => {
                    handleOpenDrawer && handleOpenDrawer(data);
                  }}
                >
                  Chỉnh sửa
                </Button>
              )}

              <Button
                variant="outlined"
                startIcon={<DeleteIcon />}
                className="ml-3"
                color="error"
                onClick={() => {
                  handleDelete(data._id);
                }}
              >
                Xóa
              </Button>
            </div>
          )}
        </TableCell>
        {renderModal()}
      </TableRow>
    )
  );
}

export default TableUserList;
