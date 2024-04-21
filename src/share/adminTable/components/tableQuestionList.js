import React from "react";
import TableCell from "@mui/material/TableCell";
import LPEAvatar from "app/components/avatar";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import { TableRow } from "@material-ui/core";

function TableQuestionList(props) {
  const { dataItem, labelId, handleOpenDrawer, onHandleDelete, index, type } =
    props;
  const handleDelete = (question_id) => {
    onHandleDelete && onHandleDelete(question_id);
  };
  return (
    <TableRow key={index}>
      <TableCell align="left">{index ? index + 1 : 1}</TableCell>
      <TableCell align="left">{dataItem.question}</TableCell>
      {type !== "videoManager" && (
        <>
          <TableCell align="left">
            {dataItem.options.map((option, i) => {
              return <div key={i}>{option.value}</div>;
            })}
          </TableCell>
          <TableCell align="left">
            {dataItem.options.map((option, i) => {
              return option.answer === true && option.value;
            })}
          </TableCell>
        </>
      )}

      <TableCell align="left">
        {type !== "videoManager" && (
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
      </TableCell>
    </TableRow>
  );
}

export default TableQuestionList;
