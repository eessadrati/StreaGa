import { FormControl,InputLabel,Select,MenuItem,FormHelperText } from "@mui/material";
import React, { useState } from "react";

const SelectInput = (props) => {
    const {options,error,label,handleChange, sx,...others } = props;
    const [value,setValue]=useState("");
    const handleSelectChange=(event)=>{
        setValue(event.target.value);
      handleChange(event.target.value);
    }
  return (
    <>
      <FormControl sx={{ margin:'1vh 0vw', minWidth: 140,...sx }}  error={error ? true:false}>
        <InputLabel id="Select-label">{label}</InputLabel>
        <Select
          labelId="Select-label"
          id="select"
          value={value}
          label="Age"
          onChange={handleSelectChange}
          renderValue={(value) => `${value}`}
          {...others}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
            {options.map((option, i) => (
                <MenuItem value={option} key={i}>
                    {option}
                </MenuItem>
            ))}
        </Select>
        <FormHelperText>{error}</FormHelperText>
      </FormControl>
    </>
  );
};

export default SelectInput;
