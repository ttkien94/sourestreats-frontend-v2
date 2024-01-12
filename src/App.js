import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
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

function App() {
  // call backend
  const job = require("./cron.js").job;
  job.start();
  return (
    <Router>
      <AutoScroll />

      <Switch>
        {publicRoutes.map((route, index) => {
          return (
            <HomeTemplate
              exact
              path={route.path}
              Component={route.component}
              key={index}
            />
          );
        })}

        {adminRoutes.map((route, index) => {
          return (
            <AdminTemplate
              exact
              path={route.path}
              Component={route.component}
              key={index}
            />
          );
        })}

        {courseOnlineRoutes.map((route, index) => {
          return (
            <CourseOnlineTemplate
              exact
              path={route.path}
              Component={route.component}
              key={index}
              title={route.title}
            />
          );
        })}

        <HomeTemplate exact path="*" Component={ErrorPage} />
      </Switch>
    </Router>
  );
}

export default App;
