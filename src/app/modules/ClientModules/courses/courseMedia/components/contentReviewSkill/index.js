import { Button } from "@mui/material";
import React from "react";
import "./styles.scss";
function ContentReviewSkill(props) {
  const { learnerReview } = props;
  return (
    <div className="learner-reviews">
      <div className="title-h2">Learner Reviews</div>
      <div className="description-gray">2 reviews</div>
      <div className="p-4 mt-5 course-media-box">
        <div className="title-h4 text-blue2 d-flex justify-content-center ">
          Expectations Met?
          <div className="bg-radius"></div>
        </div>
        {learnerReview.map((item, idx) => {
          return (
            <div className="px-5 bold pt-3">
              <div className="d-flex justify-content-between">
                {item.title}{" "}
                <div className="description-gray">{item.rate}%</div>
              </div>
              <div className="rate-bar">
                <div
                  className="rate-bar-leaner"
                  style={{ width: item.rate + "%" }}
                />
              </div>
            </div>
          );
        })}
        <div className="justify-content-center d-flex mt-3">
          <Button
            variant="contained"
            style={{
              color: "white",
              fontSize: 14,
              fontFamily: "Gilroy-Medium",
              borderRadius: 20,
            }}
          >
            Leave a Review
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ContentReviewSkill;
