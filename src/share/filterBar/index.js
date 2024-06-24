import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import React, { useState } from "react";
import { Select } from "@mui/material";
// import { useTranslation } from "react-i18next";

function FilterBar(props) {
  const { data } = props;

  // const { t } = useTranslation("common");
  const [selected, setSelected] = useState("");
  const handleInputOnchange = (e) => {
    setSelected(e.target.value);
  };
  return (
    <FormControl variant="standard" sx={{ m: 2 }} fullWidth>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        onChange={(e) => handleInputOnchange(e)}
        value={selected}
        displayEmpty
      >
        <MenuItem value="" disabled>
          <em>All Course</em>
        </MenuItem>
        {data.map((item) => (
          <MenuItem key={item.id} value={item.value}>
            {item.value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default FilterBar;
