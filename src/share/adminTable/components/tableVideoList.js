import React from "react";
import TableCell from "@mui/material/TableCell";
import LPEAvatar from "app/components/avatar";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import { TableRow } from "@material-ui/core";

function TableVideoList({
  dataItem,
  labelId,
  handleOpenDrawer,
  onHandleDelete,
  addUserToCourse,
  handleAddUserToCourse,
  key,
}) {
  const handleDelete = (id) => {
    onHandleDelete && onHandleDelete(id);
  };
  console.log("dataItem.questionList", dataItem.questionList);
  return (
    <TableRow key={key}>
      <TableCell align="left">{key ? key + 1 : 1}</TableCell>
      <TableCell align="left">{dataItem.name}</TableCell>
      <TableCell align="left" width="10%">
        {dataItem.url}
      </TableCell>
      <TableCell align="left">
        {dataItem.questionList.map((question, index) => {
          return <div key={index}>{question.question}</div>;
        })}
      </TableCell>
      <TableCell align="left">
        {addUserToCourse ? (
          <Button
            variant="outlined"
            onClick={() => {
              handleAddUserToCourse(dataItem);
            }}
            startIcon={<AddIcon />}
          >
            Thêm
          </Button>
        ) : (
          <div>
            <Button
              variant="outlined"
              startIcon={<ModeEditOutlinedIcon />}
              onClick={() => {
                handleOpenDrawer && handleOpenDrawer(dataItem);
              }}
            >
              Chỉnh sửa
            </Button>

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
        )}
      </TableCell>
    </TableRow>
  );
}

export default TableVideoList;
