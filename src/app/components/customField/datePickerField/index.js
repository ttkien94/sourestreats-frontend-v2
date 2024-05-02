import React from "react";
import PropTypes from "prop-types";

import TextField from "@mui/material/TextField";
// import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import DatePicker from "@mui/lab/DatePicker";
// import { convertFullDate, timeToUnix, unixToTime } from "core/utils/dateUtil";
import { timeToUnix } from "core/utils/dateUtil";
import dayjs from "dayjs";

// import dayjs from "dayjs";

function DatePickerField(props) {
  const { field, label, placeholder, disabled, className, form } = props;

  const handleChangeDate = (value) => {
    const changeEvent = {
      target: {
        name: field.name,
        value: value && +timeToUnix(value.$d),
      },
    };
    field.onChange(changeEvent);
  };

  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={label}
        disabled={disabled}
        placeholder={placeholder}
        className={className}
        onChange={handleChangeDate}
        error={showError}
        // helperText={errors[name]}
        helperText="hello"
        views={["year", "month", "day"]}
        openTo="year"
        inputFormat="dd-MM-yyyy"
        defaultValue={dayjs(new Date(field.value))}
        renderInput={(params) => {
          return (
            <TextField
              {...params}
              inputProps={{
                ...params.inputProps,
              }}
              placeholder="Nhập ngày sinh"
              error={showError}
              helperText={errors}
              style={{
                width: "100%",
              }}
            />
          );
        }}
      />
    </LocalizationProvider>
  );
}

DatePickerField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

DatePickerField.defaultProps = {
  label: "",
  placeholder: "",
  disabled: false,
  className: "",
};

export default DatePickerField;
