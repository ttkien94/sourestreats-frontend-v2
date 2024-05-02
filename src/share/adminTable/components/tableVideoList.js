import React from "react";
import TableCell from "@mui/material/TableCell";
// import LPEAvatar from "app/components/avatar";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
// import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import { TableRow } from "@material-ui/core";

function TableVideoList({
  dataItem,
  labelId,
  handleOpenDrawer,
  onHandleDelete,
  index,
  type,
}) {
  const handleDelete = (id) => {
    onHandleDelete && onHandleDelete(id);
  };
  return (
    <TableRow key={index}>
      <TableCell align="left">{index ? index + 1 : 1}</TableCell>
      <TableCell align="left">{dataItem.name}</TableCell>
      {type !== "createCourseOnline" ? (
        <>
          <TableCell align="left" width="10%">
            {dataItem.url}
          </TableCell>
          <TableCell align="left">
            {dataItem.questionList.map((question, index) => {
              return <div key={index}>{question.question}</div>;
            })}
          </TableCell>
        </>
      ) : (
        <TableCell align="left" width="10%">
          {dataItem.floor}
        </TableCell>
      )}
      <TableCell align="left">
        <div>
          {type !== "createCourseOnline" && (
            <Button
              variant="outlined"
              startIcon={<ModeEditOutlinedIcon />}
              onClick={() => {
                handleOpenDrawer && handleOpenDrawer(dataItem);
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
              handleDelete(dataItem._id);
            }}
          >
            Xóa
          </Button>
        </div>
      </TableCell>
    </TableRow>
  );
}

export default TableVideoList;
