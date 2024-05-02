import React, { forwardRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// import { NumericFormat } from "react-number-format";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
// MUI
import { styled } from "@mui/material/styles";
import { Button, TextField } from "@mui/material";

// Formik
import * as Yup from "yup";
import { FastField, Form, Formik } from "formik";
import InputField from "app/components/customField/inputField";

// Action
import {
  createCourseAction,
  updateCourseAction,
} from "core/redux/actions/courseAction";

import { useTranslation } from "react-i18next";
import TitleCourse from "share/titleCourse";
import { isEmpty } from "../../../../../core/utils/isEmpty";

const ButtonSubmit = styled(Button)`
  color: #fff;
  background: #3777bc;
  padding: 10px 20px;

  :hover {
    color: #fff;
    background: #6499e7;
  }
`;
function DataCourseForm(props) {
  const [errorForm, setErrorForm] = useState("");
  const { t } = useTranslation("common");
  const { loading } = useSelector((state) => state.course);

  const dispatch = useDispatch();

  const handleSubmit = (e, errors, values, resetForm) => {
    e.preventDefault();
    console.log("handleSubmit");
    if (
      isEmpty(errors) &&
      values.course_code !== "" &&
      values.course_start_time !== "" &&
      values.course_end_time !== ""
    ) {
      console.log("course_start_time:", values.course_start_time);
      console.log("course_end_time:", values.course_end_time);
      dispatch(
        props.isUpdate ? updateCourseAction(values) : createCourseAction(values)
      );

      // if (props.isImportData) {
      //   const findIndex = courseList.data.findIndex(
      //     (x) => x.cccd === values.cccd
      //   );
      //   if (findIndex !== -1) {
      //     setErrorForm("Cccd đã có sẵn, vui lòng điền thông tin khác");
      //   } else {
      //     setErrorForm("");
      //     props.setOpenModal(false);
      //     props.handleUpdateImportData(values);
      //   }
      // } else {
      //   dispatch(
      //     props.isUpdate
      //       ? updateCourseAction(values)
      //       : createCourseAction(values)
      //   );
      //   props.isUpdate ? props.setOpenModal(false) : resetForm();
      // }
    } else {
      setErrorForm(t("enter_info"));
    }
  };

  const initialValues = props.data
    ? props.data
    : {
        course_code: "",
        course_start_time: new Date(),
        course_end_time: new Date(),
        course_location: "",
        total_register: "",
        total_checkin: "",
        note: "",
      };
  const validationSchema = Yup.object().shape({
    course_code: Yup.string().required(t("enter_field")),
    course_start_time: Yup.date().required(t("enter_field")),
    course_end_time: Yup.date().required(t("enter_field")),
    course_location: Yup.string().required(t("enter_field")),
    note: Yup.string(),
  });
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <div
      // className="example-custom-input"
      onClick={onClick}
      ref={ref}
      variant="outlined"
      className="course-date-picker-custom-input"
    >
      {value}
    </div>
  ));
  return (
    <div className="col-md-12">
      <div className="box-center px-3 py-3 ">
        <TitleCourse title={t("course_info")} />
        {errorForm && (
          <p className="text-left text-danger text-lg">{errorForm}</p>
        )}
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          {(formikProps) => {
            const { values, errors, setFieldValue } = formikProps;
            // console.log("errors", errors);
            // console.log({ values, errors, touched });

            return (
              <Form
                className="py-3 row"
                onSubmit={(e) =>
                  handleSubmit(e, errors, values, formikProps.resetForm)
                }
              >
                <div className="col-12 mb-4">
                  <FastField
                    name="course_code"
                    component={InputField}
                    label={t("course_code") + "*"}
                    placeholder={t("course_code") + "*"}
                    className="w-25  mr-3"
                    typePassword="icon"
                  />

                  <FastField
                    name="course_location"
                    component={InputField}
                    label={t("course_location") + "*"}
                    placeholder={t("course_location") + "*"}
                    className="w-25  mr-3"
                    typePassword="icon"
                  />
                </div>
                <div className="col-12 mb-4 ">
                  <div className="course-date-picker">
                    <div>
                      <label>{t("course_start_time")}</label>
                    </div>
                    <DatePicker
                      selected={values.course_start_time}
                      onChange={(date) =>
                        setFieldValue("course_start_time", date)
                      }
                      customInput={<ExampleCustomInput />}
                    />
                  </div>
                  <div className="course-date-picker ml-3">
                    <div>
                      <label>{t("course_end_time")}</label>
                    </div>
                    <DatePicker
                      selected={values.course_end_time}
                      onChange={(date) =>
                        setFieldValue("course_end_time", date)
                      }
                      customInput={<ExampleCustomInput />}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <TextField
                    name="note"
                    defaultValue={values.note}
                    onChange={(e) => {
                      setFieldValue("note", e.target.value);
                    }}
                    label={t("note")}
                    placeholder="note"
                    multiline
                    rows={4}
                    className="w-100 mb-4 "
                  />
                </div>
                <div
                  className="col-12"
                  style={{ justifyContent: "end", display: "flex" }}
                >
                  <ButtonSubmit type="submit" disabled={loading ? true : false}>
                    {props.isUpdate ? t("update_now") : t("send_now")}
                    {loading && <div className="loader ml-1"></div>}
                  </ButtonSubmit>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

export default DataCourseForm;
