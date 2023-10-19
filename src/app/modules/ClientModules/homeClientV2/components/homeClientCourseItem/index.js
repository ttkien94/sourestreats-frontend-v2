import React from "react";
import { Link } from "react-router-dom";

import "./styles/styles.scss";
import PriceCourse from "share/priceCourse";
import TagCourse from "share/tagCourse";
function HomeClientCourseItem({ course }) {
  return (
    <div className="col-12 col-sm-10  offset-sm-1  col-md-6 offset-md-0 col-lg-4 offset-lg-0 d-flex">
      <div className="course-item">
        <Link to={course.link}>
          <img className="course-item-image" src={course.img} alt="error" />
        </Link>
        <div className="course-item-content">
          <div className="course-item-content-caption">
            <Link to={course.link} className="course-item-content-title">
              {course.title}
            </Link>
            <p className="total-hour">{course.totalHour}</p>
          </div>
          <div className="course-item-content-description text-base">
            {course.description}
          </div>
          <PriceCourse
            defaultPrice={course.defaultPrice}
            promoPrice={course.promoPrice}
          />
          <div className="course-item-content-tag">
            <TagCourse tag={course.tag} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeClientCourseItem;
