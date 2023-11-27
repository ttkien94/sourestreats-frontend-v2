import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Link, Redirect } from "react-router-dom";
// import useSiteTitle from "core/hooks/useSiteTitle";
// import SendEmail from "share/sendEmail";
// import emailjs from "@emailjs/browser";
// import { KEY_TOKEN } from "app/const/App";
import { NumericFormat } from "react-number-format";

// MUI
import { styled } from "@mui/material/styles";
import { Button, TextField } from "@mui/material";

// Formik
import * as Yup from "yup";
import { Field, FastField, Form, Formik } from "formik";
import InputField from "app/components/customField/inputField";

// Action
import {
  createStudentAction,
  updateStudentAction,
} from "core/redux/actions/studentAction";

import { useTranslation } from "react-i18next";
import TitleCourse from "share/titleCourse";
import { isEmpty } from "./../../../../../core/utils/isEmpty";

const ButtonSubmit = styled(Button)`
  color: #fff;
  background: #3777bc;
  padding: 10px 20px;

  :hover {
    color: #fff;
    background: #6499e7;
  }
`;

function DataStudentForm(props) {
  const [errorForm, setErrorForm] = useState("");
  const { t } = useTranslation("common");
  const { loading } = useSelector((state) => state.student);

  const dispatch = useDispatch();

  const handleSubmit = (e, errors, values, resetForm) => {
    e.preventDefault();
    if (
      isEmpty(errors) &&
      values.email !== "" &&
      values.cccd !== "" &&
      values.fee_payable !== 0 &&
      values.fee_have_been_paid !== 0
    ) {
      //  conver string to number
      values.fee_payable &&
        !Number.isInteger(values.fee_payable) &&
        (values.fee_payable = parseInt(values.fee_payable.replaceAll(",", "")));

      values.fee_have_been_paid &&
        !Number.isInteger(values.fee_have_been_paid) &&
        (values.fee_have_been_paid = parseInt(
          values.fee_have_been_paid.replaceAll(",", "")
        ));

      values.fee_next_period && !Number.isInteger(values.fee_next_period)
        ? (values.fee_next_period = parseInt(
            values.fee_next_period.replaceAll(",", "")
          ))
        : (values.fee_next_period = 0);

      values.fee_have_been_paid =
        values.fee_have_been_paid + values.fee_next_period;

      values.fee_unpaid = values.fee_payable - values.fee_have_been_paid;
      values.fee_unpaid <= 0
        ? (values.fee_done = true)
        : (values.fee_done = false);

      dispatch(
        props.isUpdate
          ? updateStudentAction(values)
          : createStudentAction(values)
      );
      props.isUpdate && props.setOpenModal(false);
      !props.isUpdate && resetForm();
      //   emailjs
      //     .sendForm(
      //       "studentcare_4406d89",
      //       "template_mh03ego",
      //       e.target,
      //       "02u7DxdZhPaf0dxmB"
      //     )
      //     .then(
      //       (result) => {
      //         console.log("result:", result);
      //         setErrorForm("");
      //         // window.location.reload(); //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
      //       },
      //       (error) => {
      //         console.log(error.text);
      //       }
      //     );
    } else {
      setErrorForm(t("enter_info"));
    }
  };

  const initialValues = props.isUpdate
    ? props.data
    : {
        cccd: "038094001888",
        name: "trung kien",
        from: "PO01 VIP",
        email: "ttkien94@gmail.com",
        phone: "0383204367",
        gender: "Nam",
        birthday: "1994",
        job: "IT",
        course: "phoenix",
        fee_payable: 60888000,
        fee_have_been_paid: 1000000,
        fee_unpaid: 0,
        fee_next_period: 0,
        fee_done: false,
        old_student: "Combo6",
        note: "hello 123",
      };
  // const initialValues = {
  //   cccd: "",
  //   name: "",
  //   email: "",
  //   phone: "",
  //   gender: "",
  //   birthday: "Nam",
  //   job: "",
  //   course: "",
  //   old_student: "",
  //   note: "",
  // };

  const validationSchema = Yup.object().shape({
    cccd: Yup.string().required(t("enter_field")),
    name: Yup.string().required(t("enter_field")),
    email: Yup.string().required(t("enter_field")).email(t("email_incorrect")),
    phone: Yup.number()
      .typeError(t("phone_type_error"))
      .positive("A phone number can't start with a minus")
      .integer(t("phone_type_error")),
    gender: Yup.string(),
    birthday: Yup.number().typeError(t("incorrect_number")),
    fee_payable: Yup.string().required(t("enter_field")),
    fee_have_been_paid: Yup.string().required(t("enter_field")),
  });

  return (
    <div className="col-md-12">
      <div className="box-center px-3 py-3 ">
        <TitleCourse title={t("all_data_student")} />
        {errorForm && <p className="text-left text-danger ">{errorForm}</p>}
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          {(formikProps) => {
            const { values, errors, setFieldValue } = formikProps;
            console.log("errors", errors);
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
                    name="cccd"
                    disabled={props.isUpdate ? true : false}
                    component={InputField}
                    label={t("cccd") + "*"}
                    placeholder={t("cccd") + "*"}
                    className="w-25  mr-3"
                    typePassword="icon"
                  />
                  <FastField
                    name="name"
                    component={InputField}
                    label={t("name") + "*"}
                    placeholder={t("name") + "*"}
                    className="w-25  mr-3"
                    typePassword="icon"
                  />
                  <FastField
                    name="from"
                    component={InputField}
                    label={t("from")}
                    placeholder={t("from")}
                    className="w-25 "
                  />
                </div>
                <div className="col-12 mb-4">
                  <FastField
                    name="email"
                    component={InputField}
                    label="Email*"
                    placeholder="Email*"
                    className="w-25 "
                  />
                  <FastField
                    name="phone"
                    component={InputField}
                    label={t("phone")}
                    placeholder="Phone"
                    className="w-25  ml-3"
                  />
                  <FastField
                    name="birthday"
                    component={InputField}
                    label={t("birthday")}
                    placeholder={t("birthday")}
                    className="w-25  ml-3"
                  />
                </div>

                <div className="col-12  flex-alignitem mb-4">
                  <div className="w-25">
                    <label className="mr-3 inline-block">Giới Tính</label>
                    <Field
                      as="select"
                      name="gender"
                      className=" px-2 py-2"
                      label={t("messenger")}
                    >
                      <option value="Nam" defaultValue>
                        {t("male")}
                      </option>
                      <option value="Nữ">{t("female")}</option>
                      <option value="Khác">{t("other")}</option>
                    </Field>
                  </div>

                  <FastField
                    name="job"
                    component={InputField}
                    label={t("job")}
                    placeholder={t("job")}
                    className="w-25 ml-3"
                  />
                  <FastField
                    name="old_student"
                    component={InputField}
                    label={t("old_student")}
                    placeholder={t("old_student")}
                    className="w-25 ml-3"
                  />
                </div>

                <div className="col-12 mb-4 flex-alignitem">
                  <div className="w-25 inline-block">
                    <label className="inline-block mr-3">Khóa học</label>
                    <Field
                      as="select"
                      name="course"
                      className="px-2 py-2"
                      label={t("messenger")}
                    >
                      <option value="um" defaultValue>
                        UM
                      </option>
                      <option value="sm">SM</option>
                      <option value="icpc">ICPC</option>
                      <option value="phoenix">PHOENIX</option>
                      <option value="imcpc">IMCPC</option>
                      <option value="dragon">DRAGON</option>
                    </Field>
                  </div>
                  <NumericFormat
                    value={values.fee_payable}
                    label={t("fee_payable") + "*"}
                    placeholder={t("fee_payable") + "*"}
                    className="w-25  ml-3 inline-block"
                    // suffix=" VNĐ"
                    thousandSeparator
                    onChange={(e) =>
                      setFieldValue("fee_payable", e.target.value)
                    }
                    customInput={TextField}
                  />
                  <NumericFormat
                    value={values.fee_have_been_paid}
                    label={t("fee_have_been_paid") + "*"}
                    placeholder={t("fee_have_been_paid") + "*"}
                    className="w-25 ml-3 inline-block"
                    thousandSeparator
                    onChange={(e) =>
                      setFieldValue("fee_have_been_paid", e.target.value)
                    }
                    customInput={TextField}
                  />
                </div>
                {props.isUpdate && (
                  <div className="col-12 mb-4">
                    <div className="w-25 inline-block"></div>
                    <NumericFormat
                      value={values.fee_next_period}
                      disabled={values.fee_unpaid <= 0 ? true : false}
                      label={t("fee_next_period") + "*"}
                      placeholder={t("fee_next_period") + "*"}
                      className="w-25 ml-3 inline-block"
                      thousandSeparator
                      onChange={(e) =>
                        setFieldValue("fee_next_period", e.target.value)
                      }
                      customInput={TextField}
                    />

                    <NumericFormat
                      disabled
                      value={values.fee_unpaid}
                      label={t("fee_unpaid") + "*"}
                      placeholder={t("fee_unpaid") + "*"}
                      className="w-25 ml-3 inline-block"
                      // suffix=" VNĐ"
                      thousandSeparator
                      customInput={TextField}
                    />
                  </div>
                )}

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

export default DataStudentForm;
