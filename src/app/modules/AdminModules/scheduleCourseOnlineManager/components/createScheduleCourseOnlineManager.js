import React, { useState } from "react";
import { Formik, Form, FastField } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";

import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

// import {
//   createQuestionAction,
//   editQuestionAction,
// } from "core/redux/actions/questionAction";
import { useSelector } from "react-redux";
import { getCourseOnlineAction } from "core/redux/actions/courseOnlineAction";
import { createScheduleCourseOnlineAction } from "core/redux/actions/scheduleCourseOnlineAction";
import { useEffect } from "react";

// import _ from "lodash";
import DatePickerField from "app/components/customField/datePickerField";
const ButtonSubmit = styled(Button)`
  color: #fff;
  background: #3777bc;
  padding: 15px;
  :hover {
    color: #fff;
    background: #3777bc;
  }
`;

const ButtonCancel = styled(Button)`
  color: #adb5bd;
`;

function CreateScheduleCourseOnlineManager({ onToggleDrawer, onEdit }) {
  const [selectedCourse, setSelectedCourse] = useState("");
  const { loading } = useSelector((state) => state.scheduleCourseOnline);
  const { courseOnlineList } = useSelector((state) => state.courseOnline);
  const dispatch = useDispatch();
  const initialValues = onEdit
    ? onEdit
    : {
        course_id: "",
        startTime: "",
        endTime: "",
      };
  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    // set first course is default
    if (
      courseOnlineList &&
      courseOnlineList.data &&
      courseOnlineList.data.length > 0
    ) {
      setSelectedCourse(courseOnlineList.data[0]);
    }
  }, [courseOnlineList]);

  const loadData = (page = 1, dataFilter, isFiltered) => {
    dispatch(getCourseOnlineAction());
  };

  const validationSchema = Yup.object().shape({
    endTime: Yup.string().required("Vui lòng nhập trường này."),
    startTime: Yup.array().required("Vui lòng nhập trường này."),
  });

  const handleCreateCourseOnline = (data) => {
    let course_id = selectedCourse._id;
    data.course_id = course_id;
    console.log("data:", data);
    dispatch(createScheduleCourseOnlineAction(data));
  };
  const handleEditCourseOnline = (_id, data) => {};
  const renderFormData = (values, setFieldValue) => {
    return (
      <div className="col-12">
        <div className="row">
          <div className="col-12 mb-3  d-flex align-items-center">
            <p style={{ minWidth: "150px" }}>Chọn Khóa Học</p>
            <select
              className="input-select px-3 py-3  "
              onChange={(e) => setFieldValue("course_id", e.target.value._id)}
            >
              {courseOnlineList.data.map((item, index) => {
                return (
                  <option key={index} value={item}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <FastField
              name="startTime"
              component={DatePickerField}
              label="Thời gian bắt đầu"
              placeholder="Thời gian bắt đầu"
              className="w-100 mb-4"
            />
          </div>
          <div className="col-6">
            <FastField
              name="endTime"
              component={DatePickerField}
              label="Thời gian kết thúc"
              placeholder="Thời gian kết thúc"
              className="w-100 mb-4"
            />
          </div>
        </div>
      </div>
    );
  };

  const renderButton = (values) => {
    return (
      <div className="col-12 justify-content-end d-flex">
        <ButtonSubmit
          type="submit"
          onClick={() =>
            onEdit
              ? handleEditCourseOnline(values._id, values)
              : handleCreateCourseOnline(values)
          }
        >
          Xác nhận
          {loading && <div className="loader ml-1"></div>}
        </ButtonSubmit>

        <ButtonCancel onClick={onToggleDrawer}>Hủy</ButtonCancel>
      </div>
    );
  };
  const renderBody = () => {
    return (
      <div className="admin-question">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          {(formikProps) => {
            const { values, setFieldValue } = formikProps;

            // console.log("values.option", values.option);

            return (
              <div>
                <Form
                  className="row "
                  style={{
                    // maxWidth: "600px",
                    margin: "20px 0",
                  }}
                >
                  {renderFormData(values, setFieldValue)}
                  {renderButton(values)}
                </Form>
              </div>
            );
          }}
        </Formik>

        {/* <LPEDrawer
          anchor="left"
          isOpen={openDrawer}
          onToggle={handleCloseDrawer}
          disableScrollLock
        >
          <UserManager addUserToCourse="true" />
        </LPEDrawer> */}
      </div>
    );
  };
  return courseOnlineList &&
    courseOnlineList.data &&
    courseOnlineList.data.length > 0 ? (
    renderBody()
  ) : (
    <></>
  );
}

export default CreateScheduleCourseOnlineManager;
