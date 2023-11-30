import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getStudentAction,
  getMoreStudentAction,
  deleteStudentAction,
} from "core/redux/actions/studentAction";
import SearchBar from "share/searchBar";
import { Box, Button, DialogTitle, IconButton, Modal } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import ClearIcon from "@mui/icons-material/Clear";
import DataStudentForm from "./dataStudentForm";
import FlatList from "flatlist-react";
import IsLoading from "app/components/loading";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@material-ui/core";

let page = 1;
let limit = 10;
function ListStudent() {
  const dispatch = useDispatch();
  const { studentList, hasMoreItems } = useSelector((state) => state.student);
  const [dataModal, setDataModal] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [txtSearch, setTxtSearch] = useState("");
  const [openAlertDialog, setOpenAlertDialog] = useState(false);

  const headerTable = {
    stt: "STT",
    cccd: "CCCD",
    name: "Tên Khóa Học",
    from: "FROM",
    email: "Email",
    phone: "SDT",
    gender: "Giới Tính",
    birthday: "Năm Sinh",
    job: "Nghề Nghiệp",
    course: "Khóa Học",
    during: "Thời Gian Diễn Ra",
    action: "Hành Động",
  };

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [txtSearch]);

  useEffect(() => {
    console.log("studentList:", studentList, hasMoreItems);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [studentList]);

  const handleOpen = (data) => {
    setDataModal(data);
    setOpenModal(true);
  };
  const handleOpenAlertDialog = (data) => {
    setDataModal(data);
    setOpenAlertDialog(true);
  };

  const handleClose = () => setOpenModal(false);
  const handleCloseAlertDialog = () => setOpenAlertDialog(false);

  const handleDeletedStudent = () => {
    dispatch(deleteStudentAction(dataModal));
    handleCloseAlertDialog();
  };

  const _evtChangeText = (txt) => {
    setTxtSearch(txt);
  };
  const loadData = () => {
    let query = txtSearch ? `&query=${txtSearch}` : "";
    page = 1;
    dispatch(getStudentAction(query));
  };

  const loadMoreData = () => {
    console.log("loadMoreData");
    if (hasMoreItems) {
      try {
        page = page + 1;
        let query = txtSearch ? `&query=${txtSearch}` : "";
        dispatch(getMoreStudentAction(query, page, limit));
      } catch (error) {}
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
            isUpdate={true}
          />
        </Box>
      </Modal>
    );
  };

  // const Transition = React.forwardRef(function Transition(props, ref) {
  //   return <Slide direction="up" ref={ref} {...props} />;
  // });

  const renderAlertDialog = () => {
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
            Bạn có chắc chắn xóa học viên {dataModal.name}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAlertDialog}>Hủy Bỏ</Button>
          <Button onClick={handleDeletedStudent} color="error">
            Xác Nhận
          </Button>
        </DialogActions>
      </Dialog>
    );
  };
  const renderNodata = () => {
    return (
      <div>
        <div colSpan="9" style={{ textAlign: "center" }}>
          <h4 className="my-3">Nodata</h4>
        </div>
      </div>
    );
  };
  const renderItem = (item, idx, isHeader) => {
    let num = parseInt(idx) + 1;
    return (
      <div
        key={idx}
        style={{
          backgroundColor: isHeader
            ? "gray"
            : item.fee_done
            ? "limegreen"
            : "yellow",
        }}
        className={isHeader ? "list-student-theader" : "list-student-row"}
      >
        <div className="list-student-cell">{idx ? num : "STT"}</div>
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

        <div className="list-student-cell student-action">
          {isHeader ? (
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
    <div className="list-student mt-3">
      {renderModal()}
      {renderAlertDialog()}
      <div className="mb-3 flex-alignitem ">
        <SearchBar
          handleDebouceSearch={(txt) => {
            _evtChangeText(txt);
          }}
        />
      </div>
      <div className="list-student-table">
        <div>
          {renderItem(headerTable, "", true)}
          {studentList && studentList.data && studentList.data.length > 0 && (
            <FlatList
              list={studentList.data}
              renderItem={renderItem}
              renderWhenEmpty={() => renderNodata()}
              // sortBy={["gender", { key: "", descending: true }]}
              // groupBy={person => person.info.age > 18 ? 'Over 18' : 'Under 18'}
              // groupBy={(person) => person.course}
              hasMoreItems={hasMoreItems}
              loadMoreItems={() => loadMoreData()}
              paginationLoadingIndicator={
                <div className="flex w-100 " style={{}}>
                  <IsLoading size={"small"} />
                </div>
              }
              paginationLoadingIndicatorPosition="center"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default ListStudent;
