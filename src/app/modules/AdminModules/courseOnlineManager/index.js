import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import FilterUser from "./components/filterUser/index.js";
import LPEPopover from "app/components/popover/index.js";
import LPEPagination from "app/components/pagination";
import IsLoadingSkeleton from "app/components/loadingSkeleton";
import "./styles/styles.scss";
import AdminTable from "share/adminTable/index.js";
import {
  getCourseOnlineAction,
  deleteCourseOnlineAction,
} from "core/redux/actions/courseOnlineAction";
import { useDispatch, useSelector } from "react-redux";
import LPEDrawer from "app/components/drawer/index.js";
import CreateCourseOnline from "./components/createCourseOnline";
const headCells = [
  { id: "code", label: "Mã Khóa" },
  { id: "name", label: "Tên Khóa Học" },
  { id: "title", label: "Tiêu đề" },
  { id: "description", label: "Mô tả" },
  { id: "content", label: "Nội Dung" },
  { id: "videoList", label: "Danh sách video" },
  { id: "action", label: "Thao tác" },
];

const anchor = { vertical: "bottom", horizontal: "right" };
const transfrom = { vertical: "top", horizontal: "right" };

function CourseOnlineManager() {
  const LIMIT = 10;

  const refFilter = useRef(null);
  const [total, setTotal] = useState(0);
  const [isFiltered, setIsFiltered] = useState(false);
  const [dataFilter, setDataFilter] = useState({});
  const [openDrawer, setOpenDrawer] = useState(false);
  const [courseOnline, setCourseOnline] = useState("");
  const { courseOnlineList, loading, records } = useSelector(
    (state) => state.courseOnline
  );
  const history = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    loadData(1);
  }, []);

  // Fetch Table Data
  const loadData = (page, opts, isFiltered) => {
    // const skip = page === 0 ? 0 : (page - 1) * LIMIT;

    // const data = {
    //   limit: LIMIT,
    //   skip,
    //   total: true,
    //   ...opts,
    // };
    dispatch(getCourseOnlineAction());
  };

  const handleDelete = (_id) => {
    dispatch(deleteCourseOnlineAction(_id));
  };

  const handleOpenDrawer = (data) => {
    console.log("data", data);
    setCourseOnline(data);
    setOpenDrawer(true);
    // history.push("/admin/quan-ly-khoa-hoc-truc-tuyen/chi-tiet-khoa-hoc", {
    //   data: itemEditing,
    // });
  };

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };
  const onChangePage = (page) => {
    loadData(page, dataFilter);
  };

  const handleFilter = (data) => {
    setIsFiltered(true);
    loadData(1, data, true);
    setDataFilter(data);
  };

  const renderNodata = () => {
    return <div>Khong có dữ liệu</div>;
  };
  const renderData = () => {
    return (
      <div>
        <div className="container-fluid">
          <Button
            onClick={(e) => {
              refFilter.current.handleClick(e);
            }}
            variant="contained"
            className="mb-3"
          >
            Lọc
          </Button>

          <AdminTable
            tableHead={headCells}
            tableData={courseOnlineList.data}
            view="course_online"
            handleOpenDrawer={handleOpenDrawer}
            onHandleDelete={handleDelete}
          />

          {/* Pagination */}
          <LPEPagination
            itemPerPage={LIMIT}
            totalItem={total}
            onChange={onChangePage}
            isFiltered={isFiltered}
          />
        </div>

        {/* Popover filter here */}
        <LPEPopover
          ref={refFilter}
          anchor={anchor}
          transfrom={transfrom}
          content={
            <FilterUser
              onClosePopOver={(e) => {
                refFilter.current.handleCloseClick(e);
              }}
              handleSort={handleFilter}
              filterList={handleFilter}
              valueFilter={dataFilter}
              dataFilter={dataFilter}
            />
          }
        />
      </div>
    );
  };
  return loading ? (
    <IsLoadingSkeleton count={LIMIT + 1} />
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
      {courseOnlineList &&
      courseOnlineList.data &&
      courseOnlineList.data.length > 0
        ? renderData()
        : renderNodata()}
      <LPEDrawer
        anchor="left"
        isOpen={openDrawer}
        onToggle={handleCloseDrawer}
        disableScrollLock
      >
        <CreateCourseOnline
          onToggleDrawer={toggleDrawer}
          onEdit={courseOnline}
        />
      </LPEDrawer>
    </>
  );
}

export default CourseOnlineManager;
