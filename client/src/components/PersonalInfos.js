import React from 'react'
import { Grid, Button, CssBaseline, Divider, Typography,  } from '@mui/material/'
import InputField from './../layout/InputField'


function PersonalInfos() {
  return (
    <Grid container direction="column" spacing={1} sx={styles.container}>
        <Grid item >
            <InputField id="outlined-basic" label="Name" variant="outlined" value="Moha" />
        </Grid>
        <Grid item >
            <InputField id="outlined-basic" label="Username" variant="outlined" />
        </Grid>
        <Grid item >
            <InputField id="outlined-basic" label="Email" variant="outlined" />
        </Grid>
        <Grid item >
            <InputField id="outlined-basic" label="Phone Number" variant="outlined" />
        </Grid>
        <Grid item >
            <InputField id="outlined-basic" label="Birthday" variant="outlined" />
        </Grid>
        <Grid item >
            <InputField id="outlined-basic" label="Gender" variant="outlined" />
        </Grid>
        <Grid item sx={styles.button} >
            <Button variant="contained" color="success">
                Save
            </Button>
        </Grid>
    </Grid>
  )
}

const styles = {
  container: {
      marginLeft: '10px',
      display: 'flex',
      flexDirection: 'row'
  },
  button: {
      alignItems:'right' //??
  }
}


export default PersonalInfos