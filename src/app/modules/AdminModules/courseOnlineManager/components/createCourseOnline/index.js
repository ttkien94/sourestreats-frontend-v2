import React, { useEffect, useState } from "react";
import { Formik, Form, FastField } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

import emptyAvatar from "assets/images/btnLogin.png";
import InputField from "app/components/customField/inputField";
import SelectField from "app/components/customField/selectField";
import DatePickerField from "app/components/customField/datePickerField";
import { styled } from "@mui/material/styles";
import { Box, Button } from "@mui/material";
import { DEFALT_OPTIONS } from "app/components/customField/selectField/options";
import { adminUpdateUserAction } from "core/redux/actions/userAction";
import LPEDrawer from "app/components/drawer/index.js";
import "./styles/styles.scss";
import SearchBar from "share/searchBar";
import MUIRichTextEditor from "mui-rte";
import _ from "lodash";
import {
  createCourseOnlineAction,
  editCourseOnlineAction,
} from "core/redux/actions/courseOnlineAction";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { getVideoAction } from "core/redux/actions/videoAction";
import AdminTable from "share/adminTable";
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
const floorList = ["Tầng 1", , "Tầng 2", , "Tầng 3"];

function CourseCourseOnline({ onToggleDrawer, onEdit }) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [txtSearch, setTxtSearch] = useState("");
  const [openDrawer, setOpenDrawer] = useState(false);
  const [currentVideoList, setCurrentVideoList] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState("");
  const [selectedFloor, setSelectedFloor] = useState(floorList[0]);
  const { loading, videoList } = useSelector((state) => state.video);
  const initialValues = {
    _id: onEdit?._id || "",
    name: onEdit?.name || "Tháp 2",
    title: onEdit?.title || "Tiêu Đề Tháp 2",
    description: onEdit?.description || "Mô tả Tháp 2",
    content: onEdit?.content || "Nội Dung Tháp 2",
    videoList: onEdit?.videoList || [],
    totalStudent: onEdit?.totalStudent || 0,
  };
  const myTheme = createTheme({
    // Set up your custom MUI theme here
  });
  const headCells = [
    { id: "STT", label: "STT" },
    { id: "name", label: "Name" },
    { id: "floor", label: "Tầng" },
    { id: "action", label: "Thao tác" },
  ];
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Vui lòng nhập trường này.")
      .min(3, "Có ít nhất là 3 ký tự.")
      .max(40, "Có nhiều nhất là 40 ký tự."),
    totalStudent: Yup.number().required("Vui lòng nhập thời lượng video"),
  });

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    // xu ly on_edit
    if (videoList && videoList.data && videoList.data.length > 0) {
      if (onEdit) {
        let newVideoList = _.cloneDeep(videoList.data);
        onEdit.videoList.map((video, index) => {
          let i = newVideoList.findIndex((x) => x._id === video._id);
          if (i !== -1) {
            newVideoList.splice(i, 1);
          }
        });
        setCurrentVideoList(newVideoList);
        setSelectedVideo(newVideoList[0]._id);
      } else {
        setSelectedVideo(videoList.data[0]._id);
        setCurrentVideoList(videoList.data);
      }
    }
  }, [videoList]);

  const loadData = () => {
    dispatch(getVideoAction());
  };
  const handleSubmit = (data) => {
    onEdit
      ? dispatch(editCourseOnlineAction(data._id, data))
      : dispatch(createCourseOnlineAction(data));
    // dispatch(adminUpdateUserAction(courseOnline._id, data, setIsLoading));
  };

  const handleCloseEdit = () => {
    onToggleDrawer && onToggleDrawer();
  };

  const handleCourseOnlineAddVideo = (e, values, setFieldValue) => {
    let newList = values.videoList;
    let i = currentVideoList.findIndex((x) => x._id === selectedVideo);
    if (i !== -1) {
      let newCurrentVideo = _.cloneDeep(currentVideoList);
      newCurrentVideo[i].floor = selectedFloor;
      newList.push(newCurrentVideo[i]);
      console.log("newList", newList);
      newCurrentVideo.splice(i, 1);
      //chưa xử lý khi thêm hết video
      setSelectedVideo(newCurrentVideo[0]._id);
      setCurrentVideoList(newCurrentVideo);
      setFieldValue("questionList", newList);
    }
  };
  const handleCourseOnlineDeleteVideo = (_id, values, setFieldValue) => {
    let newList = values.videoList;
    let i = newList.findIndex((x) => x._id === _id);
    if (i !== -1) {
      const object = newList[i];
      let newCurrentVideo = _.cloneDeep(currentVideoList);
      newCurrentVideo.push(object);
      newList.splice(i, 1);
      setSelectedVideo(object._id);
      setCurrentVideoList(newCurrentVideo);
      setFieldValue("videoList", newList);
    }
  };

  return (
    <div className="admin-course-online-screen">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        // onSubmit={handleSubmit}
      >
        {(formikProps) => {
          const { values, errors, touched, setFieldValue } = formikProps;
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
                    margin: "20px 0",
                  }}
                >
                  <div className="col-6">
                    <FastField
                      name="name"
                      component={InputField}
                      label="Tên khóa học"
                      placeholder="Tên khóa học"
                      className="w-100 mb-4"
                    />
                  </div>
                  <div className="col-6">
                    <FastField
                      name="title"
                      component={InputField}
                      label="Tiêu đề"
                      placeholder="Tiêu Đề"
                      className="w-100 mb-4"
                    />
                  </div>
                  <div className="col-6">
                    <FastField
                      name="description"
                      component={InputField}
                      label="Mô tả"
                      placeholder="Mô tả"
                      className="w-100 mb-4"
                    />
                  </div>
                  <div className="col-6">
                    <FastField
                      name="content"
                      component={InputField}
                      label="Nội dung"
                      placeholder="Nội dung"
                      className="w-100 mb-4"
                    />
                  </div>

                  {/* <ThemeProvider theme={myTheme}>
                    <MUIRichTextEditor
                      label="Type something here..."
                      onSave={(e) => {
                        // setFieldValue()
                        console.log("e", e);
                      }}
                      inlineToolbar={true}
                    />
                  </ThemeProvider> */}
                  {/* <div className="col-6">
                    <FastField
                      name="gender"
                      component={SelectField}
                      label="Giới tính"
                      placeholder="Nhập giới tính"
                      className="w-100 mb-4"
                      options={DEFALT_OPTIONS.gender}
                    />
                  </div> */}
                  <div className="col-12 mb-3">
                    <div className="row d-flex align-items-center justify-content-between ">
                      <div className="col-6">
                        <select
                          className="input-select  px-3 py-3 "
                          onChange={(e) => setSelectedVideo(e.target.value)}
                        >
                          {currentVideoList.map((item, index) => {
                            return (
                              <option key={index} value={item._id}>
                                {item.name}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                      <div className="col-3">
                        <select
                          className="input-select  px-3 py-3 "
                          onChange={(e) => setSelectedFloor(e.target.value)}
                        >
                          {floorList.map((item, index) => {
                            return (
                              <option key={index} value={item}>
                                {item}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                      <div className="col-3 d-flex justify-content-center">
                        <ButtonSubmit
                          onClick={(e) =>
                            handleCourseOnlineAddVideo(e, values, setFieldValue)
                          }
                          className="ml-3"
                          style={{ minWidth: "150px" }}
                        >
                          Thêm Video
                        </ButtonSubmit>
                      </div>
                    </div>
                  </div>

                  <AdminTable
                    tableHead={headCells}
                    tableData={values.videoList}
                    type="createCourseOnline"
                    view="video"
                    onHandleDelete={(_id) =>
                      handleCourseOnlineDeleteVideo(_id, values, setFieldValue)
                    }
                    className="col-12"
                    style={{ minHeight: "300px" }}
                  />
                  <div className="col-12 justify-content-end d-flex">
                    <ButtonSubmit
                      // type="submit"
                      onClick={() => {
                        handleSubmit(values);
                      }}
                    >
                      Xác nhận
                      {loading && <div className="loader ml-1"></div>}
                    </ButtonSubmit>

                    <ButtonCancel onClick={handleCloseEdit}>Hủy</ButtonCancel>
                  </div>
                </Form>
              </Box>
            </div>
          );
        }}
      </Formik>
    </div>
  );
}

export default CourseCourseOnline;
