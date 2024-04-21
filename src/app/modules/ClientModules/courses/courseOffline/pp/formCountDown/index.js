import React from "react";
import { useCountdown } from "share/countdown";
import "./styles.scss";
function FormCountDownt(props) {
  const [days, hours, minutes, seconds] = useCountdown(props.date);
  const renderTime = (time, title) => {
    return (
      <div className="element">
        <div className="countdown-background countdown-text">
          {time >= 10 ? time : `0` + time}
        </div>
        <div className="paragraph">{title}</div>
      </div>
    );
  };
  return (
    <div className="row">
      <h4 className="paragraph transition time-promotion">THỜI GIAN ƯU ĐÃI</h4>
      <div className="countdown">
        {renderTime(days, "Ngày")}
        {renderTime(hours, "Giờ")}
        {renderTime(minutes, "Phút")}
        {renderTime(seconds, "Giây")}
      </div>
    </div>
  );
}

export default FormCountDownt;
