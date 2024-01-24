import React from "react";
import { RadioGroup, Radio, FormControlLabel, FormGroup } from "@mui/material";
function RadioField() {
  return (
    <FormGroup>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormGroup>
  );
}

export default RadioField;
