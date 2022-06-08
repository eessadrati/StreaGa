import React from 'react';
import { IconButton, TextField } from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
const FileInput = (props) => {
    const {handleFileUpload}=props
    return (
        <>
          {/** <TextField
        id="input-with-icon-textfield"
        label="TextField"
        InputProps={{
          endAdornment: (
            <>
              <input
                style={{
                  display: "none"
                }}
                accept=".json"
                id="choose-file"
                type="file"
                onChange={handleFileUpload}
              />
              <label htmlFor="choose-file">
                <IconButton aria-label="upload">
                  <CameraAltIcon/>
                </IconButton>
              </label>
            </>
          ),
        }}
      /> */} 
    <form>
      <input
 style={{
      display: "none"
    }}
    accept="image/*"  // specify the file type that you wanted to accept
    id="choose-file"
    type="file"
    onChange={handleFileUpload}
  />
  <label htmlFor="choose-file">
      <CameraAltIcon  sx={{cursor:'pointer', color:'color.main'}}/>
  </label>
  </form>
    </>
    );
};

export default FileInput;