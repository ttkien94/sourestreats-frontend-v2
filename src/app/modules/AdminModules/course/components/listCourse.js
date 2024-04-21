import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCourseAction,
  getMoreCourseAction,
  deleteCourseAction,
} from "core/redux/actions/courseAction";
import { Box, IconButton, Modal } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import ClearIcon from "@mui/icons-material/Clear";
import DataCourseForm from "./dataCourseForm";
import AlertDialog from "share/alertDialog";
import SearchBar from "share/searchBar";
import IsLoading from "app/components/loading";
import FlatList from "flatlist-react/lib";
import FormatDate from "share/formatDate";

let page = 1;
let limit = 10;
function ListCourse(props) {
  const dispatch = useDispatch();
  const { courseList, hasMoreItems } = useSelector((state) => state.course);
  const [dataModal, setDataModal] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [txtSearch, setTxtSearch] = useState("");
  const [openAlertDialog, setOpenAlertDialog] = useState(false);

  const headerTable = {
    stt: "STT",
    course_code: "Mã Khóa Học",
    course_start_time: "Thời Gian Bắt Đầu",
    course_end_time: "Thời Gian Kết Thúc",
    course_location: "Địa Điểm Tổ Chức",
    total_register: "Tổng Đăng Ký",
    total_checkin: "Tổng Check In",
    note: "Lưu Ý",
    action: "Hành Động",
  };
  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [txtSearch]);
  console.log("courseList", courseList);
  const _evtChangeText = (txt) => {
    setTxtSearch(txt);
  };
  const loadData = () => {
    let query = txtSearch ? `&query=${txtSearch}` : "";
    page = 1;
    dispatch(getCourseAction(query));
  };

  const loadMoreData = () => {
    console.log("loadMoreData");
    if (hasMoreItems) {
      try {
        page = page + 1;
        let query = txtSearch ? `&query=${txtSearch}` : "";
        dispatch(getMoreCourseAction(query, page, limit));
      } catch (error) {}
    }
  };
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

  const handleDeletedItem = () => {
    try {
      dispatch(deleteCourseAction(dataModal));
      setOpenAlertDialog(false);
    } catch (error) {
      console.log("error", error);
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
          <DataCourseForm
            data={dataModal}
            setOpenModal={setOpenModal}
            isUpdate={true}
          />
        </Box>
      </Modal>
    );
  };
  const renderNodata = () => {
    return (
      <div>
        <div
          colSpan="9"
          style={{ textAlign: "center", backgroundColor: "gray" }}
        >
          <h4 className="py-3">Không có dữ liệu</h4>
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
        <div className="list-student-cell">
          {item.course_code && item.course_code}
        </div>
        <div className="list-student-cell student-min-width">
          {item.course_start_time && isHeader ? (
            item.course_start_time
          ) : (
            <FormatDate date={item.course_start_time} />
          )}
        </div>
        <div className="list-student-cell student-min-width">
          {item.course_end_time && item.course_end_time}
        </div>
        <div className="list-student-cell student-min-width">
          {item.course_location && item.course_location}
        </div>
        <div className="list-student-cell">
          {item.total_checkin && item.total_checkin}
        </div>
        <div className="list-student-cell">
          {item.total_register && item.total_register}
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
      <AlertDialog
        openAlertDialog={openAlertDialog}
        setOpenAlertDialog={setOpenAlertDialog}
        handleAction={handleDeletedItem}
        dataModal={dataModal}
      />
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
          {courseList && courseList.data && (
            <FlatList
              list={courseList.data}
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

export default ListCourse;
