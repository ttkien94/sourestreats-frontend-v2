import React, { useState } from "react";
import { Formik, Form, FastField } from "formik";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import * as Yup from "yup";

// import InputField from "app/components/customField/inputField";

import { styled } from "@mui/material/styles";
import { Box, Button } from "@mui/material";

// import { DEFALT_OPTIONS } from "app/components/customField/selectField/options";

import { useSelector } from "react-redux";
// import {
//   getCourseOnlineAction,
//   getDetailCourseOnlineAction,
// } from "core/redux/actions/courseOnlineAction";
import {
  editScheduleCourseOnlineAction,
  getDetailScheduleCourseOnlineAction,
  handleStudentToScheduleCourseOnline,
} from "core/redux/actions/scheduleCourseOnlineAction";
import { useEffect } from "react";
// import SelectField from "app/components/customField/selectField";
import LPEDrawer from "app/components/drawer";
import UserManager from "../../userManager";
import AdminTable from "share/adminTable";
import _ from "lodash";
import DatePickerField from "app/components/customField/datePickerField";
// import { useNavigate } from "react-router-dom";
import AlertDialog from "share/alertDialog";
import Loading from "share/loading";
import SearchBar from "share/searchBar";
const ButtonSubmit = styled(Button)`
  color: #fff;
  background: #3777bc;
  padding: 15px;
  :hover {
    color: #fff;
    background: #3777bc;
  }
`;

