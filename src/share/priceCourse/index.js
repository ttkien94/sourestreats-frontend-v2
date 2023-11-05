import React from "react";
import "./styles.scss";
function PriceCourse(props) {
  const {
    defaultPrice,
    promoPrice,
    defaultPriceStyle,
    promoPriceStyle,
    timeLimit,
  } = props;
  return (
    <div className={`promo-price `} style={promoPriceStyle}>
      ${promoPrice}
      {timeLimit && `/${timeLimit}`}
      {defaultPrice && (
        <span className={` default-price`} style={defaultPriceStyle}>
          /${defaultPrice}
        </span>
      )}
    </div>
  );
}

export default PriceCourse;
