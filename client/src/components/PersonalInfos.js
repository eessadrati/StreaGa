import React, { useState } from 'react'
import { Grid, Button, CssBaseline, Divider, Typography,  } from '@mui/material/'
import InputField from './../layout/InputField'
import DateTimeField from './../layout/DateTimeField';
import DateField from '../layout/DateField';


function PersonalInfos(props) {
    const [username, setUsername]=useState('');
    const [usernameErr, setUsernameErr]=useState('')
    const [firstName, setFirstName]=useState('');
    const [firstNameErr, setFirstNameErr]=useState('');
    const [lastName, setLastName]=useState('');
    const [lastNameErr, setLastNameErr]=useState('');
    const [email, setEmail]=useState('');
    const [emailErr, setemailErr]=useState('');
    const [country, setCountry]=useState('');
    const [gender, setGender]=useState('');
    const [birthday, setBirthday]=useState();
    const [phone, setPhone]=useState('');
    const [phoneErr, setPhoneErr]=useState('');
  return (
    <Grid container direction="column" spacing={1} sx={styles.container}>
        <Grid item xs={6}>
            <InputField
                label="First Name"
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value.trim())}
                value={firstName}
              />
        </Grid>
        <Grid item xs={6}>
            <InputField
                label="Last Name"
                placeholder="Last Name"
                errorMessage={lastNameErr}
                onChange={(e) => setLastName(e.target.value.trim())}
                value={lastName}
              />
        </Grid>
        <Grid item xs={6}>
            <InputField
                label="Userame"
                placeholder="Userame"
                errorMessage={usernameErr}
                onChange={(e) => setUsername(e.target.value.trim())}
                value={username}
              />
        </Grid>
        <Grid item xs={6}>
            <InputField
                label="Email"
                placeholder="Email"
                errorMessage={emailErr}
                onChange={(e) => setEmail(e.target.value.trim())}
                value={email}
              />
        </Grid>
        <Grid item xs={6} >
            <InputField
                label="Phonr number"
                placeholder="Phonr number"
                errorMessage={phoneErr}
                onChange={(e) => setPhone(e.target.value.trim())}
                value={phone}
              />
        </Grid>
        
        <Grid item xs={6}>
            <DateField  label="Birthday" value={birthday} onDateChange={(newValue)=>{setBirthday(newValue)}}/>
        </Grid>
        <Grid item xs={6} >
            <InputField
                label="Gender"
                placeholder="Gender"
                onChange={(e) => setGender(e.target.value.trim())}
                value={gender}
              />
        </Grid>
        <Grid item xs={6} >
            <InputField
                label="Country"
                placeholder="Country"
                onChange={(e) => setCountry(e.target.value.trim())}
                value={country}
              />
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