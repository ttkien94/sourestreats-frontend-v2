import React from "react";
import "./styles.scss";
function PriceCouse(props) {
  const { defaultPrice, promoPrice, defaultPriceStyle, promoPriceStyle } =
    props;
  return (
    <div className={`default-price  ${defaultPriceStyle} `}>
      ${defaultPrice}{" "}
      <span className={`${promoPriceStyle}`}>${promoPrice}</span>
    </div>
  );
}

export default PriceCouse;
