import React, { useEffect } from "react";
import PropTypes from "prop-types";

import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { FormControl, FormHelperText, InputLabel } from "@mui/material";

function SelectField(props) {
  const {
    field,
    label,
    placeholder,
    disabled,
    className,
    options,
    form,
    type,
  } = props;

  console.log("props.options", props.options);
  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];
  return (
    <>
      <FormControl className={className} error={showError} key={props.options}>
        {label && <InputLabel id={field.name}>{label}</InputLabel>}

        <Select
          {...field}
          id={field.name}
          value={field.value}
          disabled={disabled}
          label={label}
          inputProps={{ "aria-label": "Without label" }}
          placeholder={placeholder}
          displayEmpty
        >
          {options.map((option, index) => {
            return (
              <MenuItem
                value={option.value}
                key={index}
                selected={options.selected}
              >
                {option.value}
              </MenuItem>
            );
          })}
        </Select>

        {showError && <FormHelperText>{errors[name]}</FormHelperText>}
      </FormControl>
    </>
  );
}

SelectField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  options: PropTypes.array,
};

SelectField.defaultProps = {
  label: "",
  placeholder: "",
  disabled: false,
  options: [],
};

export default SelectField;
