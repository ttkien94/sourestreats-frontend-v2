import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import useSiteTitle from "core/hooks/useSiteTitle";

import { API_ENDPOINT, VERIFY_REGISTER } from "app/const/Api";

import "./styles/styles.scss";

function ConfirmRegister() {
  useSiteTitle("confirm_register");
  let { token } = useParams();

  const [isLoading, setIsLoading] = useState(false);
  // http://localhost:3000/xac-nhan-dang-ky/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJiaXJ0aERheSI6MTY5NjI2NjAwMDAwMCwiZW1haWwiOiJ0dGtpZW45OTRAZ21haWwuY29tIiwiZ2VuZGVyIjoibmFtIiwibmFtZSI6InRyaW5oIHRydW5nIGtpZW4iLCJwYXNzd29yZCI6IiQyYSQxMCRwb1hVWTVqNElPb1gzTnFXa0FrYVVPSEtUZ1BuMS45N0F6MVQvM1djVFlhWEEzSjZUWndnZSIsInBob25lIjoiMDM4MzIwNDM2NyIsImlhdCI6MTY5NjQwMzI1MiwiZXhwIjoxNjk2NDAzNTUyfQ.OdyI_MfuOEW-_2oPK2GxrW4ODJR-gbYL5JGgNJOant4
  useEffect(() => {
    setIsLoading(true);

    axios({
      method: "post",
      url: API_ENDPOINT + VERIFY_REGISTER,
      data: {
        token: token,
      },
    })
      .then(() => setIsLoading(false))
      .catch(() => setIsLoading(false));
  }, [token]);

  return (
    <>
      <main className="forgetContainer">
        {isLoading ? (
          "Đang tải"
        ) : (
          <div className="formContainerForget">
            <div className="formHeading">
              <h5>Tạo tài khoản thành công</h5>
            </div>

            <p className="descText px-4">Tài khoản của bạn đã được xác thực</p>

            <p className="descText px-4">
              Giờ đây bạn có thể đăng nhập và sử dụng tài khoản.
            </p>

            <div className="formInput mt-3">
              <Link to="/dang-nhap" className="confirmBtn my-3">
                Đăng nhập
              </Link>
            </div>
          </div>
        )}
      </main>
    </>
  );
}

export default ConfirmRegister;
