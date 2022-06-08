import { TextField, Grid, Typography, styled } from '@mui/material';
import React from 'react';

const InputField = ({...props}) => {
    const {placeholder,errorMessage, label,inputRef,length,sx, ...others } = props;
    const StyledTextField = {
        "& label": {
          color: "#ff0033"
        },
        "& label.Mui-focused": {
          color: "#ff0033"
        },
        "& .MuiInput-underline:after": {
          borderBottomColor: "#ff0033"
        },
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "#ff0033"
          },
          "&:hover fieldset": {
            borderColor: "#ff0033",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#ff0033"
          }
        }
      };
    return (
        <>
            {errorMessage ? (
                <TextField  
                        inputRef={inputRef}
                        placeholder={placeholder}
                        sx={{marginTop:'3vh',...StyledTextField,...sx}}
                        label={label}
                        {...others}
                        
                        />
            ):(
                <TextField  
                        inputRef={inputRef}
                        placeholder={placeholder}
                        sx={{marginTop:'3vh',...sx}}
                        label={label}
                        {...others}
                        />
            )} 
            <Grid container>
                <Grid item xs={11}>
                    <Typography color="error" marginLeft='0.3vw' sx={{fontSize:'1vw'}}>{errorMessage}</Typography>
                </Grid>
                <Grid item xs={1}>
                    {length && <Typography  marginLeft='0.4vw'>{length}</Typography>}
                </Grid>
           </Grid>
        </>
    );
};

export default InputField;