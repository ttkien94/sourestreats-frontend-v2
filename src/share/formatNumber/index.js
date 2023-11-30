function FormatNumberic(props) {
  let result = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(props.num);
  return result;
}

export default FormatNumberic;
