import { TextField } from "@mui/material";
import _ from "lodash";
import React, { useRef } from "react";
import { useTranslation } from "react-i18next";

function SearchBar(props) {
  const { placeholder, label, handleDebouceSearch, ...rest } = props;

  const { t } = useTranslation("common");

  const handleInputOnchange = (e) => {
    handleDebouceSearch && debounceSearch.current(e.target.value);
  };
  const debounceSearch = useRef(
    _.debounce((text) => handleDebouceSearch(text), 700)
  );
  return (
    <TextField
      placeholder={placeholder ? t(placeholder) : t("search")}
      variant="outlined"
      label={label ? t(label) : t("search")}
      type="text"
      // error={showError}
      // helperText={showError && errors[name]}
      autoComplete="off"
      aria-autocomplete="none"
      spellCheck={false}
      // field of Formik have 4 important props
      onChange={(e) => handleInputOnchange(e)}
      {...rest}
    />
  );
}

export default SearchBar;
