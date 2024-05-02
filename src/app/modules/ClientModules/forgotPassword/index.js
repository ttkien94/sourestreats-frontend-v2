import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useSiteTitle from "core/hooks/useSiteTitle";

import TextInput from "app/components/textInput";
import LoadingButtom from "app/components/loadingButtom";

import { ValidationEmail } from "core/utils/emailUtil";
import { API_ENDPOINT, CODE_SUCCESS, FORGOT_PASSWORD } from "app/const/Api";

// styles
import "./styles/styles.scss";

function ForgetPassword() {
  useSiteTitle("forgot_password");
  const history = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [counter, setCounter] = useState(60);
  const isSubmitForget = Boolean(localStorage.getItem("isSubmitForget"));

  const refForm = useRef();
  console.log("isSubmitForget", isSubmitForget);
  // Life cycle for timer function to render new state of time
  useEffect(() => {
    const timer =
      counter > 0 &&
      setInterval(() => {
        setCounter((prevState) => prevState - 1);
      }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [counter]);

  // Check to active button submit
  useEffect(() => {
    if (counter === 0) {
      setLoading(false);
    }
  }, [counter]);

  // Check to remove counter in localstorage
  useEffect(() => {
    if (counter === 0 && isSubmitForget) {
      localStorage.removeItem("isSubmitForget");
    }
  }, [counter, isSubmitForget]);

  // Check the first load page able to apply counter
  useEffect(() => {
    isSubmitForget ? setCounter(60) : setCounter(0);
    isSubmitForget ? setLoading(true) : setLoading(false);
  }, [isSubmitForget]);

  const handleCancel = () => {
    history.goBack();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("HandleSubmit Forgot Password");
    const email = refForm.current["email"].value;

    if (!email) {
      setError({
        email: "Email không được bỏ trống",
      });
      refForm.current["email"].focus();
      return;
    } else {
      if (!ValidationEmail(email)) {
        setError({
          email: "Email không hợp lệ",
        });
        refForm.current["email"].focus();
        return;
      }
    }

    // Save localstorage and countdown 60s
    localStorage.setItem("isSubmitForget", true);
    setLoading(true);
    setCounter(60);
    forgetAction(email);
  };

  const forgetAction = async (email) => {
    setError({});

    await axios({
      method: "POST",
      url: API_ENDPOINT + FORGOT_PASSWORD,
      data: {
        email,
      },
    })
      .then((res) => {
        if (res.status === CODE_SUCCESS) {
          console.log(res.data);
        }
      })
      .catch(() => {
        setLoading(false); // active button

        setError({
          email: "Email không được tìm thấy",
        });
      });
  };

  return (
    <div>
      <main className="forgetContainer">
        <div className="formContainer">
          <div className="formHeading">
            <h5>Tìm lại mật khẩu của bạn</h5>
          </div>

          <p className="descText">
            Vui lòng nhập email để tìm kiếm tài khoản của bạn.
          </p>

          <form className="formInput" ref={refForm}>
            <TextInput
              label="Email"
              placeHolder="Nhập Email"
              type="text"
              name="email"
              error={error.email}
              typeInput="text"
            />

            <p className="text-warning text-left mb-3">
              {loading && "Gửi lại nếu bạn không nhận được mail"}
            </p>

            <div className="wrapperButton">
              <LoadingButtom
                onClick={handleCancel}
                className="forgot__btn--cancel mr-3"
                value="Hủy"
              />

              <div style={{ display: "flex", justifyContent: "center" }}>
                <LoadingButtom
                  onClick={handleSubmit}
                  className="forgot__btn--save"
                  disabled={loading}
                  value={loading ? `Gửi lại sau ${counter}s` : "Tìm kiếm"}
                  loading={loading}
                  type="submit"
                />
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default ForgetPassword;
