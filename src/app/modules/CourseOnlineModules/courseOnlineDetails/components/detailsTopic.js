import { Button } from "@mui/material";
import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
function DetailsTopic(props) {
  const { listFloor, className, handleOnClick } = props;

  return (
    <div className={`details-topic ${className}`}>
      {listFloor.map((item, idx) => {
        return (
          <div key={idx} className="list-video pt-4">
            <div className="space-between">
              <p className="flex-alignitem font-size18">{item.title}</p>
              {item.status !== "paided" && (
                <Button color="secondary">Đăng ký</Button>
              )}
            </div>
            {item.listVideo.map((v, index) => {
              return (
                <div
                  key={index}
                  className={
                    "col-12 video-name mt-2 " +
                    (v.isVisible && item.havePermission === true
                      ? "is-visible"
                      : "")
                  }
                >
                  <div
                    className="font-size14 space-between"
                    onClick={() =>
                      v.isVisible &&
                      item.havePermission === true &&
                      handleOnClick(v)
                    }
                  >
                    <div>{v.name}</div>
                    <div>
                      {(v.time / 60).toFixed(2)}
                      <PlayArrowIcon className="icon-play" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default DetailsTopic;
