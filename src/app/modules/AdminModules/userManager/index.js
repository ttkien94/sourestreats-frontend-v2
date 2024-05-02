import React, { useEffect, useRef, useState } from "react";
import axiosClient from "app/const/Instance.js";
import { stringify } from "query-string";
import { Button } from "@mui/material";
import EditUser from "./components/editUser/index.js";
import FilterUser from "./components/filterUser/index.js";

import AdminTable from "share/adminTable/index.js";
import LPEPopover from "app/components/popover/index.js";
import LPEDrawer from "app/components/drawer/index.js";
import LPEPagination from "app/components/pagination";
import IsLoadingSkeleton from "app/components/loadingSkeleton";

import "./styles/styles.scss";
import { showToast } from "core/utils/toastUtil.js";
import _ from "lodash";
const headCells = [
  { id: "id", label: "ID" },
  { id: "email", label: "Email" },
  { id: "phone", label: "Số điện thoại" },
  { id: "role", label: "Quyền" },
  { id: "action", label: "Thao tác" },
];

const anchor = { vertical: "bottom", horizontal: "right" };
const transfrom = { vertical: "top", horizontal: "right" };

function UserManager(props) {
  const LIMIT = props.addUserToCourse ? 999 : 10;

  const refFilter = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  const [isFiltered, setIsFiltered] = useState(false);
  const [dataFilter, setDataFilter] = useState({});
  const [openDrawer, setOpenDrawer] = useState(false);

  useEffect(() => {
    getList(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   // Hoi lag nhe
  // }, [props.studentList]);

  const handleRemoveStudentDuplicate = (data) => {
    console.log("handleRemoveStudentDuplicate", props.studentList);
    let studentList = props.studentList;
    if (studentList && studentList.length > 0) {
      console.log("studentList", studentList);
      let newList = _.cloneDeep(data);
      console.log("newList", newList);
      let len = studentList.length;
      for (var i = 0; i < len; i++) {
        var ItemIndex = newList.findIndex((b) => b._id === studentList[i]._id);
        if (ItemIndex !== -1) {
          newList.splice(ItemIndex, 1);
        }
      }
      setList(newList);
    }
  };

  const handleRemoveStudentToList = (user) => {
    let ItemIndex = list.findIndex((i) => i._id === user._id);
    let newList = _.cloneDeep(list);
    newList.splice(ItemIndex, 1);
    setList(newList);
    props.handleAddUserToList(user);
  };

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  // const handleOpenDrawer = (itemEditing) => {
  //   setOpenDrawer(true);
  // };

  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };

  // Fetch Table Data
  const getList = async (page, opts, isFiltered) => {
    setIsLoading(true);

    const skip = page === 0 ? 0 : (page - 1) * LIMIT;

    const data = {
      limit: LIMIT,
      skip,
      total: true,
      ...opts,
    };

    await axiosClient
      .get(`users?${stringify(data)}`)
      .then((response) => {
        setIsLoading(false);

        isFiltered
          ? setTotal(response.total || 0)
          : setTotal(response.total || 0);

        setList(response.data);
        handleRemoveStudentDuplicate(response.data);
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
            {...props}
            tableHead={headCells}
            tableData={list}
            view="user"
            type="userManager"
            onHandleDelete={handleDelete}
            handleAddUserToList={(user) => handleRemoveStudentToList(user)}
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

      {/* Drawer edit screen here */}

      <LPEDrawer
        anchor="left"
        isOpen={openDrawer}
        onToggle={handleCloseDrawer}
        disableScrollLock
      >
        <EditUser
          onToggleDrawer={toggleDrawer}
          //  userEdit={userEdit}
        />
      </LPEDrawer>
    </div>
  );
}

export default UserManager;
