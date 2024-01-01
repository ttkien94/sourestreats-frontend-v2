import React from "react";
import { InputAdornment, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";
import TitleCourse from "share/titleCourse";
import SearchIcon from "@mui/icons-material/Search";
import "./styles.scss";
function SearchCourseOnline(props) {
  const { t } = useTranslation("common");
  return (
    <div className="col-md-12">
      <div className="box-center  mt-3 px-3 py-3 ">
        <TitleCourse title="search" />
        {/**
          <TextField
            type="text"
            className="my-3"
            //   error={showError}
            //   helperText={showError && errors[name]}
            autoComplete="off"
            aria-autocomplete="none"
            spellCheck={false}
            // field of Formik have 4 important props
          /> */}
        <TextField
          variant="outlined"
          label={t("search-course")}
          className="my-3"
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <SearchIcon
                  className="iconSearch ml-2"
                  onClick={() => {
                    console.log("onClick");
                  }}
                />
              </InputAdornment>
            ),
          }}
        />
      </div>
    </div>
  );
}

export default SearchCourseOnline;
