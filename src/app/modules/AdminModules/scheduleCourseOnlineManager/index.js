import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getScheduleCourseOnlineAction,
  deleteScheduleCourseOnlineAction,
} from "core/redux/actions/scheduleCourseOnlineAction";
import IsLoadingSkeleton from "app/components/loadingSkeleton";
import { Button } from "@mui/material";
import CreateScheduleCourseOnlineManager from "./components/createScheduleCourseOnlineManager";
import LPEDrawer from "app/components/drawer";
import AdminTable from "share/adminTable";

function ScheduleCourseOnlineManager(props) {
  const limit = 10;
  const [data, setData] = useState([]);
  const [openDrawer, setOpenDrawer] = useState(false);
  const { loading, scheduleCourseOnlineList } = useSelector(
    (state) => state.scheduleCourseOnline
  );
  const history = useNavigate();
  const dispatch = useDispatch();
  const headCells = [
    {
      id: "_id",
      label: "Id",
    },
    {
      id: "name",
      label: "Tên Khóa Học",
    },
    { id: "startTime", label: "Thời gian bắt đầu" },
    { id: "endTime", label: "Thời gian kết thúc" },
    { id: "action", label: "Thao tác" },
  ];
  useEffect(() => {
    loadData();
  }, []);
  const loadData = () => {
    dispatch(getScheduleCourseOnlineAction());
  };

  const handleOpenDrawer = (data) => {
    data
      ? history("/admin/quan-ly-lich-hoc/chinh-sua-lich-hoc", {
          state: { onEdit: data },
        })
      : setOpenDrawer(true);
  };
  const handleDelete = (_id) => {
    dispatch(deleteScheduleCourseOnlineAction(_id));
  };
  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };
  const renderData = () => {
    return (
      <AdminTable
        {...props}
        tableHead={headCells}
        tableData={scheduleCourseOnlineList.data}
        view="scheduleCourseOnline"
        // type="userManager"
        onHandleDelete={handleDelete}
        handleOpenDrawer={handleOpenDrawer}
        // handleAddUserToCourse={(user) => handleRemoveStudentToList(user)}
      />
    );
  };
  const renderNoData = () => {
    return <h2>Không có dữ liệu</h2>;
  };
  return loading ? (
    <IsLoadingSkeleton count={limit + 1} />
  ) : (
    <>
      <div className="mb-3">
        <Button
          onClick={() => {
            handleOpenDrawer();
          }}
          variant="contained"
        >
          Thêm Khóa Học
        </Button>
      </div>

      {scheduleCourseOnlineList &&
      scheduleCourseOnlineList.data &&
      scheduleCourseOnlineList.data.length > 0
        ? renderData()
        : renderNoData()}

      {/* Drawer edit screen here */}

      <LPEDrawer
        anchor="left"
        isOpen={openDrawer}
        onToggle={handleCloseDrawer}
        disableScrollLock
      >
        <CreateScheduleCourseOnlineManager
          onToggleDrawer={toggleDrawer}
          //  userEdit={userEdit}
        />
      </LPEDrawer>
    </>
  );
}

export default ScheduleCourseOnlineManager;
