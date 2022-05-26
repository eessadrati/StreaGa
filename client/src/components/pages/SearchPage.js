import React from "react";
import Filter from "./Filter";
import Navbar from "./Navbar";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

function SearchPage() {
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div>
      <FormControl component="fieldset" sx={{ marginLeft: "250px" }}>
        <FormGroup aria-label="position" row>
          <FormControlLabel
            value="video"
            control={<Checkbox />}
            label="Video"
            labelPlacement="end"
          />
          <FormControlLabel
            value="blog"
            control={<Checkbox />}
            label="Blog"
            labelPlacement="end"
          />
          <FormControlLabel
            value="event"
            control={<Checkbox />}
            label="Event"
            labelPlacement="end"
          />
          <FormControlLabel
            value="post"
            control={<Checkbox />}
            label="Post"
            labelPlacement="end"
          />
        </FormGroup>
      </FormControl>
      <Filter />
    </div>
  );
}
export default SearchPage;
