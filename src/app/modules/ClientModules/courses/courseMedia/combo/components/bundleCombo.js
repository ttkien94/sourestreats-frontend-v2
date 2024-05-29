import { Button } from "@mui/material";
import React from "react";
import "./styles.scss";

function BundlesCombo(props) {
  const bundles = props?.data || [
    {
      title: "Self Matery",
      description:
        " A short paragraph of description about course number 1 that the students are about to learn. It is best to use the very general course description paragraph which is also display on the course detail screen.",
      img: props?.bg,
      price: 23.99,
    },
    {
      title: "Universal Mastery",
      description:
        " A short paragraph of description about course number 1 that the students are about to learn. It is best to use the very general course description paragraph which is also display on the course detail screen.",
      img: props?.bg,
      price: 23.99,
    },
    {
      title: "ICPC",
      description:
        " A short paragraph of description about course number 1 that the students are about to learn. It is best to use the very general course description paragraph which is also display on the course detail screen.",
      img: props?.bg,
      price: 23.99,
    },
    {
      title: "Congratulations! You're Done!",
      description:
        "You did it! You’ve completed the full Learning Path. We can’t wait to see where these skills take you next.",
    },
  ];
  const renderCourse = (item) => {
    return (
      <div className="bundles-combo-content pb-3">
        <div className="bunles-combo-title title-h2">{item.title}</div>
        <div className="bunles-combo-description mt-3">{item.description}</div>
        {item.img && (
          <div className=" mt-3 d-flex">
            <img
              src={item.img || ""}
              alt="img"
              className="br-top-left br-bottom-left"
            />
            <div className="right-content br-top-right br-bottom-right bg-white">
              <div className="d-flex justify-content-between">
                <p>12,048 students</p>
                <p>3h 32m</p>
              </div>
              <div className="title-h3 ">{item.title}</div>
              <div className="buy-course-single">
                <Button
                  variant="contained"
                  sx={{ borderRadius: 20, p: 1, pl: 3, pr: 3 }}
                >
                  ${item.price}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };
  return (
    <div className="bundles-combo">
      {bundles.map((element) => {
        return renderCourse(element);
      })}
    </div>
  );
}

export default BundlesCombo;
