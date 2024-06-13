import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import { Button } from "@mui/material";
import React from "react";

function AlertDialog(props) {
  const { handleAction, openAlertDialog, setOpenAlertDialog, type } = props;

  const handleCloseAlertDialog = () => {
    setOpenAlertDialog(false);
  };
  return (
    <Dialog
      open={openAlertDialog}
      // TransitionComponent={Transition}
      keepMounted
      onClose={handleCloseAlertDialog}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle style={{ paddingBottom: 0 }}>Cảnh Báo</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Bạn có chắc chắn
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseAlertDialog}>Hủy Bỏ</Button>
        <Button onClick={() => handleAction(type)} color="error">
          Xác Nhận
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AlertDialog;
