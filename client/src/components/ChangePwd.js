import React from 'react'
import { Grid, Button, CssBaseline, Divider, Typography, TextField   } from '@mui/material/'
import InputField from './../layout/InputField'

function ChangePwd() {
  return (
    <Grid container direction="column" spacing={1} sx={styles.container}>
        <Grid item xs={12}>
            <Typography variant="h6" component="h2">
                Change your password
            </Typography>
        </Grid>
        <Grid item sx={{width:'100%'}} >
            <InputField type="password" id="outlined-basic" label="Current password" variant="outlined" />
        </Grid>
        <Grid item >
            <InputField type="password" id="outlined-basic" label="New password" variant="outlined" />
        </Grid>
        <Grid item >
            <InputField type="password" id="outlined-basic" label="Confirm password" variant="outlined" />
        </Grid>
        <Grid item sx={styles.button} >
            <Button variant="contained" color="success">
                Confirm
            </Button>
        </Grid>
    </Grid>
  )
}

const styles = {
    container: {
        marginLeft: '10px',
    },
    button: {
        alignItems:'right' //??
    }
}

export default ChangePwd