import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { appAction } from "core/redux/actions/appAction";
import Header from "./layout/header";
import Footer from "./layout/footer";
import Loading from "share/loading";

import { KEY_TOKEN } from "app/const/App";
import CallIcon from "assets/images/icon-call-nh.png";
import LogoZalo from "assets/images/logo-zalo.png";
import LogoMessenger from "assets/images/logo-messenger.png";
import "./styles/styles.scss";
import { isEmpty } from "lodash";

export const HomeTemplate = ({ Component, ...restProps }) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.app);
  const { userInfo } = useSelector((state) => state.auth);
  // FETCH_API_USER
  useEffect(() => {
    if (localStorage.getItem(KEY_TOKEN)) {
      dispatch(appAction());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderBody = () => {
    return (
      <div>
        <Header />
        {loading ? <Loading /> : <Outlet />}
        <Footer />
        <div className="hotline-phone-ring-wrap">
          <div className="hotline-phone-ring">
            <div className="hotline-phone-ring-circle"></div>
            <div className="hotline-phone-ring-circle-fill"></div>
            <div className="hotline-phone-ring-img-circle">
              <a href="tel:02835354859" className="pps-btn-img">
                <img src={CallIcon} alt={CallIcon} width="50" />
              </a>
            </div>
          </div>
          <div className="hotline-bar">
            <a href="tel:02835354859">
              <span className="text-hotline">028 3535 4859</span>
            </a>
          </div>
        </div>
        <div className="logo-zalo-wrap">
          <div className="hotline-phone-ring">
            <div className="hotline-phone-ring-circle"></div>
            <div className="hotline-phone-ring-circle-fill"></div>
            <div className="hotline-phone-ring-img-circle">
              <a
                href="https://zalo.me/0906880917"
                className="pps-btn-img"
                target="_blank"
                rel="noreferrer"
              >
                <img src={LogoZalo} alt={LogoZalo} width="50" />
              </a>
            </div>
          </div>
        </div>
        <div className="logo-messenger-wrap">
          <div className="hotline-phone-ring">
            <div className="hotline-phone-ring-circle"></div>
            <div className="hotline-phone-ring-circle-fill"></div>
            <div className="hotline-phone-ring-img-circle">
              <a
                href="https://www.messenger.com/t/122097122600017594"
                className="pps-btn-img"
                target="_blank"
                rel="noreferrer"
              >
                <img src={LogoMessenger} alt={LogoMessenger} width="50" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return localStorage.getItem(KEY_TOKEN) ? (
    !isEmpty(userInfo) ? (
      renderBody()
    ) : (
      <Loading />
    )
  ) : (
    renderBody()
  );
  // return (
  //   <Route
  //     {...restProps}
  //     element={(propsRoute) => {

  //     }}
  //   />
  // );
};
