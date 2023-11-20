import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import useSiteTitle from "core/hooks/useSiteTitle";
import SendEmail from "share/sendEmail";
import emailjs from "@emailjs/browser";
// MUI
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

// Formik
import * as Yup from "yup";
import { FastField, Form, Formik } from "formik";
import InputField from "app/components/customField/inputField";

// Action
import { sendFormContact } from "core/redux/actions/userAction";

// const
import { KEY_TOKEN } from "app/const/App";

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
  const [loading, setLoading] = useState(false);
  const [errorForm, setErrorForm] = useState("");
  const { t } = useTranslation("common");
  const handleSubmit = (e, errors, values) => {
    setLoading(true);
    e.preventDefault();
    if (
      isEmpty(errors) &&
      values.from_email !== "" &&
      values.from_cccd !== ""
    ) {
      let cols = [
        { name: "A", key: 0 },
        { name: "B", key: 1 },
        { name: "C", key: 2 },
        { name: "D", key: 3 },
        { name: "E", key: 4 },
        { name: "F", key: 5 },
        { name: "G", key: 6 },
        { name: "H", key: 7 },
        { name: "I", key: 8 },
        { name: "J", key: 9 },
        { name: "K", key: 10 },
      ];
      let rows = [
        [
          "STT",
          "cccd",
          "name",
          "email",
          "sdt",
          "giới tính",
          "năm sinh",
          "nghề",
          "Khóa học",
          "Học viên cũ",
          "hinh ảnh",
        ],
        [
          1,
          "094038001905",
          "trịnh trung kiên 1",
          "ttkien94@gmail.com",
          "0383204367",
          "nam",
          1994,
          "IT",
          "dragon",
          "cb06",
        ],
      ];
      props.setTable &&
        props.setTable({
          cols: cols,
          rows: rows,
        });
      emailjs
        .sendForm(
          "studentcare_4406d89",
          "template_mh03ego",
          e.target,
          "02u7DxdZhPaf0dxmB"
        )
        .then(
          (result) => {
            console.log("result:", result);
            setErrorForm("");
            // window.location.reload(); //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      setErrorForm(t("enter_info"));
    }
    setLoading(false);
  };

  const initialValues = {
    cccd: "038094001905",
    from_name: "trung kien",
    from_email: "ttkien94@gmail.com",
    messenger: "hello 123",
  };
  // const initialValues = {
  //   cccd: "",
  //   from_name: "",
  //   from_email: "",
  //   messenger: "",
  // };

  const validationSchema = Yup.object().shape({
    cccd: Yup.string().required(t("enter_field")),
    from_name: Yup.string().required(t("enter_field")),
    from_email: Yup.string()
      .required(t("enter_field"))
      .email(t("email_incorrect")),
    messenger: Yup.string().required(t("enter_field")),
  });

  return (
    <div className="col-md-12">
      <div className="box-center px-3 py-3 ">
        <div className="">
          <TitleCourse title={t("all_data_student")} />
          {errorForm && <p className="text-left text-danger ">{errorForm}</p>}
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            // onSubmit={(e) => handleSubmit(e)}
          >
            {(formikProps) => {
              const { values, errors, touched } = formikProps;

              // console.log({ values, errors, touched });

              return (
                <Form
                  className="py-3 row"
                  onSubmit={(e) => handleSubmit(e, errors, values)}
                >
                  <div className="col-12">
                    <FastField
                      name="cccd"
                      component={InputField}
                      label={t("cccd")}
                      placeholder="Nhập Căn Cước"
                      className="w-100 mb-4"
                      typePassword="icon"
                    />
                  </div>
                  <div className="col-12">
                    <FastField
                      name="from_name"
                      component={InputField}
                      label={t("name")}
                      placeholder="Nhập Họ Tên"
                      className="w-100 mb-4"
                      typePassword="icon"
                    />
                  </div>
                  <div className="col-12">
                    <FastField
                      name="from_email"
                      component={InputField}
                      label="Email"
                      placeholder="Email"
                      className="w-100 mb-4"
                    />
                  </div>
                  <div className="col-12">
                    <FastField
                      name="messenger"
                      component={InputField}
                      label={t("messenger")}
                      placeholder="Messenger"
                      className="w-100 mb-4"
                    />
                  </div>
                  <div className="col-12">
                    <ButtonSubmit type="submit">
                      {t("send_now")}
                      {loading && <div className="loader ml-1"></div>}
                    </ButtonSubmit>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default DataStudentForm;
