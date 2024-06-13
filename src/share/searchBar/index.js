import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import _ from "lodash";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

function SearchBar(props) {
  const { placeholder, label, handleDebouceSearch, txtSearch, ...rest } = props;

  const { t } = useTranslation("common");
  const [txt, setTxt] = useState("");
  useEffect(() => {
    setTxt(txtSearch);
  }, [txtSearch]);

  const handleInputOnchange = (e) => {
    setTxt(e.target.value);
    handleDebouceSearch && debounceSearch.current(e.target.value);
  };
  const debounceSearch = useRef(
    _.debounce((text) => handleDebouceSearch(text), 700)
  );
  return (
    <TextField
      placeholder={placeholder ? t(placeholder) : t("search")}
      variant="standard"
      label={label ? t(label) : t("search")}
      type="text"
      // error={showError}
      // helperText={showError && errors[name]}
      autoComplete="off"
      aria-autocomplete="none"
      spellCheck={false}
      // field of Formik have 4 important props
      onChange={(e) => handleInputOnchange(e)}
      value={txt}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      {...rest}
    />
  );
}

export default SearchBar;
