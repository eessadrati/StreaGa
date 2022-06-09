import React, { useState } from 'react'
import { Grid, Button, CssBaseline, Divider, Typography, TextField   } from '@mui/material/'
import InputField from './../layout/InputField'

function ChangePwd() {
    const [currentPassword,setCurrentPassword]=useState("");
    const [newPassword,setNewPassword]=useState("");
    const [confirmPassword,setConfirmPassword]=useState("");
    const [errorMessage,setErrorMessage]=useState("")
    const handleSavePassword=()=>{
        setErrorMessage("password incorrect")
    }
  return (
    <Grid container direction="column" spacing={1} sx={styles.container}>
        <Grid item xs={12}>
            <Typography variant="h6" component="h2">
                Change your password
            </Typography>
        </Grid>
        <Grid item sx={{width:'100%'}} >
            <InputField type="password" 
                        label="Current password" 
                        variant="outlined" 
                        value={currentPassword}
                        />
        </Grid>
        <Grid item >
            <InputField type="password"
                        label="New password" 
                        variant="outlined"
                        value={newPassword}
                         />
        </Grid>
        <Grid item >
            <InputField type="password"  
                        label="Confirm password" 
                        variant="outlined" 
                        value={confirmPassword}   
                        />
        </Grid>
        <Typography color="error" marginLeft='0.3vw' sx={{fontSize:'1vw'}}>{errorMessage}</Typography>
        <Grid item sx={styles.button} >
            <Button variant="contained" color="success" onClick={handleSavePassword} >
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