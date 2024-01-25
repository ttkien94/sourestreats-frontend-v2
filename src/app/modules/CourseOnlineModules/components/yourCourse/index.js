import React from "react";
import { Button } from "@mui/material";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
function YourCourse(props) {
  return (
    <div className="your-course mt-5">
      <div className="title d-flex justify-content-between">
        <h3 style={{ color: "white" }}>Khóa học của bạn</h3>
        <Button
          variant="contained"
          sx={{
            bgcolor: "transparent",
            border: "1px solid rgba(255, 255, 255, .2)",
            borderRadius: "10px",
            fontSize: "12px",
            fontWeight: "700",
          }}
        >
          Xem tất cả
        </Button>
      </div>
      <div className="row">
        {props.arrayYourCourse.map((course, index) => {
          return (
            <div key={index} className="col-6">
              <div className="mt-3 px-4 py-4 d-flex justify-content-between box-radius">
                <div>
                  <AddAPhotoIcon />
                  <p className="mt-2">{course.name}</p>
                  <p
                    style={{
                      fontSize: "10px",
                      fontWeight: "400",
                      color: "rgba(255,255,255,0.6)",
                    }}
                  >
                    {course.type}
                  </p>
                </div>
                <div>
                  <div
                    class="progress-bar"
                    style={{
                      background: `radial-gradient(closest-side, #282C38 79%, transparent 80% 100%),conic-gradient(#FF621F ${course.percent}, rgba(255, 98, 31, 0.2) 0)`,
                    }}
                  >
                    {course.percent}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default YourCourse;
