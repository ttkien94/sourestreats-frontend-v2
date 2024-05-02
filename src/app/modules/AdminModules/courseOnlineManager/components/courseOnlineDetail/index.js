import React, { useState } from "react";
import { Formik, Form, FastField } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
// import emptyAvatar from "assets/images/btnLogin.png";
import InputField from "app/components/customField/inputField";
import SelectField from "app/components/customField/selectField";
import DatePickerField from "app/components/customField/datePickerField";
import { styled } from "@mui/material/styles";
import { Box, Button } from "@mui/material";
import { DEFALT_OPTIONS } from "app/components/customField/selectField/options";
import { adminUpdateUserAction } from "core/redux/actions/userAction";
import LPEDrawer from "app/components/drawer/index.js";
import UserManager from "app/modules/AdminModules/userManager";
import "./styles/styles.scss";
import SearchBar from "share/searchBar";

const ButtonSubmit = styled(Button)`
  color: #fff;
  background: #3777bc;

  :hover {
    color: #fff;
    background: #3777bc;
  }
`;

const ButtonCancel = styled(Button)`
  color: #adb5bd;
`;

function CourseOnlineDetail({ onToggleDrawer, courseOnline }) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  // const [txtSearch, setTxtSearch] = useState("");
  const [openDrawer, setOpenDrawer] = useState(false);
  const history = useNavigate();
  const data = history.location.state?.data;
  const phoneRegExp = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
  const initialValues = {
    name: data?.name,
    gender: data?.gender,
    email: data?.email,
    phone: data?.phone,
    address: data?.address || "",
    birthDay: data?.birthDay,
    role: data?.role,
    password: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Vui lòng nhập trường này.")
      .min(3, "Có ít nhất là 3 ký tự.")
      .max(40, "Có nhiều nhất là 40 ký tự."),
    phone: Yup.string().matches(phoneRegExp, "Số điện thoại không hợp lệ."),
    address: Yup.string().max(400, "Có nhiều nhất là 400 ký tự."),
  });
  const handleEdit = (data) => {
    dispatch(adminUpdateUserAction(courseOnline._id, data, setIsLoading));
  };

  const handleCloseEdit = () => {
    onToggleDrawer && onToggleDrawer();
  };
  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  // const handleOpenDrawer = (itemEditing) => {
  //   // setCourseOnline(itemEditing);
  //   setOpenDrawer(true);
  // };

  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };
  const handleAddUserToCourse = (student) => {
    console.log("handleAddUserToCourse:", student);
  };

  return (
    <div className="admin-user-screen">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleEdit}
      >
        {(formikProps) => {
          // const { values, errors, touched } = formikProps;

          // console.log({ values, errors, touched });

          return (
            <div className="container">
              <Box
                sx={{
                  display: "flex",
                  border: "1px solid #e4e6eb",
                  borderRadius: "10px",
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                }}
                className="mt-3 mx-3 row"
              >
                <div className="col-12 mt-3">
                  <h3>Thông tin khóa học</h3>
                </div>
                <Form
                  className="row"
                  style={{
                    maxWidth: "1200px",
                    margin: "20px 0",
                  }}
                >
                  <div className="col-6">
                    <FastField
                      name="name"
                      component={InputField}
                      label="Tên đầy đủ"
                      placeholder="Nhập tên"
                      className="w-100 mb-4"
                    />
                  </div>

                  <div className="col-6">
                    <FastField
                      name="email"
                      component={InputField}
                      label="Email"
                      placeholder="Nhập email"
                      className="w-100 mb-4"
                      disabled
                    />
                  </div>

                  <div className="col-6">
                    <FastField
                      name="phone"
                      component={InputField}
                      label="Số điện thoại"
                      placeholder="Nhập số điện thoại"
                      className="w-100 mb-4"
                      autocomplete
                    />
                  </div>

                  <div className="col-6">
                    <FastField
                      name="gender"
                      component={SelectField}
                      label="Giới tính"
                      placeholder="Nhập giới tính"
                      className="w-100 mb-4"
                      options={DEFALT_OPTIONS.gender}
                    />
                  </div>

                  <div className="col-6">
                    <FastField
                      name="address"
                      component={InputField}
                      label="Địa chỉ"
                      placeholder="Nhập địa chỉ"
                      className="w-100 mb-4"
                    />
                  </div>

                  <div className="col-6">
                    <FastField
                      name="birthDay"
                      component={DatePickerField}
                      label="Ngày sinh"
                      placeholder="Nhập ngày sinh"
                      className="w-100 mb-4"
                    />
                  </div>

                  <div className="col-12">
                    <FastField
                      name="password"
                      type="password"
                      component={InputField}
                      label="Mật khẩu"
                      placeholder="Nhập mật khẩu"
                      className="w-100 mb-4"
                    />
                  </div>

                  <div className="col-6">
                    <FastField
                      name="role"
                      component={SelectField}
                      label="Phân quyền"
                      placeholder="Nhập quyền người dùng"
                      className="w-100 mb-4"
                      options={DEFALT_OPTIONS.role}
                    />
                  </div>

                  <div className="col-12 justify-content-end d-flex">
                    <ButtonSubmit type="submit">
                      Xác nhận
                      {isLoading && <div className="loader ml-1"></div>}
                    </ButtonSubmit>

                    <ButtonCancel onClick={handleCloseEdit}>Hủy</ButtonCancel>
                  </div>
                </Form>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  border: "1px solid #e4e6eb",
                  borderRadius: "10px",
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                }}
                className="mt-3 mx-3 row"
              >
                <div className="col-12 mt-3 mr-3  flex-alignitem">
                  <h3 className="mr-3">Danh sách học viên</h3>
                  <SearchBar
                    placeholder="Tìm Kiếm Học Viên"
                    // handleDebouceSearch={(txt) => setTxtSearch(txt)}
                    handleDebouceSearch
                  />
                  <Button
                    variant="contained"
                    className="ml-3 py-3"
                    color="primary"
                    onClick={() => {
                      setOpenDrawer(true);
                    }}
                  >
                    Thêm học viên
                  </Button>
                </div>
                <div className="col-12 my-3">
                  <h2>12312312</h2>
                </div>
              </Box>
            </div>
          );
        }}
      </Formik>
      <LPEDrawer
        anchor="left"
        isOpen={openDrawer}
        onToggle={handleCloseDrawer}
        disableScrollLock
      >
        <UserManager
          onToggleDrawer={toggleDrawer}
          addUserToCourse={true}
          handleAddUserToCourse={(student) => handleAddUserToCourse(student)}
        />
      </LPEDrawer>
    </div>
  );
}

export default CourseOnlineDetail;
