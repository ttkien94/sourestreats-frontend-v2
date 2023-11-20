import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import useSiteTitle from "core/hooks/useSiteTitle";

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

  const handleSubmit = (data) => {
    dispatch(sendFormContact(data));
  };

  // const initialValues = {
  //   name: "trung kien",
  //   email: "ttkien94@gmail.com",
  //   messenger: "hello 123",
  // };
  const initialValues = {
    name: "",
    email: "",
    messenger: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required(t("enter_field")),
    email: Yup.string().required(t("enter_field")).email(t("email_incorrect")),
    messenger: Yup.string().required(t("enter_field")),
  });

  return (
    <div className="col-md-12">
      <div className="box-center mt-3 px-3 py-3 ">
        <div className="">
          <TitleCourse title={t("contact")} />
          {error && <p className="text-left text-danger mb-4">{error}</p>}

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {(formikProps) => {
              // const { values, errors, touched } = formikProps;

              // console.log({ values, errors, touched });

              return (
                <Form className="py-3 row">
                  <div className="col-12">
                    <FastField
                      name="name"
                      component={InputField}
                      label={t("name")}
                      placeholder="Nhập mật khẩu"
                      className="w-100 mb-4"
                      typePassword="icon"
                    />
                  </div>
                  <div className="col-12">
                    <FastField
                      name="email"
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

export default ContactForm;
