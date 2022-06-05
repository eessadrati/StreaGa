import React from "react";
import Filter from "./Filter";
import { Grid,CssBaseline } from "@mui/material";

function SearchPage() {
  
  const filterList = ["Lives","Videos", "Blogs", "Events"];
  const handleOptions = (selectedOptions) => {
    console.log("selectedOptions");
    console.log(selectedOptions);
  };
  return (
    <>
    <CssBaseline />
      <Grid>
      <Grid  sx={{marginLeft:'17vw'}}>
            <Filter options={filterList} handleOptions={handleOptions} />
      </Grid>
      {/** <FormControl component="fieldset" sx={{ marginLeft: "4px" }}>
        <FormGroup  row>
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
      </FormControl>*/}
      
      </Grid>
    </>
  );
}
export default SearchPage;
