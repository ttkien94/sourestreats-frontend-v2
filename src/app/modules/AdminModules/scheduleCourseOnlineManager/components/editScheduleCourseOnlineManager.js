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
// import SearchBar from "share/searchBar";
import { useEffect } from "react";
// import SelectField from "app/components/customField/selectField";
import LPEDrawer from "app/components/drawer";
import UserManager from "../../userManager";
import AdminTable from "share/adminTable";
import _ from "lodash";
import DatePickerField from "app/components/customField/datePickerField";
// import { useNavigate } from "react-router-dom";
import AlertDialog from "share/alertDialog";
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
  // const [txtSearch, setTxtSearch] = useState("");
  // const [currentCourseList, setCurrentCourseList] = useState([]);
  // const [selectedCourse, setSelectedCourse] = useState("");
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
    console.log("loading first", loading);
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
  }, [detailScheduleCourseOnline]);

  const loadData = () => {
    // get detail schedule _____
    const initialValues = location.state?.onEdit;
    dispatch(getDetailScheduleCourseOnlineAction(initialValues._id));
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
  const handleAddUserToList = (user) => {
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
    setOpenAlertDialog(false);
  };
  const renderFormData = (values, setFieldValue) => {
    return (
      <Form
        className="row "
        style={{
          margin: "20px 0",
        }}
      >
        <div className="col-12 d-flex align-items-center">
          <h3>{values.courseOnline[0].name}</h3>

          <div className="col-2">
            <FastField
              name="startTime"
              component={DatePickerField}
              label="Thời gian bắt đầu"
              placeholder="Thời gian bắt đầu"
              className="w-100 mb-0"
            />
          </div>
          <div className="col-2">
            <FastField
              name="endTime"
              component={DatePickerField}
              label="Thời gian kết thúc"
              placeholder="Thời gian kết thúc"
              className="w-100 mb-0"
            />
          </div>
          <div className="col-3">
            {" "}
            <ButtonSubmit
              type="submit"
              onClick={() => handleEditScheduleCourseOnline(values._id, values)}
            >
              Thay đổi thời gian
              {loading && <div className="loader ml-1"></div>}
            </ButtonSubmit>
          </div>
        </div>
      </Form>
    );
  };
  const renderStudentList = (values, setFieldValue) => {
    return (
      <Box
        sx={{
          display: "flex",
          border: "1px solid #e4e6eb",
          width: "100%",
          borderRadius: "10px",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
        className="my-3 mx-3 row"
      >
        <div className="col-12 mt-3 mr-3  flex-alignitem">
          <h3 className="mr-3">Danh sách học viên</h3>
          {/* <SearchBar
            placeholder="Tìm Kiếm Học Viên"
            handleDebouceSearch={(txt) => setTxtSearch(txt)}
          /> */}
          <Button
            variant="contained"
            className="ml-3 mr-3 py-3"
            color="primary"
            onClick={handleOpenDrawer}
          >
            Thêm học viên
          </Button>
          <i>
            Thoi gian bao luu khoa hoc nằm bên user getUserHaveCourse getUserNo
          </i>
          <Button
            variant="contained"
            className="ml-3 mr-3 py-3"
            color="primary"
            onClick={() => {
              setOpenAlertDialog(true);
            }}
          >
            Lưu
          </Button>
        </div>
        <div className="col-12 my-3">
          {studentList && studentList.length > 0 ? (
            <div>
              <AdminTable
                tableHead={headCells}
                tableData={studentList}
                type="scheduleCourseOnline"
                view="user"
                onHandleDelete={handleDeleteUserToList}
              />
            </div>
          ) : (
            <h3>Không có học viên</h3>
          )}
        </div>
      </Box>
    );
  };

  const renderBody = () => {
    console.log("loading", loading);
    return (
      <div className="admin-question">
        <Formik
          initialValues={detailScheduleCourseOnline}
          validationSchema={validationSchema}
          onSubmit={() => {}}
        >
          {(formikProps) => {
            const { values, setFieldValue } = formikProps;

            // console.log("values.option", values.option);
            console.log("values", values);
            return (
              <div>
                {renderFormData(values, setFieldValue)}
                {renderStudentList()}
              </div>
            );
          }}
        </Formik>

        <AlertDialog
          openAlertDialog={openAlertDialog}
          setOpenAlertDialog={setOpenAlertDialog}
          handleAction={handleSaveAction}
        />
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
              handleAddUserToList(user);
            }}
            studentList={studentList}
          />
        </LPEDrawer>
      </div>
    );
  };
  return !loading ? renderBody() : <>Khong Co Du Lieu</>;
}

export default EditScheduleCourseOnlineManager;
