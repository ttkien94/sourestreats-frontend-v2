import React from "react";
import TableCell from "@mui/material/TableCell";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import DeleteIcon from "@mui/icons-material/Delete";

import { Button } from "@mui/material";
import { TableRow } from "@material-ui/core";
import { convertFullDate, unixToTime } from "core/utils/dateUtil";

function TableScheduleCourseOnline({
  dataItem,
  labelId,
  handleOpenDrawer,
  onHandleDelete,
}) {
  const handleDelete = (id) => {
    onHandleDelete && onHandleDelete(id);
  };
  let startTime = convertFullDate(unixToTime(dataItem.startTime), "DD-MM-yyyy");
  let endTime = convertFullDate(unixToTime(dataItem.endTime), "DD-MM-yyyy");
  return (
    <TableRow>
      <TableCell align="left">{dataItem._id}</TableCell>
      <TableCell align="left">
        {dataItem.courseOnline &&
          dataItem.courseOnline.length > 0 &&
          dataItem.courseOnline[0].name}
      </TableCell>
      <TableCell align="left">{startTime}</TableCell>
      <TableCell align="left">{endTime}</TableCell>

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

export default TableScheduleCourseOnline;
