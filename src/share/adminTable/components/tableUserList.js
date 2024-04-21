import React from "react";
import TableCell from "@mui/material/TableCell";
import LPEAvatar from "app/components/avatar";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import { TableRow } from "@material-ui/core";

function TableUserList({
  dataItem,
  labelId,
  handleOpenDrawer,
  onHandleDelete,
  addUserToCourse,
  handleAddUserToList,
  type,
}) {
  const handleDelete = (id) => {
    onHandleDelete && onHandleDelete(id);
  };

  return (
    <TableRow>
      <TableCell component="th" id={labelId} scope="row" padding="none">
        <LPEAvatar avatar={dataItem.avatar} name={dataItem.name} />
      </TableCell>
      <TableCell align="left">{dataItem.email}</TableCell>
      <TableCell align="left">{dataItem.phone}</TableCell>
      <TableCell align="left">
        <div
          className={`${
            dataItem.role === "admin" ? "admin-style" : "client-style"
          } role-item`}
        >
          <p>{dataItem.role}</p>
        </div>
      </TableCell>
      <TableCell align="left">
        {addUserToCourse ? (
          <Button
            variant="outlined"
            onClick={() => {
              handleAddUserToList(dataItem);
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
        )}
      </TableCell>
    </TableRow>
  );
}

export default TableUserList;
