import React from "react";

import "./styles.scss";

function CourseOfflineTestimonialCard({ hero, name, job, ava }) {
  return (
    <div className="course-offline-tes-card col-lg-4 offset-lg-0 col-md-8 offset-md-2 col-sm-12 offset-sm-0 col-xs-12 offset-xs-0  ">
      <div className="position-relative px-3 course-offline-tes-border">
        <div className="d-flex justify-content-center ">
          <img src={ava} alt={ava} className="img-ava" />
        </div>

        <div className="course-offline-tes-name">
          {name}
          <p className="course-offline-tes-job">{job}</p>
        </div>

        <p className="course-offline-tes-hero">{hero}</p>
      </div>
    </div>
  );
}

export default CourseOfflineTestimonialCard;
