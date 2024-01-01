import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import axiosClient from "app/const/Instance.js";
import { stringify } from "query-string";
import { Button } from "@mui/material";
import EditCourseOnline from "./components/editCourseOnline";
import FilterUser from "./components/filterUser/index.js";

import LPEPopover from "app/components/popover/index.js";
import LPEDrawer from "app/components/drawer/index.js";
import LPEPagination from "app/components/pagination";
import IsLoadingSkeleton from "app/components/loadingSkeleton";

import "./styles/styles.scss";
import { showToast } from "core/utils/toastUtil.js";
import AdminTable from "share/adminTable/index.js";

const headCourseOnlineCells = [
  { id: "code", label: "Mã Khóa" },
  { id: "name", label: "Tên Khóa Học" },
  { id: "time", label: "Thời gian" },
  { id: "top_rank", label: "Top Rank" },
  { id: "register", label: "Tổng Đăng Ký" },
  { id: "learned", label: "Đã Học" },
  { id: "no_learn", label: "Chưa Học" },
  { id: "action", label: "Thao tác" },
];

const anchor = { vertical: "bottom", horizontal: "right" };
const transfrom = { vertical: "top", horizontal: "right" };

function CourseOnlineManager() {
  const LIMIT = 10;

  const refFilter = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  const [isFiltered, setIsFiltered] = useState(false);
  const [dataFilter, setDataFilter] = useState({});
  const [openDrawer, setOpenDrawer] = useState(false);
  const [courseOnline, setCourseOnline] = useState({});
  const history = useHistory();

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const handleOpenDrawer = (itemEditing) => {
    // setCourseOnline(itemEditing);
    history.push("/admin/quan-ly-khoa-hoc-truc-tuyen/chi-tiet-khoa-hoc", {
      data: itemEditing,
    });
    // setOpenDrawer(true);
  };

  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };

  useEffect(() => {
    getList(1);
  }, []);

  // Fetch Table Data
  const getList = (page, opts, isFiltered) => {
    setIsLoading(true);

    const skip = page === 0 ? 0 : (page - 1) * LIMIT;

    const data = {
      limit: LIMIT,
      skip,
      total: true,
      ...opts,
    };

    axiosClient
      .get(`course_online?${stringify(data)}`)
      .then((response) => {
        setIsLoading(false);
        console.log("?response", response);
        isFiltered
          ? setTotal(response.total || 0)
          : setTotal(response.total || 0);

        setList(response.data);

        setTotal(response.total);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onChangePage = (page) => {
    getList(page, dataFilter);
  };

  const handleFilter = (data) => {
    setIsFiltered(true);
    getList(1, data, true);
    setDataFilter(data);
  };

  const handleDelete = (user_id) => {
    axiosClient
      .delete(`users/${user_id}`)
      .then((response) => {
        setList((list) => list.filter((item) => item._id !== user_id));
        setTotal((total) => total - 1);

        showToast("success", "Xóa người dùng thành công", {
          timeout: 5000,
        });
      })
      .catch((error) => {
        console.log(error);

        showToast("error", "Xóa người dùng thất bại", {
          timeout: 5000,
        });
      });
  };

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

        {isLoading ? (
          <IsLoadingSkeleton count={LIMIT + 1} />
        ) : (
          <AdminTable
            tableHead={headCourseOnlineCells}
            tableData={list}
            view="course_online"
            handleOpenDrawer={handleOpenDrawer}
            onHandleDelete={handleDelete}
          />
        )}

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

      {/* Drawer edit screen here 

      <LPEDrawer
        anchor="left"
        isOpen={openDrawer}
        onToggle={handleCloseDrawer}
        disableScrollLock
      >
        <EditCourseOnline
          onToggleDrawer={toggleDrawer}
          courseOnline={courseOnline}
        />
      </LPEDrawer>
      */}
    </div>
  );
}

export default CourseOnlineManager;
