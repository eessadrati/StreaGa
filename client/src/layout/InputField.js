import { TextField,Grid,Typography } from '@mui/material';
import React from 'react';

const InputField = ({...props}) => {
    const {placeholder,errorMessage, label,inputRef,length, ...others } = props;

    return (
        <>
           <TextField  
                    inputRef={inputRef}
                    placeholder={placeholder}
                    sx={{marginTop:'3vh'}}
                    label={label}
                    {...others}
                    />
            <Grid container>
                <Grid item xs={11}>
                    <Typography color="error" marginLeft='0.4vw'>{errorMessage}</Typography>
                </Grid>
                <Grid item xs={1}>
                    {length && <Typography  marginLeft='0.4vw'>{length}</Typography>}
                </Grid>
           </Grid>
        </>
    );
};

export default InputField;