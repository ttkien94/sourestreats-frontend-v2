import { Button } from "@mui/material";
import React from "react";

function DetailsTopic(props) {
  const { arrayVideo, className, handleOnClick } = props;
  return (
    <div className={`details-topic ${className}`}>
      {arrayVideo.map((item, idx) => {
        return (
          <div key={idx} className="mt-3 list-video">
            <div className="space-between flex">
              <p className="flex-alignitem">{item.title}</p>
              {item.status !== "paided" && (
                <Button color="secondary">Đăng ký</Button>
              )}
            </div>
            {item.listVideo.map((v, index) => {
              return (
                <Button
                  key={index}
                  fullWidth
                  variant={"text"}
                  disabled={
                    v.isVisible && item.havePermission === true ? false : true
                  }
                  className={
                    v.isVisible && item.havePermission === true
                      ? "is-visible mt-3 button"
                      : "mt-3 button"
                  }
                  onClick={() => handleOnClick(v)}
                >
                  {v.name}
                </Button>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default DetailsTopic;
