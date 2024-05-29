import * as Yup from "yup";

const phoneRegExp = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
const passRegExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/;

export const YupSchema = {
  first_name: Yup.string()
    .required("Vui lòng nhập trường này.")
    .min(3, "Có ít nhất là 3 ký tự.")
    .max(40, "Có nhiều nhất là 40 ký tự."),
  email: Yup.string()
    .required("Vui lòng nhập trường này")
    .email("Email chưa đúng"),
  phone: Yup.string()
    .required("Vui lòng nhập trường này")
    .matches(phoneRegExp, "Số điện thoại chưa đúng."),
  dob: Yup.number("Vui lòng nhập đúng định dạng")
    .required("Vui lòng nhập trường này")
    .min(new Date(1900, 0, 1), "Ngày thấp nhất không dưới năm 1900")
    .max(new Date(), "Ngày lớn nhất không được quá hôm nay"),
  // gender: Yup.mixed().oneOf(["nam", "nu"], "Vui lòng nhập đúng trường này"),
  password: Yup.string()
    .required("Vui lòng nhập trường này")
    .matches(
      passRegExp,
      "Mật khẩu có ít nhất 8 ký tự, bao gồm chữ thường, số và ít nhất 1 ký tự in hoa, ký tự đặc biệt."
    ),
  rePassword: Yup.string()
    .required("Vui lòng nhập trường này")
    .oneOf([Yup.ref("password"), null], "Mật khẩu không khớp"),
};

export const TheFirstStepSchema = {
  first_name: Yup.string()
    .required("Vui lòng nhập trường này.")
    .min(3, "Có ít nhất là 3 ký tự.")
    .max(40, "Có nhiều nhất là 40 ký tự."),
  email: Yup.string()
    .required("Vui lòng nhập trường này")
    .email("Email chưa đúng"),
  phone: Yup.string()
    .required("Vui lòng nhập trường này")
    .matches(phoneRegExp, "Số điện thoại chưa đúng."),
  dob: Yup.number()
    .typeError("Vui lòng nhập đúng định dạng Tháng/Ngày/Năm")
    .required("Vui lòng nhập trường này")
    .min(new Date(1900, 0, 1), "Ngày thấp nhất không dưới năm 1900")
    .max(new Date(), "Ngày lớn nhất không được quá hôm nay"),
  loaive: Yup.string().required("Vui lòng nhập loại vé"),
};
