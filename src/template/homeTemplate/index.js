import React, { useEffect } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { appAction } from "core/redux/actions/appAction";
import { publicRoutes } from "app/config/routes";
import Header from "./layout/header";
import Footer from "./layout/footer";
import IsLoading from "app/components/loading";
import Loading from "share/loading";

import { KEY_TOKEN } from "app/const/App";
import CallIcon from "assets/images/icon-call-nh.png";
import "./styles/styles.scss";

export const HomeTemplate = ({ Component, ...restProps }) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.app);

  // FETCH_API_USER
  useEffect(() => {
    if (Boolean(localStorage.getItem(KEY_TOKEN))) {
      dispatch(appAction());
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
    </div>
  );
  // return (
  //   <Route
  //     {...restProps}
  //     element={(propsRoute) => {

  //     }}
  //   />
  // );
};