// const ButtonCancel = styled(Button)`
//   color: #adb5bd;
// `;
const headCells = [
  { id: "id", label: "ID" },
  { id: "email", label: "Email" },
  { id: "phone", label: "Số điện thoại" },
  { id: "role", label: "Quyền" },
  { id: "action", label: "Thao tác" },
];
function EditScheduleCourseOnlineManager(props) {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openAlertDialog, setOpenAlertDialog] = useState(false);
  const [txtSearch, setTxtSearch] = useState("");
  // const [currentCourseList, setCurrentCourseList] = useState([]);
  // const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedData, setSelectedData] = useState({});
  const [studentList, setStudentList] = useState([]);
  const { loading, detailScheduleCourseOnline } = useSelector(
    (state) => state.scheduleCourseOnline
  );
  // const { detailCourseOnline } = useSelector((state) => state.courseOnline);
  const dispatch = useDispatch();
  // const history = useNavigate();
  const location = useLocation();

  const validationSchema = Yup.object().shape({
    question: Yup.string().required("Vui lòng nhập trường này."),
    option: Yup.array().required("Vui lòng nhập trường này."),
    answer: Yup.string().required("Vui lòng nhập trường này."),
  });

  useEffect(() => {
    if (
      detailScheduleCourseOnline &&
      detailScheduleCourseOnline.studentList &&
      detailScheduleCourseOnline.studentList.length > 0
    ) {
      let list = detailScheduleCourseOnline.studentList;
      list.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) return 1;
        return 0;
      });
      setStudentList(list);
    }
    // console.log("detailScheduleCourseOnline", detailScheduleCourseOnline);
  }, [detailScheduleCourseOnline]);

  useEffect(() => {
    // console.log("loading first");
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadData = () => {
    // get detail schedule _____
    const _id = location.state?.onEdit._id;
    dispatch(getDetailScheduleCourseOnlineAction(_id));
  };
  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };
  const handleOpenDrawer = (data) => {
    setOpenDrawer(true);
  };

  const handleEditScheduleCourseOnline = (_id, data) => {
    dispatch(editScheduleCourseOnlineAction(_id, data));
  };

  const handleDeleteUserToList = (data) => {
    const newList = _.cloneDeep(studentList);
    const itemIndex = newList.findIndex((x) => x._id === data);
    newList.splice(itemIndex, 1);
    setStudentList(newList);
  };
  const handleAddUserToList = (user, courseOnline) => {
    console.log("user", user);
    user.lesson = courseOnline.lesson;
    user.fullPermission = false;
    const newList = _.cloneDeep(studentList);
    newList.push(user);
    setStudentList(newList);
  };
  const handleSaveAction = () => {
    dispatch(
      handleStudentToScheduleCourseOnline(
        detailScheduleCourseOnline._id,
        studentList
      )
    );
  };
  const handleChangePermission = () => {
    const newList = _.cloneDeep(studentList);
    const index = studentList.findIndex(
      (ele) => ele._id === selectedData.data._id
    );
    if (index !== -1) {
      newList[index].lesson[selectedData.pharseIndex].permission =
        !newList[index].lesson[selectedData.pharseIndex].permission;
    }
    setOpenAlertDialog(false);
    setStudentList(newList);
  };
  const handleOpenDialog = (ele) => {
    setOpenAlertDialog(true);
    setSelectedData(ele);
  };
  const renderFormData = (values, setFieldValue) => {
    return (
      <Form className="row">
        <div className="title-h2">{values.courseOnline[0].name}</div>
        <div className="col-12 mt-3">
          <div className="d-flex align-items-center justify-content-between">
            <div className="title-h3 ">Thời gian học</div>
            <div className="d-flex ">
              <FastField
                name="startTime"
                component={DatePickerField}
                label="Thời gian bắt đầu"
                placeholder="Thời gian bắt đầu"
                className="w-100 mb-0 mr-3"
              />
              <FastField
                name="endTime"
                component={DatePickerField}
                label="Thời gian kết thúc"
                placeholder="Thời gian kết thúc"
                className="w-100 mb-0"
              />
              <Button
                type="submit"
                onClick={() =>
                  handleEditScheduleCourseOnline(values._id, values)
                }
                variant="contained"
                className="ml-3 mr-3 button-primary"
                style={{ minWidth: 180 }}
              >
                Lưu thay đổi
                {loading && <div className="loader ml-1"></div>}
              </Button>
            </div>
          </div>
        </div>
      </Form>
    );
  };
  const renderStudentList = () => {
    return (
      <Box
        sx={{
          display: "flex",
          // border: "1px solid #e4e6eb",
          width: "100%",
          borderRadius: "10px",
          // boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
        className="row"
      >
        {/* <p>
          Thoi gian bao luu khoa hoc nằm bên user getUserHaveCourse getUserNo
          Tao ghi chu luu tru du lieu
        </p> */}
        <div className="col-12  mt-3 sticky">
          <div className="d-flex  align-items-center justify-content-between bg-white p-3">
            <div className="title-h3">Danh sách học viên</div>
            <div className="d-flex justify-content-end ">
              <div className="px-3">
                <SearchBar
                  placeholder="Tìm Kiếm Học Viên"
                  handleDebouceSearch={(txt) => setTxtSearch(txt)}
                />
              </div>
              <Button
                variant="contained"
                onClick={handleOpenDrawer}
                className="button-secondary"
              >
                + Thêm học viên
              </Button>

              <Button
                variant="contained"
                className="ml-3 mr-3 button-primary"
                onClick={() => {
                  handleSaveAction();
                }}
              >
                Lưu Thay Đổi
              </Button>
            </div>
          </div>
        </div>
        <div className="col-12 my-3">
          {studentList && studentList.length > 0 && (
            <AdminTable
              tableHead={headCells}
              tableData={studentList}
              type="scheduleCourseOnline"
              view="user"
              onHandleDelete={handleDeleteUserToList}
              handleOpenDialog={(ele) => handleOpenDialog(ele)}
            />
          )}
          <AlertDialog
            openAlertDialog={openAlertDialog}
            setOpenAlertDialog={setOpenAlertDialog}
            handleAction={() => handleChangePermission()}
          />
        </div>
      </Box>
    );
  };

  const renderBody = () => {
    return (
      <div className="admin-question">
        <Formik
          initialValues={detailScheduleCourseOnline}
          validationSchema={validationSchema}
          onSubmit={() => {}}
        >
          {(formikProps) => {
            const { values, setFieldValue } = formikProps;

            // console.log("values", values);
            return (
              <div>
                {renderFormData(values, setFieldValue)}
                <hr />
                {renderStudentList()}

                <LPEDrawer
                  anchor="left"
                  isOpen={openDrawer}
                  onToggle={handleCloseDrawer}
                  disableScrollLock
                >
                  {/* <AddUserToCourse
            onToggleDrawer={toggleDrawer}
            // onEdit={courseOnline}
          /> */}
                  <UserManager
                    addUserToCourse="true"
                    handleAddUserToList={(user) => {
                      handleAddUserToList(user, values.courseOnline[0]);
                    }}
                    studentList={studentList}
                  />
                </LPEDrawer>
              </div>
            );
          }}
        </Formik>
      </div>
    );
  };
  return !loading && !_.isEmpty(detailScheduleCourseOnline) ? (
    renderBody()
  ) : (
    <Loading></Loading>
  );
}

export default EditScheduleCourseOnlineManager;
