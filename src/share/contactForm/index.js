import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import useSiteTitle from "core/hooks/useSiteTitle";
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

const ButtonSubmit = styled(Button)`
  color: #fff;
  background: #3777bc;
  padding: 10px 20px;

  :hover {
    color: #fff;
    background: #6499e7;
  }
`;

function ContactForm() {
  const { t } = useTranslation("common");
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("handleSubmit");
    // dispatch(sendFormContact(data));
    // console.log("e", e.target);
    // emailjs
    //   .sendForm(
    //     "studentcare_4406d89",
    //     "template_mh03ego",
    //     e.target,
    //     "02u7DxdZhPaf0dxmB"
    //   )
    //   .then(
    //     (result) => {
    //       console.log("result:", result);
    //       // window.location.reload(); //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
  };

  const initialValues = {
    name: "",
    email: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required(t("enter_field")),
    email: Yup.string().required(t("enter_field")).email(t("email_incorrect")),
  });

  return (
    <div className="col-md-12">
      <div className="box-center px-3 py-2 ">
        <div className="">
          <TitleCourse title={t("contact")} />
          {error && <p className="text-left text-danger mb-2">{error}</p>}

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
          >
            {(formikProps) => {
              const { values, errors, touched } = formikProps;

              console.log({ values, errors, touched });

              return (
                <Form className="row" onSubmit={handleSubmit}>
                  <div className="col-12">
                    <FastField
                      name="name"
                      component={InputField}
                      label={t("name")}
                      placeholder="Nhập Họ & Tên"
                      className="w-100 mb-3 mt-3  input-field"
                      typePassword="icon"
                    />
                  </div>
                  <div className="col-12">
                    <FastField
                      name="email"
                      component={InputField}
                      label="Email"
                      placeholder="Email"
                      className="w-100 mb-2"
                    />
                  </div>
                  {/**
                 <div className="col-12">
                    <FastField
                      name="messenger"
                      component={InputField}
                      label={t("messenger")}
                      placeholder="Messenger"
                      className="w-100 mb-4"
                    />
                  </div>
                */}
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

export default ContactForm;
