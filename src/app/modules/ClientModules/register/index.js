import { useState } from "react";
import axios from "axios";
import { Navigate, useLocation } from "react-router-dom";
import useSiteTitle from "core/hooks/useSiteTitle";

import * as Yup from "yup";
import { TheFirstStepSchema, YupSchema } from "app/const/yup";
import { FastField, Form, Formik } from "formik";

import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import InputField from "app/components/customField/inputField";
import SelectField from "app/components/customField/selectField";
import DatePickerField from "app/components/customField/datePickerField";
// import { timeToUnix } from "core/utils/dateUtil";
import { DEFALT_OPTIONS } from "app/components/customField/selectField/options";
// import { API_ENDPOINT, CODE_SUCCESS, SIGN_UP } from "app/const/Api";
import { KEY_TOKEN } from "app/const/App";

import "./styles/styles.scss";
import { registerAction } from "core/redux/actions/authAction";
import { useDispatch } from "react-redux";
import { timeToUnix } from "core/utils/dateUtil";

const ButtonSubmit = styled(Button)`
  color: #fff;
  background: #3777bc;

  :hover {
    color: #fff;
    background: #3777bc;
  }
`;

function Register(props) {
  useSiteTitle("register");
  const isLogined = Boolean(localStorage.getItem(KEY_TOKEN));
  const dispatch = useDispatch();
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const title = props?.title ? props.title : "Đăng ký tài khoản";
  const location = useLocation();
  const type = location?.state.type;
  const handleRegister = async (data) => {
    try {
      setLoading(true);
      // delete data["rePassword"];
      if (type === "Register") {
        data.name = data.first_name;
        dispatch(registerAction(data, setLoading, setError));
        data["tags"] = ["user-register"];
        data["import_by_tag_name"] = true;
      } else {
        data["loaive"] = "General";
        data["tags"] = ["Vas-TheFirstStep"];
        data["import_by_tag_name"] = true;
      }

      await axios({
        method: "POST",
        url: "https://api.service.ladiflow.com/1.0/customer/create-or-update",
        headers: {
          "Api-Key": "a21928473afdf60440c8adddec916036aac285ce560b0133",
        },
        data,
      })
        .then((response) => {
          console.log("response", response);
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
        });
      setStep(1);
    } catch (err) {}
  };

  const initialValues = {
    first_name: "",
    gender: "Nam",
    email: "",
    phone: "",
    dob: timeToUnix(new Date()),
    password: "",
    rePassword: "",
  };

  // const initialValues = {
  //   dob: 763405200000,
  //   email: "ttkien994@gmail.com",
  //   gender: "Nam",
  //   first_name: "trinh trung kien",
  //   phone: "0383204367",
  //   password: "Kien@@12",
  //   rePassword: "Kien@@12",
  // };
  const validationSchema = Yup.object().shape(
    type === "Register" ? YupSchema : TheFirstStepSchema
  );

  const RenderUI = (step) => {
    switch (step) {
      case 0:
        return (
          <>
            <div className="registerContainer p-5">
              <div
                className="formContainer"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <h3 className="text-center pt-3 text-secondary">{title}</h3>
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={handleRegister}
                >
                  {(formikProps) => {
                    const { errors } = formikProps;

                    // console.log({ values, errors, touched });
                    return (
                      <Form
                        className="row mt-4 py-3"
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
                          {!!errors?.email && (
                            <p className="text-danger mb-4 ml-2 MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium MuiFormHelperText-contained css-1wc848c-MuiFormHelperText-root mt-n3 ">
                              {errors.email}
                            </p>
                          )}
                          {!!errors && (
                            <p className="text-danger mb-4 ml-2 MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium MuiFormHelperText-contained css-1wc848c-MuiFormHelperText-root mt-n3 ">
                              {error}
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
                            name="gender"
                            component={SelectField}
                            label="Giới tính"
                            placeholder="Nhập giới tính"
                            className="w-100 mb-4"
                            options={DEFALT_OPTIONS.gender}
                          />
                        </div>

                        <div className="col-12 col-md-6 mb-2">
                          <FastField
                            name="dob"
                            component={DatePickerField}
                            label="Ngày sinh"
                            placeholder="Nhập ngày sinh"
                            className="w-100 mb-2 mb-md-4"
                          />
                          {errors?.dob && (
                            <p className=" text-danger MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium MuiFormHelperText-contained css-1wc848c-MuiFormHelperText-root mt-n3">
                              {errors.dob}
                            </p>
                          )}
                        </div>
                        {/* {props?.type === "TheFirstStep" ? <></> : null} */}
                        {type === "Register" ? (
                          <>
                            <div className="col-12">
                              <FastField
                                name="password"
                                type="password"
                                component={InputField}
                                label="Mật khẩu"
                                placeholder="Nhập mật khẩu"
                                className="w-100 mb-2 mb-md-4"
                              />
                            </div>

                            <div className="col-12">
                              <FastField
                                name="rePassword"
                                type="password"
                                component={InputField}
                                label="Nhập lại mật khẩu"
                                placeholder="Nhập lại mật khẩu"
                                className="w-100 mb-4"
                              />
                            </div>
                          </>
                        ) : null}

                        <div className="col-12 justify-content-end d-flex">
                          <ButtonSubmit type="submit">
                            Xác nhận
                            {loading && <div className="loader ml-1"></div>}
                          </ButtonSubmit>
                        </div>
                      </Form>
                    );
                  }}
                </Formik>
              </div>
            </div>
          </>
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

  return <>{!isLogined ? RenderUI(step) : <Navigate to="/" />}</>;
}

export default Register;
