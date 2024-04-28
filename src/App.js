import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import {
  adminRoutes,
  courseOnlineRoutes,
  publicRoutes,
} from "./app/config/routes";

import { AdminTemplate, HomeTemplate, CourseOnlineTemplate } from "template";
import ErrorPage from "app/modules/Error";

import AutoScroll from "./app/components/autoScroll";

import "react-image-lightbox/style.css";
import "react-modal-video/scss/modal-video.scss";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import TagManager from "react-gtm-module";
import { useEffect } from "react";
import Client from "app/modules/ClientModules";
function App() {
  // auto scoll to tóps
  // call backend
  const job = require("./cron.js").job;
  job.start();
  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-KTHH6NK" });
  }, []);

  return (
    <Router>
      <AutoScroll />

      <Routes>
        <Route element={<HomeTemplate />}>
          {publicRoutes.map((route, index) => {
            return (
              <Route
                exact
                path={route.path}
                element={<route.component />}
                key={index}
              />
            );
          })}
        </Route>
        <Route element={<AdminTemplate />}>
          {adminRoutes.map((route, index) => {
            return (
              <Route
                exact
                path={route.path}
                element={<route.component />}
                key={index}
              />
            );
          })}
        </Route>

        <Route element={<CourseOnlineTemplate />}>
          {courseOnlineRoutes.map((route, index) => {
            return (
              <Route
                exact
                path={route.path}
                element={<route.component />}
                key={index}
                title={route.title}
              />
            );
          })}
        </Route>
        {/* {courseOnlineRoutes.map((route, index) => {
          return (
            <CourseOnlineTemplate
              exact
              path={route.path}
              Component={route.component}
              key={index}
              title={route.title}
            />
          );
        })} */}
        {/* <HomeTemplate exact path="*" Component={ErrorPage} /> */}
      </Routes>
    </Router>
  );
}

export default App;
