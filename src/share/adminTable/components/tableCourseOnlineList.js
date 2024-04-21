import React from "react";
import TableCell from "@mui/material/TableCell";
import LPEAvatar from "app/components/avatar";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import DeleteIcon from "@mui/icons-material/Delete";

import { Button } from "@mui/material";
import { TableRow } from "@material-ui/core";

function TableCourseOnlineList({
  dataItem,
  labelId,
  handleOpenDrawer,
  onHandleDelete,
}) {
  const handleDelete = (id) => {
    onHandleDelete && onHandleDelete(id);
  };
  return (
    <TableRow>
      <TableCell align="left">{dataItem._id}</TableCell>
      <TableCell align="left">{dataItem.name}</TableCell>
      <TableCell align="left">{dataItem.title}</TableCell>
      <TableCell align="left">{dataItem.description}</TableCell>
      <TableCell align="left">{dataItem.content}</TableCell>
      <TableCell align="left">
        {dataItem.videoList.map((item, index) => {
          return <div key={index}>{item.name + " - " + item.floor}</div>;
        })}
      </TableCell>
      <TableCell align="left">
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
      </TableCell>
    </TableRow>
  );
}

export default TableCourseOnlineList;
