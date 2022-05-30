import React from 'react'
import { Grid, Button, CssBaseline, Divider, Typography,  } from '@mui/material/'
import InputField from './../layout/InputField'

function CreateChannel() {
  return (
    <Grid container direction="column" spacing={1} sx={styles.container}>
        <Grid item >
            <InputField id="outlined-basic" label="Channel name" variant="outlined" />
        </Grid>
        <Grid item >
            <InputField id="outlined-basic" label="Add tags" variant="outlined" />
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

export default CreateChannel