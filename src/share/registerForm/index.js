import { useState } from "react";
import axios from "axios";
// import { Redirect } from "react-router-dom";
// import useSiteTitle from "core/hooks/useSiteTitle";

import * as Yup from "yup";
import { TheFirstStepSchema } from "app/const/yup";
import { FastField, Form, Formik } from "formik";

import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import InputField from "app/components/customField/inputField";
import SelectField from "app/components/customField/selectField";
import DatePickerField from "app/components/customField/datePickerField";
// import { timeToUnix } from "core/utils/dateUtil";
import { DEFALT_OPTIONS } from "app/components/customField/selectField/options";
// import { API_ENDPOINT, CODE_SUCCESS, SIGN_UP } from "app/const/Api";
// import { KEY_TOKEN } from "app/const/App";

import "./styles.scss";

const ButtonSubmit = styled(Button)`
  color: #fff;
  font-size: 17px;
  background: rgb(46, 142, 125);
  :hover {
    color: #fff;
    background: rgb(46, 142, 105);
  }
`;

function RegisterForm(props) {
  //   const isLogined = Boolean(localStorage.getItem(KEY_TOKEN));
  // const [step, setStep] = useState(0);
  const step = 0;
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState("");

  const handleRegister = async (data) => {
    props?.handleOpen();
    props?.setData(data);
    setLoading(true);
    // delete data["rePassword"];

    data["tags"] = ["Vas-TheFirstStep"];
    data["import_by_tag_name"] = true;
    await axios({
      method: "POST",
      url: "https://api.service.ladiflow.com/1.0/customer/create-or-update",
      headers: {
        "Api-Key": "a21928473afdf60440c8adddec916036aac285ce560b0133",
      },
      data,
    })
      .then((response) => {
        setLoading(false);
        console.log("response", response);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };
  const initialValues = {
    first_name: "",
    email: "",
    phone: "",
    dob: 33756000,
    loaive: "",
    address: "",
    songuoidicung: "",
  };

  // const initialValues = {
  //   dob: 33756000,
  //   email: "ttkien94@gmail.com",
  //   gender: "Nam",
  //   first_name: "trinh trung kien",
  //   phone: "0383204367",
  // };
  const validationSchema = Yup.object().shape(TheFirstStepSchema);

  const RenderUI = (step) => {
    switch (step) {
      case 0:
        return (
          <div
            className="registerForm row"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div className="frame-bg">
              <h3 className=" pt-2  header-title">
                Đừng bỏ lỡ cơ hội <br /> Đăng ký ngay!
              </h3>
            </div>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleRegister}
            >
              {(formikProps) => {
                const { values, errors, touched } = formikProps;

                console.log({ values, errors, touched });

                return (
                  <Form
                    className="row mt-4 py-3 form-body"
                    style={{
                      maxWidth: "700px",
                    }}
                  >
                    <div className="col-12">
                      <FastField
                        name="first_name"
                        component={InputField}
                        label="Tên đầy đủ"
                        placeholder="Nhập tên"
                        className="w-100 mb-4"
                      />
                    </div>

                    <div className="col-12 col-md-6">
                      <FastField
                        name="email"
                        component={InputField}
                        label="Email"
                        placeholder="Nhập email"
                        className="w-100 mb-4"
                      />
                      {errors && (
                        <p className="text-danger mb-4 ml-2 MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium MuiFormHelperText-contained css-1wc848c-MuiFormHelperText-root mt-n3 ">
                          {errors}
                        </p>
                      )}
                    </div>

                    <div className="col-12 col-md-6">
                      <FastField
                        name="phone"
                        component={InputField}
                        label="Số điện thoại"
                        placeholder="Nhập số điện thoại"
                        className="w-100 mb-4"
                        autocomplete
                      />
                    </div>

                    <div className="col-12 col-md-6">
                      <FastField
                        name="loaive"
                        component={SelectField}
                        label="Loại vé"
                        // placeholder="Nhập giới tính"
                        className="w-100 mb-4"
                        options={DEFALT_OPTIONS.loaive}
                      />
                      {errors?.loaive && (
                        <p className="text-danger mb-4 ml-2 MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium MuiFormHelperText-contained css-1wc848c-MuiFormHelperText-root mt-n3 ">
                          {errors.loaive}
                        </p>
                      )}
                    </div>

                    <div className="col-12 col-md-6 mb-2">
                      <FastField
                        name="dob"
                        component={DatePickerField}
                        label="Ngày sinh"
                        placeholder="Nhập ngày sinh"
                        className="w-100 mb-2 mb-md-4"
                      />
                      {errors.dob && (
                        <p className=" text-danger MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium MuiFormHelperText-contained css-1wc848c-MuiFormHelperText-root mt-n3">
                          {errors.dob}
                        </p>
                      )}
                    </div>

                    <div className="col-12 col-md-6">
                      <FastField
                        name="address"
                        component={InputField}
                        label="Địa chỉ"
                        placeholder="Nhập địa chỉ"
                        className="w-100 mb-4"
                      />
                      {errors && (
                        <p className="text-danger mb-4 ml-2 MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium MuiFormHelperText-contained css-1wc848c-MuiFormHelperText-root mt-n3 ">
                          {errors}
                        </p>
                      )}
                    </div>

                    <div className="col-12 col-md-6">
                      <FastField
                        name="songuoidicung"
                        component={InputField}
                        label="Số người đi cùng"
                        placeholder="Số người đi cùng"
                        className="w-100 mb-4"
                        autocomplete
                      />
                    </div>
                    <div className="col-12 justify-content-center d-flex">
                      <ButtonSubmit type="submit">
                        Đăng ký
                        {loading && <div className="loader ml-1"></div>}
                      </ButtonSubmit>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        );
      case 1:
        return (
          <>
            <div className="OTPContainer">
              <div className="formContainerOTP">
                <div className="formHeading">
                  <h5>Soul Retreats đã gửi một Email xác thực đến cho bạn</h5>
                </div>

                <p className="descText px-4">
                  Vui lòng kiểm tra hộp thư đến, có thể Email nằm trong mục spam
                  của bạn.
                </p>
              </div>
            </div>
          </>
        );

      default:
        throw new Error("Invalid Screen!!!");
    }
  };

  return RenderUI(step);
}

export default RegisterForm;
